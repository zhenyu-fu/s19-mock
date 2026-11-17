/* TFT Set 19: Prismatic Tour
 * Source: https://blitz.gg/tft/set19
 * The English names, costs and trait membership come from the Set 19 PBE data.
 */
(function () {
  "use strict";

  var unitRows = [
    "ahri|DA_19_Ahri|阿狸|Ahri|4|KDA,Choreographer",
    "akali-kda|DA_19_Akali_KDA|阿卡丽（K/DA）|Akali|5|KDA",
    "akali-truedamage|DA_19_Akali_TrueDamage|阿卡丽（真实伤害）|Akali|5|TrueDamage,Freestyle",
    "alistar|DA_19_Alistar|阿利斯塔|Alistar|4|Country",
    "alune|DA_19_Alune|阿露恩|Alune|4|Heartsteel,Manager,Prodigy",
    "amumu|DA_19_Amumu|阿木木|Amumu|3|Emo",
    "annie|DA_19_Annie|安妮|Annie|2|IonicSpark,Arcanist,Juggernaut",
    "aphelios|DA_19_Aphelios|厄斐琉斯|Aphelios|5|Heartsteel",
    "ashe|DA_19_Ashe|艾希|Ashe|2|BeachPop,Swiftstriker",
    "aurora|DA_19_Aurora|奥罗拉|Aurora|4|IonicSpark,Renegade",
    "bard|DA_19_Bard|巴德|Bard|3|Jazz,Swiftstriker",
    "baronnashor|DA_19_BaronNashor|纳什男爵|Baron Nashor|7|OneMonsterBand",
    "braum|DA_19_Braum|布隆|Braum|3|Illbeats,Juggernaut",
    "briar|DA_19_Briar|贝蕾亚|Briar|3|IonicSpark,Slayer,Collab",
    "camille|DA_19_Camille|卡蜜尔|Camille|2|Rock,Slayer",
    "drmundo|DA_19_DrMundo|蒙多医生|Dr. Mundo|5|RecordMogul,Manager",
    "draven|DA_19_Draven|德莱文|Draven|3|Illbeats,Trickshot",
    "ekko|DA_19_Ekko|艾克|Ekko|3|TrueDamage,Juggernaut,Prodigy",
    "elise|DA_19_Elise|伊莉丝|Elise|1|IonicSpark,Frontman",
    "evelynn|DA_19_Evelynn|伊芙琳|Evelynn|3|KDA,Renegade",
    "ezreal|DA_19_Ezreal|伊泽瑞尔|Ezreal|2|Heartsteel,Encore",
    "galio|DA_19_Galio|加里奥|Galio|3|Jazz,Frontman",
    "garen|DA_19_Garen|盖伦|Garen|4|Synthwave,Choreographer",
    "gnar|DA_19_Gnar|纳尔|Gnar|1|Pentakill,Trickshot",
    "gragas|DA_19_Gragas|古拉加斯|Gragas|2|KDA,Juggernaut,Collab",
    "graves|DA_19_Graves|格雷福斯|Graves|4|BeachPop,Renegade",
    "gwen|DA_19_Gwen|格温|Gwen|5|IonicSpark,MelodicHeart",
    "illaoi|DA_19_Illaoi|俄洛伊|Illaoi|2|Illbeats,Frontman",
    "janna|DA_19_Janna|迦娜|Janna|5|GuFeng,Windblessed,Prodigy",
    "jax|DA_19_Jax|贾克斯|Jax|2|EDM,Bodyguard,Swiftstriker",
    "jhin|DA_19_Jhin|烬|Jhin|4|Classical,Encore",
    "jinx|DA_19_Jinx|金克丝|Jinx|4|IonicSpark,Hitmaker",
    "ksante|DA_19_KSante|奎桑提|K'Sante|3|Heartsteel,Bodyguard",
    "kaisa|DA_19_KaiSa|卡莎|Kai'Sa|3|KDA,Trickshot",
    "karthus|DA_19_Karthus|卡尔萨斯|Karthus|2|Pentakill,Arcanist,Collab",
    "katarina|DA_19_Katarina|卡特琳娜|Katarina|1|Classical,Slayer",
    "kayle|DA_19_Kayle|凯尔|Kayle|4|Pentakill,Swiftstriker",
    "kayn|DA_19_Kayn|凯隐|Kayn|1|Heartsteel,Slayer",
    "kennen|DA_19_Kennen|凯南|Kennen|1|TrueDamage,Bodyguard",
    "kobuko|DA_19_Kobuko|古博|Kobuko|1|Hyperpop,Frontman",
    "leesin|DA_19_LeeSin|李青|Lee Sin|5|GuFeng",
    "leona|DA_19_Leona|蕾欧娜|Leona|4|KDA,Bodyguard,Manager",
    "lillia|DA_19_Lillia|莉莉娅|Lillia|1|KDA,Bodyguard",
    "locke|DA_19_Locke|洛克|Locke|4|Rock,Swiftstriker",
    "lucian|DA_19_Lucian|卢锡安|Lucian|2|Jazz,Hitmaker,Encore",
    "lulu|DA_19_Lulu|璐璐|Lulu|2|Hyperpop,Choreographer",
    "lux|DA_19_Lux|拉克丝|Lux|2|IonicSpark,Prodigy",
    "malzahar|DA_19_Malzahar|玛尔扎哈|Malzahar|3|Composer,Prodigy",
    "mel|DA_19_Mel|梅尔|Mel|4|RAndB,Arcanist",
    "missfortune|DA_19_MissFortune|厄运小姐|Miss Fortune|5|8Bit,Hitmaker",
    "mordekaiser|DA_19_Mordekaiser|莫德凯撒|Mordekaiser|5|Pentakill",
    "nasus|DA_19_Nasus|内瑟斯|Nasus|2|Classical,Bodyguard",
    "neeko|DA_19_Neeko|妮蔻|Neeko|1|KDA,Encore,Prodigy",
    "nidalee|DA_19_Nidalee|奈德丽|Nidalee|5|Mariachi,Choreographer",
    "nunuandwillump|DA_19_NunuAndWillump|努努和威朗普|Nunu & Willump|5|Disco,Frontman",
    "olaf|DA_19_Olaf|奥拉夫|Olaf|1|Pentakill,Rock,Juggernaut",
    "pyke|DA_19_Pyke|派克|Pyke|5|Rock,Renegade",
    "qiyana|DA_19_Qiyana|奇亚娜|Qiyana|2|TrueDamage,Renegade",
    "rakan|DA_19_Rakan|洛|Rakan|7|BoyBand,Choreographer",
    "rell|DA_19_Rell|芮尔|Rell|5|RAndB,BeatMaster",
    "renataglasc|DA_19_RenataGlasc|烈娜塔|Renata Glasc|2|Classical,Choreographer",
    "renekton|DA_19_Renekton|雷克顿|Renekton|2|BeachPop,Frontman",
    "samira|DA_19_Samira|莎弥拉|Samira|2|Classical,Renegade,Trickshot",
    "senna|DA_19_Senna|赛娜|Senna|3|TrueDamage,Hitmaker",
    "seraphine|DA_19_Seraphine|萨勒芬妮|Seraphine|2|Indie",
    "sett|DA_19_Sett|瑟提|Sett|1|Heartsteel,Frontman,Collab",
    "shyvana|DA_19_Shyvana|希瓦娜|Shyvana|4|IonicSpark,Frontman",
    "smeech|DA_19_Smeech|斯米奇|Smeech|7|Jazz,Slayer",
    "sona|DA_19_Sona|娑娜|Sona|7|Producer,Collab",
    "swain|DA_19_Swain|斯维因|Swain|3|Rock,Arcanist,Frontman",
    "syndra|DA_19_Syndra|辛德拉|Syndra|3|BeachPop,Choreographer",
    "taliyah|DA_19_Taliyah|塔莉垭|Taliyah|5|BeachPop,Encore",
    "taric|DA_19_Taric|塔里克|Taric|1|BeachPop,Juggernaut",
    "teemo|DA_19_Teemo|提莫|Teemo|5|Hyperpop,HypeMan",
    "thresh|DA_19_Thresh|锤石|Thresh|4|Classical,Frontman",
    "tibbers|DA_19_Tibbers|提伯斯|Tibbers|3|IonicSpark,Bodyguard",
    "tristana|DA_19_Tristana|崔丝塔娜|Tristana|2|Hyperpop,Hitmaker",
    "twistedfate|DA_19_TwistedFate|卡牌大师|Twisted Fate|5|Tango,Trickshot",
    "varus|DA_19_Varus|韦鲁斯|Varus|1|Rock,Encore",
    "vayne|DA_19_Vayne|薇恩|Vayne|4|Rock,Trickshot",
    "vi|DA_19_Vi|蔚|Vi|5|EDM,Juggernaut",
    "viego|DA_19_Viego|佛耶戈|Viego|3|Pentakill,Choreographer,Slayer",
    "vladimir|DA_19_Vladimir|弗拉基米尔|Vladimir|5|Classical,Arcanist",
    "wukong|DA_19_Wukong|孙悟空|Wukong|4|GuFeng",
    "xayah|DA_19_Xayah|霞|Xayah|4|GuFeng,Hitmaker",
    "yasuo|DA_19_Yasuo|亚索|Yasuo|4|TrueDamage,Slayer",
    "yone|DA_19_Yone|永恩|Yone|4|Heartsteel,Slayer",
    "yorick|DA_19_Yorick|约里克|Yorick|4|Pentakill,Juggernaut",
    "yunara|DA_19_Yunara|悠娜拉|Yunara|1|IonicSpark,Swiftstriker",
    "yuumi|DA_19_Yuumi|悠米|Yuumi|4|Illbeats,Encore,Collab",
    "zac|DA_19_Zac|扎克|Zac|4|BeachPop,Juggernaut",
    "zeri|DA_19_Zeri|泽丽|Zeri|5|Goth,Swiftstriker",
    "ziggs|DA_19_Ziggs|吉格斯|Ziggs|1|Hyperpop,Arcanist,Swiftstriker",
    "zoe|DA_19_Zoe|佐伊|Zoe|1|BeachPop,Arcanist"
  ];

  var traitRows = [
    "8Bit|8-bit|8-Bit|8比特|origin|1",
    "Arcanist|arcanist|Arcanist|奥术师|class|2,4,6",
    "BeachPop|beach-pop|Beach Pop|海滩流行|origin|3,5,7",
    "BeatMaster|beat-master|Beat Master|节拍大师|origin|1",
    "Bodyguard|bodyguard|Bodyguard|护卫|class|2,4,6",
    "BoyBand|boy-band|Boy Band|男团|origin|1",
    "Choreographer|choreographer|Choreographer|编舞师|class|2,3,4,5",
    "Classical|classical|Classical|古典|origin|2,4,6",
    "Collab|collab|Collab|联动|class|3,5",
    "Composer|composer|Composer|作曲家|origin|1",
    "Country|country|Country|乡村|origin|1",
    "Disco|disco|Disco|迪斯科|origin|1",
    "EDM|edm|EDM|电子音乐|origin|2",
    "Emo|emo|Emo|情绪摇滚|origin|1",
    "Encore|encore|Encore|返场|class|2,4",
    "Freestyle|freestyle|Freestyle|自由式|origin|1",
    "Frontman|frontman|Frontman|主唱|class|2,4,6",
    "Goth|goth|Goth|哥特|origin|1",
    "GuFeng|gu-feng|Gu Feng|古风|origin|2,3,4",
    "Heartsteel|heartsteel|Heartsteel|心之钢|origin|1,3,5,7",
    "Hitmaker|hitmaker|Hitmaker|热门制作人|class|2,4",
    "HypeMan|hype-man|Hype Man|气氛担当|origin|1",
    "Hyperpop|hyperpop|Hyperpop|高能流行|origin|2,3,4,5",
    "Illbeats|illbeats|Illbeats|节拍怪才|origin|2,3,4",
    "Indie|indie|Indie|独立音乐|origin|1",
    "IonicSpark|ionic-spark|Ionic Spark|离子火花|origin|3,5,7,10",
    "Jazz|jazz|Jazz|爵士|origin|2,3,4",
    "Juggernaut|juggernaut|Juggernaut|主宰|class|2,4,6",
    "KDA|k-da|K/DA|K/DA|origin|3,5,7,10,13,15,21",
    "Manager|manager|Manager|经纪人|class|2,3,4",
    "Mariachi|mariachi|Mariachi|墨西哥乐队|origin|1",
    "MelodicHeart|melodic-heart|Melodic Heart|旋律之心|origin|1",
    "MysticalInstrument|mystical-instrument|Mystical Instrument|神秘乐器|class|0",
    "OneMonsterBand|one-monster-band|One Monster Band|独角乐队|origin|1",
    "Pentakill|pentakill|Pentakill|五杀摇滚|origin|3,5,7",
    "Prodigy|prodigy|Prodigy|神童|class|2,3,4,5",
    "Producer|producer|Producer|制作人|origin|1",
    "RAndB|r-and-b|R&B|节奏布鲁斯|origin|1,2",
    "RecordMogul|record-mogul|Record Mogul|唱片大亨|origin|1",
    "Renegade|renegade|Renegade|叛徒|class|2,3,4,5",
    "RisingStar|rising-star|Rising Star|新星|origin|1",
    "Rock|rock|Rock|摇滚|origin|3,4,5,7",
    "Slayer|slayer|Slayer|裁决使|class|2,4,6",
    "Superstar|superstar|Superstar|超级明星|origin|1",
    "Swiftstriker|swiftstriker|Swiftstriker|迅捷射手|class|2,3,4,5",
    "Synthwave|synthwave|Synthwave|合成波|origin|1",
    "Tango|tango|Tango|探戈|origin|1",
    "Trickshot|trickshot|Trickshot|弹射|class|2,3,4",
    "TrueDamage|true-damage|True Damage|真实伤害|origin|3,5",
    "Windblessed|windblessed|Windblessed|风佑|origin|1"
  ];

  var roleRows = [
    "DA_19_Ahri|carry", "DA_19_Akali_KDA|fighter", "DA_19_Akali_TrueDamage|fighter",
    "DA_19_Alistar|tank", "DA_19_Alune|carry", "DA_19_Amumu|tank",
    "DA_19_Annie|tank", "DA_19_Aphelios|carry", "DA_19_Ashe|carry",
    "DA_19_Aurora|carry", "DA_19_Bard|carry", "DA_19_BaronNashor|fighter",
    "DA_19_Braum|tank", "DA_19_Briar|fighter", "DA_19_Camille|fighter",
    "DA_19_DrMundo|tank", "DA_19_Draven|carry", "DA_19_Ekko|tank",
    "DA_19_Elise|tank", "DA_19_Evelynn|fighter", "DA_19_Ezreal|carry",
    "DA_19_Galio|tank", "DA_19_Garen|tank", "DA_19_Gnar|fighter",
    "DA_19_Gragas|tank", "DA_19_Graves|fighter", "DA_19_Gwen|fighter",
    "DA_19_Illaoi|tank", "DA_19_Janna|carry", "DA_19_Jax|fighter",
    "DA_19_Jhin|carry", "DA_19_Jinx|carry", "DA_19_KSante|tank",
    "DA_19_KaiSa|carry", "DA_19_Karthus|carry", "DA_19_Katarina|fighter",
    "DA_19_Kayle|carry", "DA_19_Kayn|fighter", "DA_19_Kennen|tank",
    "DA_19_Kobuko|tank", "DA_19_LeeSin|fighter", "DA_19_Leona|tank",
    "DA_19_Lillia|tank", "DA_19_Locke|fighter", "DA_19_Lucian|carry",
    "DA_19_Lulu|carry", "DA_19_Lux|carry", "DA_19_Malzahar|carry",
    "DA_19_Mel|carry", "DA_19_MissFortune|carry", "DA_19_Mordekaiser|fighter",
    "DA_19_Nasus|tank", "DA_19_Neeko|carry", "DA_19_Nidalee|fighter",
    "DA_19_NunuAndWillump|tank", "DA_19_Olaf|fighter", "DA_19_Pyke|fighter",
    "DA_19_Qiyana|fighter", "DA_19_Rakan|fighter", "DA_19_Rell|tank",
    "DA_19_RenataGlasc|carry", "DA_19_Renekton|tank", "DA_19_Samira|carry",
    "DA_19_Senna|carry", "DA_19_Seraphine|carry", "DA_19_Sett|tank",
    "DA_19_Shyvana|tank", "DA_19_Smeech|fighter", "DA_19_Sona|carry",
    "DA_19_Swain|tank", "DA_19_Syndra|carry", "DA_19_Taliyah|carry",
    "DA_19_Taric|tank", "DA_19_Teemo|carry", "DA_19_Thresh|tank",
    "DA_19_Tibbers|tank", "DA_19_Tristana|carry", "DA_19_TwistedFate|carry",
    "DA_19_Varus|carry", "DA_19_Vayne|carry", "DA_19_Vi|fighter",
    "DA_19_Viego|fighter", "DA_19_Vladimir|fighter", "DA_19_Wukong|tank",
    "DA_19_Xayah|carry", "DA_19_Yasuo|fighter", "DA_19_Yone|fighter",
    "DA_19_Yorick|tank", "DA_19_Yunara|carry", "DA_19_Yuumi|carry",
    "DA_19_Zac|tank", "DA_19_Zeri|carry", "DA_19_Ziggs|carry",
    "DA_19_Zoe|carry"
  ];
  var roleMap = {};
  roleRows.forEach(function (row) {
    var parts = row.split("|");
    roleMap[parts[0]] = parts[1];
  });

  function parseUnits() {
    return unitRows.map(function (row) {
      var parts = row.split("|");
      return {
        id: parts[0],
        apiKey: parts[1],
        name: parts[2],
        nameEn: parts[3],
        cost: Number(parts[4]),
        role: roleMap[parts[1]] || "carry",
        traits: parts[5].split(","),
        icon: "https://blitz-cdn.blitz.gg/blitz/tft/champion_squares/set19/" + parts[1] + ".webp"
      };
    });
  }

  function parseTraits() {
    return traitRows.map(function (row) {
      var parts = row.split("|");
      return {
        key: parts[0],
        id: parts[1],
        name: parts[3],
        nameEn: parts[2],
        type: parts[4],
        breakpoints: parts[5].split(",").map(Number),
        members: []
      };
    });
  }

  var units = parseUnits();
  var traits = parseTraits();
  var traitMap = {};

  traits.forEach(function (trait) {
    traitMap[trait.key] = trait;
  });
  units.forEach(function (unit) {
    unit.traits.forEach(function (traitKey) {
      if (traitMap[traitKey]) traitMap[traitKey].members.push(unit.id);
    });
  });

  window.S19_DATA = {
    set: 19,
    name: "Prismatic Tour",
    units: units,
    traits: traits,
    counts: {
      units: units.length,
      traits: traits.length
    },
    source: "Blitz TFT Set 19 PBE data"
  };
})();
