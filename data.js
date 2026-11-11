/*!
 * Project composition file. Poster layout/default user content only.
 * Game data is loaded from data/stronghold.js and data/closure.js.
 * PRTS module effects are an optional separate plugin: data/prts.js / window.SP_PRTS.
 */
(function () {
  const S = window.SP_SOURCES || {};
  const sh = S.stronghold || { operators: {} };
  const cl = S.closure || { operatorMeta: {}, bondLibrary: {}, strategyLibrary: {} };
  const poster = {
  "schemaVersion": 3,
  "meta": {
    "title": "谢拉格冻结叠层",
    "subtitle": "规程 · 谢拉格",
    "version": "SP-03",
    "rating": "S",
    "tags": [
      "3谢起手",
      "400+层",
      "L5停手"
    ],
    "author": "玩家攻略",
    "date": "2026-11-09",
    "difficulty": "标准 / 险境 / 绝境",
    "mode": "单人 / 联机通用",
    "disclaimer": "非官方、非盈利攻略。机制与数值以游戏内为准；素材版权归鹰角网络所有。",
    "sources": [
      {
        "label": "可露希尔Wiki · 卫戍协议：规程",
        "url": "https://closure.wiki/zh-cn/stronghold-protocol/3",
        "note": "盟约、干员特质、装备与策略数据"
      },
      {
        "label": "Stronghold Protocol · GitHub",
        "url": "https://github.com/Misyra/Stronghold-Protocol",
        "note": "社区规则整理与机制核对"
      },
      {
        "label": "TapTap · 以盟约为导向的基础叠层攻略",
        "url": "https://www.taptap.cn/moment/790365001285108711",
        "note": "各盟约叠层手速查"
      },
      {
        "label": "9game · 谢拉格轮椅队打法指南",
        "url": "https://a.9game.cn/mrfz/11561342.html",
        "note": "旧版谢拉格节奏参考"
      }
    ],
    "libraryVersion": "社区表112 · 未含塔露拉 · 规程当期141 · v3",
    "proof": "实测 400+ 层",
    "boardNote": "核心 3 人不建议替，其余先顶位保 3 谢",
    "credit": "",
    "shareUrl": ""
  },
  "coreOperators": [
    {
      "operatorId": "sbell2",
      "role": "主叠层"
    },
    {
      "operatorId": "gnosis",
      "role": "冻结"
    },
    {
      "operatorId": "pramanix",
      "role": "副叠层"
    },
    {
      "operatorId": "harold",
      "role": "治疗"
    },
    {
      "operatorId": "degen",
      "role": "Boss"
    },
    {
      "operatorId": "svash2",
      "role": "上限"
    }
  ],
  "board": {
    "cols": 8,
    "rows": 4,
    "placements": [
      {
        "operatorId": "kjera",
        "col": 0,
        "row": 0,
        "facing": "left"
      },
      {
        "operatorId": "svash2",
        "col": 2,
        "row": 1,
        "facing": "right"
      },
      {
        "operatorId": "sbell2",
        "col": 3,
        "row": 1,
        "facing": "right"
      },
      {
        "operatorId": "pramanix",
        "col": 4,
        "row": 1,
        "facing": "right"
      },
      {
        "operatorId": "gnosis",
        "col": 5,
        "row": 1,
        "facing": "right"
      },
      {
        "operatorId": "harold",
        "col": 4,
        "row": 0,
        "facing": "right"
      },
      {
        "operatorId": "degen",
        "col": 5,
        "row": 2,
        "facing": "right"
      },
      {
        "operatorId": "yak",
        "col": 6,
        "row": 2,
        "facing": "right"
      }
    ]
  },
  "stages": [
    {
      "id": "r1-6",
      "label": "R1-6",
      "recruit": [
        "yak",
        "harold",
        "snhunt",
        "pramanix",
        "gnosis",
        "kjera",
        "sbell2"
      ],
      "lineupSource": "manual",
      "lineup": [
        "yak",
        "pramanix",
        "gnosis",
        "kjera",
        "sbell2"
      ],
      "note": "3谢齐，开始找灵知"
    },
    {
      "id": "r7-13",
      "label": "R7-13",
      "recruit": [
        "svash2",
        "degen",
        "harold"
      ],
      "lineupSource": "manual",
      "lineup": [
        "yak",
        "pramanix",
        "gnosis",
        "kjera",
        "sbell2",
        "svash2",
        "degen",
        "harold"
      ],
      "note": "L4，冻结区必须重叠"
    },
    {
      "id": "boss",
      "label": "BOSS战",
      "recruit": [],
      "lineupSource": "board",
      "lineup": [
        "kjera",
        "svash2",
        "sbell2",
        "pramanix",
        "gnosis",
        "harold",
        "degen",
        "yak"
      ],
      "note": "400层，准备Boss"
    }
  ],
  "equipment": [
    {
      "operatorId": "sbell2",
      "must": [
        "multi_supplement"
      ],
      "big": [
        "arcane_array"
      ],
      "optional": [
        "originium_solvent",
        "pegasus_glory"
      ]
    },
    {
      "operatorId": "degen",
      "must": [
        "pegasus_glory"
      ],
      "big": [
        "dual_arm"
      ],
      "optional": [
        "m3_carapace",
        "egir_blade"
      ]
    },
    {
      "operatorId": "harold",
      "must": [
        "swift_ration"
      ],
      "big": [
        "reliable_watch"
      ],
      "optional": [
        "pegasus_glory",
        "arcane_array"
      ]
    }
  ],
  "equipmentNotes": {
    "sbell2": "先补剂叠层，再考虑输出；别裸奔。",
    "degen": "只负责 Boss 爆发；活着开出技能。",
    "harold": "层数转治疗；回转装让奶更勤，别给输出装。"
  },
  "bench": [
    "snhunt",
    "bldsk",
    "cetsyr",
    "archet",
    "lisa"
  ],
  "strategy": {
    "main": "",
    "alternatives": [],
    "reason": "",
    "posterText": {}
  },
  "legacy": {
    "notes": [
        {
            "type": "ok",
            "text": "主叠层：圣聆 + 初雪；输出：圣聆 / 锏"
        },
        {
            "type": "warn",
            "text": "层数不涨先调站位，别急着 D 牌"
        },
        {
            "type": "bad",
            "text": "Boss 免控就转真伤；6谢顺路不拆 C"
        }
    ],
    "route": [
      {
        "round": "1",
        "operatorIds": [
          "yak",
          "harold"
        ]
      },
      {
        "round": "2",
        "operatorIds": [
          "yak",
          "harold",
          "snhunt"
        ]
      },
      {
        "round": "3",
        "operatorIds": [
          "yak",
          "harold",
          "snhunt",
          "pramanix"
        ],
        "note": "3谢齐，开始找灵知"
      },
      {
        "round": "4",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "harold"
        ]
      },
      {
        "round": "5",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera"
        ]
      },
      {
        "round": "6",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2"
        ]
      },
      {
        "round": "7",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2"
        ],
        "note": "L4，冻结区必须重叠"
      },
      {
        "round": "8",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2",
          "svash2"
        ]
      },
      {
        "round": "9",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2",
          "svash2"
        ]
      },
      {
        "round": "10",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2",
          "svash2",
          "degen"
        ]
      },
      {
        "round": "11",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2",
          "svash2",
          "degen",
          "harold"
        ]
      },
      {
        "round": "12",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2",
          "svash2",
          "degen",
          "harold"
        ]
      },
      {
        "round": "13",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2",
          "svash2",
          "degen",
          "harold"
        ],
        "note": "400层，准备Boss"
      },
      {
        "round": "14",
        "operatorIds": [
          "yak",
          "pramanix",
          "gnosis",
          "kjera",
          "sbell2",
          "svash2",
          "degen",
          "harold"
        ]
      }
    ],
    "bonds": [
      {
        "bondId": "kjerag",
        "active": 8,
        "thresholds": [
          3,
          6
        ]
      },
      {
        "bondId": "swift",
        "active": 1,
        "thresholds": [
          2,
          40
        ]
      },
      {
        "bondId": "skillful",
        "active": 1,
        "thresholds": [
          2,
          40
        ]
      },
      {
        "bondId": "arcane",
        "active": 1,
        "thresholds": [
          2,
          3
        ]
      },
      {
        "bondId": "steadfast",
        "active": 1,
        "thresholds": [
          2,
          3
        ]
      },
      {
        "bondId": "precision",
        "active": 0,
        "thresholds": [
          2,
          3
        ]
      }
    ]
  }
};
  const extras = {
  "sbell2": {
    "role": "主叠层 / 道中主 C",
    "roleKey": "stack",
    "why": "全队最重要的收层口。她的射程覆盖哪里，谢拉格的层数就从哪里长出来。道中也是主要清杂输出来源。",
    "position": "站在灵知冻结区中心，和初雪射程重叠；不要顶第一排。",
    "timing": "R7 开始找，R9 上 L5 后重点搜；来两张就锁，优先升精锐。",
    "equip": [
      "multi_supplement",
      "arcane_array"
    ],
    "equipWhy": "多功能补剂把伤害转成层数；奥术法阵补生存和沉默。Boss 前可换源石溶剂 / 天马之耀。",
    "substitute": "没有圣聆初雪：先用初雪单核，R9 后继续搜；不要用外援替代收层口。"
  },
  "pramanix": {
    "role": "副叠层 / 前期核心",
    "roleKey": "stack",
    "why": "前期唯一稳定的收层口，也是圣聆初雪没来之前的过渡核心。和灵知射程重叠才有用，单独站等于白板。",
    "position": "与灵知、圣聆初雪三角重叠；放在灵知侧后方，别站最前。",
    "timing": "R3–R7 优先精锐；R9 后即使圣聆初雪来了也保留，3 谢不能断。",
    "equip": [
      "kjerag_ice",
      "multi_supplement"
    ],
    "equipWhy": "不融冰补寒冷；多功能补剂让她自己也能叠。不要给输出装。",
    "substitute": "没有初雪：用雪猎 / 极光先顶 3 谢，但收层速度会明显下降。"
  },
  "gnosis": {
    "role": "冻结发动机",
    "roleKey": "engine",
    "why": "2 技能大范围冻结，是初雪 / 圣聆初雪的触发器。没有灵知，谢拉格层数会明显变慢；有了灵知但射程不重叠，同样不涨层。",
    "position": "敌人来路侧，放在角峰身后；冻结范围必须盖住初雪 / 圣聆的射程。",
    "timing": "R4–R7 的第一目标。D 牌前先看有没有灵知，别先追输出。",
    "equip": [
      "swift_ration",
      "reliable_watch"
    ],
    "equipWhy": "迅捷作战粮 + 可靠怀表把 2 技能转起来；不需要输出装。",
    "substitute": "没有灵知：先用角峰 + 不融冰硬铺寒冷，但层数上限会低很多，R9 后继续搜。"
  },
  "kjera": {
    "role": "装备供给 / 寒冷源",
    "roleKey": "support",
    "why": "不融冰的主要来源。把冰给初雪 / 灵知，冻结覆盖率直接上一个档。她不是输出，别让她抢击杀。",
    "position": "角落朝左面壁，尽量不攻击；装备发完可以卖。",
    "timing": "R4 前拿到最好；R7 / R10 / R13 记得收冰。",
    "equip": [
      "kjerag_ice",
      "snow_robe"
    ],
    "equipWhy": "自己带冰补触发；雪祀之衣降低被瞄准概率，方便面壁。",
    "substitute": "没有耶拉：靠角峰 + 灵知硬铺，或从机变 / 装备里找不融冰。"
  },
  "yak": {
    "role": "前期前排 / 寒冷",
    "roleKey": "tank",
    "why": "T1 就能拿的谢拉格前排，前期凑 3 谢、提供第一段寒冷。不要让他输出太高，活下来就行。",
    "position": "最右 / 最前，先接敌；灵知站他身后。",
    "timing": "R1–R3 看到就抓；后期 3 谢不够时留，够则换锏或奶。",
    "equip": [
      "steadfast_shield",
      "m3_carapace"
    ],
    "equipWhy": "坚守盾牌撑防；M3 茧甲给一次复活。",
    "substitute": "没有角峰：用任意坚守 / 重装先顶，但会失去谢拉格计数和寒冷。"
  },
  "harold": {
    "role": "治疗 / 层数转奶",
    "roleKey": "support",
    "why": "这套的奶位。谢拉格层数越高，他的治疗量越高；负责奶住角峰、锏和前排。没有他，Boss 战前排容易融。",
    "position": "后排安全位，射程覆盖角峰 / 锏；不要上前线。",
    "timing": "R4–R7 有就留；R9 后追精锐，优先保住奶位。",
    "equip": [
      "swift_ration",
      "reliable_watch"
    ],
    "equipWhy": "回转装让治疗更勤；天马之耀是奢侈备选，加攻加血。不要给输出装。",
    "substitute": "没有哈洛德：用其他奶 / 流明 / 华法琳顶，但会失去谢拉格计数和层数转奶。"
  },
  "svash2": {
    "role": "叠层上限放大器",
    "roleKey": "support",
    "why": "把圣聆初雪的每回合上限从 48 抬到更高。不是输出，站位错了等于白带。",
    "position": "放在圣聆初雪正后方一格，两人同朝向；不要放反。",
    "timing": "R9 上 L5 后找；来之前先把圣聆初雪的位置留好。",
    "equip": [
      "agile_gloves",
      "multi_supplement"
    ],
    "equipWhy": "灵巧涡轮手套补攻速；多功能补剂让他也蹭层数。",
    "substitute": "没有凛御：圣聆初雪仍能叠，但上限低一截；不要用普通银灰替代（本规程卡池没有）。"
  },
  "degen": {
    "role": "Boss 终端 / 爆发",
    "roleKey": "dps",
    "why": "Boss 战把层数换成爆发。道中不需要她，R11 后再重点找。",
    "position": "Boss 路径侧翼，别和角峰抢主坦；有奶 / 复活装更稳。",
    "timing": "R11–R13 重点搜；没有锏就用圣聆初雪主 C，Boss 会慢一点。",
    "equip": [
      "pegasus_glory",
      "dual_arm"
    ],
    "equipWhy": "天马之耀 / 双模机械臂二选一；第三件可 M3 茧甲。",
    "substitute": "没有锏：圣聆初雪单 C，补一个外援输出；哈洛德继续奶，不要让他当 C。"
  },
  "snhunt": {
    "role": "获得时叠层",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": "",
    "text": "获得时 +4 层（精锐 +8）。前期拿来凑 3 谢 / 精准，R10 后可卖。"
  },
  "bldsk": {
    "role": "灵巧外援 / 叠层",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": "",
    "text": "战斗开始给身前一格干员「开技能 +1 / +2 层」特质，最多 7 / 14 层。"
  },
  "cetsyr": {
    "role": "万能外援 / 核心层",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": "",
    "text": "休整期结束时，已激活核心盟约 +10 / +20 层。来就上，替雪猎 / 极光。"
  },
  "archet": {
    "role": "精准挂件 / 对空",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": "",
    "text": "进入休整期时自身及身前一格已激活盟约 +3 层；补精准 / 对空。"
  },
  "lisa": {
    "role": "获得时触发器",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": "",
    "text": "休整期触发身前一格「获得时」特质。可配合雪猎 / 极光，但占人口。"
  },
  "char_498_inside": {
    "role": "速射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_306_leizi": {
    "role": "链术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4137_udflow": {
    "role": "哨戒铁卫",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_494_vendla": {
    "role": "咒愈师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_145_prove": {
    "role": "重射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_102_texas": {
    "role": "尖兵",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4100_caper": {
    "role": "回环射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_196_sunbr": {
    "role": "守护者",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_127_estell": {
    "role": "强攻手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_258_podego": {
    "role": "凝滞师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_253_greyy": {
    "role": "扩散术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_469_indigo": {
    "role": "秘术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_337_utage": {
    "role": "武者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_496_wildmn": {
    "role": "冲锋手",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_107_liskam": {
    "role": "哨戒铁卫",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_279_excu": {
    "role": "散射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_108_silent": {
    "role": "医师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4122_grabds": {
    "role": "凝滞师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4139_papyrs": {
    "role": "链愈师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_143_ghost": {
    "role": "强攻手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_381_bubble": {
    "role": "铁卫",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_491_humus": {
    "role": "收割者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4040_rockr": {
    "role": "驭械术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4016_kazema": {
    "role": "傀儡师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_237_gravel": {
    "role": "处决者",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4191_tippi": {
    "role": "巡空者",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_181_flower": {
    "role": "群愈师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_140_whitew": {
    "role": "领主",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4207_branch": {
    "role": "不屈者",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_431_ashlok": {
    "role": "要塞",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4151_tinman": {
    "role": "炼金师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_103_angel": {
    "role": "速射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_294_ayer": {
    "role": "领主",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_308_swire": {
    "role": "教官",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1033_swire2": {
    "role": "行商",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_263_skadi": {
    "role": "无畏者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4148_philae": {
    "role": "本源铁卫",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_388_mint": {
    "role": "阵法术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4079_haini": {
    "role": "削弱者",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_440_pinecn": {
    "role": "散射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_423_blemsh": {
    "role": "守护者",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4054_malist": {
    "role": "驭械术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_150_snakek": {
    "role": "铁卫",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_126_shotst": {
    "role": "速射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4026_vulpis": {
    "role": "尖兵",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_427_vigil": {
    "role": "战术家",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4194_rmixer": {
    "role": "哨戒铁卫",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_213_mostma": {
    "role": "扩散术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4087_ines": {
    "role": "情报官",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1021_kroos2": {
    "role": "速射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_222_bpipe": {
    "role": "冲锋手",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_437_mizuki": {
    "role": "伏击客",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_446_aroma": {
    "role": "轰击术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4162_cathy": {
    "role": "工匠",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_474_glady": {
    "role": "钩索师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_373_lionhd": {
    "role": "扩散术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1028_texas2": {
    "role": "处决者",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_136_hsguma": {
    "role": "铁卫",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_311_mudrok": {
    "role": "不屈者",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_420_flamtl": {
    "role": "尖兵",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_430_fartth": {
    "role": "神射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_128_plosis": {
    "role": "群愈师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_172_svrash": {
    "role": "领主",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1026_gvial2": {
    "role": "强攻手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_426_billro": {
    "role": "阵法术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1032_excu2": {
    "role": "收割者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4056_titi": {
    "role": "咒愈师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1040_blaze2": {
    "role": "本源术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4145_ulpia": {
    "role": "重剑手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4010_etlchi": {
    "role": "收割者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_350_surtr": {
    "role": "术战者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4039_horn": {
    "role": "要塞",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_202_demkni": {
    "role": "守护者",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_2015_dusk": {
    "role": "扩散术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1023_ghost2": {
    "role": "傀儡师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1039_thorn2": {
    "role": "炼金师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_264_f12yin": {
    "role": "斗士",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4064_mlynar": {
    "role": "解放者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_291_aglina": {
    "role": "凝滞师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_341_sntlla": {
    "role": "扩散术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4146_nymph": {
    "role": "本源术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4196_reckpr": {
    "role": "医师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4193_lemuen": {
    "role": "神射手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_2026_yu": {
    "role": "本源铁卫",
    "roleKey": "tank",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1012_skadi2": {
    "role": "吟游者",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_472_pasngr": {
    "role": "链术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4058_pepe": {
    "role": "撼地者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1019_siege2": {
    "role": "术战者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1020_reed2": {
    "role": "咒愈师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_245_cello": {
    "role": "巫役",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_249_mlyss": {
    "role": "战术家",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_391_rosmon": {
    "role": "投掷手",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1041_angel2": {
    "role": "怪杰",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4042_lumen": {
    "role": "疗养师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_4082_qiubai": {
    "role": "领主",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1047_halo2": {
    "role": "凝滞师",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1014_nearl2": {
    "role": "无畏者",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1038_whitw2": {
    "role": "驭械术师",
    "roleKey": "dps",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  },
  "char_1016_agoat2": {
    "role": "行医",
    "roleKey": "support",
    "why": "",
    "position": "",
    "timing": "",
    "equip": [],
    "equipWhy": "",
    "substitute": ""
  }
};
  const bondPlays = {
  "kjerag": "只追 3。6 谢需要 6 名不同谢拉格，会直接挤掉哈洛德 / 锏 / 凛御的位置；除非大顺风或任务要求，否则不要开。",
  "swift": "灵知和锏都吃迅捷。2 人就能开，不用强求 40 层；回转快 = 冻结密 = 层数高。",
  "skillful": "凛御是灵巧，站主 C 旁边就能给圣聆初雪加攻速。2 人即可，别为了 40 层硬塞人。",
  "arcane": "圣聆初雪 + 初雪 / 任意奥术即可开 2。3 人不强求；隐匿图可以靠它反隐。",
  "empty": "初雪是协防。如果前排压力大，补一个协防干员；否则不优先。",
  "steadfast": "角峰 / 初雪能开 2。3 人会拖慢角峰死亡，未必是好事；前排压力大再开。",
  "precision": "雪猎 / 空弦可开。哈洛德不是精准，别为了精准硬塞两个挂件。",
  "miracle": "耶拉带奇迹。前期可开，但别为了奇迹牺牲 3 谢；经济是顺带的。",
  "invest": "凛御带投资人。若能顺手开 3，雪猎 / 极光的获得时层数会翻倍；不强求。",
  "victoria": "哈洛德是维多利亚 / 谢拉格。不为维多利亚硬凑，除非装备多到用不完。",
  "kazimierz": "锏带卡西米尔，但不为它凑 3。锏的伤害主要来自谢拉格层数和自身爆发。",
  "lethania": "锏的第三盟约，不追。知道它存在即可。",
  "mani": "魔王是调和。1 人就能让 3 谢变 4 谢计数，还能在休整期给核心盟约 +10 / +20 层；来就上。",
  "doc": "华法琳带聚合。如果前排总倒，可以开 2 当奶用；否则不优先。",
  "ursus": "",
  "iberia": "",
  "yan": "",
  "sargon": "",
  "laterano": "",
  "egir": "",
  "siracusa": "",
  "deputy": "",
  "visi": "",
  "raid": "",
  "indom": "",
  "solo": "",
  "sunt": ""
};
  // 装备基础/进阶效果：可露希尔Wiki「卫戍协议：规程」装备表。
  const equipmentEffects = {
    multi_supplement: {
      base: '携带者每次造成伤害时，自身所属已激活盟约临时层数 +1（每场战斗最多叠加 12 层）',
      advanced: '携带者每次造成伤害时，自身所属已激活盟约临时层数 +2（每场战斗最多叠加 24 层）'
    },
    originium_solvent: {
      base: '携带者每秒流失 60 点生命值，攻击力 +40%',
      advanced: '携带者每秒流失 60 点生命值，攻击力 +60%'
    },
    pegasus_glory: {
      base: '生命上限 +60%，每秒恢复 8% 最大生命值；攻击力 +50%，造成伤害时额外造成攻击力 30% 真实伤害',
      advanced: ''
    },
    kjerag_ice: {
      base: '造成伤害时有 12% 概率对目标施加 1.5 秒的寒冷',
      advanced: '造成伤害时有 20% 概率对目标施加 1.5 秒的寒冷'
    },
    swift_ration: {
      base: '部署时，获得 3 点技力；每有一个同盟约的其他干员，额外获得 3 点技力',
      advanced: '部署时，获得 6 点技力；每有一个同盟约的其他干员，额外获得 6 点技力'
    },
    reliable_watch: {
      base: '携带者技能开启所需技力 -20%，但技能期间攻击速度 -25%',
      advanced: '携带者技能开启所需技力 -40%，但技能期间攻击速度 -25%'
    },
    arcane_array: {
      base: '法术抗性 +20，攻击使目标失去特殊能力 5 秒',
      advanced: '法术抗性 +30，攻击使目标失去特殊能力 5 秒'
    },
    steadfast_shield: {
      base: '防御力 +20%',
      advanced: '防御力 +35%'
    },
    m3_carapace: {
      base: '战斗阶段被击倒时立刻复活（一场战斗仅 1 次）',
      advanced: '战斗阶段被击倒时立刻复活（一场战斗仅 2 次）'
    },
    dual_arm: {
      base: '攻击力 +30%，自身造成物理和法术伤害时，伤害类型转化为弱点伤害',
      advanced: '攻击力 +50%，自身造成物理和法术伤害时，伤害类型转化为弱点伤害'
    },
    egir_blade: {
      base: '攻击力 +40%，攻击速度 -10',
      advanced: '攻击力 +60%，攻击速度 -10'
    },
    agile_gloves: {
      base: '部署后每秒攻击速度 +2（最多叠加 20 次），受到伤害时失去该效果',
      advanced: '部署后每秒攻击速度 +3（最多叠加 20 次），受到伤害时失去该效果'
    },
    snow_robe: {
      base: '生命上限 +15%，使携带者更不容易受到攻击且阻挡数 -1',
      advanced: '生命上限 +25%，使携带者更不容易受到攻击且阻挡数 -1'
    },
    precision_scope: {
      base: '攻击距离自身 3 格及以上的目标时，伤害提高 30%',
      advanced: '攻击距离自身 3 格及以上的目标时，伤害提高 50%'
    },
    unfallen_system: {
      base: '免疫晕眩、冻结等特殊状态，阻挡数 +2，每阻挡一个单位自身生命上限和防御力提升 20%；携带者开启技能时对自身周围范围内敌人产生一次诱导，持续 3 秒',
      advanced: ''
    },
    doctor_projection: {
      base: '装备后下个回合开始时销毁，并使该干员晋升为精锐干员',
      advanced: '装备时销毁，立即使该干员晋升为精锐干员'
    }
  };
  // 海报精要版：只用于放不下完整效果的槽位；完整文本保留在 closure.js 与详情弹层。
  const strategyBrief = {
    st01: '场上 3/4/5 种激活盟约：全体攻击力、生命上限 +20/30/40%。',
    st02: '初始目标生命值为 40 点。',
    st03: '干员部署后，本场再部署时间 -50%。',
    st04: '干员被击倒：剩余单位攻击力 +20%，最多 +200%。',
    st05: '战斗开始：每名精锐使精锐攻击力、生命上限 +10%。',
    st06: '选 1 名干员：下次战斗开始击倒并复活，额外 2 次复活。',
    st07: '下一件购买装备价格 -1，最低 0。',
    st08: '选调度中心 1 名干员，变为同阶随机干员；每回合 2 次。',
    st09: '选地块：首次经过的敌人恐惧 3 秒，每回合 1 次；4/8/12 回合升为 2/3/4 次。',
    st10: '选 1 名干员：获得其复制体（含精锐与装备）；每场 1 次。',
    st11: '第 4 回合解锁：选 1 名干员，已激活盟约层数 +9，冷却 3 回合。',
    st12: '选 1 名干员：下次战斗开始变精锐，持续到战斗结束。',
    st13: '第 4/7/10/13 回合获得寻呼模块；装备后免费获得 1 名同盟约干员。',
    st14: '战斗开始：每等阶随机 1 名干员已激活盟约 +1；调度中心 3/5 级额外 +1。',
    st15: '选 1 名干员：下次战斗每次攻击 20% 获得 1 层护盾；第 7 回合升 35%。',
    st16: '第 3/6/9/12/14 回合获得 1 件当前调度中心等级装备。',
    st17: '物法伤害变弱点伤害；精锐额外攻击力 +16%、攻速 +16。',
    st18: '第 1/2 回合资金暂存至第 3 回合；第 3 回合休整得 2/4 阶干员各 1。',
    st19: '第 8/10/12/14 回合获得信标；装备后免费获得 1 名同阶干员。',
    st20: '场上有预备医疗；战斗开始至少 2 名精锐时替换为 Touch。',
    st21: '第 1 回合获得可装备 4 件装备的“暴躁铁皮”。',
    st22: '选地块部署模拟宝藏；存活到战斗结束得 1 资金，冷却 3 回合。',
    st23: '选 1 名干员立即晋升精锐；每场 1 次。',
    st24: '选 1 名干员：下场首次受伤时击倒，并召唤整备区最右侧干员。',
    st25: '每 5 回合获得变形同构体；与特定装备同装视为该盟约成员。',
    st26: '点击随机获得 1-6 资金；冷却等于获得的资金。',
    st27: '选 1 名干员，触发其“获得时”类特质。',
    st28: '选 1 名干员，其“休整期结束时”特质本回合额外触发 1 次。',
    st29: '第 4 回合解锁：选 1 名干员变为高一阶随机干员（最高 6 阶）。',
    st30: '第 4 回合解锁：生命降至最低玩家水平，获得至多 10 资金，休整返还。',
    st31: '每次休整从 2 个随机指令中选 1 个替换当前指令。',
    st32: '资金可继承；剩余至少 5 时每回合额外 +1 资金。',
    st33: '第 5 回合起部分敌人变鸭爵等，击倒得 1 资金（含联防）。',
    st34: '资金 60 解锁：随机获得调度中心 1 名干员；120 时变 2 名。',
    st35: '每回合首次出售初始干员，改为与调度中心随机 1 名交换。',
    st36: '选 1 名干员出售，所有已激活盟约叠加等同于其等阶的层数。',
    st37: '点击刷新调度中心，必定含 1 名高一阶干员；每回合 3 次。',
    st38: '点击特殊刷新：优先出现已部署干员；每场 1 次。',
    st39: '首次装备合并：3 件装备免费选 1；点击刷 1 件装备，每回合 2 次。',
    st40: '选调度中心 1 件装备销毁；下次战斗全体有空栏干员暂时获得。',
    st41: '点击获得调度中心所有干员；休整结束指令消耗 -1 并可再用。',
    st42: '第 1 回合获得调和干员：核心盟约激活人数 +1，并享其效果。',
    st43: '选 1 名干员：下场战斗卫戍叠层上限提升，数值等于当前回合数。',
    st44: '每回合首次晋升精锐时，额外获得 1 次晋升奖励。',
    st45: '选 1 名干员移除，获得不高于其等阶的炎干员；6 炎召唤炎佑，9 炎两只。',
    st46: '点击刷新，优先 1 名炎干员；每回合 2 次。',
    st47: '获得 3 名萨尔贡后，调度中心升级消耗 -3，每级 1 次；6 萨尔贡技能加攻。',
    st48: '调度中心升到 2/4/6 级后，特殊刷新优先萨尔贡。',
    st49: '每买 3 名维多利亚得 1 件随机装备；6 维多利亚周围八格共享装备。',
    st50: '第 4 回合起每 2 回合获得 1 名维多利亚（等阶不超过调度中心）。',
    st51: '消耗 1 得 1 名阿戈尔（等阶不超过调度中心）；6 阿戈尔前 3 名首次击倒召唤替补。',
    st52: '阿戈尔被击倒时，已激活阿戈尔盟约叠加等同于其等阶的层数。',
    st53: '消耗 6 得 1 名卡西米尔（等阶不超过调度中心），休整结束消耗 -2；6 卡西米尔阻挡真伤、晕眩。',
    st54: '每买 1 名卡西米尔，下回合资金 +1，每回合至多 3。',
    st55: '第 4/7/10/13 回合得谢拉格不融冰（12% 寒冷 1.5 秒）；6 谢改为每 25 秒寒风。',
    st56: '每回合首次购买谢拉格干员只花 1 资金。',
    st57: '每回合首次主动刷新得 1 资金；6 叙拉古隐匿攻击概率真伤、恐惧。',
    st58: '每回合主动刷新 4 次后，获得 1 名叙拉古（等阶不超过调度中心）。',
    st59: '点击消耗 1 得 1 名莱塔尼亚（等阶不超过调度中心）；每次使用后消耗永久 +1。',
    st60: '点击消耗 5 得 1 名乌萨斯（等阶不超过调度中心）；每买乌萨斯消耗 -1 并可再用。',
    st61: '伊比利亚 4 人解锁：选调度中心 1 名干员，换为不高于其等阶的伊比利亚；每回合 2 次。'
  };
  const operators = {};
  const currentNames = new Set(cl.currentNames || []);
  const retiredOperatorIds = [];
  for (const [id, o] of Object.entries(sh.operators || {})) {
    if (currentNames.size && !currentNames.has(o.name)) { retiredOperatorIds.push(id); continue; }
    operators[id] = { ...o, ...(cl.operatorMeta?.[id] || {}), ...(extras[id] || {}) };
  }
  for (const [id, meta] of Object.entries(cl.operatorMeta || {})) {
    if (operators[id]) continue;
    if (!meta || !meta.name) continue;
    operators[id] = { id, ...meta, avatar: meta.avatar || '__missing', missingData: true, skills: [], talents: [], stats: {}, price: null };
  }
  const prtsRoster = window.SP_ROSTER_PRTS || {};
  for (const o of Object.values(operators)) {
    const p = prtsRoster[o.name];
    if (!p) continue;
    o.stats = p.stats || o.stats || {};
    o.skills = p.skills || o.skills || [];
    o.profession = p.profession || o.profession;
    o.subProfession = p.subProfession || o.subProfession;
    o.rarity = p.rarity || o.rarity;
    o.price = p.price ?? o.price;
    o.module = p.moduleName ? { name: p.moduleName, type: p.moduleType || '' } : o.module;
    o.prtsSource = p.source;
    o.avatar = 'assets/avatars/' + o.id + '.webp';
    o.missingFields = ['rangeGrid', 'moduleEffect'];
  }
  const bondLibrary = {};
  for (const [id, b] of Object.entries(cl.bondLibrary || {})) {
    bondLibrary[id] = { ...b, play: bondPlays[id] || '' };
  }
  window.GUIDE_DATA = {
    ...poster,
    retiredOperatorIds,
    operators,
    bondLibrary,
    strategyLibrary: cl.strategyLibrary || {},
    strategyBrief,
    equipmentEffects,
    strategy: poster.strategy || { main: '', alternatives: [], reason: '' }
  };
})();
