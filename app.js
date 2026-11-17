(function () {
  "use strict";

  var DATA = window.S19_DATA;
  var STORAGE_KEY = "s19-mock-lineups";
  var CURRENT_KEY = "s19-mock-current";
  var MAX_POPULATION = 10;
  var ROWS = 4;
  var COLS = 7;
  var CENTER_ORDER = [3, 2, 4, 1, 5, 0, 6];
  var unitsById = {};
  var traitsByKey = {};

  DATA.units.forEach(function (unit) { unitsById[unit.id] = unit; });
  DATA.traits.forEach(function (trait) { traitsByKey[trait.key] = trait; });

  var state = {
    board: loadCurrentBoard(),
    search: "",
    cost: 0
  };

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }
  function $all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }
  function emptyBoard() {
    return Array(ROWS * COLS).fill(null);
  }
  function loadCurrentBoard() {
    try {
      var saved = JSON.parse(localStorage.getItem(CURRENT_KEY));
      if (Array.isArray(saved) && saved.length === ROWS * COLS) return saved;
    } catch (e) {}
    return emptyBoard();
  }
  function persistCurrent() {
    localStorage.setItem(CURRENT_KEY, JSON.stringify(state.board));
  }
  function boardIndex(row, col) {
    return row * COLS + col;
  }
  function roleLabel(role) {
    return role === "tank" ? "坦克" : role === "fighter" ? "战士" : "C位";
  }
  function roleRow(role) {
    return role === "tank" ? 0 : role === "fighter" ? 1 : 3;
  }
  function costClass(cost) {
    return "cost-" + cost;
  }
  function iconFallback(unit) {
    return '<span class="unit-fallback">' + unit.name.slice(0, 1) + "</span>";
  }
  function unitIcon(unit, className) {
    return '<img class="' + className + '" src="' + unit.icon + '" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">' +
      iconFallback(unit);
  }
  function countOnBoard(unitId) {
    return state.board.filter(function (id) { return id === unitId; }).length;
  }
  function activeUnitIds() {
    return state.board.filter(Boolean);
  }
  function chooseSlot(unit) {
    var preferredRow = roleRow(unit.role);
    for (var i = 0; i < CENTER_ORDER.length; i++) {
      var preferredIndex = boardIndex(preferredRow, CENTER_ORDER[i]);
      if (!state.board[preferredIndex]) return preferredIndex;
    }
    for (var index = 0; index < state.board.length; index++) {
      if (!state.board[index]) return index;
    }
    return -1;
  }
  function addUnit(unitId) {
    if (activeUnitIds().length >= MAX_POPULATION) {
      flashStatus("人口已满，先移除一个弈子");
      return;
    }
    var unit = unitsById[unitId];
    var slot = chooseSlot(unit);
    if (slot < 0) return;
    state.board[slot] = unitId;
    persistCurrent();
    render();
  }
  function removeUnit(index) {
    state.board[index] = null;
    persistCurrent();
    render();
  }
  function flashStatus(message) {
    var population = $("#population");
    var old = population.textContent;
    population.textContent = message;
    population.classList.add("is-alert");
    setTimeout(function () {
      population.textContent = old;
      population.classList.remove("is-alert");
    }, 1300);
  }
  function renderBoard() {
    var board = $("#board");
    board.innerHTML = "";
    state.board.forEach(function (unitId, index) {
      var cell = document.createElement("button");
      cell.className = "board-cell" + (unitId ? " occupied " + unitsById[unitId].role : "");
      cell.type = "button";
      cell.setAttribute("aria-label", unitId ? "移除 " + unitsById[unitId].name : "空棋盘位置");
      if (unitId) {
        var unit = unitsById[unitId];
        cell.innerHTML =
          '<span class="board-unit ' + costClass(unit.cost) + '">' +
            unitIcon(unit, "board-icon") +
            '<span class="board-unit-name">' + unit.name + "</span>" +
            '<span class="board-remove">×</span>' +
          "</span>";
        cell.addEventListener("click", function () { removeUnit(index); });
      } else {
        cell.innerHTML = '<span class="slot-plus">+</span>';
      }
      board.appendChild(cell);
    });
    var population = activeUnitIds().length;
    $("#population").textContent = population + " / " + MAX_POPULATION + " 人口";
    $("#population").classList.remove("is-alert");
  }
  function renderUnits() {
    var keyword = state.search.toLowerCase();
    var list = DATA.units.filter(function (unit) {
      var matchesSearch = !keyword ||
        unit.name.toLowerCase().indexOf(keyword) >= 0 ||
        unit.nameEn.toLowerCase().indexOf(keyword) >= 0 ||
        unit.traits.some(function (key) {
          return traitsByKey[key].name.toLowerCase().indexOf(keyword) >= 0 ||
            traitsByKey[key].nameEn.toLowerCase().indexOf(keyword) >= 0;
        });
      return matchesSearch && (!state.cost || unit.cost === state.cost);
    });
    $("#libraryCount").textContent = list.length + " / " + DATA.units.length;
    $("#emptyState").hidden = list.length > 0;
    var grid = $("#unitGrid");
    grid.innerHTML = "";
    list.forEach(function (unit) {
      var count = countOnBoard(unit.id);
      var card = document.createElement("button");
      card.type = "button";
      card.className = "unit-card " + costClass(unit.cost) + (count ? " is-used" : "");
      card.innerHTML =
        '<span class="unit-art">' + unitIcon(unit, "unit-icon") + '<span class="unit-cost">' + unit.cost + "</span></span>" +
        '<span class="unit-info"><strong>' + unit.name + '</strong><small>' + roleLabel(unit.role) + "</small></span>" +
        '<span class="unit-traits">' + unit.traits.map(function (key) { return traitsByKey[key].name; }).join(" · ") + "</span>" +
        (count ? '<span class="unit-used">已上场 ' + count + "</span>" : "");
      card.addEventListener("click", function () { addUnit(unit.id); });
      grid.appendChild(card);
    });
  }
  function renderTraits() {
    var counts = {};
    activeUnitIds().forEach(function (unitId) {
      unitsById[unitId].traits.forEach(function (key) {
        counts[key] = (counts[key] || 0) + 1;
      });
    });
    var traits = DATA.traits.map(function (trait) {
      var count = counts[trait.key] || 0;
      var current = trait.breakpoints.filter(function (point) { return count >= point; }).pop() || 0;
      var next = trait.breakpoints.find(function (point) { return count < point; });
      return { trait: trait, count: count, current: current, next: next };
    }).filter(function (item) { return item.count > 0; }).sort(function (a, b) {
      return (b.current - a.current) || (b.count - a.count);
    });
    $("#activeTraitCount").textContent = traits.filter(function (item) { return item.current > 0; }).length + " 激活";
    var list = $("#traitList");
    list.innerHTML = "";
    if (!traits.length) {
      list.innerHTML = '<p class="trait-empty">点击下方弈子，开始组建你的第一套阵容</p>';
      return;
    }
    traits.forEach(function (item) {
      var row = document.createElement("div");
      row.className = "trait-row " + (item.current ? "is-active" : "");
      var status = item.current ? item.current + " 档" : "还差 " + (item.next - item.count);
      row.innerHTML =
        '<span class="trait-mark">' + item.trait.name.slice(0, 1) + "</span>" +
        '<span class="trait-main"><strong>' + item.trait.name + '</strong><small>' + item.trait.nameEn + "</small></span>" +
        '<span class="trait-count">' + item.count + " <em>" + status + "</em></span>";
      list.appendChild(row);
    });
  }
  function getSavedLineups() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(saved) ? saved : [];
    } catch (e) {
      return [];
    }
  }
  function saveLineup() {
    var name = $("#lineupName").value.trim() || "未命名阵容";
    var saved = getSavedLineups();
    saved.unshift({ id: Date.now(), name: name, board: state.board.slice(), count: activeUnitIds().length });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved.slice(0, 20)));
    renderSaved();
    flashStatus("阵容已保存");
  }
  function loadLineup(lineup) {
    state.board = lineup.board.slice();
    persistCurrent();
    render();
  }
  function deleteLineup(id) {
    var saved = getSavedLineups().filter(function (lineup) { return lineup.id !== id; });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    renderSaved();
  }
  function renderSaved() {
    var saved = getSavedLineups();
    var list = $("#savedList");
    list.innerHTML = "";
    if (!saved.length) {
      list.innerHTML = '<p class="saved-empty">还没有保存的阵容</p>';
      return;
    }
    saved.forEach(function (lineup) {
      var card = document.createElement("div");
      card.className = "saved-card";
      card.innerHTML =
        '<span><strong></strong><small>' + lineup.count + " 个弈子</small></span>" +
        '<span class="saved-actions"><button class="text-button load-lineup">载入</button><button class="text-button delete-lineup">删除</button></span>';
      $("strong", card).textContent = lineup.name;
      $(".load-lineup", card).addEventListener("click", function () { loadLineup(lineup); });
      $(".delete-lineup", card).addEventListener("click", function () { deleteLineup(lineup.id); });
      list.appendChild(card);
    });
  }
  function render() {
    renderBoard();
    renderUnits();
    renderTraits();
    renderSaved();
  }

  $("#searchInput").addEventListener("input", function (event) {
    state.search = event.target.value.trim();
    renderUnits();
  });
  $all("#costFilters .filter-chip").forEach(function (button) {
    button.addEventListener("click", function () {
      $all("#costFilters .filter-chip").forEach(function (item) { item.classList.remove("active"); });
      button.classList.add("active");
      state.cost = Number(button.dataset.cost);
      renderUnits();
    });
  });
  $("#resetBtn").addEventListener("click", function () {
    state.board = emptyBoard();
    persistCurrent();
    render();
  });
  $("#saveBtn").addEventListener("click", saveLineup);
  render();
})();
