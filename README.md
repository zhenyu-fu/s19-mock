# S19 阵容模拟器数据

当前数据来自 TFT Set 19 `Prismatic Tour` 的 PBE 数据页：

- https://blitz.gg/tft/set19
- https://blitz.gg/tft/articles/tft-set-19-champions-traits-unlocks

## 当前内容

- 94 个弈子
- 50 条羁绊
- 弈子费用
- 英文名和中文显示名
- 弈子与羁绊关联
- 羁绊类型和层级
- Blitz CDN 图标地址

## 使用方式

```html
<script src="data.js"></script>
<script>
  console.log(S19_DATA.units);
  console.log(S19_DATA.traits);
</script>
```

## 数据说明

当前版本优先整理阵容模拟需要的静态字段。羁绊的完整效果文本、弈子技能、解锁任务和装备数据暂未加入，后续可以在不改变现有 ID 和关联关系的前提下补充。

## 初版模拟器

- 点击弈子卡片即可加入棋盘，不使用复杂拖拽
- 坦克自动进入第一排，战士/刺客自动进入第二排，法师/射手等 C 位自动进入最后一排
- 每一排从中间向左右交替占位，减少单侧堆叠
- 点击棋盘上的弈子即可移除
- 实时统计人口和激活羁绊
- 阵容保存到浏览器 `localStorage`
