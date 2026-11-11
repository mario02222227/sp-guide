/*!
 * Source: Closure Wiki - Stronghold Protocol
 * https://closure.wiki/zh-cn/stronghold-protocol/3
 * License: no explicit content reuse license found; site describes itself as
 * non-commercial fan project; game assets belong to their rights holders.
 * Contents: operator traits, elite traits, bonds, bond effects/thresholds, strategies.
 */
window.SP_SOURCES = window.SP_SOURCES || {};
window.SP_SOURCES.closure = {
  "operatorMeta": {
    "sbell2": {
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人陷入冻结自身回复 1 点技力，并使已激活的【谢拉格】层数 +1 （每回合至多叠加24层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人冻结自身回复 2 点技力，并使已激活的【谢拉格】层数 +2 （每回合至多叠加48层）",
      "bonds": [
        "kjerag",
        "arcane"
      ],
      "inPool": true
    },
    "pramanix": {
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人进入冻结使已激活的【谢拉格】层数 +1 （每回合至多叠加16层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人进入冻结使已激活的【谢拉格】层数 +2 （每回合至多叠加32层）",
      "bonds": [
        "kjerag",
        "empty"
      ],
      "inPool": true
    },
    "gnosis": {
      "trait": "整备能力 <获得时>获得一次特殊刷新，下次刷新至少出现一名谢拉格干员",
      "eliteTrait": "整备能力 <获得时>获得一次特殊刷新，下次刷新至少出现两名谢拉格干员",
      "bonds": [
        "kjerag",
        "swift"
      ],
      "inPool": true
    },
    "kjera": {
      "trait": "整备能力 <获得时>获得一件“谢拉格不融冰”",
      "eliteTrait": "整备能力 <获得时>获得两件“谢拉格不融冰”",
      "bonds": [
        "kjerag",
        "miracle"
      ],
      "inPool": true
    },
    "yak": {
      "trait": "作战能力 <战斗中>对每名敌人首次造成伤害时使目标陷入 2秒 寒冷",
      "eliteTrait": "作战能力 <战斗中>对每名敌人首次造成伤害时使目标陷入 4秒 寒冷",
      "bonds": [
        "kjerag",
        "steadfast"
      ],
      "inPool": true
    },
    "harold": {
      "trait": "作战能力 <战斗中>【维多利亚】【谢拉格】每叠加5层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【维多利亚】【谢拉格】每叠加5层，本干员攻击力 +2%",
      "bonds": [
        "victoria",
        "kjerag"
      ],
      "inPool": true
    },
    "svash2": {
      "trait": "持续叠加 <战斗中>身前一格【谢拉格】【灵巧】干员每场战斗的叠层上限 +75%",
      "eliteTrait": "持续叠加 <战斗中>身前一格【谢拉格】【灵巧】干员每场战斗的叠层上限 +150%",
      "bonds": [
        "kjerag",
        "skillful",
        "invest"
      ],
      "inPool": true
    },
    "degen": {
      "trait": "作战能力 <战斗中>【卡西米尔】【谢拉格】【莱塔尼亚】每叠加6层，本干员技力自然回复速度 +0.01 /秒，生命上限 +1%",
      "eliteTrait": "作战能力 <战斗中>【卡西米尔】【谢拉格】【莱塔尼亚】每叠加3层，本干员技力自然回复速度 +0.01 /秒，生命上限 +1%",
      "bonds": [
        "kazimierz",
        "kjerag",
        "lethania"
      ],
      "inPool": true
    },
    "snhunt": {
      "trait": "单次叠加 <获得时>【谢拉格】【精准】层数 +4",
      "eliteTrait": "单次叠加 <获得时>【谢拉格】【精准】层数 +8",
      "bonds": [
        "kjerag",
        "precision"
      ],
      "inPool": true
    },
    "bldsk": {
      "trait": "持续叠加 <战斗开始时>使身前一格干员获得特质“<开启技能时>使自身已激活的盟约层数 +1 （每回合至多叠加7层）”",
      "eliteTrait": "持续叠加 <战斗开始时>使身前一格干员获得特质“<开启技能时>使自身已激活的盟约层数 +2 （每回合至多叠加14层）”",
      "bonds": [
        "skillful",
        "doc"
      ],
      "inPool": true
    },
    "cetsyr": {
      "trait": "持续叠加 <休整期结束时>使已激活的核心盟约层数 +10",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的核心盟约层数 +20",
      "bonds": [
        "mani"
      ],
      "inPool": true
    },
    "archet": {
      "trait": "持续叠加 <进入休整期时>使自身及身前一格干员已激活的盟约层数 +3",
      "eliteTrait": "持续叠加 <进入休整期时>使自身及身前一格干员已激活的盟约层数 +6",
      "bonds": [
        "precision",
        "visi"
      ],
      "inPool": true
    },
    "lisa": {
      "trait": "特异化 <进入休整期时>触发身前一格的其他干员的“获得时”类效果",
      "eliteTrait": "特异化 <进入休整期时>触发身前两格的其他干员的“获得时”类效果",
      "bonds": [
        "siracusa"
      ],
      "inPool": true
    },
    "char_498_inside": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "laterano",
        "swift"
      ],
      "inPool": false
    },
    "char_306_leizi": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "yan"
      ],
      "inPool": false
    },
    "char_4137_udflow": {
      "trait": "作战能力 <战斗中>部署时【阿戈尔】盟约每叠加20层，使自身及周围四格的干员攻击速度 +1 ，持续30秒",
      "eliteTrait": "作战能力 <战斗中>部署时【阿戈尔】盟约每叠加10层，使自身及周围四格的干员攻击速度 +1 ，持续30秒",
      "bonds": [
        "egir",
        "steadfast"
      ],
      "inPool": true
    },
    "char_494_vendla": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "victoria",
        "deputy"
      ],
      "inPool": false
    },
    "char_145_prove": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "siracusa"
      ],
      "inPool": false
    },
    "char_102_texas": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "solo",
        "siracusa"
      ],
      "inPool": false
    },
    "char_4100_caper": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "precision"
      ],
      "inPool": false
    },
    "char_196_sunbr": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "steadfast"
      ],
      "inPool": false
    },
    "char_127_estell": {
      "trait": "持续叠加 <战斗中>每次开启技能时使已激活的【萨尔贡】层数 +1 （每回合至多叠加2层）",
      "eliteTrait": "持续叠加 <战斗中>每次开启技能时使已激活的【萨尔贡】层数 +2 （每回合至多叠加4层）",
      "bonds": [
        "sargon",
        "solo"
      ],
      "inPool": true
    },
    "char_258_podego": {
      "trait": "整备能力 <售出时>下回合额外获得 1 资金",
      "eliteTrait": "整备能力 <售出时>下回合额外获得 2 资金",
      "bonds": [
        "doc",
        "swift"
      ],
      "inPool": true
    },
    "char_253_greyy": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "skillful"
      ],
      "inPool": false
    },
    "char_469_indigo": {
      "trait": "持续叠加 <休整期结束时>使已激活的【伊比利亚】层数+2",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【伊比利亚】层数+4",
      "bonds": [
        "iberia"
      ],
      "inPool": true
    },
    "char_337_utage": {
      "trait": "单次叠加 <获得时>【不屈】层数 +4",
      "eliteTrait": "单次叠加 <获得时>【不屈】层数 +8",
      "bonds": [
        "indom"
      ],
      "inPool": true
    },
    "char_496_wildmn": {
      "trait": "持续叠加 <战斗中>部署时使已激活的【卡西米尔】层数 +1 （每回合至多叠加2层）",
      "eliteTrait": "持续叠加 <战斗中>部署时使已激活的【卡西米尔】层数 +2 （每回合至多叠加4层）",
      "bonds": [
        "kazimierz",
        "deputy"
      ],
      "inPool": true
    },
    "char_107_liskam": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "indom"
      ],
      "inPool": false
    },
    "char_279_excu": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "laterano",
        "precision"
      ],
      "inPool": false
    },
    "char_108_silent": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "visi"
      ],
      "inPool": false
    },
    "char_4122_grabds": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "yan",
        "skillful"
      ],
      "inPool": false
    },
    "char_4139_papyrs": {
      "trait": "作战能力 <战斗中>每次开启技能时使身前一格干员回复 2 点技力",
      "eliteTrait": "作战能力 <战斗中>每次开启技能时使身前一格干员回复 4 点技力",
      "bonds": [
        "sargon",
        "doc"
      ],
      "inPool": true
    },
    "char_143_ghost": {
      "trait": "持续叠加 <战斗中>部署时使已激活的【阿戈尔】层数 +1 （每回合至多叠加1层）",
      "eliteTrait": "持续叠加 <战斗中>部署时使已激活的【阿戈尔】层数 +2 （每回合至多叠加2层）",
      "bonds": [
        "egir"
      ],
      "inPool": true
    },
    "char_381_bubble": {
      "trait": "持续叠加 <战斗中>每次开启技能时使已激活的【萨尔贡】【坚守】层数 +2 （每回合至多叠加4层）",
      "eliteTrait": "持续叠加 <战斗中>每次开启技能时使已激活的【萨尔贡】【坚守】层数 +4 （每回合至多叠加8层）",
      "bonds": [
        "sargon",
        "steadfast"
      ],
      "inPool": true
    },
    "char_491_humus": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "raid"
      ],
      "inPool": false
    },
    "char_4040_rockr": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "victoria",
        "arcane"
      ],
      "inPool": false
    },
    "char_4016_kazema": {
      "trait": "持续叠加 <战斗中>自身被击倒或与傀儡发生替换时使已激活的【不屈】层数 +2 （每回合至多叠加10层）",
      "eliteTrait": "持续叠加 <战斗中>自身被击倒或与傀儡发生替换时使已激活的【不屈】层数 +4 （每回合至多叠加20层）",
      "bonds": [
        "indom"
      ],
      "inPool": true
    },
    "char_237_gravel": {
      "trait": "持续叠加 <战斗中>部署时使已激活的【卡西米尔】【不屈】层数 +2 （每场战斗至多叠加12层）",
      "eliteTrait": "持续叠加 <战斗中>部署时使已激活的【卡西米尔】【不屈】层数 +4 （每场战斗至多叠加24层）",
      "bonds": [
        "kazimierz",
        "indom"
      ],
      "inPool": true
    },
    "char_4191_tippi": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "swift",
        "skillful"
      ],
      "inPool": false
    },
    "char_181_flower": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "deputy",
        "empty"
      ],
      "inPool": false
    },
    "char_140_whitew": {
      "trait": "单次叠加 <获得时>【叙拉古】层数 +2",
      "eliteTrait": "单次叠加 <获得时>【叙拉古】层数 +4",
      "bonds": [
        "siracusa"
      ],
      "inPool": true
    },
    "char_4207_branch": {
      "trait": "持续叠加 <进入休整期时>转化 2 层【乌萨斯】临时层数为固定层数",
      "eliteTrait": "持续叠加 <进入休整期时>转化 4 层【乌萨斯】临时层数为固定层数",
      "bonds": [
        "ursus",
        "indom"
      ],
      "inPool": true
    },
    "char_431_ashlok": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "kazimierz",
        "steadfast"
      ],
      "inPool": false
    },
    "char_4151_tinman": {
      "trait": "单次叠加 <获得时>【投资人】层数 +4",
      "eliteTrait": "单次叠加 <获得时>【投资人】层数 +8",
      "bonds": [
        "invest"
      ],
      "inPool": true
    },
    "char_103_angel": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "laterano",
        "miracle"
      ],
      "inPool": false
    },
    "char_294_ayer": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "skillful"
      ],
      "inPool": false
    },
    "char_308_swire": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "yan",
        "visi"
      ],
      "inPool": false
    },
    "char_1033_swire2": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "yan",
        "invest"
      ],
      "inPool": false
    },
    "char_263_skadi": {
      "trait": "持续叠加 <战斗中>部署时使已激活的【阿戈尔】层数 +4 （每场战斗至多叠加8层）",
      "eliteTrait": "持续叠加 <战斗中>部署时使已激活的【阿戈尔】层数 +8 （每场战斗至多叠加16层）",
      "bonds": [
        "egir",
        "raid"
      ],
      "inPool": true
    },
    "char_4148_philae": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "sargon"
      ],
      "inPool": false
    },
    "char_388_mint": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "victoria"
      ],
      "inPool": false
    },
    "char_4079_haini": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "egir",
        "arcane"
      ],
      "inPool": false
    },
    "char_440_pinecn": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "swift",
        "empty"
      ],
      "inPool": false
    },
    "char_423_blemsh": {
      "trait": "持续叠加 <战斗中>部署时使自身已激活的盟约层数 +3 （每场战斗至多叠加9层）",
      "eliteTrait": "持续叠加 <战斗中>部署时使自身已激活的盟约层数 +6 （每场战斗至多叠加18层）",
      "bonds": [
        "kazimierz",
        "raid"
      ],
      "inPool": true
    },
    "char_4054_malist": {
      "trait": "整备能力 购买价格为 1",
      "eliteTrait": "整备能力 购买价格为 1",
      "bonds": [
        "sargon"
      ],
      "inPool": true
    },
    "char_150_snakek": {
      "trait": "持续叠加 <休整期结束时>使已激活的【坚守】层数 +4",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【坚守】层数 +8",
      "bonds": [
        "steadfast"
      ],
      "inPool": true
    },
    "char_126_shotst": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "kazimierz",
        "solo"
      ],
      "inPool": false
    },
    "char_4026_vulpis": {
      "trait": "整备能力 <获得时> 获得 1 次免费刷新（触发2次后升级，至多获得3次免费刷新）",
      "eliteTrait": "整备能力 <获得时> 获得 1 次免费刷新（触发2次后升级，至多获得3次免费刷新）",
      "bonds": [
        "siracusa",
        "swift"
      ],
      "inPool": true
    },
    "char_427_vigil": {
      "trait": "持续叠加 <战斗中>造成的伤害变为弱点伤害（根据敌人的防御力与法术抗性变换伤害类型）； 每击倒一名敌人使已激活的【叙拉古】【精准】层数 +2 （每回合至多叠加8层）",
      "eliteTrait": "持续叠加 <战斗中>造成的伤害变为弱点伤害（根据敌人的防御力与法术抗性变换伤害类型）； 每击倒一名敌人使已激活的【叙拉古】【精准】层数 +4 （每回合至多叠加16层）",
      "bonds": [
        "siracusa",
        "precision"
      ],
      "inPool": true
    },
    "char_4194_rmixer": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "laterano",
        "steadfast"
      ],
      "inPool": false
    },
    "char_213_mostma": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "laterano",
        "arcane"
      ],
      "inPool": false
    },
    "char_4087_ines": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "visi",
        "raid"
      ],
      "inPool": false
    },
    "char_1021_kroos2": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "precision"
      ],
      "inPool": false
    },
    "char_222_bpipe": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "victoria",
        "visi",
        "indom"
      ],
      "inPool": false
    },
    "char_437_mizuki": {
      "trait": "作战能力 <战斗中>【阿戈尔】盟约每叠加20层，自身及周围四格干员每次造成伤害时使目标移动速度 -1% ，持续3秒",
      "eliteTrait": "作战能力 <战斗中>【阿戈尔】盟约每叠加10层，自身及周围四格干员每次造成伤害时使目标移动速度 -1% ，持续3秒",
      "bonds": [
        "egir",
        "skillful"
      ],
      "inPool": true
    },
    "char_446_aroma": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "siracusa",
        "arcane"
      ],
      "inPool": false
    },
    "char_4162_cathy": {
      "trait": "整备能力 <获得时>获得一件维式重锤，小概率获得特殊维式重锤",
      "eliteTrait": "整备能力 <获得时>获得一件特殊维式重锤，小概率获得终极维式重锤",
      "bonds": [
        "victoria",
        "visi"
      ],
      "inPool": true
    },
    "char_474_glady": {
      "trait": "整备能力 <进入休整期时>若同一行有3名干员，获得1个幽灵鲨、安哲拉、深巡或斯卡蒂",
      "eliteTrait": "整备能力 <进入休整期时>获得1个幽灵鲨、安哲拉、深巡或斯卡蒂",
      "bonds": [
        "egir"
      ],
      "inPool": true
    },
    "char_373_lionhd": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "swift",
        "precision"
      ],
      "inPool": false
    },
    "char_1028_texas2": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "siracusa",
        "raid"
      ],
      "inPool": false
    },
    "char_136_hsguma": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "yan"
      ],
      "inPool": false
    },
    "char_311_mudrok": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "solo"
      ],
      "inPool": false
    },
    "char_420_flamtl": {
      "trait": "持续叠加 <休整期结束时>整备区每有一名干员，使已激活的【卡西米尔】【迅捷】层数 +1",
      "eliteTrait": "持续叠加 <休整期结束时>整备区每有一名干员，使已激活的【卡西米尔】【迅捷】层数 +2",
      "bonds": [
        "kazimierz",
        "swift"
      ],
      "inPool": true
    },
    "char_430_fartth": {
      "trait": "作战能力 <战斗中>攻击范围内每有一名敌人被击倒使攻击范围内及整备区中的干员再部署时间 -3秒",
      "eliteTrait": "作战能力 <战斗中>攻击范围内每有一名敌人被击倒使攻击范围内及整备区中的干员再部署时间 -6秒",
      "bonds": [
        "kazimierz",
        "precision"
      ],
      "inPool": true
    },
    "char_128_plosis": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "deputy",
        "skillful"
      ],
      "inPool": false
    },
    "char_172_svrash": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "kjerag"
      ],
      "inPool": false
    },
    "char_1026_gvial2": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "sargon"
      ],
      "inPool": false
    },
    "char_426_billro": {
      "trait": "整备能力 <获得时>获得一件“迅捷作战粮”",
      "eliteTrait": "整备能力 <获得时>获得两件“迅捷作战粮”",
      "bonds": [
        "lethania",
        "sargon",
        "swift"
      ],
      "inPool": true
    },
    "char_1032_excu2": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "laterano",
        "visi"
      ],
      "inPool": false
    },
    "char_4056_titi": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "sargon",
        "precision"
      ],
      "inPool": false
    },
    "char_1040_blaze2": {
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人触发元素损伤爆发使已激活的【炎】【维多利亚】层数 +1 （每回合至多叠加12层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人触发元素损伤爆发使已激活的【炎】【维多利亚】层数 +2 （每回合至多叠加24层）",
      "bonds": [
        "yan",
        "victoria",
        "swift"
      ],
      "inPool": true
    },
    "char_4145_ulpia": {
      "trait": "作战能力 <战斗中>部署时【阿戈尔】盟约每叠加20层，使自身及周围四格的干员攻击力 +1% ，持续30秒",
      "eliteTrait": "作战能力 <战斗中>部署时【阿戈尔】盟约每叠加10层，使自身及周围四格的干员攻击力 +1% ，持续30秒",
      "bonds": [
        "egir"
      ],
      "inPool": true
    },
    "char_4010_etlchi": {
      "trait": "作战能力 <战斗中>【灵巧】【不屈】每叠加3层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【灵巧】【不屈】每叠加3层，本干员攻击力 +2%",
      "bonds": [
        "skillful",
        "indom"
      ],
      "inPool": true
    },
    "char_350_surtr": {
      "trait": "持续叠加 <战斗中>每击倒一名敌人使已激活的【突袭】【不屈】层数 +4 （每回合至多叠加16层）",
      "eliteTrait": "持续叠加 <战斗中>每击倒一名敌人使已激活的【突袭】【不屈】层数 +8 （每回合至多叠加32层）",
      "bonds": [
        "raid",
        "indom"
      ],
      "inPool": true
    },
    "char_4039_horn": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "victoria"
      ],
      "inPool": false
    },
    "char_202_demkni": {
      "trait": "特异化 身前一格干员若为“休整期结束时”特质，本干员的特质与其相同",
      "eliteTrait": "特异化 身前一格干员若为“休整期结束时”特质，本干员的特质与其相同",
      "bonds": [
        "steadfast",
        "empty"
      ],
      "inPool": true
    },
    "char_2015_dusk": {
      "trait": "持续叠加 <休整期结束时> 本回合每获得过一名干员，使已激活的【炎】【奥术】层数 +2 （每回合至多叠加24层）",
      "eliteTrait": "持续叠加 <休整期结束时> 本回合每获得过一名干员，使已激活的【炎】【奥术】层数 +4 （每回合至多叠加48层）",
      "bonds": [
        "yan",
        "arcane"
      ],
      "inPool": true
    },
    "char_1023_ghost2": {
      "trait": "作战能力 <战斗中>自身被击倒或与替身发生替换时使周围八格的【阿戈尔】干员回复 5 点技力",
      "eliteTrait": "作战能力 <战斗中>自身被击倒或与替身发生替换时使周围八格的【阿戈尔】干员回复 10 点技力",
      "bonds": [
        "egir",
        "indom"
      ],
      "inPool": true
    },
    "char_1039_thorn2": {
      "trait": "持续叠加 <休整期结束时>使已激活的【伊比利亚】【迅捷】层数 +12",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【伊比利亚】【迅捷】层数 +24",
      "bonds": [
        "iberia",
        "swift"
      ],
      "inPool": true
    },
    "char_264_f12yin": {
      "trait": "作战能力 <战斗中>造成的伤害变为弱点伤害（根据敌人的防御力与法术抗性变换伤害类型）",
      "eliteTrait": "作战能力 <战斗中>造成的伤害变为弱点伤害（根据敌人的防御力与法术抗性变换伤害类型）",
      "bonds": [
        "invest"
      ],
      "inPool": true
    },
    "char_4064_mlynar": {
      "trait": "作战能力 <战斗中>【卡西米尔】每叠加5层，本干员部署后100秒内基础攻击力 +10 、基础生命上限 +50",
      "eliteTrait": "作战能力 <战斗中>【卡西米尔】每叠加5层，本干员部署后100秒内基础攻击力 +20 、基础生命上限 +100",
      "bonds": [
        "kazimierz"
      ],
      "inPool": true
    },
    "char_291_aglina": {
      "trait": "持续叠加 <休整期结束时>本回合每进行过1次刷新，使已激活的【叙拉古】层数 +2 （每回合至多叠加8层），【奇迹】层数 +1 （每回合至多叠加4层）",
      "eliteTrait": "持续叠加 <休整期结束时>本回合每进行过1次刷新，使已激活的【叙拉古】层数 +4 （每回合至多叠加16层），【奇迹】层数 +2 （每回合至多叠加8层）",
      "bonds": [
        "siracusa",
        "miracle"
      ],
      "inPool": true
    },
    "char_341_sntlla": {
      "trait": "持续叠加 <休整期结束时><休整期开始时>使已激活的【远见】层数 +3",
      "eliteTrait": "持续叠加 <休整期结束时><休整期开始时>使已激活的【远见】层数 +6",
      "bonds": [
        "visi"
      ],
      "inPool": true
    },
    "char_4146_nymph": {
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人陷入恐惧使已激活的【迅捷】层数 +4 （每回合至多叠加20层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人陷入恐惧使已激活的【迅捷】层数 +8 （每回合至多叠加40层）",
      "bonds": [
        "swift",
        "visi"
      ],
      "inPool": true
    },
    "char_4196_reckpr": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "yan",
        "miracle"
      ],
      "inPool": false
    },
    "char_4193_lemuen": {
      "trait": "作战能力 <战斗中>【精准】每叠加4层，本干员技力自然回复速度 +0.01 /秒",
      "eliteTrait": "作战能力 <战斗中>【精准】每叠加2层，本干员技力自然回复速度 +0.01 /秒",
      "bonds": [
        "precision"
      ],
      "inPool": true
    },
    "char_2026_yu": {
      "trait": "持续叠加 <战斗中>周围八格每有一名敌人触发元素损伤爆发使自身已激活的盟约层数 +1 （每回合至多叠加8层）",
      "eliteTrait": "持续叠加 <战斗中>周围八格每有一名敌人触发元素损伤爆发使自身已激活的盟约层数 +2 （每回合至多叠加16层）",
      "bonds": [
        "yan",
        "steadfast"
      ],
      "inPool": true
    },
    "char_1012_skadi2": {
      "trait": "持续叠加 <战斗中>攻击范围内每有一名我方干员部署使已激活的【阿戈尔】层数 +2 （每场战斗至多叠加20层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名我方干员部署使已激活的【阿戈尔】层数 +4 （每场战斗至多叠加40层）",
      "bonds": [
        "egir",
        "doc"
      ],
      "inPool": true
    },
    "char_472_pasngr": {
      "trait": "整备能力 <进入休整期时>获得1件“盟约之币”或“萨尔贡浓茶”，有小概率发现“拟态物质”",
      "eliteTrait": "整备能力 <进入休整期时>获得2件“盟约之币”或“萨尔贡浓茶”，有小概率发现“拟态物质”",
      "bonds": [
        "sargon",
        "arcane"
      ],
      "inPool": true
    },
    "char_4058_pepe": {
      "trait": "持续叠加 <战斗中>周围八格每有一名敌人或干员进入沉睡或眩晕时使自身及身后一格干员已激活的盟约层数 +1 （每回合至多叠加9层）",
      "eliteTrait": "持续叠加 <战斗中>周围八格每有一名敌人或干员进入沉睡或眩晕时使自身及身后一格干员已激活的盟约层数 +2 （每回合至多叠加18层）",
      "bonds": [
        "sargon",
        "skillful"
      ],
      "inPool": true
    },
    "char_1019_siege2": {
      "trait": "持续叠加 <休整期结束时>场上每有一名不同阶的【维多利亚】干员，使已激活的【维多利亚】【奇迹】层数 +2",
      "eliteTrait": "持续叠加 <休整期结束时>场上每有一名不同阶的【维多利亚】干员，使已激活的【维多利亚】【奇迹】层数 +4",
      "bonds": [
        "victoria",
        "miracle"
      ],
      "inPool": true
    },
    "char_1020_reed2": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "victoria",
        "precision"
      ],
      "inPool": false
    },
    "char_245_cello": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "laterano"
      ],
      "inPool": false
    },
    "char_249_mlyss": {
      "trait": "整备能力 <获得时>获得一个“变形同构体”",
      "eliteTrait": "整备能力 <获得时>获得两个“变形同构体”",
      "bonds": [
        "empty"
      ],
      "inPool": true
    },
    "char_391_rosmon": {
      "trait": "持续叠加 <休整期结束时>使已激活的【精准】【助力】层数 +10",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【精准】【助力】层数 +20",
      "bonds": [
        "precision",
        "deputy"
      ],
      "inPool": true
    },
    "char_1041_angel2": {
      "trait": "",
      "eliteTrait": "",
      "bonds": [
        "laterano"
      ],
      "inPool": false
    },
    "char_4042_lumen": {
      "trait": "持续叠加 <战斗结束时>每有一名存活的我方干员，使已激活的【伊比利亚】【聚合】层数 +1",
      "eliteTrait": "持续叠加 <战斗结束时>每有一名存活的我方干员，使已激活的【伊比利亚】【聚合】层数 +2",
      "bonds": [
        "iberia",
        "doc"
      ],
      "inPool": true
    },
    "char_4082_qiubai": {
      "trait": "单次叠加 <获得时>【炎】【灵巧】层数 +6",
      "eliteTrait": "单次叠加 <获得时>【炎】【灵巧】层数 +12",
      "bonds": [
        "yan",
        "skillful"
      ],
      "inPool": true
    },
    "char_1047_halo2": {
      "trait": "持续叠加 <休整期结束时> 本回合每消耗3资金，使已激活的【奥术】层数 +2 （每回合至多叠加18层）",
      "eliteTrait": "持续叠加 <休整期结束时> 本回合每消耗3资金，使已激活的【奥术】层数 +4 （每回合至多叠加36层）",
      "bonds": [
        "arcane"
      ],
      "inPool": true
    },
    "char_1014_nearl2": {
      "trait": "持续叠加 <战斗中>被击倒时召唤整备区最右侧的【卡西米尔】【突袭】干员上场，并使自身及被召唤干员已激活的盟约层数 +6 （每名干员每回合至多叠加12层）",
      "eliteTrait": "持续叠加 <战斗中>被击倒时召唤整备区最右侧的【卡西米尔】【突袭】干员上场，并使自身及被召唤干员已激活的盟约层数 +12 （每名干员每回合至多叠加24层）",
      "bonds": [
        "kazimierz",
        "raid"
      ],
      "inPool": true
    },
    "char_1038_whitw2": {
      "trait": "持续叠加 <战斗中>每击倒一名敌人使已激活的【叙拉古】层数 +2 （每场战斗至多叠加20层） （晋升为精锐状态时，使所有【叙拉古】干员获得此效果）",
      "eliteTrait": "持续叠加 <战斗中>所有【叙拉古】干员每击倒一名敌人使已激活的【叙拉古】层数 +4 （每场战斗至多叠加40层）",
      "bonds": [
        "siracusa"
      ],
      "inPool": true
    },
    "char_1016_agoat2": {
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【莱塔尼亚】【聚合】层数 +2 （每场战斗至多叠加20层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【莱塔尼亚】【聚合】层数 +4 （每场战斗至多叠加40层）",
      "bonds": [
        "doc",
        "lethania",
        "visi"
      ],
      "inPool": true
    },
    "t8_01": {
      "name": "慕斯",
      "tier": "I阶",
      "bonds": [
        "victoria"
      ],
      "trait": "持续叠加 <休整期结束时>使已激活的【维多利亚】层数 +1",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【维多利亚】层数 +2",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_02": {
      "name": "灰喉",
      "tier": "I阶",
      "bonds": [
        "precision"
      ],
      "trait": "单次叠加 <获得时>【精准】层数 +2",
      "eliteTrait": "单次叠加 <获得时>【精准】层数 +4",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_03": {
      "name": "卡达",
      "tier": "I阶",
      "bonds": [
        "arcane"
      ],
      "trait": "持续叠加 <休整期结束时>使已激活的【奥术】层数 +1",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【奥术】层数 +2",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_04": {
      "name": "摆渡人",
      "tier": "I阶",
      "bonds": [
        "steadfast",
        "indom"
      ],
      "trait": "单次叠加 <获得时>【坚守】【不屈】层数 +1",
      "eliteTrait": "单次叠加 <获得时>【坚守】【不屈】层数 +2",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_05": {
      "name": "夏栎",
      "tier": "I阶",
      "bonds": [
        "deputy"
      ],
      "trait": "持续叠加 <休整期结束时>使当前已激活且层数最多的盟约层数 +1 （此干员在整备区也生效）",
      "eliteTrait": "持续叠加 <休整期结束时>使当前已激活且层数最多的盟约层数 +2 （此干员在整备区也生效）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_06": {
      "name": "杰克",
      "tier": "I阶",
      "bonds": [
        "raid"
      ],
      "trait": "作战能力 <战斗中>造成的伤害变为弱点伤害（根据敌人的防御力与法术抗性变换伤害类型）",
      "eliteTrait": "作战能力 <战斗中>造成的伤害变为弱点伤害（根据敌人的防御力与法术抗性变换伤害类型）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_07": {
      "name": "霜叶",
      "tier": "I阶",
      "bonds": [
        "skillful"
      ],
      "trait": "单次叠加 <获得时>【灵巧】层数 +2",
      "eliteTrait": "单次叠加 <获得时>【灵巧】层数 +4",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_08": {
      "name": "拜松",
      "tier": "I阶",
      "bonds": [
        "yan"
      ],
      "trait": "单次叠加 <获得时>【炎】层数 +2",
      "eliteTrait": "单次叠加 <获得时>【炎】层数 +4",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_09": {
      "name": "褐果",
      "tier": "I阶",
      "bonds": [
        "doc"
      ],
      "trait": "单次叠加 <获得时>【聚合】层数 +2",
      "eliteTrait": "单次叠加 <获得时>【聚合】层数 +4",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_10": {
      "name": "烈夏",
      "tier": "I阶",
      "bonds": [
        "ursus"
      ],
      "trait": "持续叠加 <战斗开始时>使已激活的【乌萨斯】临时层数 +4",
      "eliteTrait": "持续叠加 <战斗开始时>使已激活的【乌萨斯】临时层数 +8",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_11": {
      "name": "陨星",
      "tier": "I阶",
      "bonds": [
        "swift"
      ],
      "trait": "持续叠加 <战斗中>每次开启技能时使已激活的【迅捷】层数 +1 （每回合至多叠加2层）",
      "eliteTrait": "持续叠加 <战斗中>每次开启技能时使已激活的【迅捷】层数 +2 （每回合至多叠加4层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_12": {
      "name": "地灵",
      "tier": "I阶",
      "bonds": [
        "lethania",
        "solo"
      ],
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【莱塔尼亚】层数 +1 （每回合至多叠加1层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【莱塔尼亚】层数 +2 （每回合至多叠加2层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_13": {
      "name": "折光",
      "tier": "II阶",
      "bonds": [
        "lethania"
      ],
      "trait": "持续叠加 <休整期结束时>使已激活的【莱塔尼亚】层数 +4",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【莱塔尼亚】层数 +8",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_14": {
      "name": "蓝毒",
      "tier": "II阶",
      "bonds": [
        "iberia"
      ],
      "trait": "作战能力 <战斗中>【伊比利亚】每叠加2层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【伊比利亚】每叠加1层，本干员攻击力 +1%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_15": {
      "name": "复奏",
      "tier": "II阶",
      "bonds": [
        "lethania",
        "siracusa",
        "miracle"
      ],
      "trait": "持续叠加 <刷新时>若为本回合首次主动刷新，使已激活的【莱塔尼亚】【叙拉古】层数 +2 （此干员在整备区也生效）",
      "eliteTrait": "持续叠加 <刷新时>若为本回合首次主动刷新，使已激活的【叙拉古】【莱塔尼亚】层数 +4 （此干员在整备区也生效）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_16": {
      "name": "奥斯塔",
      "tier": "II阶",
      "bonds": [
        "siracusa"
      ],
      "trait": "整备能力 <获得时>获得一次免费刷新",
      "eliteTrait": "整备能力 <获得时>获得两次免费刷新",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_17": {
      "name": "Miss.Christine",
      "tier": "II阶",
      "bonds": [
        "victoria",
        "arcane"
      ],
      "trait": "持续叠加 <休整期结束时>使已激活的【维多利亚】【奥术】层数 +3",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【维多利亚】【奥术】层数 +6",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_18": {
      "name": "云迹",
      "tier": "II阶",
      "bonds": [
        "skillful",
        "miracle"
      ],
      "trait": "持续叠加 <战斗中>每次开启技能时使自身已激活的盟约层数 +3 （每回合至多叠加6层）",
      "eliteTrait": "持续叠加 <战斗中>每次开启技能时使自身已激活的盟约层数 +6 （每回合至多叠加12层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_19": {
      "name": "承曦格雷伊",
      "tier": "II阶",
      "bonds": [
        "precision",
        "skillful"
      ],
      "trait": "整备能力 <获得时>获得一件精准狙击镜",
      "eliteTrait": "整备能力 <获得时>获得两件精准狙击镜",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_20": {
      "name": "渡桥",
      "tier": "II阶",
      "bonds": [
        "visi"
      ],
      "trait": "持续叠加 <休整期结束时>使自身及身前一格干员已激活的盟约层数 +2",
      "eliteTrait": "持续叠加 <休整期结束时>使自身及身前一格干员已激活的盟约层数 +4",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_21": {
      "name": "矩",
      "tier": "II阶",
      "bonds": [
        "yan"
      ],
      "trait": "单次叠加 <获得时>获得等同于当前调度中心等级的【炎】层数",
      "eliteTrait": "单次叠加 <获得时>获得等同于当前调度中心等级两倍的【炎】层数",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_22": {
      "name": "星极",
      "tier": "II阶",
      "bonds": [
        "miracle"
      ],
      "trait": "作战能力 只需两名本干员即可合成精锐",
      "eliteTrait": "作战能力 只需两名本干员即可合成精锐",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_23": {
      "name": "瑰盐",
      "tier": "II阶",
      "bonds": [
        "iberia",
        "doc"
      ],
      "trait": "作战能力 <战斗中>【伊比利亚】每叠加3层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【伊比利亚】每叠加3层，本干员攻击力 +2%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_24": {
      "name": "真理",
      "tier": "II阶",
      "bonds": [
        "ursus"
      ],
      "trait": "整备能力 购买价格为 1",
      "eliteTrait": "整备能力 购买价格为 1",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_25": {
      "name": "铸铁",
      "tier": "II阶",
      "bonds": [
        "raid"
      ],
      "trait": "持续叠加 <休整期结束时>使已激活的【突袭】层数 +3",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【突袭】层数 +6",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_26": {
      "name": "星源",
      "tier": "II阶",
      "bonds": [
        "deputy"
      ],
      "trait": "持续叠加 <休整期结束时>使当前已激活且层数最多的盟约层数 +2 （此干员在整备区也生效）",
      "eliteTrait": "持续叠加 <休整期结束时>使当前已激活且层数最多的盟约层数 +4 （此干员在整备区也生效）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_27": {
      "name": "安哲拉",
      "tier": "II阶",
      "bonds": [
        "egir",
        "deputy"
      ],
      "trait": "持续叠加 <战斗中>每击倒一名敌人或我方干员使已激活的【阿戈尔】【助力】层数 +3 （每回合至多叠加9层）",
      "eliteTrait": "持续叠加 <战斗中>每击倒一名敌人或我方干员使已激活的【阿戈尔】【助力】层数 +6 （每回合至多叠加18层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_28": {
      "name": "车尔尼",
      "tier": "III阶",
      "bonds": [
        "lethania",
        "steadfast"
      ],
      "trait": "整备能力 <获得时>获得一件“莱塔尼亚小鼓”",
      "eliteTrait": "整备能力 <获得时>获得两件“莱塔尼亚小鼓”",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_29": {
      "name": "乌啾",
      "tier": "III阶",
      "bonds": [
        "ursus",
        "doc"
      ],
      "trait": "持续叠加 <进入休整期时>场上每有一名【乌萨斯】干员，转化 1 层【乌萨斯】临时层数为固定层数",
      "eliteTrait": "持续叠加 <进入休整期时>场上每有一名【乌萨斯】干员，转化 2 层【乌萨斯】临时层数为固定层数",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_30": {
      "name": "海沫",
      "tier": "III阶",
      "bonds": [
        "iberia",
        "indom"
      ],
      "trait": "整备能力 <休整期结束时>自身售出价格 +1 （自身售出价格至多为4）",
      "eliteTrait": "整备能力 <休整期结束时>自身售出价格 +2 （自身售出价格至多为8）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_31": {
      "name": "旅骨",
      "tier": "III阶",
      "bonds": [
        "iberia",
        "precision"
      ],
      "trait": "持续叠加 <休整期结束时>使自身及身前一格干员已激活的盟约叠加等同于其售出价格的层数",
      "eliteTrait": "持续叠加 <休整期结束时>使自身及身前一格干员已激活的盟约叠加等同于其售出价格2倍的层数",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_32": {
      "name": "风絮",
      "tier": "III阶",
      "bonds": [
        "yan",
        "doc"
      ],
      "trait": "持续叠加 <休整期结束时> 本回合每获得过一名干员，使已激活的【炎】【聚合】层数 +2 （每回合至多叠加16层）",
      "eliteTrait": "持续叠加 <休整期结束时> 本回合每获得过一名干员，使已激活的【炎】【聚合】层数 +4 （每回合至多叠加32层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_33": {
      "name": "极光",
      "tier": "III阶",
      "bonds": [
        "kjerag"
      ],
      "trait": "单次叠加 <获得时> 【谢拉格】层数 +1 （每次触发后升级，至多叠加12层）",
      "eliteTrait": "单次叠加 <获得时> 【谢拉格】层数 +1 （每次触发后升级，至多叠加12层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_34": {
      "name": "水灯心",
      "tier": "III阶",
      "bonds": [
        "victoria",
        "solo",
        "skillful"
      ],
      "trait": "作战能力 <战斗中>造成的伤害变为弱点伤害（根据敌人的防御力与法术抗性变换伤害类型）",
      "eliteTrait": "作战能力 <战斗中>造成的伤害变为弱点伤害（根据敌人的防御力与法术抗性变换伤害类型）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_35": {
      "name": "吉星",
      "tier": "III阶",
      "bonds": [
        "miracle"
      ],
      "trait": "整备能力 <售出时>进行一次 I阶 干员的免费特殊招募 本干员合成为精锐状态后，上述特殊招募变为 V阶 干员",
      "eliteTrait": "整备能力 <售出时>进行一次 V阶 干员的免费特殊招募",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_36": {
      "name": "伊桑",
      "tier": "III阶",
      "bonds": [
        "arcane",
        "raid"
      ],
      "trait": "整备能力 <售出时>随机获得一名当前人数最多盟约的干员（不高于当前调度中心等级；无法获得自身）",
      "eliteTrait": "整备能力 <售出时>随机获得一名当前人数最多盟约的干员（不高于当前调度中心等级；无法获得自身）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_37": {
      "name": "罗比菈塔",
      "tier": "III阶",
      "bonds": [
        "steadfast",
        "deputy"
      ],
      "trait": "持续叠加 <休整期结束时>同一行每有1名干员，使已激活的【坚守】【助力】层数 +2",
      "eliteTrait": "持续叠加 <休整期结束时>同一行每有1名干员，使已激活的【坚守】【助力】层数 +4",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_38": {
      "name": "乌有",
      "tier": "III阶",
      "bonds": [
        "yan"
      ],
      "trait": "整备能力 <获得时>获得一枚“盟约之币”",
      "eliteTrait": "整备能力 <获得时>获得两枚“盟约之币”",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_39": {
      "name": "历阵锐枪芬",
      "tier": "III阶",
      "bonds": [
        "kazimierz",
        "visi"
      ],
      "trait": "作战能力 <战斗中>被击倒时召唤整备区的一名【卡西米尔】干员（优先选择最右侧）上场，并使整备区干员的当前再部署时间 -30%",
      "eliteTrait": "作战能力 <战斗中>被击倒时召唤整备区的一名【卡西米尔】干员（优先选择最右侧）上场，并使整备区干员的当前再部署时间 -60%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_40": {
      "name": "奥尔佳",
      "tier": "III阶",
      "bonds": [
        "ursus",
        "skillful"
      ],
      "trait": "整备能力 <获得时>获得一件乌萨斯呼吸器",
      "eliteTrait": "整备能力 <获得时>获得两件乌萨斯呼吸器",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_41": {
      "name": "青枳",
      "tier": "III阶",
      "bonds": [
        "steadfast",
        "swift"
      ],
      "trait": "持续叠加 <进入休整期时>使自身及身后一格干员已激活的盟约层数 +3",
      "eliteTrait": "持续叠加 <进入休整期时>使自身及身后一格干员已激活的盟约层数 +6",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_42": {
      "name": "黑键",
      "tier": "IV阶",
      "bonds": [
        "lethania",
        "precision"
      ],
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【莱塔尼亚】【精准】层数 +1 （每回合至多叠加8层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【莱塔尼亚】【精准】层数 +2 （每回合至多叠加16层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_43": {
      "name": "艾雅法拉",
      "tier": "IV阶",
      "bonds": [
        "lethania",
        "arcane"
      ],
      "trait": "作战能力 <战斗中>【莱塔尼亚】【奥术】每叠加2层，本干员技力自然回复速度 +0.02 /秒，攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【莱塔尼亚】【奥术】每叠加1层，本干员技力自然回复速度 +0.02 /秒，攻击力 +1%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_44": {
      "name": "赫拉格",
      "tier": "IV阶",
      "bonds": [
        "ursus",
        "raid"
      ],
      "trait": "持续叠加 <战斗中>部署时使已激活的【乌萨斯】【突袭】层数 +4 （每场战斗至多叠加12层）",
      "eliteTrait": "持续叠加 <战斗中>部署时使已激活的【乌萨斯】【突袭】层数 +8 （每场战斗至多叠加24层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_45": {
      "name": "维伊",
      "tier": "IV阶",
      "bonds": [
        "ursus",
        "arcane"
      ],
      "trait": "作战能力 <战斗中>【乌萨斯】每叠加2层，本干员攻击速度 +1",
      "eliteTrait": "作战能力 <战斗中>【乌萨斯】每叠加1层，本干员攻击速度 +1",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_46": {
      "name": "温蒂",
      "tier": "IV阶",
      "bonds": [
        "iberia",
        "steadfast"
      ],
      "trait": "整备能力 售出价格为 3",
      "eliteTrait": "整备能力 售出价格为 6",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_47": {
      "name": "森蚺",
      "tier": "IV阶",
      "bonds": [
        "sargon",
        "indom"
      ],
      "trait": "持续叠加 <战斗中>部署时使已激活的【萨尔贡】【不屈】盟约层数+4（每回合至多叠加12层）",
      "eliteTrait": "持续叠加 <战斗中>部署时使已激活的【萨尔贡】【不屈】盟约层数+8（每回合至多叠加24层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_48": {
      "name": "涤火杰西卡",
      "tier": "IV阶",
      "bonds": [
        "victoria",
        "steadfast"
      ],
      "trait": "持续叠加 <休整期结束时>场上每有一名携带装备的干员，使已激活的【维多利亚】【坚守】层数 +2",
      "eliteTrait": "持续叠加 <休整期结束时>场上每有一名携带装备的干员，使已激活的【维多利亚】【坚守】层数 +4",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_49": {
      "name": "白铁",
      "tier": "IV阶",
      "bonds": [
        "victoria",
        "deputy"
      ],
      "trait": "整备能力 <进入休整期时>使自身携带的装备变为精锐版本",
      "eliteTrait": "整备能力 <进入休整期时>使自身携带的装备变为精锐版本",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_50": {
      "name": "斥罪",
      "tier": "IV阶",
      "bonds": [
        "siracusa",
        "indom"
      ],
      "trait": "作战能力 <战斗中>【叙拉古】【不屈】每叠加3层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【叙拉古】【不屈】每叠加3层，本干员攻击力 +2%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_51": {
      "name": "W",
      "tier": "IV阶",
      "bonds": [
        "swift"
      ],
      "trait": "作战能力 <战斗中>【迅捷】每叠加3层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【迅捷】每叠加3层，本干员攻击力 +2%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_52": {
      "name": "霍尔海雅",
      "tier": "IV阶",
      "bonds": [
        "arcane",
        "precision"
      ],
      "trait": "持续叠加 <战斗中>每次开启技能时使自身已激活的盟约层数 +4 （每场战斗至多叠加12层）",
      "eliteTrait": "持续叠加 <战斗中>每次开启技能时使自身已激活的盟约层数 +8 （每场战斗至多叠加24层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_53": {
      "name": "淬羽赫默",
      "tier": "IV阶",
      "bonds": [
        "deputy"
      ],
      "trait": "持续叠加 <休整期结束时>使整备区每名干员已激活的盟约层数 +1",
      "eliteTrait": "持续叠加 <休整期结束时>使整备区每名干员已激活的盟约层数 +2",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_54": {
      "name": "赫德雷",
      "tier": "IV阶",
      "bonds": [
        "raid"
      ],
      "trait": "持续叠加 <战斗中>部署时使已激活的【突袭】层数 +4 （每回合至多叠加16层）",
      "eliteTrait": "持续叠加 <战斗中>部署时使已激活的【突袭】层数 +8 （每回合至多叠加32层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_55": {
      "name": "夜莺",
      "tier": "IV阶",
      "bonds": [
        "doc",
        "empty"
      ],
      "trait": "持续叠加 <战斗结束时>每有一名存活的我方干员，使自身已激活的盟约层数 +1",
      "eliteTrait": "持续叠加 <战斗结束时>每有一名存活的我方干员，使自身已激活的盟约层数 +2",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_56": {
      "name": "怒潮凛冬",
      "tier": "V阶",
      "bonds": [
        "ursus",
        "miracle"
      ],
      "trait": "作战能力 <战斗中>【乌萨斯】【奇迹】每叠加10层，本干员技力自然回复速度 +0.1 /秒，攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【乌萨斯】【奇迹】每叠加10层，本干员技力自然回复速度 +0.2 /秒，攻击力 +2%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_57": {
      "name": "艾丽妮",
      "tier": "V阶",
      "bonds": [
        "iberia"
      ],
      "trait": "作战能力 <战斗中>周围12格每有一名敌人被击倒自身回复 3 点技力",
      "eliteTrait": "作战能力 <战斗中>周围12格每有一名敌人被击倒自身回复 6 点技力",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_58": {
      "name": "棘刺",
      "tier": "V阶",
      "bonds": [
        "iberia",
        "arcane"
      ],
      "trait": "持续叠加 <休整期结束时>使已激活的【伊比利亚】叠加等同于场上所有干员售出价格的层数（每回合至多叠加12层）",
      "eliteTrait": "持续叠加 <休整期结束时>使已激活的【伊比利亚】叠加等同于场上所有干员售出价格2倍的层数（每回合至多叠加24层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_59": {
      "name": "黍",
      "tier": "V阶",
      "bonds": [
        "yan",
        "visi"
      ],
      "trait": "单次叠加 <获得时>【炎】层数 +8 ，【远见】层数 +4",
      "eliteTrait": "单次叠加 <获得时>【炎】层数 +16 ，【远见】层数 +8",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_60": {
      "name": "薇薇安娜",
      "tier": "V阶",
      "bonds": [
        "lethania",
        "kazimierz",
        "arcane"
      ],
      "trait": "持续叠加 <战斗中>场上其他与自身拥有相同盟约的干员在本回合战斗期的叠层上限 +7",
      "eliteTrait": "持续叠加 <战斗中>场上其他与自身拥有相同盟约的干员在本回合战斗期的叠层上限 +14",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_61": {
      "name": "贝洛内",
      "tier": "V阶",
      "bonds": [
        "siracusa",
        "raid"
      ],
      "trait": "作战能力 <战斗中>【叙拉古】【突袭】每叠加3层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【叙拉古】【突袭】每叠加3层，本干员攻击力 +2%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_62": {
      "name": "老鲤",
      "tier": "V阶",
      "bonds": [
        "invest",
        "yan"
      ],
      "trait": "作战能力 <战斗中>【炎】【投资人】每叠加3层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【炎】【投资人】每叠加3层，本干员攻击力 +2%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_63": {
      "name": "Mon3tr",
      "tier": "V阶",
      "bonds": [
        "empty"
      ],
      "trait": "持续叠加 <战斗中>周围八格干员每场战斗的叠层上限 +30%",
      "eliteTrait": "持续叠加 <战斗中>周围八格干员每场战斗的叠层上限 +60%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_64": {
      "name": "可露希尔",
      "tier": "V阶",
      "bonds": [
        "invest"
      ],
      "trait": "持续叠加 <休整期结束时> 本回合每获得过一名干员，使已激活的【投资人】层数 +2 （每回合至多叠加16层）",
      "eliteTrait": "持续叠加 <休整期结束时> 本回合每获得过一名干员，使已激活的【投资人】层数 +4 （每回合至多叠加32层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_65": {
      "name": "鸿雪",
      "tier": "V阶",
      "bonds": [
        "sargon",
        "precision"
      ],
      "trait": "持续叠加 <战斗中>每次开启技能时使已激活的【萨尔贡】【精准】层数 +4 （每回合至多叠加16层）",
      "eliteTrait": "持续叠加 <战斗中>每次开启技能时使已激活的【萨尔贡】【精准】层数 +8 （每回合至多叠加32层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_66": {
      "name": "冻河",
      "tier": "V阶",
      "bonds": [
        "ursus",
        "swift"
      ],
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【乌萨斯】【迅捷】层数 +1 （每场战斗至多叠加16层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【乌萨斯】【迅捷】层数 +2 （每场战斗至多叠加32层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_67": {
      "name": "阿米娅",
      "tier": "V阶",
      "bonds": [
        "miracle"
      ],
      "trait": "持续叠加 <战斗中>身前一格干员提升盟约层数时，每次提升的层数额外 +1 （不受叠层上限影响）",
      "eliteTrait": "持续叠加 <战斗中>身前一格干员提升盟约层数时，每次提升的层数额外 +2 （不受叠层上限影响）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_68": {
      "name": "克莱门莎",
      "tier": "VI阶",
      "bonds": [
        "egir"
      ],
      "trait": "作战能力 <战斗开始时>【阿戈尔】盟约每叠加20层，使场上所有敌人侵蚀损伤冷却恢复速度 +1%",
      "eliteTrait": "作战能力 <战斗开始时>【阿戈尔】盟约每叠加10层，使场上所有敌人侵蚀损伤冷却恢复速度 +1%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_69": {
      "name": "酒神",
      "tier": "VI阶",
      "bonds": [
        "victoria"
      ],
      "trait": "整备能力 <进入休整期时>获得一件随机装备（不高于当前调度中心等级）",
      "eliteTrait": "整备能力 <进入休整期时>获得两件随机装备（不高于当前调度中心等级）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_70": {
      "name": "逻各斯",
      "tier": "VI阶",
      "bonds": [
        "arcane",
        "visi"
      ],
      "trait": "持续叠加 <获得时>【奥术】层数 +10 ，【远见】层数 +5 <战斗中>【奥术】【远见】每叠加3层，本干员攻击速度 +1",
      "eliteTrait": "持续叠加 <获得时>【奥术】层数 +20 ，【远见】层数 +10 <战斗中>【奥术】【远见】每叠加3层，本干员攻击速度 +2",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_71": {
      "name": "真言",
      "tier": "VI阶",
      "bonds": [
        "sargon"
      ],
      "trait": "作战能力 <战斗中>【萨尔贡】每叠加5层，本干员攻击力 +1%",
      "eliteTrait": "作战能力 <战斗中>【萨尔贡】每叠加5层，本干员攻击力 +2%",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_72": {
      "name": "遥",
      "tier": "VI阶",
      "bonds": [
        "doc",
        "miracle"
      ],
      "trait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【聚合】【奇迹】层数 +1 （每回合至多叠加12层）",
      "eliteTrait": "持续叠加 <战斗中>攻击范围内每有一名敌人被击倒使已激活的【聚合】【奇迹】层数 +2 （每回合至多叠加24层）",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_73": {
      "name": "机械师",
      "tier": "VI阶",
      "bonds": [
        "empty",
        "steadfast"
      ],
      "trait": "整备能力 <进入休整期时>若同一行至少有三名干员，获得一名当前人数最多盟约的干员",
      "eliteTrait": "整备能力 <进入休整期时>获得一名当前人数最多盟约的干员",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_74": {
      "name": "塔露拉",
      "tier": "VI阶",
      "bonds": [
        "ursus",
        "arcane",
        "empty"
      ],
      "trait": "持续叠加 <战斗中>【乌萨斯】盟约获得强化：击倒单位时叠加的临时层数提升至4层；在场6名不同【乌萨斯】干员时，提升至6层",
      "eliteTrait": "持续叠加 <战斗中>【乌萨斯】盟约获得强化：击倒单位时叠加的临时层数提升至6层；在场6名不同【乌萨斯】干员时，提升至8层",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    },
    "t8_75": {
      "name": "帕拉斯",
      "tier": "VI阶",
      "bonds": [
        "skillful",
        "deputy"
      ],
      "trait": "持续叠加 <休整期结束时>使自身以及身前一格干员已激活的盟约层数+9",
      "eliteTrait": "持续叠加 <休整期结束时>使自身以及身前一格干员已激活的盟约层数+18",
      "inPool": true,
      "missingData": true,
      "avatar": "__missing",
      "profession": "",
      "price": null,
      "skills": [],
      "talents": [],
      "stats": {}
    }
  },
  "bondLibrary": {
    "kjerag": {
      "name": "谢拉格",
      "icon": "icon_kjeragship",
      "summary": "伤害提升；对寒冷、冻结目标额外提升。每 100 层获得 1 件不融冰。",
      "effects": [
        {
          "need": "3",
          "text": "谢拉格干员造成的伤害提升；对寒冷 / 冻结敌人获得额外提升（受层数影响）。每叠加 100 层，获得 1 件「谢拉格不融冰」。"
        },
        {
          "need": "6",
          "text": "战斗开始时召唤雪山巨人；每 25 秒寒风使敌人寒冷。强，但会挤掉主 C 和装备位，本攻略不追。"
        }
      ],
      "tag": "核心",
      "thresholds": [
        3,
        6
      ]
    },
    "swift": {
      "name": "迅捷",
      "icon": "icon_swiftship",
      "summary": "技能结束时概率回复 12 点技力；40 层后所有干员额外回复 15 点。",
      "effects": [
        {
          "need": "2",
          "text": "迅捷干员技能结束时有概率立刻回复 12 点技力（受层数影响）。"
        },
        {
          "need": "40",
          "text": "所有干员技能结束时有等概率额外回复 15 点技力。"
        }
      ],
      "tag": "推荐",
      "thresholds": [
        2,
        40
      ]
    },
    "skillful": {
      "name": "灵巧",
      "icon": "icon_skillfulship",
      "summary": "灵巧干员及周围 4 格攻速提升；40 层后变周围 8 格。",
      "effects": [
        {
          "need": "2",
          "text": "灵巧干员及周围 4 格干员攻击速度提升（受层数影响）。"
        },
        {
          "need": "40",
          "text": "生效范围变为灵巧干员周围 8 格。"
        }
      ],
      "tag": "推荐",
      "thresholds": [
        2,
        40
      ]
    },
    "arcane": {
      "name": "奥术",
      "icon": "icon_arcaneship",
      "summary": "额外法术伤害；3 人后敌人法抗降低，隐匿失效。",
      "effects": [
        {
          "need": "2",
          "text": "奥术干员造成伤害时，额外附加一次一定攻击力的法术伤害（受层数影响）。"
        },
        {
          "need": "3",
          "text": "场上所有敌人每次受到伤害时法术抗性降低；奥术干员攻击范围内敌人隐匿失效。"
        }
      ],
      "tag": "推荐",
      "thresholds": [
        2,
        3
      ]
    },
    "empty": {
      "name": "协防干员",
      "icon": "icon_emptyship",
      "summary": "全队物理 / 法术伤害 -20%；协防干员伤害提升。",
      "effects": [
        {
          "need": "2",
          "text": "所有干员受到的物理和法术伤害 -20%；协防干员伤害提升至 120%，精锐 140%。"
        }
      ],
      "tag": "可选",
      "thresholds": [
        2
      ]
    },
    "steadfast": {
      "name": "坚守",
      "icon": "icon_steadship",
      "summary": "全队生命提升；3 人后分摊伤害。",
      "effects": [
        {
          "need": "2",
          "text": "所有干员生命值提升（受层数影响）。"
        },
        {
          "need": "3",
          "text": "非坚守干员受到伤害的 40% 由所有坚守干员平均承担；坚守干员受击时反伤并施加脆弱。"
        }
      ],
      "tag": "可选",
      "thresholds": [
        2,
        3
      ]
    },
    "precision": {
      "name": "精准",
      "icon": "icon_preciship",
      "summary": "攻击力提升；3 人后远程无视部分防御 / 法抗。",
      "effects": [
        {
          "need": "2",
          "text": "精准干员攻击力提升（受层数影响）。"
        },
        {
          "need": "3",
          "text": "生效范围变为精准干员和所有远程干员，攻击无视一定防御力和法术抗性。"
        }
      ],
      "tag": "可选",
      "thresholds": [
        2,
        3
      ]
    },
    "miracle": {
      "name": "奇迹",
      "icon": "icon_miraship",
      "summary": "刷新概率免费；100 层后保底当前等级干员。",
      "effects": [
        {
          "need": "2",
          "text": "刷新调度中心时，有概率使下次刷新不消耗资金（受层数影响）。"
        },
        {
          "need": "100",
          "text": "调度中心刷新时至少出现一名等同于当前调度中心等级的干员。"
        }
      ],
      "tag": "经济",
      "thresholds": [
        2,
        100
      ]
    },
    "invest": {
      "name": "投资人",
      "icon": "icon_investship",
      "summary": "「获得时」特质触发 2 次；100 层后 3 次。",
      "effects": [
        {
          "need": "3",
          "text": "干员的「获得时」类特质每次触发 2 次；达到 100 层后触发 3 次。"
        }
      ],
      "tag": "经济",
      "thresholds": [
        3,
        100
      ]
    },
    "victoria": {
      "name": "维多利亚",
      "icon": "icon_victoriaship",
      "summary": "装备伤害提升；每 25 层给维式重锤。",
      "effects": [
        {
          "need": "3",
          "text": "携带装备的维多利亚干员造成伤害提升；每叠加 25 层获得 1 件维式重锤。"
        },
        {
          "need": "6",
          "text": "维多利亚干员每携带 1 件装备攻击力提升；进阶装备额外提升。"
        }
      ],
      "tag": "挂件",
      "thresholds": [
        3,
        6
      ]
    },
    "kazimierz": {
      "name": "卡西米尔",
      "icon": "icon_kazimierzship",
      "summary": "部署时卡西米尔攻击力提升；6 人真实伤害。",
      "effects": [
        {
          "need": "3",
          "text": "每次有干员部署时，卡西米尔干员攻击力提升，持续至战斗结束（上限受层数影响）。"
        },
        {
          "need": "6",
          "text": "卡西米尔地面干员被击倒时召唤整备区最右侧卡西米尔；开技能 / 部署后 30 秒攻击附带 65% 真实伤害。"
        }
      ],
      "tag": "挂件",
      "thresholds": [
        3,
        6
      ]
    },
    "lethania": {
      "name": "莱塔尼亚",
      "icon": "icon_lethaniaship",
      "summary": "干员和召唤物攻击力提升；击杀召唤小节。",
      "effects": [
        {
          "need": "3",
          "text": "莱塔尼亚干员和召唤物攻击力提升；敌方被击倒时在附近召唤「一个小节」。"
        },
        {
          "need": "6",
          "text": "召唤物上限提升；概率召唤「一个乐部」，给莱塔尼亚干员加攻速。"
        }
      ],
      "tag": "挂件",
      "thresholds": [
        3,
        6
      ]
    },
    "mani": {
      "name": "调和",
      "icon": "icon_maniship",
      "summary": "核心盟约激活人数 +1，调和干员享受核心盟约效果。",
      "effects": [
        {
          "need": "1",
          "text": "激活时使场上核心盟约的激活人数 +1；调和干员享受已激活核心盟约的效果。"
        }
      ],
      "tag": "外援",
      "thresholds": [
        1
      ]
    },
    "doc": {
      "name": "聚合",
      "icon": "icon_docship",
      "summary": "范围内友方回血 / 回元素损伤；3 人给庇护。",
      "effects": [
        {
          "need": "2",
          "text": "聚合干员攻击范围内的我方单位每秒回复生命和元素损伤（受层数影响）。"
        },
        {
          "need": "3",
          "text": "聚合干员攻击范围内的所有干员获得庇护（受层数影响）。"
        }
      ],
      "tag": "可选",
      "thresholds": [
        2,
        3
      ]
    },
    "ursus": {
      "name": "乌萨斯",
      "icon": "icon_ursusship",
      "summary": "攻击力和生命提升；击倒叠加临时层数；6 谢减伤并灼烧阻挡者。",
      "effects": [
        {
          "need": "—",
          "text": "攻击力和生命提升；击倒叠加临时层数；6 谢减伤并灼烧阻挡者。"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        3,
        6
      ]
    },
    "iberia": {
      "name": "伊比利亚",
      "icon": "icon_iberiaship",
      "summary": "伤害附带持续法术伤害；6 谢减速、增伤并弹射。",
      "effects": [
        {
          "need": "—",
          "text": "伤害附带持续法术伤害；6 谢减速、增伤并弹射。"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        3,
        6
      ]
    },
    "yan": {
      "name": "炎",
      "icon": "icon_yanship",
      "summary": "【炎】干员攻击力提升（受层数影响）",
      "effects": [
        {
          "need": "3 / 6 / 9",
          "text": "【炎】干员攻击力提升（受层数影响）\n<在场6名不同【炎】干员>战斗开始时召唤可自主行动的“炎佑”，其攻击力生命值分别为开战时【炎】干员攻击力生命值总和的30%，“炎佑”同时攻击3个目标，可使用“祛恶之焰”，攻击时附带攻击力一定比例的灼燃损伤且周围敌人受到一定比例的元素脆弱\n<在场9名不同【炎】干员>改为召唤2只“炎佑”，攻击力提升至1.5倍，受到的伤害-90%"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        3,
        6,
        9
      ]
    },
    "sargon": {
      "name": "萨尔贡",
      "icon": "icon_sargonship",
      "summary": "【萨尔贡】干员开启技能时，所有【萨尔贡】干员攻击速度提升（有上限），持续一定时间（受层数影响，每层持续时间独立计算）",
      "effects": [
        {
          "need": "3 / 6",
          "text": "【萨尔贡】干员开启技能时，所有【萨尔贡】干员攻击速度提升（有上限），持续一定时间（受层数影响，每层持续时间独立计算）\n<在场6名不同【萨尔贡】干员>开启技能还会为所有【萨尔贡】干员提供等持续时间的攻击力（有上限）\n选择策略【娜仁图亚】时，<在场6名不同【萨尔贡】干员>的效果会有所改变"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        3,
        6
      ]
    },
    "laterano": {
      "name": "拉特兰",
      "icon": "icon_lateranoship",
      "summary": "【拉特兰】干员开启技能获得的弹药量提升（受层数影响）",
      "effects": [
        {
          "need": "3 / 6",
          "text": "【拉特兰】干员开启技能获得的弹药量提升（受层数影响）\n<在场6名不同【拉特兰】干员>【拉特兰】干员每消耗1发弹药，所有【拉特兰】干员攻击力提升（有上限）"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        3,
        6
      ]
    },
    "egir": {
      "name": "阿戈尔",
      "icon": "icon_egirship",
      "summary": "【阿戈尔】干员生命值提升（受层数影响）",
      "effects": [
        {
          "need": "3 / 5",
          "text": "【阿戈尔】干员生命值提升（受层数影响）\n战斗开始时，【阿戈尔】干员会吞噬身前一格干员对其造成5000点物理伤害并获得其基础攻击力和阻挡数，使【阿戈尔】叠加等于被吞噬者等阶的盟约层数（【阿戈尔】之间优先更靠左和靠上的干员发起吞噬）\n<在场5名不同【阿戈尔】干员>前3名【阿戈尔】干员首次被击倒时立刻复活"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        3,
        5
      ]
    },
    "siracusa": {
      "name": "叙拉古",
      "icon": "icon_siracusaship",
      "summary": "【叙拉古】干员部署后攻击速度提升，持续一定时间（受层数影响）",
      "effects": [
        {
          "need": "3 / 6",
          "text": "【叙拉古】干员部署后攻击速度提升，持续一定时间（受层数影响）\n<在场6名不同【叙拉古】干员>【叙拉古】干员部署后进入等时长的隐匿状态，【叙拉古】干员隐匿状态下和脱离隐匿10秒内对敌人攻击时有3%的概率造成一定真实伤害（受层数影响）并恐惧3秒"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        3,
        6
      ]
    },
    "deputy": {
      "name": "助力",
      "icon": "icon_deputship",
      "summary": "所有干员防御力提升（受层数影响），再部署时间减少",
      "effects": [
        {
          "need": "2 / 3",
          "text": "所有干员防御力提升（受层数影响），再部署时间减少\n休整期结束时，使当前所有已激活盟约层数+2\n<在场3名不同【助力】干员>改为层数+4"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        2,
        3
      ]
    },
    "visi": {
      "name": "远见",
      "icon": "icon_visiship",
      "summary": "<每叠加10层>获得一次2资金",
      "effects": [
        {
          "need": "2",
          "text": "<每叠加10层>获得一次2资金\n<首次达到80层>所有【远见】干员购买价格永久-1资金\n<首次达到150层>以上效果改为调度中心内所有干员的购买价格永久-1资金（整备区的【远见】干员也可用于激活盟约）"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        2
      ]
    },
    "raid": {
      "name": "突袭",
      "icon": "icon_raidship",
      "summary": "【突袭】干员10秒内未进行攻击或技能就绪时，若范围内没有敌人，则保留技力立即再部署至一名地面敌人周围，期间攻击力和生命值提升（受层数影响）",
      "effects": [
        {
          "need": "2",
          "text": "【突袭】干员10秒内未进行攻击或技能就绪时，若范围内没有敌人，则保留技力立即再部署至一名地面敌人周围，期间攻击力和生命值提升（受层数影响）\n<达到50层>所有干员攻击速度+50"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        2
      ]
    },
    "indom": {
      "name": "不屈",
      "icon": "icon_indomship",
      "summary": "地面干员被击倒时，有概率立即重新部署（受层数影响）",
      "effects": [
        {
          "need": "2 / 3",
          "text": "地面干员被击倒时，有概率立即重新部署（受层数影响）\n<在场3名不同【不屈】干员>地面干员被击倒时使场上所有干员技力+5"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        2,
        3
      ]
    },
    "solo": {
      "name": "独行",
      "icon": "icon_soloship",
      "summary": "<在场1名【独行】干员>【独行】干员攻击力和生命值+60%，初始技力+15（在场2名及以上【独行】干员时失效）",
      "effects": [
        {
          "need": "1",
          "text": "<在场1名【独行】干员>【独行】干员攻击力和生命值+60%，初始技力+15（在场2名及以上【独行】干员时失效）"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        1
      ]
    },
    "sunt": {
      "name": "绝技",
      "icon": "icon_suntship",
      "summary": "<在场2名精锐状态的干员>精锐状态的干员攻击力+30%",
      "effects": [
        {
          "need": "2 / 5",
          "text": "<在场2名精锐状态的干员>精锐状态的干员攻击力+30%\n<在场5名精锐状态的干员>精锐状态的干员技力消耗-30%\n（所有干员的精锐状态均可激活本盟约）"
        }
      ],
      "tag": "羁绊",
      "thresholds": [
        2,
        5
      ]
    }
  },
  "strategyLibrary": {
    "st01": {
      "id": "st01",
      "name": "阿米娅",
      "icon": "assets/strategies/st01.webp",
      "kind": "passive",
      "initialHp": 25,
      "unlock": "",
      "effect": "【众志合一】 被动效果 ：场上存在3、4或5种以上激活盟约时，所有干员攻击力、生命上限分别 +20% / 30% / 40%",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st02": {
      "id": "st02",
      "name": "歌利亚",
      "icon": "assets/strategies/st02.webp",
      "kind": "passive",
      "initialHp": 40,
      "unlock": "",
      "effect": "【坚不可摧】 被动效果 ：初始目标生命值为 40 点",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st03": {
      "id": "st03",
      "name": "大帝",
      "icon": "assets/strategies/st03.webp",
      "kind": "passive",
      "initialHp": 26,
      "unlock": "",
      "effect": "【加急调派】 被动效果 ：我方干员每次部署后都会使自身在本场战斗内的再部署时间 -50%",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st04": {
      "id": "st04",
      "name": "卡莱莎",
      "icon": "assets/strategies/st04.webp",
      "kind": "passive",
      "initialHp": 26,
      "unlock": "",
      "effect": "【食腐之蝶】 被动效果 ：我方干员被击倒时，场上剩余我方单位攻击力 +20% （最大 +200% ，持续至被击倒或战斗结束）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st05": {
      "id": "st05",
      "name": "伊奥莱塔·罗素",
      "icon": "assets/strategies/st05.webp",
      "kind": "passive",
      "initialHp": 29,
      "unlock": "",
      "effect": "【统御号令】 被动效果 ：战斗开始时，场上每有1名精锐干员，精锐干员的攻击力、生命上限 +10%",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st06": {
      "id": "st06",
      "name": "百炼嘉维尔",
      "icon": "assets/strategies/st06.webp",
      "kind": "active",
      "initialHp": 27,
      "unlock": "",
      "effect": "【意志鼓舞】 拖拽使用（消耗0） ：选择一名我方干员，下次战斗开始时立即击倒并复活，并获得额外2次复活次数",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st07": {
      "id": "st07",
      "name": "天空盒",
      "icon": "assets/strategies/st07.webp",
      "kind": "active",
      "initialHp": 28,
      "unlock": "",
      "effect": "【内部货源】 点击使用（消耗0） ：下一件购买的装备价格 -1 （最多减至0）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st08": {
      "id": "st08",
      "name": "风丸",
      "icon": "assets/strategies/st08.webp",
      "kind": "active",
      "initialHp": 25,
      "unlock": "",
      "effect": "【纸片替身】 拖拽使用（消耗0） ：选择一名调度中心内的干员，使其变为相同等阶的随机干员 （每回合限2次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st09": {
      "id": "st09",
      "name": "妮芙",
      "icon": "assets/strategies/st09.webp",
      "kind": "active",
      "initialHp": 28,
      "unlock": "",
      "effect": "【溃心领域】 拖拽使用（消耗0） ：选择一个可用地块，战斗开始后首次经过该地块的敌人获得恐惧，持续3秒 （每回合限1次） 第4、8、12回合时升级，增加使用次数 【溃心领域-1级】 拖拽使用 ：选择一个可用地块，战斗开始后首次经过该地块的敌人获得恐惧，持续3秒 （每回合限1次） 第4回合时升级为可使用2次 【溃心领域-2级】 拖拽使用 ：选择一个可用地块，战斗开始后首次经过该地块的敌人获得恐惧，持续3秒 （每回合限2次） 第8回合时升级为可使用3次 【溃心领域-3级】 拖拽使用 ：选择一个可用地块，战斗开始后首次经过该地块的敌人获得恐惧，持续3秒 （每回合限3次） 第12回合时升级为可使用4次 【溃心领域-4级】 拖拽使用 ：选择一个可用地块，战斗开始后首次经过该地块的敌人获得恐惧，持续3秒 （每回合限4次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st10": {
      "id": "st10",
      "name": "夕",
      "icon": "assets/strategies/st10.webp",
      "kind": "active",
      "initialHp": 28,
      "unlock": "",
      "effect": "【幻画为真】 拖拽使用（消耗0） ：选择一名我方干员，获得他的复制体，包括精锐状态和携带的装备 （每场模拟限1次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st11": {
      "id": "st11",
      "name": "但书",
      "icon": "assets/strategies/st11.webp",
      "kind": "active",
      "initialHp": 26,
      "unlock": "",
      "effect": "【条文修正】 第4回合解锁 拖拽使用（消耗0） ：选择一名我方干员，使该干员已激活的所有盟约层数 +9 （冷却3回合）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st12": {
      "id": "st12",
      "name": "大嘴莫布",
      "icon": "assets/strategies/st12.webp",
      "kind": "active",
      "initialHp": 26,
      "unlock": "",
      "effect": "【全场聚焦】 拖拽使用（消耗1） ：选择一名我方干员，下次战斗开始时变为精锐干员，持续至战斗结束",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st13": {
      "id": "st13",
      "name": "杰西卡",
      "icon": "assets/strategies/st13.webp",
      "kind": "passive",
      "initialHp": 22,
      "unlock": "",
      "effect": "【集结指示】 被动效果 ：在第4、7、10、13回合进入休整期时获得1个 <寻呼模块> <寻呼模块>：装备时销毁，在调度中心出现至多3名拥有该干员第一盟约的其他干员，免费获取其中1名（等阶不高于当前调度中心）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st14": {
      "id": "st14",
      "name": "华法琳",
      "icon": "assets/strategies/st14.webp",
      "kind": "passive",
      "initialHp": 24,
      "unlock": "",
      "effect": "【重点监护】 被动效果 ：战斗开始时，使场上每个不同等阶的1个随机我方干员所属的已激活盟约层数 +1 调度中心等级达到3级、5级时升级使盟约层数额外+1 【重点监护-1级】 被动效果 ：战斗开始时，使场上每个不同等阶的1个随机我方干员所属的已激活盟约层数 +1 调度中心等级达到3级时升级，层数额外+1 【重点监护-2级】 被动效果 ：战斗开始时，使场上每个不同等阶的1个随机我方干员所属的已激活盟约层数 +2 调度中心等级达到5级时升级，层数额外+1 【重点监护-3级】 被动效果 ：战斗开始时，使场上每个不同等阶的1个随机我方干员所属的已激活盟约层数 +3",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st15": {
      "id": "st15",
      "name": "桑葚",
      "icon": "assets/strategies/st15.webp",
      "kind": "active",
      "initialHp": 24,
      "unlock": "",
      "effect": "【药枚实验】 拖拽使用（消耗0） ：选择一名我方干员，在下次战斗开始时获得效果：每次攻击时有 20% 的概率获得1层护盾（最多1层） 第7回合时效果升级 【药枚实验-1级】 拖拽使用 ：选择一名我方干员，在下次战斗开始时获得效果：每次攻击时有 20% 的概率获得1层护盾（最多1层） 第7回合时效果升级 【药枚实验-2级】 拖拽使用 ：选择一名我方干员，在下次战斗开始时获得效果：每次攻击时有 35% 的概率获得1层护盾（最多1层）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st16": {
      "id": "st16",
      "name": "奥达",
      "icon": "assets/strategies/st16.webp",
      "kind": "passive",
      "initialHp": 26,
      "unlock": "",
      "effect": "【全力熔铸】 被动效果 ：在第3、6、9、12、14回合进入休整期时获得1件当前调度中心等级的随机装备",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st17": {
      "id": "st17",
      "name": "陈",
      "icon": "assets/strategies/st17.webp",
      "kind": "passive",
      "initialHp": 26,
      "unlock": "通关任意模拟1次解锁",
      "effect": "【以己之长】 被动效果 ：所有干员造成的物理和法术伤害变为 弱点伤害 （根据敌人的防御力和法术抗性变更伤害类型） ，精锐干员额外获得攻击力 +16% ，攻击速度 +16",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st18": {
      "id": "st18",
      "name": "老鲤",
      "icon": "assets/strategies/st18.webp",
      "kind": "passive",
      "initialHp": 27,
      "unlock": "通关任意模拟2次解锁",
      "effect": "【得闲饮茶】 被动效果 ：第1、2回合的资金暂存至第3回合发放；第3回合进入休整期时，获得2、4阶随机干员各1名",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st19": {
      "id": "st19",
      "name": "芬",
      "icon": "assets/strategies/st19.webp",
      "kind": "passive",
      "initialHp": 24,
      "unlock": "通关任意模拟3次解锁",
      "effect": "【协力共进】 被动效果 ：第8、10、12、14回合进入休整期时获得1个 <信标> <信标>：装备时销毁携带干员，在调度中心出现2名同等阶干员，免费获得其中1名；被销毁干员在下回合传递给对应盟约人数最多的队友",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st20": {
      "id": "st20",
      "name": "Touch",
      "icon": "assets/strategies/st20.webp",
      "kind": "passive",
      "initialHp": 28,
      "unlock": "通关任意模拟3次解锁",
      "effect": "【外勤医疗】 被动效果 ：所有玩家场上出现一名 <预备干员-医疗> ；战斗开始时，若场上至少有2名精锐干员，则替换为 <Touch>",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st21": {
      "id": "st21",
      "name": "森蚺",
      "icon": "assets/strategies/st21.webp",
      "kind": "passive",
      "initialHp": 29,
      "unlock": "通关任意模拟5次解锁",
      "effect": "【暴躁铁皮】 被动效果 ：第1回合获得1名可以装备4件装备的特殊干员 <“暴躁铁皮”>",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st22": {
      "id": "st22",
      "name": "寻宝人",
      "icon": "assets/strategies/st22.webp",
      "kind": "active",
      "initialHp": 22,
      "unlock": "通关任意模拟5次解锁",
      "effect": "【宝藏探机】 拖拽使用（消耗1） ：选择一个可用地块，部署1个 <“模拟宝藏”> （冷却3回合） <“模拟宝藏”>：被敌人触碰就会永久消失，战斗结束时若仍存在则获得额外1资金",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st23": {
      "id": "st23",
      "name": "缪尔赛思",
      "icon": "assets/strategies/st23.webp",
      "kind": "active",
      "initialHp": 28,
      "unlock": "通关任意模拟8次解锁",
      "effect": "【至纯凝结】 拖拽使用（消耗0） ：选择一名我方干员，立即使该干员晋升为精锐干员 （每场模拟限1次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st24": {
      "id": "st24",
      "name": "Misery",
      "icon": "assets/strategies/st24.webp",
      "kind": "active",
      "initialHp": 27,
      "unlock": "通关任意模拟8次解锁",
      "effect": "【消解空间】 拖拽使用（消耗0） ：选择一名我方干员，下场战斗开始后首次受到伤害时使其击倒，并召唤整备区最右侧干员",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st25": {
      "id": "st25",
      "name": "“变形者集群”",
      "icon": "assets/strategies/st25.webp",
      "kind": "passive",
      "initialHp": 22,
      "unlock": "通关任意模拟10次解锁",
      "effect": "【变形同构】 被动效果 ：每5回合获得1件特殊装备 <变形同构体> <变形同构体>：与特定装备一同装备时装备者将视为特定盟约成员",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st26": {
      "id": "st26",
      "name": "小贾斯汀",
      "icon": "assets/strategies/st26.webp",
      "kind": "active",
      "initialHp": 23,
      "unlock": "通关【标准模拟】解锁",
      "effect": "【私募基金】 点击使用（消耗0） ：随机获得 1-6 资金 （冷却回合数等同于获得资金）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st27": {
      "id": "st27",
      "name": "铃兰",
      "icon": "assets/strategies/st27.webp",
      "kind": "active",
      "initialHp": 20,
      "unlock": "通关【绝境模拟】解锁",
      "effect": "【御守之力】 拖拽使用（消耗0） ：选择一名我方干员，触发该干员的 <获得时> 类特质",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st28": {
      "id": "st28",
      "name": "苏苏洛",
      "icon": "assets/strategies/st28.webp",
      "kind": "active",
      "initialHp": 21,
      "unlock": "通关【绝境模拟】解锁",
      "effect": "【强制休整】 拖拽使用（消耗0） ：选择一名我方干员，使该干员的 <休整期结束时> 类特质本回合可以额外触发一次",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st29": {
      "id": "st29",
      "name": "昆图斯",
      "icon": "assets/strategies/st29.webp",
      "kind": "active",
      "initialHp": 24,
      "unlock": "通关【险境模拟】解锁",
      "effect": "【不稳定要素】 第4回合解锁 拖拽使用（消耗0） ：选择一名我方干员，立即使其变为更高一阶的随机干员（最高不超过6阶）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st30": {
      "id": "st30",
      "name": "信仰搅拌机",
      "icon": "assets/strategies/st30.webp",
      "kind": "active",
      "initialHp": 27,
      "unlock": "通关任意联合模拟5次解锁",
      "effect": "【献身护卫】 第4回合解锁 点击使用（消耗0） ：自身目标生命值降至与场上最低的玩家相同并获得等同损失生命值的资金（至多 10 资金），在 <休整期结束时> 为该玩家回复等额目标生命值",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st31": {
      "id": "st31",
      "name": "“追随者们”",
      "icon": "assets/strategies/st31.webp",
      "kind": "passive",
      "initialHp": 21,
      "unlock": "通关任意联合模拟10次解锁",
      "effect": "【好多委托！】 被动效果 ：每次进入休整期时，从2个随机指令中选择1个并替换当前指令",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st32": {
      "id": "st32",
      "name": "坎诺特",
      "icon": "assets/strategies/st32.webp",
      "kind": "passive",
      "initialHp": 27,
      "unlock": "消耗资金累计达到100时解锁",
      "effect": "【利滚利】 被动效果 ：每回合剩余的资金可以继承，剩余至少 5 资金时，每回合额外获得 1 资金",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st33": {
      "id": "st33",
      "name": "鸭爵",
      "icon": "assets/strategies/st33.webp",
      "kind": "passive",
      "initialHp": 29,
      "unlock": "消耗资金累计达到200时解锁",
      "effect": "【“神秘顾客”】 被动效果 ：从第5回合起，你和队友遭遇的部分敌人可能会替换为 <鸭爵>、<高普尼克>、<流泪小子>、<圆仔> ，击倒这些敌人可以获得 1 资金奖励（包括联防阶段）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st34": {
      "id": "st34",
      "name": "琳琅诗怀雅",
      "icon": "assets/strategies/st34.webp",
      "kind": "active",
      "initialHp": 24,
      "unlock": "消耗资金累计达到1000时解锁",
      "effect": "【最佳品味】 消耗资金达到60时解锁 点击使用（消耗0） ：随机获取当前调度中心内的1名干员 消耗资金达到120时升级为获取2名 【最佳品味-1级】 点击使用 ：随机获取当前调度中心内的1名干员 消耗资金达到120时升级为获取2名 【最佳品味-2级】 点击使用 ：随机获取当前调度中心内的2名干员",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st35": {
      "id": "st35",
      "name": "巫恋",
      "icon": "assets/strategies/st35.webp",
      "kind": "passive",
      "initialHp": 25,
      "unlock": "累计出售任意干员达到50个解锁",
      "effect": "【替身娃娃】 被动效果 ：每回合首次出售初始干员时，改为与调度中心中随机1名干员交换",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st36": {
      "id": "st36",
      "name": "三船光平",
      "icon": "assets/strategies/st36.webp",
      "kind": "active",
      "initialHp": 22,
      "unlock": "累计出售任意干员达到100个解锁",
      "effect": "【东之极道】 拖拽使用（消耗0） ：选择一名我方干员，将其出售并为所有已激活盟约叠加等同于该干员等阶的层数",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st37": {
      "id": "st37",
      "name": "雅拉",
      "icon": "assets/strategies/st37.webp",
      "kind": "active",
      "initialHp": 24,
      "unlock": "累计刷新调度中心100次解锁",
      "effect": "【人才锁定】 点击使用（消耗1） ：刷新调度中心，必定包含1名比当前调度中心等级更高一阶（最高不超过6阶）的干员 （每回合限3次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st38": {
      "id": "st38",
      "name": "渡桥",
      "icon": "assets/strategies/st38.webp",
      "kind": "active",
      "initialHp": 30,
      "unlock": "累计刷新调度中心200次解锁",
      "effect": "【专享情报】 点击使用（消耗3） ：进行一次 特殊刷新 ：此次刷新出现的干员优先为已部署在场上的干员 （每场模拟限1次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st39": {
      "id": "st39",
      "name": "Mechanist",
      "icon": "assets/strategies/st39.webp",
      "kind": "both",
      "initialHp": 29,
      "unlock": "累计获得任意装备50个解锁",
      "effect": "【精巧设计】 被动效果 ：每回合首次装备合并进阶时，在调度中心出现3件装备（可能出现更高一阶的装备）免费获取其中1件 点击使用（消耗0） ：使调度中心出现1件新的装备并替换 （每回合限2次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st40": {
      "id": "st40",
      "name": "布丁",
      "icon": "assets/strategies/st40.webp",
      "kind": "active",
      "initialHp": 23,
      "unlock": "累计获得任意装备100个解锁",
      "effect": "【电气化！】 拖拽使用（消耗1） ：选择调度中心的一件装备使其 立刻销毁 ，并在下次战斗开始时使场上所有还有空栏位的干员暂时获得该装备直到战斗结束（无法对 <装备时销毁> 的装备使用）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st41": {
      "id": "st41",
      "name": "拜松",
      "icon": "assets/strategies/st41.webp",
      "kind": "active",
      "initialHp": 23,
      "unlock": "累计升级调度中心30次解锁",
      "effect": "【打包速递】 点击使用（消耗9） ：获得当前调度中心中的所有干员，每回合休整期结束时指令消耗资金 -1 ，使用后指令重置并可再次使用",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st42": {
      "id": "st42",
      "name": "Pith",
      "icon": "assets/strategies/st42.webp",
      "kind": "passive",
      "initialHp": 24,
      "unlock": "通关时的结算阵容中，包含任意【调和】干员解锁",
      "effect": "【优等生】 被动效果 ：第1回合获得1名可以造成神经、灼燃、凋亡损伤的特殊干员，其属于【调和】盟约 【调和】：激活时使场上核心盟约的激活人数+1，【调和】干员享受已激活的核心盟约的效果",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st43": {
      "id": "st43",
      "name": "坚雷",
      "icon": "assets/strategies/st43.webp",
      "kind": "active",
      "initialHp": 25,
      "unlock": "通关时的结算阵容中，包含任意3名【助力】干员解锁",
      "effect": "【正直教官】 拖拽使用（消耗0） ：选择一名我方干员，使其在下场战斗中卫戍能力的叠层上限提升，数量等同于当前回合数",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st44": {
      "id": "st44",
      "name": "复奏",
      "icon": "assets/strategies/st44.webp",
      "kind": "passive",
      "initialHp": 24,
      "unlock": "通关时的结算阵容中，包含任意2名【奇迹】干员解锁",
      "effect": "【二重奏】 被动效果 ：每回合首次晋升精锐干员时，获得1次额外的晋升奖励",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st45": {
      "id": "st45",
      "name": "望",
      "icon": "assets/strategies/st45.webp",
      "kind": "active",
      "initialHp": 23,
      "unlock": "累计获得50名【炎】干员解锁",
      "effect": "【黑白相易】 拖拽使用（消耗1） ：选择一名我方干员移除，获得1名不高于该干员等阶的【炎】干员 <在场6名不同【炎】干员> 效果替换为战斗开始时收集【炎】干员部分属性召唤“炎佑” <在场9名不同【炎】干员> 效果改为召唤两只“炎佑”",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st46": {
      "id": "st46",
      "name": "杜遥夜",
      "icon": "assets/strategies/st46.webp",
      "kind": "active",
      "initialHp": 26,
      "unlock": "通关时的结算阵容中，包含6名【炎】干员解锁",
      "effect": "【广交豪杰】 点击使用（消耗1） ：刷新调度中心，优先刷新出1名【炎】干员 （每回合限2次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st47": {
      "id": "st47",
      "name": "娜仁图亚",
      "icon": "assets/strategies/st47.webp",
      "kind": "passive",
      "initialHp": 24,
      "unlock": "累计获得50名【萨尔贡】干员解锁",
      "effect": "【沙洲梦魇】 被动效果 ：获得3名【萨尔贡】干员后使当前调度中心升级消耗资金 -3 ，调度中心每个等级至多生效1次 <在场6名不同【萨尔贡】干员> 效果替换为【萨尔贡】干员开启技能会使所有【萨尔贡】干员攻击力增加",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st48": {
      "id": "st48",
      "name": "佩佩",
      "icon": "assets/strategies/st48.webp",
      "kind": "passive",
      "initialHp": 23,
      "unlock": "通关时的结算阵容中，包含6名【萨尔贡】干员解锁",
      "effect": "【博学多通】 被动效果 ：升级调度中心至2、4和6级后，获得1次 特殊刷新 ：此次刷新出现的干员优先为【萨尔贡】干员",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st49": {
      "id": "st49",
      "name": "洛洛",
      "icon": "assets/strategies/st49.webp",
      "kind": "passive",
      "initialHp": 25,
      "unlock": "多场模拟中【维多利亚】盟约累计200层解锁",
      "effect": "【自发制造】 被动效果 ：每购买3名【维多利亚】干员，获得1件随机装备（等阶不高于当前调度中心） <在场6名不同【维多利亚】干员> 效果替换为【维多利亚】干员技能开启后，周围八格干员同时享受该干员携带的装备效果，持续一定时间",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st50": {
      "id": "st50",
      "name": "哈洛德",
      "icon": "assets/strategies/st50.webp",
      "kind": "passive",
      "initialHp": 23,
      "unlock": "通关时的结算阵容中，包含6名【维多利亚】干员解锁",
      "effect": "【人才盲盒】 被动效果 ：从第4回合开始每2回合获得1名【维多利亚】干员（等阶不高于当前调度中心）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st51": {
      "id": "st51",
      "name": "歌蕾蒂娅",
      "icon": "assets/strategies/st51.webp",
      "kind": "active",
      "initialHp": 23,
      "unlock": "多场模拟中【阿戈尔】盟约累计200层解锁",
      "effect": "【猎人战法】 调度中心等级达到4级解锁 点击使用（消耗1） ：获得1名【阿戈尔】干员（等阶不高于当前调度中心） <在场6名不同【阿戈尔】干员> 效果替换为前3名【阿戈尔】干员首次被击倒时召唤整备区最右侧一名可部署至当前位置的【阿戈尔】干员",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st52": {
      "id": "st52",
      "name": "克莱门莎",
      "icon": "assets/strategies/st52.webp",
      "kind": "passive",
      "initialHp": 26,
      "unlock": "通关时的结算阵容中，包含5名【阿戈尔】干员解锁",
      "effect": "【崇高牺牲】 被动效果 ：【阿戈尔】干员被击倒时，使已激活的【阿戈尔】盟约叠加等同于该干员等阶的层数",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st53": {
      "id": "st53",
      "name": "焰尾",
      "icon": "assets/strategies/st53.webp",
      "kind": "active",
      "initialHp": 25,
      "unlock": "累计获得50名【卡西米尔】干员解锁",
      "effect": "【骑士团长】 点击使用（消耗6） ：获得1名【卡西米尔】干员（等阶不高于当前调度中心），每回合休整期结束时指令消耗资金 -2 ，使用后指令重置并可再次使用 <在场6名不同【卡西米尔】干员> 效果替换为【卡西米尔】干员阻挡时每2秒对周围敌人造成真实伤害并晕眩，未阻挡时攻击附带真实伤害",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st54": {
      "id": "st54",
      "name": "玛恩纳",
      "icon": "assets/strategies/st54.webp",
      "kind": "passive",
      "initialHp": 28,
      "unlock": "通关时的结算阵容中，包含6名【卡西米尔】干员解锁",
      "effect": "【业务指标】 被动效果 ：每购买1名【卡西米尔】干员，下回合开始时资金 +1 ，每回合至多 3 资金",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st55": {
      "id": "st55",
      "name": "耶拉",
      "icon": "assets/strategies/st55.webp",
      "kind": "passive",
      "initialHp": 23,
      "unlock": "累计获得50名【谢拉格】干员解锁",
      "effect": "【不融信念】 被动效果 ：在第4、7、10、13回合进入休整期时获得1个 <谢拉格不融冰> <谢拉格不融冰>：造成伤害时有12%概率对目标施加1.5秒的 寒冷 <在场6名不同【谢拉格】干员> 效果替换为战场上每25秒吹过一阵寒风使敌人受到寒冷效果",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st56": {
      "id": "st56",
      "name": "休露丝",
      "icon": "assets/strategies/st56.webp",
      "kind": "passive",
      "initialHp": 23,
      "unlock": "通关时的结算阵容中，包含6名【谢拉格】干员解锁",
      "effect": "【雪域礼赠】 被动效果 ：每回合首次购买的【谢拉格】干员消耗资金为 1",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st57": {
      "id": "st57",
      "name": "裁度",
      "icon": "assets/strategies/st57.webp",
      "kind": "passive",
      "initialHp": 26,
      "unlock": "累计获得50名【叙拉古】干员解锁",
      "effect": "【量体裁衣】 被动效果 ：每回合首次主动刷新后获得 1 资金 <在场6名不同【叙拉古】干员> 效果替换为【叙拉古】干员部署后进入隐匿状态，在隐匿状态和脱离隐匿10秒内对敌人攻击时有概率造成真实伤害并恐惧目标",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st58": {
      "id": "st58",
      "name": "贾维",
      "icon": "assets/strategies/st58.webp",
      "kind": "passive",
      "initialHp": 24,
      "unlock": "通关时的结算阵容中，包含6名【叙拉古】干员解锁",
      "effect": "【团伙行动】 被动效果 ：每回合内主动刷新4次调度中心后，获得1名【叙拉古】干员（等阶不高于当前调度中心），每回合至多触发1次",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st59": {
      "id": "st59",
      "name": "车尔尼",
      "icon": "assets/strategies/st59.webp",
      "kind": "active",
      "initialHp": 24,
      "unlock": "通关时的结算阵容中，包含6名【莱塔尼亚】干员解锁",
      "effect": "【流动乐章】 点击使用（消耗1） ：获得1名【莱塔尼亚】干员（等阶不高于当前调度中心），每次使用后指令消耗资金永久 +1",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st60": {
      "id": "st60",
      "name": "怒潮凛冬",
      "icon": "assets/strategies/st60.webp",
      "kind": "active",
      "initialHp": 26,
      "unlock": "通关时的结算阵容中，包含6名【乌萨斯】干员解锁",
      "effect": "【无惧风雪】 点击使用（消耗5） ：获得1名【乌萨斯】干员（等阶不高于当前调度中心），每次购买【乌萨斯】干员时指令消耗资金 -1 ，使用后指令重置并可再次使用",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    },
    "st61": {
      "id": "st61",
      "name": "引星棘刺",
      "icon": "assets/strategies/st61.webp",
      "kind": "active",
      "initialHp": 23,
      "unlock": "通关时的结算阵容中，包含6名【伊比利亚】干员解锁",
      "effect": "【出航时刻】 【伊比利亚】盟约激活人数达到4时解锁 拖拽使用（消耗1） ：选择一名调度中心内的干员，使其替换为不高于该干员等阶的【伊比利亚】干员 （每回合限2次）",
      "source": "https://closure.wiki/zh-cn/stronghold-protocol/3#strategies",
      "sourceName": "可露希尔Wiki"
    }
  },
  "currentNames": [
    "折桠",
    "艾丝黛尔",
    "幽灵鲨",
    "野鬃",
    "慕斯",
    "角峰",
    "灰喉",
    "深靛",
    "卡达",
    "摆渡人",
    "夏栎",
    "杰克",
    "霜叶",
    "拜松",
    "褐果",
    "烈夏",
    "陨星",
    "拉普兰德",
    "地灵",
    "折光",
    "蓝毒",
    "泡泡",
    "莎草",
    "雪猎",
    "砾",
    "复奏",
    "奥斯塔",
    "Miss.Christine",
    "哈洛德",
    "云迹",
    "蛇屠箱",
    "波登可",
    "承曦格雷伊",
    "锡人",
    "宴",
    "渡桥",
    "矩",
    "星极",
    "瑰盐",
    "真理",
    "铸铁",
    "星源",
    "安哲拉",
    "车尔尼",
    "卡涅利安",
    "乌啾",
    "海沫",
    "旅骨",
    "风絮",
    "极光",
    "耶拉",
    "初雪",
    "深巡",
    "斯卡蒂",
    "瑕光",
    "忍冬",
    "伺夜",
    "水灯心",
    "空弦",
    "吉星",
    "伊桑",
    "罗比菈塔",
    "乌有",
    "历阵锐枪芬",
    "凯瑟琳",
    "风丸",
    "至简",
    "奥尔佳",
    "青枳",
    "黑键",
    "艾雅法拉",
    "赫拉格",
    "维伊",
    "温蒂",
    "流明",
    "余",
    "森蚺",
    "灵知",
    "归溟幽灵鲨",
    "水月",
    "远牙",
    "玛恩纳",
    "涤火杰西卡",
    "白铁",
    "斥罪",
    "W",
    "霍尔海雅",
    "山",
    "淬羽赫默",
    "赫德雷",
    "夜莺",
    "仇白",
    "异客",
    "安洁莉娜",
    "华法琳",
    "寒檀",
    "纯烬艾雅法拉",
    "怒潮凛冬",
    "艾丽妮",
    "棘刺",
    "黍",
    "佩佩",
    "圣聆初雪",
    "凛御银灰",
    "歌蕾蒂娅",
    "乌尔比安",
    "薇薇安娜",
    "铃兰",
    "贝洛内",
    "维娜·维多利亚",
    "迷迭香",
    "隐德来希",
    "塞雷娅",
    "溯光星源",
    "老鲤",
    "Mon3tr",
    "可露希尔",
    "鸿雪",
    "焰尾",
    "冻河",
    "阿米娅",
    "引星棘刺",
    "烛煌",
    "浊心斯卡蒂",
    "克莱门莎",
    "耀骑士临光",
    "荒芜拉普兰德",
    "酒神",
    "逻各斯",
    "真言",
    "妮芙",
    "遥",
    "魔王",
    "史尔特尔",
    "锏",
    "机械师",
    "塔露拉",
    "夕",
    "蕾缪安",
    "缪尔赛思",
    "帕拉斯"
  ]
};
