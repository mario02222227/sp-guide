/*!
 * 乌萨斯公式化运营 — 一图流示例预设
 *
 * 只在 ?preset=ursus 时接管 window.GUIDE_DATA。
 * 这样同一个网页工具可以同时展示谢拉格 / 乌萨斯两套示例，
 * 两套示例各自使用独立的 localStorage 草稿槽（由 app.js 的 PRESET 处理）。
 */
(function () {
  'use strict';

  let preset = '';
  try { preset = new URLSearchParams(location.search).get('preset') || ''; } catch (e) { /* file:// */ }
  if (preset !== 'ursus' || !window.GUIDE_DATA) return;

  const base = window.GUIDE_DATA;
  const data = {
    schemaVersion: 3,
    meta: {
      ...base.meta,
      title: '乌萨斯公式化运营',
      subtitle: '规程 · 乌萨斯',
      version: 'SP-U1',
      rating: 'S',
      tags: ['3乌起手', '2迅1奥', '冻河终端'],
      author: '玩家攻略',
      date: '2026-11-13',
      difficulty: '标准 / 险境 / 绝境',
      mode: '单人 / 联机通用',
      disclaimer: '非官方、非盈利攻略。机制与数值以游戏内为准；素材版权归鹰角网络所有。',
      sources: [
        {
          label: '可露希尔Wiki · 卫戍协议：规程',
          url: 'https://closure.wiki/zh-cn/stronghold-protocol/3',
          note: '盟约、干员特质、装备与策略数据'
        },
        {
          label: 'PRTS · 卫戍协议：规程',
          url: 'https://prts.wiki/w/%E5%8D%AB%E6%88%8D%E5%8D%8F%E8%AE%AE%C2%B7%E8%A7%84%E7%A8%8B',
          note: '干员技能、攻击范围与机制核对'
        }
      ],
      libraryVersion: '乌萨斯示例 · 2026-11 环境 · v3',
      proof: '6乌 / 3奥 / 2迅',
      headerNote: '3乌起手 · 2迅1奥 · 冻河终端',
      subsNote: '按位替换 · 先保 3 乌',
      showBench: true,
      equipmentInCore: true,
      boardGates: [
        { row: 3, col: 0, type: 'blue' },
        { row: 0, col: 8, type: 'red' },
        { row: 3, col: 8, type: 'red' }
      ],
      shareLineup: ['char_4207_branch', 't8_10', 't8_29', 't8_45', 't8_66', 't8_56', 't8_52', 't8_17', 't8_41'],
      shareNote: '9 人 · 完整',
      placementChecks: [
        { id: 'archet-weiyi', from: 'archet', to: 't8_45', type: 'front', optional: true, label: '空弦 → 维伊（身前，选带）' },
        { id: 'qingzhi-weiyi', from: 't8_41', to: 't8_45', type: 'behind', label: '青枳 → 维伊（身后）' },
        { id: 'amiya-donghe', from: 't8_67', to: 't8_66', type: 'front', optional: true, label: '阿米娅 → 冻河（身前，选带）' },
        { id: 'donghe-right', from: 't8_66', type: 'covers', targets: [{ row: 0, col: 7 }, { row: 3, col: 6 }], label: '冻河覆盖右侧击杀区' }
      ],
      credit: '',
      shareUrl: '',
      showQr: false
    },
    coreOperators: [
      { operatorId: 'char_4207_branch', role: '转化' },
      { operatorId: 't8_10', role: '临时层' },
      { operatorId: 't8_29', role: '固定层' },
      { operatorId: 't8_45', role: '主输出' },
      { operatorId: 't8_66', role: '终端' },
      { operatorId: 't8_52', role: '桥梁' }
    ],
    board: {
      // 默认地图：4 行 × 7 个可部署列（col 1–7），左右各多一列门位：
      // col 0 = 蓝门列（左下入口），col 8 = 红门列（右上 / 右下出怪）。
      // 总棋盘 4 × 9，门列不可部署。
      cols: 9,
      rows: 4,
      placements: [
        // 上路：折桠堵右上红门，烈夏在身后补输出；霍尔海雅在左侧覆盖上路。
        { operatorId: 't8_52', col: 2, row: 0, facing: 'right' },
        { operatorId: 't8_10', col: 4, row: 0, facing: 'right' },
        { operatorId: 'char_4207_branch', col: 7, row: 0, facing: 'right' },
        // 中路：阿米娅在冻河左侧（身前一格正好是冻河），乌啾靠蓝门治疗。
        { operatorId: 't8_29', col: 2, row: 1, facing: 'right' },
        { operatorId: 't8_66', col: 5, row: 1, facing: 'right' },
        // 下路：空弦 → 维伊 → 青枳，一左一右把维伊夹在中间；
        // 青枳同时是靠近红门的先锋阻挡位。
        { operatorId: 't8_17', col: 2, row: 2, facing: 'right' },
        { operatorId: 't8_45', col: 5, row: 2, facing: 'right' },
        { operatorId: 't8_41', col: 6, row: 2, facing: 'right' },
        // 下路红门：怒潮凛冬堵口。
        { operatorId: 't8_56', col: 7, row: 3, facing: 'right' }
      ]
    },
    stages: [
      {
        id: 'open',
        label: '起手 1–3',
        recruit: ['char_4207_branch', 't8_10', 't8_29', 't8_24', 't8_11', 't8_41', 't8_17'],
        lineupSource: 'manual',
        lineup: ['char_4207_branch', 't8_10', 't8_29', 't8_24', 't8_11', 't8_41', 't8_17'],
        note: '3乌核心；真理1费见到就买'
      },
      {
        id: 'four',
        label: '四本 6–8',
        recruit: ['t8_45', 't8_52', 't8_66'],
        lineupSource: 'manual',
        lineup: ['char_4207_branch', 't8_10', 't8_29', 't8_45', 't8_11', 't8_41', 'archet', 't8_17'],
        note: '补维伊，开2奥；青枳/空弦夹维伊'
      },
      {
        id: 'end',
        label: '大成 9+',
        recruit: ['t8_66', 't8_56', 't8_52', 't8_74'],
        lineupSource: 'manual',
        lineup: ['char_4207_branch', 't8_10', 't8_29', 't8_45', 't8_66', 't8_56', 't8_52', 't8_17', 't8_41'],
        note: '6乌3奥2迅；青枳可换迅捷转'
      }
    ],
    equipment: [
      {
        operatorId: 't8_29',
        must: ['multi_supplement'],
        big: ['swift_ration'],
        optional: []
      },
      {
        operatorId: 't8_45',
        must: ['pegasus_glory'],
        big: ['dual_arm'],
        optional: []
      },
      {
        operatorId: 't8_66',
        must: ['swift_ration'],
        big: ['multi_supplement'],
        optional: []
      }
    ],
    equipmentNotes: {
      t8_29: '先补剂叠层，再考虑输出；休整期转化前别倒。',
      t8_45: '天马/双模提输出；活着才有层数。',
      t8_66: '迅捷粮开局回转；补剂继续叠。'
    },
    traitBrief: {
      char_4207_branch: { label: '转化', complex: true, condition: '转化2层', detail: '转化 2 层乌萨斯临时→固定', bonds: ['ursus'], kind: 'convert', value: 2 },
      t8_10: { label: '乌萨斯临时层数', value: 4, unit: '层', detail: '乌萨斯临时层数 +4', bonds: ['ursus'], kind: 'stack', temporary: true },
      t8_29: { label: '转化', complex: true, condition: '每名乌萨斯', detail: '每名乌萨斯：转化 1 层临时→固定', bonds: ['ursus'], kind: 'convertPer', value: 1 },
      t8_17: { label: '奥术层数', value: 3, unit: '层', detail: '奥术层数 +3 / 维多利亚未激活', bonds: ['arcane', 'victoria'], kind: 'stack' },
      t8_41: { label: '盟约层数', value: 3, unit: '层', detail: '自身+身后：盟约层数 +3', bonds: ['covenant'], kind: 'stack', positional: 'self+behind' },
      t8_45: { label: '攻速', complex: true, condition: '每2层', detail: '每2层乌萨斯：攻速 +1', bonds: ['ursus'], kind: 'stat', note: '每2层乌萨斯，攻速 +1' },
      t8_66: { label: '乌萨斯层数', complex: true, condition: '击倒 / 上限16', detail: '击倒：乌萨斯/迅捷 +1，上限16', bonds: ['ursus', 'swift'], kind: 'battleStack', value: 1, cap: 16, trigger: '击倒' },
      t8_52: { label: '盟约层数', complex: true, condition: '开技能 / 上限12', detail: '开技能：盟约层数 +4，上限12', bonds: ['covenant'], kind: 'battleStack', value: 4, cap: 12, trigger: '开技能' },
      t8_56: { label: '攻击力', complex: true, condition: '每10层', detail: '每10层乌萨斯/奇迹：攻速/攻击提升', bonds: ['ursus', 'miracle'], kind: 'stat', note: '每10层乌萨斯/奇迹，攻速与攻击力条件提升' }
    },
    bench: ['t8_67', 'archet', 't8_74', 't8_63'],
    strategy: {
      main: 'st13',
      alternatives: ['st29'],
      reason: '保下限选杰西卡，搏上限选昆图斯',
      posterText: {
        st13: '第4/7/10/13回合获得寻呼模块，免费找1名同盟约干员。',
        st29: '第4回合起，把1名干员变为高一阶随机干员。'
      }
    },
    legacy: { route: [], bonds: [], notes: [] }
  };

  window.GUIDE_DATA = {
    ...base,
    ...data,
    meta: { ...base.meta, ...data.meta },
    operators: base.operators,
    bondLibrary: base.bondLibrary,
    strategyLibrary: base.strategyLibrary,
    strategyBrief: base.strategyBrief,
    equipmentEffects: base.equipmentEffects
  };

  // 竖版长图的「缺卡怎么办」直接读 operator.substitute；这里补上乌萨斯示例的替换位。
  const substitutes = {
    char_4207_branch: '没有折桠，先用任意乌萨斯前排顶住',
    t8_10: '没有烈夏，先用真理凑乌萨斯人数',
    t8_29: '没有乌啾，先用折桠单转，别硬等',
    t8_45: '没有维伊，先用 Miss.Christine 顶 2 奥',
    t8_66: '没有冻河就停 4 本，不要硬上 5',
    t8_52: '没有霍尔海雅，先稳战力，四本别硬搜',
    t8_41: '没有青枳，先用渡桥/空弦过渡',
    archet: '没有空弦，先用陨星/青枳过渡',
    t8_17: '没有 Miss.Christine，先用任意奥术位',
    t8_56: '没有怒潮凛冬，用真理/塔露拉补第 6 乌',
    t8_67: '没有阿米娅，先用 Mon3tr 提上限'
  };
  for (const [id, text] of Object.entries(substitutes)) {
    if (window.GUIDE_DATA.operators[id]) {
      window.GUIDE_DATA.operators[id] = { ...window.GUIDE_DATA.operators[id], substitute: text };
    }
  }

  // 页面级推广信息：地址栏保持 ?preset=ursus，标题/描述/返回入口跟着切换。
  document.title = '乌萨斯公式化运营｜卫戍协议 · 规程一图流';
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', '明日方舟「卫戍协议：规程」乌萨斯公式化运营一图流：3乌起手、2迅1奥、四本海雅、五本冻河、6乌3奥2迅。固定 4:3 海报，可编辑、可导出 3200×2400 PNG。');
  document.body.dataset.preset = 'ursus';
  const poster = document.getElementById('poster');
  if (poster) poster.setAttribute('aria-label', '卫戍协议规程乌萨斯公式化运营一图流');
  const picker = document.getElementById('presetSelect');
  if (picker) picker.value = 'ursus';
})();
