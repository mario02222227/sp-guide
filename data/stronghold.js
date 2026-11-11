/*!
 * Source: Stronghold Protocol (Misyra/Stronghold-Protocol)
 * https://github.com/Misyra/Stronghold-Protocol
 * License: GPL-3.0 (repository LICENSE)
 * Contents: operator stats, skills, modules and range grids.
 * Modified: data was selected/trimmed and normalized for this poster; unrelated
 * repository code, UI and data were not copied. See README / LICENSES/GPL-3.0.txt.
 * Original copyright and license belong to the Stronghold-Protocol authors.
*/
window.SP_SOURCES = window.SP_SOURCES || {};
window.SP_SOURCES.stronghold = {
  "operators": {
    "sbell2": {
      "chessId": "chess_char_6_02_a",
      "baseId": "chess_char_6_02_a",
      "goldenId": "chess_char_6_02_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 110,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_608_acpion",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acpion",
        "potRank": 0
      },
      "shopSortId": 2,
      "charId": "char_1046_sbell2",
      "name": "圣聆初雪",
      "appellation": "Pramanix the Prerita",
      "rarity": 6,
      "profession": "术师",
      "subProfessionId": "phalanx",
      "subProfessionName": "阵法术师",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_05_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_02_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1687,
        "atk": 752,
        "def": 233,
        "res": 15,
        "cost": 22,
        "blockCnt": 1,
        "bat": 2,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "x-1",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          -2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -2,
          0
        ]
      ],
      "dmgType": "arts",
      "attackKind": "none",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": "3 技能",
      "talents": [
        {
          "name": "无垠的雪景",
          "desc": "攻击范围内的地面每隔5.5秒产生一层积雪，地面敌人经过时立即受到相当于攻击力80%（+5%）的法术伤害，每层积雪使经过的所有敌人移动速度下降12%，最多叠加5层（首个敌人离开该地块时积雪消失）"
        },
        {
          "name": "圣山的祝福",
          "desc": "受到伤害时使敌人寒冷2（+0.5）秒，若受到致命伤害，仅一次立刻回复所有生命值并使自身冻结4秒，使攻击范围内所有敌方单位冻结8秒"
        }
      ],
      "tokens": [
        "token_10058_sbell2_icetgt"
      ],
      "module": {
        "id": "uniequip_002_sbell2",
        "name": "千分之一的心",
        "type": "PLX-Y",
        "level": 0,
        "icon": "uniequip_002_sbell2"
      },
      "assets": {
        "avatar": "char_1046_sbell2",
        "portrait": "char_1046_sbell2_1",
        "spine": "char_1046_sbell2",
        "skillIcon": "skchr_sbell2_3",
        "subProfIcon": "sub_phalanx_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_sbell2_1",
          "iconId": "skchr_sbell2_1",
          "name": "铃音吹雪",
          "desc": "立即对范围内所有敌人造成相当于攻击力390%的法术伤害及3.5秒寒冷并将其中等力度地朝部署方向推动，之后积雪向前方地面扩散（最多向前扩散5格）\n可充能2次",
          "descRaw": "立即对范围内所有敌人造成相当于攻击力<@ba.vup>390%</>的法术伤害及<@ba.vup>3.5</>秒<$ba.cold>寒冷</>并将其中等力度地朝部署方向推动，之后积雪向前方地面扩散（最多向前扩散5格）\n<@ba.rem>可充能2次</>",
          "spCost": 15,
          "initSp": 5,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_sbell2_2",
          "iconId": "skchr_sbell2_2",
          "name": "霜涛覆岭",
          "desc": "每次攻击造成相当于攻击力310%的法术伤害，积雪超过5层时会向周围扩散一层（最多向外扩散20格），处于积雪上的地面敌人每秒受到攻击力20%的法术伤害，敌人离开积雪时获得5秒寒冷，积雪在目标点积累至5层时，使目标点变为冻结状态\n持续时间无限，可主动关闭技能（期间可随时停止技能）",
          "descRaw": "每次攻击造成相当于攻击力<@ba.vup>310%</>的法术伤害，积雪超过5层时会向周围扩散一层（最多向外扩散20格），处于积雪上的地面敌人每秒受到攻击力<@ba.vup>20%</>的法术伤害，敌人离开积雪时获得<@ba.vup>5</>秒<$ba.cold>寒冷</>，积雪在目标点积累至5层时，使目标点变为<$ba.frozen>冻结</>状态\n<@ba.rem>持续时间无限，可主动关闭技能（期间可随时停止技能）</>",
          "spCost": 60,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_sbell2_3",
          "iconId": "skchr_sbell2_3",
          "name": "群山俯首",
          "desc": "攻击范围扩大，立即诱导攻击范围内的所有敌人至自身周围的可达地面，持续10秒，积雪生成速度加快，攻击力+35%，攻击速度+30，攻击无视目标10点法术抗性，每次攻击造成相当于攻击力180%的法术伤害",
          "descRaw": "攻击范围<@ba.vup>扩大</>，立即<$ba.attract>诱导</>攻击范围内的所有敌人至自身周围的可达地面，持续<@ba.vup>10</>秒，积雪生成速度加快，攻击力<@ba.vup>+35%</>，攻击速度<@ba.vup>+30</>，攻击无视目标<@ba.vup>10</>点法术抗性，每次攻击造成相当于攻击力<@ba.vup>180%</>的法术伤害",
          "spCost": 56,
          "initSp": 30,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 24
        },
        "2": {
          "stats.atk": 718
        },
        "4": {
          "stats.cost": 23
        }
      },
      "id": "sbell2",
      "avatar": "sbell2",
      "tags": [
        "核心",
        "优先精锐"
      ],
      "professionShort": "术",
      "bench": false,
      "subProfession": "阵法术师",
      "skillIdx": 2
    },
    "pramanix": {
      "chessId": "chess_char_3_14_a",
      "baseId": "chess_char_3_14_a",
      "goldenId": "chess_char_3_14_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 52,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_174_slbell",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_slbell",
        "potRank": 0
      },
      "shopSortId": 14,
      "charId": "char_174_slbell",
      "name": "初雪",
      "appellation": "Pramanix",
      "rarity": 5,
      "profession": "辅助",
      "subProfessionId": "underminer",
      "subProfessionName": "削弱者",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_28_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_14_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1251,
        "atk": 356,
        "def": 89,
        "res": 33,
        "cost": 10,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-6",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -2,
          0
        ],
        [
          -2,
          1
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": "2 技能",
      "talents": [
        {
          "name": "虚弱化",
          "desc": "攻击范围内的敌人生命少于40%时，令其获得33%（+3%）的脆弱效果"
        },
        {
          "name": "双响",
          "desc": "攻击时同时攻击两个目标"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_slbell",
        "name": "“续针”",
        "type": "UMD-X",
        "level": 0,
        "icon": "uniequip_002_slbell"
      },
      "assets": {
        "avatar": "char_174_slbell",
        "portrait": "char_174_slbell_1",
        "spine": "char_174_slbell",
        "skillIcon": "skchr_slbell_2",
        "subProfIcon": "sub_underminer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_slbell_1",
          "iconId": "skchr_slbell_1",
          "name": "传音回响",
          "desc": "同时攻击2个目标，攻击范围内所有敌人攻击速度-40",
          "descRaw": "同时攻击<@ba.vup>2</>个目标，攻击范围内所有敌人攻击速度<@ba.vup>-40</>",
          "spCost": 40,
          "initSp": 15,
          "duration": 13,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_slbell_2",
          "iconId": "skchr_slbell_2",
          "name": "自然震慑",
          "desc": "攻击范围内所有敌人防御力-40%，法术抗性-23%",
          "descRaw": "攻击范围内所有敌人防御力<@ba.vup>-40%</>，法术抗性<@ba.vup>-23%</>",
          "spCost": 40,
          "initSp": 13,
          "duration": 14,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 12
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.res": 25
        },
        "4": {
          "stats.cost": 11
        }
      },
      "id": "pramanix",
      "avatar": "pramanix",
      "tags": [
        "前期核心",
        "3 谢"
      ],
      "professionShort": "辅",
      "bench": false,
      "subProfession": "削弱者",
      "skillIdx": 1
    },
    "gnosis": {
      "chessId": "chess_char_4_13_a",
      "baseId": "chess_char_4_13_a",
      "goldenId": "chess_char_4_13_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 72,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_614_acsupo",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 13,
      "charId": "char_206_gnosis",
      "name": "灵知",
      "appellation": "Gnosis",
      "rarity": 6,
      "profession": "辅助",
      "subProfessionId": "underminer",
      "subProfessionName": "削弱者",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_111_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_13_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1587,
        "atk": 410,
        "def": 116,
        "res": 25,
        "cost": 11,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-6",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -2,
          0
        ],
        [
          -2,
          1
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": "2 技能",
      "talents": [
        {
          "name": "坚冰",
          "desc": "攻击造成1秒寒冷；范围内寒冷的敌人受到27%（+2%）的脆弱，范围内冻结的敌人脆弱效果提升至2倍"
        },
        {
          "name": "殊途同归",
          "desc": "灵知在场且部署后经过10秒时，使所有【谢拉格】干员获得抵抗"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_gnosis",
        "name": "“誓言”",
        "type": "UMD-X",
        "level": 0,
        "icon": "uniequip_002_gnosis"
      },
      "assets": {
        "avatar": "char_206_gnosis",
        "portrait": "char_206_gnosis_1",
        "spine": "char_206_gnosis",
        "skillIcon": "skchr_gnosis_2",
        "subProfIcon": "sub_underminer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_gnosis_1",
          "iconId": "skchr_gnosis_1",
          "name": "高速思考",
          "desc": "下次攻击连续攻击两次，每次造成相当于攻击力135%的法术伤害",
          "descRaw": "下次攻击<@ba.vup>连续攻击两次</>，每次造成相当于攻击力<@ba.vup>135%</>的法术伤害",
          "spCost": 5,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_gnosis_2",
          "iconId": "skchr_gnosis_2",
          "name": "零度爆发",
          "desc": "对范围内所有敌人造成2.5秒寒冷和相当于攻击力130%的法术伤害；蓄力：额外造成一层寒冷",
          "descRaw": "对范围内所有敌人造成<@ba.vup>2.5</>秒<$ba.cold>寒冷</>和相当于攻击力<@ba.vup>130%</>的法术伤害；<$ba.charged>蓄力</>：额外造成一层<$ba.cold>寒冷</>",
          "spCost": 8,
          "initSp": 0,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_gnosis_3",
          "iconId": "skchr_gnosis_3",
          "name": "失温症",
          "desc": "攻击速度+120，同时攻击2个敌人；范围内所有敌人的冻结延长至技能结束，且技能结束时对所有冻结的敌人造成300%的法术伤害并结束冻结；优先攻击未冻结的单位",
          "descRaw": "攻击速度<@ba.vup>+120</>，同时攻击<@ba.vup>2</>个敌人；范围内所有敌人的<$ba.frozen>冻结</>延长至技能结束，且技能结束时对所有<$ba.frozen>冻结</>的敌人造成<@ba.vup>300%</>的法术伤害并结束<$ba.frozen>冻结</>；优先攻击未<$ba.frozen>冻结</>的单位",
          "spCost": 47,
          "initSp": 25,
          "duration": 9,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 13
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 377
        },
        "4": {
          "stats.cost": 12
        }
      },
      "id": "gnosis",
      "avatar": "gnosis",
      "tags": [
        "核心",
        "2 技能"
      ],
      "professionShort": "辅",
      "bench": false,
      "subProfession": "削弱者",
      "skillIdx": 1
    },
    "kjera": {
      "chessId": "chess_char_3_20_a",
      "baseId": "chess_char_3_20_a",
      "goldenId": "chess_char_3_20_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 58,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4013_kjera",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_kjera",
        "potRank": 0
      },
      "shopSortId": 20,
      "charId": "char_4013_kjera",
      "name": "耶拉",
      "appellation": "Kjera",
      "rarity": 5,
      "profession": "术师",
      "subProfessionId": "funnel",
      "subProfessionName": "驭械术师",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_92_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_20_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1121,
        "atk": 246,
        "def": 101,
        "res": 20,
        "cost": 20,
        "blockCnt": 1,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-1",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": "2 技能（心随意动）",
      "talents": [
        {
          "name": "低眉",
          "desc": "攻击力+13%（+3%），攻击范围内存在2格以上的地面地形时，改为攻击力+19%（+3%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_kjera",
        "name": "以雪为线",
        "type": "FUN-Y",
        "level": 0,
        "icon": "uniequip_002_kjera"
      },
      "assets": {
        "avatar": "char_4013_kjera",
        "portrait": "char_4013_kjera_1",
        "spine": "char_4013_kjera",
        "skillIcon": "skchr_kjera_2",
        "subProfIcon": "sub_funnel_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_atk_up[3]",
          "iconId": "skcom_atk_up[3]",
          "name": "攻击力强化·γ型",
          "desc": "攻击力+45%",
          "descRaw": "攻击力<@ba.vup>+45%</>",
          "spCost": 37,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_kjera_2",
          "iconId": "skchr_kjera_2",
          "name": "心随意动",
          "desc": "浮游单元+1，释放浮游单元锁定敌人攻击，攻击力+29%，自身与浮游单元攻击有15%概率对敌人造成2.5秒寒冷。\n浮游单元锁敌后直至敌人被击杀或技能结束后返回干员身边",
          "descRaw": "浮游单元<@ba.vup>+1</>，释放浮游单元锁定敌人攻击，攻击力<@ba.vup>+29%</>，自身与浮游单元攻击有<@ba.vup>15%</>概率对敌人造成<@ba.vup>2.5</>秒<$ba.cold>寒冷</>。\n<@ba.rem>浮游单元锁敌后直至敌人被击杀或技能结束后返回干员身边</>",
          "spCost": 47,
          "initSp": 15,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 23
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 22
        },
        "4": {
          "stats.cost": 21
        }
      },
      "id": "kjera",
      "avatar": "kjera",
      "tags": [
        "发冰",
        "可卖"
      ],
      "professionShort": "术",
      "bench": false,
      "subProfession": "驭械术师",
      "skillIdx": 1
    },
    "yak": {
      "chessId": "chess_char_1_02_a",
      "baseId": "chess_char_1_02_a",
      "goldenId": "chess_char_1_02_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 1,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_199_yak",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_yak",
        "potRank": 0
      },
      "shopSortId": 2,
      "charId": "char_199_yak",
      "name": "角峰",
      "appellation": "Matterhorn",
      "rarity": 4,
      "profession": "重装",
      "subProfessionId": "protector",
      "subProfessionName": "铁卫",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_25_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_02_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2466,
        "atk": 313,
        "def": 478,
        "res": 5,
        "cost": 17,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "0-1",
      "rangeGrid": [
        [
          0,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": "2 技能",
      "talents": [
        {
          "name": "雪原卫士",
          "desc": "法术抗性+7"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_yak",
        "name": "父亲的袍子",
        "type": "PRO-Y",
        "level": 0,
        "icon": "uniequip_002_yak"
      },
      "assets": {
        "avatar": "char_199_yak",
        "portrait": "char_199_yak_1",
        "spine": "char_199_yak",
        "skillIcon": "skchr_yak_2",
        "subProfIcon": "sub_protector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_yak_1",
          "iconId": "skchr_yak_1",
          "name": "体能强化",
          "desc": "生命上限+30%，每秒恢复25点生命",
          "descRaw": "生命上限<@ba.vup>+30%</>，每秒恢复<@ba.vup>25</>点生命",
          "spCost": 42,
          "initSp": 5,
          "duration": 27,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_yak_2",
          "iconId": "skchr_yak_2",
          "name": "抗寒体质",
          "desc": "生命上限+30%，防御力+10%，法术抗性+60%",
          "descRaw": "生命上限<@ba.vup>+30%</>，防御力<@ba.vup>+10%</>，法术抗性<@ba.vup>+60%</>",
          "spCost": 47,
          "initSp": 0,
          "duration": 27,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.maxHp": 2216
        },
        "3": {
          "stats.respawnTime": 66
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "yak",
      "avatar": "yak",
      "tags": [
        "T1",
        "开局抓"
      ],
      "professionShort": "重",
      "bench": false,
      "subProfession": "铁卫",
      "skillIdx": 1
    },
    "harold": {
      "chessId": "chess_char_2_05_a",
      "baseId": "chess_char_2_05_a",
      "goldenId": "chess_char_2_05_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 24,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4114_harold",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_harold",
        "potRank": 0
      },
      "shopSortId": 5,
      "charId": "char_4114_harold",
      "name": "哈洛德",
      "appellation": "Harold",
      "rarity": 5,
      "profession": "医疗",
      "subProfessionId": "wandermedic",
      "subProfessionName": "行医",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_09_a",
        "garrison_03_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_05_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1176,
        "atk": 295,
        "def": 78,
        "res": 10,
        "cost": 14,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-17",
      "rangeGrid": [
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          2,
          3
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ],
        [
          -2,
          1
        ],
        [
          -2,
          2
        ],
        [
          -2,
          3
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": "2 技能（重症优先）",
      "talents": [
        {
          "name": "我即军营",
          "desc": "攻击范围内元素损伤累计超过一半的目标受到的元素损伤降低15%（+3%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_harold",
        "name": "腿部护理套装",
        "type": "WDM-X",
        "level": 0,
        "icon": "uniequip_002_harold"
      },
      "assets": {
        "avatar": "char_4114_harold",
        "portrait": "char_4114_harold_1",
        "spine": "char_4114_harold",
        "skillIcon": "skchr_harold_2",
        "subProfIcon": "sub_wandermedic_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_heal_up[3]",
          "iconId": "skcom_heal_up[3]",
          "name": "治疗强化·γ型",
          "desc": "攻击力+55%",
          "descRaw": "攻击力<@ba.vup>+55%</>",
          "spCost": 35,
          "initSp": 20,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_harold_2",
          "iconId": "skchr_harold_2",
          "name": "重症优先",
          "desc": "攻击速度+55，优先治疗元素损伤最严重的目标。治疗元素损伤累计超过一半的目标时，元素损伤回复量提升至160%",
          "descRaw": "攻击速度<@ba.vup>+55</>，优先治疗<$ba.dt.element>元素损伤</>最严重的目标。治疗元素损伤累计超过一半的目标时，<$ba.dt.element>元素损伤</>回复量提升至<@ba.vup>160%</>",
          "spCost": 37,
          "initSp": 13,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 17
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 16
        },
        "4": {
          "stats.cost": 15
        }
      },
      "id": "harold",
      "avatar": "harold",
      "tags": [
        "奶位",
        "Boss"
      ],
      "professionShort": "医",
      "bench": false,
      "subProfession": "行医",
      "skillIdx": 1
    },
    "svash2": {
      "chessId": "chess_char_5_14_a",
      "baseId": "chess_char_5_14_a",
      "goldenId": "chess_char_5_14_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 99,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_608_acpion",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acpion",
        "potRank": 0
      },
      "shopSortId": 14,
      "charId": "char_1045_svash2",
      "name": "凛御银灰",
      "appellation": "SilverAsh the Reignfrost",
      "rarity": 6,
      "profession": "先锋",
      "subProfessionId": "counsellor",
      "subProfessionName": "策士",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_126_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_14_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1732,
        "atk": 507,
        "def": 342,
        "res": 15,
        "cost": 11,
        "blockCnt": 2,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": "3 技能",
      "talents": [
        {
          "name": "开放性开局",
          "desc": "在场时向待部署区中加入“风雪之眼”，且会使待部署区按照部署费用排列。位于“风雪之眼”左侧的干员与自身初始技力+4，下次再部署时间-20%"
        },
        {
          "name": "雪境先驱",
          "desc": "在场时，【谢拉格】干员免疫冻结，防御力+80（+20）且每秒回复2%（+0.5%）最大生命值；凛御银灰在场15秒后，防御力和生命回复效果翻倍"
        },
        {
          "name": null,
          "desc": null
        },
        {
          "name": null,
          "desc": null
        },
        {
          "name": null,
          "desc": null
        }
      ],
      "tokens": [
        "token_10057_svash2_eagle1",
        "token_10057_svash2_eagle2",
        "token_10057_svash2_eagle3"
      ],
      "module": null,
      "assets": {
        "avatar": "char_1045_svash2",
        "portrait": "char_1045_svash2_1",
        "spine": "char_1045_svash2",
        "skillIcon": "skchr_svash2_2",
        "subProfIcon": "sub_counsellor_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_svash2_1",
          "iconId": "skchr_svash2_1",
          "name": "周旋的谋略",
          "desc": "立刻获得10点部署费用。待部署区中距离“风雪之眼”最近的1名干员费用-5（优先选择右侧近卫/术师/狙击干员），且部署后获得相当于凛御银灰最大生命值50%的屏障",
          "descRaw": "立刻获得<@ba.vup>10</>点部署费用。待部署区中距离“风雪之眼”最近的1名干员费用<@ba.vup>-5</>（优先选择右侧<@ba.vup>近卫/术师/狙击</>干员），且部署后获得相当于凛御银灰最大生命值<@ba.vup>50%</>的<$ba.barrier>屏障</>",
          "spCost": 35,
          "initSp": 14,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_svash2_2",
          "iconId": "skchr_svash2_2",
          "name": "御敌的锋锐",
          "desc": "对前方6名敌人造成攻击力260%的物理伤害，使其4秒内寒冷且隐匿失效；待部署区中距离“风雪之眼”最近的1名干员费用-11（优先选择右侧近卫/术师/狙击干员）；使“风雪之眼”左侧所有干员部署时以自身攻击力施放一次本技能的范围效果（最多叠加2次）\n可充能2次",
          "descRaw": "对前方6名敌人造成攻击力<@ba.vup>260%</>的物理伤害，使其<@ba.vup>4</>秒内<$ba.cold>寒冷</>且<$ba.invisible>隐匿</>失效；待部署区中距离“风雪之眼”最近的1名干员费用<@ba.vup>-11</>（优先选择右侧<@ba.vup>近卫/术师/狙击</>干员）；使“风雪之眼”左侧所有干员部署时以<@ba.vup>自身攻击力</>施放一次本技能的范围效果（最多叠加2次）\n<@ba.rem>可充能2次</>",
          "spCost": 17,
          "initSp": 7,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_svash2_3",
          "iconId": "skchr_svash2_3",
          "name": "变革已至",
          "desc": "攻击范围扩大并使敌人隐匿失效，攻击对直线范围造成攻击力140%的物理伤害和20%的脆弱；立即获得5点后持续获得24点部署费用\n首次开启时交换待部署区中费用最高（优先选择近卫/术师/狙击干员）与最低干员的基础部署费用\n技能期间“风雪之眼”变为可部署",
          "descRaw": "攻击范围<@ba.vup>扩大</>并使敌人<$ba.invisible>隐匿</>失效，攻击对直线范围造成攻击力<@ba.vup>140%</>的物理伤害和<@ba.vup>20%</>的<$ba.fragile>脆弱</>；立即获得<@ba.vup>5</>点后持续获得<@ba.vup>24</>点部署费用\n<@ba.rem>首次开启时交换待部署区中费用最高（优先选择近卫/术师/狙击干员）与最低干员的基础部署费用</>\n<@ba.rem>技能期间“风雪之眼”变为可部署</>",
          "spCost": 55,
          "initSp": 39,
          "duration": 48,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 13
        },
        "1": {
          "stats.def": 317
        },
        "2": {
          "stats.maxHp": 1552
        },
        "4": {
          "stats.cost": 12
        }
      },
      "id": "svash2",
      "avatar": "svash2",
      "tags": [
        "站位装",
        "不是输出"
      ],
      "professionShort": "先",
      "bench": false,
      "subProfession": "策士",
      "skillIdx": 2
    },
    "degen": {
      "chessId": "chess_char_6_19_a",
      "baseId": "chess_char_6_19_a",
      "goldenId": "chess_char_6_19_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 127,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_615_acspec",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acspec",
        "potRank": 0
      },
      "shopSortId": 19,
      "charId": "char_4116_blkkgt",
      "name": "锏",
      "appellation": "Degenbrecher",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "sword",
      "subProfessionName": "剑豪",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_155_a",
        "garrison_65_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_19_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2168,
        "atk": 518,
        "def": 274,
        "res": 0,
        "cost": 21,
        "blockCnt": 2,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": "3 技能",
      "talents": [
        {
          "name": "“天生的武者”",
          "desc": "造成伤害时有10%的几率攻击力提升至165%（+5%），并使目标战栗5秒"
        },
        {
          "name": "活着的传奇",
          "desc": "攻击被战栗的目标时，无视目标30%（+5%）的防御力"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_blkkgt",
        "name": "“过往的注脚”",
        "type": "SWO-X",
        "level": 0,
        "icon": "uniequip_002_blkkgt"
      },
      "assets": {
        "avatar": "char_4116_blkkgt",
        "portrait": "char_4116_blkkgt_1",
        "spine": "char_4116_blkkgt",
        "skillIcon": "skchr_blkkgt_3",
        "subProfIcon": "sub_sword_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_blkkgt_1",
          "iconId": "skchr_blkkgt_1",
          "name": "纯粹的武力",
          "desc": "下次攻击对周围最多5名地面敌人造成两次相当于攻击力175%的物理伤害",
          "descRaw": "下次攻击对周围最多<@ba.vup>5</>名地面敌人造成两次相当于攻击力<@ba.vup>175%</>的物理伤害",
          "spCost": 6,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_blkkgt_2",
          "iconId": "skchr_blkkgt_2",
          "name": "无声的嘲笑",
          "desc": "对前方范围内最多5名地面敌人发动2次斩击，攻击被阻挡的敌人时改为3次斩击，天赋的发动概率提升至100%，每次斩击造成相当于攻击力250%的物理伤害\n可充能2次",
          "descRaw": "对前方范围内最多<@ba.vup>5</>名地面敌人发动<@ba.vup>2</>次斩击，攻击被阻挡的敌人时改为<@ba.vup>3</>次斩击，天赋的发动概率提升至<@ba.vup>100%</>，每次斩击造成相当于攻击力<@ba.vup>250%</>的物理伤害\n<@ba.rem>可充能2次</>",
          "spCost": 15,
          "initSp": 2,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_blkkgt_3",
          "iconId": "skchr_blkkgt_3",
          "name": "归于宁静",
          "desc": "持续发动总计10次斩击，每次斩击对最多5名敌人造成相当于攻击力180%的物理伤害，天赋的发动概率提升至100%，并持续将敌人中等力度地拖拽至自身中心，之后将造成一次相当于攻击力300%的物理伤害并将敌人较大力地拖拽至自身中心",
          "descRaw": "持续发动总计<@ba.vup>10</>次斩击，每次斩击对最多<@ba.vup>5</>名敌人造成相当于攻击力<@ba.vup>180%</>的物理伤害，天赋的发动概率提升至<@ba.vup>100%</>，并持续将敌人<@ba.vup>中等力度地</>拖拽至自身中心，之后将造成一次相当于攻击力<@ba.vup>300%</>的物理伤害并将敌人<@ba.vup>较大力地</>拖拽至自身中心",
          "spCost": 35,
          "initSp": 10,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 23
        },
        "2": {
          "stats.atk": 495
        },
        "4": {
          "stats.cost": 22
        }
      },
      "id": "degen",
      "avatar": "degen",
      "tags": [
        "只打 Boss",
        "R11 后找"
      ],
      "professionShort": "近",
      "bench": false,
      "subProfession": "剑豪",
      "skillIdx": 2
    },
    "snhunt": {
      "chessId": "chess_char_3_11_a",
      "baseId": "chess_char_3_11_a",
      "goldenId": "chess_char_3_11_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 49,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4211_snhunt",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_snhunt",
        "potRank": 0
      },
      "shopSortId": 11,
      "charId": "char_4211_snhunt",
      "name": "雪猎",
      "appellation": "Snow Hunter",
      "rarity": 5,
      "profession": "狙击",
      "subProfessionId": "hunter",
      "subProfessionName": "猎手",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_111_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_11_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1316,
        "atk": 856,
        "def": 177,
        "res": 0,
        "cost": 17,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "4-9",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_snhunt_2",
        "iconId": "skchr_snhunt_2",
        "name": "风雪连弩",
        "level": 4,
        "desc": "立即使用特殊子弹发动相当于攻击力160%的两连击（对非移动敌人提升至185%）\n可充能1次",
        "descRaw": "立即使用特殊子弹发动相当于攻击力<@ba.vup>160%</>的两连击（对非移动敌人提升至<@ba.vup>185%</>）\n<@ba.rem>可充能1次</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 20,
        "initSp": 7,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale_1": 1.6,
          "atk_scale_2": 1.85,
          "ct": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_snhunt_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "裂云一击",
          "desc": "开启技能时，派出裂云兽进行攻击，造成相当于攻击力185%（+5%）的物理伤害和3秒寒冷"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_snhunt",
        "name": "过去的狩猎",
        "type": "HUN-X",
        "level": 0,
        "icon": "uniequip_002_snhunt"
      },
      "assets": {
        "avatar": "char_4211_snhunt",
        "portrait": "char_4211_snhunt_1",
        "spine": "char_4211_snhunt",
        "skillIcon": "skchr_snhunt_2",
        "subProfIcon": "sub_hunter_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_snhunt_1",
          "iconId": "skcom_powerstrike[2]",
          "name": "强力击·β型",
          "desc": "下次攻击的攻击力提高至185%",
          "descRaw": "下次攻击的攻击力提高至<@ba.vup>185%</>",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_snhunt_2",
          "iconId": "skchr_snhunt_2",
          "name": "风雪连弩",
          "desc": "立即使用特殊子弹发动相当于攻击力160%的两连击（对非移动敌人提升至185%）\n可充能1次",
          "descRaw": "立即使用特殊子弹发动相当于攻击力<@ba.vup>160%</>的两连击（对非移动敌人提升至<@ba.vup>185%</>）\n<@ba.rem>可充能1次</>",
          "spCost": 20,
          "initSp": 7,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 824
        },
        "4": {
          "stats.cost": 18
        }
      },
      "avatar": "snhunt",
      "use": "没有初雪时的过渡",
      "id": "snhunt",
      "professionShort": "狙",
      "bench": true,
      "subProfession": "猎手",
      "skillIdx": 1
    },
    "bldsk": {
      "chessId": "chess_char_4_26_a",
      "baseId": "chess_char_4_26_a",
      "goldenId": "chess_char_4_26_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 85,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_171_bldsk",
        "tmplId": null,
        "skillIndex": 0,
        "uniEquipId": "uniequip_002_bldsk",
        "potRank": 0
      },
      "shopSortId": 26,
      "charId": "char_171_bldsk",
      "name": "华法琳",
      "appellation": "Warfarin",
      "rarity": 5,
      "profession": "医疗",
      "subProfessionId": "physician",
      "subProfessionName": "医师",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_72_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_26_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1368,
        "atk": 431,
        "def": 100,
        "res": 0,
        "cost": 17,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_bldsk_1",
        "iconId": "skchr_bldsk_1",
        "name": "紧急包扎",
        "level": 4,
        "desc": "下次治疗额外回复目标最大生命值的15%\n只当目标生命值不满一半时才会触发，可充能2次",
        "descRaw": "下次治疗额外回复目标最大生命值的<@ba.vup>15%</>\n<@ba.rem>只当目标生命值不满一半时才会触发，可充能2次</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WHEN_ATTACK",
        "spCost": 4,
        "initSp": 0,
        "maxChargeTime": 2,
        "increment": 1,
        "bb": {
          "hp_ratio": 0.15,
          "ct": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_bldsk_1",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 0,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "血液样本回收",
          "desc": "攻击范围内有敌人倒下时，为自身和范围内随机一名友方单位回复2点技力"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_bldsk",
        "name": "应急储备",
        "type": "PHY-X",
        "level": 0,
        "icon": "uniequip_002_bldsk"
      },
      "assets": {
        "avatar": "char_171_bldsk",
        "portrait": "char_171_bldsk_1",
        "spine": "char_171_bldsk",
        "skillIcon": "skchr_bldsk_1",
        "subProfIcon": "sub_physician_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_bldsk_1",
          "iconId": "skchr_bldsk_1",
          "name": "紧急包扎",
          "desc": "下次治疗额外回复目标最大生命值的15%\n只当目标生命值不满一半时才会触发，可充能2次",
          "descRaw": "下次治疗额外回复目标最大生命值的<@ba.vup>15%</>\n<@ba.rem>只当目标生命值不满一半时才会触发，可充能2次</>",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": true
        },
        {
          "index": 1,
          "id": "skchr_bldsk_2",
          "iconId": "skchr_bldsk_2",
          "name": "不稳定血浆",
          "desc": "自身和攻击范围内随机一名我方单位获得以下状态：\n攻击力+45%，每秒流失3%最大生命值，持续15秒",
          "descRaw": "自身和攻击范围内随机一名我方单位获得以下状态：\n攻击力<@ba.vup>+45%</>，每秒流失<@ba.vdown>3%</>最大生命值，持续<@ba.vup>15</>秒",
          "spCost": 60,
          "initSp": 40,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 404
        },
        "3": {
          "stats.respawnTime": 66
        },
        "4": {
          "stats.cost": 18
        }
      },
      "avatar": "bldsk",
      "use": "走灵巧线时替耶拉",
      "id": "bldsk",
      "professionShort": "医",
      "bench": true,
      "subProfession": "医师",
      "skillIdx": 0
    },
    "cetsyr": {
      "chessId": "chess_char_4_25_a",
      "baseId": "chess_char_4_25_a",
      "goldenId": "chess_char_4_25_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 84,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4134_cetsyr",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_cetsyr",
        "potRank": 0
      },
      "shopSortId": 25,
      "charId": "char_4134_cetsyr",
      "name": "魔王",
      "appellation": "Civilight Eterna",
      "rarity": 6,
      "profession": "辅助",
      "subProfessionId": "bard",
      "subProfessionName": "吟游者",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_59_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_25_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1221,
        "atk": 306,
        "def": 188,
        "res": 0,
        "cost": 7,
        "blockCnt": 1,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "x-1",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          -2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -2,
          0
        ]
      ],
      "dmgType": "heal",
      "attackKind": "none",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_cetsyr_3",
        "iconId": "skchr_cetsyr_3",
        "name": "编织重构现世",
        "level": 4,
        "desc": "攻击范围扩大，自身特性效果提高至65%，“微尘”不再消失，攻击范围内所有其它友方单位获得相当于魔王65%的最大生命值的鼓舞效果，每隔2秒重新分配攻击范围内所有友方单位的生命",
        "descRaw": "攻击范围扩大，自身特性效果提高至<@ba.vup>65%</>，“微尘”不再消失，攻击范围内所有其它友方单位获得相当于魔王<@ba.vup>65%</>的最大生命值的<$ba.inspire>鼓舞</>效果，每隔<@ba.vup>2</>秒重新分配攻击范围内所有友方单位的生命",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 30,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 80,
        "initSp": 35,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@atk_to_hp_recovery_ratio": 0.65,
          "max_hp": 0.65,
          "attack@cetsyr_s_3[cal_hp_ratio].interval": 2,
          "attack@cetsyr_s_3[collect_hp_ratio].interval": 2
        },
        "bbStr": {},
        "rangeId": "x-2",
        "rangeGrid": [
          [
            2,
            -1
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            1,
            -2
          ],
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            -2
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            -1,
            -2
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -2,
            -1
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ]
        ],
        "prefabId": "skchr_cetsyr_3",
        "trigger": {
          "rule": "SP_FULL",
          "rawRule": "ALWAYS",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "过往尘埃",
          "desc": "魔王周围持续围绕3枚“微尘”，“微尘”碰撞友方干员时，消失并使该干员受到魔王特性效果提升至1.5倍，持续6秒，消失的“微尘”在6秒后重生"
        },
        {
          "name": "魔王残响",
          "desc": "上阵时，所有友方单位受到【萨卡兹】敌人的伤害降低15%（+5%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_cetsyr",
        "name": "故事的结局",
        "type": "BAR-X",
        "level": 0,
        "icon": "uniequip_002_cetsyr"
      },
      "assets": {
        "avatar": "char_4134_cetsyr",
        "portrait": "char_4134_cetsyr_1",
        "spine": "char_4134_cetsyr",
        "skillIcon": "skchr_cetsyr_3",
        "subProfIcon": "sub_bard_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_cetsyr_1",
          "iconId": "skchr_cetsyr_1",
          "name": "往昔萦绕身旁",
          "desc": "自身特性效果提高至20%，“微尘”的重生速度加快\n持续时间无限",
          "descRaw": "自身特性效果提高至<@ba.vup>20%</>，“微尘”的重生速度加快\n<@ba.rem>持续时间无限</>",
          "spCost": 80,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_cetsyr_2",
          "iconId": "skchr_cetsyr_2",
          "name": "明日渺远不及",
          "desc": "“微尘”上限+3，立刻获得6枚“微尘”，“微尘”旋转半径扩大，攻击范围内所有其他友方单位获得相当于魔王65%攻击力的鼓舞效果，“微尘”不再碰撞友方干员，“微尘”碰撞敌方单位时造成相当于魔王攻击力220%的真实伤害，并使目标束缚3秒",
          "descRaw": "“微尘”上限<@ba.vup>+3</>，立刻获得<@ba.vup>6</>枚“微尘”，“微尘”旋转半径扩大，攻击范围内所有其他友方单位获得相当于魔王<@ba.vup>65%</>攻击力的<$ba.inspire>鼓舞</>效果，“微尘”不再碰撞友方干员，“微尘”碰撞敌方单位时造成相当于魔王攻击力<@ba.vup>220%</>的真实伤害，并使目标<$ba.root>束缚</><@ba.vup>3</>秒",
          "spCost": 35,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_cetsyr_3",
          "iconId": "skchr_cetsyr_3",
          "name": "编织重构现世",
          "desc": "攻击范围扩大，自身特性效果提高至65%，“微尘”不再消失，攻击范围内所有其它友方单位获得相当于魔王65%的最大生命值的鼓舞效果，每隔2秒重新分配攻击范围内所有友方单位的生命",
          "descRaw": "攻击范围扩大，自身特性效果提高至<@ba.vup>65%</>，“微尘”不再消失，攻击范围内所有其它友方单位获得相当于魔王<@ba.vup>65%</>的最大生命值的<$ba.inspire>鼓舞</>效果，每隔<@ba.vup>2</>秒重新分配攻击范围内所有友方单位的生命",
          "spCost": 80,
          "initSp": 35,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 10
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 9
        },
        "4": {
          "stats.cost": 8
        }
      },
      "avatar": "cetsyr",
      "use": "大顺风外援",
      "id": "cetsyr",
      "professionShort": "辅",
      "bench": true,
      "subProfession": "吟游者",
      "skillIdx": 2
    },
    "archet": {
      "chessId": "chess_char_3_21_a",
      "baseId": "chess_char_3_21_a",
      "goldenId": "chess_char_3_21_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 59,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_611_acnipe",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 21,
      "charId": "char_332_archet",
      "name": "空弦",
      "appellation": "Archetto",
      "rarity": 6,
      "profession": "狙击",
      "subProfessionId": "fastshot",
      "subProfessionName": "速射手",
      "nationId": "laterano",
      "garrisonIds": [
        "garrison_150_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_21_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1364,
        "atk": 454,
        "def": 146,
        "res": 0,
        "cost": 12,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": "fly",
      "skill": {
        "skillId": "skchr_archet_3",
        "iconId": "skchr_archet_3",
        "name": "箭矢·暴风",
        "level": 4,
        "desc": "攻击力+10%，攻击距离+1，攻击变为3连击，每次可以攻击2个敌人",
        "descRaw": "攻击力<@ba.vup>+10%</>，攻击距离<@ba.vup>+1</>，攻击变为<@ba.vup>3</>连击，每次可以攻击<@ba.vup>2</>个敌人",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WHEN_ATTACK",
        "spCost": 37,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.1,
          "ability_range_forward_extend": 1,
          "attack@max_target": 2,
          "attack@times": 3
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_archet_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -1,
              3
            ],
            [
              1,
              4
            ],
            [
              0,
              4
            ],
            [
              -1,
              4
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "兰登战术",
          "desc": "在场时所有【狙击】干员的攻击回复技能每2.5秒回复1点技力"
        },
        {
          "name": "铁弦",
          "desc": "部署后立即获得一层护盾，护盾破裂后获得9（+2）点技力"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_archet",
        "name": "“明天的种子”",
        "type": "MAR-Y",
        "level": 0,
        "icon": "uniequip_002_archet"
      },
      "assets": {
        "avatar": "char_332_archet",
        "portrait": "char_332_archet_1",
        "spine": "char_332_archet",
        "skillIcon": "skchr_archet_3",
        "subProfIcon": "sub_fastshot_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_archet_1",
          "iconId": "skchr_archet_1",
          "name": "箭矢·散逸",
          "desc": "下次攻击造成相当于攻击力185%的物理伤害，并额外选择目标周围最多3名其他敌人造成攻击力135%的物理伤害",
          "descRaw": "下次攻击造成相当于攻击力<@ba.vup>185%</>的物理伤害，并额外选择目标周围最多<@ba.vup>3</>名其他敌人造成攻击力<@ba.vup>135%</>的物理伤害",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_archet_2",
          "iconId": "skchr_archet_2",
          "name": "箭矢·追猎",
          "desc": "立即发射箭矢对目标进行攻击力114%的5次攻击，可弹射至目标周围的下一个未选择过的敌人（每次弹射减少1次攻击次数）；可充能1次",
          "descRaw": "立即发射箭矢对目标进行攻击力<@ba.vup>114%</>的<@ba.vup>5</>次攻击，可弹射至目标周围的下一个未选择过的敌人（每次弹射减少1次攻击次数）；<@ba.rem>可充能1次</>",
          "spCost": 13,
          "initSp": 0,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_archet_3",
          "iconId": "skchr_archet_3",
          "name": "箭矢·暴风",
          "desc": "攻击力+10%，攻击距离+1，攻击变为3连击，每次可以攻击2个敌人",
          "descRaw": "攻击力<@ba.vup>+10%</>，攻击距离<@ba.vup>+1</>，攻击变为<@ba.vup>3</>连击，每次可以攻击<@ba.vup>2</>个敌人",
          "spCost": 37,
          "initSp": 15,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 14
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 427
        },
        "4": {
          "stats.cost": 13
        }
      },
      "avatar": "archet",
      "use": "缺对空时",
      "id": "archet",
      "professionShort": "狙",
      "bench": true,
      "subProfession": "速射手",
      "skillIdx": 2
    },
    "lisa": {
      "chessId": "chess_char_5_10_a",
      "baseId": "chess_char_5_10_a",
      "goldenId": "chess_char_5_10_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 95,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_606_csuppo",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 10,
      "charId": "char_358_lisa",
      "name": "铃兰",
      "appellation": "Suzuran",
      "rarity": 6,
      "profession": "辅助",
      "subProfessionId": "slower",
      "subProfessionName": "凝滞师",
      "nationId": "siracusa",
      "garrisonIds": [
        "garrison_60_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_10_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1184,
        "atk": 457,
        "def": 107,
        "res": 25,
        "cost": 14,
        "blockCnt": 1,
        "bat": 1.9,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_lisa_3",
        "iconId": "skchr_lisa_3",
        "name": "狐火渺然",
        "level": 4,
        "desc": "停止攻击，攻击范围扩大，第二天赋效果提升至1.4倍，攻击范围内的所有敌人被停顿，且每秒回复范围内所有友方单位相当于攻击力9%的生命",
        "descRaw": "<@ba.vdown>停止攻击</>，攻击范围<@ba.vup>扩大</>，第二天赋效果提升至<@ba.vup>1.4</>倍，攻击范围内的所有敌人被<$ba.sluggish><@ba.vup>停顿</></>，且每秒回复范围内所有友方单位相当于攻击力<@ba.vup>9%</>的生命",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 27,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 70,
        "initSp": 43,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "scale_delta_to_one": 1.4,
          "attack@atk_to_hp_recovery_ratio": 0.09
        },
        "bbStr": {},
        "rangeId": "y-8",
        "rangeGrid": [
          [
            2,
            -1
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            2,
            2
          ],
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -1,
            3
          ],
          [
            -2,
            -1
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ],
          [
            -2,
            2
          ]
        ],
        "prefabId": "skchr_lisa_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              2,
              -1
            ],
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              2,
              2
            ],
            [
              1,
              -1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              0,
              -1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              -1
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -1,
              3
            ],
            [
              -2,
              -1
            ],
            [
              -2,
              0
            ],
            [
              -2,
              1
            ],
            [
              -2,
              2
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "技力光环·辅助",
          "desc": "在场时所有【辅助】干员的技力自然回复速度+0.4/秒（同类效果取最高）"
        },
        {
          "name": "画地为牢",
          "desc": "攻击范围内被停顿的敌人在下一瞬间起还会受到等长时间的23%（+3%）的脆弱效果"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_lisa",
        "name": "怀中御守",
        "type": "DEC-X",
        "level": 0,
        "icon": "uniequip_002_lisa"
      },
      "assets": {
        "avatar": "char_358_lisa",
        "portrait": "char_358_lisa_1",
        "spine": "char_358_lisa",
        "skillIcon": "skchr_lisa_3",
        "subProfIcon": "sub_slower_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_lisa_1",
          "iconId": "skchr_lisa_1",
          "name": "全力以赴",
          "desc": "攻击力+45%，攻击速度+10\n技能自动开启",
          "descRaw": "攻击力<@ba.vup>+45%</>，攻击速度<@ba.vup>+10</>\n<@ba.rem>技能自动开启</>",
          "spCost": 20,
          "initSp": 0,
          "duration": 23,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_lisa_2",
          "iconId": "skchr_lisa_2",
          "name": "儿时的舞乐",
          "desc": "攻击力+20%，可以同时攻击2个敌方单位\n持续时间无限",
          "descRaw": "攻击力<@ba.vup>+20%</>，可以同时攻击<@ba.vup>2</>个敌方单位\n<@ba.rem>持续时间无限</>",
          "spCost": 101,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_lisa_3",
          "iconId": "skchr_lisa_3",
          "name": "狐火渺然",
          "desc": "停止攻击，攻击范围扩大，第二天赋效果提升至1.4倍，攻击范围内的所有敌人被停顿，且每秒回复范围内所有友方单位相当于攻击力9%的生命",
          "descRaw": "<@ba.vdown>停止攻击</>，攻击范围<@ba.vup>扩大</>，第二天赋效果提升至<@ba.vup>1.4</>倍，攻击范围内的所有敌人被<$ba.sluggish><@ba.vup>停顿</></>，且每秒回复范围内所有友方单位相当于攻击力<@ba.vup>9%</>的生命",
          "spCost": 70,
          "initSp": 43,
          "duration": 27,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 16
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 432
        },
        "4": {
          "stats.cost": 15
        }
      },
      "avatar": "lisa",
      "use": "杂技，不推荐新手",
      "id": "lisa",
      "professionShort": "辅",
      "bench": true,
      "subProfession": "凝滞师",
      "skillIdx": 2
    },
    "char_498_inside": {
      "chessId": "chess_char_1_01_a",
      "baseId": "chess_char_1_01_a",
      "goldenId": "chess_char_1_01_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 0,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_498_inside",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_inside",
        "potRank": 0
      },
      "shopSortId": 1,
      "charId": "char_498_inside",
      "name": "隐现",
      "appellation": "Insider",
      "rarity": 5,
      "profession": "狙击",
      "subProfessionId": "fastshot",
      "subProfessionName": "速射手",
      "nationId": "laterano",
      "garrisonIds": [
        "garrison_16_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_01_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1123,
        "atk": 422,
        "def": 140,
        "res": 0,
        "cost": 12,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": "fly",
      "skill": {
        "skillId": "skchr_inside_2",
        "iconId": "skchr_inside_2",
        "name": "“解决麻烦”",
        "level": 4,
        "desc": "攻击力+80%，攻击间隔略微缩短，优先攻击使用远程武器的敌人并且不容易成为敌人的攻击目标\n攻击装有14发弹药，打完后结束（可随时停止技能）",
        "descRaw": "攻击力<@ba.vup>+80%</>，攻击间隔<@ba.vup>略微缩短</>，优先攻击使用远程武器的敌人并且不容易成为敌人的攻击目标\n<@ba.rem>攻击装有14发弹药，打完后结束（可随时停止技能）</>",
        "skillType": "MANUAL",
        "durationType": "AMMO",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 24,
        "initSp": 8,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.8,
          "base_attack_time": -0.3,
          "attack@trigger_time": 14
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_inside_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "火力支援",
          "desc": "在场停留20秒后，自身弹药类技能弹药上限+2"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_inside",
        "name": "“最初的惊喜”",
        "type": "MAR-X",
        "level": 0,
        "icon": "uniequip_002_inside"
      },
      "assets": {
        "avatar": "char_498_inside",
        "portrait": "char_498_inside_1",
        "spine": "char_498_inside",
        "skillIcon": "skchr_inside_2",
        "subProfIcon": "sub_fastshot_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_inside_1",
          "iconId": "skchr_inside_1",
          "name": "“不惹麻烦”",
          "desc": "每次攻击造成相当于攻击力185%的物理伤害\n攻击装有4发弹药，打完后结束（可随时停止技能）",
          "descRaw": "每次攻击造成相当于攻击力<@ba.vup>185%</>的物理伤害\n<@ba.rem>攻击装有4发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 14,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_inside_2",
          "iconId": "skchr_inside_2",
          "name": "“解决麻烦”",
          "desc": "攻击力+80%，攻击间隔略微缩短，优先攻击使用远程武器的敌人并且不容易成为敌人的攻击目标\n攻击装有14发弹药，打完后结束（可随时停止技能）",
          "descRaw": "攻击力<@ba.vup>+80%</>，攻击间隔<@ba.vup>略微缩短</>，优先攻击使用远程武器的敌人并且不容易成为敌人的攻击目标\n<@ba.rem>攻击装有14发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 24,
          "initSp": 8,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 15
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 14
        },
        "3": {
          "stats.atk": 399
        },
        "4": {
          "stats.cost": 13
        }
      },
      "id": "char_498_inside",
      "avatar": "char_498_inside",
      "professionShort": "狙",
      "subProfession": "速射手",
      "skillIdx": 1,
      "bench": false
    },
    "char_306_leizi": {
      "chessId": "chess_char_1_03_a",
      "baseId": "chess_char_1_03_a",
      "goldenId": "chess_char_1_03_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 2,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_306_leizi",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_leizi",
        "potRank": 0
      },
      "shopSortId": 3,
      "charId": "char_306_leizi",
      "name": "惊蛰",
      "appellation": "Leizi",
      "rarity": 5,
      "profession": "术师",
      "subProfessionId": "chain",
      "subProfessionName": "链术师",
      "nationId": "yan",
      "garrisonIds": [
        "garrison_30_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_03_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1041,
        "atk": 530,
        "def": 93,
        "res": 15,
        "cost": 30,
        "blockCnt": 1,
        "bat": 2.3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-1",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_leizi_2",
        "iconId": "skchr_leizi_2",
        "name": "初雷",
        "level": 4,
        "desc": "攻击力+80%，攻击在跳跃时不再降低伤害",
        "descRaw": "攻击力<@ba.vup>+80%</>，攻击在跳跃时<@ba.vup>不再降低伤害</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 31,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 80,
        "initSp": 43,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.8
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_leizi_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "通流无阻",
          "desc": "攻击未被阻挡的敌人时攻击力提升至113%（+3%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_leizi",
        "name": "“天地通明”",
        "type": "CHA-X",
        "level": 0,
        "icon": "uniequip_002_leizi"
      },
      "assets": {
        "avatar": "char_306_leizi",
        "portrait": "char_306_leizi_1",
        "spine": "char_306_leizi",
        "skillIcon": "skchr_leizi_2",
        "subProfIcon": "sub_chain_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_atk_up[3]",
          "iconId": "skcom_atk_up[3]",
          "name": "攻击力强化·γ型",
          "desc": "攻击力+45%",
          "descRaw": "攻击力<@ba.vup>+45%</>",
          "spCost": 37,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_leizi_2",
          "iconId": "skchr_leizi_2",
          "name": "初雷",
          "desc": "攻击力+80%，攻击在跳跃时不再降低伤害",
          "descRaw": "攻击力<@ba.vup>+80%</>，攻击在跳跃时<@ba.vup>不再降低伤害</>",
          "spCost": 80,
          "initSp": 43,
          "duration": 31,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 32
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 502
        },
        "4": {
          "stats.cost": 31
        }
      },
      "id": "char_306_leizi",
      "avatar": "char_306_leizi",
      "professionShort": "术",
      "subProfession": "链术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4137_udflow": {
      "chessId": "chess_char_1_04_a",
      "baseId": "chess_char_1_04_a",
      "goldenId": "chess_char_1_04_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 3,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4137_udflow",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_udflow",
        "potRank": 0
      },
      "shopSortId": 4,
      "charId": "char_4137_udflow",
      "name": "深巡",
      "appellation": "Underflow",
      "rarity": 5,
      "profession": "重装",
      "subProfessionId": "shotprotector",
      "subProfessionName": "哨戒铁卫",
      "nationId": "egir",
      "garrisonIds": [
        "garrison_18_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_04_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2207,
        "atk": 348,
        "def": 479,
        "res": 0,
        "cost": 19,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-2",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_udflow_2",
        "iconId": "skchr_udflow_2",
        "name": "行动能力剥夺",
        "level": 4,
        "desc": "攻击距离加长，攻击力+30%，攻击速度+25，攻击变为向正前方发射的毒性鳍刺，能穿过3个目标且造成1秒停顿。",
        "descRaw": "攻击距离<@ba.vup>加长</>，攻击力<@ba.vup>+30%</>，攻击速度<@ba.vup>+25</>，攻击变为向正前方发射的毒性鳍刺，能穿过<@ba.vup>3</>个目标且造成<@ba.vup>1</>秒<$ba.sluggish>停顿</>。",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 39,
        "initSp": 21,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.3,
          "mode": 1,
          "attack@sluggish": 1,
          "attack_speed": 25,
          "attack@max_target": 3
        },
        "bbStr": {},
        "rangeId": "3-2",
        "rangeGrid": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ]
        ],
        "prefabId": "skchr_udflow_2",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": [
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "细胞活性抑制剂",
          "desc": "攻击使目标在3秒内每秒受到50（+10）点法术伤害（对【海怪】敌人伤害加倍）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_udflow",
        "name": "基于咖啡的神经活性剂",
        "type": "SPT-X",
        "level": 0,
        "icon": "uniequip_002_udflow"
      },
      "assets": {
        "avatar": "char_4137_udflow",
        "portrait": "char_4137_udflow_1",
        "spine": "char_4137_udflow",
        "skillIcon": "skchr_udflow_2",
        "subProfIcon": "sub_shotprotector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_udflow_1",
          "iconId": "skchr_udflow_1",
          "name": "侵袭破坏应对",
          "desc": "攻击力+32%，防御力+32%",
          "descRaw": "攻击力<@ba.vup>+32%</>，防御力<@ba.vup>+32%</>",
          "spCost": 37,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_udflow_2",
          "iconId": "skchr_udflow_2",
          "name": "行动能力剥夺",
          "desc": "攻击距离加长，攻击力+30%，攻击速度+25，攻击变为向正前方发射的毒性鳍刺，能穿过3个目标且造成1秒停顿。",
          "descRaw": "攻击距离<@ba.vup>加长</>，攻击力<@ba.vup>+30%</>，攻击速度<@ba.vup>+25</>，攻击变为向正前方发射的毒性鳍刺，能穿过<@ba.vup>3</>个目标且造成<@ba.vup>1</>秒<$ba.sluggish>停顿</>。",
          "spCost": 39,
          "initSp": 21,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 22
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 21
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_4137_udflow",
      "avatar": "char_4137_udflow",
      "professionShort": "重",
      "subProfession": "哨戒铁卫",
      "skillIdx": 1,
      "bench": false
    },
    "char_494_vendla": {
      "chessId": "chess_char_1_06_a",
      "baseId": "chess_char_1_06_a",
      "goldenId": "chess_char_1_06_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 5,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_494_vendla",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_vendla",
        "potRank": 0
      },
      "shopSortId": 6,
      "charId": "char_494_vendla",
      "name": "刺玫",
      "appellation": "Vendela",
      "rarity": 5,
      "profession": "医疗",
      "subProfessionId": "incantationmedic",
      "subProfessionName": "咒愈师",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_154_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_06_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1137,
        "atk": 435,
        "def": 77,
        "res": 15,
        "cost": 15,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_vendla_2",
        "iconId": "skchr_vendla_2",
        "name": "荆藤庇荫",
        "level": 4,
        "desc": "攻击力+55%，使攻击范围内生命上限最高的友方角色更容易受到敌人攻击，且该角色受到攻击时刺玫对目标造成攻击力20%的法术伤害并仅对该角色触发刺玫特性",
        "descRaw": "攻击力<@ba.vup>+55%</>，使攻击范围内生命上限最高的友方角色更容易受到敌人攻击，且该角色受到攻击时刺玫对目标造成攻击力<@ba.vup>20%</>的法术伤害并仅对该角色触发刺玫特性",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 36,
        "initSp": 10,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 0.2,
          "taunt_level": 1,
          "atk": 0.55
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_vendla_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "土壤基肥改良",
          "desc": "攻击范围内生命上限最高的友方角色受到的治疗效果提升11%（+3%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_vendla",
        "name": "碎片",
        "type": "INC-X",
        "level": 0,
        "icon": "uniequip_002_vendla"
      },
      "assets": {
        "avatar": "char_494_vendla",
        "portrait": "char_494_vendla_1",
        "spine": "char_494_vendla",
        "skillIcon": "skchr_vendla_2",
        "subProfIcon": "sub_incantationmedic_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_magic_rage[3]",
          "iconId": "skcom_magic_rage[3]",
          "name": "战术咏唱·γ型",
          "desc": "攻击速度+45",
          "descRaw": "攻击速度<@ba.vup>+45</>",
          "spCost": 35,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_vendla_2",
          "iconId": "skchr_vendla_2",
          "name": "荆藤庇荫",
          "desc": "攻击力+55%，使攻击范围内生命上限最高的友方角色更容易受到敌人攻击，且该角色受到攻击时刺玫对目标造成攻击力20%的法术伤害并仅对该角色触发刺玫特性",
          "descRaw": "攻击力<@ba.vup>+55%</>，使攻击范围内生命上限最高的友方角色更容易受到敌人攻击，且该角色受到攻击时刺玫对目标造成攻击力<@ba.vup>20%</>的法术伤害并仅对该角色触发刺玫特性",
          "spCost": 36,
          "initSp": 10,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 17
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 413
        },
        "4": {
          "stats.cost": 16
        }
      },
      "id": "char_494_vendla",
      "avatar": "char_494_vendla",
      "professionShort": "医",
      "subProfession": "咒愈师",
      "skillIdx": 1,
      "bench": false
    },
    "char_145_prove": {
      "chessId": "chess_char_1_07_a",
      "baseId": "chess_char_1_07_a",
      "goldenId": "chess_char_1_07_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 6,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_145_prove",
        "tmplId": null,
        "skillIndex": 0,
        "uniEquipId": "uniequip_002_prove",
        "potRank": 0
      },
      "shopSortId": 7,
      "charId": "char_145_prove",
      "name": "普罗旺斯",
      "appellation": "Provence",
      "rarity": 5,
      "profession": "狙击",
      "subProfessionId": "closerange",
      "subProfessionName": "重射手",
      "nationId": "siracusa",
      "garrisonIds": [
        "garrison_113_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_07_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1215,
        "atk": 599,
        "def": 148,
        "res": 0,
        "cost": 15,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-6",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_prove_1",
        "iconId": "skchr_prove_1",
        "name": "狼眼",
        "level": 4,
        "desc": "目标敌人的生命每降低20%，对其造成伤害时的攻击力+12%",
        "descRaw": "目标敌人的生命<@ba.vup>每降低20%</>，对其造成伤害时的攻击力<@ba.vup>+12%</>",
        "skillType": "PASSIVE",
        "durationType": "NONE",
        "duration": 0,
        "spType": "ON_DEPLOY",
        "spCost": 0,
        "initSp": 0,
        "maxChargeTime": 0,
        "increment": 0,
        "bb": {
          "hp_ratio_drop": 0.2,
          "atk_scale_up": 0.12
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_prove_1",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 0,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "狩猎箭头",
          "desc": "攻击时，20%几率当次攻击的攻击力提升至150%（+10%）。当敌人在正前方一格时，该几率提升到50%"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_prove",
        "name": "尾巴养护套装",
        "type": "ARC-X",
        "level": 0,
        "icon": "uniequip_002_prove"
      },
      "assets": {
        "avatar": "char_145_prove",
        "portrait": "char_145_prove_1",
        "spine": "char_145_prove",
        "skillIcon": "skchr_prove_1",
        "subProfIcon": "sub_closerange_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_prove_1",
          "iconId": "skchr_prove_1",
          "name": "狼眼",
          "desc": "目标敌人的生命每降低20%，对其造成伤害时的攻击力+12%",
          "descRaw": "目标敌人的生命<@ba.vup>每降低20%</>，对其造成伤害时的攻击力<@ba.vup>+12%</>",
          "spCost": 0,
          "initSp": 0,
          "duration": 0,
          "skillType": "PASSIVE",
          "isDefault": true
        },
        {
          "index": 1,
          "id": "skchr_prove_2",
          "iconId": "skchr_prove_2",
          "name": "杀戮嗅觉",
          "desc": "攻击力+145%，但普通攻击不再以生命值高于80%的敌人作为目标",
          "descRaw": "攻击力<@ba.vup>+145%</>，但普通攻击不再以生命值高于<@ba.vdown>80%</>的敌人作为目标",
          "spCost": 30,
          "initSp": 0,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 17
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 569
        },
        "4": {
          "stats.cost": 16
        }
      },
      "id": "char_145_prove",
      "avatar": "char_145_prove",
      "professionShort": "狙",
      "subProfession": "重射手",
      "skillIdx": 0,
      "bench": false
    },
    "char_102_texas": {
      "chessId": "chess_char_1_08_a",
      "baseId": "chess_char_1_08_a",
      "goldenId": "chess_char_1_08_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 7,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_102_texas",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_texas",
        "potRank": 0
      },
      "shopSortId": 8,
      "charId": "char_102_texas",
      "name": "德克萨斯",
      "appellation": "Texas",
      "rarity": 5,
      "profession": "先锋",
      "subProfessionId": "pioneer",
      "subProfessionName": "尖兵",
      "nationId": "lungmen",
      "garrisonIds": [
        "garrison_120_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_08_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1285,
        "atk": 410,
        "def": 260,
        "res": 0,
        "cost": 11,
        "blockCnt": 2,
        "bat": 1.05,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_texas_2",
        "iconId": "skchr_texas_2",
        "name": "剑雨",
        "level": 4,
        "desc": "立即获得10点费用；对周围所有敌人造成两次相当于攻击力120%的法术伤害，并令击中目标晕眩2秒",
        "descRaw": "立即获得<@ba.vup>10</>点费用；对周围所有敌人造成<@ba.vup>两次</>相当于攻击力<@ba.vup>120%</>的法术伤害，并令击中目标<$ba.stun>晕眩</><@ba.vup>2</>秒",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 40,
        "initSp": 23,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "cost": 10,
          "atk_scale": 1.2,
          "stun": 2
        },
        "bbStr": {},
        "rangeId": "x-1",
        "rangeGrid": [
          [
            2,
            0
          ],
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0,
            -2
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -2,
            0
          ]
        ],
        "prefabId": "skchr_texas_2",
        "trigger": {
          "rule": "SKILL_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              2,
              0
            ],
            [
              1,
              -1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              0,
              -2
            ],
            [
              0,
              -1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              -1,
              -1
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -2,
              0
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "战术快递",
          "desc": "编入队伍后，额外获得1点初始部署费用"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_texas",
        "name": "外勤私人补给包",
        "type": "SOL-Y",
        "level": 0,
        "icon": "uniequip_002_texas"
      },
      "assets": {
        "avatar": "char_102_texas",
        "portrait": "char_102_texas_1",
        "spine": "char_102_texas",
        "skillIcon": "skchr_texas_2",
        "subProfIcon": "sub_pioneer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_charge_cost[3]",
          "iconId": "skcom_charge_cost[3]",
          "name": "冲锋号令·γ型",
          "desc": "立即获得12点部署费用",
          "descRaw": "立即获得<@ba.vup>12</>点部署费用",
          "spCost": 41,
          "initSp": 12,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_texas_2",
          "iconId": "skchr_texas_2",
          "name": "剑雨",
          "desc": "立即获得10点费用；对周围所有敌人造成两次相当于攻击力120%的法术伤害，并令击中目标晕眩2秒",
          "descRaw": "立即获得<@ba.vup>10</>点费用；对周围所有敌人造成<@ba.vup>两次</>相当于攻击力<@ba.vup>120%</>的法术伤害，并令击中目标<$ba.stun>晕眩</><@ba.vup>2</>秒",
          "spCost": 40,
          "initSp": 23,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 13
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 386
        },
        "3": {
          "stats.respawnTime": 66
        },
        "4": {
          "stats.cost": 12
        }
      },
      "id": "char_102_texas",
      "avatar": "char_102_texas",
      "professionShort": "先",
      "subProfession": "尖兵",
      "skillIdx": 1,
      "bench": false
    },
    "char_4100_caper": {
      "chessId": "chess_char_1_09_a",
      "baseId": "chess_char_1_09_a",
      "goldenId": "chess_char_1_09_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 8,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4100_caper",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_caper",
        "potRank": 0
      },
      "shopSortId": 9,
      "charId": "char_4100_caper",
      "name": "跃跃",
      "appellation": "Caper",
      "rarity": 4,
      "profession": "狙击",
      "subProfessionId": "loopshooter",
      "subProfessionName": "回环射手",
      "nationId": "bolivar",
      "garrisonIds": [
        "garrison_19_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_09_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1770,
        "atk": 502,
        "def": 132,
        "res": 0,
        "cost": 12,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-7",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_caper_2",
        "iconId": "skchr_caper_2",
        "name": "乐趣加倍",
        "level": 4,
        "desc": "攻击力+25%，每次攻击额外发射1个回旋投射物",
        "descRaw": "攻击力<@ba.vup>+25%</>，每次攻击额外发射<@ba.vup>1</>个回旋投射物",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 16,
        "spType": "INCREASE_WHEN_ATTACK",
        "spCost": 32,
        "initSp": 11,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.25,
          "cnt": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_caper_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "戏耍随心",
          "desc": "攻击时，25%几率当次攻击的攻击力提升至140%（+10%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_caper",
        "name": "暖意的归宿",
        "type": "LPS-X",
        "level": 0,
        "icon": "uniequip_002_caper"
      },
      "assets": {
        "avatar": "char_4100_caper",
        "portrait": "char_4100_caper_1",
        "spine": "char_4100_caper",
        "skillIcon": "skchr_caper_2",
        "subProfIcon": "sub_loopshooter_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_caper_1",
          "iconId": "skcom_powerstrike[2]",
          "name": "强力击·β型",
          "desc": "下次攻击的攻击力提高至185%",
          "descRaw": "下次攻击的攻击力提高至<@ba.vup>185%</>",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_caper_2",
          "iconId": "skchr_caper_2",
          "name": "乐趣加倍",
          "desc": "攻击力+25%，每次攻击额外发射1个回旋投射物",
          "descRaw": "攻击力<@ba.vup>+25%</>，每次攻击额外发射<@ba.vup>1</>个回旋投射物",
          "spCost": 32,
          "initSp": 11,
          "duration": 16,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 14
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 479
        },
        "4": {
          "stats.cost": 13
        }
      },
      "id": "char_4100_caper",
      "avatar": "char_4100_caper",
      "professionShort": "狙",
      "subProfession": "回环射手",
      "skillIdx": 1,
      "bench": false
    },
    "char_196_sunbr": {
      "chessId": "chess_char_1_10_a",
      "baseId": "chess_char_1_10_a",
      "goldenId": "chess_char_1_10_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 9,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_196_sunbr",
        "tmplId": null,
        "skillIndex": 0,
        "uniEquipId": "uniequip_002_sunbr",
        "potRank": 0
      },
      "shopSortId": 10,
      "charId": "char_196_sunbr",
      "name": "古米",
      "appellation": "Гум",
      "rarity": 4,
      "profession": "重装",
      "subProfessionId": "guardian",
      "subProfessionName": "守护者",
      "nationId": "ursus",
      "garrisonIds": [
        "garrison_08_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_10_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1802,
        "atk": 361,
        "def": 450,
        "res": 10,
        "cost": 16,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "0-1",
      "rangeGrid": [
        [
          0,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_sunbr_1",
        "iconId": "skchr_sunbr_1",
        "name": "备用军粮",
        "level": 4,
        "desc": "下次攻击会恢复附近一名友方角色相当于古米攻击力115%的生命值\n可充能1次",
        "descRaw": "下次攻击会恢复附近一名友方角色相当于古米攻击力<@ba.vup>115%</>的生命值\n<@ba.rem>可充能1次</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 6,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "heal_scale": 1.15,
          "ct": 1
        },
        "bbStr": {},
        "rangeId": "x-4",
        "rangeGrid": [
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ]
        ],
        "prefabId": "skchr_sunbr_1",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 0,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "平底锅专精",
          "desc": "攻击时，13%（+3%）几率当次攻击的攻击力提升至150%，并晕眩敌人0.5秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_sunbr",
        "name": "蜜糖馅饼礼包",
        "type": "GUA-X",
        "level": 0,
        "icon": "uniequip_002_sunbr"
      },
      "assets": {
        "avatar": "char_196_sunbr",
        "portrait": "char_196_sunbr_1",
        "spine": "char_196_sunbr",
        "skillIcon": "skchr_sunbr_1",
        "subProfIcon": "sub_guardian_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_sunbr_1",
          "iconId": "skchr_sunbr_1",
          "name": "备用军粮",
          "desc": "下次攻击会恢复附近一名友方角色相当于古米攻击力115%的生命值\n可充能1次",
          "descRaw": "下次攻击会恢复附近一名友方角色相当于古米攻击力<@ba.vup>115%</>的生命值\n<@ba.rem>可充能1次</>",
          "spCost": 6,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": true
        },
        {
          "index": 1,
          "id": "skchr_sunbr_2",
          "iconId": "skchr_sunbr_2",
          "name": "食粮烹制",
          "desc": "开始烹饪，10秒内停止攻击敌人，防御力+60%\n烹饪完成后专注于治疗附近的友方角色，攻击力+40%",
          "descRaw": "开始烹饪，<@ba.vdown>10</>秒内停止攻击敌人，防御力<@ba.vup>+60%</>\n烹饪完成后专注于治疗附近的友方角色，攻击力<@ba.vup>+40%</>",
          "spCost": 37,
          "initSp": 12,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 18
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 340
        },
        "4": {
          "stats.cost": 17
        }
      },
      "id": "char_196_sunbr",
      "avatar": "char_196_sunbr",
      "professionShort": "重",
      "subProfession": "守护者",
      "skillIdx": 0,
      "bench": false
    },
    "char_127_estell": {
      "chessId": "chess_char_1_12_a",
      "baseId": "chess_char_1_12_a",
      "goldenId": "chess_char_1_12_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 11,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_127_estell",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_estell",
        "potRank": 0
      },
      "shopSortId": 12,
      "charId": "char_127_estell",
      "name": "艾丝黛尔",
      "appellation": "Estelle",
      "rarity": 4,
      "profession": "近卫",
      "subProfessionId": "centurion",
      "subProfessionName": "强攻手",
      "nationId": "sargon",
      "garrisonIds": [
        "garrison_25_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_12_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2040,
        "atk": 512,
        "def": 252,
        "res": 0,
        "cost": 18,
        "blockCnt": 2,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_estell_2",
        "iconId": "skchr_estell_2",
        "name": "舍身突击",
        "level": 4,
        "desc": "攻击力+100%，不再成为其他角色的治疗目标",
        "descRaw": "攻击力<@ba.vup>+100%</>，不再成为其他角色的治疗目标",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WHEN_TAKEN_DAMAGE",
        "spCost": 24,
        "initSp": 10,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 1,
          "block_cnt": 0
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_estell_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "自愈能力",
          "desc": "周围8格内有敌人倒下时，恢复自身最大生命值9%（+2%）的生命"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_estell",
        "name": "荒野地的饯别礼",
        "type": "CEN-Y",
        "level": 0,
        "icon": "uniequip_002_estell"
      },
      "assets": {
        "avatar": "char_127_estell",
        "portrait": "char_127_estell_1",
        "spine": "char_127_estell",
        "skillIcon": "skchr_estell_2",
        "subProfIcon": "sub_centurion_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_atk_up[2]",
          "iconId": "skcom_atk_up[2]",
          "name": "攻击力强化·β型",
          "desc": "攻击力+35%",
          "descRaw": "攻击力<@ba.vup>+35%</>",
          "spCost": 37,
          "initSp": 0,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_estell_2",
          "iconId": "skchr_estell_2",
          "name": "舍身突击",
          "desc": "攻击力+100%，不再成为其他角色的治疗目标",
          "descRaw": "攻击力<@ba.vup>+100%</>，不再成为其他角色的治疗目标",
          "spCost": 24,
          "initSp": 10,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 20
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.maxHp": 1840
        },
        "4": {
          "stats.cost": 19
        }
      },
      "id": "char_127_estell",
      "avatar": "char_127_estell",
      "professionShort": "近",
      "subProfession": "强攻手",
      "skillIdx": 1,
      "bench": false
    },
    "char_258_podego": {
      "chessId": "chess_char_1_13_a",
      "baseId": "chess_char_1_13_a",
      "goldenId": "chess_char_1_13_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 12,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_258_podego",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_podego",
        "potRank": 0
      },
      "shopSortId": 13,
      "charId": "char_258_podego",
      "name": "波登可",
      "appellation": "Podenco",
      "rarity": 4,
      "profession": "辅助",
      "subProfessionId": "slower",
      "subProfessionName": "凝滞师",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_102_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_13_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 913,
        "atk": 420,
        "def": 78,
        "res": 15,
        "cost": 12,
        "blockCnt": 1,
        "bat": 1.9,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_podego_2",
        "iconId": "skchr_podego_2",
        "name": "孢子扩散",
        "level": 4,
        "desc": "立即投掷一个小瓶，碎裂后在周围产生一个持续5秒的孢子群\n孢子群范围内所有敌人被停顿且失去特殊能力，每秒受到相当于攻击力50%的法术伤害",
        "descRaw": "立即投掷一个小瓶，碎裂后在周围产生一个持续<@ba.vup>5</>秒的孢子群\n孢子群范围内所有敌人被<$ba.sluggish>停顿</>且失去特殊能力，每秒受到相当于攻击力<@ba.vup>50%</>的法术伤害",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 32,
        "initSp": 10,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "projectile_delay_time": 5,
          "atk_scale": 0.5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_podego_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "园丁",
          "desc": "在场时，所有【辅助】干员攻击力+7%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_podego",
        "name": "“不谢的苗圃”",
        "type": "DEC-X",
        "level": 0,
        "icon": "uniequip_002_podego"
      },
      "assets": {
        "avatar": "char_258_podego",
        "portrait": "char_258_podego_1",
        "spine": "char_258_podego",
        "skillIcon": "skchr_podego_2",
        "subProfIcon": "sub_slower_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_podego_1",
          "iconId": "skchr_podego_1",
          "name": "花香疗法",
          "desc": "攻击力+20%，普通攻击改为治疗友方单位",
          "descRaw": "攻击力<@ba.vup>+20%</>，普通攻击改为<@ba.vup>治疗</>友方单位",
          "spCost": 32,
          "initSp": 3,
          "duration": 21,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_podego_2",
          "iconId": "skchr_podego_2",
          "name": "孢子扩散",
          "desc": "立即投掷一个小瓶，碎裂后在周围产生一个持续5秒的孢子群\n孢子群范围内所有敌人被停顿且失去特殊能力，每秒受到相当于攻击力50%的法术伤害",
          "descRaw": "立即投掷一个小瓶，碎裂后在周围产生一个持续<@ba.vup>5</>秒的孢子群\n孢子群范围内所有敌人被<$ba.sluggish>停顿</>且失去特殊能力，每秒受到相当于攻击力<@ba.vup>50%</>的法术伤害",
          "spCost": 32,
          "initSp": 10,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 14
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 399
        },
        "4": {
          "stats.cost": 13
        }
      },
      "id": "char_258_podego",
      "avatar": "char_258_podego",
      "professionShort": "辅",
      "subProfession": "凝滞师",
      "skillIdx": 1,
      "bench": false
    },
    "char_253_greyy": {
      "chessId": "chess_char_1_14_a",
      "baseId": "chess_char_1_14_a",
      "goldenId": "chess_char_1_14_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 13,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_253_greyy",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_greyy",
        "potRank": 0
      },
      "shopSortId": 14,
      "charId": "char_253_greyy",
      "name": "格雷伊",
      "appellation": "Greyy",
      "rarity": 4,
      "profession": "术师",
      "subProfessionId": "splashcaster",
      "subProfessionName": "扩散术师",
      "nationId": "bolivar",
      "garrisonIds": [
        "garrison_67_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_14_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1145,
        "atk": 576,
        "def": 106,
        "res": 15,
        "cost": 30,
        "blockCnt": 1,
        "bat": 2.9,
        "aspd": 106,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-6",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_greyy_2",
        "iconId": "skchr_greyy_2",
        "name": "静电释放",
        "level": 4,
        "desc": "攻击速度+50，天赋停顿的持续时间提升至1.6倍",
        "descRaw": "攻击速度<@ba.vup>+50</>，天赋<$ba.sluggish>停顿</>的持续时间提升至<@ba.vup>1.6倍</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 23,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 60,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack_speed": 50,
          "talent_scale": 1.6
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_greyy_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "静电场",
          "desc": "攻击时对攻击目标造成0.4秒的停顿"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_greyy",
        "name": "新的开始",
        "type": "SPC-Y",
        "level": 0,
        "icon": "uniequip_002_greyy"
      },
      "assets": {
        "avatar": "char_253_greyy",
        "portrait": "char_253_greyy_1",
        "spine": "char_253_greyy",
        "skillIcon": "skchr_greyy_2",
        "subProfIcon": "sub_splashcaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_magic_rage[2]",
          "iconId": "skcom_magic_rage[2]",
          "name": "战术咏唱·β型",
          "desc": "攻击速度+30",
          "descRaw": "攻击速度<@ba.vup>+30</>",
          "spCost": 40,
          "initSp": 0,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_greyy_2",
          "iconId": "skchr_greyy_2",
          "name": "静电释放",
          "desc": "攻击速度+50，天赋停顿的持续时间提升至1.6倍",
          "descRaw": "攻击速度<@ba.vup>+50</>，天赋<$ba.sluggish>停顿</>的持续时间提升至<@ba.vup>1.6倍</>",
          "spCost": 60,
          "initSp": 0,
          "duration": 23,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 32
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.aspd": 100
        },
        "3": {
          "stats.respawnTime": 66
        },
        "4": {
          "stats.cost": 31
        }
      },
      "id": "char_253_greyy",
      "avatar": "char_253_greyy",
      "professionShort": "术",
      "subProfession": "扩散术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_469_indigo": {
      "chessId": "chess_char_1_17_a",
      "baseId": "chess_char_1_17_a",
      "goldenId": "chess_char_1_17_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 16,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_469_indigo",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_indigo",
        "potRank": 0
      },
      "shopSortId": 17,
      "charId": "char_469_indigo",
      "name": "深靛",
      "appellation": "Indigo",
      "rarity": 4,
      "profession": "术师",
      "subProfessionId": "mystic",
      "subProfessionName": "秘术师",
      "nationId": "iberia",
      "garrisonIds": [
        "garrison_25_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_17_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1139,
        "atk": 921,
        "def": 102,
        "res": 20,
        "cost": 21,
        "blockCnt": 1,
        "bat": 3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-14",
      "rangeGrid": [
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_indigo_2",
        "iconId": "skchr_indigo_2",
        "name": "光影迷宫",
        "level": 4,
        "desc": "攻击间隔略微缩短，天赋的触发几率提升至2.0倍，攻击范围内处于束缚状态的敌人每0.5秒受到相当于深靛攻击力12%的法术伤害",
        "descRaw": "攻击间隔<@ba.vup>略微缩短</>，天赋的触发几率提升至<@ba.vup>2.0</>倍，攻击范围内处于<$ba.root>束缚</>状态的敌人每<@ba.vup>0.5</>秒受到相当于深靛攻击力<@ba.vup>12%</>的法术伤害",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 47,
        "initSp": 10,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "base_attack_time": 0.7,
          "talent_scale": 2,
          "indigo_s_2[damage].atk_scale": 0.12,
          "indigo_s_2[damage].interval": 0.5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_indigo_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "柔光缚目",
          "desc": "攻击时有14%（+2%）的几率使目标束缚4秒，不以束缚状态的敌人为攻击目标"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_indigo",
        "name": "法杖保养套装",
        "type": "MSC-X",
        "level": 0,
        "icon": "uniequip_002_indigo"
      },
      "assets": {
        "avatar": "char_469_indigo",
        "portrait": "char_469_indigo_1",
        "spine": "char_469_indigo",
        "skillIcon": "skchr_indigo_2",
        "subProfIcon": "sub_mystic_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_indigo_1",
          "iconId": "skchr_indigo_1",
          "name": "灯塔守卫者",
          "desc": "攻击范围改变，攻击间隔大幅度缩短，每次攻击造成相当于攻击力35%的法术伤害",
          "descRaw": "攻击范围<@ba.vup>改变</>，攻击间隔<@ba.vup>大幅度缩短</>，每次攻击造成相当于攻击力<@ba.vup>35%</>的法术伤害",
          "spCost": 22,
          "initSp": 5,
          "duration": 4,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_indigo_2",
          "iconId": "skchr_indigo_2",
          "name": "光影迷宫",
          "desc": "攻击间隔略微缩短，天赋的触发几率提升至2.0倍，攻击范围内处于束缚状态的敌人每0.5秒受到相当于深靛攻击力12%的法术伤害",
          "descRaw": "攻击间隔<@ba.vup>略微缩短</>，天赋的触发几率提升至<@ba.vup>2.0</>倍，攻击范围内处于<$ba.root>束缚</>状态的敌人每<@ba.vup>0.5</>秒受到相当于深靛攻击力<@ba.vup>12%</>的法术伤害",
          "spCost": 47,
          "initSp": 10,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 23
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 885
        },
        "4": {
          "stats.cost": 22
        }
      },
      "id": "char_469_indigo",
      "avatar": "char_469_indigo",
      "professionShort": "术",
      "subProfession": "秘术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_337_utage": {
      "chessId": "chess_char_1_18_a",
      "baseId": "chess_char_1_18_a",
      "goldenId": "chess_char_1_18_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 17,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_337_utage",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_utage",
        "potRank": 1
      },
      "shopSortId": 18,
      "charId": "char_337_utage",
      "name": "宴",
      "appellation": "Utage",
      "rarity": 4,
      "profession": "近卫",
      "subProfessionId": "musha",
      "subProfessionName": "武者",
      "nationId": "higashi",
      "garrisonIds": [
        "garrison_01_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_18_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2530,
        "atk": 587,
        "def": 260,
        "res": 0,
        "cost": 20,
        "blockCnt": 1,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_utage_2",
        "iconId": "skchr_utage_2",
        "name": "落地斩·破门",
        "level": 4,
        "desc": "部署后立即流失50%当前生命，并在14秒内攻击力+65%，伤害类型变为法术",
        "descRaw": "部署后立即流失<@ba.vdown>50%</>当前生命，并在<@ba.vup>14</>秒内攻击力<@ba.vup>+65%</>，伤害类型变为<@ba.vup>法术</>",
        "skillType": "PASSIVE",
        "durationType": "NONE",
        "duration": -1,
        "spType": "ON_DEPLOY",
        "spCost": 0,
        "initSp": 0,
        "maxChargeTime": 0,
        "increment": 0,
        "bb": {
          "atk": 0.65,
          "duration": 14,
          "hp_ratio": 0.5,
          "respawn_time": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_utage_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "认真模式",
          "desc": "在场时，自身获得最高+75攻击速度的坚忍（损失60%生命值时达到最大加成）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_utage",
        "name": "翻盖手机",
        "type": "SBL-X",
        "level": 0,
        "icon": "uniequip_002_utage"
      },
      "assets": {
        "avatar": "char_337_utage",
        "portrait": "char_337_utage_1",
        "spine": "char_337_utage",
        "skillIcon": "skchr_utage_2",
        "subProfIcon": "sub_musha_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_utage_1",
          "iconId": "skchr_utage_1",
          "name": "分神",
          "desc": "停止攻击，阻挡数变为0，防御力+130%，每秒恢复7%的最大生命值",
          "descRaw": "停止攻击，阻挡数变为<@ba.vup>0</>，防御力<@ba.vup>+130%</>，每秒恢复<@ba.vup>7%</>的最大生命值",
          "spCost": 15,
          "initSp": 3,
          "duration": 8,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_utage_2",
          "iconId": "skchr_utage_2",
          "name": "落地斩·破门",
          "desc": "部署后立即流失50%当前生命，并在14秒内攻击力+65%，伤害类型变为法术",
          "descRaw": "部署后立即流失<@ba.vdown>50%</>当前生命，并在<@ba.vup>14</>秒内攻击力<@ba.vup>+65%</>，伤害类型变为<@ba.vup>法术</>",
          "spCost": 0,
          "initSp": 0,
          "duration": -1,
          "skillType": "PASSIVE",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 22
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 564
        },
        "3": {
          "stats.respawnTime": 66
        },
        "4": {
          "stats.cost": 21
        }
      },
      "id": "char_337_utage",
      "avatar": "char_337_utage",
      "professionShort": "近",
      "subProfession": "武者",
      "skillIdx": 1,
      "bench": false
    },
    "char_496_wildmn": {
      "chessId": "chess_char_1_19_a",
      "baseId": "chess_char_1_19_a",
      "goldenId": "chess_char_1_19_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 18,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_496_wildmn",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_wildmn",
        "potRank": 1
      },
      "shopSortId": 19,
      "charId": "char_496_wildmn",
      "name": "野鬃",
      "appellation": "Wild Mane",
      "rarity": 5,
      "profession": "先锋",
      "subProfessionId": "charger",
      "subProfessionName": "冲锋手",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_25_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_19_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1482,
        "atk": 443,
        "def": 290,
        "res": 0,
        "cost": 11,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_wildmn_2",
        "iconId": "skchr_wildmn_2",
        "name": "夹枪冲锋",
        "level": 4,
        "desc": "攻击范围扩大，攻击力+45%，攻击会把目标往攻击方向中等力度地推开",
        "descRaw": "攻击范围扩大，攻击力<@ba.vup>+45%</>，攻击会把目标往攻击方向<@ba.vup>中等力度地</>推开",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 40,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.45,
          "attack@force": 1
        },
        "bbStr": {},
        "rangeId": "2-2",
        "rangeGrid": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ]
        ],
        "prefabId": "skchr_wildmn_2",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "一致向前",
          "desc": "首次部署后，所有未部署的【近卫】干员的部署费用-1"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_wildmn",
        "name": "长枪替补套装",
        "type": "CHG-X",
        "level": 0,
        "icon": "uniequip_002_wildmn"
      },
      "assets": {
        "avatar": "char_496_wildmn",
        "portrait": "char_496_wildmn_1",
        "spine": "char_496_wildmn",
        "skillIcon": "skchr_wildmn_2",
        "subProfIcon": "sub_charger_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_wildmn_1",
          "iconId": "skchr_wildmn_1",
          "name": "骑枪刺击",
          "desc": "部署后攻击速度+80",
          "descRaw": "部署后攻击速度<@ba.vup>+80</>",
          "spCost": 0,
          "initSp": 0,
          "duration": 20,
          "skillType": "PASSIVE",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_wildmn_2",
          "iconId": "skchr_wildmn_2",
          "name": "夹枪冲锋",
          "desc": "攻击范围扩大，攻击力+45%，攻击会把目标往攻击方向中等力度地推开",
          "descRaw": "攻击范围扩大，攻击力<@ba.vup>+45%</>，攻击会把目标往攻击方向<@ba.vup>中等力度地</>推开",
          "spCost": 40,
          "initSp": 20,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 14
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 13
        },
        "3": {
          "stats.respawnTime": 70
        },
        "4": {
          "stats.cost": 12
        }
      },
      "id": "char_496_wildmn",
      "avatar": "char_496_wildmn",
      "professionShort": "先",
      "subProfession": "冲锋手",
      "skillIdx": 1,
      "bench": false
    },
    "char_107_liskam": {
      "chessId": "chess_char_1_20_a",
      "baseId": "chess_char_1_20_a",
      "goldenId": "chess_char_1_20_b",
      "isGolden": false,
      "tier": 1,
      "identifier": 19,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_107_liskam",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_liskam",
        "potRank": 0
      },
      "shopSortId": 20,
      "charId": "char_107_liskam",
      "name": "雷蛇",
      "appellation": "Liskarm",
      "rarity": 5,
      "profession": "重装",
      "subProfessionId": "shotprotector",
      "subProfessionName": "哨戒铁卫",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_158_a"
      ],
      "price": 2,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_1_20_b",
      "status": {
        "phase": 1,
        "level": 55,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2198,
        "atk": 337,
        "def": 516,
        "res": 0,
        "cost": 18,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-2",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_liskam_2",
        "iconId": "skchr_liskam_2",
        "name": "反击电弧",
        "level": 4,
        "desc": "攻击间隔增大，攻击力+105%，每次攻击对最多3个敌人造成法术伤害，并有15%概率使命中目标晕眩1秒\n持续时间结束后雷蛇晕眩5秒",
        "descRaw": "攻击间隔<@ba.vdown>增大</>，攻击力<@ba.vup>+105%</>，每次攻击对最多<@ba.vup>3</>个敌人造成<@ba.vup>法术伤害</>，并有<@ba.vup>15%</>概率使命中目标<$ba.stun>晕眩</><@ba.vup>1</>秒\n<@ba.rem>持续时间结束后雷蛇<$ba.stun>晕眩</>5秒</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WHEN_TAKEN_DAMAGE",
        "spCost": 41,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 1.05,
          "base_attack_time": 0.7,
          "attack@buff_prob": 0.15,
          "attack@stun": 1,
          "stun": 5,
          "attack@max_target": 3
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_liskam_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "战术防御",
          "desc": "受到攻击时，回复自己和周围一格内随机一名友方角色1点技力"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_liskam",
        "name": "震撼存储",
        "type": "SPT-X",
        "level": 0,
        "icon": "uniequip_002_liskam"
      },
      "assets": {
        "avatar": "char_107_liskam",
        "portrait": "char_107_liskam_1",
        "spine": "char_107_liskam",
        "skillIcon": "skchr_liskam_2",
        "subProfIcon": "sub_shotprotector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_liskam_1",
          "iconId": "skchr_liskam_1",
          "name": "充能防御",
          "desc": "抵挡下一次伤害，在8秒内防御力+60%\n技能自动开启",
          "descRaw": "抵挡下一次伤害，在<@ba.vup>8</>秒内防御力<@ba.vup>+60%</>\n<@ba.rem>技能自动开启</>",
          "spCost": 22,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_liskam_2",
          "iconId": "skchr_liskam_2",
          "name": "反击电弧",
          "desc": "攻击间隔增大，攻击力+105%，每次攻击对最多3个敌人造成法术伤害，并有15%概率使命中目标晕眩1秒\n持续时间结束后雷蛇晕眩5秒",
          "descRaw": "攻击间隔<@ba.vdown>增大</>，攻击力<@ba.vup>+105%</>，每次攻击对最多<@ba.vup>3</>个敌人造成<@ba.vup>法术伤害</>，并有<@ba.vup>15%</>概率使命中目标<$ba.stun>晕眩</><@ba.vup>1</>秒\n<@ba.rem>持续时间结束后雷蛇<$ba.stun>晕眩</>5秒</>",
          "spCost": 41,
          "initSp": 0,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 20
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.def": 489
        },
        "4": {
          "stats.cost": 19
        }
      },
      "id": "char_107_liskam",
      "avatar": "char_107_liskam",
      "professionShort": "重",
      "subProfession": "哨戒铁卫",
      "skillIdx": 1,
      "bench": false
    },
    "char_279_excu": {
      "chessId": "chess_char_2_01_a",
      "baseId": "chess_char_2_01_a",
      "goldenId": "chess_char_2_01_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 20,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_279_excu",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_excu",
        "potRank": 0
      },
      "shopSortId": 1,
      "charId": "char_279_excu",
      "name": "送葬人",
      "appellation": "Executor",
      "rarity": 5,
      "profession": "狙击",
      "subProfessionId": "reaperrange",
      "subProfessionName": "散射手",
      "nationId": "laterano",
      "garrisonIds": [
        "garrison_138_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_01_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1694,
        "atk": 613,
        "def": 161,
        "res": 0,
        "cost": 29,
        "blockCnt": 1,
        "bat": 2.3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-5",
      "rangeGrid": [
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_excu_2",
        "iconId": "skchr_excu_2",
        "name": "最终旅程",
        "level": 4,
        "desc": "普通攻击变为二连击，且攻击间隔少量缩短",
        "descRaw": "普通攻击变为二连击，且攻击间隔<@ba.vup>少量缩短</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 16,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 77,
        "initSp": 25,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "base_attack_time": -0.5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_excu_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "终结改装",
          "desc": "攻击时无视目标95（+15）的防御力"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_excu",
        "name": "执行者随身包",
        "type": "RPR-X",
        "level": 0,
        "icon": "uniequip_002_excu"
      },
      "assets": {
        "avatar": "char_279_excu",
        "portrait": "char_279_excu_1",
        "spine": "char_279_excu",
        "skillIcon": "skchr_excu_2",
        "subProfIcon": "sub_reaperrange_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_excu_1",
          "iconId": "skchr_excu_1",
          "name": "铳口收束",
          "desc": "攻击力+35%，攻击时对攻击范围内的所有敌人应用特性加成",
          "descRaw": "攻击力<@ba.vup>+35%</>，攻击时对攻击范围内的所有敌人应用特性加成",
          "spCost": 45,
          "initSp": 15,
          "duration": 28,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_excu_2",
          "iconId": "skchr_excu_2",
          "name": "最终旅程",
          "desc": "普通攻击变为二连击，且攻击间隔少量缩短",
          "descRaw": "普通攻击变为二连击，且攻击间隔<@ba.vup>少量缩短</>",
          "spCost": 77,
          "initSp": 25,
          "duration": 16,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 31
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 584
        },
        "4": {
          "stats.cost": 30
        }
      },
      "id": "char_279_excu",
      "avatar": "char_279_excu",
      "professionShort": "狙",
      "subProfession": "散射手",
      "skillIdx": 1,
      "bench": false
    },
    "char_108_silent": {
      "chessId": "chess_char_2_02_a",
      "baseId": "chess_char_2_02_a",
      "goldenId": "chess_char_2_02_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 21,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_108_silent",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_silent",
        "potRank": 0
      },
      "shopSortId": 2,
      "charId": "char_108_silent",
      "name": "赫默",
      "appellation": "Silence",
      "rarity": 5,
      "profession": "医疗",
      "subProfessionId": "physician",
      "subProfessionName": "医师",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_80_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_02_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1400,
        "atk": 393,
        "def": 110,
        "res": 0,
        "cost": 17,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_silent_2",
        "iconId": "skchr_silent_2",
        "name": "医疗无人机",
        "level": 4,
        "desc": "获得一个医疗无人机\n最多可库存1个无人机；无人机投入战场后治疗周围友军，10秒后自动销毁",
        "descRaw": "获得一个医疗无人机\n<@ba.rem>最多可库存1个无人机；无人机投入战场后治疗周围友军，10秒后自动销毁</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 26,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "cnt": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_silent_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": "token_10000_silent_healrb"
      },
      "talents": [
        {
          "name": "强化注射",
          "desc": "在场时，所有友方【医疗】职业干员攻速+8（+2）"
        }
      ],
      "tokens": [
        "token_10000_silent_healrb"
      ],
      "module": {
        "id": "uniequip_002_silent",
        "name": "紧急防卫程序",
        "type": "PHY-Y",
        "level": 0,
        "icon": "uniequip_002_silent"
      },
      "assets": {
        "avatar": "char_108_silent",
        "portrait": "char_108_silent_1",
        "spine": "char_108_silent",
        "skillIcon": "skchr_silent_2",
        "subProfIcon": "sub_physician_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_heal_up[3]",
          "iconId": "skcom_heal_up[3]",
          "name": "治疗强化·γ型",
          "desc": "攻击力+55%",
          "descRaw": "攻击力<@ba.vup>+55%</>",
          "spCost": 35,
          "initSp": 20,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_silent_2",
          "iconId": "skchr_silent_2",
          "name": "医疗无人机",
          "desc": "获得一个医疗无人机\n最多可库存1个无人机；无人机投入战场后治疗周围友军，10秒后自动销毁",
          "descRaw": "获得一个医疗无人机\n<@ba.rem>最多可库存1个无人机；无人机投入战场后治疗周围友军，10秒后自动销毁</>",
          "spCost": 26,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 369
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_108_silent",
      "avatar": "char_108_silent",
      "professionShort": "医",
      "subProfession": "医师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4122_grabds": {
      "chessId": "chess_char_2_04_a",
      "baseId": "chess_char_2_04_a",
      "goldenId": "chess_char_2_04_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 23,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4122_grabds",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_grabds",
        "potRank": 0
      },
      "shopSortId": 4,
      "charId": "char_4122_grabds",
      "name": "小满",
      "appellation": "Grain Buds",
      "rarity": 5,
      "profession": "辅助",
      "subProfessionId": "slower",
      "subProfessionName": "凝滞师",
      "nationId": "yan",
      "garrisonIds": [
        "garrison_31_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_04_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 977,
        "atk": 442,
        "def": 81,
        "res": 15,
        "cost": 13,
        "blockCnt": 1,
        "bat": 1.9,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_grabds_2",
        "iconId": "skchr_grabds_2",
        "name": "乡音沉沉",
        "level": 4,
        "desc": "停止攻击敌人并使攻击范围内3个敌方单位沉睡4秒，之后攻击速度+45，且攻击3个敌人",
        "descRaw": "停止攻击敌人并使攻击范围内<@ba.vup>3</>个敌方单位<$ba.sleep>沉睡</><@ba.vup>4</>秒，之后攻击速度<@ba.vup>+45</>，且攻击<@ba.vup>3</>个敌人",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 14,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 30,
        "initSp": 5,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "max_target": 3,
          "sleep": 4,
          "attack_speed": 45
        },
        "bbStr": {},
        "rangeId": "y-2",
        "rangeGrid": [
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ]
        ],
        "prefabId": "skchr_grabds_2",
        "trigger": {
          "rule": "SKILL_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              -1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              -1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              -1,
              -1
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "好好听话",
          "desc": "攻击速度+8（+2），若目标为【野生动物】则特性的停顿时间略微延长"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_grabds",
        "name": "在田野上",
        "type": "DEC-X",
        "level": 0,
        "icon": "uniequip_002_grabds"
      },
      "assets": {
        "avatar": "char_4122_grabds",
        "portrait": "char_4122_grabds_1",
        "spine": "char_4122_grabds",
        "skillIcon": "skchr_grabds_2",
        "subProfIcon": "sub_slower_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_grabds_1",
          "iconId": "skchr_grabds_1",
          "name": "竹笛飞声",
          "desc": "下次攻击造成相当于攻击力140%的法术伤害，并额外攻击一个敌人\n可充能2次",
          "descRaw": "下次攻击造成相当于攻击力<@ba.vup>140%</>的法术伤害，并额外攻击一个敌人\n<@ba.rem>可充能2次</>",
          "spCost": 7,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_grabds_2",
          "iconId": "skchr_grabds_2",
          "name": "乡音沉沉",
          "desc": "停止攻击敌人并使攻击范围内3个敌方单位沉睡4秒，之后攻击速度+45，且攻击3个敌人",
          "descRaw": "停止攻击敌人并使攻击范围内<@ba.vup>3</>个敌方单位<$ba.sleep>沉睡</><@ba.vup>4</>秒，之后攻击速度<@ba.vup>+45</>，且攻击<@ba.vup>3</>个敌人",
          "spCost": 30,
          "initSp": 5,
          "duration": 14,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 15
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 419
        },
        "4": {
          "stats.cost": 14
        }
      },
      "id": "char_4122_grabds",
      "avatar": "char_4122_grabds",
      "professionShort": "辅",
      "subProfession": "凝滞师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4139_papyrs": {
      "chessId": "chess_char_2_06_a",
      "baseId": "chess_char_2_06_a",
      "goldenId": "chess_char_2_06_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 25,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4139_papyrs",
        "tmplId": null,
        "skillIndex": 0,
        "uniEquipId": "uniequip_002_papyrs",
        "potRank": 0
      },
      "shopSortId": 6,
      "charId": "char_4139_papyrs",
      "name": "莎草",
      "appellation": "Papyrus",
      "rarity": 5,
      "profession": "医疗",
      "subProfessionId": "chainhealer",
      "subProfessionName": "链愈师",
      "nationId": "sargon",
      "garrisonIds": [
        "garrison_42_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_06_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1440,
        "atk": 338,
        "def": 124,
        "res": 0,
        "cost": 17,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_papyrs_1",
        "iconId": "skchr_papyrs_1",
        "name": "巧思乍现",
        "level": 4,
        "desc": "下次治疗时的治疗量提升至攻击力的160%，天赋附加屏障效果提升至150%\n可充能2次",
        "descRaw": "下次治疗时的治疗量提升至攻击力的<@ba.vup>160%</>，天赋附加屏障效果提升至<@ba.vup>150%</>\n<@ba.rem>可充能2次</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 9,
        "initSp": 0,
        "maxChargeTime": 2,
        "increment": 1,
        "bb": {
          "heal_scale": 1.6,
          "shield_scale_skill": 1.5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_papyrs_1",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 0,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "博览古卷",
          "desc": "治疗会为目标干员附加相当于自身12%（+2%）攻击力的屏障，持续8秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_papyrs",
        "name": "小小的种子",
        "type": "XAH-X",
        "level": 0,
        "icon": "uniequip_002_papyrs"
      },
      "assets": {
        "avatar": "char_4139_papyrs",
        "portrait": "char_4139_papyrs_1",
        "spine": "char_4139_papyrs",
        "skillIcon": "skchr_papyrs_1",
        "subProfIcon": "sub_chainhealer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_papyrs_1",
          "iconId": "skchr_papyrs_1",
          "name": "巧思乍现",
          "desc": "下次治疗时的治疗量提升至攻击力的160%，天赋附加屏障效果提升至150%\n可充能2次",
          "descRaw": "下次治疗时的治疗量提升至攻击力的<@ba.vup>160%</>，天赋附加屏障效果提升至<@ba.vup>150%</>\n<@ba.rem>可充能2次</>",
          "spCost": 9,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": true
        },
        {
          "index": 1,
          "id": "skchr_papyrs_2",
          "iconId": "skchr_papyrs_2",
          "name": "临考发挥",
          "desc": "立刻锁定攻击范围内除自身外生命值上限最高的干员，技能期间莎草仅可以该干员作为治疗主目标，攻击间隔缩短，攻击力+20%，每次治疗跳跃次数+1 ",
          "descRaw": "立刻锁定攻击范围内除自身外生命值上限最高的干员，技能期间莎草仅可以该干员作为治疗主目标，攻击间隔<@ba.vup>缩短</>，攻击力<@ba.vup>+20%</>，每次治疗跳跃次数<@ba.vup>+1</> ",
          "spCost": 37,
          "initSp": 15,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 20
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 19
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_4139_papyrs",
      "avatar": "char_4139_papyrs",
      "professionShort": "医",
      "subProfession": "链愈师",
      "skillIdx": 0,
      "bench": false
    },
    "char_143_ghost": {
      "chessId": "chess_char_2_07_a",
      "baseId": "chess_char_2_07_a",
      "goldenId": "chess_char_2_07_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 26,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_143_ghost",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_ghost",
        "potRank": 0
      },
      "shopSortId": 7,
      "charId": "char_143_ghost",
      "name": "幽灵鲨",
      "appellation": "Specter",
      "rarity": 5,
      "profession": "近卫",
      "subProfessionId": "centurion",
      "subProfessionName": "强攻手",
      "nationId": "egir",
      "garrisonIds": [
        "garrison_46_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_07_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1909,
        "atk": 557,
        "def": 280,
        "res": 0,
        "cost": 19,
        "blockCnt": 2,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_ghost_2",
        "iconId": "skchr_ghost_2",
        "name": "肉斩骨断",
        "level": 4,
        "desc": "技能持续期间内干员的生命值始终不会低于1，攻击力+70%\n技能结束后干员晕眩10秒",
        "descRaw": "技能持续期间内干员的生命值始终不会低于<@ba.vup>1</>，攻击力<@ba.vup>+70%</>\n<@ba.rem>技能结束后干员<$ba.stun>晕眩</>10秒</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 11,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 45,
        "initSp": 25,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.7,
          "stun": 10
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_ghost_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "体力上限提升",
          "desc": "生命上限+12%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_ghost",
        "name": "幽明烛光",
        "type": "CEN-X",
        "level": 0,
        "icon": "uniequip_002_ghost"
      },
      "assets": {
        "avatar": "char_143_ghost",
        "portrait": "char_143_ghost_1",
        "spine": "char_143_ghost",
        "skillIcon": "skchr_ghost_2",
        "subProfIcon": "sub_centurion_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_atk_up[3]",
          "iconId": "skcom_atk_up[3]",
          "name": "攻击力强化·γ型",
          "desc": "攻击力+45%",
          "descRaw": "攻击力<@ba.vup>+45%</>",
          "spCost": 37,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_ghost_2",
          "iconId": "skchr_ghost_2",
          "name": "肉斩骨断",
          "desc": "技能持续期间内干员的生命值始终不会低于1，攻击力+70%\n技能结束后干员晕眩10秒",
          "descRaw": "技能持续期间内干员的生命值始终不会低于<@ba.vup>1</>，攻击力<@ba.vup>+70%</>\n<@ba.rem>技能结束后干员<$ba.stun>晕眩</>10秒</>",
          "spCost": 45,
          "initSp": 25,
          "duration": 11,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 21
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 530
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_143_ghost",
      "avatar": "char_143_ghost",
      "professionShort": "近",
      "subProfession": "强攻手",
      "skillIdx": 1,
      "bench": false
    },
    "char_381_bubble": {
      "chessId": "chess_char_2_08_a",
      "baseId": "chess_char_2_08_a",
      "goldenId": "chess_char_2_08_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 27,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_381_bubble",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_bubble",
        "potRank": 0
      },
      "shopSortId": 8,
      "charId": "char_381_bubble",
      "name": "泡泡",
      "appellation": "Bubble",
      "rarity": 4,
      "profession": "重装",
      "subProfessionId": "protector",
      "subProfessionName": "铁卫",
      "nationId": "sargon",
      "garrisonIds": [
        "garrison_15_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_08_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2391,
        "atk": 314,
        "def": 495,
        "res": 0,
        "cost": 17,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "0-1",
      "rangeGrid": [
        [
          0,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_bubble_2",
        "iconId": "skchr_bubble_2",
        "name": "“挨打”",
        "level": 4,
        "desc": "停止攻击敌人；防御力+65%，自身更易受敌人攻击，每次受到攻击时对目标造成相当于泡泡防御力40%的物理伤害",
        "descRaw": "停止攻击敌人；防御力<@ba.vup>+65%</>，自身更易受敌人攻击，每次受到攻击时对目标造成相当于泡泡防御力<@ba.vup>40%</>的物理伤害",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 50,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "def": 0.65,
          "taunt_level": 1,
          "atk_scale": 0.4
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_bubble_2",
        "trigger": {
          "rule": "TAKE_DAMAGE",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "尖刺盾",
          "desc": "敌人攻击泡泡后，攻击力下降5%，持续5秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_bubble",
        "name": "泡泡闪光必杀剑",
        "type": "PRO-X",
        "level": 0,
        "icon": "uniequip_002_bubble"
      },
      "assets": {
        "avatar": "char_381_bubble",
        "portrait": "char_381_bubble_1",
        "spine": "char_381_bubble",
        "skillIcon": "skchr_bubble_2",
        "subProfIcon": "sub_protector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_def_up[2]",
          "iconId": "skcom_def_up[2]",
          "name": "防御力强化·β型",
          "desc": "防御力+35%",
          "descRaw": "防御力<@ba.vup>+35%</>",
          "spCost": 40,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_bubble_2",
          "iconId": "skchr_bubble_2",
          "name": "“挨打”",
          "desc": "停止攻击敌人；防御力+65%，自身更易受敌人攻击，每次受到攻击时对目标造成相当于泡泡防御力40%的物理伤害",
          "descRaw": "停止攻击敌人；防御力<@ba.vup>+65%</>，自身更易受敌人攻击，每次受到攻击时对目标造成相当于泡泡防御力<@ba.vup>40%</>的物理伤害",
          "spCost": 50,
          "initSp": 0,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.def": 470
        },
        "3": {
          "stats.respawnTime": 66
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_381_bubble",
      "avatar": "char_381_bubble",
      "professionShort": "重",
      "subProfession": "铁卫",
      "skillIdx": 1,
      "bench": false
    },
    "char_491_humus": {
      "chessId": "chess_char_2_09_a",
      "baseId": "chess_char_2_09_a",
      "goldenId": "chess_char_2_09_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 28,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_491_humus",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_humus",
        "potRank": 0
      },
      "shopSortId": 9,
      "charId": "char_491_humus",
      "name": "休谟斯",
      "appellation": "Humus",
      "rarity": 4,
      "profession": "近卫",
      "subProfessionId": "reaper",
      "subProfessionName": "收割者",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_77_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_09_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1612,
        "atk": 546,
        "def": 342,
        "res": 0,
        "cost": 17,
        "blockCnt": 2,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-3",
      "rangeGrid": [
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_humus_2",
        "iconId": "skchr_humus_2",
        "name": "高效处理",
        "level": 4,
        "desc": "技能持续时间内阻挡数+1，生命值高于50%时，获得+25%攻击力的精力充沛；高于80%时效果翻倍",
        "descRaw": "技能持续时间内阻挡数<@ba.vup>+1</>，生命值高于<@ba.vup>50%</>时，获得<@ba.vup>+25%</>攻击力的<$ba.strong>精力充沛</>；高于<@ba.vup>80%</>时效果翻倍",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 50,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "humus_s_2[peak_1].peak_performance.atk": 0.25,
          "humus_s_2[peak_1].peak_performance.hp_ratio": 0.5,
          "humus_s_2[peak_2].peak_performance.atk": 0.5,
          "humus_s_2[peak_2].peak_performance.hp_ratio": 0.8,
          "block_cnt": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_humus_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "再回收",
          "desc": "超出自身生命上限的生命值可转化为屏障；最多不超过自身最大生命值的64%（+4%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_humus",
        "name": "恶地奇异工具套组",
        "type": "REA-X",
        "level": 0,
        "icon": "uniequip_002_humus"
      },
      "assets": {
        "avatar": "char_491_humus",
        "portrait": "char_491_humus_1",
        "spine": "char_491_humus",
        "skillIcon": "skchr_humus_2",
        "subProfIcon": "sub_reaper_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_humus_1",
          "iconId": "skchr_humus_1",
          "name": "固废切割",
          "desc": "下次攻击的攻击力提升至190%，并额外回复自身60生命值",
          "descRaw": "下次攻击的攻击力提升至<@ba.vup>190%</>，并额外回复自身<@ba.kw>60</>生命值",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_humus_2",
          "iconId": "skchr_humus_2",
          "name": "高效处理",
          "desc": "技能持续时间内阻挡数+1，生命值高于50%时，获得+25%攻击力的精力充沛；高于80%时效果翻倍",
          "descRaw": "技能持续时间内阻挡数<@ba.vup>+1</>，生命值高于<@ba.vup>50%</>时，获得<@ba.vup>+25%</>攻击力的<$ba.strong>精力充沛</>；高于<@ba.vup>80%</>时效果翻倍",
          "spCost": 50,
          "initSp": 20,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 511
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_491_humus",
      "avatar": "char_491_humus",
      "professionShort": "近",
      "subProfession": "收割者",
      "skillIdx": 1,
      "bench": false
    },
    "char_4040_rockr": {
      "chessId": "chess_char_2_10_a",
      "baseId": "chess_char_2_10_a",
      "goldenId": "chess_char_2_10_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 29,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4040_rockr",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_rockr",
        "potRank": 0
      },
      "shopSortId": 10,
      "charId": "char_4040_rockr",
      "name": "洛洛",
      "appellation": "Rockrock",
      "rarity": 5,
      "profession": "术师",
      "subProfessionId": "funnel",
      "subProfessionName": "驭械术师",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_91_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_10_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1078,
        "atk": 283,
        "def": 99,
        "res": 15,
        "cost": 19,
        "blockCnt": 1,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-1",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_rockr_2",
        "iconId": "skchr_rockr_2",
        "name": "自负此轭",
        "level": 4,
        "desc": "攻击速度+45，释放浮游单元锁定敌人攻击\n过载：特性浮游单元伤害上限提升至1.6倍，攻击力+40%，技能结束后晕眩过载持续时间的等长时间\n浮游单元锁敌后直至敌人被击杀或技能结束后返回干员身边，可随时主动关闭技能",
        "descRaw": "攻击速度<@ba.vup>+45</>，释放浮游单元锁定敌人攻击\n<$ba.overdrive>过载</>：特性浮游单元伤害上限提升至<@ba.vup>1.6</>倍，攻击力<@ba.vup>+40%</>，技能结束后<$ba.stun>晕眩</>过载持续时间的等长时间\n<@ba.rem>浮游单元锁敌后直至敌人被击杀或技能结束后返回干员身边，可随时主动关闭技能</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 40,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 45,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.4,
          "attack_speed": 45,
          "attack@cnt": 0,
          "scale": 1.6
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_rockr_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "立于磐石",
          "desc": "每在场上停留15秒，攻击力+3%（+1%），最多可以叠加3次"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_rockr",
        "name": "未命名的无人机",
        "type": "FUN-X",
        "level": 0,
        "icon": "uniequip_002_rockr"
      },
      "assets": {
        "avatar": "char_4040_rockr",
        "portrait": "char_4040_rockr_1",
        "spine": "char_4040_rockr",
        "skillIcon": "skchr_rockr_2",
        "subProfIcon": "sub_funnel_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_magic_rage[3]",
          "iconId": "skcom_magic_rage[3]",
          "name": "战术咏唱·γ型",
          "desc": "攻击速度+45",
          "descRaw": "攻击速度<@ba.vup>+45</>",
          "spCost": 35,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_rockr_2",
          "iconId": "skchr_rockr_2",
          "name": "自负此轭",
          "desc": "攻击速度+45，释放浮游单元锁定敌人攻击\n过载：特性浮游单元伤害上限提升至1.6倍，攻击力+40%，技能结束后晕眩过载持续时间的等长时间\n浮游单元锁敌后直至敌人被击杀或技能结束后返回干员身边，可随时主动关闭技能",
          "descRaw": "攻击速度<@ba.vup>+45</>，释放浮游单元锁定敌人攻击\n<$ba.overdrive>过载</>：特性浮游单元伤害上限提升至<@ba.vup>1.6</>倍，攻击力<@ba.vup>+40%</>，技能结束后<$ba.stun>晕眩</>过载持续时间的等长时间\n<@ba.rem>浮游单元锁敌后直至敌人被击杀或技能结束后返回干员身边，可随时主动关闭技能</>",
          "spCost": 45,
          "initSp": 15,
          "duration": 40,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 21
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 259
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_4040_rockr",
      "avatar": "char_4040_rockr",
      "professionShort": "术",
      "subProfession": "驭械术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4016_kazema": {
      "chessId": "chess_char_2_11_a",
      "baseId": "chess_char_2_11_a",
      "goldenId": "chess_char_2_11_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 30,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4016_kazema",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_kazema",
        "potRank": 0
      },
      "shopSortId": 11,
      "charId": "char_4016_kazema",
      "name": "风丸",
      "appellation": "Kazemaru",
      "rarity": 5,
      "profession": "特种",
      "subProfessionId": "dollkeeper",
      "subProfessionName": "傀儡师",
      "nationId": "higashi",
      "garrisonIds": [
        "garrison_93_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 2,
      "upgradeChessId": "chess_char_2_11_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1816,
        "atk": 574,
        "def": 254,
        "res": 0,
        "cost": 13,
        "blockCnt": 2,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_kazema_2",
        "iconId": "skchr_kazema_2",
        "name": "纸艺·双影",
        "level": 4,
        "desc": "立即流失50%当前生命，攻击力+70%，并在周围的近战部署位召唤<替身>协助作战",
        "descRaw": "立即流失<@ba.vdown>50%</>当前生命，攻击力<@ba.vup>+70%</>，并在周围的近战部署位召唤<替身>协助作战",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 25,
        "initSp": 5,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.7,
          "hp_ratio": 0.5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_kazema_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": "token_10022_kazema_shadow"
      },
      "talents": [
        {
          "name": "折纸生花",
          "desc": "<替身>出现时对其周围8格内所有敌方单位造成相当于其攻击力230%（+5）的法术伤害"
        }
      ],
      "tokens": [
        "token_10022_kazema_shadow"
      ],
      "module": {
        "id": "uniequip_002_kazema",
        "name": "旧物",
        "type": "PUM-X",
        "level": 0,
        "icon": "uniequip_002_kazema"
      },
      "assets": {
        "avatar": "char_4016_kazema",
        "portrait": "char_4016_kazema_1",
        "spine": "char_4016_kazema",
        "skillIcon": "skchr_kazema_2",
        "subProfIcon": "sub_dollkeeper_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_kazema_1",
          "iconId": "skchr_kazema_1",
          "name": "纸艺·迅击",
          "desc": "下次攻击的攻击力提高至235%，并使自身流失10%的生命",
          "descRaw": "下次攻击的攻击力提高至<@ba.vup>235%</>，并使自身流失<@ba.vdown>10%</>的生命",
          "spCost": 3,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_kazema_2",
          "iconId": "skchr_kazema_2",
          "name": "纸艺·双影",
          "desc": "立即流失50%当前生命，攻击力+70%，并在周围的近战部署位召唤<替身>协助作战",
          "descRaw": "立即流失<@ba.vdown>50%</>当前生命，攻击力<@ba.vup>+70%</>，并在周围的近战部署位召唤<替身>协助作战",
          "spCost": 25,
          "initSp": 5,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 15
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 547
        },
        "4": {
          "stats.cost": 14
        }
      },
      "id": "char_4016_kazema",
      "avatar": "char_4016_kazema",
      "professionShort": "特",
      "subProfession": "傀儡师",
      "skillIdx": 1,
      "bench": false
    },
    "char_237_gravel": {
      "chessId": "chess_char_2_12_a",
      "baseId": "chess_char_2_12_a",
      "goldenId": "chess_char_2_12_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 31,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_237_gravel",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_gravel",
        "potRank": 0
      },
      "shopSortId": 12,
      "charId": "char_237_gravel",
      "name": "砾",
      "appellation": "Gravel",
      "rarity": 4,
      "profession": "特种",
      "subProfessionId": "executor",
      "subProfessionName": "处决者",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_75_a",
        "garrison_143_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_12_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1267,
        "atk": 352,
        "def": 281,
        "res": 0,
        "cost": 6,
        "blockCnt": 1,
        "bat": 0.93,
        "aspd": 100,
        "respawnTime": 16,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_gravel_2",
        "iconId": "skchr_gravel_2",
        "name": "鼠群",
        "level": 4,
        "desc": "部署后获得可吸收相当于自己最大生命140%的屏障，该屏障会在10秒内持续衰减",
        "descRaw": "部署后获得可吸收相当于自己最大生命<@ba.vup>140%</>的<$ba.barrier>屏障</>，该屏障会在<@ba.vup>10</>秒内持续衰减",
        "skillType": "PASSIVE",
        "durationType": "NONE",
        "duration": -1,
        "spType": "ON_DEPLOY",
        "spCost": 0,
        "initSp": 0,
        "maxChargeTime": 0,
        "increment": 0,
        "bb": {
          "hp_ratio": 1.4,
          "duration": 10
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_gravel_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "快速部署",
          "desc": "自身部署费用-1"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_gravel",
        "name": "隐秘行动工具包",
        "type": "EXE-X",
        "level": 0,
        "icon": "uniequip_002_gravel"
      },
      "assets": {
        "avatar": "char_237_gravel",
        "portrait": "char_237_gravel_1",
        "spine": "char_237_gravel",
        "skillIcon": "skchr_gravel_2",
        "subProfIcon": "sub_executor_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_gravel_1",
          "iconId": "skchr_gravel_1",
          "name": "影袭",
          "desc": "部署后防御力+270%，在7秒内持续衰减",
          "descRaw": "部署后防御力<@ba.vup>+270%</>，在<@ba.vup>7</>秒内持续衰减",
          "spCost": 0,
          "initSp": 0,
          "duration": -1,
          "skillType": "PASSIVE",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_gravel_2",
          "iconId": "skchr_gravel_2",
          "name": "鼠群",
          "desc": "部署后获得可吸收相当于自己最大生命140%的屏障，该屏障会在10秒内持续衰减",
          "descRaw": "部署后获得可吸收相当于自己最大生命<@ba.vup>140%</>的<$ba.barrier>屏障</>，该屏障会在<@ba.vup>10</>秒内持续衰减",
          "spCost": 0,
          "initSp": 0,
          "duration": -1,
          "skillType": "PASSIVE",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 8
        },
        "1": {
          "stats.maxHp": 1107
        },
        "2": {
          "stats.respawnTime": 18
        },
        "4": {
          "stats.cost": 7
        }
      },
      "id": "char_237_gravel",
      "avatar": "char_237_gravel",
      "professionShort": "特",
      "subProfession": "处决者",
      "skillIdx": 1,
      "bench": false
    },
    "char_4191_tippi": {
      "chessId": "chess_char_2_13_a",
      "baseId": "chess_char_2_13_a",
      "goldenId": "chess_char_2_13_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 32,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4191_tippi",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 13,
      "charId": "char_4191_tippi",
      "name": "蒂比",
      "appellation": "Tippi",
      "rarity": 5,
      "profession": "特种",
      "subProfessionId": "skywalker",
      "subProfessionName": "巡空者",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_80_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_13_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1805,
        "atk": 592,
        "def": 297,
        "res": 0,
        "cost": 15,
        "blockCnt": 2,
        "bat": 1.5,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-2",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_tippi_2",
        "iconId": "skchr_tippi_2",
        "name": "紧急赶场通知",
        "level": 4,
        "desc": "立刻起飞，攻击范围扩大，攻击力+20%，攻击变为3连射\n受到攻击后触发，并闪避本次物理或法术伤害",
        "descRaw": "立刻<$ba.liftoff>起飞</>，攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+20%</>，攻击变为<@ba.vup>3</>连射\n<@ba.rem>受到攻击后触发，并闪避本次物理或法术伤害</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 16,
        "initSp": 1,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.2,
          "attack@height_offset": 0.8
        },
        "bbStr": {},
        "rangeId": "y-1",
        "rangeGrid": [
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ]
        ],
        "prefabId": "skchr_tippi_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "片场工作指南",
          "desc": "若最近12（-1）秒内未受攻击，闪避下一次物理或法术攻击"
        }
      ],
      "tokens": [],
      "module": null,
      "assets": {
        "avatar": "char_4191_tippi",
        "portrait": "char_4191_tippi_1",
        "spine": "char_4191_tippi",
        "skillIcon": "skchr_tippi_2",
        "subProfIcon": "sub_skywalker_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_tippi_1",
          "iconId": "skchr_tippi_1",
          "name": "专业喷绘技巧",
          "desc": "立刻起飞，攻击范围扩大，攻击力+45%",
          "descRaw": "立刻<$ba.liftoff>起飞</>，攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+45%</>",
          "spCost": 20,
          "initSp": 3,
          "duration": 32,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_tippi_2",
          "iconId": "skchr_tippi_2",
          "name": "紧急赶场通知",
          "desc": "立刻起飞，攻击范围扩大，攻击力+20%，攻击变为3连射\n受到攻击后触发，并闪避本次物理或法术伤害",
          "descRaw": "立刻<$ba.liftoff>起飞</>，攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+20%</>，攻击变为<@ba.vup>3</>连射\n<@ba.rem>受到攻击后触发，并闪避本次物理或法术伤害</>",
          "spCost": 16,
          "initSp": 1,
          "duration": 15,
          "skillType": "AUTO",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 17
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 567
        },
        "4": {
          "stats.cost": 16
        }
      },
      "id": "char_4191_tippi",
      "avatar": "char_4191_tippi",
      "professionShort": "特",
      "subProfession": "巡空者",
      "skillIdx": 1,
      "bench": false
    },
    "char_181_flower": {
      "chessId": "chess_char_2_14_a",
      "baseId": "chess_char_2_14_a",
      "goldenId": "chess_char_2_14_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 33,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_181_flower",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_flower",
        "potRank": 0
      },
      "shopSortId": 14,
      "charId": "char_181_flower",
      "name": "调香师",
      "appellation": "Perfumer",
      "rarity": 4,
      "profession": "医疗",
      "subProfessionId": "ringhealer",
      "subProfessionName": "群愈师",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_81_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_14_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1232,
        "atk": 275,
        "def": 120,
        "res": 0,
        "cost": 14,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_flower_2",
        "iconId": "skchr_flower_2",
        "name": "精调",
        "level": 4,
        "desc": "攻击速度-50，攻击力+180%",
        "descRaw": "攻击速度<@ba.vdown>-50</>，攻击力<@ba.vup>+180%</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 30,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 60,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 1.8,
          "attack_speed": -50
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_flower_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "熏衣草",
          "desc": "在战场时全体友方单位每秒恢复相当于调香师攻击力3.5%（+0.5%）的生命"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_flower",
        "name": "“爱琴之吻”",
        "type": "RIN-Y",
        "level": 0,
        "icon": "uniequip_002_flower"
      },
      "assets": {
        "avatar": "char_181_flower",
        "portrait": "char_181_flower_1",
        "spine": "char_181_flower",
        "skillIcon": "skchr_flower_2",
        "subProfIcon": "sub_ringhealer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_heal_up[2]",
          "iconId": "skcom_heal_up[2]",
          "name": "治疗强化·β型",
          "desc": "攻击力+30%",
          "descRaw": "攻击力<@ba.vup>+30%</>",
          "spCost": 35,
          "initSp": 10,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_flower_2",
          "iconId": "skchr_flower_2",
          "name": "精调",
          "desc": "攻击速度-50，攻击力+180%",
          "descRaw": "攻击速度<@ba.vdown>-50</>，攻击力<@ba.vup>+180%</>",
          "spCost": 60,
          "initSp": 20,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 16
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 256
        },
        "4": {
          "stats.cost": 15
        }
      },
      "id": "char_181_flower",
      "avatar": "char_181_flower",
      "professionShort": "医",
      "subProfession": "群愈师",
      "skillIdx": 1,
      "bench": false
    },
    "char_140_whitew": {
      "chessId": "chess_char_2_16_a",
      "baseId": "chess_char_2_16_a",
      "goldenId": "chess_char_2_16_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 35,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_140_whitew",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_whitew",
        "potRank": 0
      },
      "shopSortId": 16,
      "charId": "char_140_whitew",
      "name": "拉普兰德",
      "appellation": "Lappland",
      "rarity": 5,
      "profession": "近卫",
      "subProfessionId": "lord",
      "subProfessionName": "领主",
      "nationId": "siracusa",
      "garrisonIds": [
        "garrison_123_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_16_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1791,
        "atk": 560,
        "def": 293,
        "res": 10,
        "cost": 17,
        "blockCnt": 2,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-12",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_whitew_2",
        "iconId": "skchr_whitew_2",
        "name": "狼魂",
        "level": 4,
        "desc": "攻击力+75%，伤害类型变为法术，额外攻击一个目标，远程攻击不再降低攻击力\n技能自动开启",
        "descRaw": "攻击力<@ba.vup>+75%</>，伤害类型变为法术，额外攻击一个目标，远程攻击不再降低攻击力\n<@ba.rem>技能自动开启</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WHEN_ATTACK",
        "spCost": 27,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.75
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_whitew_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "精神摧毁",
          "desc": "攻击使目标的特殊能力失效，持续2（+1）秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_whitew",
        "name": "“幼狼的牙齿”",
        "type": "LOR-X",
        "level": 0,
        "icon": "uniequip_002_whitew"
      },
      "assets": {
        "avatar": "char_140_whitew",
        "portrait": "char_140_whitew_1",
        "spine": "char_140_whitew",
        "skillIcon": "skchr_whitew_2",
        "subProfIcon": "sub_lord_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_whitew_1",
          "iconId": "skchr_whitew_1",
          "name": "日晷",
          "desc": "攻击力+43%，有25%的概率抵挡物理伤害\n持续时间无限",
          "descRaw": "攻击力<@ba.vup>+43%</>，有<@ba.vup>25%</>的概率抵挡物理伤害\n<@ba.rem>持续时间无限</>",
          "spCost": 37,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_whitew_2",
          "iconId": "skchr_whitew_2",
          "name": "狼魂",
          "desc": "攻击力+75%，伤害类型变为法术，额外攻击一个目标，远程攻击不再降低攻击力\n技能自动开启",
          "descRaw": "攻击力<@ba.vup>+75%</>，伤害类型变为法术，额外攻击一个目标，远程攻击不再降低攻击力\n<@ba.rem>技能自动开启</>",
          "spCost": 27,
          "initSp": 0,
          "duration": 15,
          "skillType": "AUTO",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 535
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_140_whitew",
      "avatar": "char_140_whitew",
      "professionShort": "近",
      "subProfession": "领主",
      "skillIdx": 1,
      "bench": false
    },
    "char_4207_branch": {
      "chessId": "chess_char_2_17_a",
      "baseId": "chess_char_2_17_a",
      "goldenId": "chess_char_2_17_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 36,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4207_branch",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_branch",
        "potRank": 0
      },
      "shopSortId": 17,
      "charId": "char_4207_branch",
      "name": "折桠",
      "appellation": "Веточки",
      "rarity": 5,
      "profession": "重装",
      "subProfessionId": "unyield",
      "subProfessionName": "不屈者",
      "nationId": "ursus",
      "garrisonIds": [
        "garrison_69_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_17_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2895,
        "atk": 650,
        "def": 400,
        "res": 10,
        "cost": 31,
        "blockCnt": 3,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "0-1",
      "rangeGrid": [
        [
          0,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_branch_2",
        "iconId": "skchr_branch_2",
        "name": "生存决心",
        "level": 4,
        "desc": "技能开启时使自身周围的地面敌人战栗5秒；攻击力+100%，防御力+30%，同时攻击阻挡的所有敌人",
        "descRaw": "技能开启时使自身周围的地面敌人<$ba.tremble>战栗</><@ba.vup>5</>秒；攻击力<@ba.vup>+100%</>，防御力<@ba.vup>+30%</>，同时攻击阻挡的所有敌人",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 24,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 1,
          "not_combat": 5,
          "def": 0.3
        },
        "bbStr": {},
        "rangeId": "x-4",
        "rangeGrid": [
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ]
        ],
        "prefabId": "skchr_branch_2",
        "trigger": {
          "rule": "TAKE_DAMAGE",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "简易包扎",
          "desc": "技能结束时恢复自身50%（+10%）最大生命值"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_branch",
        "name": "“时间的痕迹”",
        "type": "UNY-X",
        "level": 0,
        "icon": "uniequip_002_branch"
      },
      "assets": {
        "avatar": "char_4207_branch",
        "portrait": "char_4207_branch_1",
        "spine": "char_4207_branch",
        "skillIcon": "skchr_branch_2",
        "subProfIcon": "sub_unyield_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_branch_1",
          "iconId": "skchr_branch_1",
          "name": "绝境抵抗",
          "desc": "防御力+75%，获得抵抗",
          "descRaw": "防御力<@ba.vup>+75%</>，获得<$ba.buffres>抵抗</>",
          "spCost": 20,
          "initSp": 4,
          "duration": 12,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_branch_2",
          "iconId": "skchr_branch_2",
          "name": "生存决心",
          "desc": "技能开启时使自身周围的地面敌人战栗5秒；攻击力+100%，防御力+30%，同时攻击阻挡的所有敌人",
          "descRaw": "技能开启时使自身周围的地面敌人<$ba.tremble>战栗</><@ba.vup>5</>秒；攻击力<@ba.vup>+100%</>，防御力<@ba.vup>+30%</>，同时攻击阻挡的所有敌人",
          "spCost": 24,
          "initSp": 0,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 33
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.maxHp": 2645
        },
        "4": {
          "stats.cost": 32
        }
      },
      "id": "char_4207_branch",
      "avatar": "char_4207_branch",
      "professionShort": "重",
      "subProfession": "不屈者",
      "skillIdx": 1,
      "bench": false
    },
    "char_431_ashlok": {
      "chessId": "chess_char_2_18_a",
      "baseId": "chess_char_2_18_a",
      "goldenId": "chess_char_2_18_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 37,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_431_ashlok",
        "tmplId": null,
        "skillIndex": 0,
        "uniEquipId": "uniequip_002_ashlok",
        "potRank": 0
      },
      "shopSortId": 18,
      "charId": "char_431_ashlok",
      "name": "灰毫",
      "appellation": "Ashlock",
      "rarity": 5,
      "profession": "重装",
      "subProfessionId": "fortress",
      "subProfessionName": "要塞",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_105_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_18_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2218,
        "atk": 728,
        "def": 379,
        "res": 0,
        "cost": 23,
        "blockCnt": 3,
        "bat": 2.8,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "4-5",
      "rangeGrid": [
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          -1,
          3
        ],
        [
          -1,
          4
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skcom_atk_up[3]",
        "iconId": "skcom_atk_up[3]",
        "name": "攻击力强化·γ型",
        "level": 4,
        "desc": "攻击力+45%",
        "descRaw": "攻击力<@ba.vup>+45%</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 30,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 37,
        "initSp": 5,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.45
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skcom_atk_up",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 0,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "炮术研习",
          "desc": "攻击力+6%（+2%），周身四格为地面时改为攻击力+10%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_ashlok",
        "name": "出门必备套装",
        "type": "FOR-X",
        "level": 0,
        "icon": "uniequip_002_ashlok"
      },
      "assets": {
        "avatar": "char_431_ashlok",
        "portrait": "char_431_ashlok_1",
        "spine": "char_431_ashlok",
        "skillIcon": "skcom_atk_up[3]",
        "subProfIcon": "sub_fortress_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_atk_up[3]",
          "iconId": "skcom_atk_up[3]",
          "name": "攻击力强化·γ型",
          "desc": "攻击力+45%",
          "descRaw": "攻击力<@ba.vup>+45%</>",
          "spCost": 37,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 1,
          "id": "skchr_ashlok_2",
          "iconId": "skchr_ashlok_2",
          "name": "专注轰击",
          "desc": "阻挡数变为0，只进行远程攻击，攻击间隔一定程度缩短，攻击力+25%",
          "descRaw": "阻挡数变为0，只进行远程攻击，攻击间隔<@ba.vup>一定程度缩短</>，攻击力<@ba.vup>+25%</>",
          "spCost": 23,
          "initSp": 5,
          "duration": 10,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 25
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 696
        },
        "4": {
          "stats.cost": 24
        }
      },
      "id": "char_431_ashlok",
      "avatar": "char_431_ashlok",
      "professionShort": "重",
      "subProfession": "要塞",
      "skillIdx": 0,
      "bench": false
    },
    "char_4151_tinman": {
      "chessId": "chess_char_2_19_a",
      "baseId": "chess_char_2_19_a",
      "goldenId": "chess_char_2_19_b",
      "isGolden": false,
      "tier": 2,
      "identifier": 38,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4151_tinman",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_tinman",
        "potRank": 0
      },
      "shopSortId": 19,
      "charId": "char_4151_tinman",
      "name": "锡人",
      "appellation": "Tin Man",
      "rarity": 5,
      "profession": "特种",
      "subProfessionId": "alchemist",
      "subProfessionName": "炼金师",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_151_a",
        "garrison_03_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_2_19_b",
      "status": {
        "phase": 1,
        "level": 60,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 851,
        "atk": 366,
        "def": 80,
        "res": 33,
        "cost": 13,
        "blockCnt": 1,
        "bat": 1.5,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-1",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -2,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_tinman_2",
        "iconId": "skchr_tinman_2",
        "name": "“大拉里”",
        "level": 4,
        "desc": "投掷一个炼金单元，在11秒内使落点周围的地面敌人每秒受到相当于攻击力65%的法术伤害、友方单位每秒恢复相当于攻击力15%的生命\n可充能1次",
        "descRaw": "投掷一个炼金单元，在<@ba.vup>11</>秒内使落点周围的地面敌人每秒受到相当于攻击力<@ba.vup>65%</>的法术伤害、友方单位每秒恢复相当于攻击力<@ba.vup>15%</>的生命\n<@ba.rem>可充能1次</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 30,
        "initSp": 12,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "projectile_delay_time": 11,
          "hp_recovery_per_sec_ratio": 0.15,
          "atk_scale": 0.65,
          "projectile_range": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_tinman_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "“在路上”",
          "desc": "在【萨卡兹的无终奇语】中，被招募时希望消耗-2，且作为负荷干员时使负荷临界点额外+4（+1）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_tinman",
        "name": "“颅相学”",
        "type": "ALC-X",
        "level": 0,
        "icon": "uniequip_002_tinman"
      },
      "assets": {
        "avatar": "char_4151_tinman",
        "portrait": "char_4151_tinman_1",
        "spine": "char_4151_tinman",
        "skillIcon": "skchr_tinman_2",
        "subProfIcon": "sub_alchemist_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_tinman_1",
          "iconId": "skchr_tinman_1",
          "name": "“老科利”",
          "desc": "投掷一个炼金单元，在8秒内使落点周围的地面敌人获得20%的虚弱效果且每秒受到相当于攻击力45%的法术伤害",
          "descRaw": "投掷一个炼金单元，在<@ba.vup>8</>秒内使落点周围的地面敌人获得<@ba.vup>20%</>的<$ba.weaken>虚弱</>效果且每秒受到相当于攻击力<@ba.vup>45%</>的法术伤害",
          "spCost": 7,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_tinman_2",
          "iconId": "skchr_tinman_2",
          "name": "“大拉里”",
          "desc": "投掷一个炼金单元，在11秒内使落点周围的地面敌人每秒受到相当于攻击力65%的法术伤害、友方单位每秒恢复相当于攻击力15%的生命\n可充能1次",
          "descRaw": "投掷一个炼金单元，在<@ba.vup>11</>秒内使落点周围的地面敌人每秒受到相当于攻击力<@ba.vup>65%</>的法术伤害、友方单位每秒恢复相当于攻击力<@ba.vup>15%</>的生命\n<@ba.rem>可充能1次</>",
          "spCost": 30,
          "initSp": 12,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 15
        },
        "2": {
          "stats.res": 25
        },
        "4": {
          "stats.cost": 14
        }
      },
      "id": "char_4151_tinman",
      "avatar": "char_4151_tinman",
      "professionShort": "特",
      "subProfession": "炼金师",
      "skillIdx": 1,
      "bench": false
    },
    "char_103_angel": {
      "chessId": "chess_char_3_01_a",
      "baseId": "chess_char_3_01_a",
      "goldenId": "chess_char_3_01_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 39,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_603_csnipe",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 1,
      "charId": "char_103_angel",
      "name": "能天使",
      "appellation": "Exusiai",
      "rarity": 6,
      "profession": "狙击",
      "subProfessionId": "fastshot",
      "subProfessionName": "速射手",
      "nationId": "lungmen",
      "garrisonIds": [
        "garrison_26_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_01_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1338,
        "atk": 464,
        "def": 136,
        "res": 0,
        "cost": 12,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": "fly",
      "skill": {
        "skillId": "skchr_angel_3",
        "iconId": "skchr_angel_3",
        "name": "过载模式",
        "level": 4,
        "desc": "攻击变为5连射，攻击间隔略微缩短\n技能会自动开启",
        "descRaw": "攻击变为<@ba.vup>5</>连射，攻击间隔<@ba.vup>略微缩短</>\n<@ba.rem>技能会自动开启</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 44,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@atk_scale": 1,
          "attack@times": 5,
          "base_attack_time": -0.05
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_angel_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "快速弹匣",
          "desc": "攻击速度+15（+3）"
        },
        {
          "name": "天使的祝福",
          "desc": "攻击力+8%（+2%），生命上限+13%（+3%）。置入战场后这个效果会同样赋予给一名随机友方单位"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_angel",
        "name": "能天使的杰作",
        "type": "MAR-X",
        "level": 0,
        "icon": "uniequip_002_angel"
      },
      "assets": {
        "avatar": "char_103_angel",
        "portrait": "char_103_angel_1",
        "spine": "char_103_angel",
        "skillIcon": "skchr_angel_3",
        "subProfIcon": "sub_fastshot_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_angel_1",
          "iconId": "skchr_angel_1",
          "name": "冲锋模式",
          "desc": "下次攻击变为3连射，每次射击造成相当于攻击力113%的伤害",
          "descRaw": "下次攻击变为<@ba.vup>3</>连射，每次射击造成相当于攻击力<@ba.vup>113%</>的伤害",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_angel_2",
          "iconId": "skchr_angel_2",
          "name": "扫射模式",
          "desc": "攻击变为4连射，每次射击造成相当于攻击力105%的伤害",
          "descRaw": "攻击变为<@ba.vup>4</>连射，每次射击造成相当于攻击力<@ba.vup>105%</>的伤害",
          "spCost": 42,
          "initSp": 15,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_angel_3",
          "iconId": "skchr_angel_3",
          "name": "过载模式",
          "desc": "攻击变为5连射，攻击间隔略微缩短\n技能会自动开启",
          "descRaw": "攻击变为<@ba.vup>5</>连射，攻击间隔<@ba.vup>略微缩短</>\n<@ba.rem>技能会自动开启</>",
          "spCost": 44,
          "initSp": 20,
          "duration": 15,
          "skillType": "AUTO",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 14
        },
        "2": {
          "stats.atk": 437
        },
        "3": {
          "stats.cost": 13
        }
      },
      "id": "char_103_angel",
      "avatar": "char_103_angel",
      "professionShort": "狙",
      "subProfession": "速射手",
      "skillIdx": 2,
      "bench": false
    },
    "char_294_ayer": {
      "chessId": "chess_char_3_02_a",
      "baseId": "chess_char_3_02_a",
      "goldenId": "chess_char_3_02_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 40,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_294_ayer",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_ayer",
        "potRank": 0
      },
      "shopSortId": 2,
      "charId": "char_294_ayer",
      "name": "断崖",
      "appellation": "Ayerscarpe",
      "rarity": 5,
      "profession": "近卫",
      "subProfessionId": "lord",
      "subProfessionName": "领主",
      "nationId": "rim",
      "garrisonIds": [
        "garrison_47_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_02_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1911,
        "atk": 568,
        "def": 311,
        "res": 10,
        "cost": 17,
        "blockCnt": 2,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-12",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_ayer_2",
        "iconId": "skchr_ayer_2",
        "name": "浮游刃启动",
        "level": 4,
        "desc": "攻击范围扩大，伤害类型变为法术；每次攻击时，额外对周围8格友方单位阻挡的所有敌人造成相当于攻击力100%的法术伤害(均视为近战攻击）",
        "descRaw": "攻击范围<@ba.vup>扩大</>，伤害类型变为法术；每次攻击时，额外对周围8格友方单位阻挡的所有敌人造成相当于攻击力<@ba.vup>100%</>的法术伤害(均视为近战攻击）",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 54,
        "initSp": 18,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@atk_scale": 1,
          "atk_scale": 1
        },
        "bbStr": {},
        "rangeId": "3-1",
        "rangeGrid": [
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ]
        ],
        "prefabId": "skchr_ayer_2",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "索敌援助",
          "desc": "自身与周围8格友方干员攻速+10（+2）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_ayer",
        "name": "荒野便携提神剂",
        "type": "LOR-X",
        "level": 0,
        "icon": "uniequip_002_ayer"
      },
      "assets": {
        "avatar": "char_294_ayer",
        "portrait": "char_294_ayer_1",
        "spine": "char_294_ayer",
        "skillIcon": "skchr_ayer_2",
        "subProfIcon": "sub_lord_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_ayer_1",
          "iconId": "skchr_ayer_1",
          "name": "多导向散射弹丸",
          "desc": "下次攻击对攻击范围内最多2名敌人造成攻击力125%的法术伤害，并使目标停顿1.0秒",
          "descRaw": "下次攻击对攻击范围内最多<@ba.vup>2</>名敌人造成攻击力<@ba.vup>125%</>的法术伤害，并使目标<$ba.sluggish>停顿</><@ba.vup>1.0</>秒",
          "spCost": 5,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_ayer_2",
          "iconId": "skchr_ayer_2",
          "name": "浮游刃启动",
          "desc": "攻击范围扩大，伤害类型变为法术；每次攻击时，额外对周围8格友方单位阻挡的所有敌人造成相当于攻击力100%的法术伤害(均视为近战攻击）",
          "descRaw": "攻击范围<@ba.vup>扩大</>，伤害类型变为法术；每次攻击时，额外对周围8格友方单位阻挡的所有敌人造成相当于攻击力<@ba.vup>100%</>的法术伤害(均视为近战攻击）",
          "spCost": 54,
          "initSp": 18,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 542
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_294_ayer",
      "avatar": "char_294_ayer",
      "professionShort": "近",
      "subProfession": "领主",
      "skillIdx": 1,
      "bench": false
    },
    "char_308_swire": {
      "chessId": "chess_char_3_03_a",
      "baseId": "chess_char_3_03_a",
      "goldenId": "chess_char_3_03_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 41,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_308_swire",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_swire",
        "potRank": 0
      },
      "shopSortId": 3,
      "charId": "char_308_swire",
      "name": "诗怀雅",
      "appellation": "Swire",
      "rarity": 5,
      "profession": "近卫",
      "subProfessionId": "instructor",
      "subProfessionName": "教官",
      "nationId": "lungmen",
      "garrisonIds": [
        "garrison_133_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_03_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1378,
        "atk": 577,
        "def": 346,
        "res": 0,
        "cost": 14,
        "blockCnt": 2,
        "bat": 1.05,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-2",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_swire_2",
        "iconId": "skchr_swire_2",
        "name": "协同作战",
        "level": 4,
        "desc": "攻击力+40%，第一天赋效果提升至2.4倍",
        "descRaw": "攻击力<@ba.vup>+40%</>，第一天赋效果提升至<@ba.vup>2.4</>倍",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 18,
        "spType": "INCREASE_WHEN_ATTACK",
        "spCost": 55,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "talent_scale": 2.4,
          "atk": 0.4
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_swire_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "近距离作战指导",
          "desc": "在场时周围8格内的近战友方单位攻击力+12%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_swire",
        "name": "防身口红",
        "type": "INS-X",
        "level": 0,
        "icon": "uniequip_002_swire"
      },
      "assets": {
        "avatar": "char_308_swire",
        "portrait": "char_308_swire_1",
        "spine": "char_308_swire",
        "skillIcon": "skchr_swire_2",
        "subProfIcon": "sub_instructor_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_swire_1",
          "iconId": "skchr_swire_1",
          "name": "指挥调度",
          "desc": "第一天赋生效范围扩大，效果提升至2倍",
          "descRaw": "第一天赋生效范围<@ba.vup>扩大</>，效果提升至<@ba.vup>2</>倍",
          "spCost": 55,
          "initSp": 20,
          "duration": 21,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_swire_2",
          "iconId": "skchr_swire_2",
          "name": "协同作战",
          "desc": "攻击力+40%，第一天赋效果提升至2.4倍",
          "descRaw": "攻击力<@ba.vup>+40%</>，第一天赋效果提升至<@ba.vup>2.4</>倍",
          "spCost": 55,
          "initSp": 20,
          "duration": 18,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 16
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 551
        },
        "4": {
          "stats.cost": 15
        }
      },
      "id": "char_308_swire",
      "avatar": "char_308_swire",
      "professionShort": "近",
      "subProfession": "教官",
      "skillIdx": 1,
      "bench": false
    },
    "char_1033_swire2": {
      "chessId": "chess_char_3_04_a",
      "baseId": "chess_char_3_04_a",
      "goldenId": "chess_char_3_04_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 42,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_605_cmedic",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 4,
      "charId": "char_1033_swire2",
      "name": "琳琅诗怀雅",
      "appellation": "Swire the Elegant Wit",
      "rarity": 6,
      "profession": "特种",
      "subProfessionId": "merchant",
      "subProfessionName": "行商",
      "nationId": "lungmen",
      "garrisonIds": [
        "garrison_98_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_04_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1864,
        "atk": 702,
        "def": 388,
        "res": 0,
        "cost": 7,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 25,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_swire2_2",
        "iconId": "skchr_swire2_2",
        "name": "“见面礼”",
        "level": 4,
        "desc": "消耗一枚金币在范围内一个可放置且可通行的地面放置香槟炸弹，香槟炸弹会对触碰到的首个敌人造成相当于攻击力155%的物理伤害，并使目标停顿2秒\n香槟炸弹在场3秒后可额外造成一次伤害；携带此技能时金币上限为3",
        "descRaw": "消耗<@ba.vup>一枚</>金币在范围内一个可放置且可通行的地面放置香槟炸弹，香槟炸弹会对触碰到的首个敌人造成相当于攻击力<@ba.vup>155%</>的物理伤害，并使目标<$ba.sluggish>停顿</><@ba.vup>2</>秒\n<@ba.rem>香槟炸弹在场3秒后可额外造成一次伤害；携带此技能时金币上限为3</>",
        "skillType": "PASSIVE",
        "durationType": "NONE",
        "duration": -1,
        "spType": "ON_DEPLOY",
        "spCost": 0,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 0,
        "bb": {
          "sp": 3,
          "atk_scale": 1.55,
          "sluggish": 2,
          "attack@sp": -1
        },
        "bbStr": {},
        "rangeId": "1-1",
        "rangeGrid": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ],
        "prefabId": "skchr_swire2_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": "token_10031_swire2_gdtrap"
      },
      "talents": [
        {
          "name": "大买家",
          "desc": "开启技能时获得1枚金币（可用于技能消耗），技能期间每次特性消耗费用时获得1枚金币，并提升自身4%的攻击力（最多叠加9（+1）次）"
        },
        {
          "name": "破财消灾",
          "desc": "受到致命伤害时，若费用足够则消耗5点部署费用使生命恢复到80%（+10%），每次触发该天赋时消耗的费用翻倍"
        }
      ],
      "tokens": [
        "token_10031_swire2_gdtrap"
      ],
      "module": {
        "id": "uniequip_002_swire2",
        "name": "“金币辉煌”",
        "type": "MER-X",
        "level": 0,
        "icon": "uniequip_002_swire2"
      },
      "assets": {
        "avatar": "char_1033_swire2",
        "portrait": "char_1033_swire2_1",
        "spine": "char_1033_swire2",
        "skillIcon": "skchr_swire2_2",
        "subProfIcon": "sub_merchant_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_swire2_1",
          "iconId": "skchr_swire2_1",
          "name": "仗义疏财",
          "desc": "消耗一枚金币，下一次攻击会为周围八格内血量不足70%的一名友方单位恢复相当于攻击力40%的生命\n携带此技能时金币上限为2",
          "descRaw": "消耗<@ba.vup>一枚</>金币，下一次攻击会为周围八格内血量不足70%的一名友方单位恢复相当于攻击力<@ba.vup>40%</>的生命\n<@ba.rem>携带此技能时金币上限为2</>",
          "spCost": 0,
          "initSp": 0,
          "duration": -1,
          "skillType": "PASSIVE",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_swire2_2",
          "iconId": "skchr_swire2_2",
          "name": "“见面礼”",
          "desc": "消耗一枚金币在范围内一个可放置且可通行的地面放置香槟炸弹，香槟炸弹会对触碰到的首个敌人造成相当于攻击力155%的物理伤害，并使目标停顿2秒\n香槟炸弹在场3秒后可额外造成一次伤害；携带此技能时金币上限为3",
          "descRaw": "消耗<@ba.vup>一枚</>金币在范围内一个可放置且可通行的地面放置香槟炸弹，香槟炸弹会对触碰到的首个敌人造成相当于攻击力<@ba.vup>155%</>的物理伤害，并使目标<$ba.sluggish>停顿</><@ba.vup>2</>秒\n<@ba.rem>香槟炸弹在场3秒后可额外造成一次伤害；携带此技能时金币上限为3</>",
          "spCost": 0,
          "initSp": 0,
          "duration": -1,
          "skillType": "PASSIVE",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_swire2_3",
          "iconId": "skchr_swire2_3",
          "name": "千金一掷",
          "desc": "攻击变为二连击，击倒敌人时获得一枚金币；主动关闭技能时消耗所有金币对前方范围内敌人随机攻击，每消耗一枚金币造成一次相当于攻击力100%的物理伤害，并将目标小力地向前推开\n持续时间无限，可随时主动关闭技能；携带此技能时金币上限为10",
          "descRaw": "攻击变为二连击，击倒敌人时获得一枚金币；主动关闭技能时消耗<@ba.vup>所有</>金币对前方范围内敌人随机攻击，每消耗一枚金币造成一次相当于攻击力<@ba.vup>100%</>的物理伤害，并将目标<@ba.vup>小力地</>向前推开\n<@ba.rem>持续时间无限，可随时主动关闭技能；携带此技能时金币上限为10</>",
          "spCost": 5,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 9
        },
        "2": {
          "stats.atk": 672
        },
        "4": {
          "stats.cost": 8
        }
      },
      "id": "char_1033_swire2",
      "avatar": "char_1033_swire2",
      "professionShort": "特",
      "subProfession": "行商",
      "skillIdx": 1,
      "bench": false
    },
    "char_263_skadi": {
      "chessId": "chess_char_3_05_a",
      "baseId": "chess_char_3_05_a",
      "goldenId": "chess_char_3_05_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 43,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_601_cguard",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 5,
      "charId": "char_263_skadi",
      "name": "斯卡蒂",
      "appellation": "Skadi",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "fearless",
      "subProfessionName": "无畏者",
      "nationId": "egir",
      "garrisonIds": [
        "garrison_38_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_05_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2938,
        "atk": 875,
        "def": 220,
        "res": 0,
        "cost": 17,
        "blockCnt": 1,
        "bat": 1.5,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_skadi_3",
        "iconId": "skchr_skadi_3",
        "name": "涌潮悲歌",
        "level": 4,
        "desc": "攻击力、防御力和生命上限各+85%",
        "descRaw": "攻击力、防御力和生命上限各<@ba.vup>+85%</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 38,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 90,
        "initSp": 55,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.85,
          "def": 0.85,
          "max_hp": 0.85
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_skadi_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "深海掠食者",
          "desc": "编入队伍时，所有【深海猎人】干员的攻击力+16%（+2%）"
        },
        {
          "name": "迅捷出击",
          "desc": "自身再部署时间-10秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_skadi",
        "name": "潮湿的剑袋",
        "type": "DRE-Y",
        "level": 0,
        "icon": "uniequip_002_skadi"
      },
      "assets": {
        "avatar": "char_263_skadi",
        "portrait": "char_263_skadi_1",
        "spine": "char_263_skadi",
        "skillIcon": "skchr_skadi_3",
        "subProfIcon": "sub_fearless_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_quickattack[3]",
          "iconId": "skcom_quickattack[3]",
          "name": "迅捷打击·γ型",
          "desc": "攻击力+27%，攻击速度+25",
          "descRaw": "攻击力<@ba.vup>+27%</>，攻击速度<@ba.vup>+25</>",
          "spCost": 42,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_skadi_2",
          "iconId": "skchr_skadi_2",
          "name": "跃浪击",
          "desc": "部署后20秒内攻击力+100%",
          "descRaw": "部署后<@ba.vup>20</>秒内攻击力<@ba.vup>+100%</>",
          "spCost": 0,
          "initSp": 0,
          "duration": -1,
          "skillType": "PASSIVE",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_skadi_3",
          "iconId": "skchr_skadi_3",
          "name": "涌潮悲歌",
          "desc": "攻击力、防御力和生命上限各+85%",
          "descRaw": "攻击力、防御力和生命上限各<@ba.vup>+85%</>",
          "spCost": 90,
          "initSp": 55,
          "duration": 38,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 842
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_263_skadi",
      "avatar": "char_263_skadi",
      "professionShort": "近",
      "subProfession": "无畏者",
      "skillIdx": 2,
      "bench": false
    },
    "char_4148_philae": {
      "chessId": "chess_char_3_06_a",
      "baseId": "chess_char_3_06_a",
      "goldenId": "chess_char_3_06_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 44,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4148_philae",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_philae",
        "potRank": 0
      },
      "shopSortId": 6,
      "charId": "char_4148_philae",
      "name": "菲莱",
      "appellation": "Philae",
      "rarity": 5,
      "profession": "重装",
      "subProfessionId": "primprotector",
      "subProfessionName": "本源铁卫",
      "nationId": "sargon",
      "garrisonIds": [
        "garrison_43_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_06_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2323,
        "atk": 507,
        "def": 435,
        "res": 10,
        "cost": 23,
        "blockCnt": 3,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "0-1",
      "rangeGrid": [
        [
          0,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_philae_2",
        "iconId": "skchr_philae_2",
        "name": "冥河诅咒",
        "level": 4,
        "desc": "停止攻击，生命上限+40%，受到攻击时对周围的地面敌人造成攻击力110%的法术伤害并附带25%攻击力的凋亡损伤（每2秒最多触发一次）；若技能期间受到元素损伤则攻击力+70%至技能结束",
        "descRaw": "停止攻击，生命上限<@ba.vup>+40%</>，受到攻击时对周围的地面敌人造成攻击力<@ba.vup>110%</>的法术伤害并附带<@ba.vup>25%</>攻击力的<$ba.dt.apoptosis2>凋亡损伤</>（每<@ba.vup>2</>秒最多触发一次）；若技能期间受到<$ba.dt.element>元素损伤</>则攻击力<@ba.vup>+70%</>至技能结束",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 40,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 55,
        "initSp": 13,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 1.1,
          "ep_damage_ratio": 0.25,
          "atk": 0.7,
          "aoe_cd": 2,
          "max_hp": 0.4
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_philae_2",
        "trigger": {
          "rule": "TAKE_DAMAGE",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "神河谕使",
          "desc": "受到的元素损伤-12%（+2%），受到凋亡损伤时回复2点技力"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_philae",
        "name": "被摩挲的日子",
        "type": "PRP-X",
        "level": 0,
        "icon": "uniequip_002_philae"
      },
      "assets": {
        "avatar": "char_4148_philae",
        "portrait": "char_4148_philae_1",
        "spine": "char_4148_philae",
        "skillIcon": "skchr_philae_2",
        "subProfIcon": "sub_primprotector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_philae_1",
          "iconId": "skchr_philae_1",
          "name": "灵河护佑",
          "desc": "生命上限+45%，立刻清除自身的元素损伤并获得900点损伤屏障",
          "descRaw": "生命上限<@ba.vup>+45%</>，立刻清除自身的<$ba.dt.element>元素损伤</>并获得<@ba.vup>900</>点<$ba.epbarrier>损伤屏障</>",
          "spCost": 25,
          "initSp": 5,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_philae_2",
          "iconId": "skchr_philae_2",
          "name": "冥河诅咒",
          "desc": "停止攻击，生命上限+40%，受到攻击时对周围的地面敌人造成攻击力110%的法术伤害并附带25%攻击力的凋亡损伤（每2秒最多触发一次）；若技能期间受到元素损伤则攻击力+70%至技能结束",
          "descRaw": "停止攻击，生命上限<@ba.vup>+40%</>，受到攻击时对周围的地面敌人造成攻击力<@ba.vup>110%</>的法术伤害并附带<@ba.vup>25%</>攻击力的<$ba.dt.apoptosis2>凋亡损伤</>（每<@ba.vup>2</>秒最多触发一次）；若技能期间受到<$ba.dt.element>元素损伤</>则攻击力<@ba.vup>+70%</>至技能结束",
          "spCost": 55,
          "initSp": 13,
          "duration": 40,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 25
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 482
        },
        "4": {
          "stats.cost": 24
        }
      },
      "id": "char_4148_philae",
      "avatar": "char_4148_philae",
      "professionShort": "重",
      "subProfession": "本源铁卫",
      "skillIdx": 1,
      "bench": false
    },
    "char_388_mint": {
      "chessId": "chess_char_3_08_a",
      "baseId": "chess_char_3_08_a",
      "goldenId": "chess_char_3_08_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 46,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_388_mint",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_mint",
        "potRank": 0
      },
      "shopSortId": 8,
      "charId": "char_388_mint",
      "name": "薄绿",
      "appellation": "Mint",
      "rarity": 5,
      "profession": "术师",
      "subProfessionId": "phalanx",
      "subProfessionName": "阵法术师",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_48_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_08_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1594,
        "atk": 629,
        "def": 170,
        "res": 15,
        "cost": 22,
        "blockCnt": 1,
        "bat": 2,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "x-1",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          -2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -2,
          0
        ]
      ],
      "dmgType": "arts",
      "attackKind": "none",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_mint_2",
        "iconId": "skchr_mint_2",
        "name": "聚能涡旋",
        "level": 4,
        "desc": "每次攻击把目标小力地拖拽至面前，并造成相当于攻击力110%的法术伤害。技能结束时对攻击范围内所有敌人造成相当于攻击力210%的法术伤害",
        "descRaw": "每次攻击把目标<@ba.vup>小力地</>拖拽至面前，并造成相当于攻击力<@ba.vup>110%</>的法术伤害。技能结束时对攻击范围内所有敌人造成相当于攻击力<@ba.vup>210%</>的法术伤害",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 33,
        "initSp": 10,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@atk_scale": 1.1,
          "atk_scale": 2.1,
          "attack@force": 0
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_mint_2",
        "trigger": {
          "rule": "SEARCH",
          "rawRule": "SEARCH",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "地质学者",
          "desc": "技能未开启时，周围四格友方单位的防御力+12%（+2%）；技能开启时，自身不容易受到敌人攻击"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_mint",
        "name": "注意力保持装置",
        "type": "PLX-X",
        "level": 0,
        "icon": "uniequip_002_mint"
      },
      "assets": {
        "avatar": "char_388_mint",
        "portrait": "char_388_mint_1",
        "spine": "char_388_mint",
        "skillIcon": "skchr_mint_2",
        "subProfIcon": "sub_phalanx_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_mint_1",
          "iconId": "skchr_mint_1",
          "name": "风语",
          "desc": "攻击范围扩大，攻击造成相当于攻击力125%的法术伤害",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击造成相当于攻击力<@ba.vup>125%</>的法术伤害",
          "spCost": 28,
          "initSp": 6,
          "duration": 16,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_mint_2",
          "iconId": "skchr_mint_2",
          "name": "聚能涡旋",
          "desc": "每次攻击把目标小力地拖拽至面前，并造成相当于攻击力110%的法术伤害。技能结束时对攻击范围内所有敌人造成相当于攻击力210%的法术伤害",
          "descRaw": "每次攻击把目标<@ba.vup>小力地</>拖拽至面前，并造成相当于攻击力<@ba.vup>110%</>的法术伤害。技能结束时对攻击范围内所有敌人造成相当于攻击力<@ba.vup>210%</>的法术伤害",
          "spCost": 33,
          "initSp": 10,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 25
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 24
        },
        "4": {
          "stats.cost": 23
        }
      },
      "id": "char_388_mint",
      "avatar": "char_388_mint",
      "professionShort": "术",
      "subProfession": "阵法术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4079_haini": {
      "chessId": "chess_char_3_09_a",
      "baseId": "chess_char_3_09_a",
      "goldenId": "chess_char_3_09_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 47,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4079_haini",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_haini",
        "potRank": 0
      },
      "shopSortId": 9,
      "charId": "char_4079_haini",
      "name": "海霓",
      "appellation": "Lucilla",
      "rarity": 5,
      "profession": "辅助",
      "subProfessionId": "underminer",
      "subProfessionName": "削弱者",
      "nationId": "egir",
      "garrisonIds": [
        "garrison_131_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_09_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1267,
        "atk": 365,
        "def": 90,
        "res": 33,
        "cost": 10,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-6",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -2,
          0
        ],
        [
          -2,
          1
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_haini_2",
        "iconId": "skchr_haini_2",
        "name": "阻滞性显色剂",
        "level": 4,
        "desc": "攻击力+30%，额外攻击一个目标，攻击范围内的非精英和领袖敌人移动速度-40%，且被击倒时使天赋效果提升0.4倍，最多提升至2.6倍，持续至技能结束",
        "descRaw": "攻击力<@ba.vup>+30%</>，额外攻击一个目标，攻击范围内的非精英和领袖敌人移动速度<@ba.vup>-40%</>，且被击倒时使天赋效果提升<@ba.vup>0.4</>倍，最多提升至<@ba.vup>2.6</>倍，持续至技能结束",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 26,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 39,
        "initSp": 19,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.3,
          "attack@move_speed": -0.4,
          "attack@talent_up": 0.4,
          "attack@max_talent_up": 2.6,
          "attack@max_target": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_haini_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "测绘器材的奇用",
          "desc": "攻击范围内的非精英和领袖敌人获得18%（+2%）的脆弱效果"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_haini",
        "name": "多功能测绘仪-改良版",
        "type": "UMD-X",
        "level": 0,
        "icon": "uniequip_002_haini"
      },
      "assets": {
        "avatar": "char_4079_haini",
        "portrait": "char_4079_haini_1",
        "spine": "char_4079_haini",
        "skillIcon": "skchr_haini_2",
        "subProfIcon": "sub_underminer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_haini_1",
          "iconId": "skchr_haini_1",
          "name": "迷惑性洋流图",
          "desc": "下次攻击的攻击力提升至125%，并同时攻击4个敌人",
          "descRaw": "下次攻击的攻击力提升至<@ba.vup>125%</>，并同时攻击<@ba.vup>4</>个敌人",
          "spCost": 5,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_haini_2",
          "iconId": "skchr_haini_2",
          "name": "阻滞性显色剂",
          "desc": "攻击力+30%，额外攻击一个目标，攻击范围内的非精英和领袖敌人移动速度-40%，且被击倒时使天赋效果提升0.4倍，最多提升至2.6倍，持续至技能结束",
          "descRaw": "攻击力<@ba.vup>+30%</>，额外攻击一个目标，攻击范围内的非精英和领袖敌人移动速度<@ba.vup>-40%</>，且被击倒时使天赋效果提升<@ba.vup>0.4</>倍，最多提升至<@ba.vup>2.6</>倍，持续至技能结束",
          "spCost": 39,
          "initSp": 19,
          "duration": 26,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 12
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.res": 25
        },
        "4": {
          "stats.cost": 11
        }
      },
      "id": "char_4079_haini",
      "avatar": "char_4079_haini",
      "professionShort": "辅",
      "subProfession": "削弱者",
      "skillIdx": 1,
      "bench": false
    },
    "char_440_pinecn": {
      "chessId": "chess_char_3_10_a",
      "baseId": "chess_char_3_10_a",
      "goldenId": "chess_char_3_10_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 48,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_440_pinecn",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_pinecn",
        "potRank": 0
      },
      "shopSortId": 10,
      "charId": "char_440_pinecn",
      "name": "松果",
      "appellation": "Pinecone",
      "rarity": 4,
      "profession": "狙击",
      "subProfessionId": "reaperrange",
      "subProfessionName": "散射手",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_116_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_10_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1650,
        "atk": 588,
        "def": 150,
        "res": 0,
        "cost": 28,
        "blockCnt": 1,
        "bat": 2.3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-5",
      "rangeGrid": [
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_pinecn_2",
        "iconId": "skchr_pinecn_2",
        "name": "电能过载",
        "level": 4,
        "desc": "攻击力+25%，攻击范围缩短；每使用过一次技能额外追加攻击力+20%的效果（最多+60%）",
        "descRaw": "攻击力<@ba.vup>+25%</>，攻击范围<@ba.vdown>缩短</>；每使用过一次技能额外追加攻击力<@ba.vup>+20%</>的效果（最多+60%）",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 30,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "pinecn_s_2[a].atk": 0.25,
          "pinecn_s_2[b].atk": 0.45,
          "pinecn_s_2[c].atk": 0.65,
          "pinecn_s_2[d].atk": 0.85
        },
        "bbStr": {},
        "rangeId": "1-3",
        "rangeGrid": [
          [
            1,
            1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            -1,
            1
          ]
        ],
        "prefabId": "skchr_pinecn_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "便携电源",
          "desc": "部署后60秒内技力自然回复速度+0.5（+0.05）/秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_pinecn",
        "name": "移动电箱",
        "type": "RPR-X",
        "level": 0,
        "icon": "uniequip_002_pinecn"
      },
      "assets": {
        "avatar": "char_440_pinecn",
        "portrait": "char_440_pinecn_1",
        "spine": "char_440_pinecn",
        "skillIcon": "skchr_pinecn_2",
        "subProfIcon": "sub_reaperrange_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_pinecn_1",
          "iconId": "skchr_pinecn_1",
          "name": "RMA长钉",
          "desc": "立即以165%的攻击力进行一次攻击，无视敌人180的防御力\n可充能2次",
          "descRaw": "立即以<@ba.vup>165%</>的攻击力进行一次攻击，无视敌人<@ba.vup>180</>的防御力\n<@ba.rem>可充能2次</>",
          "spCost": 11,
          "initSp": 0,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_pinecn_2",
          "iconId": "skchr_pinecn_2",
          "name": "电能过载",
          "desc": "攻击力+25%，攻击范围缩短；每使用过一次技能额外追加攻击力+20%的效果（最多+60%）",
          "descRaw": "攻击力<@ba.vup>+25%</>，攻击范围<@ba.vdown>缩短</>；每使用过一次技能额外追加攻击力<@ba.vup>+20%</>的效果（最多+60%）",
          "spCost": 30,
          "initSp": 0,
          "duration": 20,
          "skillType": "AUTO",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 30
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 560
        },
        "4": {
          "stats.cost": 29
        }
      },
      "id": "char_440_pinecn",
      "avatar": "char_440_pinecn",
      "professionShort": "狙",
      "subProfession": "散射手",
      "skillIdx": 1,
      "bench": false
    },
    "char_423_blemsh": {
      "chessId": "chess_char_3_12_a",
      "baseId": "chess_char_3_12_a",
      "goldenId": "chess_char_3_12_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 50,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_608_acpion",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 12,
      "charId": "char_423_blemsh",
      "name": "瑕光",
      "appellation": "Blemishine",
      "rarity": 6,
      "profession": "重装",
      "subProfessionId": "guardian",
      "subProfessionName": "守护者",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_106_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_12_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2334,
        "atk": 428,
        "def": 476,
        "res": 10,
        "cost": 20,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_blemsh_3",
        "iconId": "skchr_blemsh_3",
        "name": "先贤化身",
        "level": 4,
        "desc": "攻击力+65%，防御力+25%，每次攻击额外造成相当于攻击力60%的法术伤害，并恢复周围一名其他友方单位相当于攻击力70%的生命",
        "descRaw": "攻击力<@ba.vup>+65%</>，防御力<@ba.vup>+25%</>，每次攻击额外造成相当于攻击力<@ba.vup>60%</>的法术伤害，并恢复周围一名<@ba.rem>其他</>友方单位相当于攻击力<@ba.vup>70%</>的生命",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 23,
        "spType": "INCREASE_WHEN_TAKEN_DAMAGE",
        "spCost": 29,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.65,
          "def": 0.25,
          "attack@blemsh_s_3_extra_dmg[magic].atk_scale": 0.6,
          "heal_scale": 0.7
        },
        "bbStr": {},
        "rangeId": "x-1",
        "rangeGrid": [
          [
            2,
            0
          ],
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0,
            -2
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -2,
            0
          ]
        ],
        "prefabId": "skchr_blemsh_3",
        "trigger": {
          "rule": "TAKE_DAMAGE",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "剑盾骑士",
          "desc": "在场时所有受击回复的技能在干员攻击时也回复1点技力"
        },
        {
          "name": "仁慈",
          "desc": "自身可以攻击并优先攻击沉睡的目标且攻击力提升至144%（+4%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_blemsh",
        "name": "工匠团的回响",
        "type": "GUA-Y",
        "level": 0,
        "icon": "uniequip_002_blemsh"
      },
      "assets": {
        "avatar": "char_423_blemsh",
        "portrait": "char_423_blemsh_1",
        "spine": "char_423_blemsh",
        "skillIcon": "skchr_blemsh_3",
        "subProfIcon": "sub_guardian_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_blemsh_1",
          "iconId": "skchr_blemsh_1",
          "name": "光芒涌动",
          "desc": "下次攻击造成相当于攻击力200%的物理伤害，且恢复周围一名友方单位相当于攻击力110%的生命\n可充能1次",
          "descRaw": "下次攻击造成相当于攻击力<@ba.vup>200%</>的物理伤害，且恢复周围一名友方单位相当于攻击力<@ba.vup>110%</>的生命\n<@ba.rem>可充能1次</>",
          "spCost": 5,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_blemsh_2",
          "iconId": "skchr_blemsh_2",
          "name": "慑敌辉光",
          "desc": "攻击力+55%，立即使自身这格内的所有地面敌人陷入沉睡，且周围的所有友方单位每秒恢复相当于攻击力16%的生命值",
          "descRaw": "攻击力<@ba.vup>+55%</>，立即使自身这格内的所有地面敌人陷入<$ba.sleep>沉睡</>，且周围的所有友方单位每秒恢复相当于攻击力<@ba.vup>16%</>的生命值",
          "spCost": 18,
          "initSp": 0,
          "duration": 10,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_blemsh_3",
          "iconId": "skchr_blemsh_3",
          "name": "先贤化身",
          "desc": "攻击力+65%，防御力+25%，每次攻击额外造成相当于攻击力60%的法术伤害，并恢复周围一名其他友方单位相当于攻击力70%的生命",
          "descRaw": "攻击力<@ba.vup>+65%</>，防御力<@ba.vup>+25%</>，每次攻击额外造成相当于攻击力<@ba.vup>60%</>的法术伤害，并恢复周围一名<@ba.rem>其他</>友方单位相当于攻击力<@ba.vup>70%</>的生命",
          "spCost": 29,
          "initSp": 15,
          "duration": 23,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 22
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 402
        },
        "4": {
          "stats.cost": 21
        }
      },
      "id": "char_423_blemsh",
      "avatar": "char_423_blemsh",
      "professionShort": "重",
      "subProfession": "守护者",
      "skillIdx": 2,
      "bench": false
    },
    "char_4054_malist": {
      "chessId": "chess_char_3_13_a",
      "baseId": "chess_char_3_13_a",
      "goldenId": "chess_char_3_13_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 51,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4054_malist",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_malist",
        "potRank": 0
      },
      "shopSortId": 13,
      "charId": "char_4054_malist",
      "name": "至简",
      "appellation": "Minimalist",
      "rarity": 5,
      "profession": "术师",
      "subProfessionId": "funnel",
      "subProfessionName": "驭械术师",
      "nationId": "sargon",
      "garrisonIds": [
        "garrison_13_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_13_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1064,
        "atk": 268,
        "def": 100,
        "res": 20,
        "cost": 20,
        "blockCnt": 1,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-1",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_malist_2",
        "iconId": "skchr_malist_2",
        "name": "神工意匠",
        "level": 4,
        "desc": "下次攻击造成相当于攻击力130%的法术伤害，并连续攻击两次\n可充能2次",
        "descRaw": "下次攻击造成相当于攻击力<@ba.vup>130%</>的法术伤害，并连续攻击两次\n<@ba.rem>可充能2次</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 7,
        "initSp": 1,
        "maxChargeTime": 2,
        "increment": 1,
        "bb": {
          "atk_scale": 1.3,
          "ct": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_malist_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "忽有所悟",
          "desc": "攻击时，30％（+5%）几率当次攻击的攻击力提升至150％"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_malist",
        "name": "“新家园”",
        "type": "FUN-Y",
        "level": 0,
        "icon": "uniequip_002_malist"
      },
      "assets": {
        "avatar": "char_4054_malist",
        "portrait": "char_4054_malist_1",
        "spine": "char_4054_malist",
        "skillIcon": "skchr_malist_2",
        "subProfIcon": "sub_funnel_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_quickattack[3]",
          "iconId": "skcom_quickattack[3]",
          "name": "迅捷打击·γ型",
          "desc": "攻击力+27%，攻击速度+25",
          "descRaw": "攻击力<@ba.vup>+27%</>，攻击速度<@ba.vup>+25</>",
          "spCost": 42,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_malist_2",
          "iconId": "skchr_malist_2",
          "name": "神工意匠",
          "desc": "下次攻击造成相当于攻击力130%的法术伤害，并连续攻击两次\n可充能2次",
          "descRaw": "下次攻击造成相当于攻击力<@ba.vup>130%</>的法术伤害，并连续攻击两次\n<@ba.rem>可充能2次</>",
          "spCost": 7,
          "initSp": 1,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 23
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 22
        },
        "4": {
          "stats.cost": 21
        }
      },
      "id": "char_4054_malist",
      "avatar": "char_4054_malist",
      "professionShort": "术",
      "subProfession": "驭械术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_150_snakek": {
      "chessId": "chess_char_3_16_a",
      "baseId": "chess_char_3_16_a",
      "goldenId": "chess_char_3_16_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 54,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_150_snakek",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_snakek",
        "potRank": 0
      },
      "shopSortId": 16,
      "charId": "char_150_snakek",
      "name": "蛇屠箱",
      "appellation": "Cuora",
      "rarity": 4,
      "profession": "重装",
      "subProfessionId": "protector",
      "subProfessionName": "铁卫",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_70_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_16_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2173,
        "atk": 310,
        "def": 530,
        "res": 0,
        "cost": 19,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "0-1",
      "rangeGrid": [
        [
          0,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_snakek_2",
        "iconId": "skchr_snakek_2",
        "name": "壳状防御",
        "level": 4,
        "desc": "停止攻击敌人；阻挡数+1，防御力+75%，每秒恢复最大生命的1%",
        "descRaw": "停止攻击敌人；阻挡数<@ba.vup>+1</>，防御力<@ba.vup>+75%</>，每秒恢复最大生命的<@ba.vup>1%</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 30,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 40,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "def": 0.75,
          "block_cnt": 1,
          "hp_recovery_per_sec_by_max_hp_ratio": 0.01
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_snakek_2",
        "trigger": {
          "rule": "TAKE_DAMAGE",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "防御专精",
          "desc": "防御力+12%"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_snakek",
        "name": "超强棒球套装",
        "type": "PRO-X",
        "level": 0,
        "icon": "uniequip_002_snakek"
      },
      "assets": {
        "avatar": "char_150_snakek",
        "portrait": "char_150_snakek_1",
        "spine": "char_150_snakek",
        "skillIcon": "skchr_snakek_2",
        "subProfIcon": "sub_protector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_def_up[2]",
          "iconId": "skcom_def_up[2]",
          "name": "防御力强化·β型",
          "desc": "防御力+35%",
          "descRaw": "防御力<@ba.vup>+35%</>",
          "spCost": 40,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_snakek_2",
          "iconId": "skchr_snakek_2",
          "name": "壳状防御",
          "desc": "停止攻击敌人；阻挡数+1，防御力+75%，每秒恢复最大生命的1%",
          "descRaw": "停止攻击敌人；阻挡数<@ba.vup>+1</>，防御力<@ba.vup>+75%</>，每秒恢复最大生命的<@ba.vup>1%</>",
          "spCost": 40,
          "initSp": 0,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 21
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.def": 503
        },
        "3": {
          "stats.respawnTime": 66
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_150_snakek",
      "avatar": "char_150_snakek",
      "professionShort": "重",
      "subProfession": "铁卫",
      "skillIdx": 1,
      "bench": false
    },
    "char_126_shotst": {
      "chessId": "chess_char_3_17_a",
      "baseId": "chess_char_3_17_a",
      "goldenId": "chess_char_3_17_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 55,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_126_shotst",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_shotst",
        "potRank": 0
      },
      "shopSortId": 17,
      "charId": "char_126_shotst",
      "name": "流星",
      "appellation": "Meteor",
      "rarity": 4,
      "profession": "狙击",
      "subProfessionId": "fastshot",
      "subProfessionName": "速射手",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_137_a",
        "garrison_01_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_17_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1123,
        "atk": 404,
        "def": 139,
        "res": 0,
        "cost": 10,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": "fly",
      "skill": {
        "skillId": "skchr_shotst_2",
        "iconId": "skchr_shotst_2",
        "name": "碎甲击·扩散",
        "level": 4,
        "desc": "立即对攻击范围内至多5个敌人造成相当于攻击力155%的物理伤害，5秒内使命中目标的防御力-30%",
        "descRaw": "立即对攻击范围内至多<@ba.vup>5</>个敌人造成相当于攻击力<@ba.vup>155%</>的物理伤害，<@ba.vup>5</>秒内使命中目标的防御力<@ba.vup>-30%</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WHEN_ATTACK",
        "spCost": 19,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 1.55,
          "def": -0.3,
          "duration": 5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_shotst_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "空射专精",
          "desc": "攻击空中目标时，攻击力提升至140%（+5%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_shotst",
        "name": "猎刀",
        "type": "MAR-X",
        "level": 0,
        "icon": "uniequip_002_shotst"
      },
      "assets": {
        "avatar": "char_126_shotst",
        "portrait": "char_126_shotst_1",
        "spine": "char_126_shotst",
        "skillIcon": "skchr_shotst_2",
        "subProfIcon": "sub_fastshot_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_shotst_1",
          "iconId": "skchr_shotst_1",
          "name": "碎甲击",
          "desc": "下一次攻击造成相当于攻击力135%的物理伤害，5秒内使命中目标的防御力-25%",
          "descRaw": "下一次攻击造成相当于攻击力<@ba.vup>135%</>的物理伤害，5秒内使命中目标的防御力<@ba.vup>-25%</>",
          "spCost": 5,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_shotst_2",
          "iconId": "skchr_shotst_2",
          "name": "碎甲击·扩散",
          "desc": "立即对攻击范围内至多5个敌人造成相当于攻击力155%的物理伤害，5秒内使命中目标的防御力-30%",
          "descRaw": "立即对攻击范围内至多<@ba.vup>5</>个敌人造成相当于攻击力<@ba.vup>155%</>的物理伤害，<@ba.vup>5</>秒内使命中目标的防御力<@ba.vup>-30%</>",
          "spCost": 19,
          "initSp": 0,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 12
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 381
        },
        "4": {
          "stats.cost": 11
        }
      },
      "id": "char_126_shotst",
      "avatar": "char_126_shotst",
      "professionShort": "狙",
      "subProfession": "速射手",
      "skillIdx": 1,
      "bench": false
    },
    "char_4026_vulpis": {
      "chessId": "chess_char_3_18_a",
      "baseId": "chess_char_3_18_a",
      "goldenId": "chess_char_3_18_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 56,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_609_acguad",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 18,
      "charId": "char_4026_vulpis",
      "name": "忍冬",
      "appellation": "Vulpisfoglia",
      "rarity": 6,
      "profession": "先锋",
      "subProfessionId": "pioneer",
      "subProfessionName": "尖兵",
      "nationId": "siracusa",
      "garrisonIds": [
        "garrison_71_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_18_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1481,
        "atk": 485,
        "def": 304,
        "res": 0,
        "cost": 12,
        "blockCnt": 2,
        "bat": 1.05,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_vulpis_3",
        "iconId": "skchr_vulpis_3",
        "name": "隐狐之艺",
        "level": 4,
        "desc": "技能开启时立即获得7点部署费用，攻击距离+1，攻击力+65%，攻击速度从+160逐渐衰减至+0，同时攻击阻挡的所有敌人，每次攻击晕眩敌人0.2秒\n若技能期间击倒敌人，则技能结束时进入迷彩状态，直至下一次开启技能",
        "descRaw": "技能开启时立即获得<@ba.vup>7</>点部署费用，攻击距离<@ba.vup>+1</>，攻击力<@ba.vup>+65%</>，攻击速度从<@ba.vup>+160</>逐渐衰减至+0，同时攻击阻挡的所有敌人，每次攻击<$ba.stun>晕眩</>敌人<@ba.vup>0.2</>秒\n<@ba.rem>若技能期间击倒敌人，则技能结束时进入迷彩状态，直至下一次开启技能</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 10,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 21,
        "initSp": 6,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "cost": 7,
          "atk": 0.65,
          "attack_speed": 160,
          "attack@stun": 0.2
        },
        "bbStr": {},
        "rangeId": "2-2",
        "rangeGrid": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ]
        ],
        "prefabId": "skchr_vulpis_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "追凶",
          "desc": "对每个敌人造成首次伤害后，10秒内忍冬对该敌人造成伤害时额外造成攻击力30%的法术伤害"
        },
        {
          "name": "蓄势",
          "desc": "在场时，部署费用的自然回复速度+10%，若4秒内自身未受到伤害，则每秒恢复5%（+1%）的最大生命值"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_vulpis",
        "name": "杀手也有假期",
        "type": "SOL-X",
        "level": 0,
        "icon": "uniequip_002_vulpis"
      },
      "assets": {
        "avatar": "char_4026_vulpis",
        "portrait": "char_4026_vulpis_1",
        "spine": "char_4026_vulpis",
        "skillIcon": "skchr_vulpis_3",
        "subProfIcon": "sub_pioneer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_vulpis_1",
          "iconId": "skchr_vulpis_1",
          "name": "小施惩戒",
          "desc": "下次攻击额外造成攻击力215%的法术伤害，并获得1点部署费用\n可充能3次",
          "descRaw": "下次攻击额外造成攻击力<@ba.vup>215%</>的法术伤害，并获得<@ba.vup>1</>点部署费用\n<@ba.rem>可充能3次</>",
          "spCost": 6,
          "initSp": 4,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_vulpis_2",
          "iconId": "skchr_vulpis_2",
          "name": "坠刃拷问",
          "desc": "立即获得5点部署费用，对周围最多6名敌人造成相当于攻击力200%的法术伤害，并令击中目标停顿4.5秒；若敌人已经处于停顿状态，则额外使敌人晕眩4秒\n可充能2次",
          "descRaw": "立即获得<@ba.vup>5</>点部署费用，对周围最多6名敌人造成相当于攻击力<@ba.vup>200%</>的法术伤害，并令击中目标<$ba.sluggish>停顿</><@ba.vup>4.5</>秒；若敌人已经处于<$ba.sluggish>停顿</>状态，则额外使敌人<$ba.stun>晕眩</><@ba.vup>4</>秒\n<@ba.rem>可充能2次</>",
          "spCost": 22,
          "initSp": 16,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_vulpis_3",
          "iconId": "skchr_vulpis_3",
          "name": "隐狐之艺",
          "desc": "技能开启时立即获得7点部署费用，攻击距离+1，攻击力+65%，攻击速度从+160逐渐衰减至+0，同时攻击阻挡的所有敌人，每次攻击晕眩敌人0.2秒\n若技能期间击倒敌人，则技能结束时进入迷彩状态，直至下一次开启技能",
          "descRaw": "技能开启时立即获得<@ba.vup>7</>点部署费用，攻击距离<@ba.vup>+1</>，攻击力<@ba.vup>+65%</>，攻击速度从<@ba.vup>+160</>逐渐衰减至+0，同时攻击阻挡的所有敌人，每次攻击<$ba.stun>晕眩</>敌人<@ba.vup>0.2</>秒\n<@ba.rem>若技能期间击倒敌人，则技能结束时进入迷彩状态，直至下一次开启技能</>",
          "spCost": 21,
          "initSp": 6,
          "duration": 10,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 14
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 460
        },
        "4": {
          "stats.cost": 13
        }
      },
      "id": "char_4026_vulpis",
      "avatar": "char_4026_vulpis",
      "professionShort": "先",
      "subProfession": "尖兵",
      "skillIdx": 2,
      "bench": false
    },
    "char_427_vigil": {
      "chessId": "chess_char_3_19_a",
      "baseId": "chess_char_3_19_a",
      "goldenId": "chess_char_3_19_b",
      "isGolden": false,
      "tier": 3,
      "identifier": 57,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_427_vigil",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_vigil",
        "potRank": 0
      },
      "shopSortId": 19,
      "charId": "char_427_vigil",
      "name": "伺夜",
      "appellation": "Vigil",
      "rarity": 6,
      "profession": "先锋",
      "subProfessionId": "tactician",
      "subProfessionName": "战术家",
      "nationId": "siracusa",
      "garrisonIds": [
        "garrison_152_a",
        "garrison_153_a",
        "garrison_01_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_3_19_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1439,
        "atk": 378,
        "def": 130,
        "res": 0,
        "cost": 14,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_vigil_3",
        "iconId": "skchr_vigil_3",
        "name": "领袖的尊严",
        "level": 4,
        "desc": "技能持续时间内逐渐获得10点部署费用，攻击变为三连击；狼群与伺夜攻击被狼群阻挡的单位造成伤害时，额外造成相当于伺夜攻击力20%的法术伤害",
        "descRaw": "技能持续时间内逐渐获得<@ba.vup>10</>点部署费用，攻击变为<@ba.vup>三连击</>；狼群与伺夜攻击被狼群阻挡的单位造成伤害时，额外造成相当于伺夜攻击力<@ba.vup>20%</>的法术伤害",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 42,
        "initSp": 6,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@vigil_s_3.atk_scale": 0.2,
          "value": 10,
          "interval": 1.5,
          "cost": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_vigil_3",
        "trigger": {
          "rule": "SP_FULL",
          "rawRule": "ALWAYS",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "狼群领袖",
          "desc": "可以在战术点召唤由初始两只“狼影”构成的狼群协助作战，“狼影”的数量每25秒增加一只（至多3只；每只“狼影”使狼群阻挡数+1且攻击额外造成一次伤害）"
        },
        {
          "name": "狼群天性",
          "desc": "敌人被狼群阻挡时，伺夜和狼群对其的攻击无视其200（+25）防御力"
        }
      ],
      "tokens": [
        "token_10028_vigil_wolf"
      ],
      "module": {
        "id": "uniequip_002_vigil",
        "name": "叙拉古式入门礼",
        "type": "TAC-X",
        "level": 0,
        "icon": "uniequip_002_vigil"
      },
      "assets": {
        "avatar": "char_427_vigil",
        "portrait": "char_427_vigil_1",
        "spine": "char_427_vigil",
        "skillIcon": "skchr_vigil_3",
        "subProfIcon": "sub_tactician_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_vigil_1",
          "iconId": "skchr_vigil_1",
          "name": "领袖的呼唤",
          "desc": "立即获得7点部署费用，并增加一只“狼影”",
          "descRaw": "立即获得<@ba.vup>7</>点部署费用，并增加一只“狼影”",
          "spCost": 27,
          "initSp": 1,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_vigil_2",
          "iconId": "skchr_vigil_2",
          "name": "领袖的馈赠",
          "desc": "立即获得2点部署费用，并使狼群下次攻击的攻击力提升至155%且狼群恢复10%生命值；若狼群击倒敌人则额外获得1点部署费用",
          "descRaw": "立即获得<@ba.vup>2</>点部署费用，并使狼群下次攻击的攻击力提升至<@ba.vup>155%</>且狼群恢复<@ba.vup>10%</>生命值；若狼群击倒敌人则额外获得<@ba.vup>1</>点部署费用",
          "spCost": 7,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_vigil_3",
          "iconId": "skchr_vigil_3",
          "name": "领袖的尊严",
          "desc": "技能持续时间内逐渐获得10点部署费用，攻击变为三连击；狼群与伺夜攻击被狼群阻挡的单位造成伤害时，额外造成相当于伺夜攻击力20%的法术伤害",
          "descRaw": "技能持续时间内逐渐获得<@ba.vup>10</>点部署费用，攻击变为<@ba.vup>三连击</>；狼群与伺夜攻击被狼群阻挡的单位造成伤害时，额外造成相当于伺夜攻击力<@ba.vup>20%</>的法术伤害",
          "spCost": 42,
          "initSp": 6,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 17
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.cost": 16
        },
        "4": {
          "stats.cost": 15
        }
      },
      "id": "char_427_vigil",
      "avatar": "char_427_vigil",
      "professionShort": "先",
      "subProfession": "战术家",
      "skillIdx": 2,
      "bench": false
    },
    "char_4194_rmixer": {
      "chessId": "chess_char_4_01_a",
      "baseId": "chess_char_4_01_a",
      "goldenId": "chess_char_4_01_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 60,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4194_rmixer",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_rmixer",
        "potRank": 0
      },
      "shopSortId": 1,
      "charId": "char_4194_rmixer",
      "name": "信仰搅拌机",
      "appellation": "Sankta Miksaparato",
      "rarity": 6,
      "profession": "重装",
      "subProfessionId": "shotprotector",
      "subProfessionName": "哨戒铁卫",
      "nationId": "laterano",
      "garrisonIds": [
        "garrison_14_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_01_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2638,
        "atk": 418,
        "def": 513,
        "res": 0,
        "cost": 22,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-2",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_rmixer_3",
        "iconId": "skchr_rmixer_3",
        "name": "退休前布道",
        "level": 4,
        "desc": "技能开启时为所有其他【拉特兰】干员补弹2发；攻击范围扩大，生命上限+35%，攻击力+140%，防御力+35%，停止主动攻击敌人，受到攻击时立即向攻击范围内最多3个敌人进行1次反击，反击最小间隔为实际攻击间隔的60%\n攻击装有30发弹药，打完后结束（可随时停止技能）",
        "descRaw": "技能开启时为所有其他【拉特兰】干员<$ba.addbullet>补弹</><@ba.vup>2</>发；攻击范围<@ba.vup>扩大</>，生命上限<@ba.vup>+35%</>，攻击力<@ba.vup>+140%</>，防御力<@ba.vup>+35%</>，停止主动攻击敌人，受到攻击时立即向攻击范围内最多<@ba.vup>3</>个敌人进行1次反击，反击最小间隔为实际攻击间隔的<@ba.vup>60%</>\n<@ba.rem>攻击装有30发弹药，打完后结束（可随时停止技能）</>",
        "skillType": "MANUAL",
        "durationType": "AMMO",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 43,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 1.4,
          "def": 0.35,
          "max_hp": 0.35,
          "ammo": 2,
          "attack@max_target": 3,
          "attack@trigger_time": 30,
          "base_attack_time": 0.6
        },
        "bbStr": {},
        "rangeId": "3-13",
        "rangeGrid": [
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ]
        ],
        "prefabId": "skchr_rmixer_3",
        "trigger": {
          "rule": "TAKE_DAMAGE",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "扫射迎宾仪礼",
          "desc": "每次造成伤害使自身10秒内防御力+30，攻击速度+3，最多可叠加3层"
        },
        {
          "name": "架盾送客仪礼",
          "desc": "若8秒内未主动攻击，获得相当于生命上限18%（+3%）的屏障，失去屏障后重新计时"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_rmixer",
        "name": "毛刷套装",
        "type": "SPT-X",
        "level": 0,
        "icon": "uniequip_002_rmixer"
      },
      "assets": {
        "avatar": "char_4194_rmixer",
        "portrait": "char_4194_rmixer_1",
        "spine": "char_4194_rmixer",
        "skillIcon": "skchr_rmixer_3",
        "subProfIcon": "sub_shotprotector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_rmixer_1",
          "iconId": "skchr_rmixer_1",
          "name": "铳骑主考官",
          "desc": "下次攻击变为三连击，每次造成相当于130%攻击力的物理伤害，并为自身周围另一名开启弹药类技能的【拉特兰】干员补弹1发",
          "descRaw": "下次攻击变为<@ba.vup>三连击</>，每次造成相当于<@ba.vup>130%</>攻击力的物理伤害，并为自身周围另一名开启弹药类技能的【拉特兰】干员<$ba.addbullet>补弹</><@ba.vup>1</>发",
          "spCost": 6,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_rmixer_2",
          "iconId": "skchr_rmixer_2",
          "name": "八臂电锯侠",
          "desc": "攻击力+80%，防御力+70%，技能期间若受到致命伤害，立即消耗30发弹药抵挡这次伤害\n攻击装有42发弹药，打完后结束（可随时停止技能）",
          "descRaw": "攻击力<@ba.vup>+80%</>，防御力<@ba.vup>+70%</>，技能期间若受到致命伤害，立即消耗<@ba.vup>30</>发弹药抵挡这次伤害\n<@ba.rem>攻击装有42发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 60,
          "initSp": 30,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_rmixer_3",
          "iconId": "skchr_rmixer_3",
          "name": "退休前布道",
          "desc": "技能开启时为所有其他【拉特兰】干员补弹2发；攻击范围扩大，生命上限+35%，攻击力+140%，防御力+35%，停止主动攻击敌人，受到攻击时立即向攻击范围内最多3个敌人进行1次反击，反击最小间隔为实际攻击间隔的60%\n攻击装有30发弹药，打完后结束（可随时停止技能）",
          "descRaw": "技能开启时为所有其他【拉特兰】干员<$ba.addbullet>补弹</><@ba.vup>2</>发；攻击范围<@ba.vup>扩大</>，生命上限<@ba.vup>+35%</>，攻击力<@ba.vup>+140%</>，防御力<@ba.vup>+35%</>，停止主动攻击敌人，受到攻击时立即向攻击范围内最多<@ba.vup>3</>个敌人进行1次反击，反击最小间隔为实际攻击间隔的<@ba.vup>60%</>\n<@ba.rem>攻击装有30发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 43,
          "initSp": 20,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 25
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 24
        },
        "4": {
          "stats.cost": 23
        }
      },
      "id": "char_4194_rmixer",
      "avatar": "char_4194_rmixer",
      "professionShort": "重",
      "subProfession": "哨戒铁卫",
      "skillIdx": 2,
      "bench": false
    },
    "char_213_mostma": {
      "chessId": "chess_char_4_02_a",
      "baseId": "chess_char_4_02_a",
      "goldenId": "chess_char_4_02_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 61,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_611_acnipe",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 2,
      "charId": "char_213_mostma",
      "name": "莫斯提马",
      "appellation": "Mostima",
      "rarity": 6,
      "profession": "术师",
      "subProfessionId": "splashcaster",
      "subProfessionName": "扩散术师",
      "nationId": "laterano",
      "garrisonIds": [
        "garrison_22_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_02_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1428,
        "atk": 734,
        "def": 110,
        "res": 20,
        "cost": 32,
        "blockCnt": 1,
        "bat": 2.9,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-6",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_mostma_3",
        "iconId": "skchr_mostma_3",
        "name": "序时之匙",
        "level": 4,
        "desc": "攻击范围扩大，攻击变为向外扩散的波纹，攻击力+90%，第二天赋的效果提升至3倍，小力度地击退攻击目标",
        "descRaw": "攻击范围<@ba.vup>扩大</>，攻击变为向外扩散的波纹，攻击力<@ba.vup>+90%</>，第二天赋的效果提升至<@ba.vup>3</>倍，<@ba.vup>小力度地</>击退攻击目标",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 22,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 110,
        "initSp": 56,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.9,
          "attack@force": 0,
          "talent_scale": 3,
          "base_attack_time": 0
        },
        "bbStr": {},
        "rangeId": "3-15",
        "rangeGrid": [
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            2,
            2
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -1,
            3
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ],
          [
            -2,
            2
          ]
        ],
        "prefabId": "skchr_mostma_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              2,
              2
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -1,
              3
            ],
            [
              -2,
              0
            ],
            [
              -2,
              1
            ],
            [
              -2,
              2
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "技力光环·术师",
          "desc": "在场时所有【术师】干员的技力自然回复速度+0.4/秒（同类效果取最高）"
        },
        {
          "name": "主观缓时",
          "desc": "攻击范围内的敌人移动速度-18%（+3%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_mostma",
        "name": "锁与匙之家",
        "type": "SPC-Y",
        "level": 0,
        "icon": "uniequip_002_mostma"
      },
      "assets": {
        "avatar": "char_213_mostma",
        "portrait": "char_213_mostma_1",
        "spine": "char_213_mostma",
        "skillIcon": "skchr_mostma_3",
        "subProfIcon": "sub_splashcaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_atk_up[3]",
          "iconId": "skcom_atk_up[3]",
          "name": "攻击力强化·γ型",
          "desc": "攻击力+45%",
          "descRaw": "攻击力<@ba.vup>+45%</>",
          "spCost": 37,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_mostma_2",
          "iconId": "skchr_mostma_2",
          "name": "荒时之锁",
          "desc": "攻击范围内的敌人全部晕眩，且每秒受到攻击力100%的法术伤害",
          "descRaw": "攻击范围内的敌人全部<$ba.stun>晕眩</>，且每秒受到攻击力<@ba.vup>100%</>的法术伤害",
          "spCost": 61,
          "initSp": 11,
          "duration": 5,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_mostma_3",
          "iconId": "skchr_mostma_3",
          "name": "序时之匙",
          "desc": "攻击范围扩大，攻击变为向外扩散的波纹，攻击力+90%，第二天赋的效果提升至3倍，小力度地击退攻击目标",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击变为向外扩散的波纹，攻击力<@ba.vup>+90%</>，第二天赋的效果提升至<@ba.vup>3</>倍，<@ba.vup>小力度地</>击退攻击目标",
          "spCost": 110,
          "initSp": 56,
          "duration": 22,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 34
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 700
        },
        "4": {
          "stats.cost": 33
        }
      },
      "id": "char_213_mostma",
      "avatar": "char_213_mostma",
      "professionShort": "术",
      "subProfession": "扩散术师",
      "skillIdx": 2,
      "bench": false
    },
    "char_4087_ines": {
      "chessId": "chess_char_4_04_a",
      "baseId": "chess_char_4_04_a",
      "goldenId": "chess_char_4_04_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 63,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_607_cspec",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 4,
      "charId": "char_4087_ines",
      "name": "伊内丝",
      "appellation": "Ines",
      "rarity": 6,
      "profession": "先锋",
      "subProfessionId": "agent",
      "subProfessionName": "情报官",
      "nationId": null,
      "garrisonIds": [
        "garrison_104_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_04_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1760,
        "atk": 482,
        "def": 241,
        "res": 0,
        "cost": 9,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 108,
        "respawnTime": 31,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "2-2",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_ines_2",
        "iconId": "skchr_ines_2",
        "name": "暗夜无明",
        "level": 4,
        "desc": "攻击范围扩大，攻击力+60%，自身获得隐匿，每次攻击获得1点部署费用并偷取目标5点攻击速度（最多50点，持续至技能结束或伊内丝离场）",
        "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+60%</>，自身获得<$ba.invisible>隐匿</>，每次攻击获得<@ba.vup>1</>点部署费用并<$ba.steal>偷取</>目标<@ba.vup>5</>点攻击速度（最多50点，持续至技能结束或伊内丝离场）",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 12,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 27,
        "initSp": 10,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "cost": 1,
          "atk": 0.6,
          "attack@steal_atk_speed": 5,
          "attack@steal_atk_speed_max": 50
        },
        "bbStr": {},
        "rangeId": "3-13",
        "rangeGrid": [
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ]
        ],
        "prefabId": "skchr_ines_2",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "影织",
          "desc": "对每个敌人首次造成伤害后，使目标束缚5秒并偷取其100（+10）点攻击力（持续至目标被击倒或伊内丝离场）"
        },
        {
          "name": "影哨",
          "desc": "攻击范围内敌人的隐匿效果失效且移动速度-30%，撤退后留下一个影哨使该效果持续生效（最多1个）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_ines",
        "name": "角部“护理”套组",
        "type": "AGE-Y",
        "level": 0,
        "icon": "uniequip_002_ines"
      },
      "assets": {
        "avatar": "char_4087_ines",
        "portrait": "char_4087_ines_1",
        "spine": "char_4087_ines",
        "skillIcon": "skchr_ines_2",
        "subProfIcon": "sub_agent_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_ines_1",
          "iconId": "skchr_ines_1",
          "name": "淬影突袭",
          "desc": "下次攻击使目标3秒内每秒受到相当于伊内丝攻击力40%的法术伤害（不叠加），并获得2点部署费用",
          "descRaw": "下次攻击使目标<@ba.vup>3</>秒内每秒受到相当于伊内丝攻击力<@ba.vup>40%</>的法术伤害（不叠加），并获得<@ba.vup>2</>点部署费用",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_ines_2",
          "iconId": "skchr_ines_2",
          "name": "暗夜无明",
          "desc": "攻击范围扩大，攻击力+60%，自身获得隐匿，每次攻击获得1点部署费用并偷取目标5点攻击速度（最多50点，持续至技能结束或伊内丝离场）",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+60%</>，自身获得<$ba.invisible>隐匿</>，每次攻击获得<@ba.vup>1</>点部署费用并<$ba.steal>偷取</>目标<@ba.vup>5</>点攻击速度（最多50点，持续至技能结束或伊内丝离场）",
          "spCost": 27,
          "initSp": 10,
          "duration": 12,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_ines_3",
          "iconId": "skchr_ines_3",
          "name": "独影归途",
          "desc": "首次部署时不消耗部署费用，放置一个影哨后离场并立刻刷新再部署时间\n部署后攻击力+90%，立刻收回影哨对穿过的最多4名敌人造成相当于攻击力110%的物理伤害，技能期间每对一个敌人造成伤害就获得1点部署费用",
          "descRaw": "<@ba.rem>首次部署时不消耗部署费用，放置一个影哨后离场并立刻刷新再部署时间</>\n部署后攻击力<@ba.vup>+90%</>，立刻收回影哨对穿过的最多<@ba.vup>4</>名敌人造成相当于攻击力<@ba.vup>110%</>的物理伤害，技能期间每对一个敌人造成伤害就获得<@ba.vup>1</>点部署费用",
          "spCost": 0,
          "initSp": 0,
          "duration": 11,
          "skillType": "PASSIVE",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 11
        },
        "1": {
          "stats.respawnTime": 35
        },
        "2": {
          "stats.aspd": 100
        },
        "4": {
          "stats.cost": 10
        }
      },
      "id": "char_4087_ines",
      "avatar": "char_4087_ines",
      "professionShort": "先",
      "subProfession": "情报官",
      "skillIdx": 1,
      "bench": false
    },
    "char_1021_kroos2": {
      "chessId": "chess_char_4_06_a",
      "baseId": "chess_char_4_06_a",
      "goldenId": "chess_char_4_06_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 65,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_1021_kroos2",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_kroos2",
        "potRank": 0
      },
      "shopSortId": 6,
      "charId": "char_1021_kroos2",
      "name": "寒芒克洛丝",
      "appellation": "Kroos the Keen Glint",
      "rarity": 5,
      "profession": "狙击",
      "subProfessionId": "fastshot",
      "subProfessionName": "速射手",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_73_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_06_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1246,
        "atk": 411,
        "def": 148,
        "res": 0,
        "cost": 12,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": "fly",
      "skill": {
        "skillId": "skchr_kroos2_2",
        "iconId": "skchr_kroos2_2",
        "name": "封喉",
        "level": 4,
        "desc": "攻击间隔少量缩短，攻击变为2连射，击中目标40次后技能剩余时间内攻击变为4连射",
        "descRaw": "攻击间隔<@ba.vup>少量缩短</>，攻击变为<@ba.vup>2</>连射，击中目标<@ba.vup>40</>次后技能剩余时间内攻击变为<@ba.vup>4</>连射",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 24,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 45,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "base_attack_time": -0.22,
          "attack@max_stack_count": 40
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_kroos2_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "中的",
          "desc": "攻击时，20%几率当次攻击的攻击力提升至160%（+10%），并使敌人晕眩0.2秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_kroos2",
        "name": "真心的话和想冒的险",
        "type": "MAR-X",
        "level": 0,
        "icon": "uniequip_002_kroos2"
      },
      "assets": {
        "avatar": "char_1021_kroos2",
        "portrait": "char_1021_kroos2_1",
        "spine": "char_1021_kroos2",
        "skillIcon": "skchr_kroos2_2",
        "subProfIcon": "sub_fastshot_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_kroos2_1",
          "iconId": "skchr_kroos2_1",
          "name": "无痕",
          "desc": "攻击力+20%，攻击变为2连射，并获得迷彩",
          "descRaw": "攻击力<@ba.vup>+20%</>，攻击变为<@ba.vup>2</>连射，并获得<$ba.camou>迷彩</>",
          "spCost": 17,
          "initSp": 5,
          "duration": 12,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_kroos2_2",
          "iconId": "skchr_kroos2_2",
          "name": "封喉",
          "desc": "攻击间隔少量缩短，攻击变为2连射，击中目标40次后技能剩余时间内攻击变为4连射",
          "descRaw": "攻击间隔<@ba.vup>少量缩短</>，攻击变为<@ba.vup>2</>连射，击中目标<@ba.vup>40</>次后技能剩余时间内攻击变为<@ba.vup>4</>连射",
          "spCost": 45,
          "initSp": 15,
          "duration": 24,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 15
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 14
        },
        "4": {
          "stats.cost": 13
        }
      },
      "id": "char_1021_kroos2",
      "avatar": "char_1021_kroos2",
      "professionShort": "狙",
      "subProfession": "速射手",
      "skillIdx": 1,
      "bench": false
    },
    "char_222_bpipe": {
      "chessId": "chess_char_4_07_a",
      "baseId": "chess_char_4_07_a",
      "goldenId": "chess_char_4_07_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 66,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_601_cguard",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 7,
      "charId": "char_222_bpipe",
      "name": "风笛",
      "appellation": "Bagpipe",
      "rarity": 6,
      "profession": "先锋",
      "subProfessionId": "charger",
      "subProfessionName": "冲锋手",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_50_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_07_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1738,
        "atk": 517,
        "def": 313,
        "res": 0,
        "cost": 11,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_bpipe_2",
        "iconId": "skchr_bpipe_2",
        "name": "高效冲击",
        "level": 4,
        "desc": "下一次的攻击力提升至145%，且额外攻击一次\n可充能1次",
        "descRaw": "下一次的攻击力提升至<@ba.vup>145%</>，且额外攻击一次\n<@ba.rem>可充能1次</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 6,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 1.45,
          "cnt": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_bpipe_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "精密填弹",
          "desc": "每次攻击有28%（+3%）的概率攻击力提升至130%，且额外攻击一个目标"
        },
        {
          "name": "军事传统",
          "desc": "编入队伍时所有【先锋】干员的初始技力+8（+2）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_bpipe",
        "name": "破城矛弹夹",
        "type": "CHG-X",
        "level": 0,
        "icon": "uniequip_002_bpipe"
      },
      "assets": {
        "avatar": "char_222_bpipe",
        "portrait": "char_222_bpipe_1",
        "spine": "char_222_bpipe",
        "skillIcon": "skchr_bpipe_2",
        "subProfIcon": "sub_charger_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_quickattack[3]",
          "iconId": "skcom_quickattack[3]",
          "name": "迅捷打击·γ型",
          "desc": "攻击力+27%，攻击速度+25",
          "descRaw": "攻击力<@ba.vup>+27%</>，攻击速度<@ba.vup>+25</>",
          "spCost": 42,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_bpipe_2",
          "iconId": "skchr_bpipe_2",
          "name": "高效冲击",
          "desc": "下一次的攻击力提升至145%，且额外攻击一次\n可充能1次",
          "descRaw": "下一次的攻击力提升至<@ba.vup>145%</>，且额外攻击一次\n<@ba.rem>可充能1次</>",
          "spCost": 6,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_bpipe_3",
          "iconId": "skchr_bpipe_3",
          "name": "闭膛连发",
          "desc": "攻击间隔增大，阻挡数+1，攻击力和防御力+60%，攻击变为三连击",
          "descRaw": "攻击间隔<@ba.vdown>增大</>，阻挡数<@ba.vup>+1</>，攻击力和防御力<@ba.vup>+60%</>，攻击变为<@ba.vup>三连击</>",
          "spCost": 40,
          "initSp": 12,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 13
        },
        "2": {
          "stats.atk": 492
        },
        "4": {
          "stats.cost": 12
        }
      },
      "id": "char_222_bpipe",
      "avatar": "char_222_bpipe",
      "professionShort": "先",
      "subProfession": "冲锋手",
      "skillIdx": 1,
      "bench": false
    },
    "char_437_mizuki": {
      "chessId": "chess_char_4_09_a",
      "baseId": "chess_char_4_09_a",
      "goldenId": "chess_char_4_09_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 68,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_617_sharp2",
        "tmplId": null,
        "skillIndex": 0,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 9,
      "charId": "char_437_mizuki",
      "name": "水月",
      "appellation": "Mizuki",
      "rarity": 6,
      "profession": "特种",
      "subProfessionId": "stalker",
      "subProfessionName": "伏击客",
      "nationId": "higashi",
      "garrisonIds": [
        "garrison_07_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_09_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1336,
        "atk": 724,
        "def": 302,
        "res": 30,
        "cost": 19,
        "blockCnt": 0,
        "bat": 3.5,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": -1,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-1",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_mizuki_2",
        "iconId": "skchr_mizuki_2",
        "name": "囚徒困境",
        "level": 4,
        "desc": "攻击间隔小幅度缩短，攻击力+15%，第一天赋额外攻击1个目标并附加0.8秒束缚",
        "descRaw": "攻击间隔<@ba.vup>小幅度缩短</>，攻击力<@ba.vup>+15%</>，第一天赋额外攻击<@ba.vup>1</>个目标并附加<@ba.vup>0.8</>秒<$ba.root>束缚</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 17,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 22,
        "initSp": 5,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "base_attack_time": -0.7,
          "atk": 0.15,
          "attack@unmovable": 0.8,
          "attack@max_target": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_mizuki_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "创伤性癔症",
          "desc": "攻击时对攻击目标中生命值最少的敌人额外造成相当于攻击力50%的法术伤害"
        },
        {
          "name": "反移情",
          "desc": "攻击范围内存在生命值低于一半的敌人时，攻击力+12%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_mizuki",
        "name": "使者之约",
        "type": "AMB-X",
        "level": 0,
        "icon": "uniequip_002_mizuki"
      },
      "assets": {
        "avatar": "char_437_mizuki",
        "portrait": "char_437_mizuki_1",
        "spine": "char_437_mizuki",
        "skillIcon": "skchr_mizuki_2",
        "subProfIcon": "sub_stalker_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_mizuki_1",
          "iconId": "skchr_mizuki_1",
          "name": "唤醒",
          "desc": "下次攻击造成相当于攻击力200%的物理伤害，且第一天赋伤害倍率提升至2.0倍\n可充能2次",
          "descRaw": "下次攻击造成相当于攻击力<@ba.vup>200%</>的物理伤害，且第一天赋伤害倍率提升至<@ba.vup>2.0</>倍\n<@ba.rem>可充能2次</>",
          "spCost": 9,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_mizuki_2",
          "iconId": "skchr_mizuki_2",
          "name": "囚徒困境",
          "desc": "攻击间隔小幅度缩短，攻击力+15%，第一天赋额外攻击1个目标并附加0.8秒束缚",
          "descRaw": "攻击间隔<@ba.vup>小幅度缩短</>，攻击力<@ba.vup>+15%</>，第一天赋额外攻击<@ba.vup>1</>个目标并附加<@ba.vup>0.8</>秒<$ba.root>束缚</>",
          "spCost": 22,
          "initSp": 5,
          "duration": 17,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_mizuki_3",
          "iconId": "skchr_mizuki_3",
          "name": "镜花水月",
          "desc": "攻击范围扩大，攻击力+90%，第一天赋额外攻击2个目标并附加0.7秒晕眩；每次攻击命中目标少于3名敌人时，自身流失最大生命值的15%。",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+90%</>，第一天赋额外攻击<@ba.vup>2</>个目标并附加<@ba.vup>0.7</>秒<$ba.stun>晕眩</>；每次攻击命中目标少于3名敌人时，自身流失最大生命值的<@ba.vup>15%</>。",
          "spCost": 75,
          "initSp": 25,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 21
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 692
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_437_mizuki",
      "avatar": "char_437_mizuki",
      "professionShort": "特",
      "subProfession": "伏击客",
      "skillIdx": 1,
      "bench": false
    },
    "char_446_aroma": {
      "chessId": "chess_char_4_10_a",
      "baseId": "chess_char_4_10_a",
      "goldenId": "chess_char_4_10_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 69,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_446_aroma",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_aroma",
        "potRank": 0
      },
      "shopSortId": 10,
      "charId": "char_446_aroma",
      "name": "阿罗玛",
      "appellation": "Aroma",
      "rarity": 5,
      "profession": "术师",
      "subProfessionId": "blastcaster",
      "subProfessionName": "轰击术师",
      "nationId": "siracusa",
      "garrisonIds": [
        "garrison_122_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_10_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1288,
        "atk": 671,
        "def": 103,
        "res": 20,
        "cost": 31,
        "blockCnt": 1,
        "bat": 2.9,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "5-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_aroma_2",
        "iconId": "skchr_aroma_2",
        "name": "小心地滑",
        "level": 4,
        "desc": "攻击力+65%，攻击范围内浮空状态的敌人结束浮空落地时，对其造成攻击力65%的法术伤害",
        "descRaw": "攻击力<@ba.vup>+65%</>，攻击范围内<$ba.levitate>浮空</>状态的敌人结束浮空落地时，对其造成攻击力<@ba.vup>65%</>的法术伤害",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 23,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 55,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.65,
          "attack@atk_scale_when_fly_finish": 0.65,
          "attack@duration": 15
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_aroma_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "起泡性能测试",
          "desc": "对每个敌人首次进行攻击时攻击力提升至115%（+5%），并使目标浮空2.5秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_aroma",
        "name": "柠檬味的童年",
        "type": "BLA-X",
        "level": 0,
        "icon": "uniequip_002_aroma"
      },
      "assets": {
        "avatar": "char_446_aroma",
        "portrait": "char_446_aroma_1",
        "spine": "char_446_aroma",
        "skillIcon": "skchr_aroma_2",
        "subProfIcon": "sub_blastcaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_aroma_1",
          "iconId": "skchr_aroma_1",
          "name": "强效清洁",
          "desc": "下次攻击造成相当于攻击力150%的法术伤害，对空中敌人额外造成相当于攻击力55%的法术伤害\n可充能2次",
          "descRaw": "下次攻击造成相当于攻击力<@ba.vup>150%</>的法术伤害，对空中敌人额外造成相当于攻击力<@ba.vup>55%</>的法术伤害\n<@ba.rem>可充能2次</>",
          "spCost": 9,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_aroma_2",
          "iconId": "skchr_aroma_2",
          "name": "小心地滑",
          "desc": "攻击力+65%，攻击范围内浮空状态的敌人结束浮空落地时，对其造成攻击力65%的法术伤害",
          "descRaw": "攻击力<@ba.vup>+65%</>，攻击范围内<$ba.levitate>浮空</>状态的敌人结束浮空落地时，对其造成攻击力<@ba.vup>65%</>的法术伤害",
          "spCost": 55,
          "initSp": 20,
          "duration": 23,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 33
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 638
        },
        "4": {
          "stats.cost": 32
        }
      },
      "id": "char_446_aroma",
      "avatar": "char_446_aroma",
      "professionShort": "术",
      "subProfession": "轰击术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4162_cathy": {
      "chessId": "chess_char_4_11_a",
      "baseId": "chess_char_4_11_a",
      "goldenId": "chess_char_4_11_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 70,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4162_cathy",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_cathy",
        "potRank": 0
      },
      "shopSortId": 11,
      "charId": "char_4162_cathy",
      "name": "凯瑟琳",
      "appellation": "Catherine",
      "rarity": 5,
      "profession": "辅助",
      "subProfessionId": "craftsman",
      "subProfessionName": "工匠",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_127_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_11_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2144,
        "atk": 456,
        "def": 353,
        "res": 0,
        "cost": 17,
        "blockCnt": 2,
        "bat": 1.5,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_cathy_2",
        "iconId": "skchr_cathy_2",
        "name": "战火淬炼",
        "level": 4,
        "desc": "停止攻击，生命上限+40%，防御力+10%，装置效果改为使目标干员每秒获得相当于凯瑟琳生命上限6%的屏障（不会超过天赋上限）",
        "descRaw": "停止攻击，生命上限<@ba.vup>+40%</>，防御力<@ba.vup>+10%</>，装置效果改为使目标干员每秒获得相当于凯瑟琳生命上限<@ba.vup>6%</>的<$ba.barrier>屏障</>（不会超过天赋上限）",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 30,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 35,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "max_hp": 0.4,
          "def": 0.1,
          "overwrite_ratio": 0.06,
          "interval": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_cathy_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "定向支援信号",
          "desc": "携带3个支援装置（最多部署2个），使一名干员获得相当于凯瑟琳生命上限22%（+2%）的屏障（若目标最近5秒内未受攻击，则每秒补充相当于凯瑟琳生命上限6%的屏障，不超过初始上限），装置效果不叠加"
        },
        {
          "name": null,
          "desc": "-"
        },
        {
          "name": null,
          "desc": "-"
        }
      ],
      "tokens": [
        "token_10041_cathy_catsld"
      ],
      "module": {
        "id": "uniequip_002_cathy",
        "name": "闲暇时分",
        "type": "CRA-X",
        "level": 0,
        "icon": "uniequip_002_cathy"
      },
      "assets": {
        "avatar": "char_4162_cathy",
        "portrait": "char_4162_cathy_1",
        "spine": "char_4162_cathy",
        "skillIcon": "skchr_cathy_2",
        "subProfIcon": "sub_craftsman_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_cathy_1",
          "iconId": "skchr_cathy_1",
          "name": "岁月锻打",
          "desc": "自身和拥有装置屏障的其他干员攻击力+8%，防御力+8%",
          "descRaw": "自身和拥有装置<$ba.barrier>屏障</>的其他干员攻击力<@ba.vup>+8%</>，防御力<@ba.vup>+8%</>",
          "spCost": 0,
          "initSp": 0,
          "duration": 0,
          "skillType": "PASSIVE",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_cathy_2",
          "iconId": "skchr_cathy_2",
          "name": "战火淬炼",
          "desc": "停止攻击，生命上限+40%，防御力+10%，装置效果改为使目标干员每秒获得相当于凯瑟琳生命上限6%的屏障（不会超过天赋上限）",
          "descRaw": "停止攻击，生命上限<@ba.vup>+40%</>，防御力<@ba.vup>+10%</>，装置效果改为使目标干员每秒获得相当于凯瑟琳生命上限<@ba.vup>6%</>的<$ba.barrier>屏障</>（不会超过天赋上限）",
          "spCost": 35,
          "initSp": 15,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 20
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 19
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_4162_cathy",
      "avatar": "char_4162_cathy",
      "professionShort": "辅",
      "subProfession": "工匠",
      "skillIdx": 1,
      "bench": false
    },
    "char_474_glady": {
      "chessId": "chess_char_4_12_a",
      "baseId": "chess_char_4_12_a",
      "goldenId": "chess_char_4_12_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 71,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_474_glady",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_glady",
        "potRank": 0
      },
      "shopSortId": 12,
      "charId": "char_474_glady",
      "name": "歌蕾蒂娅",
      "appellation": "Gladiia",
      "rarity": 6,
      "profession": "特种",
      "subProfessionId": "hookmaster",
      "subProfessionName": "钩索师",
      "nationId": "egir",
      "garrisonIds": [
        "garrison_39_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_12_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1754,
        "atk": 640,
        "def": 281,
        "res": 0,
        "cost": 13,
        "blockCnt": 2,
        "bat": 1.8,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-2",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_glady_3",
        "iconId": "skchr_glady_3",
        "name": "缺水的碎漩狂舞",
        "level": 4,
        "desc": "对一个远处目标束缚并制造一个龙卷风使周围敌人移动速度-50%，每1.5秒造成85%攻击力的法术伤害并小力地拖拽至中心。技能结束时把目标地点周围的敌人小力地拖拽至面前",
        "descRaw": "对一个远处目标<$ba.root>束缚</>并制造一个龙卷风使周围敌人移动速度<@ba.vup>-50%</>，每<@ba.vup>1.5</>秒造成<@ba.vup>85%</>攻击力的<@ba.vup>法术伤害</>并<@ba.vup>小力地</>拖拽至中心。技能结束时把目标地点周围的敌人<@ba.vup>小力地</>拖拽至面前",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 8,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 42,
        "initSp": 22,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 0.85,
          "attack@force": 0,
          "force": 0,
          "projectile_delay_time": 9,
          "interval": 1.5,
          "hit_duration": 9,
          "move_speed": -0.5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_glady_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "阿戈尔的波涛",
          "desc": "在场时，所有【深海猎人】干员每秒回复2.5%最大生命值且受到【海怪】敌人的物理与法术伤害降低25%"
        },
        {
          "name": "弱肉强食",
          "desc": "攻击重量小于等于3的敌人时攻击力提升至136%（+6%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_glady",
        "name": "执政官手镜",
        "type": "HOK-X",
        "level": 0,
        "icon": "uniequip_002_glady"
      },
      "assets": {
        "avatar": "char_474_glady",
        "portrait": "char_474_glady_1",
        "spine": "char_474_glady",
        "skillIcon": "skchr_glady_3",
        "subProfIcon": "sub_hookmaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_glady_1",
          "iconId": "skchr_glady_1",
          "name": "缺水的大洋裂断",
          "desc": "下次攻击会将目标中等力度地拖拽至面前，并对其造成相当于攻击力150%的物理伤害\n可充能2次",
          "descRaw": "下次攻击会将目标<@ba.vup>中等力度地</>拖拽至面前，并对其造成相当于攻击力<@ba.vup>150%</>的物理伤害\n<@ba.rem>可充能2次</>",
          "spCost": 6,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_glady_2",
          "iconId": "skchr_glady_2",
          "name": "缺水的掌握怒海",
          "desc": "攻击间隔增大，攻击范围扩大，每次攻击优先对被阻挡的两个目标造成相当于攻击力135%的物理伤害且以中等力度地拖拽至自己面前",
          "descRaw": "攻击间隔<@ba.vdown>增大</>，攻击范围扩大，每次攻击优先对被阻挡的两个目标造成相当于攻击力<@ba.vup>135%</>的物理伤害且以<@ba.vup>中等力度地</>拖拽至自己面前",
          "spCost": 32,
          "initSp": 15,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_glady_3",
          "iconId": "skchr_glady_3",
          "name": "缺水的碎漩狂舞",
          "desc": "对一个远处目标束缚并制造一个龙卷风使周围敌人移动速度-50%，每1.5秒造成85%攻击力的法术伤害并小力地拖拽至中心。技能结束时把目标地点周围的敌人小力地拖拽至面前",
          "descRaw": "对一个远处目标<$ba.root>束缚</>并制造一个龙卷风使周围敌人移动速度<@ba.vup>-50%</>，每<@ba.vup>1.5</>秒造成<@ba.vup>85%</>攻击力的<@ba.vup>法术伤害</>并<@ba.vup>小力地</>拖拽至中心。技能结束时把目标地点周围的敌人<@ba.vup>小力地</>拖拽至面前",
          "spCost": 42,
          "initSp": 22,
          "duration": 8,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "placeOnRanged": true,
      "potDown": {
        "0": {
          "stats.cost": 16
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 15
        },
        "4": {
          "stats.cost": 14
        }
      },
      "id": "char_474_glady",
      "avatar": "char_474_glady",
      "professionShort": "特",
      "subProfession": "钩索师",
      "skillIdx": 2,
      "bench": false
    },
    "char_373_lionhd": {
      "chessId": "chess_char_4_14_a",
      "baseId": "chess_char_4_14_a",
      "goldenId": "chess_char_4_14_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 73,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_373_lionhd",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_lionhd",
        "potRank": 0
      },
      "shopSortId": 14,
      "charId": "char_373_lionhd",
      "name": "莱恩哈特",
      "appellation": "Leonhardt",
      "rarity": 5,
      "profession": "术师",
      "subProfessionId": "splashcaster",
      "subProfessionName": "扩散术师",
      "nationId": "rim",
      "garrisonIds": [
        "garrison_51_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_14_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1276,
        "atk": 681,
        "def": 100,
        "res": 20,
        "cost": 31,
        "blockCnt": 1,
        "bat": 2.9,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-6",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_lionhd_2",
        "iconId": "skchr_lionhd_2",
        "name": "解构与爆破",
        "level": 4,
        "desc": "攻击范围扩大，立即对攻击范围内的所有敌人造成相当于攻击力170%的法术伤害且使其在6秒内法术抗性-8%\n可充能2次",
        "descRaw": "攻击范围<@ba.vup>扩大</>，立即对攻击范围内的所有敌人造成相当于攻击力<@ba.vup>170%</>的法术伤害且使其在<@ba.vup>6</>秒内法术抗性<@ba.vup>-8%</>\n<@ba.rem>可充能2次</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 14,
        "initSp": 0,
        "maxChargeTime": 2,
        "increment": 1,
        "bb": {
          "atk_scale": 1.7,
          "magic_resistance": -0.08,
          "duration": 6,
          "ct": 2,
          "talent_range_flag": 1
        },
        "bbStr": {},
        "rangeId": "3-3",
        "rangeGrid": [
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -1,
            3
          ]
        ],
        "prefabId": "skchr_lionhd_2",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -1,
              3
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "破片杀伤",
          "desc": "攻击范围内每有一个敌人，自身攻击力+4%（最多可叠加6层（+1））"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_lionhd",
        "name": "传承与开拓",
        "type": "SPC-X",
        "level": 0,
        "icon": "uniequip_002_lionhd"
      },
      "assets": {
        "avatar": "char_373_lionhd",
        "portrait": "char_373_lionhd_1",
        "spine": "char_373_lionhd",
        "skillIcon": "skchr_lionhd_2",
        "subProfIcon": "sub_splashcaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_atk_up[3]",
          "iconId": "skcom_atk_up[3]",
          "name": "攻击力强化·γ型",
          "desc": "攻击力+45%",
          "descRaw": "攻击力<@ba.vup>+45%</>",
          "spCost": 37,
          "initSp": 5,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_lionhd_2",
          "iconId": "skchr_lionhd_2",
          "name": "解构与爆破",
          "desc": "攻击范围扩大，立即对攻击范围内的所有敌人造成相当于攻击力170%的法术伤害且使其在6秒内法术抗性-8%\n可充能2次",
          "descRaw": "攻击范围<@ba.vup>扩大</>，立即对攻击范围内的所有敌人造成相当于攻击力<@ba.vup>170%</>的法术伤害且使其在<@ba.vup>6</>秒内法术抗性<@ba.vup>-8%</>\n<@ba.rem>可充能2次</>",
          "spCost": 14,
          "initSp": 0,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 33
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 649
        },
        "4": {
          "stats.cost": 32
        }
      },
      "id": "char_373_lionhd",
      "avatar": "char_373_lionhd",
      "professionShort": "术",
      "subProfession": "扩散术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_1028_texas2": {
      "chessId": "chess_char_4_16_a",
      "baseId": "chess_char_4_16_a",
      "goldenId": "chess_char_4_16_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 75,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_615_acspec",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 16,
      "charId": "char_1028_texas2",
      "name": "缄默德克萨斯",
      "appellation": "Texas the Omertosa",
      "rarity": 6,
      "profession": "特种",
      "subProfessionId": "executor",
      "subProfessionName": "处决者",
      "nationId": "lungmen",
      "garrisonIds": [
        "garrison_114_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_16_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1246,
        "atk": 465,
        "def": 268,
        "res": 0,
        "cost": 8,
        "blockCnt": 1,
        "bat": 0.93,
        "aspd": 100,
        "respawnTime": 16,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_texas2_3",
        "iconId": "skchr_texas2_3",
        "name": "剑雨滂沱",
        "level": 4,
        "desc": "部署后立即对周围所有敌人造成两次相当于攻击力115%的法术伤害并使目标晕眩1.5秒，之后每秒释放剑雨攻击范围内最多2个不同的目标，造成攻击力85%的法术伤害和0.2秒晕眩",
        "descRaw": "部署后立即对周围所有敌人造成两次相当于攻击力<@ba.vup>115%</>的法术伤害并使目标<$ba.stun>晕眩</><@ba.vup>1.5</>秒，之后每秒释放剑雨攻击范围内最多<@ba.vup>2</>个不同的目标，造成攻击力<@ba.vup>85%</>的法术伤害和<@ba.vup>0.2</>秒<$ba.stun>晕眩</>",
        "skillType": "PASSIVE",
        "durationType": "NONE",
        "duration": 6,
        "spType": "ON_DEPLOY",
        "spCost": 0,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 0.85,
          "stun": 0.2,
          "max_target": 2,
          "texas2_s_3[sword].interval": 1,
          "appear.atk_scale": 1.15,
          "appear.stun": 1.5
        },
        "bbStr": {},
        "rangeId": "x-4",
        "rangeGrid": [
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ]
        ],
        "prefabId": "skchr_texas2_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "德克萨斯传统",
          "desc": "被动技能持续时间内攻击力+20%；首次击倒敌人时回复所有生命并重新释放被动技能"
        },
        {
          "name": "德克萨斯剑术",
          "desc": "每次部署后击倒一名敌人之前，攻击速度+10（+2），受到的所有伤害降低30%（+5%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_texas2",
        "name": "蓝莓与黑巧",
        "type": "EXE-Y",
        "level": 0,
        "icon": "uniequip_002_texas2"
      },
      "assets": {
        "avatar": "char_1028_texas2",
        "portrait": "char_1028_texas2_1",
        "spine": "char_1028_texas2",
        "skillIcon": "skchr_texas2_3",
        "subProfIcon": "sub_executor_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_texas2_1",
          "iconId": "skchr_texas2_1",
          "name": "细雨无声",
          "desc": "部署后攻击力+40%，攻击使命中目标失去特殊能力5秒，期间目标每秒受到260点法术伤害",
          "descRaw": "部署后攻击力<@ba.vup>+40%</>，攻击使命中目标失去特殊能力<@ba.vup>5</>秒，期间目标每秒受到<@ba.vup>260</>点法术伤害",
          "spCost": 0,
          "initSp": 0,
          "duration": 11,
          "skillType": "PASSIVE",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_texas2_2",
          "iconId": "skchr_texas2_2",
          "name": "阵雨连绵",
          "desc": "部署后立即对周围所有敌人造成相当于攻击力150%的法术伤害，并使命中目标在8秒内法术抗性-15%；攻击力+30%，攻击变为二连击并造成法术伤害",
          "descRaw": "部署后立即对周围所有敌人造成相当于攻击力<@ba.vup>150%</>的法术伤害，并使命中目标在<@ba.vup>8</>秒内法术抗性<@ba.vup>-15%</>；攻击力<@ba.vup>+30%</>，攻击变为二连击并造成法术伤害",
          "spCost": 0,
          "initSp": 0,
          "duration": 8,
          "skillType": "PASSIVE",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_texas2_3",
          "iconId": "skchr_texas2_3",
          "name": "剑雨滂沱",
          "desc": "部署后立即对周围所有敌人造成两次相当于攻击力115%的法术伤害并使目标晕眩1.5秒，之后每秒释放剑雨攻击范围内最多2个不同的目标，造成攻击力85%的法术伤害和0.2秒晕眩",
          "descRaw": "部署后立即对周围所有敌人造成两次相当于攻击力<@ba.vup>115%</>的法术伤害并使目标<$ba.stun>晕眩</><@ba.vup>1.5</>秒，之后每秒释放剑雨攻击范围内最多<@ba.vup>2</>个不同的目标，造成攻击力<@ba.vup>85%</>的法术伤害和<@ba.vup>0.2</>秒<$ba.stun>晕眩</>",
          "spCost": 0,
          "initSp": 0,
          "duration": 6,
          "skillType": "PASSIVE",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 10
        },
        "1": {
          "stats.atk": 443
        },
        "2": {
          "stats.respawnTime": 18
        },
        "4": {
          "stats.cost": 9
        }
      },
      "id": "char_1028_texas2",
      "avatar": "char_1028_texas2",
      "professionShort": "特",
      "subProfession": "处决者",
      "skillIdx": 2,
      "bench": false
    },
    "char_136_hsguma": {
      "chessId": "chess_char_4_17_a",
      "baseId": "chess_char_4_17_a",
      "goldenId": "chess_char_4_17_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 76,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_610_acfend",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 17,
      "charId": "char_136_hsguma",
      "name": "星熊",
      "appellation": "Hoshiguma",
      "rarity": 6,
      "profession": "重装",
      "subProfessionId": "protector",
      "subProfessionName": "铁卫",
      "nationId": "lungmen",
      "garrisonIds": [
        "garrison_65_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_17_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2849,
        "atk": 356,
        "def": 557,
        "res": 0,
        "cost": 21,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_hsguma_2",
        "iconId": "skchr_hsguma_2",
        "name": "荆棘",
        "level": 4,
        "desc": "防御力+13%\n每次受到攻击时对目标造成相当于星熊攻击力65%的物理伤害",
        "descRaw": "防御力<@ba.vup>+13%</>\n每次受到攻击时对目标造成相当于星熊攻击力<@ba.vup>65%</>的物理伤害",
        "skillType": "PASSIVE",
        "durationType": "NONE",
        "duration": 0,
        "spType": "ON_DEPLOY",
        "spCost": 0,
        "initSp": 0,
        "maxChargeTime": 0,
        "increment": 1,
        "bb": {
          "atk_scale": 0.65,
          "def": 0.13
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_hsguma_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "战术装甲",
          "desc": "获得28%（+3%）的伤害抵挡"
        },
        {
          "name": "特种作战策略",
          "desc": "在场时所有友方【重装】职业干员的防御力提升8%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_hsguma",
        "name": "友人们的赠礼",
        "type": "PRO-Y",
        "level": 0,
        "icon": "uniequip_002_hsguma"
      },
      "assets": {
        "avatar": "char_136_hsguma",
        "portrait": "char_136_hsguma_1",
        "spine": "char_136_hsguma",
        "skillIcon": "skchr_hsguma_2",
        "subProfIcon": "sub_protector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_hsguma_1",
          "iconId": "skchr_hsguma_1",
          "name": "战意",
          "desc": "防御力+50%，攻击力+20%",
          "descRaw": "防御力<@ba.vup>+50%</>，攻击力<@ba.vup>+20%</>",
          "spCost": 47,
          "initSp": 20,
          "duration": 23,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_hsguma_2",
          "iconId": "skchr_hsguma_2",
          "name": "荆棘",
          "desc": "防御力+13%\n每次受到攻击时对目标造成相当于星熊攻击力65%的物理伤害",
          "descRaw": "防御力<@ba.vup>+13%</>\n每次受到攻击时对目标造成相当于星熊攻击力<@ba.vup>65%</>的物理伤害",
          "spCost": 0,
          "initSp": 0,
          "duration": 0,
          "skillType": "PASSIVE",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_hsguma_3",
          "iconId": "skchr_hsguma_3",
          "name": "力之锯",
          "desc": "攻击力+80%，防御力+50%，对前方一格的所有敌人使用盾牌进行切割",
          "descRaw": "攻击力<@ba.vup>+80%</>，防御力<@ba.vup>+50%</>，对前方一格的所有敌人使用盾牌进行切割",
          "spCost": 57,
          "initSp": 23,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 23
        },
        "2": {
          "stats.def": 527
        },
        "3": {
          "stats.cost": 22
        }
      },
      "id": "char_136_hsguma",
      "avatar": "char_136_hsguma",
      "professionShort": "重",
      "subProfession": "铁卫",
      "skillIdx": 1,
      "bench": false
    },
    "char_311_mudrok": {
      "chessId": "chess_char_4_18_a",
      "baseId": "chess_char_4_18_a",
      "goldenId": "chess_char_4_18_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 77,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_602_cdfend",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 18,
      "charId": "char_311_mudrok",
      "name": "泥岩",
      "appellation": "Mudrock",
      "rarity": 6,
      "profession": "重装",
      "subProfessionId": "unyield",
      "subProfessionName": "不屈者",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_21_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_18_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2867,
        "atk": 687,
        "def": 492,
        "res": 10,
        "cost": 34,
        "blockCnt": 3,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_mudrok_2",
        "iconId": "skchr_mudrok_2",
        "name": "岩崩锤",
        "level": 4,
        "desc": "下次攻击时回复自身4%的最大生命，对周围所有地面敌人造成相当于攻击力190%的物理伤害，并有30%的几率晕眩其0.5秒",
        "descRaw": "下次攻击时回复自身<@ba.vup>4%</>的最大生命，对周围所有地面敌人造成相当于攻击力<@ba.vup>190%</>的物理伤害，并有<@ba.vup>30%</>的几率<$ba.stun>晕眩</>其<@ba.vup>0.5</>秒",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WHEN_TAKEN_DAMAGE",
        "spCost": 5,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 1.9,
          "buff_prob": 0.3,
          "stun": 0.5,
          "hp_ratio": 0.04
        },
        "bbStr": {},
        "rangeId": "x-4",
        "rangeGrid": [
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ]
        ],
        "prefabId": "skchr_mudrok_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "沃土予身",
          "desc": "每9秒获得1层护盾（最多3层，部署后立即获得1层），每层护盾破裂时恢复自身22%（+2%）最大生命"
        },
        {
          "name": "手足相惜",
          "desc": "受到来自【萨卡兹】敌人的伤害降低30%"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_mudrok",
        "name": "土石的根系",
        "type": "UNY-X",
        "level": 0,
        "icon": "uniequip_002_mudrok"
      },
      "assets": {
        "avatar": "char_311_mudrok",
        "portrait": "char_311_mudrok_1",
        "spine": "char_311_mudrok",
        "skillIcon": "skchr_mudrok_2",
        "subProfIcon": "sub_unyield_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_def_up[3]",
          "iconId": "skcom_def_up[3]",
          "name": "防御力强化·γ型",
          "desc": "防御力+45%",
          "descRaw": "防御力<@ba.vup>+45%</>",
          "spCost": 40,
          "initSp": 5,
          "duration": 40,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_mudrok_2",
          "iconId": "skchr_mudrok_2",
          "name": "岩崩锤",
          "desc": "下次攻击时回复自身4%的最大生命，对周围所有地面敌人造成相当于攻击力190%的物理伤害，并有30%的几率晕眩其0.5秒",
          "descRaw": "下次攻击时回复自身<@ba.vup>4%</>的最大生命，对周围所有地面敌人造成相当于攻击力<@ba.vup>190%</>的物理伤害，并有<@ba.vup>30%</>的几率<$ba.stun>晕眩</>其<@ba.vup>0.5</>秒",
          "spCost": 5,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_mudrok_3",
          "iconId": "skchr_mudrok_3",
          "name": "秽壤的血脉",
          "desc": "技能开启后无法行动且不受到伤害10秒并使周围敌人移动速度-60%；该状态结束后晕眩周围地面敌人3秒，攻击间隔缩短，攻击力+85%，防御力+40%，攻击阻挡的所有敌人",
          "descRaw": "技能开启后无法行动且不受到伤害<@ba.vup>10</>秒并使周围敌人移动速度<@ba.vup>-60%</>；该状态结束后<$ba.stun>晕眩</>周围地面敌人<@ba.vup>3</>秒，攻击间隔<@ba.vup>缩短</>，攻击力<@ba.vup>+85%</>，防御力<@ba.vup>+40%</>，攻击阻挡的所有敌人",
          "spCost": 32,
          "initSp": 11,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 36
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.def": 463
        },
        "4": {
          "stats.cost": 35
        }
      },
      "id": "char_311_mudrok",
      "avatar": "char_311_mudrok",
      "professionShort": "重",
      "subProfession": "不屈者",
      "skillIdx": 1,
      "bench": false
    },
    "char_420_flamtl": {
      "chessId": "chess_char_4_19_a",
      "baseId": "chess_char_4_19_a",
      "goldenId": "chess_char_4_19_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 78,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_608_acpion",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 19,
      "charId": "char_420_flamtl",
      "name": "焰尾",
      "appellation": "Flametail",
      "rarity": 6,
      "profession": "先锋",
      "subProfessionId": "pioneer",
      "subProfessionName": "尖兵",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_149_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_19_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1560,
        "atk": 456,
        "def": 313,
        "res": 0,
        "cost": 12,
        "blockCnt": 2,
        "bat": 1.05,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_flamtl_3",
        "iconId": "skchr_flamtl_3",
        "name": "焰心",
        "level": 4,
        "desc": "技能持续时间内逐渐获得8点部署费用，攻击间隔缩短，攻击力+45%，阻挡数+1，获得60%的物理和法术闪避",
        "descRaw": "技能持续时间内逐渐获得<@ba.vup>8</>点部署费用，攻击间隔<@ba.vup>缩短</>，攻击力<@ba.vup>+45%</>，阻挡数<@ba.vup>+1</>，获得<@ba.vup>60%</>的物理和法术闪避",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 8,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 21,
        "initSp": 2,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.45,
          "cost": 1,
          "prob": 0.6,
          "base_attack_time": 0.7,
          "block_cnt": 1,
          "value": 8
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_flamtl_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "前锋剑术",
          "desc": "触发闪避时，下次攻击变为二连击并攻击所有阻挡的敌人"
        },
        {
          "name": "红松骑士团团长",
          "desc": "在场时，所有【卡西米尔】势力的干员获得25%（+3%）的物理闪避"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_flamtl",
        "name": "红松的起点",
        "type": "SOL-Y",
        "level": 0,
        "icon": "uniequip_002_flamtl"
      },
      "assets": {
        "avatar": "char_420_flamtl",
        "portrait": "char_420_flamtl_1",
        "spine": "char_420_flamtl",
        "skillIcon": "skchr_flamtl_3",
        "subProfIcon": "sub_pioneer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_flamtl_1",
          "iconId": "skchr_flamtl_1",
          "name": "迅敏直觉",
          "desc": "立即获得6点部署费用，并闪避下次物理攻击",
          "descRaw": "立即获得<@ba.vup>6</>点部署费用，并闪避下次物理攻击",
          "spCost": 21,
          "initSp": 3,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_flamtl_2",
          "iconId": "skchr_flamtl_2",
          "name": "“红松林”",
          "desc": "立即获得11点部署费用；对周围最多6名敌人造成两次相当于攻击力180%的物理伤害，并令击中目标晕眩0.5秒；范围内友方单位获得40%的物理闪避，持续10秒",
          "descRaw": "立即获得<@ba.vup>11</>点部署费用；对周围最多6名敌人造成<@ba.vup>两次</>相当于攻击力<@ba.vup>180%</>的物理伤害，并令击中目标<$ba.stun>晕眩</><@ba.vup>0.5</>秒；范围内友方单位获得<@ba.vup>40%</>的物理闪避，持续<@ba.vup>10</>秒",
          "spCost": 40,
          "initSp": 23,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_flamtl_3",
          "iconId": "skchr_flamtl_3",
          "name": "焰心",
          "desc": "技能持续时间内逐渐获得8点部署费用，攻击间隔缩短，攻击力+45%，阻挡数+1，获得60%的物理和法术闪避",
          "descRaw": "技能持续时间内逐渐获得<@ba.vup>8</>点部署费用，攻击间隔<@ba.vup>缩短</>，攻击力<@ba.vup>+45%</>，阻挡数<@ba.vup>+1</>，获得<@ba.vup>60%</>的物理和法术闪避",
          "spCost": 21,
          "initSp": 2,
          "duration": 8,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 14
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 431
        },
        "4": {
          "stats.cost": 13
        }
      },
      "id": "char_420_flamtl",
      "avatar": "char_420_flamtl",
      "professionShort": "先",
      "subProfession": "尖兵",
      "skillIdx": 2,
      "bench": false
    },
    "char_430_fartth": {
      "chessId": "chess_char_4_20_a",
      "baseId": "chess_char_4_20_a",
      "goldenId": "chess_char_4_20_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 79,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_603_csnipe",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 20,
      "charId": "char_430_fartth",
      "name": "远牙",
      "appellation": "Fartooth",
      "rarity": 6,
      "profession": "狙击",
      "subProfessionId": "longrange",
      "subProfessionName": "神射手",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_148_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_20_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1217,
        "atk": 1020,
        "def": 133,
        "res": 0,
        "cost": 20,
        "blockCnt": 1,
        "bat": 2.7,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-9",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ],
        [
          -2,
          0
        ],
        [
          -2,
          1
        ],
        [
          -2,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": "lowestDef",
      "skill": {
        "skillId": "skchr_fartth_3",
        "iconId": "skchr_fartth_3",
        "name": "光羽箭",
        "level": 4,
        "desc": "攻击范围改为前方无限长的直线，攻击力+80%，攻击原本范围以外的目标时，造成的伤害提高至125%",
        "descRaw": "攻击范围改为前方<@ba.rem>无限长的直线</>，攻击力<@ba.vup>+80%</>，攻击原本范围以外的目标时，造成的伤害提高至<@ba.vup>125%</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 16,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 27,
        "initSp": 6,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.8,
          "damage_scale": 1.25
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_fartth_3",
        "trigger": {
          "rule": "CUSTOM_RANGE",
          "rawRule": "CUSTOM_RANGE_SEARCH_ENEMY",
          "customRangeGrid": [
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              0,
              4
            ],
            [
              0,
              5
            ],
            [
              0,
              6
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "凝神",
          "desc": "最近10秒内未受伤害时，攻击力+18%（+3%）"
        },
        {
          "name": "屏息",
          "desc": "技能开启时不容易成为敌人的目标，且攻击无视目标的物理闪避"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_fartth",
        "name": "首战支援套组",
        "type": "DEA-X",
        "level": 0,
        "icon": "uniequip_002_fartth"
      },
      "assets": {
        "avatar": "char_430_fartth",
        "portrait": "char_430_fartth_1",
        "spine": "char_430_fartth",
        "skillIcon": "skchr_fartth_3",
        "subProfIcon": "sub_longrange_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_quickattack[3]",
          "iconId": "skcom_quickattack[3]",
          "name": "迅捷打击·γ型",
          "desc": "攻击力+27%，攻击速度+25",
          "descRaw": "攻击力<@ba.vup>+27%</>，攻击速度<@ba.vup>+25</>",
          "spCost": 42,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_fartth_2",
          "iconId": "skchr_fartth_2",
          "name": "同盟支援",
          "desc": "可以攻击到范围外被阻挡的敌方单位，攻击速度+75",
          "descRaw": "可以攻击到范围外被阻挡的敌方单位，攻击速度<@ba.vup>+75</>",
          "spCost": 40,
          "initSp": 18,
          "duration": 28,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_fartth_3",
          "iconId": "skchr_fartth_3",
          "name": "光羽箭",
          "desc": "攻击范围改为前方无限长的直线，攻击力+80%，攻击原本范围以外的目标时，造成的伤害提高至125%",
          "descRaw": "攻击范围改为前方<@ba.rem>无限长的直线</>，攻击力<@ba.vup>+80%</>，攻击原本范围以外的目标时，造成的伤害提高至<@ba.vup>125%</>",
          "spCost": 27,
          "initSp": 6,
          "duration": 16,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 22
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 980
        },
        "4": {
          "stats.cost": 21
        }
      },
      "id": "char_430_fartth",
      "avatar": "char_430_fartth",
      "professionShort": "狙",
      "subProfession": "神射手",
      "skillIdx": 2,
      "bench": false
    },
    "char_128_plosis": {
      "chessId": "chess_char_4_21_a",
      "baseId": "chess_char_4_21_a",
      "goldenId": "chess_char_4_21_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 80,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_128_plosis",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_plosis",
        "potRank": 0
      },
      "shopSortId": 21,
      "charId": "char_128_plosis",
      "name": "白面鸮",
      "appellation": "Ptilopsis",
      "rarity": 5,
      "profession": "医疗",
      "subProfessionId": "ringhealer",
      "subProfessionName": "群愈师",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_86_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_21_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1271,
        "atk": 289,
        "def": 124,
        "res": 0,
        "cost": 15,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 60,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_plosis_2",
        "iconId": "skchr_plosis_2",
        "name": "脑啡肽",
        "level": 4,
        "desc": "攻击范围扩大，攻击间隔较大幅度缩短",
        "descRaw": "攻击范围扩大，攻击间隔<@ba.vup>较大幅度缩短</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 33,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 100,
        "initSp": 70,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "base_attack_time": -1.8
        },
        "bbStr": {},
        "rangeId": "y-7",
        "rangeGrid": [
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -1,
            3
          ]
        ],
        "prefabId": "skchr_plosis_2",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              -1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              0,
              -1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              -1
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -1,
              3
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "技力光环",
          "desc": "在场时所有友方单位的技力自然回复速度+0.3/秒（同类效果取最高）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_plosis",
        "name": "医疗环境分析装置",
        "type": "RIN-X",
        "level": 0,
        "icon": "uniequip_002_plosis"
      },
      "assets": {
        "avatar": "char_128_plosis",
        "portrait": "char_128_plosis_1",
        "spine": "char_128_plosis",
        "skillIcon": "skchr_plosis_2",
        "subProfIcon": "sub_ringhealer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_heal_up[3]",
          "iconId": "skcom_heal_up[3]",
          "name": "治疗强化·γ型",
          "desc": "攻击力+55%",
          "descRaw": "攻击力<@ba.vup>+55%</>",
          "spCost": 35,
          "initSp": 20,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_plosis_2",
          "iconId": "skchr_plosis_2",
          "name": "脑啡肽",
          "desc": "攻击范围扩大，攻击间隔较大幅度缩短",
          "descRaw": "攻击范围扩大，攻击间隔<@ba.vup>较大幅度缩短</>",
          "spCost": 100,
          "initSp": 70,
          "duration": 33,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 17
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 268
        },
        "3": {
          "stats.respawnTime": 66
        },
        "4": {
          "stats.cost": 16
        }
      },
      "id": "char_128_plosis",
      "avatar": "char_128_plosis",
      "professionShort": "医",
      "subProfession": "群愈师",
      "skillIdx": 1,
      "bench": false
    },
    "char_172_svrash": {
      "chessId": "chess_char_4_22_a",
      "baseId": "chess_char_4_22_a",
      "goldenId": "chess_char_4_22_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 81,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_609_acguad",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 22,
      "charId": "char_172_svrash",
      "name": "银灰",
      "appellation": "SilverAsh",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "lord",
      "subProfessionName": "领主",
      "nationId": "kjerag",
      "garrisonIds": [
        "garrison_28_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_22_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2022,
        "atk": 603,
        "def": 329,
        "res": 10,
        "cost": 18,
        "blockCnt": 2,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-12",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_svrash_3",
        "iconId": "skchr_svrash_3",
        "name": "真银斩",
        "level": 4,
        "desc": "防御力-70%，攻击力+125%，攻击范围扩大，同时攻击至多4个目标（视为近距离攻击）",
        "descRaw": "防御力<@ba.vdown>-70%</>，攻击力<@ba.vup>+125%</>，攻击范围<@ba.vup>扩大</>，同时攻击至多<@ba.vup>4</>个目标（视为近距离攻击）",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 23,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 90,
        "initSp": 55,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "def": -0.7,
          "atk": 1.25,
          "attack@max_target": 4
        },
        "bbStr": {},
        "rangeId": "3-7",
        "rangeGrid": [
          [
            3,
            0
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ],
          [
            -3,
            0
          ]
        ],
        "prefabId": "skchr_svrash_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              3,
              0
            ],
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -2,
              0
            ],
            [
              -2,
              1
            ],
            [
              -3,
              0
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "领袖",
          "desc": "攻击力+12%（+2%），编入队伍时所有我方单位的再部署时间-12%（+2%）"
        },
        {
          "name": "鹰眼视觉",
          "desc": "攻击范围内敌人的隐匿效果失效"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_svrash",
        "name": "雪境羽兽护理套组",
        "type": "LOR-X",
        "level": 0,
        "icon": "uniequip_002_svrash"
      },
      "assets": {
        "avatar": "char_172_svrash",
        "portrait": "char_172_svrash_1",
        "spine": "char_172_svrash",
        "skillIcon": "skchr_svrash_3",
        "subProfIcon": "sub_lord_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_svrash_1",
          "iconId": "skcom_powerstrike[3]",
          "name": "强力击·γ型",
          "desc": "下次攻击的攻击力提高至205%",
          "descRaw": "下次攻击的攻击力提高至<@ba.vup>205%</>",
          "spCost": 3,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_svrash_2",
          "iconId": "skchr_svrash_2",
          "name": "雪境生存法则",
          "desc": "可以在下列状态和初始状态间切换：\n攻击范围缩小，防御力+50%，每秒恢复最大生命的3.5%",
          "descRaw": "<@ba.rem>可以在下列状态和初始状态间切换：</>\n攻击范围<@ba.vdown>缩小</>，防御力<@ba.vup>+50%</>，每秒恢复最大生命的<@ba.vup>3.5%</>",
          "spCost": 5,
          "initSp": 0,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_svrash_3",
          "iconId": "skchr_svrash_3",
          "name": "真银斩",
          "desc": "防御力-70%，攻击力+125%，攻击范围扩大，同时攻击至多4个目标（视为近距离攻击）",
          "descRaw": "防御力<@ba.vdown>-70%</>，攻击力<@ba.vup>+125%</>，攻击范围<@ba.vup>扩大</>，同时攻击至多<@ba.vup>4</>个目标（视为近距离攻击）",
          "spCost": 90,
          "initSp": 55,
          "duration": 23,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 20
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 577
        },
        "4": {
          "stats.cost": 19
        }
      },
      "id": "char_172_svrash",
      "avatar": "char_172_svrash",
      "professionShort": "近",
      "subProfession": "领主",
      "skillIdx": 2,
      "bench": false
    },
    "char_1026_gvial2": {
      "chessId": "chess_char_4_23_a",
      "baseId": "chess_char_4_23_a",
      "goldenId": "chess_char_4_23_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 82,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_609_acguad",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 23,
      "charId": "char_1026_gvial2",
      "name": "百炼嘉维尔",
      "appellation": "Gavial the Invincible",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "centurion",
      "subProfessionName": "强攻手",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_128_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_23_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2179,
        "atk": 610,
        "def": 320,
        "res": 0,
        "cost": 22,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_gvial2_3",
        "iconId": "skchr_gvial2_3",
        "name": "丛林之魂",
        "level": 4,
        "desc": "攻击力+85%，攻击速度+60，阻挡数+2，技能期间暂时只受到50%的伤害，其余伤害延后至技能结束，变为持续20秒等量的生命流失效果",
        "descRaw": "攻击力<@ba.vup>+85%</>，攻击速度<@ba.vup>+60</>，阻挡数<@ba.vup>+2</>，技能期间暂时只受到<@ba.vup>50%</>的伤害，其余伤害延后至技能结束，变为持续<@ba.vup>20</>秒等量的生命流失效果",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 40,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.85,
          "attack_speed": 60,
          "damage_resistance": 0.5,
          "final_duration": 20,
          "interval": 0.1,
          "priority": 1000,
          "block_cnt": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_gvial2_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "战地巨斧",
          "desc": "攻击力和防御力提升12%（+2%），每再阻挡一个敌人提升5%（+1%）"
        },
        {
          "name": "医学背景",
          "desc": "受到的治疗效果提升25%（+5%），生命值低于一半时提升至45%（+5%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_gvial2",
        "name": "嘉维尔的折磨",
        "type": "CEN-X",
        "level": 0,
        "icon": "uniequip_002_gvial2"
      },
      "assets": {
        "avatar": "char_1026_gvial2",
        "portrait": "char_1026_gvial2_1",
        "spine": "char_1026_gvial2",
        "skillIcon": "skchr_gvial2_3",
        "subProfIcon": "sub_centurion_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_gvial2_1",
          "iconId": "skchr_gvial2_1",
          "name": "精准痛击",
          "desc": "攻击力+45%，每次攻击治疗自身相当于造成伤害30%的生命值",
          "descRaw": "攻击力<@ba.vup>+45%</>，每次攻击治疗自身相当于造成伤害<@ba.vup>30%</>的生命值",
          "spCost": 25,
          "initSp": 10,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_gvial2_2",
          "iconId": "skchr_gvial2_2",
          "name": "链锯强袭",
          "desc": "攻击范围扩大，攻击力+110%，防御力+35%；攻击到未被阻挡的敌人时，将其中等力度地拖拽至面前",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+110%</>，防御力<@ba.vup>+35%</>；攻击到未被阻挡的敌人时，将其<@ba.vup>中等力度地</>拖拽至面前",
          "spCost": 42,
          "initSp": 25,
          "duration": 33,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_gvial2_3",
          "iconId": "skchr_gvial2_3",
          "name": "丛林之魂",
          "desc": "攻击力+85%，攻击速度+60，阻挡数+2，技能期间暂时只受到50%的伤害，其余伤害延后至技能结束，变为持续20秒等量的生命流失效果",
          "descRaw": "攻击力<@ba.vup>+85%</>，攻击速度<@ba.vup>+60</>，阻挡数<@ba.vup>+2</>，技能期间暂时只受到<@ba.vup>50%</>的伤害，其余伤害延后至技能结束，变为持续<@ba.vup>20</>秒等量的生命流失效果",
          "spCost": 40,
          "initSp": 20,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 24
        },
        "2": {
          "stats.atk": 582
        },
        "4": {
          "stats.cost": 23
        }
      },
      "id": "char_1026_gvial2",
      "avatar": "char_1026_gvial2",
      "professionShort": "近",
      "subProfession": "强攻手",
      "skillIdx": 2,
      "bench": false
    },
    "char_426_billro": {
      "chessId": "chess_char_4_24_a",
      "baseId": "chess_char_4_24_a",
      "goldenId": "chess_char_4_24_b",
      "isGolden": false,
      "tier": 4,
      "identifier": 83,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_604_ccast",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 24,
      "charId": "char_426_billro",
      "name": "卡涅利安",
      "appellation": "Carnelian",
      "rarity": 6,
      "profession": "术师",
      "subProfessionId": "phalanx",
      "subProfessionName": "阵法术师",
      "nationId": "leithanien",
      "garrisonIds": [
        "garrison_49_a"
      ],
      "price": 3,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_4_24_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1726,
        "atk": 761,
        "def": 198,
        "res": 15,
        "cost": 22,
        "blockCnt": 1,
        "bat": 2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "x-1",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          -2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -2,
          0
        ]
      ],
      "dmgType": "arts",
      "attackKind": "none",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_billro_2",
        "iconId": "skchr_billro_2",
        "name": "沙缚镣锁",
        "level": 4,
        "desc": "攻击间隔缩短，每次攻击对目标造成0.3秒停顿；\n蓄力额外效果：攻击力+10%且停顿变为束缚0.3秒",
        "descRaw": "攻击间隔<@ba.vup>缩短</>，每次攻击对目标造成0.3秒<$ba.sluggish>停顿</>；\n<$ba.charged>蓄力</>额外效果：攻击力<@ba.vup>+10%</>且<$ba.sluggish>停顿</>变为<$ba.root>束缚</><@ba.vup>0.3</>秒",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 25,
        "initSp": 4,
        "maxChargeTime": 2,
        "increment": 1,
        "bb": {
          "base_attack_time": -0.6,
          "attack@sluggish": 0.3,
          "atk": 0.1,
          "attack@root": 0.3
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_billro_2",
        "trigger": {
          "rule": "SEARCH",
          "rawRule": "SEARCH",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "生命之餐",
          "desc": "开启技能时立即恢复45%（+5%）最大生命值；\n蓄力时效果翻倍"
        },
        {
          "name": "蓄势待发",
          "desc": "技力超过上限时，技力自然回复速度+0.6/秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_billro",
        "name": "风信子与匕首",
        "type": "PLX-X",
        "level": 0,
        "icon": "uniequip_002_billro"
      },
      "assets": {
        "avatar": "char_426_billro",
        "portrait": "char_426_billro_1",
        "spine": "char_426_billro",
        "skillIcon": "skchr_billro_2",
        "subProfIcon": "sub_phalanx_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_billro_1",
          "iconId": "skchr_billro_1",
          "name": "沙暴守卫",
          "desc": "攻击力+25%，防御力+40%；\n蓄力额外效果：特性效果在技能期间继续生效",
          "descRaw": "攻击力<@ba.vup>+25%</>，防御力<@ba.vup>+40%</>；\n<$ba.charged>蓄力</>额外效果：特性效果在技能期间继续生效",
          "spCost": 18,
          "initSp": 0,
          "duration": 16,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_billro_2",
          "iconId": "skchr_billro_2",
          "name": "沙缚镣锁",
          "desc": "攻击间隔缩短，每次攻击对目标造成0.3秒停顿；\n蓄力额外效果：攻击力+10%且停顿变为束缚0.3秒",
          "descRaw": "攻击间隔<@ba.vup>缩短</>，每次攻击对目标造成0.3秒<$ba.sluggish>停顿</>；\n<$ba.charged>蓄力</>额外效果：攻击力<@ba.vup>+10%</>且<$ba.sluggish>停顿</>变为<$ba.root>束缚</><@ba.vup>0.3</>秒",
          "spCost": 25,
          "initSp": 4,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_billro_3",
          "iconId": "skchr_billro_3",
          "name": "食噬之印",
          "desc": "攻击范围扩大，攻击力逐渐增至+140%\n蓄力额外效果：每次攻击使目标受到来自卡涅利安的伤害提升20%（最多叠加5次），持续至技能结束",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力逐渐增至<@ba.vup>+140%</>\n<$ba.charged>蓄力</>额外效果：每次攻击使目标受到来自卡涅利安的伤害提升<@ba.vup>20%</>（最多叠加<@ba.vup>5</>次），持续至技能结束",
          "spCost": 28,
          "initSp": 0,
          "duration": 21,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 24
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 727
        },
        "4": {
          "stats.cost": 23
        }
      },
      "id": "char_426_billro",
      "avatar": "char_426_billro",
      "professionShort": "术",
      "subProfession": "阵法术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_1032_excu2": {
      "chessId": "chess_char_5_01_a",
      "baseId": "chess_char_5_01_a",
      "goldenId": "chess_char_5_01_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 86,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_600_cpione",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 1,
      "charId": "char_1032_excu2",
      "name": "圣约送葬人",
      "appellation": "Executor the Ex Foedere",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "reaper",
      "subProfessionName": "收割者",
      "nationId": "laterano",
      "garrisonIds": [
        "garrison_23_a",
        "garrison_55_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_01_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1967,
        "atk": 612,
        "def": 418,
        "res": 0,
        "cost": 21,
        "blockCnt": 2,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-3",
      "rangeGrid": [
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_excu2_2",
        "iconId": "skchr_excu2_2",
        "name": "近身铳斗",
        "level": 4,
        "desc": "攻击力+45%，防御力+45%，阻挡数+1，受到敌人的近战攻击时有20%几率闪避并补充1颗弹药\n攻击装有12发弹药，打完后结束（可随时停止技能）",
        "descRaw": "攻击力<@ba.vup>+45%</>，防御力<@ba.vup>+45%</>，阻挡数<@ba.vup>+1</>，受到敌人的近战攻击时有<@ba.vup>20%</>几率闪避并补充<@ba.vup>1</>颗弹药\n<@ba.rem>攻击装有12发弹药，打完后结束（可随时停止技能）</>",
        "skillType": "MANUAL",
        "durationType": "AMMO",
        "duration": 0,
        "spType": "INCREASE_WHEN_ATTACK",
        "spCost": 15,
        "initSp": 3,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.45,
          "def": 0.45,
          "block_cnt": 1,
          "prob": 0.2,
          "recover_cnt": 1,
          "attack@trigger_time": 12
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_excu2_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "受选之人",
          "desc": "攻击时有23%（+3%）几率额外攻击一次，技能期间每消耗1颗弹药这个几率提升5%，技能结束时重置"
        },
        {
          "name": "铳弹共感",
          "desc": "每有一个【拉特兰】干员在场，自身的弹药类技能弹药上限+1（最多4层）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_excu2",
        "name": "待解答",
        "type": "REA-X",
        "level": 0,
        "icon": "uniequip_002_excu2"
      },
      "assets": {
        "avatar": "char_1032_excu2",
        "portrait": "char_1032_excu2_1",
        "spine": "char_1032_excu2",
        "skillIcon": "skchr_excu2_2",
        "subProfIcon": "sub_reaper_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_excu2_1",
          "iconId": "skchr_excu2_1",
          "name": "遗嘱执行",
          "desc": "攻击范围扩大，攻击力+20%，攻击时无视目标190的防御力\n攻击装有8发弹药，打完后结束（可随时停止技能）",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+20%</>，攻击时无视目标<@ba.vup>190</>的防御力\n<@ba.rem>攻击装有8发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 9,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_excu2_2",
          "iconId": "skchr_excu2_2",
          "name": "近身铳斗",
          "desc": "攻击力+45%，防御力+45%，阻挡数+1，受到敌人的近战攻击时有20%几率闪避并补充1颗弹药\n攻击装有12发弹药，打完后结束（可随时停止技能）",
          "descRaw": "攻击力<@ba.vup>+45%</>，防御力<@ba.vup>+45%</>，阻挡数<@ba.vup>+1</>，受到敌人的近战攻击时有<@ba.vup>20%</>几率闪避并补充<@ba.vup>1</>颗弹药\n<@ba.rem>攻击装有12发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 15,
          "initSp": 3,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_excu2_3",
          "iconId": "skchr_excu2_3",
          "name": "圣约决裁",
          "desc": "攻击间隔略微增大，攻击范围扩大，攻击力+120%，每消耗1颗弹药攻击力额外+4%（最多30层），特性的回复生命效果提高至2倍；技能结束时，对技能期间攻击过的目标造成相当于攻击力200%的物理伤害\n攻击装有16发弹药，打完后结束（可随时停止技能）",
          "descRaw": "攻击间隔<@ba.vdown>略微增大</>，攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+120%</>，每消耗1颗弹药攻击力额外<@ba.vup>+4%</>（最多30层），特性的回复生命效果提高至<@ba.vup>2</>倍；技能结束时，对技能期间攻击过的目标造成相当于攻击力<@ba.vup>200%</>的物理伤害\n<@ba.rem>攻击装有16发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 33,
          "initSp": 6,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 23
        },
        "1": {
          "stats.def": 396
        },
        "2": {
          "stats.atk": 586
        },
        "4": {
          "stats.cost": 22
        }
      },
      "id": "char_1032_excu2",
      "avatar": "char_1032_excu2",
      "professionShort": "近",
      "subProfession": "收割者",
      "skillIdx": 1,
      "bench": false
    },
    "char_4056_titi": {
      "chessId": "chess_char_5_02_a",
      "baseId": "chess_char_5_02_a",
      "goldenId": "chess_char_5_02_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 87,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_604_ccast",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 2,
      "charId": "char_4056_titi",
      "name": "缇缇",
      "appellation": "Titi",
      "rarity": 6,
      "profession": "医疗",
      "subProfessionId": "incantationmedic",
      "subProfessionName": "咒愈师",
      "nationId": "sargon",
      "garrisonIds": [
        "garrison_125_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_02_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1208,
        "atk": 464,
        "def": 93,
        "res": 20,
        "cost": 15,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_titi_3",
        "iconId": "skchr_titi_3",
        "name": "旧日绽放",
        "level": 4,
        "desc": "攻击力+110%，同时攻击两名敌人，攻击非沉睡目标时使其沉睡5秒，技能期间，全场敌人从沉睡状态醒来或于沉睡中被击倒时，受到法术伤害（随沉睡时长提高至攻击力370%），并使周围一名其他敌人沉睡5秒，攻击范围内的其他友方干员受到致命伤害时，陷入沉睡至生命值完全恢复或技能结束",
        "descRaw": "攻击力<@ba.vup>+110%</>，同时攻击两名敌人，攻击非<$ba.sleep>沉睡</>目标时使其<$ba.sleep>沉睡</><@ba.vup>5</>秒，技能期间，全场敌人从<$ba.sleep>沉睡</>状态醒来或于<$ba.sleep>沉睡</>中被击倒时，受到法术伤害（随<$ba.sleep>沉睡</>时长提高至攻击力<@ba.vup>370%</>），并使周围一名其他敌人<$ba.sleep>沉睡</><@ba.vup>5</>秒，攻击范围内的其他友方干员受到致命伤害时，陷入<$ba.sleep>沉睡</>至生命值完全恢复或技能结束",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 45,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 1.1,
          "attack@max_target": 2,
          "attack@sleep": 5,
          "max_target": 1,
          "min_atk_scale": 1,
          "max_atk_scale": 3.7,
          "sleep": 5,
          "range_radius": 1.5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_titi_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "凝固的时光",
          "desc": "自身可以攻击沉睡的敌人，且攻击非移动敌人时对其额外造成相当于攻击力16%（+1%）的法术伤害，在场时沉睡中的敌人每秒受到缇缇攻击力32%（+2%）的法术伤害"
        },
        {
          "name": "勇气的报偿",
          "desc": "场上的【米诺斯】或【萨尔贡】干员生命值高于50%时，获得+22（+2）攻速的精力充沛"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_titi",
        "name": "远方的礼物",
        "type": "INC-X",
        "level": 0,
        "icon": "uniequip_002_titi"
      },
      "assets": {
        "avatar": "char_4056_titi",
        "portrait": "char_4056_titi_1",
        "spine": "char_4056_titi",
        "skillIcon": "skchr_titi_3",
        "subProfIcon": "sub_incantationmedic_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_titi_1",
          "iconId": "skchr_titi_1",
          "name": "缓蚀",
          "desc": "攻击力+65%，每次攻击有30%概率使目标沉睡2秒",
          "descRaw": "攻击力<@ba.vup>+65%</>，每次攻击有<@ba.vup>30%</>概率使目标<$ba.sleep>沉睡</><@ba.vup>2</>秒",
          "spCost": 52,
          "initSp": 8,
          "duration": 17,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_titi_2",
          "iconId": "skchr_titi_2",
          "name": "封护",
          "desc": "停止攻击，攻击力+115%，技能开启时使自身与攻击范围内生命比例最低的干员陷入沉睡直到技能结束，期间持续使自身与该目标周围的敌人陷入沉睡，第一天赋效果提升至2.4倍\n可主动关闭技能（期间可随时停止技能）",
          "descRaw": "<@ba.vdown>停止攻击</>，攻击力<@ba.vup>+115%</>，技能开启时使自身与攻击范围内生命比例最低的干员陷入<$ba.sleep>沉睡</>直到技能结束，期间持续使自身与该目标周围的敌人陷入<$ba.sleep>沉睡</>，第一天赋效果提升至<@ba.vup>2.4</>倍\n<@ba.rem>可主动关闭技能（期间可随时停止技能）</>",
          "spCost": 30,
          "initSp": 9,
          "duration": 12,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_titi_3",
          "iconId": "skchr_titi_3",
          "name": "旧日绽放",
          "desc": "攻击力+110%，同时攻击两名敌人，攻击非沉睡目标时使其沉睡5秒，技能期间，全场敌人从沉睡状态醒来或于沉睡中被击倒时，受到法术伤害（随沉睡时长提高至攻击力370%），并使周围一名其他敌人沉睡5秒，攻击范围内的其他友方干员受到致命伤害时，陷入沉睡至生命值完全恢复或技能结束",
          "descRaw": "攻击力<@ba.vup>+110%</>，同时攻击两名敌人，攻击非<$ba.sleep>沉睡</>目标时使其<$ba.sleep>沉睡</><@ba.vup>5</>秒，技能期间，全场敌人从<$ba.sleep>沉睡</>状态醒来或于<$ba.sleep>沉睡</>中被击倒时，受到法术伤害（随<$ba.sleep>沉睡</>时长提高至攻击力<@ba.vup>370%</>），并使周围一名其他敌人<$ba.sleep>沉睡</><@ba.vup>5</>秒，攻击范围内的其他友方干员受到致命伤害时，陷入<$ba.sleep>沉睡</>至生命值完全恢复或技能结束",
          "spCost": 45,
          "initSp": 20,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 17
        },
        "2": {
          "stats.atk": 438
        },
        "3": {
          "stats.cost": 16
        }
      },
      "id": "char_4056_titi",
      "avatar": "char_4056_titi",
      "professionShort": "医",
      "subProfession": "咒愈师",
      "skillIdx": 2,
      "bench": false
    },
    "char_1040_blaze2": {
      "chessId": "chess_char_5_03_a",
      "baseId": "chess_char_5_03_a",
      "goldenId": "chess_char_5_03_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 88,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_612_accast",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_accast",
        "potRank": 0
      },
      "shopSortId": 3,
      "charId": "char_1040_blaze2",
      "name": "烛煌",
      "appellation": "Blaze the Igniting Spark",
      "rarity": 6,
      "profession": "术师",
      "subProfessionId": "primcaster",
      "subProfessionName": "本源术师",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_35_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_03_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1206,
        "atk": 587,
        "def": 108,
        "res": 15,
        "cost": 19,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-1",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_blaze2_3",
        "iconId": "skchr_blaze2_3",
        "name": "众恶的焚场",
        "level": 4,
        "desc": "攻击范围改变，攻击力+70%，攻击间隔大幅缩短，攻击变为群体攻击；若目标处于灼燃损伤爆发期间则额外造成攻击力60%的元素伤害\n自身每秒流失最大生命的3%，攻击装有18发弹药，全场有敌人进入灼燃损伤爆发时获得2颗额外弹药，弹药打完后结束（可随时停止技能）",
        "descRaw": "攻击范围<@ba.vup>改变</>，攻击力<@ba.vup>+70%</>，攻击间隔<@ba.vup>大幅缩短</>，攻击变为群体攻击；若目标处于<$ba.dt.burning2>灼燃损伤</>爆发期间则额外造成攻击力<@ba.vup>60%</>的元素伤害\n<@ba.rem>自身每秒流失最大生命的3%，攻击装有18发弹药，全场有敌人进入<$ba.dt.burning2>灼燃损伤</>爆发时获得2颗额外弹药，弹药打完后结束（可随时停止技能）</>",
        "skillType": "MANUAL",
        "durationType": "AMMO",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 37,
        "initSp": 13,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.7,
          "base_attack_time": -1.3,
          "attack@trigger_time": 18,
          "attack@atk_scale": 0.6,
          "lose_hp_scale": 0.03,
          "ammo_recover": 2,
          "skill_max_trigger_time": -1
        },
        "bbStr": {},
        "rangeId": "4-11",
        "rangeGrid": [
          [
            2,
            2
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            0,
            4
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -1,
            3
          ],
          [
            -2,
            2
          ]
        ],
        "prefabId": "skchr_blaze2_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "熔点引爆",
          "desc": "全场有敌人灼燃损伤爆发开始时，立即对其造成相当于攻击力380%（+30%）的元素伤害并回复15%（+3%）最大生命"
        },
        {
          "name": "绝处重燃",
          "desc": "被击倒时倒地并获得6000点屏障，倒地期间不能攻击，无法被治疗，每秒回复3.5%（+0.5%）生命，生命回满后复活并使附近的敌人晕眩5秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_blaze2",
        "name": "热切的期盼",
        "type": "PRI-X",
        "level": 0,
        "icon": "uniequip_002_blaze2"
      },
      "assets": {
        "avatar": "char_1040_blaze2",
        "portrait": "char_1040_blaze2_1",
        "spine": "char_1040_blaze2",
        "skillIcon": "skchr_blaze2_3",
        "subProfIcon": "sub_primcaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_blaze2_1",
          "iconId": "skchr_blaze2_1",
          "name": "炙手之援",
          "desc": "立即选择攻击范围内生命上限最高的一名干员，每秒对其周围所有敌人造成相当于攻击力46%的法术伤害和相当于法术伤害30%的灼燃损伤，持续20秒",
          "descRaw": "立即选择攻击范围内生命上限最高的一名干员，每秒对其周围所有敌人造成相当于攻击力<@ba.vup>46%</>的法术伤害和相当于法术伤害<@ba.vup>30%</>的<$ba.dt.burning2>灼燃损伤</>，持续20秒",
          "spCost": 22,
          "initSp": 2,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_blaze2_2",
          "iconId": "skchr_blaze2_2",
          "name": "沸血燎原",
          "desc": "攻击范围改变，攻击间隔增大，攻击力+90%，同时攻击3名敌人；攻击时流失5%的生命并在目标所在位置留下灼烧地段：经过的敌人移动速度-50%，每秒受到烛煌攻击力35%的法术伤害和相当于法术伤害30%的灼燃损伤",
          "descRaw": "攻击范围<@ba.vup>改变</>，攻击间隔<@ba.vdown>增大</>，攻击力<@ba.vup>+90%</>，同时攻击<@ba.vup>3</>名敌人；攻击时流失<@ba.vdown>5%</>的生命并在目标所在位置留下灼烧地段：经过的敌人移动速度<@ba.vup>-50%</>，每秒受到烛煌攻击力<@ba.vup>35%</>的法术伤害和相当于法术伤害<@ba.vup>30%</>的<$ba.dt.burning2>灼燃损伤</>",
          "spCost": 42,
          "initSp": 15,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_blaze2_3",
          "iconId": "skchr_blaze2_3",
          "name": "众恶的焚场",
          "desc": "攻击范围改变，攻击力+70%，攻击间隔大幅缩短，攻击变为群体攻击；若目标处于灼燃损伤爆发期间则额外造成攻击力60%的元素伤害\n自身每秒流失最大生命的3%，攻击装有18发弹药，全场有敌人进入灼燃损伤爆发时获得2颗额外弹药，弹药打完后结束（可随时停止技能）",
          "descRaw": "攻击范围<@ba.vup>改变</>，攻击力<@ba.vup>+70%</>，攻击间隔<@ba.vup>大幅缩短</>，攻击变为群体攻击；若目标处于<$ba.dt.burning2>灼燃损伤</>爆发期间则额外造成攻击力<@ba.vup>60%</>的元素伤害\n<@ba.rem>自身每秒流失最大生命的3%，攻击装有18发弹药，全场有敌人进入<$ba.dt.burning2>灼燃损伤</>爆发时获得2颗额外弹药，弹药打完后结束（可随时停止技能）</>",
          "spCost": 37,
          "initSp": 13,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 21
        },
        "2": {
          "stats.atk": 556
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_1040_blaze2",
      "avatar": "char_1040_blaze2",
      "professionShort": "术",
      "subProfession": "本源术师",
      "skillIdx": 2,
      "bench": false
    },
    "char_4145_ulpia": {
      "chessId": "chess_char_5_05_a",
      "baseId": "chess_char_5_05_a",
      "goldenId": "chess_char_5_05_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 90,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_602_cdfend",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 5,
      "charId": "char_4145_ulpia",
      "name": "乌尔比安",
      "appellation": "Ulpianus",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "crusher",
      "subProfessionName": "重剑手",
      "nationId": "egir",
      "garrisonIds": [
        "garrison_12_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_05_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 4947,
        "atk": 1362,
        "def": 0,
        "res": 0,
        "cost": 22,
        "blockCnt": 2,
        "bat": 2.5,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_ulpia_3",
        "iconId": "skchr_ulpia_3",
        "name": "必须开辟的通路",
        "level": 4,
        "desc": "最大生命值+40%，攻击力+200%，立即朝面前扔出一个船锚，撞击到目标或达到最远距离时停止，并对周围所有敌人造成攻击力135%的物理伤害和6秒晕眩。若船锚停留的位置可以部署，乌尔比安会移动到该位置\n可以手动结束技能，技能结束时乌尔比安会返回到初始的位置",
        "descRaw": "最大生命值<@ba.vup>+40%</>，攻击力<@ba.vup>+200%</>，立即朝面前扔出一个船锚，撞击到目标或达到最远距离时停止，并对周围所有敌人造成攻击力<@ba.vup>135%</>的物理伤害和<@ba.vup>6</>秒<$ba.stun>晕眩</>。若船锚停留的位置可以部署，乌尔比安会<$ba.addash>移动</>到该位置\n<@ba.rem>可以手动结束技能，技能结束时乌尔比安会返回到初始的位置</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 29,
        "initSp": 10,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "max_hp": 0.4,
          "atk": 2,
          "atk_scale": 1.35,
          "stun": 6,
          "projectile_range": 1.8
        },
        "bbStr": {},
        "rangeId": "6-1",
        "rangeGrid": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            0,
            4
          ],
          [
            0,
            5
          ],
          [
            0,
            6
          ]
        ],
        "prefabId": "skchr_ulpia_3",
        "trigger": {
          "rule": "CUSTOM_RANGE",
          "rawRule": "CUSTOM_RANGE_SEARCH_ENEMY",
          "customRangeGrid": [
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              0,
              4
            ],
            [
              0,
              5
            ],
            [
              0,
              6
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": "token_10039_ulpia_block"
      },
      "talents": [
        {
          "name": "本性的坚守",
          "desc": "每次受到伤害时，治疗自身100点生命值；生命值低于50%时，治疗效果提升至160点生命值"
        },
        {
          "name": "血脉的哺养",
          "desc": "每次击倒一名敌人时，自身的生命上限提高120，攻击力提高30，最多叠加10（+1）次，其他【深海猎人】干员获得50%的提高效果"
        }
      ],
      "tokens": [
        "token_10039_ulpia_block"
      ],
      "module": {
        "id": "uniequip_002_ulpia",
        "name": "乌尔比安的衣橱",
        "type": "CRU-X",
        "level": 0,
        "icon": "uniequip_002_ulpia"
      },
      "assets": {
        "avatar": "char_4145_ulpia",
        "portrait": "char_4145_ulpia_1",
        "spine": "char_4145_ulpia",
        "skillIcon": "skchr_ulpia_3",
        "subProfIcon": "sub_crusher_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_ulpia_1",
          "iconId": "skchr_ulpia_1",
          "name": "必须促成的接触",
          "desc": "向前方扔出船锚，船锚会把目标地点周围的两名敌人中等力度地拖拽至面前，对其造成相当于攻击力185%的物理伤害",
          "descRaw": "向前方扔出船锚，船锚会把目标地点周围的两名敌人<@ba.vup>中等力度地</>拖拽至面前，对其造成相当于攻击力<@ba.vup>185%</>的物理伤害",
          "spCost": 6,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_ulpia_2",
          "iconId": "skchr_ulpia_2",
          "name": "必须维系的界限",
          "desc": "第一天赋的效果提升至1.6倍，阻挡数+1，生命上限+30%，攻击力+115%\n持续时间无限",
          "descRaw": "第一天赋的效果提升至<@ba.vup>1.6</>倍，阻挡数<@ba.vup>+1</>，生命上限<@ba.vup>+30%</>，攻击力<@ba.vup>+115%</>\n<@ba.rem>持续时间无限</>",
          "spCost": 84,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_ulpia_3",
          "iconId": "skchr_ulpia_3",
          "name": "必须开辟的通路",
          "desc": "最大生命值+40%，攻击力+200%，立即朝面前扔出一个船锚，撞击到目标或达到最远距离时停止，并对周围所有敌人造成攻击力135%的物理伤害和6秒晕眩。若船锚停留的位置可以部署，乌尔比安会移动到该位置\n可以手动结束技能，技能结束时乌尔比安会返回到初始的位置",
          "descRaw": "最大生命值<@ba.vup>+40%</>，攻击力<@ba.vup>+200%</>，立即朝面前扔出一个船锚，撞击到目标或达到最远距离时停止，并对周围所有敌人造成攻击力<@ba.vup>135%</>的物理伤害和<@ba.vup>6</>秒<$ba.stun>晕眩</>。若船锚停留的位置可以部署，乌尔比安会<$ba.addash>移动</>到该位置\n<@ba.rem>可以手动结束技能，技能结束时乌尔比安会返回到初始的位置</>",
          "spCost": 29,
          "initSp": 10,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 24
        },
        "1": {
          "stats.maxHp": 4697
        },
        "2": {
          "stats.atk": 1317
        },
        "4": {
          "stats.cost": 23
        }
      },
      "id": "char_4145_ulpia",
      "avatar": "char_4145_ulpia",
      "professionShort": "近",
      "subProfession": "重剑手",
      "skillIdx": 2,
      "bench": false
    },
    "char_4010_etlchi": {
      "chessId": "chess_char_5_06_a",
      "baseId": "chess_char_5_06_a",
      "goldenId": "chess_char_5_06_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 91,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_609_acguad",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acguad",
        "potRank": 0
      },
      "shopSortId": 6,
      "charId": "char_4010_etlchi",
      "name": "隐德来希",
      "appellation": "Entelechia",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "reaper",
      "subProfessionName": "收割者",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_10_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_06_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2038,
        "atk": 611,
        "def": 388,
        "res": 0,
        "cost": 21,
        "blockCnt": 2,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-3",
      "rangeGrid": [
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_etlchi_3",
        "iconId": "skchr_etlchi_3",
        "name": "灵与欲的惜别",
        "level": 4,
        "desc": "攻击范围扩大，攻击力+80%，攻击速度+100，立刻为攻击范围内最多3名生命值最高的地面敌人召唤对应的心烛，每次攻击对心烛至少造成35%攻击力的伤害，心烛继承原敌人当前60%的生命值，被攻击时原敌人也会流失同等生命值\n心烛只受隐德来希攻击的影响",
        "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+80%</>，攻击速度<@ba.vup>+100</>，立刻为攻击范围内最多<@ba.vup>3</>名生命值最高的地面敌人召唤对应的心烛，每次攻击对心烛至少造成<@ba.vup>35%</>攻击力的伤害，心烛继承原敌人当前<@ba.vdown>60%</>的生命值，被攻击时原敌人也会流失同等生命值\n<@ba.rem>心烛只受隐德来希攻击的影响</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 36,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.8,
          "attack_speed": 100,
          "attack@max_target": 3,
          "attack@max_hp_scale": 0.6,
          "attack@def_scale": 1,
          "attack@magic_resistance_scale": 1
        },
        "bbStr": {},
        "rangeId": "2-5",
        "rangeGrid": [
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ]
        ],
        "prefabId": "skchr_etlchi_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "萃血",
          "desc": "每次攻击敌人时偷取目标75点生命上限（最高1350）并使目标每秒受到250（+50）点法术伤害持续5秒"
        },
        {
          "name": "重盈",
          "desc": "生命值低于25%时，仅一次立刻回复55%（+5%）最大生命值，且自身之后受到的物理伤害降低15%（+5%）"
        },
        {
          "name": null,
          "desc": null
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_etlchi",
        "name": "易枯萎的航船",
        "type": "REA-X",
        "level": 0,
        "icon": "uniequip_002_etlchi"
      },
      "assets": {
        "avatar": "char_4010_etlchi",
        "portrait": "char_4010_etlchi_1",
        "spine": "char_4010_etlchi",
        "skillIcon": "skchr_etlchi_3",
        "subProfIcon": "sub_reaper_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_etlchi_1",
          "iconId": "skchr_etlchi_1",
          "name": "玫影觅迹",
          "desc": "下次攻击的攻击力提升至125%，并连续攻击两次",
          "descRaw": "下次攻击的攻击力提升至<@ba.vup>125%</>，并连续攻击两次",
          "spCost": 3,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_etlchi_2",
          "iconId": "skchr_etlchi_2",
          "name": "绯红壁合",
          "desc": "停止攻击，在自身及1名其他地面单位处召唤血镰，对周围所有敌人进行切割，每0.5秒造成相当于攻击力135%的物理伤害",
          "descRaw": "停止攻击，在自身及<@ba.vup>1</>名其他地面单位处召唤血镰，对周围所有敌人进行切割，每<@ba.vup>0.5</>秒造成相当于攻击力<@ba.vup>135%</>的物理伤害",
          "spCost": 25,
          "initSp": 8,
          "duration": 12,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_etlchi_3",
          "iconId": "skchr_etlchi_3",
          "name": "灵与欲的惜别",
          "desc": "攻击范围扩大，攻击力+80%，攻击速度+100，立刻为攻击范围内最多3名生命值最高的地面敌人召唤对应的心烛，每次攻击对心烛至少造成35%攻击力的伤害，心烛继承原敌人当前60%的生命值，被攻击时原敌人也会流失同等生命值\n心烛只受隐德来希攻击的影响",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+80%</>，攻击速度<@ba.vup>+100</>，立刻为攻击范围内最多<@ba.vup>3</>名生命值最高的地面敌人召唤对应的心烛，每次攻击对心烛至少造成<@ba.vup>35%</>攻击力的伤害，心烛继承原敌人当前<@ba.vdown>60%</>的生命值，被攻击时原敌人也会流失同等生命值\n<@ba.rem>心烛只受隐德来希攻击的影响</>",
          "spCost": 36,
          "initSp": 20,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 23
        },
        "2": {
          "stats.atk": 581
        },
        "4": {
          "stats.cost": 22
        }
      },
      "id": "char_4010_etlchi",
      "avatar": "char_4010_etlchi",
      "professionShort": "近",
      "subProfession": "收割者",
      "skillIdx": 2,
      "bench": false
    },
    "char_350_surtr": {
      "chessId": "chess_char_5_07_a",
      "baseId": "chess_char_5_07_a",
      "goldenId": "chess_char_5_07_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 92,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_601_cguard",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 7,
      "charId": "char_350_surtr",
      "name": "史尔特尔",
      "appellation": "Surtr",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "artsfghter",
      "subProfessionName": "术战者",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_107_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_07_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2216,
        "atk": 572,
        "def": 343,
        "res": 15,
        "cost": 19,
        "blockCnt": 1,
        "bat": 1.25,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "arts",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_surtr_3",
        "iconId": "skchr_surtr_3",
        "name": "黄昏",
        "level": 4,
        "desc": "立即恢复所有生命；攻击力+210%，攻击距离+2，攻击目标数+2，生命上限+5000，逐渐流失生命（60秒后到达最大生命20%/秒）；持续时间无限",
        "descRaw": "立即恢复所有生命；攻击力<@ba.vup>+210%</>，攻击距离<@ba.vup>+2</>，攻击目标数<@ba.vup>+2</>，生命上限<@ba.vup>+5000</>，逐渐流失生命（<@ba.vup>60</>秒后到达最大生命20%/秒）；<@ba.rem>持续时间无限</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 9,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 2.1,
          "ability_range_forward_extend": 2,
          "max_hp": 5000,
          "interval": 0.2,
          "hp_ratio": 0.2,
          "duration": 60,
          "attack@max_target": 3
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_surtr_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "熔火",
          "desc": "无视攻击目标22（+2）法术抗性"
        },
        {
          "name": "余烬",
          "desc": "受到致命伤害时持续使生命值不低于1，9（+1）秒后强制退出战场"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_surtr",
        "name": "萨米的不灭心脏碎片",
        "type": "AFT-X",
        "level": 0,
        "icon": "uniequip_002_surtr"
      },
      "assets": {
        "avatar": "char_350_surtr",
        "portrait": "char_350_surtr_1",
        "spine": "char_350_surtr",
        "skillIcon": "skchr_surtr_3",
        "subProfIcon": "sub_artsfghter_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_surtr_1",
          "iconId": "skchr_surtr_1",
          "name": "烈焰魔剑",
          "desc": "下次攻击的攻击力提升至220%，如果将目标击倒则立即恢复所有技力",
          "descRaw": "下次攻击的攻击力提升至<@ba.vup>220%</>，如果将目标击倒则立即恢复所有技力",
          "spCost": 3,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_surtr_2",
          "iconId": "skchr_surtr_2",
          "name": "熔核巨影",
          "desc": "攻击力+65%，攻击距离+1，攻击目标数+1，仅攻击到一个敌人时对其攻击力提升至140%",
          "descRaw": "攻击力<@ba.vup>+65%</>，攻击距离<@ba.vup>+1</>，攻击目标数<@ba.vup>+1</>，仅攻击到一个敌人时对其攻击力提升至<@ba.vup>140%</>",
          "spCost": 25,
          "initSp": 8,
          "duration": 16,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_surtr_3",
          "iconId": "skchr_surtr_3",
          "name": "黄昏",
          "desc": "立即恢复所有生命；攻击力+210%，攻击距离+2，攻击目标数+2，生命上限+5000，逐渐流失生命（60秒后到达最大生命20%/秒）；持续时间无限",
          "descRaw": "立即恢复所有生命；攻击力<@ba.vup>+210%</>，攻击距离<@ba.vup>+2</>，攻击目标数<@ba.vup>+2</>，生命上限<@ba.vup>+5000</>，逐渐流失生命（<@ba.vup>60</>秒后到达最大生命20%/秒）；<@ba.rem>持续时间无限</>",
          "spCost": 9,
          "initSp": 0,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 21
        },
        "2": {
          "stats.atk": 544
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_350_surtr",
      "avatar": "char_350_surtr",
      "professionShort": "近",
      "subProfession": "术战者",
      "skillIdx": 2,
      "bench": false
    },
    "char_4039_horn": {
      "chessId": "chess_char_5_08_a",
      "baseId": "chess_char_5_08_a",
      "goldenId": "chess_char_5_08_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 93,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_610_acfend",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acfend",
        "potRank": 0
      },
      "shopSortId": 8,
      "charId": "char_4039_horn",
      "name": "号角",
      "appellation": "Horn",
      "rarity": 6,
      "profession": "重装",
      "subProfessionId": "fortress",
      "subProfessionName": "要塞",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_61_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_08_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2200,
        "atk": 806,
        "def": 452,
        "res": 0,
        "cost": 26,
        "blockCnt": 3,
        "bat": 2.8,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "4-6",
      "rangeGrid": [
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          0,
          5
        ],
        [
          -1,
          3
        ],
        [
          -1,
          4
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_horn_3",
        "iconId": "skchr_horn_3",
        "name": "终极防线",
        "level": 4,
        "desc": "攻击力+25%，攻击间隔缩短\n过载：攻击力改为+50%，逐渐流失生命（12秒后到达最大生命12%/秒）该技能可随时主动关闭",
        "descRaw": "攻击力<@ba.vup>+25%</>，攻击间隔<@ba.vup>缩短</>\n<$ba.overdrive>过载</>：攻击力改为<@ba.vup>+50%</>，逐渐流失生命（12秒后到达最大生命12%/秒）<@ba.rem>该技能可随时主动关闭</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 24,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 50,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.25,
          "base_attack_time": -1.2,
          "horn_s_3[overload_start].atk": 0.5,
          "horn_s_3[overload_start].interval": 0.2,
          "horn_s_3[overload_start].hp_ratio": 0.12,
          "horn_s_3[overload_start].damage_duration": 12
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_horn_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "TAKE_DAMAGE",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "军事要塞",
          "desc": "在场时所有重装干员的攻击力+23%（+3%）"
        },
        {
          "name": "血战",
          "desc": "被击倒时不撤退，恢复所有生命且生命上限-50%，攻击速度+21（+3）、防御力+21%（+3%）（单次部署只触发一次）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_horn",
        "name": "“典范之人”",
        "type": "FOR-X",
        "level": 0,
        "icon": "uniequip_002_horn"
      },
      "assets": {
        "avatar": "char_4039_horn",
        "portrait": "char_4039_horn_1",
        "spine": "char_4039_horn",
        "skillIcon": "skchr_horn_3",
        "subProfIcon": "sub_fortress_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_horn_1",
          "iconId": "skchr_horn_1",
          "name": "照明榴弹",
          "desc": "下次攻击时造成190%攻击力的物理伤害，若为远程攻击则溅射范围扩大且在周围产生一个持续6秒的照明区域使敌人隐匿失效\n可充能1次",
          "descRaw": "下次攻击时造成<@ba.vup>190%</>攻击力的物理伤害，若为远程攻击则溅射范围<@ba.vup>扩大</>且在周围产生一个持续<@ba.vup>6</>秒的照明区域使敌人<$ba.invisible>隐匿</>失效\n<@ba.rem>可充能1次</>",
          "spCost": 7,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_horn_2",
          "iconId": "skchr_horn_2",
          "name": "暴风号令",
          "desc": "每次攻击造成160%攻击力的物理溅射伤害\n过载：每次攻击额外造成35%攻击力的法术溅射伤害，主动关闭时发射剩余全部弹药并流失60%生命值\n技能拥有10枚弹药，可随时主动关闭",
          "descRaw": "每次攻击造成<@ba.vup>160%</>攻击力的物理溅射伤害\n<$ba.overdrive>过载</>：每次攻击额外造成<@ba.vup>35%</>攻击力的<@ba.vup>法术</>溅射伤害，主动关闭时发射剩余全部弹药并流失<@ba.vdown>60%</>生命值\n<@ba.rem>技能拥有10枚弹药，可随时主动关闭</>",
          "spCost": 30,
          "initSp": 15,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_horn_3",
          "iconId": "skchr_horn_3",
          "name": "终极防线",
          "desc": "攻击力+25%，攻击间隔缩短\n过载：攻击力改为+50%，逐渐流失生命（12秒后到达最大生命12%/秒）该技能可随时主动关闭",
          "descRaw": "攻击力<@ba.vup>+25%</>，攻击间隔<@ba.vup>缩短</>\n<$ba.overdrive>过载</>：攻击力改为<@ba.vup>+50%</>，逐渐流失生命（12秒后到达最大生命12%/秒）<@ba.rem>该技能可随时主动关闭</>",
          "spCost": 50,
          "initSp": 15,
          "duration": 24,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 28
        },
        "2": {
          "stats.atk": 776
        },
        "4": {
          "stats.cost": 27
        }
      },
      "id": "char_4039_horn",
      "avatar": "char_4039_horn",
      "professionShort": "重",
      "subProfession": "要塞",
      "skillIdx": 2,
      "bench": false
    },
    "char_202_demkni": {
      "chessId": "chess_char_5_11_a",
      "baseId": "chess_char_5_11_a",
      "goldenId": "chess_char_5_11_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 96,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_613_acmedc",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acmedc",
        "potRank": 0
      },
      "shopSortId": 11,
      "charId": "char_202_demkni",
      "name": "塞雷娅",
      "appellation": "Saria",
      "rarity": 6,
      "profession": "重装",
      "subProfessionId": "guardian",
      "subProfessionName": "守护者",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_99_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_11_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2268,
        "atk": 388,
        "def": 514,
        "res": 10,
        "cost": 20,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "0-1",
      "rangeGrid": [
        [
          0,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_demkni_2",
        "iconId": "skchr_demkni_2",
        "name": "药物配置",
        "level": 4,
        "desc": "治疗附近一定范围内的所有友军相当于塞雷娅攻击力95%的生命",
        "descRaw": "治疗附近一定范围内的所有友军相当于塞雷娅攻击力<@ba.vup>95%</>的生命",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 9,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "heal_scale": 0.95
        },
        "bbStr": {},
        "rangeId": "x-2",
        "rangeGrid": [
          [
            2,
            -1
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            1,
            -2
          ],
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            -2
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            -1,
            -2
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -2,
            -1
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ]
        ],
        "prefabId": "skchr_demkni_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "莱茵充能护服",
          "desc": "每在场上停留20秒，攻击力+6%（+1%），防御力+5%（+1%），最多叠加5层"
        },
        {
          "name": "精神回复",
          "desc": "每次回复友方单位生命值时额外回复该单位1点技力"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_demkni",
        "name": "闲置的拳击手套",
        "type": "GUA-X",
        "level": 0,
        "icon": "uniequip_002_demkni"
      },
      "assets": {
        "avatar": "char_202_demkni",
        "portrait": "char_202_demkni_1",
        "spine": "char_202_demkni",
        "skillIcon": "skchr_demkni_2",
        "subProfIcon": "sub_guardian_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_demkni_1",
          "iconId": "skchr_demkni_1",
          "name": "急救",
          "desc": "下一次攻击会为周围血量不足一半的一名友方单位恢复相当于攻击力130%的生命\n可充能1次",
          "descRaw": "下一次攻击会为周围血量不足一半的一名友方单位恢复相当于攻击力<@ba.vup>130%</>的生命\n<@ba.rem>可充能1次</>",
          "spCost": 5,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_demkni_2",
          "iconId": "skchr_demkni_2",
          "name": "药物配置",
          "desc": "治疗附近一定范围内的所有友军相当于塞雷娅攻击力95%的生命",
          "descRaw": "治疗附近一定范围内的所有友军相当于塞雷娅攻击力<@ba.vup>95%</>的生命",
          "spCost": 9,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_demkni_3",
          "iconId": "skchr_demkni_3",
          "name": "钙质化",
          "desc": "附近所有友军每秒回复相当于塞雷娅攻击力15%的生命\n附近所有敌军受到的法术伤害+30%，移动速度-60%",
          "descRaw": "附近所有友军每秒回复相当于塞雷娅攻击力<@ba.vup>15%</>的生命\n附近所有敌军受到的法术伤害<@ba.vup>+30%</>，移动速度<@ba.vup>-60%</>",
          "spCost": 80,
          "initSp": 50,
          "duration": 16,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 22
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.def": 487
        },
        "4": {
          "stats.cost": 21
        }
      },
      "id": "char_202_demkni",
      "avatar": "char_202_demkni",
      "professionShort": "重",
      "subProfession": "守护者",
      "skillIdx": 1,
      "bench": false
    },
    "char_2015_dusk": {
      "chessId": "chess_char_5_12_a",
      "baseId": "chess_char_5_12_a",
      "goldenId": "chess_char_5_12_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 97,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_614_acsupo",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acsupo",
        "potRank": 0
      },
      "shopSortId": 12,
      "charId": "char_2015_dusk",
      "name": "夕",
      "appellation": "Dusk",
      "rarity": 6,
      "profession": "术师",
      "subProfessionId": "splashcaster",
      "subProfessionName": "扩散术师",
      "nationId": "yan",
      "garrisonIds": [
        "garrison_119_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_12_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1404,
        "atk": 805,
        "def": 106,
        "res": 20,
        "cost": 32,
        "blockCnt": 1,
        "bat": 2.9,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-6",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_dusk_1",
        "iconId": "skchr_dusk_1",
        "name": "工笔入化",
        "level": 4,
        "desc": "下一次攻击溅射范围扩大，造成相当于攻击力180%的法术伤害\n可充能2次",
        "descRaw": "下一次攻击溅射范围<@ba.vup>扩大</>，造成相当于攻击力<@ba.vup>180%</>的法术伤害\n<@ba.rem>可充能2次</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 7,
        "initSp": 0,
        "maxChargeTime": 2,
        "increment": 1,
        "bb": {
          "atk_scale": 1.8,
          "cnt": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_dusk_1",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 0,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "化境",
          "desc": "夕与\"小自在\"击杀一名敌人时，夕获得2%攻击力，最多可叠加18（+3）层"
        },
        {
          "name": "点睛",
          "desc": "部署后首次攻击敌人时，在目标位置（可部署地面）召唤一个“小自在”（持续25秒）"
        }
      ],
      "tokens": [
        "token_10015_dusk_drgn"
      ],
      "module": {
        "id": "uniequip_002_dusk",
        "name": "无题长卷",
        "type": "SPC-X",
        "level": 0,
        "icon": "uniequip_002_dusk"
      },
      "assets": {
        "avatar": "char_2015_dusk",
        "portrait": "char_2015_dusk_1",
        "spine": "char_2015_dusk",
        "skillIcon": "skchr_dusk_1",
        "subProfIcon": "sub_splashcaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_dusk_1",
          "iconId": "skchr_dusk_1",
          "name": "工笔入化",
          "desc": "下一次攻击溅射范围扩大，造成相当于攻击力180%的法术伤害\n可充能2次",
          "descRaw": "下一次攻击溅射范围<@ba.vup>扩大</>，造成相当于攻击力<@ba.vup>180%</>的法术伤害\n<@ba.rem>可充能2次</>",
          "spCost": 7,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": true
        },
        {
          "index": 1,
          "id": "skchr_dusk_2",
          "iconId": "skchr_dusk_2",
          "name": "泼墨淋漓",
          "desc": "攻击范围扩大，攻击力+29%，攻击速度+29，攻击范围内的所有敌人且对生命值低于一半的敌人造成的法术伤害提升至120%",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+29%</>，攻击速度<@ba.vup>+29</>，攻击范围内的所有敌人且对生命值低于一半的敌人造成的法术伤害提升至<@ba.vup>120%</>",
          "spCost": 47,
          "initSp": 15,
          "duration": 17,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_dusk_3",
          "iconId": "skchr_dusk_3",
          "name": "写意胜形",
          "desc": "攻击间隔增大，优先攻击未阻挡的敌人，攻击范围与溅射范围扩大，攻击力+70%，每次攻击时在目标位置（可部署地面）召唤/刷新一个\"小自在\"（持续25秒）",
          "descRaw": "攻击间隔<@ba.vdown>增大</>，优先攻击未阻挡的敌人，攻击范围与溅射范围<@ba.vup>扩大</>，攻击力<@ba.vup>+70%</>，每次攻击时在目标位置（可部署地面）召唤/刷新一个<@ba.vup>\"小自在\"</>（持续25秒）",
          "spCost": 107,
          "initSp": 50,
          "duration": 60,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 34
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 771
        },
        "4": {
          "stats.cost": 33
        }
      },
      "id": "char_2015_dusk",
      "avatar": "char_2015_dusk",
      "professionShort": "术",
      "subProfession": "扩散术师",
      "skillIdx": 0,
      "bench": false
    },
    "char_1023_ghost2": {
      "chessId": "chess_char_5_13_a",
      "baseId": "chess_char_5_13_a",
      "goldenId": "chess_char_5_13_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 98,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_609_acguad",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acguad",
        "potRank": 0
      },
      "shopSortId": 13,
      "charId": "char_1023_ghost2",
      "name": "归溟幽灵鲨",
      "appellation": "Specter the Unchained",
      "rarity": 6,
      "profession": "特种",
      "subProfessionId": "dollkeeper",
      "subProfessionName": "傀儡师",
      "nationId": "egir",
      "garrisonIds": [
        "garrison_40_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_13_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2214,
        "atk": 637,
        "def": 267,
        "res": 0,
        "cost": 14,
        "blockCnt": 2,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_ghost2_2",
        "iconId": "skchr_ghost2_2",
        "name": "生存的渴望",
        "level": 4,
        "desc": "攻击力+70%，攻击速度+22，技能持续期间内干员的生命值不会低于1\n技能结束后视为被击倒",
        "descRaw": "攻击力<@ba.vup>+70%</>，攻击速度<@ba.vup>+22</>，技能持续期间内干员的生命值不会低于<@ba.vup>1</>\n<@ba.rem>技能结束后视为被击倒</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 40,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.7,
          "attack_speed": 22
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_ghost2_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "拥抱自我",
          "desc": "<替身>使周围敌人移动速度-40%且每秒造成相当于40%攻击力的法术伤害"
        },
        {
          "name": "阿戈尔的深邃",
          "desc": "编入队伍时，所有【深海猎人】干员的生命值+23%（+3%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_ghost2",
        "name": "“唱片”收藏箱",
        "type": "PUM-X",
        "level": 0,
        "icon": "uniequip_002_ghost2"
      },
      "assets": {
        "avatar": "char_1023_ghost2",
        "portrait": "char_1023_ghost2_1",
        "spine": "char_1023_ghost2",
        "skillIcon": "skchr_ghost2_2",
        "subProfIcon": "sub_dollkeeper_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_ghost2_1",
          "iconId": "skchr_ghost2_1",
          "name": "生存的技巧",
          "desc": "开启时立即与范围内生命上限比例最低的其他我方干员交换生命上限比例，自身攻击力+90%",
          "descRaw": "开启时立即与范围内生命上限比例最低的其他我方干员交换生命上限比例，自身攻击力<@ba.vup>+90%</>",
          "spCost": 40,
          "initSp": 10,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_ghost2_2",
          "iconId": "skchr_ghost2_2",
          "name": "生存的渴望",
          "desc": "攻击力+70%，攻击速度+22，技能持续期间内干员的生命值不会低于1\n技能结束后视为被击倒",
          "descRaw": "攻击力<@ba.vup>+70%</>，攻击速度<@ba.vup>+22</>，技能持续期间内干员的生命值不会低于<@ba.vup>1</>\n<@ba.rem>技能结束后视为被击倒</>",
          "spCost": 40,
          "initSp": 20,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_ghost2_3",
          "iconId": "skchr_ghost2_3",
          "name": "生存的重压",
          "desc": "攻击间隔延长，攻击所有阻挡的敌人，攻击力+170%，生命上限+130%，攻击生命比例高于或等于自身的敌人时额外造成一次攻击力50%的物理伤害，否则自身流失3%生命",
          "descRaw": "攻击间隔<@ba.vdown>延长</>，攻击所有阻挡的敌人，攻击力<@ba.vup>+170%</>，生命上限<@ba.vup>+130%</>，攻击生命比例高于或等于自身的敌人时额外造成一次攻击力<@ba.vup>50%</>的物理伤害，否则自身流失<@ba.vdown>3%</>生命",
          "spCost": 45,
          "initSp": 20,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 16
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 604
        },
        "4": {
          "stats.cost": 15
        }
      },
      "id": "char_1023_ghost2",
      "avatar": "char_1023_ghost2",
      "professionShort": "特",
      "subProfession": "傀儡师",
      "skillIdx": 1,
      "bench": false
    },
    "char_1039_thorn2": {
      "chessId": "chess_char_5_15_a",
      "baseId": "chess_char_5_15_a",
      "goldenId": "chess_char_5_15_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 100,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_603_csnipe",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": null,
        "potRank": 0
      },
      "shopSortId": 15,
      "charId": "char_1039_thorn2",
      "name": "引星棘刺",
      "appellation": "Thorns the Lodestar",
      "rarity": 6,
      "profession": "特种",
      "subProfessionId": "alchemist",
      "subProfessionName": "炼金师",
      "nationId": "iberia",
      "garrisonIds": [
        "garrison_79_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_15_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 926,
        "atk": 405,
        "def": 89,
        "res": 42,
        "cost": 16,
        "blockCnt": 1,
        "bat": 1.5,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-5",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -2,
          0
        ],
        [
          -2,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_thorn2_2",
        "iconId": "skchr_thorn2_2",
        "name": "解构涌潮",
        "level": 4,
        "desc": "投掷一个炼金单元，在12秒内使落点周围的地面敌人受到的治疗和回复效果降低50%，每秒受到相当于攻击力120%的法术伤害，友方单位每秒恢复相当于攻击力12%的生命；炼金单元能在12秒内缓慢沿投掷方向移动且影响范围持续扩大\n可充能1次",
        "descRaw": "投掷一个炼金单元，在<@ba.vup>12</>秒内使落点周围的地面敌人受到的治疗和回复效果降低<@ba.vup>50%</>，每秒受到相当于攻击力<@ba.vup>120%</>的法术伤害，友方单位每秒恢复相当于攻击力<@ba.vup>12%</>的生命；炼金单元能在<@ba.vup>12</>秒内缓慢沿投掷方向移动且影响范围持续扩大\n<@ba.rem>可充能1次</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 27,
        "initSp": 12,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "heal_scale": 0.5,
          "hp_recovery_per_sec": -0.5,
          "hp_recovery_per_sec_by_max_hp_ratio": -0.5,
          "projectile_delay_time": 12,
          "atk_scale": 1.2,
          "value": 0.13,
          "projectile_move_speed": 0.1,
          "projectile_range": 1.1,
          "remaining_time": 12,
          "hp_recovery_per_sec_ratio_chr": 0.12
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_thorn2_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "心相",
          "desc": "攻击力+14%（+4%），攻击范围内存在其他干员时，自身投掷的炼金单元持续时间延长4（+1）秒"
        },
        {
          "name": "视界",
          "desc": "在场时，所有友方单位攻击速度+5，敌方单位攻击速度-5；位于连续6格或以上直线道路的友方和敌方单位受到的效果翻倍"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_thorn2",
        "name": "三面的金币",
        "type": "ALC-X",
        "level": 0,
        "icon": "uniequip_002_thorn2"
      },
      "assets": {
        "avatar": "char_1039_thorn2",
        "portrait": "char_1039_thorn2_1",
        "spine": "char_1039_thorn2",
        "skillIcon": "skchr_thorn2_2",
        "subProfIcon": "sub_alchemist_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_thorn2_1",
          "iconId": "skchr_thorn2_1",
          "name": "度算浪波",
          "desc": "向友方单位投掷一个炼金单元，在6秒内使落点和周围8格的友方单位防御力+60，每秒回复相当于攻击力11%的生命值",
          "descRaw": "向友方单位投掷一个炼金单元，在<@ba.vup>6</>秒内使落点和周围8格的友方单位防御力<@ba.vup>+60</>，每秒回复相当于攻击力<@ba.vup>11%</>的生命值",
          "spCost": 7,
          "initSp": 1,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_thorn2_2",
          "iconId": "skchr_thorn2_2",
          "name": "解构涌潮",
          "desc": "投掷一个炼金单元，在12秒内使落点周围的地面敌人受到的治疗和回复效果降低50%，每秒受到相当于攻击力120%的法术伤害，友方单位每秒恢复相当于攻击力12%的生命；炼金单元能在12秒内缓慢沿投掷方向移动且影响范围持续扩大\n可充能1次",
          "descRaw": "投掷一个炼金单元，在<@ba.vup>12</>秒内使落点周围的地面敌人受到的治疗和回复效果降低<@ba.vup>50%</>，每秒受到相当于攻击力<@ba.vup>120%</>的法术伤害，友方单位每秒恢复相当于攻击力<@ba.vup>12%</>的生命；炼金单元能在<@ba.vup>12</>秒内缓慢沿投掷方向移动且影响范围持续扩大\n<@ba.rem>可充能1次</>",
          "spCost": 27,
          "initSp": 12,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_thorn2_3",
          "iconId": "skchr_thorn2_3",
          "name": "“我的海疆”",
          "desc": "被动效果：攻击范围扩大\n主动开启：向阻挡数最低的3名干员投掷炼金单元，在19秒内使围绕区域内的敌人攻击力-12%，防御力-32%，法术抗性-32%（不叠加），每秒受到攻击力120%的法术伤害，效果逐渐提升（15秒后达到最大，攻击力-21%，防御力-41%，法术抗性-41%，每秒伤害300%）",
          "descRaw": "被动效果：攻击范围扩大\n主动开启：向阻挡数最低的<@ba.vup>3</>名干员投掷炼金单元，在<@ba.vup>19</>秒内使围绕区域内的敌人攻击力<@ba.vup>-12%</>，防御力<@ba.vup>-32%</>，法术抗性<@ba.vup>-32%</>（不叠加），每秒受到攻击力<@ba.vup>120%</>的法术伤害，效果逐渐提升（<@ba.vup>15</>秒后达到最大，攻击力<@ba.vup>-21%</>，防御力<@ba.vup>-41%</>，法术抗性<@ba.vup>-41%</>，每秒伤害<@ba.vup>300%</>）",
          "spCost": 67,
          "initSp": 36,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 18
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.res": 30
        },
        "4": {
          "stats.cost": 17
        }
      },
      "id": "char_1039_thorn2",
      "avatar": "char_1039_thorn2",
      "professionShort": "特",
      "subProfession": "炼金师",
      "skillIdx": 1,
      "bench": false
    },
    "char_264_f12yin": {
      "chessId": "chess_char_5_17_a",
      "baseId": "chess_char_5_17_a",
      "goldenId": "chess_char_5_17_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 102,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_615_acspec",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acspec",
        "potRank": 0
      },
      "shopSortId": 17,
      "charId": "char_264_f12yin",
      "name": "山",
      "appellation": "Mountain",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "fighter",
      "subProfessionName": "斗士",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_34_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_17_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2250,
        "atk": 499,
        "def": 299,
        "res": 0,
        "cost": 9,
        "blockCnt": 1,
        "bat": 0.78,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_f12yin_2",
        "iconId": "skchr_f12yin_2",
        "name": "横扫架势",
        "level": 4,
        "desc": "可以在下列状态和初始状态间切换：\n防御力-30%，攻击距离缩短，攻击力+35%，阻挡数+1，同时攻击阻挡的所有敌人，每秒恢复最大生命的4.0%",
        "descRaw": "<@ba.rem>可以在下列状态和初始状态间切换：</>\n防御力<@ba.vdown>-30%</>，攻击距离<@ba.vdown>缩短</>，攻击力<@ba.vup>+35%</>，阻挡数<@ba.vup>+1</>，同时攻击阻挡的所有敌人，每秒恢复最大生命的<@ba.vup>4.0%</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 0,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 9,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.35,
          "def": -0.3,
          "hp_recovery_per_sec_by_max_hp_ratio": 0.04,
          "block_cnt": 1
        },
        "bbStr": {},
        "rangeId": "0-1",
        "rangeGrid": [
          [
            0,
            0
          ]
        ],
        "prefabId": "skchr_f12yin_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "巨力重拳",
          "desc": "攻击时有20%的几率攻击力提升至165%（+5%），并在3秒内使目标攻击力降低15%（不可叠加）"
        },
        {
          "name": "强壮肉体",
          "desc": "防御力+10%，获得15%的物理闪避"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_f12yin",
        "name": "“自由的代价”",
        "type": "FGT-Y",
        "level": 0,
        "icon": "uniequip_002_f12yin"
      },
      "assets": {
        "avatar": "char_264_f12yin",
        "portrait": "char_264_f12yin_1",
        "spine": "char_264_f12yin",
        "skillIcon": "skchr_f12yin_2",
        "subProfIcon": "sub_fighter_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_f12yin_1",
          "iconId": "skchr_f12yin_1",
          "name": "左勾扫拳",
          "desc": "下次攻击的攻击力提升至170%，额外攻击一个目标",
          "descRaw": "下次攻击的攻击力提升至<@ba.vup>170%</>，额外攻击一个目标",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_f12yin_2",
          "iconId": "skchr_f12yin_2",
          "name": "横扫架势",
          "desc": "可以在下列状态和初始状态间切换：\n防御力-30%，攻击距离缩短，攻击力+35%，阻挡数+1，同时攻击阻挡的所有敌人，每秒恢复最大生命的4.0%",
          "descRaw": "<@ba.rem>可以在下列状态和初始状态间切换：</>\n防御力<@ba.vdown>-30%</>，攻击距离<@ba.vdown>缩短</>，攻击力<@ba.vup>+35%</>，阻挡数<@ba.vup>+1</>，同时攻击阻挡的所有敌人，每秒恢复最大生命的<@ba.vup>4.0%</>",
          "spCost": 9,
          "initSp": 0,
          "duration": 0,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_f12yin_3",
          "iconId": "skchr_f12yin_3",
          "name": "震地碎岩击",
          "desc": "攻击间隔增大，攻击力+55%，攻击变为2连击，第一天赋的发动几率提升至48%，每次攻击周围最多3个敌人并将其中等力度地推动",
          "descRaw": "攻击间隔<@ba.vdown>增大</>，攻击力<@ba.vup>+55%</>，攻击变为<@ba.vup>2</>连击，第一天赋的发动几率提升至<@ba.vup>48%</>，每次攻击周围最多<@ba.vup>3</>个敌人并将其<@ba.vup>中等力度地</>推动",
          "spCost": 47,
          "initSp": 25,
          "duration": 26,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 11
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 475
        },
        "4": {
          "stats.cost": 10
        }
      },
      "id": "char_264_f12yin",
      "avatar": "char_264_f12yin",
      "professionShort": "近",
      "subProfession": "斗士",
      "skillIdx": 1,
      "bench": false
    },
    "char_4064_mlynar": {
      "chessId": "chess_char_5_19_a",
      "baseId": "chess_char_5_19_a",
      "goldenId": "chess_char_5_19_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 104,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_617_sharp2",
        "tmplId": null,
        "skillIndex": 0,
        "uniEquipId": "uniequip_002_sharp2",
        "potRank": 0
      },
      "shopSortId": 19,
      "charId": "char_4064_mlynar",
      "name": "玛恩纳",
      "appellation": "Młynar",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "librator",
      "subProfessionName": "解放者",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_115_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_19_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 3241,
        "atk": 326,
        "def": 426,
        "res": 15,
        "cost": 10,
        "blockCnt": 3,
        "bat": 1.2,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-2",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          -1,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "none",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_mlynar_3",
        "iconId": "skchr_mlynar_3",
        "name": "未照耀的荣光",
        "level": 4,
        "desc": "攻击范围扩大，特性提升至2倍（每击倒一名敌人时特性倍率-10%），攻击对5个目标造成相当于125%攻击力的物理伤害。范围内所有敌人受到卡西米尔干员攻击时额外附带玛恩纳10%攻击力的真实伤害",
        "descRaw": "攻击范围<@ba.vup>扩大</>，特性提升至<@ba.vup>2</>倍（每击倒一名敌人时特性倍率<@ba.vup>-10%</>），攻击对<@ba.vup>5</>个目标造成相当于<@ba.vup>125%</>攻击力的物理伤害。范围内所有敌人受到卡西米尔干员攻击时额外附带玛恩纳<@ba.vup>10%</>攻击力的<@ba.vup>真实</>伤害",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 26,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 50,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@atk_scale": 1.25,
          "atk_scale": 0.1,
          "attack@max_target": 5,
          "trait_up": 2,
          "per_kill_reduce": -0.1
        },
        "bbStr": {},
        "rangeId": "3-18",
        "rangeGrid": [
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ]
        ],
        "prefabId": "skchr_mlynar_3",
        "trigger": {
          "rule": "CUSTOM_RANGE",
          "rawRule": "CUSTOM_RANGE_SEARCH_ENEMY",
          "customRangeGrid": [
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -2,
              0
            ],
            [
              -2,
              1
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "游侠",
          "desc": "攻击敌人时攻击力提升至113%（+3%）。周围存在3名及以上敌人时攻击力提升至118%（+3%）且受到的伤害减少15%"
        },
        {
          "name": "无动于衷",
          "desc": "在场时，自身更容易受到攻击，所有卡西米尔干员被攻击时反弹相当于玛恩纳攻击力18%（+3%）的真实伤害"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_mlynar",
        "name": "“鞘中人”",
        "type": "LIB-X",
        "level": 0,
        "icon": "uniequip_002_mlynar"
      },
      "assets": {
        "avatar": "char_4064_mlynar",
        "portrait": "char_4064_mlynar_1",
        "spine": "char_4064_mlynar",
        "skillIcon": "skchr_mlynar_3",
        "subProfIcon": "sub_librator_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_mlynar_1",
          "iconId": "skchr_mlynar_1",
          "name": "未声张的怒火",
          "desc": "攻击造成相当于145%攻击力的物理伤害，防御力+30%",
          "descRaw": "攻击造成相当于<@ba.vup>145%</>攻击力的物理伤害，防御力<@ba.vup>+30%</>",
          "spCost": 35,
          "initSp": 15,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_mlynar_2",
          "iconId": "skchr_mlynar_2",
          "name": "未宽解的悲哀",
          "desc": "攻击间隔延长，攻击范围扩大，攻击造成相当于130%攻击力的二连击。\n技能期间若击倒敌人，技能结束时特性效果不重置，可主动关闭（期间可随时停止技能）",
          "descRaw": "攻击间隔<@ba.vdown>延长</>，攻击范围<@ba.vup>扩大</>，攻击造成相当于<@ba.vup>130%</>攻击力的<@ba.vup>二</>连击。\n<@ba.rem>技能期间若击倒敌人，技能结束时特性效果不重置，可主动关闭（期间可随时停止技能）</>",
          "spCost": 35,
          "initSp": 10,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_mlynar_3",
          "iconId": "skchr_mlynar_3",
          "name": "未照耀的荣光",
          "desc": "攻击范围扩大，特性提升至2倍（每击倒一名敌人时特性倍率-10%），攻击对5个目标造成相当于125%攻击力的物理伤害。范围内所有敌人受到卡西米尔干员攻击时额外附带玛恩纳10%攻击力的真实伤害",
          "descRaw": "攻击范围<@ba.vup>扩大</>，特性提升至<@ba.vup>2</>倍（每击倒一名敌人时特性倍率<@ba.vup>-10%</>），攻击对<@ba.vup>5</>个目标造成相当于<@ba.vup>125%</>攻击力的物理伤害。范围内所有敌人受到卡西米尔干员攻击时额外附带玛恩纳<@ba.vup>10%</>攻击力的<@ba.vup>真实</>伤害",
          "spCost": 50,
          "initSp": 15,
          "duration": 26,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 12
        },
        "2": {
          "stats.atk": 301
        },
        "4": {
          "stats.cost": 11
        }
      },
      "id": "char_4064_mlynar",
      "avatar": "char_4064_mlynar",
      "professionShort": "近",
      "subProfession": "解放者",
      "skillIdx": 2,
      "bench": false
    },
    "char_291_aglina": {
      "chessId": "chess_char_5_20_a",
      "baseId": "chess_char_5_20_a",
      "goldenId": "chess_char_5_20_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 105,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_614_acsupo",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acsupo",
        "potRank": 0
      },
      "shopSortId": 20,
      "charId": "char_291_aglina",
      "name": "安洁莉娜",
      "appellation": "Angelina",
      "rarity": 6,
      "profession": "辅助",
      "subProfessionId": "slower",
      "subProfessionName": "凝滞师",
      "nationId": "siracusa",
      "garrisonIds": [
        "garrison_147_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_20_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1108,
        "atk": 474,
        "def": 100,
        "res": 25,
        "cost": 14,
        "blockCnt": 1,
        "bat": 1.9,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_aglina_3",
        "iconId": "skchr_aglina_3",
        "name": "秘杖·反重力模式",
        "level": 4,
        "desc": "全场所有敌人失重，攻击范围扩大，攻击力+90%，可以攻击4个敌人\n技能未开启时无法普通攻击",
        "descRaw": "全场所有敌人<$ba.weightless>失重</>，攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+90%</>，可以攻击<@ba.vup>4</>个敌人\n<@ba.rem>技能未开启时无法普通攻击</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 14,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 25,
        "initSp": 3,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.9,
          "attack@max_target": 4
        },
        "bbStr": {},
        "rangeId": "y-4",
        "rangeGrid": [
          [
            2,
            -1
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -2,
            -1
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ]
        ],
        "prefabId": "skchr_aglina_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "SEARCH",
          "customRangeGrid": [
            [
              2,
              -1
            ],
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              1,
              -1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              -1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              -1
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -2,
              -1
            ],
            [
              -2,
              0
            ],
            [
              -2,
              1
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "加速力场",
          "desc": "全场友方单位攻速+8（+1）"
        },
        {
          "name": "兼职工作",
          "desc": "技能未开启时，全场友方单位每秒回复25（+5）点生命"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_aglina",
        "name": "重力校准模块",
        "type": "DEC-Y",
        "level": 0,
        "icon": "uniequip_002_aglina"
      },
      "assets": {
        "avatar": "char_291_aglina",
        "portrait": "char_291_aglina_1",
        "spine": "char_291_aglina",
        "skillIcon": "skchr_aglina_3",
        "subProfIcon": "sub_slower_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_aglina_1",
          "iconId": "skchr_aglina_1",
          "name": "秘杖·速充模式",
          "desc": "攻击力+60%\n技能自动开启",
          "descRaw": "攻击力<@ba.vup>+60%</>\n<@ba.rem>技能自动开启</>",
          "spCost": 10,
          "initSp": 0,
          "duration": 25,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_aglina_2",
          "iconId": "skchr_aglina_2",
          "name": "秘杖·微粒模式",
          "desc": "攻击间隔极大幅度缩短，但每次攻击只能造成相当于攻击力35%的法术伤害\n技能未开启时无法普通攻击",
          "descRaw": "攻击间隔<@ba.vup>极大幅度缩短</>，但每次攻击只能造成相当于攻击力<@ba.vdown>35%的法术伤害</>\n<@ba.rem>技能未开启时无法普通攻击</>",
          "spCost": 20,
          "initSp": 3,
          "duration": 23,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_aglina_3",
          "iconId": "skchr_aglina_3",
          "name": "秘杖·反重力模式",
          "desc": "全场所有敌人失重，攻击范围扩大，攻击力+90%，可以攻击4个敌人\n技能未开启时无法普通攻击",
          "descRaw": "全场所有敌人<$ba.weightless>失重</>，攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+90%</>，可以攻击<@ba.vup>4</>个敌人\n<@ba.rem>技能未开启时无法普通攻击</>",
          "spCost": 25,
          "initSp": 3,
          "duration": 14,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 16
        },
        "2": {
          "stats.atk": 449
        },
        "3": {
          "stats.cost": 15
        }
      },
      "id": "char_291_aglina",
      "avatar": "char_291_aglina",
      "professionShort": "辅",
      "subProfession": "凝滞师",
      "skillIdx": 2,
      "bench": false
    },
    "char_341_sntlla": {
      "chessId": "chess_char_5_21_a",
      "baseId": "chess_char_5_21_a",
      "goldenId": "chess_char_5_21_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 106,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_341_sntlla",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_sntlla",
        "potRank": 0
      },
      "shopSortId": 21,
      "charId": "char_341_sntlla",
      "name": "寒檀",
      "appellation": "Santalla",
      "rarity": 5,
      "profession": "术师",
      "subProfessionId": "splashcaster",
      "subProfessionName": "扩散术师",
      "nationId": "sami",
      "garrisonIds": [
        "garrison_141_a",
        "garrison_142_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_21_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1279,
        "atk": 678,
        "def": 103,
        "res": 20,
        "cost": 31,
        "blockCnt": 1,
        "bat": 2.9,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-6",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_sntlla_2",
        "iconId": "skchr_sntlla_2",
        "name": "“女巫之泪”",
        "level": 4,
        "desc": "攻击范围扩大，攻击间隔超大幅度缩短，攻击变为向攻击范围内的随机地块召唤冰凌，冰凌落地后对周围所有敌人造成1秒寒冷和相当于寒檀攻击力65%的法术伤害",
        "descRaw": "攻击范围<@ba.vup>扩大</>，攻击间隔<@ba.vup>超大幅度缩短</>，攻击变为向攻击范围内的随机地块召唤冰凌，冰凌落地后对周围所有敌人造成<@ba.vup>1</>秒<$ba.cold>寒冷</>和相当于寒檀攻击力<@ba.vup>65%</>的法术伤害",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 47,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "base_attack_time": -2.4,
          "attack@cold": 1,
          "attack@atk_scale": 0.65
        },
        "bbStr": {},
        "rangeId": "3-3",
        "rangeGrid": [
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -1,
            3
          ]
        ],
        "prefabId": "skchr_sntlla_2",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -1,
              3
            ]
          ]
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "生于冰寒",
          "desc": "在战场停留20秒后，攻击力+18%（+3%）且获得抵抗"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_sntlla",
        "name": "“冰焰”",
        "type": "SPC-Y",
        "level": 0,
        "icon": "uniequip_002_sntlla"
      },
      "assets": {
        "avatar": "char_341_sntlla",
        "portrait": "char_341_sntlla_1",
        "spine": "char_341_sntlla",
        "skillIcon": "skchr_sntlla_2",
        "subProfIcon": "sub_splashcaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_quickattack[3]",
          "iconId": "skcom_quickattack[3]",
          "name": "迅捷打击·γ型",
          "desc": "攻击力+27%，攻击速度+25",
          "descRaw": "攻击力<@ba.vup>+27%</>，攻击速度<@ba.vup>+25</>",
          "spCost": 42,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_sntlla_2",
          "iconId": "skchr_sntlla_2",
          "name": "“女巫之泪”",
          "desc": "攻击范围扩大，攻击间隔超大幅度缩短，攻击变为向攻击范围内的随机地块召唤冰凌，冰凌落地后对周围所有敌人造成1秒寒冷和相当于寒檀攻击力65%的法术伤害",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击间隔<@ba.vup>超大幅度缩短</>，攻击变为向攻击范围内的随机地块召唤冰凌，冰凌落地后对周围所有敌人造成<@ba.vup>1</>秒<$ba.cold>寒冷</>和相当于寒檀攻击力<@ba.vup>65%</>的法术伤害",
          "spCost": 47,
          "initSp": 20,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 33
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 646
        },
        "4": {
          "stats.cost": 32
        }
      },
      "id": "char_341_sntlla",
      "avatar": "char_341_sntlla",
      "professionShort": "术",
      "subProfession": "扩散术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4146_nymph": {
      "chessId": "chess_char_5_22_a",
      "baseId": "chess_char_5_22_a",
      "goldenId": "chess_char_5_22_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 107,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_611_acnipe",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acnipe",
        "potRank": 0
      },
      "shopSortId": -1,
      "charId": "char_4146_nymph",
      "name": "妮芙",
      "appellation": "Nymph",
      "rarity": 6,
      "profession": "术师",
      "subProfessionId": "primcaster",
      "subProfessionName": "本源术师",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_56_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_22_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1237,
        "atk": 577,
        "def": 107,
        "res": 15,
        "cost": 19,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-1",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_nymph_2",
        "iconId": "skchr_nymph_2",
        "name": "怵然震爆",
        "level": 4,
        "desc": "对敌人造成一次相当于攻击力270%的法术伤害、使其恐惧4秒，并对目标周围造成一次等额法术溅射伤害，均附带造成法术伤害18%的凋亡损伤；若攻击到的单位处于凋亡损伤爆发期间，使第一天赋造成的伤害效果提高至攻击力的70%\n可充能1次",
        "descRaw": "对敌人造成一次相当于攻击力<@ba.vup>270%</>的法术伤害、使其<$ba.fear>恐惧</><@ba.vup>4</>秒，并对目标周围造成一次等额法术溅射伤害，均附带造成法术伤害<@ba.vup>18%</>的<$ba.dt.apoptosis2>凋亡损伤</>；若攻击到的单位处于凋亡损伤爆发期间，使第一天赋造成的伤害效果提高至攻击力的<@ba.vup>70%</>\n<@ba.rem>可充能1次</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 17,
        "initSp": 3,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 2.7,
          "ep_damage_ratio": 0.18,
          "fear": 4,
          "element_atk_scale": 0.7,
          "projectile_range": 1.5,
          "ct": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_nymph_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "失魂",
          "desc": "攻击处于凋亡损伤爆发期间的敌人时使其每秒受到相当于攻击力40%的元素伤害，持续至凋亡损伤爆发结束"
        },
        {
          "name": "窥心钥",
          "desc": "每当自身攻击范围内敌人凋亡损伤爆发，攻击力+2%，最多可叠加12（+2）层"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_nymph",
        "name": "心声",
        "type": "PRI-X",
        "level": 0,
        "icon": "uniequip_002_nymph"
      },
      "assets": {
        "avatar": "char_4146_nymph",
        "portrait": "char_4146_nymph_1",
        "spine": "char_4146_nymph",
        "skillIcon": "skchr_nymph_2",
        "subProfIcon": "sub_primcaster_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_nymph_1",
          "iconId": "skchr_nymph_1",
          "name": "笞心击",
          "desc": "攻击力+60%，攻击附带造成法术伤害10%的凋亡损伤，若目标处于凋亡损伤爆发期间则对其额外造成相当于攻击力30%的元素伤害",
          "descRaw": "攻击力<@ba.vup>+60%</>，攻击附带造成法术伤害<@ba.vup>10%</>的<$ba.dt.apoptosis2>凋亡损伤</>，若目标处于<$ba.dt.apoptosis2>凋亡损伤</>爆发期间则对其额外造成相当于攻击力<@ba.vup>30%</>的元素伤害",
          "spCost": 36,
          "initSp": 5,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_nymph_2",
          "iconId": "skchr_nymph_2",
          "name": "怵然震爆",
          "desc": "对敌人造成一次相当于攻击力270%的法术伤害、使其恐惧4秒，并对目标周围造成一次等额法术溅射伤害，均附带造成法术伤害18%的凋亡损伤；若攻击到的单位处于凋亡损伤爆发期间，使第一天赋造成的伤害效果提高至攻击力的70%\n可充能1次",
          "descRaw": "对敌人造成一次相当于攻击力<@ba.vup>270%</>的法术伤害、使其<$ba.fear>恐惧</><@ba.vup>4</>秒，并对目标周围造成一次等额法术溅射伤害，均附带造成法术伤害<@ba.vup>18%</>的<$ba.dt.apoptosis2>凋亡损伤</>；若攻击到的单位处于凋亡损伤爆发期间，使第一天赋造成的伤害效果提高至攻击力的<@ba.vup>70%</>\n<@ba.rem>可充能1次</>",
          "spCost": 17,
          "initSp": 3,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_nymph_3",
          "iconId": "skchr_nymph_3",
          "name": "心防溃决",
          "desc": "攻击范围扩大，攻击力+140%，攻击速度+30，同时攻击2个目标，若目标处于凋亡损伤爆发期间，攻击造成元素伤害",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+140%</>，攻击速度<@ba.vup>+30</>，同时攻击<@ba.vup>2</>个目标，若目标处于<$ba.dt.apoptosis2>凋亡损伤</>爆发期间，攻击造成元素伤害",
          "spCost": 55,
          "initSp": 19,
          "duration": 27,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 21
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 550
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_4146_nymph",
      "avatar": "char_4146_nymph",
      "professionShort": "术",
      "subProfession": "本源术师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4196_reckpr": {
      "chessId": "chess_char_5_23_a",
      "baseId": "chess_char_5_23_a",
      "goldenId": "chess_char_5_23_b",
      "isGolden": false,
      "tier": 5,
      "identifier": 108,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4196_reckpr",
        "tmplId": null,
        "skillIndex": 1,
        "uniEquipId": "uniequip_002_reckpr",
        "potRank": 0
      },
      "shopSortId": 23,
      "charId": "char_4196_reckpr",
      "name": "录武官",
      "appellation": "Record Keeper",
      "rarity": 5,
      "profession": "医疗",
      "subProfessionId": "physician",
      "subProfessionName": "医师",
      "nationId": "yan",
      "garrisonIds": [
        "garrison_156_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_5_23_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1422,
        "atk": 443,
        "def": 99,
        "res": 0,
        "cost": 17,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_reckpr_2",
        "iconId": "skchr_reckpr_2",
        "name": "一点关窍",
        "level": 4,
        "desc": "攻击力+45%，治疗干员后为其施加一个增益，使其在10秒内每次受到伤害时恢复80点生命",
        "descRaw": "攻击力<@ba.vup>+45%</>，治疗干员后为其施加一个增益，使其在10秒内每次受到伤害时恢复<@ba.vup>80</>点生命",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 42,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@buff_duration": 10,
          "attack@fixed_heal_value": 80,
          "atk": 0.45
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_reckpr_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "学成于聚",
          "desc": "攻击范围内的干员开启技能时自身回复1点技力，且攻击速度+16，持续10（+2）秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_reckpr",
        "name": "未完成的录武簿",
        "type": "PHY-X",
        "level": 0,
        "icon": "uniequip_002_reckpr"
      },
      "assets": {
        "avatar": "char_4196_reckpr",
        "portrait": "char_4196_reckpr_1",
        "spine": "char_4196_reckpr",
        "skillIcon": "skchr_reckpr_2",
        "subProfIcon": "sub_physician_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_reckpr_1",
          "iconId": "skchr_reckpr_1",
          "name": "触类旁通",
          "desc": "下次治疗可以恢复相当于攻击力115%的生命，并额外治疗一个目标\n可充能2次",
          "descRaw": "下次治疗可以恢复相当于攻击力<@ba.vup>115%</>的生命，并额外治疗一个目标\n<@ba.rem>可充能2次</>",
          "spCost": 9,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_reckpr_2",
          "iconId": "skchr_reckpr_2",
          "name": "一点关窍",
          "desc": "攻击力+45%，治疗干员后为其施加一个增益，使其在10秒内每次受到伤害时恢复80点生命",
          "descRaw": "攻击力<@ba.vup>+45%</>，治疗干员后为其施加一个增益，使其在10秒内每次受到伤害时恢复<@ba.vup>80</>点生命",
          "spCost": 42,
          "initSp": 20,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 416
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_4196_reckpr",
      "avatar": "char_4196_reckpr",
      "professionShort": "医",
      "subProfession": "医师",
      "skillIdx": 1,
      "bench": false
    },
    "char_4193_lemuen": {
      "chessId": "chess_char_6_01_a",
      "baseId": "chess_char_6_01_a",
      "goldenId": "chess_char_6_01_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 109,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_611_acnipe",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acnipe",
        "potRank": 0
      },
      "shopSortId": 1,
      "charId": "char_4193_lemuen",
      "name": "蕾缪安",
      "appellation": "Lemuen",
      "rarity": 6,
      "profession": "狙击",
      "subProfessionId": "longrange",
      "subProfessionName": "神射手",
      "nationId": "laterano",
      "garrisonIds": [
        "garrison_24_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_01_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1158,
        "atk": 1030,
        "def": 143,
        "res": 0,
        "cost": 20,
        "blockCnt": 1,
        "bat": 2.7,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-9",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ],
        [
          -2,
          0
        ],
        [
          -2,
          1
        ],
        [
          -2,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": "lowestDef",
      "skill": {
        "skillId": "skchr_lemuen_3",
        "iconId": "skchr_lemuen_3",
        "name": "礼炮·强制追思",
        "level": 4,
        "desc": "停止攻击，每0.5秒消耗1发子弹依次锁定敌人，技能结束时对每名被锁定的敌人所在位置进行轰炸，轰炸造成攻击力240%的范围物理伤害（中心伤害提升至攻击力的360%）\n攻击装有5发弹药，打完后结束（可随时停止技能）",
        "descRaw": "停止攻击，每<@ba.vup>0.5</>秒消耗1发子弹依次锁定敌人，技能结束时对每名被锁定的敌人所在位置进行轰炸，轰炸造成攻击力<@ba.vup>240%</>的范围物理伤害（中心伤害提升至攻击力的<@ba.vup>360%</>）\n<@ba.rem>攻击装有5发弹药，打完后结束（可随时停止技能）</>",
        "skillType": "MANUAL",
        "durationType": "AMMO",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 45,
        "initSp": 26,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@trigger_time": 5,
          "attack@projectile_range": 1.5,
          "attack@aim_interval": 0.5,
          "attack@emit_offset": 0.2,
          "attack@proj_atk_scale_1": 3.6,
          "attack@dist_1": 0.8,
          "attack@proj_atk_scale_2": 2.4,
          "attack@dist_2": 1.5,
          "attack@limited_hit_time": 1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_lemuen_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "跨境追缉许可",
          "desc": "精英或领袖敌人在拉特兰干员的攻击范围内停留超过6（-2）秒后被通缉，受到拉特兰干员的攻击时伤害提升18%（+3%），蕾缪安可以攻击到所有被通缉的目标"
        },
        {
          "name": "逃犯引渡手续",
          "desc": "在场20秒后，攻击力+10%，自身弹药类技能弹药上限+1"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_lemuen",
        "name": "“弹匣与花窗”",
        "type": "DEA-Y",
        "level": 0,
        "icon": "uniequip_002_lemuen"
      },
      "assets": {
        "avatar": "char_4193_lemuen",
        "portrait": "char_4193_lemuen_1",
        "spine": "char_4193_lemuen",
        "skillIcon": "skchr_lemuen_3",
        "subProfIcon": "sub_longrange_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_lemuen_1",
          "iconId": "skchr_lemuen_1",
          "name": "重逢问候",
          "desc": "攻击时攻击力提升至165%，额外攻击1名敌人\n攻击装有5发弹药，打完后结束（可随时停止技能）",
          "descRaw": "攻击时攻击力提升至<@ba.vup>165%</>，额外攻击1名敌人\n<@ba.rem>攻击装有5发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 11,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_lemuen_2",
          "iconId": "skchr_lemuen_2",
          "name": "归乡邀约",
          "desc": "攻击速度+50，攻击力+40%，场上有被通缉敌人时会消耗子弹对其瞄准最多2.5秒后进行无视闪避的狙击（期间攻击力从180%逐渐提升至355%，攻击力高于敌人剩余生命值和防御力之和时停止瞄准并立刻攻击）\n攻击装有6发弹药，打完后结束（可随时停止技能）",
          "descRaw": "攻击速度<@ba.vup>+50</>，攻击力<@ba.vup>+40%</>，场上有被通缉敌人时会消耗子弹对其瞄准最多<@ba.vup>2.5</>秒后进行无视闪避的狙击（期间攻击力从<@ba.vup>180%</>逐渐提升至<@ba.vup>355%</>，攻击力高于敌人剩余生命值和防御力之和时停止瞄准并立刻攻击）\n<@ba.rem>攻击装有6发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 37,
          "initSp": 8,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_lemuen_3",
          "iconId": "skchr_lemuen_3",
          "name": "礼炮·强制追思",
          "desc": "停止攻击，每0.5秒消耗1发子弹依次锁定敌人，技能结束时对每名被锁定的敌人所在位置进行轰炸，轰炸造成攻击力240%的范围物理伤害（中心伤害提升至攻击力的360%）\n攻击装有5发弹药，打完后结束（可随时停止技能）",
          "descRaw": "停止攻击，每<@ba.vup>0.5</>秒消耗1发子弹依次锁定敌人，技能结束时对每名被锁定的敌人所在位置进行轰炸，轰炸造成攻击力<@ba.vup>240%</>的范围物理伤害（中心伤害提升至攻击力的<@ba.vup>360%</>）\n<@ba.rem>攻击装有5发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 45,
          "initSp": 26,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 22
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 984
        },
        "4": {
          "stats.cost": 21
        }
      },
      "id": "char_4193_lemuen",
      "avatar": "char_4193_lemuen",
      "professionShort": "狙",
      "subProfession": "神射手",
      "skillIdx": 2,
      "bench": false
    },
    "char_2026_yu": {
      "chessId": "chess_char_6_03_a",
      "baseId": "chess_char_6_03_a",
      "goldenId": "chess_char_6_03_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 111,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_610_acfend",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acfend",
        "potRank": 0
      },
      "shopSortId": 3,
      "charId": "char_2026_yu",
      "name": "余",
      "appellation": "Yu",
      "rarity": 6,
      "profession": "重装",
      "subProfessionId": "primprotector",
      "subProfessionName": "本源铁卫",
      "nationId": "yan",
      "garrisonIds": [
        "garrison_37_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_03_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2703,
        "atk": 548,
        "def": 444,
        "res": 10,
        "cost": 24,
        "blockCnt": 3,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "0-1",
      "rangeGrid": [
        [
          0,
          0
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_yu_3",
        "iconId": "skchr_yu_3",
        "name": "灶里乾坤",
        "level": 4,
        "desc": "生命上限+50%，攻击力+50%，防御力+50%，将第二天赋效果赋予全场所有干员；生成一面跨越整个战场的火墙，其他友方穿过火墙造成法术伤害时附带相当于余攻击力6%的灼燃损伤，敌方子弹穿过火墙时有10%几率被清除",
        "descRaw": "生命上限<@ba.vup>+50%</>，攻击力<@ba.vup>+50%</>，防御力<@ba.vup>+50%</>，将第二天赋效果赋予全场所有干员；生成一面跨越整个战场的火墙，其他友方穿过火墙造成法术伤害时附带相当于余攻击力<@ba.vup>6%</>的<$ba.dt.burning2>灼燃损伤</>，敌方子弹穿过火墙时有<@ba.vup>10%</>几率被清除",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 41,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 55,
        "initSp": 24,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "max_hp": 0.5,
          "atk": 0.5,
          "def": 0.5,
          "ep_damage_ratio": 0.06,
          "prob": 0.1
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_yu_3",
        "trigger": {
          "rule": "CUSTOM_RANGE",
          "rawRule": "CUSTOM_RANGE_SEARCH_ENEMY",
          "customRangeGrid": [
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              2,
              2
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -1,
              3
            ],
            [
              -2,
              0
            ],
            [
              -2,
              1
            ],
            [
              -2,
              2
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "礼尚往来",
          "desc": "阻挡敌人时自身获得30%（+5%）的庇护，并使阻挡的目标每秒受到相当于攻击力40%的法术伤害和相当于攻击力12%的灼燃损伤"
        },
        {
          "name": "闲云隐市",
          "desc": "场上干员数量不低于4时，自身每秒回复相当于生命上限2%（+0.5%）的生命与元素损伤"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_yu",
        "name": "人间百味",
        "type": "PRP-X",
        "level": 0,
        "icon": "uniequip_002_yu"
      },
      "assets": {
        "avatar": "char_2026_yu",
        "portrait": "char_2026_yu_1",
        "spine": "char_2026_yu",
        "skillIcon": "skchr_yu_3",
        "subProfIcon": "sub_primprotector_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_yu_1",
          "iconId": "skchr_yu_1",
          "name": "今日做东",
          "desc": "被动效果：自身更容易受到敌人攻击\n生命上限+25%，防御力+25%，每次受到攻击对目标造成相当于余攻击力30%的灼燃损伤",
          "descRaw": "被动效果：自身更容易受到敌人攻击\n生命上限<@ba.vup>+25%</>，防御力<@ba.vup>+25%</>，每次受到攻击对目标造成相当于余攻击力<@ba.vup>30%</>的<$ba.dt.burning2>灼燃损伤</>",
          "spCost": 22,
          "initSp": 0,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_yu_2",
          "iconId": "skchr_yu_2",
          "name": "厚礼上宾",
          "desc": "立即对周围所有敌人造成相当于攻击力100%的法术伤害并将其中的地面可达目标传送至自身位置，阻挡数+2，生命上限+100%，攻击力+170%，普通攻击造成法术伤害",
          "descRaw": "立即对周围所有敌人造成相当于攻击力<@ba.vup>100%</>的法术伤害并将其中的地面可达目标传送至自身位置，阻挡数<@ba.vup>+2</>，生命上限<@ba.vup>+100%</>，攻击力<@ba.vup>+170%</>，普通攻击造成<@ba.vup>法术</>伤害",
          "spCost": 32,
          "initSp": 12,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_yu_3",
          "iconId": "skchr_yu_3",
          "name": "灶里乾坤",
          "desc": "生命上限+50%，攻击力+50%，防御力+50%，将第二天赋效果赋予全场所有干员；生成一面跨越整个战场的火墙，其他友方穿过火墙造成法术伤害时附带相当于余攻击力6%的灼燃损伤，敌方子弹穿过火墙时有10%几率被清除",
          "descRaw": "生命上限<@ba.vup>+50%</>，攻击力<@ba.vup>+50%</>，防御力<@ba.vup>+50%</>，将第二天赋效果赋予全场所有干员；生成一面跨越整个战场的火墙，其他友方穿过火墙造成法术伤害时附带相当于余攻击力<@ba.vup>6%</>的<$ba.dt.burning2>灼燃损伤</>，敌方子弹穿过火墙时有<@ba.vup>10%</>几率被清除",
          "spCost": 55,
          "initSp": 24,
          "duration": 41,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 26
        },
        "2": {
          "stats.maxHp": 2433
        },
        "4": {
          "stats.cost": 25
        }
      },
      "id": "char_2026_yu",
      "avatar": "char_2026_yu",
      "professionShort": "重",
      "subProfession": "本源铁卫",
      "skillIdx": 2,
      "bench": false
    },
    "char_1012_skadi2": {
      "chessId": "chess_char_6_04_a",
      "baseId": "chess_char_6_04_a",
      "goldenId": "chess_char_6_04_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 112,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_614_acsupo",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acsupo",
        "potRank": 0
      },
      "shopSortId": 4,
      "charId": "char_1012_skadi2",
      "name": "浊心斯卡蒂",
      "appellation": "Skadi the Corrupting Heart",
      "rarity": 6,
      "profession": "辅助",
      "subProfessionId": "bard",
      "subProfessionName": "吟游者",
      "nationId": "egir",
      "garrisonIds": [
        "garrison_84_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_04_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1202,
        "atk": 332,
        "def": 186,
        "res": 0,
        "cost": 6,
        "blockCnt": 1,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 64,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "x-1",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          -2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -2,
          0
        ]
      ],
      "dmgType": "heal",
      "attackKind": "none",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_skadi2_3",
        "iconId": "skchr_skadi2_3",
        "name": "\"潮涌，潮枯\"",
        "level": 4,
        "desc": "特性变为自身每秒流失5%生命，使范围内所有敌人每秒受到40%攻击力的真实伤害（自身与海嗣造成的伤害可叠加），范围内所有友方单位获得相当于浊心斯卡蒂65%攻击力的鼓舞效果",
        "descRaw": "特性变为自身每秒流失<@ba.vdown>5%</>生命，使范围内所有敌人每秒受到<@ba.vup>40%</>攻击力的<@ba.vup>真实</>伤害（自身与海嗣造成的伤害可叠加），范围内所有友方单位获得相当于浊心斯卡蒂<@ba.vup>65%</>攻击力的<$ba.inspire>鼓舞</>效果",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 20,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 39,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk_scale": 0.4,
          "atk": 0.65,
          "hp_ratio": 0.05
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_skadi2_3",
        "trigger": {
          "rule": "SP_FULL",
          "rawRule": "ALWAYS",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "远古血亲",
          "desc": "可以使用一个持续25秒的海嗣，海嗣的攻击范围视为自身攻击范围的延伸"
        },
        {
          "name": "捕食习性",
          "desc": "自身或海嗣攻击范围内存在我方干员时，自身攻击力+9%（+3%）；存在【深海猎人】干员时改为攻击力+18%（+3%）"
        }
      ],
      "tokens": [
        "token_10017_skadi2_dedant"
      ],
      "module": {
        "id": "uniequip_002_skadi2",
        "name": "蜕化的残迹",
        "type": "BAR-X",
        "level": 0,
        "icon": "uniequip_002_skadi2"
      },
      "assets": {
        "avatar": "char_1012_skadi2",
        "portrait": "char_1012_skadi2_1",
        "spine": "char_1012_skadi2",
        "skillIcon": "skchr_skadi2_3",
        "subProfIcon": "sub_bard_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_skadi2_1",
          "iconId": "skchr_skadi2_1",
          "name": "同归殊途之吟",
          "desc": "立即回复自身所有生命值且生命上限+110%，特性效果提高至50%，攻击范围内我方所有单位受到伤害的50%直接转移给浊心斯卡蒂承担（同类效果取最高）",
          "descRaw": "立即回复自身所有生命值且生命上限<@ba.vup>+110%</>，特性效果提高至<@ba.vup>50%</>，攻击范围内我方所有单位受到伤害的<@ba.vup>50%</>直接转移给浊心斯卡蒂承担（同类效果取最高）",
          "spCost": 57,
          "initSp": 30,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_skadi2_2",
          "iconId": "skchr_skadi2_2",
          "name": "同葬无光之愿",
          "desc": "攻击范围内所有其他友方单位获得相当于浊心斯卡蒂30%攻击力与防御力的鼓舞效果，自身特性效果提高至16%\n持续时间无限",
          "descRaw": "攻击范围内所有其他友方单位获得相当于浊心斯卡蒂<@ba.vup>30%</>攻击力与防御力的<$ba.inspire>鼓舞</>效果，自身特性效果提高至<@ba.vup>16%</>\n<@ba.rem>持续时间无限</>",
          "spCost": 66,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_skadi2_3",
          "iconId": "skchr_skadi2_3",
          "name": "\"潮涌，潮枯\"",
          "desc": "特性变为自身每秒流失5%生命，使范围内所有敌人每秒受到40%攻击力的真实伤害（自身与海嗣造成的伤害可叠加），范围内所有友方单位获得相当于浊心斯卡蒂65%攻击力的鼓舞效果",
          "descRaw": "特性变为自身每秒流失<@ba.vdown>5%</>生命，使范围内所有敌人每秒受到<@ba.vup>40%</>攻击力的<@ba.vup>真实</>伤害（自身与海嗣造成的伤害可叠加），范围内所有友方单位获得相当于浊心斯卡蒂<@ba.vup>65%</>攻击力的<$ba.inspire>鼓舞</>效果",
          "spCost": 39,
          "initSp": 15,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 8
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 305
        },
        "4": {
          "stats.cost": 7
        }
      },
      "id": "char_1012_skadi2",
      "avatar": "char_1012_skadi2",
      "professionShort": "辅",
      "subProfession": "吟游者",
      "skillIdx": 2,
      "bench": false
    },
    "char_472_pasngr": {
      "chessId": "chess_char_6_05_a",
      "baseId": "chess_char_6_05_a",
      "goldenId": "chess_char_6_05_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 113,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_611_acnipe",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acnipe",
        "potRank": 0
      },
      "shopSortId": 5,
      "charId": "char_472_pasngr",
      "name": "异客",
      "appellation": "Passenger",
      "rarity": 6,
      "profession": "术师",
      "subProfessionId": "chain",
      "subProfessionName": "链术师",
      "nationId": "sargon",
      "garrisonIds": [
        "garrison_100_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_05_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1215,
        "atk": 603,
        "def": 116,
        "res": 20,
        "cost": 31,
        "blockCnt": 1,
        "bat": 2.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-1",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_pasngr_3",
        "iconId": "skchr_pasngr_3",
        "name": "辉煌裂片",
        "level": 4,
        "desc": "立即寻找大范围内生命值最高的目标，在其位置生成持续4秒的雷暴区域，期间每0.5秒以115%的攻击力对雷暴区域内的随机敌人进行一次额外攻击；可充能2次",
        "descRaw": "立即寻找大范围内生命值最高的目标，在其位置生成持续<@ba.vup>4</>秒的雷暴区域，期间每<@ba.vup>0.5</>秒以<@ba.vup>115%</>的攻击力对雷暴区域内的随机敌人进行一次额外攻击；<@ba.rem>可充能2次</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 35,
        "initSp": 0,
        "maxChargeTime": 2,
        "increment": 1,
        "bb": {
          "atk_scale": 1.15,
          "duration": 4,
          "ct": 2,
          "projectile_delay_time": 4,
          "interval": 0.5,
          "chain.max_target": 4,
          "sluggish": 0.5
        },
        "bbStr": {},
        "rangeId": "x-3",
        "rangeGrid": [
          [
            3,
            0
          ],
          [
            2,
            -1
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            1,
            -2
          ],
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            -3
          ],
          [
            0,
            -2
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            -2
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -2,
            -1
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ],
          [
            -3,
            0
          ]
        ],
        "prefabId": "skchr_pasngr_3",
        "trigger": {
          "rule": "SKILL_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              3,
              0
            ],
            [
              2,
              -1
            ],
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              1,
              -2
            ],
            [
              1,
              -1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              -3
            ],
            [
              0,
              -2
            ],
            [
              0,
              -1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              -2
            ],
            [
              -1,
              -1
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -2,
              -1
            ],
            [
              -2,
              0
            ],
            [
              -2,
              1
            ],
            [
              -3,
              0
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "机理分析",
          "desc": "攻击命中生命值在80%以上的敌人时，3秒内异客对其造成的伤害提升25%（+5%）"
        },
        {
          "name": "孤卒",
          "desc": "当周围4格没有敌人时，攻击力+10%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_pasngr",
        "name": "电磁调节器",
        "type": "CHA-X",
        "level": 0,
        "icon": "uniequip_002_pasngr"
      },
      "assets": {
        "avatar": "char_472_pasngr",
        "portrait": "char_472_pasngr_1",
        "spine": "char_472_pasngr",
        "skillIcon": "skchr_pasngr_3",
        "subProfIcon": "sub_chain_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_pasngr_1",
          "iconId": "skchr_pasngr_1",
          "name": "电能之触",
          "desc": "下次攻击时攻击力提升至180%，最多在4个目标间跳跃，攻击造成的停顿时间延长至1.5秒",
          "descRaw": "下次攻击时攻击力提升至<@ba.vup>180%</>，最多在<@ba.vup>4</>个目标间跳跃，攻击造成的<$ba.sluggish>停顿</>时间延长至<@ba.vup>1.5</>秒",
          "spCost": 6,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_pasngr_2",
          "iconId": "skchr_pasngr_2",
          "name": "聚焦指令",
          "desc": "攻击距离+1，攻击力+15%，攻击间隔小幅度缩短，攻击最大弹跳次数提升至5",
          "descRaw": "攻击距离<@ba.vup>+1</>，攻击力<@ba.vup>+15%</>，攻击间隔<@ba.vup>小幅度缩短</>，攻击最大弹跳次数提升至<@ba.vup>5</>",
          "spCost": 47,
          "initSp": 13,
          "duration": 28,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_pasngr_3",
          "iconId": "skchr_pasngr_3",
          "name": "辉煌裂片",
          "desc": "立即寻找大范围内生命值最高的目标，在其位置生成持续4秒的雷暴区域，期间每0.5秒以115%的攻击力对雷暴区域内的随机敌人进行一次额外攻击；可充能2次",
          "descRaw": "立即寻找大范围内生命值最高的目标，在其位置生成持续<@ba.vup>4</>秒的雷暴区域，期间每<@ba.vup>0.5</>秒以<@ba.vup>115%</>的攻击力对雷暴区域内的随机敌人进行一次额外攻击；<@ba.rem>可充能2次</>",
          "spCost": 35,
          "initSp": 0,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 33
        },
        "2": {
          "stats.atk": 571
        },
        "3": {
          "stats.cost": 32
        }
      },
      "id": "char_472_pasngr",
      "avatar": "char_472_pasngr",
      "professionShort": "术",
      "subProfession": "链术师",
      "skillIdx": 2,
      "bench": false
    },
    "char_4058_pepe": {
      "chessId": "chess_char_6_06_a",
      "baseId": "chess_char_6_06_a",
      "goldenId": "chess_char_6_06_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 114,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_609_acguad",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acguad",
        "potRank": 0
      },
      "shopSortId": 6,
      "charId": "char_4058_pepe",
      "name": "佩佩",
      "appellation": "Pepe",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "hammer",
      "subProfessionName": "撼地者",
      "nationId": "sargon",
      "garrisonIds": [
        "garrison_94_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_06_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2223,
        "atk": 1118,
        "def": 328,
        "res": 0,
        "cost": 18,
        "blockCnt": 2,
        "bat": 1.8,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_pepe_3",
        "iconId": "skchr_pepe_3",
        "name": "时光震荡",
        "level": 4,
        "desc": "攻击间隔略微增大，攻击力+150%，攻击使命中的目标晕眩0.8秒，对主目标提升至1秒，每次攻击后使溅射范围扩大且攻击力额外+13%，最多叠加4层",
        "descRaw": "攻击间隔<@ba.vdown>略微增大</>，攻击力<@ba.vup>+150%</>，攻击使命中的目标<$ba.stun>晕眩</><@ba.vup>0.8</>秒，对主目标提升至<@ba.vup>1</>秒，每次攻击后使溅射范围<@ba.vup>扩大</>且攻击力额外<@ba.vup>+13%</>，最多叠加4层",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 40,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 57,
        "initSp": 30,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 1.5,
          "attack@stun": 0.8,
          "attack@atk": 0.13,
          "attack@stun_main": 1,
          "attack@ability_range_forward_extend": 0.25,
          "attack@max_stack_cnt": 4,
          "base_attack_time": 0.2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_pepe_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "往昔传承",
          "desc": "技能期间每击倒1名敌人，技能结束时获得1点技力，至多回复17（+3）点"
        },
        {
          "name": "弥漫莲香",
          "desc": "在场时，所有【近卫】干员的攻击力+20%（+4%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_pepe",
        "name": "晴雨",
        "type": "HAM-X",
        "level": 0,
        "icon": "uniequip_002_pepe"
      },
      "assets": {
        "avatar": "char_4058_pepe",
        "portrait": "char_4058_pepe_1",
        "spine": "char_4058_pepe",
        "skillIcon": "skchr_pepe_3",
        "subProfIcon": "sub_hammer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_pepe_1",
          "iconId": "skchr_pepe_1",
          "name": "盖戳！",
          "desc": "下次攻击造成相当于攻击力190%的物理伤害，处于异常状态时可以释放技能并清除异常状态\n可充能1次",
          "descRaw": "下次攻击造成相当于攻击力<@ba.vup>190%</>的物理伤害，处于<$ba.debuff>异常状态</>时可以释放技能并清除<$ba.debuff>异常状态</>\n<@ba.rem>可充能1次</>",
          "spCost": 7,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_pepe_2",
          "iconId": "skchr_pepe_2",
          "name": "阻遏混乱锤",
          "desc": "攻击范围扩大，攻击力+55%，攻击速度+50，随机攻击范围内的目标\n每次使用时，使后续开启技能的攻击速度额外+25，最多叠加2层",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+55%</>，攻击速度<@ba.vup>+50</>，随机攻击范围内的目标\n<@ba.rem>每次使用时，使后续开启技能的攻击速度额外+25，最多叠加2层</>",
          "spCost": 34,
          "initSp": 14,
          "duration": 18,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_pepe_3",
          "iconId": "skchr_pepe_3",
          "name": "时光震荡",
          "desc": "攻击间隔略微增大，攻击力+150%，攻击使命中的目标晕眩0.8秒，对主目标提升至1秒，每次攻击后使溅射范围扩大且攻击力额外+13%，最多叠加4层",
          "descRaw": "攻击间隔<@ba.vdown>略微增大</>，攻击力<@ba.vup>+150%</>，攻击使命中的目标<$ba.stun>晕眩</><@ba.vup>0.8</>秒，对主目标提升至<@ba.vup>1</>秒，每次攻击后使溅射范围<@ba.vup>扩大</>且攻击力额外<@ba.vup>+13%</>，最多叠加4层",
          "spCost": 57,
          "initSp": 30,
          "duration": 40,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 20
        },
        "2": {
          "stats.atk": 1083
        },
        "4": {
          "stats.cost": 19
        }
      },
      "id": "char_4058_pepe",
      "avatar": "char_4058_pepe",
      "professionShort": "近",
      "subProfession": "撼地者",
      "skillIdx": 2,
      "bench": false
    },
    "char_1019_siege2": {
      "chessId": "chess_char_6_07_a",
      "baseId": "chess_char_6_07_a",
      "goldenId": "chess_char_6_07_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 115,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_617_sharp2",
        "tmplId": null,
        "skillIndex": 0,
        "uniEquipId": "uniequip_002_sharp2",
        "potRank": 0
      },
      "shopSortId": 7,
      "charId": "char_1019_siege2",
      "name": "维娜·维多利亚",
      "appellation": "Vina Victoria",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "artsfghter",
      "subProfessionName": "术战者",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_53_a",
        "garrison_54_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_07_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2200,
        "atk": 574,
        "def": 348,
        "res": 15,
        "cost": 19,
        "blockCnt": 1,
        "bat": 1.25,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "arts",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_siege2_3",
        "iconId": "skchr_siege2_3",
        "name": "俱以我之名",
        "level": 4,
        "desc": "立即在天赋一生效范围内可部署地面召唤“黄金盟誓”；技能期间可攻击被天赋一生效范围友方单位阻挡的敌人，攻击力+145%，攻击目标数+1，攻击间隔缩短，攻击时伤害类型变为真实",
        "descRaw": "立即在天赋一生效范围内可部署地面召唤“黄金盟誓”；技能期间可攻击被天赋一生效范围友方单位阻挡的敌人，攻击力<@ba.vup>+145%</>，攻击目标数<@ba.vup>+1</>，攻击间隔<@ba.vup>缩短</>，攻击时伤害类型变为<@ba.vup>真实</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 65,
        "initSp": 25,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "base_attack_time": -0.25,
          "atk": 1.45,
          "attack@max_target": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_siege2_3",
        "trigger": {
          "rule": "CUSTOM_RANGE",
          "rawRule": "CUSTOM_RANGE_SEARCH_ENEMY",
          "customRangeGrid": [
            [
              1,
              -1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              0,
              -1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              -1,
              -1
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": "token_10040_siege2_vlion"
      },
      "talents": [
        {
          "name": "诸王的叹息",
          "desc": "自身与周围8格友方单位受到的物理伤害减少22%（+2%），且此范围内每个友方单位使维娜攻击力+6%（+1%）"
        },
        {
          "name": "无拘的锋芒",
          "desc": "对每个敌人首次造成伤害时，使其战栗5（+1）秒"
        }
      ],
      "tokens": [
        "token_10040_siege2_vlion"
      ],
      "module": {
        "id": "uniequip_002_siege2",
        "name": "城主的冒险",
        "type": "AFT-X",
        "level": 0,
        "icon": "uniequip_002_siege2"
      },
      "assets": {
        "avatar": "char_1019_siege2",
        "portrait": "char_1019_siege2_1",
        "spine": "char_1019_siege2",
        "skillIcon": "skchr_siege2_3",
        "subProfIcon": "sub_artsfghter_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_siege2_1",
          "iconId": "skchr_siege2_1",
          "name": "重铸晖光",
          "desc": "下次攻击对四周所有地面敌人额外造成相当于攻击力90%的真实伤害",
          "descRaw": "下次攻击对四周所有地面敌人额外造成相当于攻击力<@ba.vup>90%</>的<@ba.vup>真实</>伤害",
          "spCost": 7,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_siege2_2",
          "iconId": "skchr_siege2_2",
          "name": "进赴故土",
          "desc": "被动效果：天赋一生效范围内若有2个及以上友方单位，维娜技力回复速度+0.3/秒\n自动开启：攻击距离+1，攻击力+135%，攻击目标数+1 \n持续时间无限",
          "descRaw": "被动效果：天赋一生效范围内若有2个及以上友方单位，维娜技力回复速度<@ba.vup>+0.3/秒</>\n自动开启：攻击距离<@ba.vup>+1</>，攻击力<@ba.vup>+135%</>，攻击目标数<@ba.vup>+1</> \n<@ba.rem>持续时间无限</>",
          "spCost": 80,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_siege2_3",
          "iconId": "skchr_siege2_3",
          "name": "俱以我之名",
          "desc": "立即在天赋一生效范围内可部署地面召唤“黄金盟誓”；技能期间可攻击被天赋一生效范围友方单位阻挡的敌人，攻击力+145%，攻击目标数+1，攻击间隔缩短，攻击时伤害类型变为真实",
          "descRaw": "立即在天赋一生效范围内可部署地面召唤“黄金盟誓”；技能期间可攻击被天赋一生效范围友方单位阻挡的敌人，攻击力<@ba.vup>+145%</>，攻击目标数<@ba.vup>+1</>，攻击间隔<@ba.vup>缩短</>，攻击时伤害类型变为<@ba.vup>真实</>",
          "spCost": 65,
          "initSp": 25,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 21
        },
        "2": {
          "stats.atk": 546
        },
        "4": {
          "stats.cost": 20
        }
      },
      "id": "char_1019_siege2",
      "avatar": "char_1019_siege2",
      "professionShort": "近",
      "subProfession": "术战者",
      "skillIdx": 2,
      "bench": false
    },
    "char_1020_reed2": {
      "chessId": "chess_char_6_08_a",
      "baseId": "chess_char_6_08_a",
      "goldenId": "chess_char_6_08_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 116,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_612_accast",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_accast",
        "potRank": 0
      },
      "shopSortId": 8,
      "charId": "char_1020_reed2",
      "name": "焰影苇草",
      "appellation": "Reed The Flame Shadow",
      "rarity": 6,
      "profession": "医疗",
      "subProfessionId": "incantationmedic",
      "subProfessionName": "咒愈师",
      "nationId": "victoria",
      "garrisonIds": [
        "garrison_11_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_08_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1361,
        "atk": 466,
        "def": 67,
        "res": 20,
        "cost": 15,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_reed2_3",
        "iconId": "skchr_reed2_3",
        "name": "生命火种",
        "level": 4,
        "desc": "同时攻击两名敌人，攻击力+25%，第一天赋触发几率提升至100%，技能期间附带灼痕效果的敌人每秒受到20%焰影苇草攻击力的法术伤害、被击倒时对周围敌人造成100%焰影苇草攻击力的法术伤害并施加灼痕效果\n灼痕效果持续至技能结束",
        "descRaw": "同时攻击<@ba.vup>两名</>敌人，攻击力<@ba.vup>+25%</>，第一天赋触发几率提升至<@ba.vup>100%</>，技能期间附带灼痕效果的敌人每秒受到<@ba.vup>20%</>焰影苇草攻击力的法术伤害、被击倒时对周围敌人造成<@ba.vup>100%</>焰影苇草攻击力的法术伤害并施加灼痕效果\n<@ba.rem>灼痕效果持续至技能结束</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 30,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 45,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "talent@prob": 1,
          "reed2_skil_3[switch_mode].atk": 0.25,
          "talent@s3_atk_scale": 0.2,
          "talent@aoe_scale": 1,
          "talent@range_radius": 1.7,
          "talent@atk": 0,
          "talent@damage_scale": 1,
          "max_target": 2
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_reed2_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "灼痕",
          "desc": "造成伤害时有30%概率对敌人施加灼痕效果：攻击力-22%（+2%）、32%（+2%）的【法术脆弱】，不可叠加持续6秒"
        },
        {
          "name": "映耀",
          "desc": "治疗其他友方单位时，焰影苇草同时享受55%（+5%）的治疗量"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_reed2",
        "name": "“赠予红龙的花冠”",
        "type": "INC-X",
        "level": 0,
        "icon": "uniequip_002_reed2"
      },
      "assets": {
        "avatar": "char_1020_reed2",
        "portrait": "char_1020_reed2_1",
        "spine": "char_1020_reed2",
        "skillIcon": "skchr_reed2_3",
        "subProfIcon": "sub_incantationmedic_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skcom_quickattack[3]",
          "iconId": "skcom_quickattack[3]",
          "name": "迅捷打击·γ型",
          "desc": "攻击力+27%，攻击速度+25",
          "descRaw": "攻击力<@ba.vup>+27%</>，攻击速度<@ba.vup>+25</>",
          "spCost": 42,
          "initSp": 5,
          "duration": 35,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_reed2_2",
          "iconId": "skchr_reed2_2",
          "name": "枯荣共息",
          "desc": "优先使一名部署在地面的干员获得三颗火球，效果如下：每1.5秒对一名敌人造成相当于焰影苇草160%攻击力的法术伤害并仅对该干员触发焰影苇草特性",
          "descRaw": "优先使<@ba.vup>一名</>部署在地面的干员获得三颗火球，效果如下：每<@ba.vup>1.5</>秒对一名敌人造成相当于焰影苇草<@ba.vup>160%</>攻击力的法术伤害并仅对该干员触发焰影苇草特性",
          "spCost": 37,
          "initSp": 10,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_reed2_3",
          "iconId": "skchr_reed2_3",
          "name": "生命火种",
          "desc": "同时攻击两名敌人，攻击力+25%，第一天赋触发几率提升至100%，技能期间附带灼痕效果的敌人每秒受到20%焰影苇草攻击力的法术伤害、被击倒时对周围敌人造成100%焰影苇草攻击力的法术伤害并施加灼痕效果\n灼痕效果持续至技能结束",
          "descRaw": "同时攻击<@ba.vup>两名</>敌人，攻击力<@ba.vup>+25%</>，第一天赋触发几率提升至<@ba.vup>100%</>，技能期间附带灼痕效果的敌人每秒受到<@ba.vup>20%</>焰影苇草攻击力的法术伤害、被击倒时对周围敌人造成<@ba.vup>100%</>焰影苇草攻击力的法术伤害并施加灼痕效果\n<@ba.rem>灼痕效果持续至技能结束</>",
          "spCost": 45,
          "initSp": 15,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 17
        },
        "2": {
          "stats.atk": 440
        },
        "3": {
          "stats.cost": 16
        }
      },
      "id": "char_1020_reed2",
      "avatar": "char_1020_reed2",
      "professionShort": "医",
      "subProfession": "咒愈师",
      "skillIdx": 2,
      "bench": false
    },
    "char_245_cello": {
      "chessId": "chess_char_6_09_a",
      "baseId": "chess_char_6_09_a",
      "goldenId": "chess_char_6_09_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 117,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_613_acmedc",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acmedc",
        "potRank": 0
      },
      "shopSortId": 9,
      "charId": "char_245_cello",
      "name": "塑心",
      "appellation": "Virtuosa",
      "rarity": 6,
      "profession": "辅助",
      "subProfessionId": "ritualist",
      "subProfessionName": "巫役",
      "nationId": "laterano",
      "garrisonIds": [
        "garrison_90_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_09_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 936,
        "atk": 430,
        "def": 93,
        "res": 15,
        "cost": 14,
        "blockCnt": 1,
        "bat": 1.6,
        "aspd": 100,
        "respawnTime": 64,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_cello_1",
        "iconId": "skchr_cello_1",
        "name": "“黄金的狂喜”",
        "level": 4,
        "desc": "对一个未处于损伤爆发期间的敌人造成相当于攻击力210%的法术伤害并附带85%攻击力的凋亡损伤\n可充能2次，技能未开启时无法普通攻击",
        "descRaw": "对一个未处于损伤爆发期间的敌人造成相当于攻击力<@ba.vup>210%</>的法术伤害并附带<@ba.vup>85%</>攻击力的<$ba.dt.apoptosis2>凋亡损伤</>\n<@ba.rem>可充能2次，技能未开启时无法普通攻击</>",
        "skillType": "AUTO",
        "durationType": "NONE",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 7,
        "initSp": 6,
        "maxChargeTime": 2,
        "increment": 1,
        "bb": {
          "atk_scale": 2.1,
          "ep_damage_ratio": 0.85
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_cello_1",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 0,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "无词哀歌",
          "desc": "使攻击范围内敌人每秒受到相当于攻击力10%的凋亡损伤并停顿0.2秒"
        },
        {
          "name": "精神逆构",
          "desc": "使攻击范围内敌人受到的凋亡损伤提高22%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_cello",
        "name": "强弱法",
        "type": "RIT-X",
        "level": 0,
        "icon": "uniequip_002_cello"
      },
      "assets": {
        "avatar": "char_245_cello",
        "portrait": "char_245_cello_1",
        "spine": "char_245_cello",
        "skillIcon": "skchr_cello_1",
        "subProfIcon": "sub_ritualist_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_cello_1",
          "iconId": "skchr_cello_1",
          "name": "“黄金的狂喜”",
          "desc": "对一个未处于损伤爆发期间的敌人造成相当于攻击力210%的法术伤害并附带85%攻击力的凋亡损伤\n可充能2次，技能未开启时无法普通攻击",
          "descRaw": "对一个未处于损伤爆发期间的敌人造成相当于攻击力<@ba.vup>210%</>的法术伤害并附带<@ba.vup>85%</>攻击力的<$ba.dt.apoptosis2>凋亡损伤</>\n<@ba.rem>可充能2次，技能未开启时无法普通攻击</>",
          "spCost": 7,
          "initSp": 6,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": true
        },
        {
          "index": 1,
          "id": "skchr_cello_2",
          "iconId": "skchr_cello_2",
          "name": "“安魂的弥撒”",
          "desc": "攻击速度+30，额外攻击1个目标，自身和攻击范围内攻击力最高的另一名友方干员对敌人造成伤害时附带自身15%攻击力的凋亡损伤",
          "descRaw": "攻击速度<@ba.vup>+30</>，额外攻击<@ba.vup>1</>个目标，自身和攻击范围内攻击力最高的另一名友方干员对敌人造成伤害时附带自身<@ba.vup>15%</>攻击力的<$ba.dt.apoptosis2>凋亡损伤</>",
          "spCost": 34,
          "initSp": 7,
          "duration": 20,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_cello_3",
          "iconId": "skchr_cello_3",
          "name": "“自由的探戈”",
          "desc": "停止攻击，攻击范围扩大，攻击力+105%，第二天赋效果提升至1.9倍；技能期间使攻击范围内其他干员生命上限最高的生命上限+20%、攻击力最高的攻击力+20%、防御力最高的防御力+20%",
          "descRaw": "<@ba.vdown>停止攻击</>，攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+105%</>，第二天赋效果提升至<@ba.vup>1.9</>倍；技能期间使攻击范围内其他干员生命上限最高的生命上限<@ba.vup>+20%</>、攻击力最高的攻击力<@ba.vup>+20%</>、防御力最高的防御力<@ba.vup>+20%</>",
          "spCost": 60,
          "initSp": 26,
          "duration": 32,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 16
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 407
        },
        "4": {
          "stats.cost": 15
        }
      },
      "id": "char_245_cello",
      "avatar": "char_245_cello",
      "professionShort": "辅",
      "subProfession": "巫役",
      "skillIdx": 0,
      "bench": false
    },
    "char_249_mlyss": {
      "chessId": "chess_char_6_11_a",
      "baseId": "chess_char_6_11_a",
      "goldenId": "chess_char_6_11_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 119,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_608_acpion",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acpion",
        "potRank": 0
      },
      "shopSortId": 11,
      "charId": "char_249_mlyss",
      "name": "缪尔赛思",
      "appellation": "Muelsyse",
      "rarity": 6,
      "profession": "先锋",
      "subProfessionId": "tactician",
      "subProfessionName": "战术家",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_76_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_11_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1486,
        "atk": 432,
        "def": 98,
        "res": 0,
        "cost": 13,
        "blockCnt": 1,
        "bat": 1,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_mlyss_3",
        "iconId": "skchr_mlyss_3",
        "name": "浅层非熵适应",
        "level": 4,
        "desc": "立即获得13点费用，自身与流形攻击力+22%，若流形为近战复制体时每2秒对周围八格敌人向自己中心小力度地拖拽并使所有阻挡的单位持续晕眩，若为远程复制体时刷新所有流形且攻击附带持续1.5秒的束缚",
        "descRaw": "立即获得<@ba.vup>13</>点费用，自身与流形攻击力<@ba.vup>+22%</>，若流形为近战复制体时每<@ba.vup>2</>秒对周围八格敌人向自己中心<@ba.vup>小力度地</>拖拽并使所有阻挡的单位持续<$ba.stun>晕眩</>，若为远程复制体时刷新所有流形且攻击附带持续<@ba.vup>1.5</>秒的<$ba.root>束缚</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 15,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 42,
        "initSp": 10,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "cost": 13,
          "atk": 0.22,
          "mlyss_s_3[token_melee_trigger].interval": 2,
          "mlyss_s_3[unmoveable].duration": 1.5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_mlyss_3",
        "trigger": {
          "rule": "MLYSS_WTRMAN",
          "rawRule": "MLYSS_WTRMAN",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "净水即生命",
          "desc": "可召唤流形来复制待部署干员的大部分属性（生命上限、攻击、防御、法抗、阻挡数、攻击间隔、攻击范围、伤害类型、根据近/远程位获得特殊特性）协助作战，其被击败后会在25秒后自动刷新"
        },
        {
          "name": "开源节流",
          "desc": "携带时【莱茵生命】干员部署费用-2，首名【莱茵生命】干员部署费用额外-2（+1）"
        }
      ],
      "tokens": [
        "token_10030_mlyss_wtrman"
      ],
      "module": {
        "id": "uniequip_002_mlyss",
        "name": "梳妆流形",
        "type": "TAC-X",
        "level": 0,
        "icon": "uniequip_002_mlyss"
      },
      "assets": {
        "avatar": "char_249_mlyss",
        "portrait": "char_249_mlyss_1",
        "spine": "char_249_mlyss",
        "skillIcon": "skchr_mlyss_3",
        "subProfIcon": "sub_tactician_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_mlyss_1",
          "iconId": "skchr_mlyss_1",
          "name": "渐进性润化",
          "desc": "期间逐渐回复11点费用，自身与流形攻击力+22%，攻击速度+22",
          "descRaw": "期间逐渐回复<@ba.vup>11</>点费用，自身与流形攻击力<@ba.vup>+22%</>，攻击速度<@ba.vup>+22</>",
          "spCost": 35,
          "initSp": 4,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_mlyss_2",
          "iconId": "skchr_mlyss_2",
          "name": "生态耦合",
          "desc": "立即获得13点费用，自身与流形攻击力+22%，若流形为近战复制体时，每秒回复2%的生命值，获得15%的庇护，若为远程复制体时，攻击变为二连击，随机攻击范围内的目标",
          "descRaw": "立即获得<@ba.vup>13</>点费用，自身与流形攻击力<@ba.vup>+22%</>，若流形为近战复制体时，每秒回复<@ba.vup>2%</>的生命值，获得<@ba.vup>15%</>的<$ba.protect>庇护</>，若为远程复制体时，攻击变为<@ba.vup>二</>连击，随机攻击范围内的目标",
          "spCost": 42,
          "initSp": 10,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_mlyss_3",
          "iconId": "skchr_mlyss_3",
          "name": "浅层非熵适应",
          "desc": "立即获得13点费用，自身与流形攻击力+22%，若流形为近战复制体时每2秒对周围八格敌人向自己中心小力度地拖拽并使所有阻挡的单位持续晕眩，若为远程复制体时刷新所有流形且攻击附带持续1.5秒的束缚",
          "descRaw": "立即获得<@ba.vup>13</>点费用，自身与流形攻击力<@ba.vup>+22%</>，若流形为近战复制体时每<@ba.vup>2</>秒对周围八格敌人向自己中心<@ba.vup>小力度地</>拖拽并使所有阻挡的单位持续<$ba.stun>晕眩</>，若为远程复制体时刷新所有流形且攻击附带持续<@ba.vup>1.5</>秒的<$ba.root>束缚</>",
          "spCost": 42,
          "initSp": 10,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 15
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 407
        },
        "4": {
          "stats.cost": 14
        }
      },
      "id": "char_249_mlyss",
      "avatar": "char_249_mlyss",
      "professionShort": "先",
      "subProfession": "战术家",
      "skillIdx": 2,
      "bench": false
    },
    "char_391_rosmon": {
      "chessId": "chess_char_6_12_a",
      "baseId": "chess_char_6_12_a",
      "goldenId": "chess_char_6_12_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 120,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_612_accast",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_accast",
        "potRank": 0
      },
      "shopSortId": 12,
      "charId": "char_391_rosmon",
      "name": "迷迭香",
      "appellation": "Rosmontis",
      "rarity": 6,
      "profession": "狙击",
      "subProfessionId": "bombarder",
      "subProfessionName": "投掷手",
      "nationId": "rhodes",
      "garrisonIds": [
        "garrison_09_a",
        "garrison_03_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_12_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1477,
        "atk": 616,
        "def": 200,
        "res": 15,
        "cost": 23,
        "blockCnt": 1,
        "bat": 2.1,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-9",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ],
        [
          -2,
          0
        ],
        [
          -2,
          1
        ],
        [
          -2,
          2
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_rosmon_2",
        "iconId": "skchr_rosmon_2",
        "name": "末梢阻断",
        "level": 4,
        "desc": "攻击间隔增大，攻击力+20%，溅射范围扩大，每次攻击额外造成2次余震；受到攻击和余震的目标有20%的几率晕眩0.9秒",
        "descRaw": "攻击间隔<@ba.vdown>增大</>，攻击力<@ba.vup>+20%</>，溅射范围<@ba.vup>扩大</>，每次攻击额外造成<@ba.vup>2</>次余震；受到攻击和余震的目标有<@ba.vup>20%</>的几率<$ba.stun>晕眩</><@ba.vup>0.9</>秒",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 33,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 37,
        "initSp": 20,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "base_attack_time": 0.5,
          "atk": 0.2,
          "add_times": 2,
          "attack@prob": 0.2,
          "attack@stun": 0.9
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_rosmon_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "歼灭战装备",
          "desc": "攻击无视目标175（+15）防御力"
        },
        {
          "name": "感知稳定",
          "desc": "部署后随机选择一名在场的【术师】干员，自身和其的攻击力+8%"
        }
      ],
      "tokens": [
        "token_10012_rosmon_shield"
      ],
      "module": {
        "id": "uniequip_002_rosmon",
        "name": "“记事”",
        "type": "BOM-X",
        "level": 0,
        "icon": "uniequip_002_rosmon"
      },
      "assets": {
        "avatar": "char_391_rosmon",
        "portrait": "char_391_rosmon_1",
        "spine": "char_391_rosmon",
        "skillIcon": "skchr_rosmon_2",
        "subProfIcon": "sub_bombarder_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_rosmon_1",
          "iconId": "skchr_rosmon_1",
          "name": "思维膨大",
          "desc": "下次攻击额外造成一次相当于攻击力100%的法术伤害",
          "descRaw": "下次攻击额外造成一次相当于攻击力<@ba.vup>100%</>的法术伤害",
          "spCost": 4,
          "initSp": 0,
          "duration": 0,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_rosmon_2",
          "iconId": "skchr_rosmon_2",
          "name": "末梢阻断",
          "desc": "攻击间隔增大，攻击力+20%，溅射范围扩大，每次攻击额外造成2次余震；受到攻击和余震的目标有20%的几率晕眩0.9秒",
          "descRaw": "攻击间隔<@ba.vdown>增大</>，攻击力<@ba.vup>+20%</>，溅射范围<@ba.vup>扩大</>，每次攻击额外造成<@ba.vup>2</>次余震；受到攻击和余震的目标有<@ba.vup>20%</>的几率<$ba.stun>晕眩</><@ba.vup>0.9</>秒",
          "spCost": 37,
          "initSp": 20,
          "duration": 33,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_rosmon_3",
          "iconId": "skchr_rosmon_3",
          "name": "“如你所愿”",
          "desc": "攻击间隔缩短，攻击力+25%，同时攻击2个敌人但仅选择被阻挡的敌人作为目标；立即在攻击范围内的近战位部署两个战术装备（部署后晕眩周围敌人2秒，阻挡的敌人防御力-160）",
          "descRaw": "攻击间隔<@ba.vup>缩短</>，攻击力<@ba.vup>+25%</>，同时攻击<@ba.vup>2</>个敌人但仅选择<@ba.rem>被阻挡的</>敌人作为目标；立即在攻击范围内的近战位部署两个战术装备（部署后<$ba.stun>晕眩</>周围敌人<@ba.vup>2</>秒，阻挡的敌人防御力<@ba.vup>-160</>）",
          "spCost": 77,
          "initSp": 35,
          "duration": 26,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 25
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 584
        },
        "4": {
          "stats.cost": 24
        }
      },
      "id": "char_391_rosmon",
      "avatar": "char_391_rosmon",
      "professionShort": "狙",
      "subProfession": "投掷手",
      "skillIdx": 1,
      "bench": false
    },
    "char_1041_angel2": {
      "chessId": "chess_char_6_13_a",
      "baseId": "chess_char_6_13_a",
      "goldenId": "chess_char_6_13_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 121,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_615_acspec",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acspec",
        "potRank": 0
      },
      "shopSortId": 13,
      "charId": "char_1041_angel2",
      "name": "新约能天使",
      "appellation": "Exusiai the New Covenant",
      "rarity": 6,
      "profession": "特种",
      "subProfessionId": "geek",
      "subProfessionName": "怪杰",
      "nationId": "lungmen",
      "garrisonIds": [
        "garrison_32_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_13_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1720,
        "atk": 617,
        "def": 120,
        "res": 10,
        "cost": 11,
        "blockCnt": 1,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-3",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_angel2_2",
        "iconId": "skchr_angel2_2",
        "name": "开火成瘾症",
        "level": 4,
        "desc": "立即偷取攻击范围内1名友方干员70点攻击速度（持续至技能结束或新约能天使离场），自身与其获得最大生命值180%的屏障，该屏障会持续衰减，攻击间隔降低，每次攻击造成攻击力230%的物理伤害\n攻击装有35发弹药，打完后结束（可随时停止技能），如果成功偷取攻击速度则额外获得5发弹药",
        "descRaw": "立即<$ba.steal>偷取</>攻击范围内<@ba.vup>1</>名友方干员<@ba.vup>70</>点攻击速度（持续至技能结束或新约能天使离场），自身与其获得最大生命值<@ba.vup>180%</>的<$ba.barrier>屏障</>，该<$ba.barrier>屏障</>会持续衰减，攻击间隔降低，每次攻击造成攻击力<@ba.vup>230%</>的物理伤害\n<@ba.rem>攻击装有35发弹药，打完后结束（可随时停止技能），如果成功<$ba.steal>偷取</>攻击速度则额外获得5发弹药</>",
        "skillType": "MANUAL",
        "durationType": "AMMO",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 30,
        "initSp": 22,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@atk_scale": 2.3,
          "attack@trigger_time": 35,
          "addtional_ammo_each": 5,
          "max_target": 1,
          "recover_each_cnt": 5,
          "shield_max_hp_ratio": 1.8,
          "shield_max_duration": 30,
          "steal": 70,
          "base_attack_time": -0.7,
          "steal_max": 999
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_angel2_2",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 1,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "火力电台",
          "desc": "在场时，每当有友方干员的弹药被消耗就会回复自身6%生命值，并有25%概率立即对该干员攻击范围的敌人召唤一次轰炸，造成相当于自身攻击力165%（+15%）的物理溅射伤害"
        },
        {
          "name": "铳弹协约",
          "desc": "在场时，携带弹药类技能的干员攻击力+13%（+4%），对【拉特兰】干员的效果翻倍"
        }
      ],
      "tokens": [
        "token_10056_angel2_target"
      ],
      "module": {
        "id": "uniequip_002_angel2",
        "name": "新朋友圣城生活套组",
        "type": "GEE-X",
        "level": 0,
        "icon": "uniequip_002_angel2"
      },
      "assets": {
        "avatar": "char_1041_angel2",
        "portrait": "char_1041_angel2_1",
        "spine": "char_1041_angel2",
        "skillIcon": "skchr_angel2_2",
        "subProfIcon": "sub_geek_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_angel2_1",
          "iconId": "skchr_angel2_1",
          "name": "天空大扫除",
          "desc": "每次攻击造成攻击力180%的物理伤害，优先攻击空中单位，主动关闭时发射剩余所有弹药攻击范围内的随机敌人\n攻击装有8发弹药，打完后结束（可随时停止技能）",
          "descRaw": "每次攻击造成攻击力<@ba.vup>180%</>的物理伤害，优先攻击空中单位，主动关闭时发射剩余所有弹药攻击范围内的随机敌人\n<@ba.rem>攻击装有8发弹药，打完后结束（可随时停止技能）</>",
          "spCost": 12,
          "initSp": 3,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_angel2_2",
          "iconId": "skchr_angel2_2",
          "name": "开火成瘾症",
          "desc": "立即偷取攻击范围内1名友方干员70点攻击速度（持续至技能结束或新约能天使离场），自身与其获得最大生命值180%的屏障，该屏障会持续衰减，攻击间隔降低，每次攻击造成攻击力230%的物理伤害\n攻击装有35发弹药，打完后结束（可随时停止技能），如果成功偷取攻击速度则额外获得5发弹药",
          "descRaw": "立即<$ba.steal>偷取</>攻击范围内<@ba.vup>1</>名友方干员<@ba.vup>70</>点攻击速度（持续至技能结束或新约能天使离场），自身与其获得最大生命值<@ba.vup>180%</>的<$ba.barrier>屏障</>，该<$ba.barrier>屏障</>会持续衰减，攻击间隔降低，每次攻击造成攻击力<@ba.vup>230%</>的物理伤害\n<@ba.rem>攻击装有35发弹药，打完后结束（可随时停止技能），如果成功<$ba.steal>偷取</>攻击速度则额外获得5发弹药</>",
          "spCost": 30,
          "initSp": 22,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        },
        {
          "index": 2,
          "id": "skchr_angel2_3",
          "iconId": "skchr_angel2_3",
          "name": "使命必达！",
          "desc": "攻击力+15%，每次攻击变为相当于攻击力115%的5连击，若存在投递坐标，立即对该处造成一次相当于攻击力250%的物理溅射伤害并将一名再部署时间最长的地面干员部署至该处，使其获得6点技力\n部署后获得投递坐标，攻击装有50发弹药，每次攻击消耗5发，打完后结束（可随时停止技能）",
          "descRaw": "攻击力<@ba.vup>+15%</>，每次攻击变为相当于攻击力<@ba.vup>115%</>的<@ba.vup>5</>连击，若存在投递坐标，立即对该处造成一次相当于攻击力<@ba.vup>250%</>的物理溅射伤害并将一名再部署时间最长的地面干员部署至该处，使其获得<@ba.vup>6</>点技力\n<@ba.rem>部署后获得投递坐标，攻击装有50发弹药，每次攻击消耗5发，打完后结束（可随时停止技能）</>",
          "spCost": 35,
          "initSp": 22,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 13
        },
        "2": {
          "stats.atk": 587
        },
        "4": {
          "stats.cost": 12
        }
      },
      "id": "char_1041_angel2",
      "avatar": "char_1041_angel2",
      "professionShort": "特",
      "subProfession": "怪杰",
      "skillIdx": 1,
      "bench": false
    },
    "char_4042_lumen": {
      "chessId": "chess_char_6_14_a",
      "baseId": "chess_char_6_14_a",
      "goldenId": "chess_char_6_14_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 122,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_4042_lumen",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_lumen",
        "potRank": 0
      },
      "shopSortId": 14,
      "charId": "char_4042_lumen",
      "name": "流明",
      "appellation": "Lumen",
      "rarity": 6,
      "profession": "医疗",
      "subProfessionId": "healer",
      "subProfessionName": "疗养师",
      "nationId": "iberia",
      "garrisonIds": [
        "garrison_57_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_14_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1569,
        "atk": 432,
        "def": 88,
        "res": 10,
        "cost": 20,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-4",
      "rangeGrid": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ],
        [
          -2,
          0
        ],
        [
          -2,
          1
        ],
        [
          -2,
          2
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_lumen_3",
        "iconId": "skchr_lumen_3",
        "name": "灯火不灭",
        "level": 4,
        "desc": "攻击力+30%，攻击速度+20，优先治疗处于异常状态中的单位；只在治疗异常状态中的单位时会消耗子弹，使该次治疗量提升至攻击力的135%并解除目标所受的异常状态\n攻击装有4发子弹，打完后技能结束（期间可随时停止技能）",
        "descRaw": "攻击力<@ba.vup>+30%</>，攻击速度<@ba.vup>+20</>，优先治疗处于<$ba.debuff>异常状态</>中的单位；只在治疗<$ba.debuff>异常状态</>中的单位时会消耗子弹，使该次治疗量提升至攻击力的<@ba.vup>135%</>并解除目标所受的<$ba.debuff>异常状态</>\n<@ba.rem>攻击装有<@ba.vup>4</>发子弹，打完后技能结束（期间可随时停止技能）</>",
        "skillType": "MANUAL",
        "durationType": "AMMO",
        "duration": -1,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 61,
        "initSp": 0,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack_speed": 20,
          "heal_scale": 1.35,
          "attack@trigger_time": 4,
          "atk": 0.3
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_lumen_3",
        "trigger": {
          "rule": "DEFAULT",
          "rawRule": "DEFAULT",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "凡人之愿",
          "desc": "治疗的目标获得4秒抵抗，若目标生命值高于75%则改为6秒抵抗"
        },
        {
          "name": "应急处理",
          "desc": "攻击范围内的友方受到异常状态时，立刻治疗目标相当于流明攻击力80%的生命，该效果有10（-2）秒冷却时间"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_lumen",
        "name": "纯铜单筒望远镜",
        "type": "WAH-X",
        "level": 0,
        "icon": "uniequip_002_lumen"
      },
      "assets": {
        "avatar": "char_4042_lumen",
        "portrait": "char_4042_lumen_1",
        "spine": "char_4042_lumen",
        "skillIcon": "skchr_lumen_3",
        "subProfIcon": "sub_healer_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_lumen_1",
          "iconId": "skchr_lumen_1",
          "name": "沐雨",
          "desc": "下次攻击使目标和周围的友军每秒受到相当于32%流明攻击力的治疗效果，持续4秒",
          "descRaw": "下次攻击使目标和周围的友军每秒受到相当于<@ba.vup>32%</>流明攻击力的治疗效果，持续<@ba.vup>4</>秒",
          "spCost": 12,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_lumen_2",
          "iconId": "skchr_lumen_2",
          "name": "沛霖",
          "desc": "立刻恢复攻击范围内最多2名友方单位相当于攻击力160%的生命；\n蓄力额外效果：并解除目标所受的异常状态",
          "descRaw": "立刻恢复攻击范围内最多<@ba.vup>2</>名友方单位相当于攻击力<@ba.vup>160%</>的生命；\n<$ba.charged>蓄力</>额外效果：并解除目标所受的<$ba.debuff>异常状态</>",
          "spCost": 19,
          "initSp": 5,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_lumen_3",
          "iconId": "skchr_lumen_3",
          "name": "灯火不灭",
          "desc": "攻击力+30%，攻击速度+20，优先治疗处于异常状态中的单位；只在治疗异常状态中的单位时会消耗子弹，使该次治疗量提升至攻击力的135%并解除目标所受的异常状态\n攻击装有4发子弹，打完后技能结束（期间可随时停止技能）",
          "descRaw": "攻击力<@ba.vup>+30%</>，攻击速度<@ba.vup>+20</>，优先治疗处于<$ba.debuff>异常状态</>中的单位；只在治疗<$ba.debuff>异常状态</>中的单位时会消耗子弹，使该次治疗量提升至攻击力的<@ba.vup>135%</>并解除目标所受的<$ba.debuff>异常状态</>\n<@ba.rem>攻击装有<@ba.vup>4</>发子弹，打完后技能结束（期间可随时停止技能）</>",
          "spCost": 61,
          "initSp": 0,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 23
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 22
        },
        "4": {
          "stats.cost": 21
        }
      },
      "id": "char_4042_lumen",
      "avatar": "char_4042_lumen",
      "professionShort": "医",
      "subProfession": "疗养师",
      "skillIdx": 2,
      "bench": false
    },
    "char_4082_qiubai": {
      "chessId": "chess_char_6_15_a",
      "baseId": "chess_char_6_15_a",
      "goldenId": "chess_char_6_15_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 123,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_614_acsupo",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acsupo",
        "potRank": 0
      },
      "shopSortId": 15,
      "charId": "char_4082_qiubai",
      "name": "仇白",
      "appellation": "Qiubai",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "lord",
      "subProfessionName": "领主",
      "nationId": "yan",
      "garrisonIds": [
        "garrison_101_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_15_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1959,
        "atk": 607,
        "def": 333,
        "res": 10,
        "cost": 18,
        "blockCnt": 2,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-12",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "ranged",
      "projectile": "arrow",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_qiubai_3",
        "iconId": "skchr_qiubai_3",
        "name": "问雪",
        "level": 4,
        "desc": "攻击范围扩大，攻击力+30%，伤害类型变为法术，额外攻击2个目标，远程攻击不再降低伤害，每次攻击使自身攻击速度+10（最多叠加5次）",
        "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+30%</>，伤害类型变为法术，额外攻击2个目标，远程攻击不再降低伤害，每次攻击使自身攻击速度<@ba.vup>+10</>（最多叠加<@ba.vup>5</>次）",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 30,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 61,
        "initSp": 34,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.3,
          "attack_speed": 10,
          "max_stack_cnt": 5
        },
        "bbStr": {},
        "rangeId": "3-1",
        "rangeGrid": [
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ]
        ],
        "prefabId": "skchr_qiubai_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "入隙",
          "desc": "攻击处于停顿、束缚的敌人时，额外造成相当于攻击力43%（+3%）的法术伤害"
        },
        {
          "name": "落英",
          "desc": "攻击时有23%（+3%）的几率使目标束缚1.5秒"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_qiubai",
        "name": "雪浸过的斗笠",
        "type": "LOR-X",
        "level": 0,
        "icon": "uniequip_002_qiubai"
      },
      "assets": {
        "avatar": "char_4082_qiubai",
        "portrait": "char_4082_qiubai_1",
        "spine": "char_4082_qiubai",
        "skillIcon": "skchr_qiubai_3",
        "subProfIcon": "sub_lord_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_qiubai_1",
          "iconId": "skchr_qiubai_1",
          "name": "留羽",
          "desc": "下次攻击使目标束缚2秒，该次束缚结束时对目标和附近的所有敌人造成相当于攻击力210%的法术伤害",
          "descRaw": "下次攻击使目标<$ba.root>束缚</><@ba.vup>2</>秒，该次<$ba.root>束缚</>结束时对目标和附近的所有敌人造成相当于攻击力<@ba.vup>210%</>的法术伤害",
          "spCost": 5,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_qiubai_2",
          "iconId": "skchr_qiubai_2",
          "name": "承影",
          "desc": "对前方范围内的地面敌人造成攻击力195%的法术伤害；攻击范围改变，攻击力+75%，攻击范围内的地面敌人停顿；技能结束时对范围内的地面敌人造成攻击力195%的物理伤害",
          "descRaw": "对前方范围内的地面敌人造成攻击力<@ba.vup>195%</>的法术伤害；攻击范围<@ba.vup>改变</>，攻击力<@ba.vup>+75%</>，攻击范围内的地面敌人<$ba.sluggish>停顿</>；技能结束时对范围内的地面敌人造成攻击力<@ba.vup>195%</>的物理伤害",
          "spCost": 13,
          "initSp": 2,
          "duration": 5,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_qiubai_3",
          "iconId": "skchr_qiubai_3",
          "name": "问雪",
          "desc": "攻击范围扩大，攻击力+30%，伤害类型变为法术，额外攻击2个目标，远程攻击不再降低伤害，每次攻击使自身攻击速度+10（最多叠加5次）",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+30%</>，伤害类型变为法术，额外攻击2个目标，远程攻击不再降低伤害，每次攻击使自身攻击速度<@ba.vup>+10</>（最多叠加<@ba.vup>5</>次）",
          "spCost": 61,
          "initSp": 34,
          "duration": 30,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 20
        },
        "2": {
          "stats.atk": 581
        },
        "4": {
          "stats.cost": 19
        }
      },
      "id": "char_4082_qiubai",
      "avatar": "char_4082_qiubai",
      "professionShort": "近",
      "subProfession": "领主",
      "skillIdx": 2,
      "bench": false
    },
    "char_1047_halo2": {
      "chessId": "chess_char_6_16_a",
      "baseId": "chess_char_6_16_a",
      "goldenId": "chess_char_6_16_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 124,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "PRESET",
      "backup": {
        "charId": "char_1047_halo2",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_halo2",
        "potRank": 0
      },
      "shopSortId": 16,
      "charId": "char_1047_halo2",
      "name": "溯光星源",
      "appellation": "Astgenne the Lightchaser",
      "rarity": 6,
      "profession": "辅助",
      "subProfessionId": "slower",
      "subProfessionName": "凝滞师",
      "nationId": "columbia",
      "garrisonIds": [
        "garrison_121_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_16_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1136,
        "atk": 442,
        "def": 105,
        "res": 25,
        "cost": 15,
        "blockCnt": 1,
        "bat": 1.9,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "y-2",
      "rangeGrid": [
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          -1
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_halo2_3",
        "iconId": "skchr_halo2_3",
        "name": "并流连锁",
        "level": 4,
        "desc": "攻击范围扩大，攻击力+35%，攻击间隔缩短，持续锁定2个敌人进行攻击，被锁定的敌人会互相链接；每个被链接的敌人会把即将受到法术伤害的15%额外传导给其他链接目标",
        "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+35%</>，攻击间隔<@ba.vup>缩短</>，持续锁定<@ba.vup>2</>个敌人进行攻击，被锁定的敌人会互相链接；每个被链接的敌人会把即将受到法术伤害的<@ba.vup>15%</>额外传导给其他链接目标",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 45,
        "initSp": 18,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.35,
          "base_attack_time": -0.7,
          "attack@max_target": 2,
          "attack@atk_share": 0.15
        },
        "bbStr": {},
        "rangeId": "y-4",
        "rangeGrid": [
          [
            2,
            -1
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            1,
            -1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            -1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            -1,
            -1
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -1,
            2
          ],
          [
            -2,
            -1
          ],
          [
            -2,
            0
          ],
          [
            -2,
            1
          ]
        ],
        "prefabId": "skchr_halo2_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              2,
              -1
            ],
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              1,
              -1
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              -1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              -1,
              -1
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -1,
              2
            ],
            [
              -2,
              -1
            ],
            [
              -2,
              0
            ],
            [
              -2,
              1
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "数据建模",
          "desc": "对敌人造成停顿效果时，自身的攻击速度+1，最多叠加18次"
        },
        {
          "name": "能源解析",
          "desc": "攻击范围内的敌人受到12%（+2%）的脆弱效果，敌人在溯光星源的攻击范围内停留超过7秒后，脆弱效果提升至16%（+2%）"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_halo2",
        "name": "探索者的收藏",
        "type": "DEC-Y",
        "level": 0,
        "icon": "uniequip_002_halo2"
      },
      "assets": {
        "avatar": "char_1047_halo2",
        "portrait": "char_1047_halo2_1",
        "spine": "char_1047_halo2",
        "skillIcon": "skchr_halo2_3",
        "subProfIcon": "sub_slower_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_halo2_1",
          "iconId": "skchr_halo2_1",
          "name": "星图闪烁",
          "desc": "攻击力+45%，攻击可在敌人间重复跳跃，最多跳跃3次",
          "descRaw": "攻击力<@ba.vup>+45%</>，攻击可在敌人间重复跳跃，最多跳跃<@ba.vup>3</>次",
          "spCost": 40,
          "initSp": 13,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_halo2_2",
          "iconId": "skchr_halo2_2",
          "name": "星束引力",
          "desc": "下次攻击选择攻击范围内距离目标点最远的1个敌人为目标，造成相当于攻击力115%的法术伤害，攻击造成的停顿时间延长至3秒，并分别链接目标附近的最多2个敌人小力地拉向目标所在位置同时造成相同的法术伤害",
          "descRaw": "下次攻击选择攻击范围内距离目标点最远的<@ba.vup>1</>个敌人为目标，造成相当于攻击力<@ba.vup>115%</>的法术伤害，攻击造成的<$ba.sluggish>停顿</>时间延长至<@ba.vup>3</>秒，并分别链接目标附近的最多<@ba.vup>2</>个敌人<@ba.vup>小力地</>拉向目标所在位置同时造成相同的法术伤害",
          "spCost": 4,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_halo2_3",
          "iconId": "skchr_halo2_3",
          "name": "并流连锁",
          "desc": "攻击范围扩大，攻击力+35%，攻击间隔缩短，持续锁定2个敌人进行攻击，被锁定的敌人会互相链接；每个被链接的敌人会把即将受到法术伤害的15%额外传导给其他链接目标",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+35%</>，攻击间隔<@ba.vup>缩短</>，持续锁定<@ba.vup>2</>个敌人进行攻击，被锁定的敌人会互相链接；每个被链接的敌人会把即将受到法术伤害的<@ba.vup>15%</>额外传导给其他链接目标",
          "spCost": 45,
          "initSp": 18,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 18
        },
        "1": {
          "stats.respawnTime": 80
        },
        "2": {
          "stats.cost": 17
        },
        "4": {
          "stats.cost": 16
        }
      },
      "id": "char_1047_halo2",
      "avatar": "char_1047_halo2",
      "professionShort": "辅",
      "subProfession": "凝滞师",
      "skillIdx": 2,
      "bench": false
    },
    "char_1014_nearl2": {
      "chessId": "chess_char_6_17_a",
      "baseId": "chess_char_6_17_a",
      "goldenId": "chess_char_6_17_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 125,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_608_acpion",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acpion",
        "potRank": 0
      },
      "shopSortId": 17,
      "charId": "char_1014_nearl2",
      "name": "耀骑士临光",
      "appellation": "Nearl the Radiant Knight",
      "rarity": 6,
      "profession": "近卫",
      "subProfessionId": "fearless",
      "subProfessionName": "无畏者",
      "nationId": "kazimierz",
      "garrisonIds": [
        "garrison_145_a",
        "garrison_144_a",
        "garrison_159_a",
        "garrison_160_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_17_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 2698,
        "atk": 918,
        "def": 247,
        "res": 0,
        "cost": 17,
        "blockCnt": 1,
        "bat": 1.5,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "1-1",
      "rangeGrid": [
        [
          0,
          0
        ],
        [
          0,
          1
        ]
      ],
      "dmgType": "phys",
      "attackKind": "melee",
      "projectile": "none",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_nearl2_3",
        "iconId": "skchr_nearl2_3",
        "name": "耀阳颔首",
        "level": 4,
        "desc": "在周围四格可部署地面召唤一把\"耀阳\"对周围敌人造成90%耀骑士临光攻击力的真实伤害并晕眩3秒，自身攻击范围扩大，攻击力+70%、防御力+40%，攻击自身与\"耀阳\"阻挡的单位时伤害类型变为真实",
        "descRaw": "在周围四格可部署地面召唤一把\"耀阳\"对周围敌人造成<@ba.vup>90%</>耀骑士临光攻击力的真实伤害并<$ba.stun>晕眩</><@ba.vup>3</>秒，自身攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+70%</>、防御力<@ba.vup>+40%</>，攻击自身与\"耀阳\"阻挡的单位时伤害类型变为<@ba.vup>真实</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 25,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 55,
        "initSp": 15,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.7,
          "def": 0.4,
          "value": 0.9,
          "value2": 3
        },
        "bbStr": {},
        "rangeId": "2-1",
        "rangeGrid": [
          [
            2,
            0
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            -1,
            0
          ],
          [
            -1,
            1
          ],
          [
            -2,
            0
          ]
        ],
        "prefabId": "skchr_nearl2_3",
        "trigger": {
          "rule": "ACTIVE_RANGE",
          "rawRule": "DEFAULT",
          "customRangeGrid": [
            [
              2,
              0
            ],
            [
              1,
              0
            ],
            [
              1,
              1
            ],
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              -1,
              0
            ],
            [
              -1,
              1
            ],
            [
              -2,
              0
            ]
          ]
        },
        "index": 2,
        "overrideTokenKey": "token_10019_nearl2_sword"
      },
      "talents": [
        {
          "name": "不畏苦暗",
          "desc": "部署时对周围四格敌人造成80%攻击力的真实伤害并晕眩3秒，上一名部署干员势力为【卡西米尔】时额外造成一次伤害"
        },
        {
          "name": "破晓",
          "desc": "攻击无视敌人23%（+3%）的防御力"
        }
      ],
      "tokens": [
        "token_10019_nearl2_sword"
      ],
      "module": {
        "id": "uniequip_002_nearl2",
        "name": "耀阳锋刃",
        "type": "DRE-X",
        "level": 0,
        "icon": "uniequip_002_nearl2"
      },
      "assets": {
        "avatar": "char_1014_nearl2",
        "portrait": "char_1014_nearl2_1",
        "spine": "char_1014_nearl2",
        "skillIcon": "skchr_nearl2_3",
        "subProfIcon": "sub_fearless_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_nearl2_1",
          "iconId": "skchr_nearl2_1",
          "name": "灿焰长刃",
          "desc": "攻击范围扩大，攻击力+40%，攻击速度+26\n持续时间无限",
          "descRaw": "攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+40%</>，攻击速度<@ba.vup>+26</>\n<@ba.rem>持续时间无限</>",
          "spCost": 65,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_nearl2_2",
          "iconId": "skchr_nearl2_2",
          "name": "逐夜烁光",
          "desc": "被动效果：部署不消耗部署位。\n部署后攻击力+90%，获得3层护盾。技能结束后自动撤退，本次再部署时间延长25%，上一名部署干员势力为【卡西米尔】时本次再部署时间不再延长",
          "descRaw": "被动效果：部署<@ba.vup>不消耗</>部署位。\n部署后攻击力<@ba.vup>+90%</>，获得<@ba.vup>3</>层<$ba.shield>护盾</>。技能结束后自动撤退，本次再部署时间延长<@ba.vup>25%</>，上一名部署干员势力为【卡西米尔】时本次再部署时间<@ba.vup>不再延长</>",
          "spCost": 0,
          "initSp": 0,
          "duration": 22,
          "skillType": "PASSIVE",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_nearl2_3",
          "iconId": "skchr_nearl2_3",
          "name": "耀阳颔首",
          "desc": "在周围四格可部署地面召唤一把\"耀阳\"对周围敌人造成90%耀骑士临光攻击力的真实伤害并晕眩3秒，自身攻击范围扩大，攻击力+70%、防御力+40%，攻击自身与\"耀阳\"阻挡的单位时伤害类型变为真实",
          "descRaw": "在周围四格可部署地面召唤一把\"耀阳\"对周围敌人造成<@ba.vup>90%</>耀骑士临光攻击力的真实伤害并<$ba.stun>晕眩</><@ba.vup>3</>秒，自身攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+70%</>、防御力<@ba.vup>+40%</>，攻击自身与\"耀阳\"阻挡的单位时伤害类型变为<@ba.vup>真实</>",
          "spCost": 55,
          "initSp": 15,
          "duration": 25,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 19
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 883
        },
        "4": {
          "stats.cost": 18
        }
      },
      "id": "char_1014_nearl2",
      "avatar": "char_1014_nearl2",
      "professionShort": "近",
      "subProfession": "无畏者",
      "skillIdx": 2,
      "bench": false
    },
    "char_1038_whitw2": {
      "chessId": "chess_char_6_18_a",
      "baseId": "chess_char_6_18_a",
      "goldenId": "chess_char_6_18_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 126,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_612_accast",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_accast",
        "potRank": 0
      },
      "shopSortId": 18,
      "charId": "char_1038_whitw2",
      "name": "荒芜拉普兰德",
      "appellation": "Lappland the Decadenza",
      "rarity": 6,
      "profession": "术师",
      "subProfessionId": "funnel",
      "subProfessionName": "驭械术师",
      "nationId": "siracusa",
      "garrisonIds": [
        "garrison_118_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_18_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1142,
        "atk": 312,
        "def": 98,
        "res": 20,
        "cost": 20,
        "blockCnt": 1,
        "bat": 1.3,
        "aspd": 100,
        "respawnTime": 70,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-1",
      "rangeGrid": [
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ]
      ],
      "dmgType": "arts",
      "attackKind": "ranged",
      "projectile": "bolt",
      "canHitFly": true,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_whitw2_3",
        "iconId": "skchr_whitw2_3",
        "name": "终幕·浩劫",
        "level": 4,
        "desc": "浮游单元+2，攻击力+45%，释放特殊形态的浮游单元散开后在整个战场范围各自追逐较近的敌人，追上时使目标恐惧2秒并锁定其攻击，浮游单元周围的敌人移动速度-30%且每秒受到相当于攻击力100%的法术伤害（不叠加）；浮游单元在锁定目标倒下后重新索敌，直至技能结束后返回干员身边",
        "descRaw": "浮游单元<@ba.vup>+2</>，攻击力<@ba.vup>+45%</>，释放<@ba.vup>特殊形态</>的浮游单元散开后在整个战场范围各自追逐较近的敌人，追上时使目标<$ba.fear>恐惧</><@ba.vup>2</>秒并锁定其攻击，浮游单元周围的敌人移动速度<@ba.vup>-30%</>且每秒受到相当于攻击力<@ba.vup>100%</>的法术伤害（不叠加）；<@ba.rem>浮游单元在锁定目标倒下后重新索敌，直至技能结束后返回干员身边</>",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 40,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 69,
        "initSp": 38,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "atk": 0.45,
          "attack@cnt": 2,
          "attack@times": 1.3,
          "attack@move_speed": -0.3,
          "attack@magic_atk_scale": 1,
          "attack@fear": 2,
          "attack@projectile_move_speed": 1,
          "attack@range_radius": 0.9,
          "attack@projectile_turn_speed": 5
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_whitw2_3",
        "trigger": {
          "rule": "GDGLOW_SKILL_2",
          "rawRule": "GDGLOW_SKILL_2",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "头狼",
          "desc": "每在场上停留16（-4）秒，浮游单元依次获得以下一个效果：伤害上限提高10%、造成伤害时使目标特殊能力失效2秒、数量+1"
        },
        {
          "name": "叙拉古的荣幸",
          "desc": "编入队伍时所有【叙拉古】干员的初始技力+6（+1）"
        },
        {
          "name": null,
          "desc": null
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_whitw2",
        "name": "狼时",
        "type": "FUN-X",
        "level": 0,
        "icon": "uniequip_002_whitw2"
      },
      "assets": {
        "avatar": "char_1038_whitw2",
        "portrait": "char_1038_whitw2_1",
        "spine": "char_1038_whitw2",
        "skillIcon": "skchr_whitw2_3",
        "subProfIcon": "sub_funnel_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_whitw2_1",
          "iconId": "skchr_whitw2_1",
          "name": "慵怠者悲鸣",
          "desc": "被动效果：浮游单元+1\n主动触发可以在下列状态和初始状态间切换：\n攻击力+14%，释放浮游单元随机锁定整个战场内的非移动敌人进行攻击，目标移动或倒下后重新索敌",
          "descRaw": "被动效果：浮游单元<@ba.vup>+1</>\n<@ba.rem>主动触发可以在下列状态和初始状态间切换：</>\n攻击力<@ba.vup>+14%</>，释放浮游单元随机锁定整个战场内的非移动敌人进行攻击，目标移动或倒下后重新索敌",
          "spCost": 16,
          "initSp": 0,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_whitw2_2",
          "iconId": "skchr_whitw2_2",
          "name": "逐猎狂飙",
          "desc": "浮游单元+3，攻击范围扩大，攻击力+60%，释放浮游单元随机锁定敌人攻击，浮游单元攻击时有10%几率使目标恐惧1秒\n浮游单元在锁定目标倒下后重新索敌，直至技能结束后返回干员身边",
          "descRaw": "浮游单元<@ba.vup>+3</>，攻击范围<@ba.vup>扩大</>，攻击力<@ba.vup>+60%</>，释放浮游单元随机锁定敌人攻击，浮游单元攻击时有<@ba.vup>10%</>几率使目标<$ba.fear>恐惧</><@ba.vup>1</>秒\n<@ba.rem>浮游单元在锁定目标倒下后重新索敌，直至技能结束后返回干员身边</>",
          "spCost": 28,
          "initSp": 6,
          "duration": 15,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_whitw2_3",
          "iconId": "skchr_whitw2_3",
          "name": "终幕·浩劫",
          "desc": "浮游单元+2，攻击力+45%，释放特殊形态的浮游单元散开后在整个战场范围各自追逐较近的敌人，追上时使目标恐惧2秒并锁定其攻击，浮游单元周围的敌人移动速度-30%且每秒受到相当于攻击力100%的法术伤害（不叠加）；浮游单元在锁定目标倒下后重新索敌，直至技能结束后返回干员身边",
          "descRaw": "浮游单元<@ba.vup>+2</>，攻击力<@ba.vup>+45%</>，释放<@ba.vup>特殊形态</>的浮游单元散开后在整个战场范围各自追逐较近的敌人，追上时使目标<$ba.fear>恐惧</><@ba.vup>2</>秒并锁定其攻击，浮游单元周围的敌人移动速度<@ba.vup>-30%</>且每秒受到相当于攻击力<@ba.vup>100%</>的法术伤害（不叠加）；<@ba.rem>浮游单元在锁定目标倒下后重新索敌，直至技能结束后返回干员身边</>",
          "spCost": 69,
          "initSp": 38,
          "duration": 40,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 22
        },
        "2": {
          "stats.atk": 287
        },
        "3": {
          "stats.cost": 21
        }
      },
      "id": "char_1038_whitw2",
      "avatar": "char_1038_whitw2",
      "professionShort": "术",
      "subProfession": "驭械术师",
      "skillIdx": 2,
      "bench": false
    },
    "char_1016_agoat2": {
      "chessId": "chess_char_6_20_a",
      "baseId": "chess_char_6_20_a",
      "goldenId": "chess_char_6_20_b",
      "isGolden": false,
      "tier": 6,
      "identifier": 128,
      "isHidden": false,
      "isDiy": false,
      "visible": true,
      "chessType": "NORMAL",
      "backup": {
        "charId": "char_613_acmedc",
        "tmplId": null,
        "skillIndex": 2,
        "uniEquipId": "uniequip_002_acmedc",
        "potRank": 0
      },
      "shopSortId": 20,
      "charId": "char_1016_agoat2",
      "name": "纯烬艾雅法拉",
      "appellation": "Eyjafjalla the Hvít Aska",
      "rarity": 6,
      "profession": "医疗",
      "subProfessionId": "wandermedic",
      "subProfessionName": "行医",
      "nationId": "leithanien",
      "garrisonIds": [
        "garrison_140_a"
      ],
      "price": 4,
      "sellPrice": 1,
      "upgradeNum": 3,
      "upgradeChessId": "chess_char_6_20_b",
      "status": {
        "phase": 2,
        "level": 1,
        "skillLevel": 4,
        "equipLevel": 0
      },
      "stats": {
        "maxHp": 1237,
        "atk": 362,
        "def": 87,
        "res": 10,
        "cost": 14,
        "blockCnt": 1,
        "bat": 2.85,
        "aspd": 100,
        "respawnTime": 66,
        "spRecovery": 1,
        "hpRecoveryPerSec": 0,
        "moveSpeed": 1,
        "tauntLevel": 0,
        "massLevel": 0,
        "deployLimit": 1,
        "deckStack": 0
      },
      "immunities": {
        "stun": false,
        "silence": false,
        "sleep": false,
        "frozen": false,
        "levitate": false
      },
      "rangeId": "3-17",
      "rangeGrid": [
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          2,
          3
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          0
        ],
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          -1,
          2
        ],
        [
          -1,
          3
        ],
        [
          -2,
          1
        ],
        [
          -2,
          2
        ],
        [
          -2,
          3
        ]
      ],
      "dmgType": "heal",
      "attackKind": "heal",
      "projectile": "orb",
      "canHitFly": false,
      "targetPriority": null,
      "skill": {
        "skillId": "skchr_agoat2_3",
        "iconId": "skchr_agoat2_3",
        "name": "火山回响",
        "level": 4,
        "desc": "攻击范围扩大至整个战场，治疗变为35%治疗量和元素损伤回复量的5连发，优先治疗不同的目标，第二天赋的效果提升至2.9倍",
        "descRaw": "攻击范围扩大至整个战场，治疗变为<@ba.vup>35%</>治疗量和<$ba.dt.element>元素损伤</>回复量的<@ba.vup>5</>连发，优先治疗不同的目标，第二天赋的效果提升至<@ba.vup>2.9</>倍",
        "skillType": "MANUAL",
        "durationType": "NONE",
        "duration": 50,
        "spType": "INCREASE_WITH_TIME",
        "spCost": 75,
        "initSp": 30,
        "maxChargeTime": 1,
        "increment": 1,
        "bb": {
          "attack@heal_scale": 0.35,
          "talent_scale": 2.9
        },
        "bbStr": {},
        "rangeId": null,
        "rangeGrid": null,
        "prefabId": "skchr_agoat2_3",
        "trigger": {
          "rule": "GDGLOW_SKILL_2",
          "rawRule": "GDGLOW_SKILL_2",
          "customRangeGrid": null
        },
        "index": 2,
        "overrideTokenKey": null
      },
      "talents": [
        {
          "name": "氤氲",
          "desc": "普通治疗使目标每秒额外受到一次治疗量和元素损伤回复量为10%的增益治疗，持续6秒（最多叠加3层）"
        },
        {
          "name": "火山灰疗愈",
          "desc": "攻击范围内的友方单位生命上限+8%（+2%），且受到的元素损伤降低12%"
        }
      ],
      "tokens": [],
      "module": {
        "id": "uniequip_002_agoat2",
        "name": "想要留住的声音",
        "type": "WDM-X",
        "level": 0,
        "icon": "uniequip_002_agoat2"
      },
      "assets": {
        "avatar": "char_1016_agoat2",
        "portrait": "char_1016_agoat2_1",
        "spine": "char_1016_agoat2",
        "skillIcon": "skchr_agoat2_3",
        "subProfIcon": "sub_wandermedic_icon"
      },
      "skills": [
        {
          "index": 0,
          "id": "skchr_agoat2_1",
          "iconId": "skchr_agoat2_1",
          "name": "无声润物",
          "desc": "攻击力+20%，每次可额外治疗一名单位，攻击范围内所有友方单位每秒回复纯烬艾雅法拉攻击力4%的元素损伤\n持续时间无限",
          "descRaw": "攻击力<@ba.vup>+20%</>，每次可额外治疗一名单位，攻击范围内所有友方单位每秒回复纯烬艾雅法拉攻击力<@ba.vup>4%</>的<$ba.dt.element>元素损伤</>\n<@ba.rem>持续时间无限</>",
          "spCost": 74,
          "initSp": 0,
          "duration": -1,
          "skillType": "AUTO",
          "isDefault": false
        },
        {
          "index": 1,
          "id": "skchr_agoat2_2",
          "iconId": "skchr_agoat2_2",
          "name": "云霭荫佑",
          "desc": "立即对攻击范围内所有友方单位进行一次治疗，并生成一个持续12秒的范围损伤屏障，为范围内的友方单位吸收相当于攻击力500%的元素损伤",
          "descRaw": "立即对攻击范围内所有友方单位进行一次治疗，并生成一个持续<@ba.vup>12</>秒的范围<$ba.epbarrier>损伤屏障</>，为范围内的友方单位吸收相当于攻击力<@ba.vup>500%</>的<$ba.dt.element>元素损伤</>",
          "spCost": 27,
          "initSp": 0,
          "duration": -1,
          "skillType": "MANUAL",
          "isDefault": false
        },
        {
          "index": 2,
          "id": "skchr_agoat2_3",
          "iconId": "skchr_agoat2_3",
          "name": "火山回响",
          "desc": "攻击范围扩大至整个战场，治疗变为35%治疗量和元素损伤回复量的5连发，优先治疗不同的目标，第二天赋的效果提升至2.9倍",
          "descRaw": "攻击范围扩大至整个战场，治疗变为<@ba.vup>35%</>治疗量和<$ba.dt.element>元素损伤</>回复量的<@ba.vup>5</>连发，优先治疗不同的目标，第二天赋的效果提升至<@ba.vup>2.9</>倍",
          "spCost": 75,
          "initSp": 30,
          "duration": 50,
          "skillType": "MANUAL",
          "isDefault": true
        }
      ],
      "potDown": {
        "0": {
          "stats.cost": 16
        },
        "1": {
          "stats.respawnTime": 70
        },
        "2": {
          "stats.atk": 339
        },
        "4": {
          "stats.cost": 15
        }
      },
      "id": "char_1016_agoat2",
      "avatar": "char_1016_agoat2",
      "professionShort": "医",
      "subProfession": "行医",
      "skillIdx": 2,
      "bench": false
    }
  }
};
