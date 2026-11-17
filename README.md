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
- 弈子技能中文名称与说明
- 羁绊中文效果与激活层级说明
- Blitz CDN 弈子头像地址（加载失败时显示文字头像）

## 使用方式

```html
<script src="data.js"></script>
<script>
  console.log(S19_DATA.units);
  console.log(S19_DATA.traits);
</script>
```

## 数据说明

技能与羁绊说明内置在 `details.js`，来源为 TFT Set 19 PBE 数据。头像继续使用 Blitz CDN 地址，不需要把图片资源提交到仓库。

## 初版模拟器

- 点击弈子卡片即可加入棋盘，不使用复杂拖拽
- 点击羁绊查看羁绊效果和激活层级
- 点击弈子查看技能；未上场弈子会同时自动加入棋盘，已上场弈子只打开详情
- 坦克自动进入第一排，战士/刺客自动进入第二排，法师/射手等 C 位自动进入最后一排
- 每一排从中间向左右交替占位，减少单侧堆叠
- 点击棋盘上的弈子即可移除
- 实时统计人口和激活羁绊
- 阵容保存到浏览器 `localStorage`
