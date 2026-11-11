/*!
 * Source: PRTS Wiki (https://prts.wiki/)
 * Per-entry page links are in each module's "source" field.
 * License: CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 * 已摘录整理：仅保留基础游戏模组的天赋/效果文本，去除了 wiki 标记、
 * 材料、等级数值和无关页面内容；非商业使用，游戏内以实际为准。
 * 本文件是可选插件，不并入 data/stronghold.js 或 data/closure.js 的运行时对象。
 */
window.SP_PRTS = {
  version: 1,
  modules: {
  "sbell2": {
    "name": "圣聆初雪",
    "moduleName": "千分之一的心",
    "type": "PLX-Y",
    "talent": "无垠的雪景",
    "unlock": "精英化2 Lv.60",
    "effect": "攻击范围内的地面每隔5.5秒产生一层积雪，地面敌人经过时立即受到相当于攻击力75%的法术伤害，每层积雪使经过的所有敌人移动速度下降12%，最多叠加5层（首个敌人离开该地块时积雪消失）",
    "source": "https://prts.wiki/w/%E5%9C%A3%E8%81%86%E5%88%9D%E9%9B%AA",
    "sourceName": "PRTS",
    "license": "CC BY-NC-SA 4.0"
  },
  "gnosis": {
    "name": "灵知",
    "moduleName": "“誓言”",
    "type": "UMD-X",
    "talent": "坚冰",
    "unlock": "精英化2 Lv.60",
    "effect": "攻击造成1秒寒冷；范围内寒冷的敌人受到25%的脆弱，范围内冻结的敌人脆弱效果提升至2倍",
    "source": "https://prts.wiki/w/%E7%81%B5%E7%9F%A5",
    "sourceName": "PRTS",
    "license": "CC BY-NC-SA 4.0"
  },
  "pramanix": {
    "name": "初雪",
    "moduleName": "“续针”",
    "type": "UMD-X",
    "talent": "双响",
    "unlock": "精英化2 Lv.50",
    "effect": "攻击时同时攻击两个目标",
    "source": "https://prts.wiki/w/%E5%88%9D%E9%9B%AA",
    "sourceName": "PRTS",
    "license": "CC BY-NC-SA 4.0"
  },
  "harold": {
    "name": "哈洛德",
    "moduleName": "腿部护理套装",
    "type": "WDM-X",
    "talent": "我即军营",
    "unlock": "精英化2 Lv.50",
    "effect": "攻击范围内元素损伤累计超过一半的目标受到的元素损伤降低15%",
    "source": "https://prts.wiki/w/%E5%93%88%E6%B4%9B%E5%BE%B7",
    "sourceName": "PRTS",
    "license": "CC BY-NC-SA 4.0"
  },
  "degen": {
    "name": "锏",
    "moduleName": "“过往的注脚”",
    "type": "SWO-X",
    "talent": "“天生的武者”",
    "unlock": "精英化2 Lv.60",
    "effect": "造成伤害时有10%的几率攻击力提升至160%，并使目标战栗5秒",
    "source": "https://prts.wiki/w/%E9%94%8F",
    "sourceName": "PRTS",
    "license": "CC BY-NC-SA 4.0"
  },
  "kjera": {
    "name": "耶拉",
    "moduleName": "以雪为线",
    "type": "FUN-Y",
    "talent": "低眉",
    "unlock": "精英化2 Lv.50",
    "effect": "攻击力+10%，攻击范围内存在2格以上的地面地形时，改为攻击力+16%",
    "source": "https://prts.wiki/w/%E8%80%B6%E6%8B%89",
    "sourceName": "PRTS",
    "license": "CC BY-NC-SA 4.0"
  },
  "yak": {
    "name": "角峰",
    "moduleName": "父亲的袍子",
    "type": "PRO-Y",
    "talent": "雪原卫士",
    "unlock": "精英化2 Lv.40",
    "effect": "法术抗性+15",
    "source": "https://prts.wiki/w/%E8%A7%92%E5%B3%B0",
    "sourceName": "PRTS",
    "license": "CC BY-NC-SA 4.0"
  },
  "snhunt": {
    "name": "雪猎",
    "moduleName": "过去的狩猎",
    "type": "HUN-X",
    "talent": "裂云一击",
    "unlock": "精英化2 Lv.50",
    "effect": "开启技能时，派出裂云兽进行攻击，造成相当于攻击力180%的物理伤害和3秒寒冷",
    "source": "https://prts.wiki/w/%E9%9B%AA%E7%8C%8E",
    "sourceName": "PRTS",
    "license": "CC BY-NC-SA 4.0"
  }
}
};
