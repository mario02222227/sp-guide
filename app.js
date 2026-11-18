/* ============================================================
   Stronghold Protocol / SP-03 — fixed poster renderer
   PosterData schemaVersion = 3

   这个文件是一个 IIFE（要保证 file:// 双击能开，所以不用 ES module / 构建）。
   找代码时搜下面的分节标题。每一节在文件里都有一模一样的横线标题，
   下面的顺序就是文件里的顺序，标题里带斜杠的是同节内的多个小节的合并写法。

     Setup / text & palette helpers      $ / esc / rich / 稀有度与阶级色
     Share / QR helpers                 头像 / 二维码 / 朝向 / deepMerge 等小工具
     Migration + 干员查询               v1 → v2 → v3；hydrateState / toStorageState
     Render helpers                     profBadge / bondBadge / avatarStyle / modalShell
     Lineup facts → 海报各面板          阵容事实 → HTML；renderPoster 汇总
     Layout / scale / checks            fitPoster、posterCheck（导出前自检）
     Editable text / counters           可编辑文字的字数计数
     Persistence / edit toggle          saveNow / saveSoon、保存状态
     撤销 / 重做                         挂在 saveNow 上的历史栈
     Modal                              弹窗、焦点循环与归还
     干员详情抽屉 / 轻量信息浮层 / 词条关联   屏幕侧的三个读界面
     Operator editor                    干员字段编辑器
     Saved lineups / drafts             命名存档与自动备份槽
     New lineup / Board size / Lineup sync
     Left roster drawer                 干员库抽屉
     Right variants drawer              备选干员
     Right equipment library drawer + 拾取器   装备库；地图 / 阶段 / 装备三个拾取弹窗
     Data import / export
     Board drag & drop                  拖放、两步选向、范围预览
     Export 3200 × 2400
     Share                              分享码、二维码、竖版长图
     Mobile reading view                手机阅读 / 编辑版（renderMobile）
     Flow mode                          调整阵容的五步向导
     Events                             全局委托：click / keydown / input …
     Boot

   数据流只有一条，新增功能照着走就行：
     改 state → saveNow()（落盘 + 记一步撤销）→ renderPoster()（必要时再 renderRoster / renderVariants）
   要让海报、手机阅读版、调整阵容、竖版长图一起变：先改 Lineup facts 里的字段，
   各画面只读取这个字段来排版。不要在 renderPoster / renderMobile / flowStepHtml / shareCardHtml 里各算一遍。
   持久化的是 toStorageState(state) 这份精简形态（只存用户改过的东西，约 4KB）；
   完整的 state = 默认资料库 + 精简形态，由 hydrateState() 现场合成，不要把完整 state 写进 localStorage。
   ============================================================ */
(() => {
  'use strict';

  // 旧链接 ?preset=ursus 仍走独立草稿槽。默认页就是乌萨斯示例。
  const PRESET = (() => {
    try { return new URLSearchParams(location.search).get('preset') || ''; } catch (e) { return ''; }
  })();
  const PRESET_SUFFIX = PRESET ? ':' + PRESET : '';
  const STORAGE_KEY = 'sp-guide-poster-v2' + PRESET_SUFFIX;
  const OLD_STORAGE_KEY = 'sp-guide-03-v1' + PRESET_SUFFIX;
  const SAVES_KEY = 'sp-guide-poster-saves-v1' + PRESET_SUFFIX;
  const VIEW_MODE_KEY = 'sp-view-mode-v1' + PRESET_SUFFIX;
  const SCHEMA_VERSION = 3;
  const DEFAULT_DATA = window.GUIDE_DATA;
  const ASSETS = window.ASSET_DATA || {};

  /* ------------------------------------------------------------
     Setup / text & palette helpers
     ------------------------------------------------------------ */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (v) => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  /* 描述文本关键词高亮：持续叠加 / 单次叠加 / <战斗中> / 已激活的 / 【萨尔贡】
     先匹配、再分段转义，避免把用户文本当 HTML 执行（返回值可直接插进 innerHTML）。 */
  const PHASE_TAGS = ['战斗中', '战斗开始时', '战斗结束时', '休整期结束时', '进入休整期时', '开启技能时', '刷新时', '获得时', '售出时'];
  const RICH_RE = new RegExp('【[^【】\\r\\n]{1,12}】|<(?:' + PHASE_TAGS.join('|') + ')>|持续叠加|单次叠加|已激活的', 'g');
  function richToken(tok) {
    if (tok.charAt(0) === '【') return '<span class="kw-name"><i>【</i>' + esc(tok.slice(1, -1)) + '<i>】</i></span>';
    if (tok.charAt(0) === '<') return '<span class="tag-phase">' + esc(tok.slice(1, -1)) + '</span>';
    if (tok === '持续叠加') return '<span class="kw-stack">' + esc(tok) + '</span>';
    if (tok === '单次叠加') return '<span class="kw-stack once">' + esc(tok) + '</span>';
    return '<span class="kw-state">' + esc(tok) + '</span>';
  }
  const rich = (v) => {
    const text = String(v ?? '');
    let out = '', last = 0, m;
    RICH_RE.lastIndex = 0;
    while ((m = RICH_RE.exec(text))) {
      out += esc(text.slice(last, m.index)) + richToken(m[0]);
      last = m.index + m[0].length;
    }
    return out + esc(text.slice(last));
  };
  const attr = (v) => String(v ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const clone = (v) => structuredClone(v);
  const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

  const RARITY = { 6: '#ff9b2f', 5: '#ffd25e', 4: '#b79cff', 3: '#73e3ee', 2: '#9fc9a0', 1: '#a99e93' };
  const TIER_COLORS = { I: '#a6b0bb', II: '#72cf91', III: '#63b3ff', IV: '#bd8cff', V: '#ffb44f', VI: '#ff6656' };
  const tierColor = (o) => TIER_COLORS[bondTier(o)] || 'rgba(242,227,206,.42)';
  const ROLE = { stack: '#ffc400', dps: '#ff7a2f', engine: '#ffb347', tank: '#d6a45c', support: '#d8cbb8', flex: '#a9937e' };
  const PROF = {
    '术师': '<path d="M10 1.5l1.9 6.6L18.5 10l-6.6 1.9L10 18.5l-1.9-6.6L1.5 10l6.6-1.9z"/>',
    '辅助': '<circle cx="10" cy="10" r="6.6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 6v8M6 10h8" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    '医疗': '<path d="M8.2 2.5h3.6v5.7h5.7v3.6h-5.7v5.7H8.2v-5.7H2.5V8.2h5.7z"/>',
    '重装': '<path d="M10 2.2l6.5 2.7v4.8c0 4.2-3.6 6.7-6.5 8.1-2.9-1.4-6.5-3.9-6.5-8.1V4.9z" fill="none" stroke="currentColor" stroke-width="1.8"/>',
    '先锋': '<path d="M5.5 18V3.2l9 3.8-9 3.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    '近卫': '<path d="M4 16.2L15.8 4.4M11.4 4.4h4.4v4.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    '狙击': '<circle cx="10" cy="10" r="5.6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 1.6v3.2M10 15.2v3.2M1.6 10h3.2M15.2 10h3.2" fill="none" stroke="currentColor" stroke-width="1.6"/>'
  };
  const ITEM_META = {
    multi_supplement: '多功能补剂', originium_solvent: '源石溶剂', pegasus_glory: '天马之耀',
    kjerag_ice: '谢拉格不融冰', swift_ration: '迅捷作战粮', reliable_watch: '可靠怀表',
    arcane_array: '奥术法阵', steadfast_shield: '坚守盾牌', m3_carapace: 'M3 茧甲',
    dual_arm: '双模机械臂', egir_blade: '阿戈尔重刃', agile_gloves: '灵巧涡轮手套',
    snow_robe: '雪祀之衣', precision_scope: '精准狙击镜', unfallen_system: '不退者卫护系统',
    doctor_projection: '博士投影'
  };
  const avatarKeys = Object.keys(ASSETS).filter((p) => p.includes('/avatars/')).map((p) => p.split('/').pop().replace(/.webp$/, ''));
  const AVATAR_LABELS = { sbell2: '圣聆初雪', pramanix: '初雪', gnosis: '灵知', kjera: '耶拉', yak: '角峰', harold: '哈洛德', svash2: '凛御银灰', degen: '锏', snhunt: '雪猎', aurora: '极光', bldsk: '华法琳', cetsyr: '魔王', archet: '空弦', lisa: '铃兰' };
  const SHARE_PREFIX = '#s=';
  const SHARE_WARN_LEN = 2000;
  const BENCH_SIZE = 10;
  const EQUIP_MAX = 2;
  const EQUIP_SLOTS = [
    { key: 'must', label: '必做' },
    { key: 'big', label: '大提升' },
    { key: 'optional', label: '可选' }
  ];
  const equipSlotLabel = (key) => EQUIP_SLOTS.find((slot) => slot.key === key)?.label || key;

  /* 画布：宽度固定 1600（两栏布局按它算），高度默认 1200。
     左下面板塞不下时会按 40px 步进加高（见 fitPosterHeight），导出宽度仍是 3200。 */
  const POSTER_W = 1600;
  const POSTER_H = 1200;
  const POSTER_MAX_H = 1600;
  const POSTER_H_STEP = 40;

  let editMode = false;
  let pendingToast = '';
  let equipmentTrimmed = false;
  let saveTimer = 0;
  /* Mobile reading view. `renderMobile` is a no-op until the view module below
     is initialised; renderPoster() calls it so every mutator repaints both views. */
  let mobileUI = false;
  let posterHeight = POSTER_H;   /* 当前画布高度；内容不多时就是 1200 */
  let renderMobile = () => {};
  let mobileRosterOpen = false;
  let mobileRosterQuery = '';
  let mobileDrag = null;
  let mobileRange = null;
  let mobileRangeArmed = false;
  let mobileBondOpen = '';
  let mobileEquipOpen = null;
  let mobileFilterOpen = true;
  let mobileFilter = { tier: new Set(), trigger: new Set(), kind: new Set(), bond: new Set() };
  let flowOpen = false;
  let flowStep = 0;
  let flowPicked = [];
  let flowBoard = null;
  let flowBench = [];
  let flowStages = null;
  let flowSnapshot = null;
  let flowQuery = '';
  let flowBond = 'all';
  let flowKind = 'all';
  let flowTrigger = 'all';
  let flowMoreFilters = false;
  let flowTier = 'all';
  let flowDetailId = '';
  let flowStrategyQuery = '';
  let flowDrag = null;
  let flowSuppressClickUntil = 0;
  let flowSelected = '';
  let selectedRosterId = null;
  let detailModulePick = {};
  let rosterFilter = { q: '', tier: new Set(), trigger: new Set(), kind: new Set(), bond: new Set() };
  const TRIGGER_DEFS = [
    { id: 'battle', label: '战斗中', re: /战斗中/ },
    { id: 'obtain', label: '获得时', re: /获得时/ },
    { id: 'battle-start', label: '战斗开始时', re: /战斗开始时/ },
    { id: 'skill', label: '开启技能时', re: /开启技能时/ },
    { id: 'rest', label: '休整期', re: /休整期/ },
    { id: 'sell', label: '售出时', re: /售出时/ },
    { id: 'battle-end', label: '战斗结束时', re: /战斗结束时/ },
    { id: 'refresh', label: '刷新时', re: /刷新时/ },
    { id: 'deploy', label: '部署时', re: /部署时/ },
    { id: 'knock', label: '被击倒时', re: /被击倒/ },
    { id: 'damage', label: '造成伤害时', re: /造成伤害时/ },
    { id: 'buy', label: '购买相关', re: /购买/ }
  ];
  const BOND_FILTER_ORDER = [
    'yan', 'kjerag', 'arcane', 'precision', 'swift', 'skillful', 'steadfast', 'empty',
    'doc', 'miracle', 'invest', 'mani', 'victoria', 'kazimierz', 'lethania',
    'visi', 'siracusa', 'egir', 'sargon', 'solo', 'iberia', 'indom', 'deputy', 'ursus', 'raid'
  ];
  /* 盟约分两类（可露希尔Wiki 的两张表）：核心盟约 10 个，其余为附加盟约。
     数据里没有这个字段，只能显式列；名单之外的（例如库里没人用的拉特兰）一律归附加。 */
  const BOND_CORE_IDS = new Set([
    'yan', 'sargon', 'victoria', 'kjerag', 'egir', 'siracusa',
    'kazimierz', 'ursus', 'iberia', 'lethania'
  ]);
  const isCoreBond = (id) => BOND_CORE_IDS.has(id);
  const operatorTraitText = (o) => [o?.trait, o?.eliteTrait].filter(Boolean).join('\n');
  const operatorTriggers = (o) => TRIGGER_DEFS.filter((t) => t.re.test(operatorTraitText(o))).map((t) => t.id);
  const TIER_ORDER = ['I', 'II', 'III', 'IV', 'V', 'VI'];
  const operatorTier = (o) => String(o?.tier || '').replace(/阶$/, '');
  const operatorTierTest = (tier) => (o) => operatorTier(o) === tier;
  /* 特质开头那段就是卫戍能力的类型（持续叠加 / 单次叠加 / 作战能力 / 整备能力 / 特异化）。
     数据里没有独立字段，只有文本前缀，所以按前缀解析，供筛选和样式复用。 */
  const TRAIT_KINDS = ['持续叠加', '单次叠加', '作战能力', '整备能力', '特异化'];
  function traitKinds(o) {
    const found = [o?.trait, o?.eliteTrait]
      .map((t) => String(t || '').trim())
      .map((t) => TRAIT_KINDS.find((k) => t.startsWith(k)))
      .filter(Boolean);
    return [...new Set(found)];
  }
  let equipmentQuery = '';
  let equipmentDetailKey = '';
  let itemPickerPreview = '';
  let draggedOperatorId = null;
  let pendingPlacement = null;
  let directionDrag = null;
  // 棋盘上点头像：第一次只亮攻击范围，范围还亮着时再点才转向。
  let boardRangeId = null;
  let placedFlashId = '';

  const asset = (p) => ASSETS[p] || p;
  const MISSING_AVATAR = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1a0d0a"/><rect x="6" y="6" width="88" height="88" fill="none" stroke="#8c6a58" stroke-dasharray="6 5"/><text x="50" y="62" text-anchor="middle" font-size="42" fill="#ffc400" font-family="monospace">?</text></svg>');
  const MISSING_IDS = new Set();
  let missingToastShown = false;
  const avatarSrc = (key) => {
    if (key === '__missing') return MISSING_AVATAR;
    if (!key) return asset('assets/avatars/sbell2.webp');
    if (/^(data:|https?:|blob:|assets\/)/.test(key)) return ASSETS[key] || key;
    return ASSETS['assets/avatars/' + key + '.webp'] || ('assets/avatars/' + key + '.webp');
  };
  /* ------------------------------------------------------------
     Share / QR helpers
     ------------------------------------------------------------ */
  const qrCache = new Map();
  function qrDataUrl(text, displayPx = 120) {
    const value = String(text || '').trim();
    if (!value || typeof window.qrcode !== 'function') return '';
    const px = Math.max(24, Math.round(Number(displayPx) || 120));
    const cacheKey = px + '|' + value;
    const cached = qrCache.get(cacheKey);
    if (cached !== undefined) return cached;
    let dataUrl = '';
    try {
      const qr = window.qrcode(0, 'M');
      qr.addData(value);
      qr.make();
      const count = qr.getModuleCount();
      const quiet = 4;
      const scale = Math.max(2, Math.ceil((px * 3) / (count + quiet * 2)));
      const size = (count + quiet * 2) * scale;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = '#000000';
      for (let row = 0; row < count; row++) {
        for (let col = 0; col < count; col++) {
          if (qr.isDark(row, col)) ctx.fillRect((col + quiet) * scale, (row + quiet) * scale, scale, scale);
        }
      }
      dataUrl = canvas.toDataURL('image/png');
    } catch (e) {
      console.error('QR generate failed', e);
    }
    qrCache.set(cacheKey, dataUrl);
    return dataUrl;
  }

  // 海报/长图上印的「长期入口」：优先用手动配置的短链，其次用当前页面的 http(s) 地址。
  function siteUrl() {
    const configured = String(state?.meta?.shareUrl || '').trim();
    if (/^https?:\/\//i.test(configured)) return configured;
    const clean = String(location.href || '').split('#')[0];
    return /^https?:/i.test(clean) ? clean : '';
  }
  function isHttpPage() { return /^https?:/i.test(String(location.href || '')); }

  const itemSrc = (key) => ASSETS['assets/items/' + key + '.webp'] || ('assets/items/' + key + '.webp');
  const bondIcon = (id) => {
    const icon = state?.bondLibrary?.[id]?.icon || id;
    const key = /^assets\//.test(icon) ? icon : 'assets/bonds/' + icon + '.webp';
    return ASSETS[key] || ASSETS['assets/bonds/' + id + '.webp'] || ('assets/bonds/' + id + '.webp');
  };
  const skillOf = (o) => (o?.skills || [])[Number(o?.skillIdx) || 0] || null;
  const skillIcon = (o) => { const s = skillOf(o); return s?.iconId ? (ASSETS['assets/skills/' + s.iconId + '.webp'] || ('assets/skills/' + s.iconId + '.webp')) : ''; };
  const moduleType = (o) => String(moduleOf(o)?.type || '').split('-').pop() || '';
  function moduleOf(o) {
    const id = o?.module?.id || (window.SP_MODULE_BY_OPERATOR || {})[o?.id];
    const entry = id ? (window.SP_MODULES?.[id] || null) : null;
    if (entry) {
      return { ...(o?.module || {}), id: entry.id, name: o?.module?.name || entry.name, type: entry.type || o?.module?.type || '', icon: o?.module?.icon || entry.id };
    }
    return o?.module || null;
  }
  function moduleEntry(o) {
    const id = o?.module?.id || (window.SP_MODULE_BY_OPERATOR || {})[o?.id];
    return id ? (window.SP_MODULES?.[id] || null) : null;
  }
  function moduleBadge(o, big) {
    const mod = moduleOf(o);
    if (!mod) return '<span class="module-type empty' + (big ? ' big' : '') + '" title="无模组">—</span>';
    const t = moduleType(o) || '?';
    return '<span class="module-type' + (big ? ' big' : '') + '" title="' + attr('模组 ' + t + '：' + mod.name) + '">' + esc(t) + '</span>';
  }
  const ROMAN_TIERS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI'];
  function tierNumber(o) {
    const m = String(o?.tier ?? '').trim().match(/^(VI|IV|V|III|II|I|\d+)/i);
    if (!m) return 0;
    const t = m[1].toUpperCase();
    if (/^\d+$/.test(t)) return Math.max(0, Math.min(6, Number(t)));
    return ROMAN_TIERS.indexOf(t);
  }
  const tierRoman = (o) => ROMAN_TIERS[tierNumber(o)] || '';
  const formatSeconds = (v) => {
    const n = Number(v);
    if (!Number.isFinite(n)) return '';
    return (Number.isInteger(n) ? n.toFixed(1) : String(Number(n.toFixed(2)))) + 's';
  };
  /* 强袭数据把攻速放在 bat（攻击间隔/秒），补录数据放在 aspd（"1.2s"）；
     部分旧数据还留着 aspd=100 的百分比值，这里统一成秒。 */
  function attackInterval(st) {
    const bat = Number(st?.bat);
    if (Number.isFinite(bat) && bat > 0) return formatSeconds(bat);
    const raw = String(st?.aspd ?? '').trim();
    const m = raw.match(/^([0-9]+(?:\.[0-9]+)?)\s*(?:s|秒)?$/i);
    if (m) {
      const v = Number(m[1]);
      if (v === 100) return '—';
      return formatSeconds(v);
    }
    return raw || '—';
  }
  const skillNumeral = (idx) => ['Ⅰ', 'Ⅱ', 'Ⅲ'][Number(idx) || 0] || 'Ⅰ';
  const FACINGS = { right: 0, down: 90, left: 180, up: 270 };
  const FACING_ORDER = ['right', 'down', 'left', 'up'];
  const normalizeFacing = (f) => {
    if (FACINGS[f] !== undefined) return f;
    if (String(f).includes('down')) return 'down';
    if (String(f).includes('up')) return 'up';
    if (String(f).includes('left')) return 'left';
    return 'right';
  };
  const facingAngle = (f) => FACINGS[normalizeFacing(f)] ?? 0;
  const facingArrow = (f) => '<span class="facing-arrow" style="transform:rotate(' + facingAngle(f) + 'deg)">→</span>';
  const FACING_LABEL = { right: '右', down: '下', left: '左', up: '上' };
  // 原始 rangeGrid 以「正面朝上」为基准：+y 是正前方。旋转到实际朝向。
  function rotateRangeCell(gx, gy, facing) {
    const dir = normalizeFacing(facing);
    if (dir === 'right') return [gy, gx];
    if (dir === 'down') return [-gx, gy];
    if (dir === 'left') return [-gy, -gx];
    return [gx, -gy];
  }
  function directionFromPoint(cell, x, y) {
    if (!cell) return null;
    const r = cell.getBoundingClientRect();
    const dx = x - (r.left + r.width / 2);
    const dy = y - (r.top + r.height / 2);
    if (Math.abs(dx) < r.width * 0.12 && Math.abs(dy) < r.height * 0.12) return null;
    return Math.abs(dx) >= Math.abs(dy) ? (dx >= 0 ? 'right' : 'left') : (dy >= 0 ? 'down' : 'up');
  }

  function deepMerge(base, extra) {
    if (Array.isArray(base)) return Array.isArray(extra) ? extra : base;
    if (isObj(base)) {
      const out = { ...base };
      if (isObj(extra)) for (const k of Object.keys(extra)) out[k] = deepMerge(base[k], extra[k]);
      return out;
    }
    return extra === undefined ? base : extra;
  }
  function setPath(obj, path, value) {
    const parts = String(path).split('.');
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      if (cur[parts[i]] === undefined || cur[parts[i]] === null) cur[parts[i]] = /^\d+$/.test(parts[i + 1]) ? [] : {};
      cur = cur[parts[i]];
    }
    cur[parts[parts.length - 1]] = value;
  }

  /* ------------------------------------------------------------
     Migration + 干员查询：v1 → v2 → v3；hydrateState / toStorageState
     ------------------------------------------------------------ */
  const PROF_MAP = {
    sbell2: ['术师', '术'], pramanix: ['辅助', '辅'], gnosis: ['辅助', '辅'], kjera: ['术师', '术'],
    yak: ['重装', '重'], harold: ['医疗', '医'], svash2: ['先锋', '先'], degen: ['近卫', '近'],
    snhunt: ['狙击', '狙'], aurora: ['重装', '重'], bldsk: ['医疗', '医'], cetsyr: ['辅助', '辅'],
    archet: ['狙击', '狙'], lisa: ['辅助', '辅']
  };
  const RARITY_MAP = { snhunt: 5, aurora: 5, bldsk: 5, cetsyr: 6, archet: 6, lisa: 6 };
  const THRESH = {
    kjerag: [3, 6], swift: [2, 40], skillful: [2, 40], arcane: [2, 3], precision: [2, 3],
    steadfast: [2, 3], empty: [2], victoria: [3, 6], kazimierz: [3, 6], miracle: [2, 100],
    invest: [3, 100], mani: [1], lethania: [3, 6], doc: [2, 3]
  };
  function itemKey(name) {
    const n = String(name || '').replace(/\s+/g, ' ').trim();
    for (const [k, v] of Object.entries(ITEM_META)) if (v === n || v.replace(/\s/g, '') === n.replace(/\s/g, '')) return k;
    return n;
  }
  function roleOf(id) {
    return {
      sbell2: '主叠层', gnosis: '冻结', pramanix: '副叠层', harold: '治疗', degen: 'Boss', svash2: '上限',
      kjera: '发冰', yak: '前排', snhunt: '叠层', aurora: '前排', bldsk: '治疗', cetsyr: '外援', archet: '对空', lisa: '触发'
    }[id] || (DEFAULT_DATA.operators?.[id]?.subProfession || DEFAULT_DATA.operators?.[id]?.profession || '核心').slice(0, 4);
  }

  function migrateV1toV2(old) {
    if (!old || (!Array.isArray(old.core) && !isObj(old.operators))) throw new Error('没有旧版 core 数据');
    if (old.schemaVersion === 2) return old;
    const ops = {};
    for (const o of (old.core || [])) {
      if (!o || !o.id) continue;
      const p = PROF_MAP[o.id] || ['未知', '?'];
      ops[o.id] = { ...o, profession: p[0], professionShort: p[1], bench: false };
    }
    for (const b of (old.bench || [])) {
      const id = b.avatar || ('bench-' + Math.random().toString(36).slice(2));
      const p = PROF_MAP[id] || ['未知', '?'];
      ops[id] = { ...b, id, bonds: b.bonds || [], rarity: b.rarity || RARITY_MAP[id] || 5, profession: p[0], professionShort: p[1], bench: true };
    }
    const cells = old.board?.cells || [];
    const placements = cells.map((c) => ({ operatorId: c.unit, col: Number(c.c), row: Number(c.r), facing: c.facing || (c.unit === 'kjera' ? 'left' : 'right') })).filter((p) => ops[p.operatorId]);
    const counts = {};
    for (const p of placements) for (const b of (ops[p.operatorId]?.bonds || [])) counts[b] = (counts[b] || 0) + 1;
    const bondOrder = ['kjerag', 'swift', 'skillful', 'arcane', 'steadfast', 'precision'];
    const bonds = bondOrder.map((id) => ({ bondId: id, active: counts[id] || 0, thresholds: THRESH[id] || [2] }));
    const bondLibrary = {};
    for (const b of (old.bonds || [])) bondLibrary[b.id] = { name: b.name, icon: b.icon, tag: b.tag, summary: b.summary, effects: b.effects, play: b.play };
    const eqRows = {};
    for (const e of (old.equipment || [])) eqRows[e.op] = e;
    function matrix(name, id) {
      const row = eqRows[name] || { items: [], alt: '', why: '' };
      const items = (row.items || []).filter((k) => ITEM_META[k]);
      const alt = String(row.alt || '').split(/[\/、，,]/).map((s) => s.trim()).filter(Boolean).map(itemKey).filter((k) => ITEM_META[k]);
      const out = { operatorId: id, must: items.slice(0, 1), big: items.slice(1, 2), optional: alt.slice(0, 2) };
      if (id === 'degen' && !out.optional.includes('egir_blade')) out.optional.push('egir_blade');
      return out;
    }
    const equipment = [matrix('圣聆初雪', 'sbell2'), matrix('锏', 'degen'), matrix('哈洛德', 'harold')];
    const equipmentNotes = { sbell2: eqRows['圣聆初雪']?.why || '', degen: eqRows['锏']?.why || '', harold: eqRows['哈洛德']?.why || '' };
    return {
      schemaVersion: 2,
      meta: {
        title: old.meta?.title || DEFAULT_DATA.meta.title,
        subtitle: old.meta?.subtitle || DEFAULT_DATA.meta.subtitle || '规程 · 乌萨斯',
        version: 'SP-03',
        rating: 'S',
        tags: clone(DEFAULT_DATA.meta.tags),
        author: DEFAULT_DATA.meta.author,
        date: old.meta?.updated || DEFAULT_DATA.meta.date,
        difficulty: old.meta?.difficulty || DEFAULT_DATA.meta.difficulty,
        mode: old.meta?.mode || DEFAULT_DATA.meta.mode,
        disclaimer: old.meta?.disclaimer || DEFAULT_DATA.meta.disclaimer,
        sources: old.sources || DEFAULT_DATA.meta.sources
      },
      operators: ops,
      coreOperators: ['sbell2', 'gnosis', 'pramanix', 'harold', 'degen', 'svash2'].filter((id) => ops[id]).map((id) => ({ operatorId: id, role: roleOf(id) })),
      board: { cols: old.board?.cols || 8, rows: old.board?.rows || 4, placements },
      bonds,
      bondLibrary,
      equipment,
      equipmentNotes,
      route: clone(DEFAULT_DATA.legacy?.route || []),
      bench: (old.bench || []).map((b) => b.avatar),
      legacy: {
        meta: old.meta, core: old.core, bench: old.bench, equipment: old.equipment,
        bonds: old.bonds, board: old.board, rounds: old.rounds, verdicts: old.verdicts,
        pitfalls: old.pitfalls, thesis: old.thesis, metrics: old.metrics, sources: old.sources
      }
    };
  }

  const USER_OPERATOR_FIELDS = ['name', 'avatar', 'role', 'roleKey', 'why', 'position', 'timing', 'equip', 'equipWhy', 'substitute', 'text'];
  const normText = (s) => String(s || '').replace(/\s+/g, '').replace(/[「」“”"'，。；：、]/g, '');

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      const quota = e && (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014);
      toast(quota ? '本机存储已满，请先导出数据' : '保存失败：' + (e.message || e.name), true);
      return false;
    }
  }

  // 调用方传精简形态（toStorageState）或原始旧存档，不要传完整 state：
  // 完整 state 带着整份干员 / 盟约资料库（约 340KB），三份备份就能把 localStorage 配额吃掉一大块。
  function backup(key, data) {
    try {
      const stamp = new Date().toISOString().replace(/[:.]/g, '-');
      const name = key + '-backup-' + stamp;
      localStorage.setItem(name, JSON.stringify(data));
      const prefix = key + '-backup-';
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(prefix)) keys.push(k);
      }
      keys.sort();
      while (keys.length > 3) {
        const old = keys.shift();
        localStorage.removeItem(old);
      }
    } catch (e) {
      toast('备份失败：' + (e.message || e.name), true);
    }
  }

  function isValid(d) {
    return !!d && d.schemaVersion === 3 && isObj(d.meta)
      && Array.isArray(d.coreOperators) && isObj(d.board)
      && Array.isArray(d.stages) && d.stages.length === 3;
  }

  function routeToStages(route, board) {
    if (!Array.isArray(route) || !route.length) return clone(DEFAULT_DATA.stages);
    const defs = [
      { id: 'r1-6', label: 'R1-6', from: 1, to: 6 },
      { id: 'r7-13', label: 'R7-13', from: 7, to: 13 },
      { id: 'boss', label: 'BOSS战', from: 14, to: 14 }
    ];
    let prev = [];
    const out = [];
    for (const def of defs) {
      const rows = route.filter((r) => {
        const n = parseInt(r.round, 10);
        return n >= def.from && n <= def.to;
      });
      const seen = new Set(prev);
      const recruit = [];
      for (const r of rows) {
        for (const id of (r.operatorIds || [])) {
          if (!seen.has(id)) { seen.add(id); recruit.push(id); }
        }
      }
      const last = rows.length ? rows[rows.length - 1] : null;
      const lineup = (last?.operatorIds || prev).slice(0, 9);
      const notes = rows.map((r) => r.note).filter(Boolean);
      const boardIds = (board?.placements || []).map((p) => p.operatorId);
      const same = def.id === 'boss'
        && lineup.length === boardIds.length
        && lineup.every((id) => boardIds.includes(id));
      out.push({
        id: def.id, label: def.label,
        recruit: recruit.slice(0, 9),
        lineupSource: same ? 'board' : 'manual',
        lineup: same ? boardIds.slice(0, 9) : clone(lineup),
        note: notes.join('；')
      });
      prev = lineup;
    }
    return out;
  }

  function cleanPlay(play, effects) {
    if (!play) return '';
    const e = normText((effects || []).map((x) => x.text).join(''));
    return e && normText(play) === e ? '' : play;
  }

  function overridesFromV2(v2) {
    const overrides = {};
    const loadout = {};
    for (const [id, o] of Object.entries(v2.operators || {})) {
      const base = DEFAULT_DATA.operators?.[id];
      if (!base) { overrides[id] = clone(o); continue; }
      const ov = {};
      for (const f of USER_OPERATOR_FIELDS) {
        if (JSON.stringify(o[f]) !== JSON.stringify(base[f])) ov[f] = clone(o[f]);
      }
      if (Object.keys(ov).length) overrides[id] = ov;
      if (o.skillIdx !== undefined && o.skillIdx !== base.skillIdx) loadout[id] = o.skillIdx;
    }
    return { overrides, loadout };
  }

  function migrateV2toV3(v2) {
    if (!v2 || !isObj(v2)) throw new Error('海报数据为空');
    const { overrides, loadout } = overridesFromV2(v2);
    const bondPlay = {};
    for (const [id, b] of Object.entries(v2.bondLibrary || {})) {
      if (!b || b.play === undefined) continue;
      const basePlay = DEFAULT_DATA.bondLibrary?.[id]?.play || '';
      // v2 无法区分“从未设置”和“用户清空”；如果 data.js 有默认值而草稿为空，按用户清空处理。
      if (b.play === '') {
        if (basePlay) bondPlay[id] = '';
        continue;
      }
      const play = cleanPlay(b.play, b.effects);
      if (play !== basePlay) bondPlay[id] = play;
    }
    const migrated = {
      schemaVersion: 3,
      meta: clone(v2.meta || DEFAULT_DATA.meta),
      coreOperators: clone(v2.coreOperators || []),
      board: clone(v2.board || { cols: 8, rows: 4, placements: [] }),
      stages: routeToStages(v2.route, v2.board),
      equipment: clone(v2.equipment || []),
      equipmentNotes: clone(v2.equipmentNotes || {}),
      bench: clone(v2.bench || []),
      strategy: clone(v2.strategy || { main: '', alternatives: [], reason: '', posterText: {} }),
      legacy: { ...(v2.legacy || {}), route: clone(v2.route || []), bonds: clone(v2.bonds || []), notes: clone(v2.notes || []) },
      loadout,
      operatorOverrides: overrides,
      bondPlay
    };
    return normalizeV3(migrated);
  }

  function normalizeV3(raw) {
    const v = { ...raw };
    if (Array.isArray(v.notes)) {
      v.legacy = { ...(v.legacy || {}), notes: v.notes };
      delete v.notes;
    }
    const st = { ...(v.strategy || {}) };
    if (!isObj(st.posterText)) st.posterText = {};
    if (Array.isArray(st.alternatives) && st.alternatives.length > 2) {
      const extra = st.alternatives.slice(2);
      v.legacy = { ...(v.legacy || {}), strategyAlternatives: [ ...(v.legacy?.strategyAlternatives || []), ...extra ] };
      st.alternatives = st.alternatives.slice(0, 2);
      pendingToast = '旧草稿的次选超过 2 个，多出的已移入 legacy.strategyAlternatives';
    }
    v.strategy = st;
    return v;
  }

  function migrateToV3(raw) {
    if (!raw || !isObj(raw)) throw new Error('不是有效的 JSON 对象');
    if (raw.schemaVersion === 3) return normalizeV3(raw);
    if (raw.schemaVersion === 2) return migrateV2toV3(raw);
    return migrateV2toV3(migrateV1toV2(raw));
  }

  function hydrateState(stored) {
    // 整份默认数据只深拷贝一次：out.operators / out.bondLibrary / out.legacy 已经是独立副本，
    // 不需要再各拷一遍（以前这里把 ~340KB 的资料库拷了三遍，每次载入 / 撤销 / 生成分享码都要付这笔账）。
    const out = clone(DEFAULT_DATA);
    const retired = DEFAULT_DATA.retiredOperatorIds || [];
    for (const k of ['meta', 'coreOperators', 'board', 'stages', 'equipment', 'equipmentNotes', 'bench', 'strategy']) {
      if (stored[k] !== undefined) out[k] = clone(stored[k]);
    }
    for (const [id, ov] of Object.entries(stored.operatorOverrides || {})) {
      if (retired.includes(id)) continue;
      if (out.operators[id]) out.operators[id] = { ...out.operators[id], ...clone(ov) };
      else out.operators[id] = clone(ov);
    }
    for (const [id, idx] of Object.entries(stored.loadout || {})) {
      if (out.operators[id]) out.operators[id].skillIdx = idx;
    }
    for (const [id, play] of Object.entries(stored.bondPlay || {})) {
      if (out.bondLibrary[id]) out.bondLibrary[id].play = play;
    }
    out.legacy = deepMerge(out.legacy || {}, stored.legacy || {});
    // 布局开关成对出现：V2 左栏（equipmentInCore）必须带备战区。
    // 旧草稿可能只留了其中一个，或删掉谢拉格后仍停在缺 showBench 的状态。
    out.meta = out.meta || {};
    const sampleMeta = DEFAULT_DATA.meta || {};
    for (const key of ['showBench', 'equipmentInCore', 'boardGates', 'showQr', 'headerNote', 'subsNote', 'shareLineup', 'shareNote', 'placementChecks', 'proof']) {
      if (out.meta[key] === undefined && sampleMeta[key] !== undefined) out.meta[key] = clone(sampleMeta[key]);
    }
    if (out.meta.equipmentInCore) out.meta.showBench = true;
    if (out.meta.version === 'SP-U1' || out.meta.title === '乌萨斯公式化运营') {
      out.meta.showBench = true;
      out.meta.equipmentInCore = true;
      if (!Array.isArray(out.bench) || !out.bench.length) out.bench = clone(DEFAULT_DATA.bench || []);
    }
    const eq = normalizeEquipment(out.equipment || []);
    out.equipment = eq.rows;
    if (eq.trimmed) {
      equipmentTrimmed = !pendingToast;
      if (!pendingToast) pendingToast = '已按每人 2 件装备整理';
    }
    out.schemaVersion = 3;
    return out;
  }

  function toStorageState(s) {
    const out = {
      schemaVersion: 3,
      meta: clone(s.meta),
      coreOperators: clone(s.coreOperators || []),
      board: clone(s.board),
      stages: clone(s.stages || routeToStages(s.legacy?.route, s.board)),
      equipment: clone(s.equipment || []),
      equipmentNotes: clone(s.equipmentNotes || {}),
      bench: clone(s.bench || []),
      strategy: clone(s.strategy || { main: '', alternatives: [], reason: '' }),
      legacy: { ...(clone(s.legacy) || {}), route: clone(s.legacy?.route || []), bonds: clone(s.legacy?.bonds || []) },
      loadout: {},
      operatorOverrides: {},
      bondPlay: {}
    };
    for (const [id, o] of Object.entries(s.operators || {})) {
      const base = DEFAULT_DATA.operators?.[id];
      if (!base) { out.operatorOverrides[id] = clone(o); continue; }
      const ov = {};
      for (const f of USER_OPERATOR_FIELDS) {
        if (JSON.stringify(o[f]) !== JSON.stringify(base[f])) ov[f] = clone(o[f]);
      }
      if (Object.keys(ov).length) out.operatorOverrides[id] = ov;
      if (o.skillIdx !== undefined && o.skillIdx !== base.skillIdx) out.loadout[id] = o.skillIdx;
    }
    for (const [id, b] of Object.entries(s.bondLibrary || {})) {
      const base = DEFAULT_DATA.bondLibrary?.[id];
      if (!base) { if (b.play) out.bondPlay[id] = b.play; continue; }
      if (b.play !== base.play) out.bondPlay[id] = b.play;
    }
    return out;
  }

  function loadState() {
    let fresh = null;
    try { fresh = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch (e) { fresh = null; }
    if (fresh) {
      try {
        const v3 = migrateToV3(fresh);
        if (!isValid(v3)) throw new Error('迁移后结构不完整');
        const hydrated = hydrateState(v3);
        safeSet(STORAGE_KEY, JSON.stringify(toStorageState(hydrated)));
        return hydrated;
      } catch (e) {
        backup(STORAGE_KEY + '-invalid', fresh);
        pendingToast = '旧版海报存档无法识别，已备份并恢复示例';
      }
    }
    let old = null;
    try { old = JSON.parse(localStorage.getItem(OLD_STORAGE_KEY) || 'null'); } catch (e) { old = null; }
    if (old) {
      backup(OLD_STORAGE_KEY, old);
      try {
        const v3 = migrateToV3(old);
        if (!isValid(v3)) throw new Error('迁移后结构不完整');
        const hydrated = hydrateState(v3);
        safeSet(STORAGE_KEY, JSON.stringify(toStorageState(hydrated)));
        pendingToast = '旧版长页面存档已迁移到海报结构，旧数据已备份';
        return hydrated;
      } catch (e) {
        backup(OLD_STORAGE_KEY + '-failed', old);
        pendingToast = '旧存档迁移失败，已备份并恢复示例';
      }
    }
    return hydrateState(DEFAULT_DATA);
  }

  function migrate(raw) { return migrateToV3(raw); }

  let state = (() => {
    try {
      if (new URLSearchParams(location.search).has('reset')) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(VIEW_MODE_KEY);
        history.replaceState(null, '', location.pathname);
      }
    } catch (e) { /* file:// 或隐私模式 */ }
    return loadState();
  })();
  let saves = readSaves();

  const isGateCell = (row, col) => (state.meta?.boardGates || []).some((g) => Number(g.col) === Number(col));
  const op = (id) => {
    const found = state.operators?.[id];
    if (found) return found;
    if (!id) return null;
    MISSING_IDS.add(id);
    return { id, name: '未知干员', avatar: '__missing', bonds: [], skills: [], skillIdx: 0, module: null, stats: null, rangeGrid: [], talents: [], inPool: false, missing: true };
  };
  const hasOperator = (id) => !!(id && state.operators?.[id]);
  const bond = (id) => state.bondLibrary?.[id] || null;
  function operatorMatchesQuery(o, q) {
    if (!q) return true;
    const py = window.OP_PINYIN?.[o.name] || {};
    return String(o.name || '').toLowerCase().includes(q) ||
      String(py.full || '').toLowerCase().includes(q) ||
      String(py.initials || '').toLowerCase().includes(q);
  }
  function operatorSort(a, b) {
    return (Number(a.bench) - Number(b.bench)) || (tierNumber(a) - tierNumber(b)) || a.name.localeCompare(b.name, 'zh');
  }
  // 多个筛选条件取交集，合成一个列表。选「谢拉格 + 持续叠加」只留下两边都符合的干员。
  function buildMatchGroups(ops, selected) {
    if (!selected.length) return [{ key: 'all', label: '全部干员', ops: ops.slice() }];
    const matched = ops.filter((o) => selected.every((sel) => sel.test(o)));
    if (!matched.length) return [];
    return [{ key: 'match', label: selected.map((s) => s.label).join(' · '), ops: matched }];
  }
  function uniqueOps(groups) {
    const seen = new Set();
    for (const g of groups) for (const o of g.ops) seen.add(o.id);
    return seen.size;
  }

  function currentBondEntries() {
    const used = new Set();
    for (const o of Object.values(state.operators || {})) {
      for (const id of (o.bonds || [])) used.add(id);
    }
    const order = new Map(BOND_FILTER_ORDER.map((id, i) => [id, i]));
    return Object.entries(state.bondLibrary || {})
      .filter(([id]) => used.has(id))
      .sort((a, b) => {
        const ai = order.has(a[0]) ? order.get(a[0]) : 999;
        const bi = order.has(b[0]) ? order.get(b[0]) : 999;
        return (ai - bi) || a[1].name.localeCompare(b[1].name, 'zh');
      });
  }
  const item = (key) => ITEM_META[key] || key;
  const equipmentEffect = (key) => state.equipmentEffects?.[key] || DEFAULT_DATA.equipmentEffects?.[key] || null;
  const roleColor = (opData) => ROLE[opData?.roleKey] || ROLE.flex;
  const rarityColor = (opData) => RARITY[Number(opData?.rarity)] || RARITY[5];

  function profIcon(p) {
    const short = { '术': '术师', '辅': '辅助', '医': '医疗', '重': '重装', '先': '先锋', '近': '近卫', '狙': '狙击' };
    const body = PROF[short[p] || p] || '<rect x="4" y="4" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6"/>';
    return '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">' + body + '</svg>';
  }
  function noteIcon(type) {
    if (type === 'bad') return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>';
    if (type === 'warn') return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l9 17H3z" stroke-linejoin="round"/><path d="M12 9v5M12 17v.1" stroke-linecap="round"/></svg>';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12l2.6 2.8L16.5 9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  /* ------------------------------------------------------------
     Render helpers
     ------------------------------------------------------------ */
  function profBadge(o) {
    return '<span class="prof-badge" title="' + attr(o?.profession || '') + '">' + profIcon(o?.profession || o?.professionShort) + '</span>';
  }
  function bondBadge(o) {
    const id = (o?.bonds || [])[0];
    if (!id) return '';
    return '<span class="bond-badge"><img src="' + attr(bondIcon(id)) + '" alt="" /></span>';
  }
  /* 干员头像的皮肤：把等阶 / 稀有度 / 职业色写成 CSS 变量，样式本身留在 .avatar 系里。
     只写调用点真正用得到的那几个——多给一个 --rarity 会顶掉样式表里
     var(--rarity, ...) 的兜底色，头像边框会跟着变。 */
  function avatarStyle(o, opts = {}) {
    let s = '--tier-color:' + tierColor(o);
    if (opts.rarity) s += ';--rarity:' + rarityColor(o);
    if (opts.role) s += ';--role:' + roleColor(o);
    return ' style="' + s + '"';
  }
  /* 弹窗外壳：小标题 / 主标题 / 一句说明 / 内容 / 操作。
     以前每个弹窗都手抄这一段，字号还各不相同（24–30px），统一走 .modal-title。 */
  function modalShell({ kicker, title, note, body, actions }) {
    return '<div class="modal-body">' +
      (kicker ? '<div class="detail-kicker">' + kicker + '</div>' : '') +
      (title ? '<h2 class="detail-name modal-title">' + title + '</h2>' : '') +
      (note ? '<p class="detail-note">' + note + '</p>' : '') +
      (body || '') +
      (actions ? '<div class="form-actions">' + actions + '</div>' : '') +
      '</div>';
  }
  function coreEquipHtml(o) {
    if (!state.meta?.equipmentInCore) return '';
    const row = (state.equipment || []).find((e) => e.operatorId === o.id);
    const all = [];
    for (const slot of EQUIP_SLOTS) {
      const keys = Array.isArray(row?.[slot.key]) ? row[slot.key] : [];
      keys.forEach((key, index) => all.push({ key, slot: slot.key, index, label: slot.label }));
    }
    if (!all.length && !editMode && !flowOpen) return '';
    const shown = all.slice(0, EQUIP_MAX);
    const targetSlot = EQUIP_SLOTS.find((slot) => (row?.[slot.key] || []).length < 3)?.key || 'must';
    const buttons = shown.map((x) =>
      '<button class="core-equip-slot filled" type="button" data-equip-icon="' + attr(x.key) + '" data-equip-drop="1" data-op-id="' + attr(o.id) + '" data-slot="' + x.slot + '" data-index="' + x.index + '" title="' + attr(item(x.key) + ' · ' + x.label) + '">' +
        '<img src="' + itemSrc(x.key) + '" alt="" draggable="false" /></button>').join('');
    const addCount = (editMode || flowOpen) && canAddEquip(row) ? EQUIP_MAX - shown.length : 0;
    const add = Array.from({ length: Math.max(0, addCount) }, () =>
      '<button class="core-equip-slot add" type="button" data-equip-add data-equip-drop="1" data-op-id="' + attr(o.id) + '" data-slot="' + targetSlot + '" title="给' + attr(o.name) + '添加装备">+</button>').join('');
    return (buttons || add) ? '<div class="core-equip">' + buttons + add + '</div>' : '';
  }

  function coreCard(c) {
    const o = op(c.operatorId);
    if (!o) return '';
    const sk = skillOf(o);
    const skillTitle = sk ? ('技能 ' + skillNumeral(o.skillIdx) + '：' + sk.name) : '未配置技能';
    return '<div class="core-card" data-op-id="' + attr(o.id) + '" role="button" tabindex="0" aria-label="查看' + attr(o.name) + '" ' + avatarStyle(o, { rarity: true, role: true }) + '>' +
      '<div class="core-avatar"><img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" />' +
        '<button class="core-remove edit-only" type="button" data-core-remove="' + attr(o.id) + '" title="移出右上角">×</button></div>' +
      '<div class="core-name">' + esc(o.name) + '</div>' +
      '<div class="core-meta-row"><div class="core-loadout">' +
        '<span class="loadout-item" title="' + attr(skillTitle) + '"><img src="' + skillIcon(o) + '" alt="" draggable="false" /><b>' + skillNumeral(o.skillIdx) + '</b></span>' +
        moduleBadge(o) +
      '</div></div>' +
    '</div>';
  }

  /* ------------------------------------------------------------
     Lineup facts → 海报各面板：事实 → HTML，renderPoster 汇总
     海报、手机阅读版、调整阵容、竖版长图共用这里的结果。
     新增要给用户看的内容先加字段；四个画面只负责排版和自己的按钮。
     ------------------------------------------------------------ */
  function boardFacts(board, gateList) {
    const b = board || { cols: 8, rows: 4, placements: [] };
    const cols = Math.max(1, Number(b.cols) || 8);
    const rows = Math.max(1, Number(b.rows) || 4);
    const byCell = {};
    for (const p of (b.placements || [])) byCell[p.row + ',' + p.col] = p;
    const gates = {};
    const gateColTypes = {};
    for (const g of (gateList || [])) {
      gates[g.row + ',' + g.col] = g;
      gateColTypes[g.col] = g.type === 'blue' ? 'blue' : 'red';
    }
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const placement = byCell[r + ',' + c] || null;
        const gate = gates[r + ',' + c] || null;
        const gateType = gateColTypes[c] || '';
        cells.push({
          row: r,
          col: c,
          placement,
          operator: placement ? op(placement.operatorId) : null,
          facing: placement ? normalizeFacing(placement.facing) : '',
          gateType,
          gateLabel: gate ? (gateType === 'blue' ? '蓝门' : '红门') : '',
          gateBlank: !!(gateType && !gate)
        });
      }
    }
    return { cols, rows, cells, hasGates: !!(gateList || []).length };
  }

  function coreOnField(coreOperators, placements, options) {
    const knownOnly = !!(options && options.knownOnly);
    const limit = options && Number.isFinite(options.limit) ? options.limit : 6;
    const field = new Set((placements || []).map((p) => p.operatorId));
    return (coreOperators || [])
      .filter((c) => c && field.has(c.operatorId) && (!knownOnly || hasOperator(c.operatorId)))
      .slice(0, limit);
  }

  function benchFacts(ids, options) {
    const compact = !options || options.compact !== false;
    const raw = Array.isArray(ids) ? ids : [];
    const list = (compact ? raw.filter((id) => hasOperator(id)) : raw).slice(0, BENCH_SIZE);
    const slots = Array.from({ length: BENCH_SIZE }, (_, index) => {
      const id = list[index] || '';
      return { index, id, operator: id ? op(id) : null };
    });
    return { filled: list.filter((id) => hasOperator(id)).length, slots };
  }

  function equipmentFacts(equipment) {
    return (equipment || []).slice(0, 3).map((row, rowIndex) => {
      const operator = op(row.operatorId);
      if (!operator) return null;
      return {
        rowIndex,
        row,
        operator,
        slots: EQUIP_SLOTS.map((slot) => ({
          key: slot.key,
          label: slot.label,
          keys: row[slot.key] || []
        }))
      };
    }).filter(Boolean);
  }

  function strategyFacts(strategy) {
    const raw = strategy || { main: '', alternatives: [], reason: '', posterText: {} };
    const mainId = raw.main || '';
    const main = mainId && strategyById(mainId) ? strategyById(mainId) : null;
    const alts = [];
    for (const id of (raw.alternatives || [])) {
      if (!id || id === mainId || alts.length >= 2) continue;
      const found = strategyById(id);
      if (found) alts.push(found);
    }
    return { raw, main, alts, reason: String(raw.reason || '') };
  }

  function stageIds(stage, board) {
    const source = board || state.board;
    if (stage?.id === 'boss' && stage.lineupSource === 'board') {
      return [...(source?.placements || [])].sort((a, b) => (a.row - b.row) || (a.col - b.col)).map((p) => p.operatorId).slice(0, 9);
    }
    return (stage?.lineup || []).slice(0, 9);
  }

  function stageFacts(stages, board) {
    return (stages || []).map((stage, index) => {
      const ids = stageIds(stage, board);
      return {
        index,
        stage,
        ids,
        operators: ids.map((id) => op(id)).filter(Boolean)
      };
    });
  }

  function renderHeader() {
    const m = state.meta;
    const core = coreOnField(state.coreOperators, state.board?.placements, { knownOnly: true })
      .map((c) => coreCard(c))
      .join('');
    const coreHtml = core || '<div class="header-empty">从左侧干员库拖入<br>棋盘后点 ☆ 加入右上角</div>';
    const entry = siteUrl();
    const showQr = !!state.meta.showQr;
    const stampQr = showQr && entry ? qrDataUrl(entry, 76) : '';
    const stamp = stampQr
      ? '<div class="header-stamp" title="' + attr('扫码看最新版 / 纠错：' + entry) + '">' +
          '<img src="' + stampQr + '" alt="二维码" draggable="false" />' +
          '<span class="header-stamp-copy"><b>扫码</b><i>看最新版</i><i>纠错 / 反馈</i></span>' +
        '</div>'
      : (showQr && editMode ? '<button class="header-stamp empty edit-only" type="button" data-open-share title="设置海报上的入口链接"><i>+ 入口二维码</i></button>' : '');
    return '<header class="poster-header">' +
      '<div class="header-left">' +
        '<h1 class="header-title" data-edit="meta.title" data-max="24">' + esc(m.title) + '</h1>' +
        '<div class="header-rule" aria-hidden="true"></div>' +
        '<div class="header-meta">' +
          '<span class="header-ru">РЕГЛАМЕНТ</span>' +
          (m.headerNote ? '<span class="header-note">' + esc(m.headerNote) + '</span>' : '') +
        '</div>' +
        stamp +
      '</div>' +
      '<div class="header-core-block">' +
        '<div class="header-core"><span class="header-core-label">核心干员</span>' + coreHtml + '</div>' +
      '</div>' +
    '</header>';
  }

  function renderBench() {
    const bench = benchFacts(state.bench);
    const slots = bench.slots.map((slot) => {
      const o = slot.operator;
      if (o) {
        return '<button class="bench-unit" type="button" data-bench-id="' + attr(o.id) + '" title="' + attr(o.name + ' · 备战区') + '" aria-label="' + attr(o.name) + '，备战区" ' + avatarStyle(o) + '>' +
          '<img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" /><span>' + (slot.index + 1) + '</span></button>';
      }
      return '<span class="bench-slot">' + (slot.index + 1) + '</span>';
    });
    return '<div class="bench-strip"><span class="bench-label">备战区<br><b>' + bench.filled + '/' + BENCH_SIZE + '</b></span><div class="bench-slots">' + slots.join('') + '</div></div>';
  }

  function renderBoard() {
    const facts = boardFacts(state.board, state.meta?.boardGates);
    const cells = facts.cells.map((cell) => {
      const gateClass = cell.gateType ? ' gate-col' : '';
      const gateBlank = cell.gateBlank ? ' gate-blank' : '';
      const gateHtml = cell.gateLabel
        ? '<span class="board-gate ' + attr(cell.gateType) + '">' + cell.gateLabel + '</span>'
        : '';
      const o = cell.operator;
      const p = cell.placement;
      if (o) {
        const inCore = (state.coreOperators || []).some((x) => x.operatorId === o.id);
        const awaiting = pendingPlacement?.id === o.id;
        return '<div class="board-cell' + gateClass + gateBlank + '" data-row="' + cell.row + '" data-col="' + cell.col + '">' + gateHtml +
          '<div class="board-unit' + (awaiting ? ' await-facing' : '') + (placedFlashId === o.id ? ' just-placed' : '') + '" data-op-id="' + attr(o.id) + '" draggable="' + (editMode && !awaiting) + '" role="button" tabindex="0" aria-label="' + attr(o.name) + '" ' + avatarStyle(o, { rarity: true, role: true }) + '>' +
            '<img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" />' +
            '<span class="role-strip"></span>' +
            '<span class="facing-mark" data-dir="' + cell.facing + '"></span>' +
            (o.inPool === false ? '<span class="pool-warn edit-only">不在当期池</span>' : '') +
            (awaiting
              ? '<span class="facing-hint edit-only">按住拖动选方向</span>'
              : '<button class="core-chip edit-only' + (inCore ? ' on' : '') + '" type="button" data-core-op="' + attr(o.id) + '" title="' + (inCore ? '移出右上角' : '加入右上角') + '" aria-label="' + (inCore ? '移出右上角' : '加入右上角') + '">' + (inCore ? '★' : '☆') + '</button>' +
                (editMode
                  ? '<button class="facing-chip edit-only" type="button" data-facing-op="' + attr(o.id) + '" title="点击旋转朝向">' + facingArrow(p.facing) + '</button>'
                  : '<span class="facing-chip" title="朝向">' + facingArrow(p.facing) + '</span>') +
                '<button class="board-remove edit-only" type="button" data-board-remove="' + attr(o.id) + '" title="移出棋盘">×</button>') +
          '</div></div>';
      }
      return '<div class="board-cell empty' + gateClass + gateBlank + '" data-row="' + cell.row + '" data-col="' + cell.col + '">' + gateHtml + '</div>';
    });
    return '<section class="panel board-panel">' +
      '<div class="panel-head"><span class="panel-title">站位 / BOARD</span>' +
        (facts.hasGates ? '<span class="panel-note board-map-hint">红门在右 · 蓝门在左下</span>' : '') +
        (editMode ? placementChecksChip() : '') +
        (editMode ? '<span class="board-size-chip">' + facts.cols + ' × ' + facts.rows + '</span>' : '') + '</div>' +
      '<div class="board-area"><div class="board-grid" id="boardGrid" style="--cols:' + facts.cols + ';--rows:' + facts.rows + '">' + cells.join('') + '</div></div>' +
      (state.meta?.showBench ? renderBench() : '') +
    '</section>';
  }

  const FACE_STEP = { right: [0, 1], down: [1, 0], left: [0, -1], up: [-1, 0] };
  function clauseHitsOperator(text, index) {
    const slice = text.slice(index, index + 28);
    const opAt = slice.indexOf('干员');
    if (opAt < 0) return false;
    const enemyAt = slice.indexOf('敌人');
    if (enemyAt >= 0 && enemyAt < opAt && !/或干员|和干员|及干员/.test(slice)) return false;
    return true;
  }
  // 特质里写给干员的身前 / 身后 / 周围，才算站位属性。只打敌人的范围不算。
  function positionalKinds(text) {
    const raw = String(text || '');
    const at = (re) => {
      const m = re.exec(raw);
      return m && clauseHitsOperator(raw, m.index) ? m.index : -1;
    };
    const kinds = [];
    if (at(/自身及身后一格/) >= 0) kinds.push('self+behind');
    else if (at(/身后一格/) >= 0) kinds.push('behind');
    if (at(/自身及身前|自身以及身前/) >= 0) kinds.push('self+front');
    else if (at(/身前两格/) >= 0) kinds.push('front2');
    else if (at(/身前一格/) >= 0) kinds.push('front');
    if (at(/周围八格/) >= 0) kinds.push('around8');
    else if (at(/周围四格/) >= 0) kinds.push('around4');
    return kinds;
  }
  function placedName(p) {
    if (!p) return '';
    const n = op(p.operatorId)?.name || '';
    return n && n !== '未知干员' ? n : '';
  }
  function cellOccupant(placements, row, col) {
    return placements.find((x) => Number(x.row) === row && Number(x.col) === col) || null;
  }
  function aroundOccupants(p, placements, diagonals) {
    const out = [];
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        if (!r && !c) continue;
        if (!diagonals && r && c) continue;
        const hit = cellOccupant(placements, Number(p.row) + r, Number(p.col) + c);
        if (hit) out.push(hit);
      }
    }
    return out;
  }
  function pairRelation(id, type, name, rel, target) {
    const who = placedName(target);
    const ok = !!who;
    return {
      id, type, optional: false, ok,
      status: ok ? 'ok' : 'bad',
      label: ok ? (name + ' → ' + who + '（' + rel + '）') : (name + rel + '没有干员')
    };
  }
  function areaRelation(id, type, name, rel, targets) {
    const names = targets.map(placedName).filter(Boolean);
    const ok = names.length > 0;
    return {
      id, type, optional: false, ok,
      status: ok ? 'ok' : 'bad',
      label: ok ? (name + rel + '：' + names.join('、')) : (name + rel + '没有干员')
    };
  }
  function placementChecks() {
    const placements = state.board?.placements || [];
    const checks = [];
    for (const p of placements) {
      const o = op(p.operatorId);
      if (!o || !o.trait) continue;
      const kinds = positionalKinds(o.trait);
      if (!kinds.length) continue;
      const name = placedName(p) || o.name || p.operatorId;
      const [dr, dc] = FACE_STEP[normalizeFacing(p.facing)];
      const row = Number(p.row);
      const col = Number(p.col);
      const front = cellOccupant(placements, row + dr, col + dc);
      const behind = cellOccupant(placements, row - dr, col - dc);
      const frontNext = cellOccupant(placements, row + dr * 2, col + dc * 2);
      for (const kind of kinds) {
        const id = p.operatorId + ':' + kind;
        if (kind === 'self+behind' || kind === 'behind') checks.push(pairRelation(id, kind, name, '身后一格', behind));
        else if (kind === 'self+front' || kind === 'front') checks.push(pairRelation(id, kind, name, '身前一格', front));
        else if (kind === 'front2') checks.push(areaRelation(id, kind, name, '身前两格', [front, frontNext].filter(Boolean)));
        else if (kind === 'around8') checks.push(areaRelation(id, kind, name, '周围八格', aroundOccupants(p, placements, true)));
        else if (kind === 'around4') checks.push(areaRelation(id, kind, name, '周围四格', aroundOccupants(p, placements, false)));
      }
    }
    return checks;
  }

  function placementChecksChip() {
    const checks = placementChecks();
    if (!checks.length) return '';
    const required = checks.filter((c) => !c.optional);
    const passed = required.filter((c) => c.status === 'ok').length;
    return '<button class="board-check-chip ' + (passed === required.length ? 'ok' : 'bad') + '" type="button" data-board-checks title="查看站位关系校验">关系 ' + passed + '/' + required.length + '</button>';
  }

  function openPlacementChecks() {
    const checks = placementChecks();
    const rows = checks.map((c) => {
      const mark = c.status === 'ok' ? '✓' : (c.status === 'bad' ? '✗' : '·');
      const cls = c.status === 'ok' ? 'ok' : (c.status === 'bad' ? 'bad' : 'optional');
      return '<li class="placement-check ' + cls + '"><b>' + mark + '</b><span>' + esc(c.label || '') + '</span><em>' + (c.status === 'ok' ? '已满足' : c.status === 'bad' ? '未满足' : c.status === 'optional' ? '未上场' : '缺卡') + '</em></li>';
    }).join('');
    openModal('<div class="modal-body"><div class="detail-kicker">PLACEMENT CHECK</div><h2 class="detail-name modal-title">站位关系校验</h2>' +
      '<p class="detail-note">只列出当前上场、特质里写了身前 / 身后 / 周围且作用对象是干员的人。换人或转向之后，按现在的朝向重新检查那一格有没有人。</p>' +
      '<ul class="placement-check-list">' + rows + '</ul>' +
      '<div class="form-actions"><button class="btn btn-primary" type="button" data-close>知道了</button></div></div>');
  }

  function computeBondCounts(poster, modifiers) {
    const counts = {};
    const seen = new Set();
    for (const p of (poster?.board?.placements || [])) {
      if (!p || seen.has(p.operatorId)) continue;
      seen.add(p.operatorId);
      const o = poster.operators?.[p.operatorId] || op(p.operatorId);
      if (!o) continue;
      for (const id of (o.bonds || [])) {
        if (!id) continue;
        if (!counts[id]) counts[id] = { id, count: 0, reachedTier: 0, nextThreshold: null };
        counts[id].count++;
      }
    }
    for (const id of Object.keys(counts)) {
      const thresholds = (poster.bondLibrary?.[id]?.thresholds || []).slice().sort((a, b) => a - b);
      let reached = 0;
      let next = null;
      for (let i = 0; i < thresholds.length; i++) {
        if (counts[id].count >= thresholds[i]) reached = i + 1;
        else if (next === null) next = thresholds[i];
      }
      counts[id].reachedTier = reached;
      counts[id].nextThreshold = next;
      counts[id].tierThreshold = reached > 0 ? thresholds[reached - 1] : (next ?? thresholds[0] ?? null);
    }
    // Reserved extension point: confirmed modifiers only. No rule is implemented here.
    return counts;
  }

  function renderBonds() {
    const counts = computeBondCounts(state);
    const list = Object.values(counts).filter((b) => b.count > 0).sort((a, b) =>
      (b.reachedTier - a.reachedTier) || (b.count - a.count) || String(a.id).localeCompare(String(b.id)));
    const reached = list.filter((b) => b.reachedTier > 0);
    const unreached = list.filter((b) => b.reachedTier === 0);
    const all = reached.concat(unreached);
    const twoCol = all.length > 11;
    const progress = (b) => esc(b.count) + ' / ' + esc(b.tierThreshold ?? '—');
    const row = (b) => {
      const lib = bond(b.id) || { name: b.id, thresholds: [] };
      const effectText = (lib.effects || []).map((e) => e.need + '：' + e.text).join('\n') || lib.summary || '';
      const cls = b.reachedTier > 0 ? ' reached' : ' unreached';
      return '<div class="bond-row' + cls + '" data-bond-id="' + attr(b.id) + '" role="button" tabindex="0" title="' + attr(lib.name + '\n' + effectText) + '" aria-label="查看' + attr(lib.name) + '盟约，当前 ' + b.count + ' 人">' +
        '<img class="bond-icon" src="' + bondIcon(b.id) + '" alt="" />' +
        '<span class="bond-name">' + esc(lib.name) + '</span>' +
        '<span class="bond-progress">' + progress(b) + '</span>' +
      '</div>';
    };
    const sep = '<div class="bond-sep"></div>';
    // 单列 / 双列的行内容完全一样，区别只在容器上的 .two-col
    const rows = reached.map(row).join('') + (unreached.length ? sep : '') + unreached.map(row).join('');
    return '<section class="panel bonds-panel">' +
      '<div class="panel-head"><span class="panel-title">盟约</span></div>' +
      '<div class="bond-list' + (twoCol ? ' two-col' : '') + '">' + rows + '</div>' +
    '</section>';
  }

  const TRAIT_PHASES = [
    { key: 'rest-start', parent: '休整期', label: '开始', test: /进入休整期时/ },
    { key: 'rest-end', parent: '休整期', label: '结束', test: /休整期结束时/ },
    { key: 'battle-start', parent: '战斗', label: '开始', test: /战斗开始时/ },
    { key: 'battle-end', parent: '战斗', label: '结束', test: /战斗结束时/ },
    { key: 'battle', parent: '战斗', label: '进行中', test: /战斗中/ },
    { key: 'other', parent: '其他', label: '触发 / 常驻', test: null }
  ];

  function traitPhase(text) {
    for (const p of TRAIT_PHASES) if (p.test && p.test.test(text)) return p;
    return TRAIT_PHASES[TRAIT_PHASES.length - 1];
  }

  function traitActiveOnBench(o) {
    const t = String(o?.trait || '') + ' ' + String(o?.eliteTrait || '');
    return /此干员在(整备|备战)区也生效|此干员在(整备|备战)席也生效|无论是否在场|不在场时也生效|未上场也生效/.test(t);
  }

  function traitBondIds(text) {
    const out = [];
    if (/盟约/.test(text)) out.push('covenant');
    for (const m of String(text).matchAll(/【([^】]+)】/g)) {
      const found = Object.entries(state.bondLibrary || {}).find(([, b]) => b.name === m[1]);
      if (found && !out.includes(found[0])) out.push(found[0]);
    }
    return out;
  }

  function traitLabel(text) {
    if (/叠层上限/.test(text)) return '叠层上限';
    if (/再部署/.test(text)) return '再部署';
    if (/攻击速度/.test(text)) return '攻速';
    if (/攻击力/.test(text)) return '攻击力';
    if (/技力/.test(text)) return '技力回复';
    if (/生命上限|生命值/.test(text)) return '生命上限';
    if (/临时层数/.test(text)) return '临时层数';
    if (/固定层数/.test(text)) return '固定层数';
    if (/盟约层数/.test(text)) return '盟约层数';
    if (/【维多利亚】[\s\S]*【奥术】|【奥术】[\s\S]*【维多利亚】/.test(text)) return '奥术层数';
    const layerBond = text.match(/【([^】]+)】[^。；]*?层数/);
    if (layerBond) return layerBond[1].slice(0, 4) + '层数';
    if (/层数/.test(text)) return '层数';
    if (/购买价格|售出价格|价格/.test(text)) return '价格';
    if (/获得/.test(text)) return '获得';
    if (/转化/.test(text)) return '转化';
    return '其他';
  }

  function traitCondition(text) {
    const perLayer = text.match(/每叠加\s*(\d+)\s*层/);
    if (perLayer) return '每' + perLayer[1] + '层';
    const cap = text.match(/(?:每场战斗)?至多(?:叠加)?\s*(\d+)\s*层/);
    if (/击倒|击破/.test(text)) return '击倒' + (cap ? ' / 上限' + cap[1] : '');
    if (/开启技能时|每次开启技能/.test(text)) return '开技能' + (cap ? ' / 上限' + cap[1] : '');
    if (/每有一名|每名/.test(text)) return /【乌萨斯】/.test(text) ? '每名乌萨斯' : '每名';
    const count = text.match(/在场\s*(\d+)\s*名/);
    if (count) return count[1] + '名';
    if (/每次提升|额外\s*\+/.test(text)) return '每次提升';
    if (/每场/.test(text)) return '每场';
    if (/转化/.test(text)) {
      const n = text.match(/转化\s*(\d+)\s*层/);
      return '转化' + (n ? n[1] + '层' : '');
    }
    if (/首次/.test(text)) return '首次';
    if (/刷新/.test(text)) return '刷新';
    return '条件';
  }

  function traitUnit(text) {
    if (/%/.test(text)) return '%';
    if (/\/\s*秒/.test(text)) return '/秒';
    if (/层/.test(text)) return '层';
    if (/秒/.test(text)) return '秒';
    return '';
  }

  function summarizeTrait(o) {
    const raw = String(o?.trait || '').trim();
    if (!raw) return null;
    const phase = traitPhase(raw);
    const brief = state.traitBrief?.[o.id];
    if (brief) {
      return {
        ...brief,
        phase,
        label: brief.label || '其他',
        value: brief.value ?? null,
        unit: brief.unit || '',
        mode: brief.mode || 'sum',
        complex: !!brief.complex,
        condition: brief.condition || traitCondition(raw),
        text: raw,
        raw
      };
    }
    const text = raw
      .replace(/^(持续叠加|单次叠加|作战能力|整备能力|特异化)\s*/, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const nums = [...text.matchAll(/\+\s*(\d+(?:\.\d+)?)/g)].map((m) => Number(m[1]));
    const label = traitLabel(text);
    const unit = traitUnit(text);
    // 叠层上限按 max 处理；其余带“每有 / 每名 / 击倒 / 若 / 每次”等条件的，不伪装成确定值。
    if (label === '叠层上限' && nums.length) {
      return { phase, label, value: nums[0], unit: unit || '%', mode: 'max', complex: false, kind: 'cap', bonds: traitBondIds(text), text, raw };
    }
    if (label === '价格' && nums.length === 1) {
      return { phase, label, value: nums[0], unit: '', mode: 'sum', complex: false, kind: 'special', bonds: traitBondIds(text), text, raw };
    }
    const conditional = /每有|每名|每次|每场|每回合|每叠加|击倒|击破|被击倒|若|至少|至多|最高|不超过|失去|召唤|刷新|首次|触发|额外|根据/.test(text);
    if (!conditional && nums.length === 1) {
      return { phase, label, value: nums[0], unit, mode: 'sum', complex: false, kind: /转化/.test(text) ? 'convert' : 'stack', bonds: traitBondIds(text), text, raw };
    }
    return { phase, label, value: null, unit: '', mode: 'complex', complex: true, kind: 'complex', condition: traitCondition(text), bonds: traitBondIds(text), text, raw };
  }

  function traitSource(s, id, bench) {
    return { id, name: op(id)?.name || id, bench: !!bench };
  }

  function traitGroups(board = state.board, benchIds = state.bench) {
    const field = new Set((board?.placements || []).map((p) => p.operatorId));
    const bench = new Set((benchIds || []).filter((id) => hasOperator(id)));
    const ids = [...new Set([...field, ...bench])];
    const simple = new Map();
    const complex = [];
    for (const id of ids) {
      const o = op(id);
      if (!o || !o.trait) continue;
      const whereBench = !field.has(id);
      if (whereBench && !traitActiveOnBench(o)) continue;
      const s = summarizeTrait(o);
      if (!s) continue;
      const source = traitSource(s, id, whereBench);
      if (s.complex) { complex.push({ ...s, sources: [source] }); continue; }
      const key = [s.phase.key, s.label, s.unit, s.mode].join('|');
      const g = simple.get(key) || { ...s, value: s.mode === 'max' ? -Infinity : 0, sources: [] };
      if (s.mode === 'max') g.value = Math.max(g.value, s.value);
      else g.value += s.value;
      if (!g.sources.some((x) => x.id === id)) g.sources.push(source);
      simple.set(key, g);
    }
    return { simple: [...simple.values()], complex };
  }

  function fmtTraitValue(v, unit) {
    const n = Number.isInteger(v) ? String(v) : String(Math.round(v * 100) / 100);
    return '+' + n + (unit || '');
  }

  function traitSourcesHtml(sources) {
    const shown = sources.slice(0, 4).map((s) => '<span class="trait-src' + (s.bench ? ' bench' : '') + '" title="' + attr(s.name + (s.bench ? '（备战）' : '')) + '"><img src="' + avatarSrc(op(s.id)?.avatar) + '" alt="" />' + (s.bench ? '<i>备</i>' : '') + '</span>').join('');
    return shown + (sources.length > 4 ? '<i class="trait-src-more">+' + (sources.length - 4) + '</i>' : '');
  }

  function renderBondChips(board = state.board) {
    const counts = computeBondCounts(board === state.board ? state : { ...state, board });
    const list = Object.values(counts)
      .filter((b) => b.count > 0)
      .sort((a, b) => (b.reachedTier - a.reachedTier) || (b.count - a.count) || String(a.id).localeCompare(String(b.id)));
    return '<div class="trait-bond-chips">' + list.map((b) => {
      const lib = bond(b.id) || { name: b.id, thresholds: [] };
      return '<span class="trait-bond-chip' + (b.reachedTier > 0 ? ' on' : '') + '" title="' + attr(lib.name + ' ' + b.count + ' / ' + (b.tierThreshold ?? '—')) + '">' +
        '<img src="' + bondIcon(b.id) + '" alt="" /><b>' + esc(lib.name) + '</b><em>' + esc(b.count) + '</em></span>';
    }).join('') + '</div>';
  }

  function traitRecipients(s, o, board) {
    const p = (board?.placements || []).find((x) => x.operatorId === o.id);
    if (!p) return { ids: [], names: [] };
    const [dr, dc] = FACE_STEP[normalizeFacing(p.facing)];
    const cell = (row, col) => (board.placements || []).find((x) => Number(x.row) === row && Number(x.col) === col);
    const add = (ids, x) => { if (x && !ids.includes(x.operatorId)) ids.push(x.operatorId); };
    const ids = [];
    const pos = s.positional || '';
    if (pos === 'self+behind' || /自身及身后一格/.test(s.text)) {
      add(ids, p);
      add(ids, cell(Number(p.row) - dr, Number(p.col) - dc));
    } else if (pos === 'self+front' || /自身及身前/.test(s.text)) {
      add(ids, p);
      add(ids, cell(Number(p.row) + dr, Number(p.col) + dc));
    } else if (pos === 'front' || /身前一格/.test(s.text)) {
      add(ids, cell(Number(p.row) + dr, Number(p.col) + dc));
    } else if (pos === 'around' || /周围八格/.test(s.text)) {
      for (let r = -1; r <= 1; r++) for (let c = -1; c <= 1; c++) if (r || c) add(ids, cell(Number(p.row) + r, Number(p.col) + c));
    }
    return { ids, names: ids.map((id) => op(id)?.name || id) };
  }

  function traitLedger(board = state.board, benchIds = state.bench) {
    const counts = computeBondCounts({ ...state, board });
    const field = new Set((board?.placements || []).map((p) => p.operatorId));
    const bench = (benchIds || []).filter((id) => hasOperator(id));
    const ids = [...new Set([...(board?.placements || []).map((p) => p.operatorId), ...bench])];
    const activeBench = [];
    const rows = [];
    const unassigned = [];
    const totals = new Map();
    const addTotal = (bondId) => {
      const t = totals.get(bondId) || { rest: 0, battleStart: 0, convert: 0, battle: [], stats: [], sources: [], temporary: false };
      totals.set(bondId, t);
      return t;
    };
    const apply = (bondId, s, sourceName, mult = 1) => {
      const t = addTotal(bondId);
      if (!t.sources.includes(sourceName)) t.sources.push(sourceName);
      if (s.kind === 'convert') t.convert += (s.value || 0) * mult;
      else if (s.kind === 'convertPer') t.convert += (s.value || 0) * (counts[bondId]?.count || 0);
      else if (s.kind === 'stack') {
        if (s.phase.key === 'battle-start') t.battleStart += (s.value || 0) * mult;
        else if (s.phase.key === 'rest-start' || s.phase.key === 'rest-end') t.rest += (s.value || 0) * mult;
        if (s.temporary) t.temporary = true;
      } else if (s.kind === 'battleStack') {
        t.battle.push({ value: s.value || 0, cap: s.cap || null, trigger: s.trigger || '触发', source: sourceName });
      } else if (s.kind === 'stat' && s.note) {
        if (!t.stats.includes(s.note)) t.stats.push(s.note);
      }
    };
    for (const id of ids) {
      const o = op(id);
      if (!o || !o.trait) continue;
      const whereBench = !field.has(id);
      if (whereBench && !traitActiveOnBench(o)) continue;
      if (whereBench) activeBench.push(o.name);
      const s = summarizeTrait(o);
      if (!s) continue;
      const recipients = traitRecipients(s, o, board);
      rows.push({ id, o, s, whereBench, recipients });
      // 普通【盟约】直接归入；"盟约"按受影响干员身上的实际激活盟约拆开。
      for (const bondId of (s.bonds || [])) {
        if (bondId === 'covenant') continue;
        if (!(counts[bondId]?.reachedTier > 0)) continue;
        const mult = s.positional && recipients.ids.length > 1 ? recipients.ids.length : 1;
        apply(bondId, s, o.name, mult);
      }
      if ((s.bonds || []).includes('covenant')) {
        const targets = recipients.ids.length ? recipients.ids : [o.id];
        for (const targetId of targets) {
          const target = op(targetId);
          const activeBonds = (target?.bonds || []).filter((bid) => counts[bid]?.reachedTier > 0);
          if (!activeBonds.length) {
            unassigned.push({ source: o.name, target: target?.name || targetId, text: s.detail || s.condition || s.label });
            continue;
          }
          for (const bid of activeBonds) apply(bid, s, o.name, 1);
        }
      }
    }
    const active = Object.values(counts).filter((b) => b.count > 0 && b.reachedTier > 0);
    const inactive = Object.values(counts).filter((b) => b.count > 0 && b.reachedTier === 0);
    return { rows, totals, active, inactive, activeBench, unassigned };
  }

  const ACTIVE_BOND_BRIEF = {
    ursus: '乌萨斯攻击/生命提升；击倒叠层；6 人减伤并灼烧',
    arcane: '奥术伤害附加法术伤害；3 人后敌法抗降低、隐匿失效',
    swift: '技能结束时按层数概率回复 12 技力'
  };

  const BOND_EFFECT_BRIEF = {
    ursus: '攻击/生命提升；击倒叠层；6 人减伤灼烧',
    arcane: '额外法术伤害；3 人后敌人法抗↓、隐匿失效',
    swift: '技能结束 (20+0.35×层数)% 概率回复 12 技力',
    precision: '精准攻击力提升；3 人后远程无视部分防御/法抗',
    steadfast: '全队生命提升；3 人后分摊伤害',
    victoria: '装备伤害提升；每 25 层获得维式重锤',
    miracle: '刷新概率免费；100 层后保底当前等级',
    doc: '范围内友方回血/元素损伤；3 人庇护',
    indom: '地面干员击倒时概率立即再部署'
  };

  function bondTier(o) {
    return String(o?.tier || '').replace(/阶$/, '') || '—';
  }

  function boardBondOperators(bondId, board = state.board) {
    const out = [];
    for (const p of board?.placements || []) {
      const o = op(p.operatorId);
      if (o && (o.bonds || []).includes(bondId) && !out.some((x) => x.id === o.id)) out.push(o);
    }
    return out;
  }

  function bondEffectText(bondId, b, active) {
    const lib = bond(bondId) || {};
    const brief = BOND_EFFECT_BRIEF[bondId] || lib.summary || '';
    if (active) return brief;
    return '需 ' + (b.nextThreshold ?? '—') + ' 人 · ' + brief;
  }

  function bondEffectTitle(bondId, b, active) {
    const lib = bond(bondId) || {};
    const effects = (lib.effects || []).filter((e) => /^\d+$/.test(e.need));
    const hit = active ? effects.filter((e) => +e.need <= b.count).pop() : effects.find((e) => +e.need === b.nextThreshold);
    return (hit?.text || lib.summary || '') + (active ? '' : '（未激活，需 ' + (b.nextThreshold ?? '—') + ' 人）');
  }

  function traitPhaseLabel(s) {
    return s.phase.parent + ' · ' + s.phase.label;
  }

  function traitValueLine(s) {
    if (s.detail) return s.detail;
    if (s.complex) return s.label + ' · ' + (s.condition || '条件');
    return s.label + ' ' + fmtTraitValue(s.value, s.unit);
  }

  function buildTraitPanels(board = state.board, benchIds = state.bench) {
    const ledger = traitLedger(board, benchIds);
    const sections = TRAIT_PHASES.map((phase) => ({
      phase,
      rows: ledger.rows.filter((r) => r.s.phase.key === phase.key)
    })).filter((x) => x.rows.length);
    const cols = [[], []];
    sections.forEach((sec) => {
      const at = sec.phase.parent === '休整期' ? 0 : 1;
      cols[at].push(sec);
    });
    const opRow = (r) => '<button class="trait-op-row" type="button" data-trait-info="' + attr(r.id) + '" title="' + attr(r.o.trait) + '">' +
      '<img src="' + avatarSrc(r.o.avatar) + '" alt="" ' + avatarStyle(r.o) + ' />' +
      '<b>' + esc(r.o.name) + '</b>' +
      '<span>' + esc(traitValueLine(r.s)) + '</span>' +
      (r.recipients.ids.length > 1 ? '<em>→ ' + esc(r.recipients.names.join(' / ')) + '</em>' : '') +
      (r.whereBench ? '<i>备</i>' : '') + '</button>';
    const opSection = (sec) => '<div class="trait-op-phase ' + (sec.phase.parent === '休整期' ? 'rest' : (sec.phase.parent === '战斗' ? 'battle' : 'other')) + '"><h6><b>' + esc(sec.phase.parent) + '</b><span>' + esc(sec.phase.label) + '</span></h6>' +
      sec.rows.map(opRow).join('') + '</div>';
    const part = (v, label) => v ? label + ' ' + v : '';
    const bondAvatar = (o) => {
      const tier = bondTier(o);
      return '<span class="unit-badge-wrapper" title="' + attr(o.name + ' · 卫戍协议 ' + tier + ' 阶') + '" ' + avatarStyle(o) + '>' +
        '<img class="unit-avatar" src="' + avatarSrc(o.avatar) + '" alt="" />' +
        '<i class="unit-tier-label' + (tier === '—' ? ' missing' : '') + '">' + esc(tier) + '</i></span>';
    };
    const bondCard = (b, active, compact = false) => {
      const lib = bond(b.id) || { name: b.id };
      const threshold = active ? (b.tierThreshold ?? b.count) : (b.nextThreshold ?? '—');
      const t = ledger.totals.get(b.id) || { rest: 0, battleStart: 0, convert: 0, battle: [] };
      const cap = t.rest + t.battleStart + t.battle.reduce((sum, x) => sum + (x.cap || 0), 0);
      const avatars = boardBondOperators(b.id, board);
      let effect = compact ? (ACTIVE_BOND_BRIEF[b.id] || bondEffectText(b.id, b, active)) : bondEffectText(b.id, b, active);
      if (active && t.convert) effect = '转化 ' + t.convert + ' 层 · ' + effect;
      const title = bondEffectTitle(b.id, b, active) + (active ? '；理论叠层 / 单回合上限 +' + cap : '') + '；参与干员：' + (avatars.map((o) => o.name + ' ' + bondTier(o) + '阶').join(' / ') || '无');
      const capHtml = active
        ? '<em title="理论叠层 / 单回合上限 +' + attr(cap) + '">理论 +' + esc(cap) + '</em>'
        : '<em>未激活</em>';
      return '<div class="trait-bond-card ' + (active ? 'on' : 'off') + (compact ? ' compact' : '') + '" title="' + attr(title) + '">' +
        '<div class="bond-card-head"><b>【' + esc(lib.name) + '】</b><span>' + esc(b.count) + ' / ' + esc(threshold) + '</span>' +
          capHtml + '</div>' +
        '<div class="bond-card-effect">' + esc(effect) + '</div>' +
        '<div class="bond-card-avs">' + avatars.map(bondAvatar).join('') + '</div>' +
      '</div>';
    };
    const activeCards = ledger.active.map((b) => bondCard(b, true, true)).join('');
    const inactiveRows = ledger.inactive.map((b) => {
      const lib = bond(b.id) || { name: b.id };
      const threshold = b.nextThreshold ?? '—';
      return '<div class="trait-inactive-row" title="' + attr(bondEffectTitle(b.id, b, false)) + '">' +
        '<div class="trait-inactive-head"><b>【' + esc(lib.name) + '】</b><span>' + esc(b.count) + ' / ' + esc(threshold) + '</span></div></div>';
    }).join('');
    const benchNote = ledger.activeBench.length ? ' · 备战生效：' + ledger.activeBench.join(' / ') : '';
    const activeBlock = ledger.active.length
      ? '<div class="trait-section-head active-head"><b>已激活盟约</b><span>理论叠层 · 单回合上限</span></div>' +
        '<div class="trait-bond-grid active active-summary left-active">' + activeCards + '</div>'
      : '<div class="panel-empty">暂无已激活盟约</div>';
    const noteText = ledger.rows.length + ' 条' + benchNote;
    const combatPanel = '<section class="panel trait-sum-panel trait-left-panel">' +
      '<div class="panel-head"><span class="panel-title">战斗效果 / 盟约</span><span class="panel-note" data-base="' + attr(noteText) + '">' + esc(noteText) + '</span></div>' +
      activeBlock +
      '<div class="trait-section-head"><b>战斗效果</b></div>' +
      (sections.length
        ? '<div class="trait-op-columns">' + cols.map((col) => '<div class="trait-op-col">' + col.map(opSection).join('') + '</div>').join('') + '</div>'
        : '<div class="panel-empty">场上与备战区还没有特质</div>') +
      (inactiveRows ? '<div class="trait-inactive-block"><div class="trait-section-head"><b>未激活盟约</b><span>' + ledger.inactive.length + ' 项</span></div><div class="trait-inactive-grid">' + inactiveRows + '</div></div>' : '') +
      (ledger.unassigned.length ? '<div class="trait-inactive">未归属：' + esc(ledger.unassigned.map((x) => x.source + '→' + x.target + '（无已激活盟约，' + x.text + ' 不计入）').join(' · ')) + '</div>' : '') +
    '</section>';
    return { left: combatPanel, right: '' };
  }

  function renderTraitSummary(board = state.board, benchIds = state.bench) {
    return buildTraitPanels(board, benchIds).left;
  }

  function openTraitInfo(id, anchor) {
    const o = op(id);
    if (!o || !o.trait) return;
    const phase = traitPhase(String(o.trait));
    const html = '<div class="info-pop-head">' +
        '<img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" />' +
        '<div><div class="detail-kicker">TRAIT / ' + esc(phase.parent + ' · ' + phase.label) + '</div><h3>' + esc(o.name) + '</h3>' +
        '<div class="info-pop-meta">' + esc(String(o.trait).split('>')[0].trim()) + '</div></div>' +
      '</div>' +
      '<p class="strategy-effect info-pop-text">' + rich(o.trait) + '</p>';
    if (mobileUI) openModal('<div class="modal-body">' + html + '</div>');
    else openInfoPop(anchor || null, html);
  }

  function renderEquipment() {
    const head = '<div class="equip-header"><span></span>' + EQUIP_SLOTS.map((slot) => '<span>' + slot.label + '</span>').join('') + '</div>';
    const rows = equipmentFacts(state.equipment).map((entry) => {
      const o = entry.operator;
      const row = entry.row;
      const cols = entry.slots.map((slot) => {
        const icons = slot.keys.map((key, i) => {
          const eff = equipmentEffect(key) || {};
          const tip = item(key) + (eff.base ? '：' + eff.base : '');
          return '<span class="equip-item" title="' + attr(tip) + '">' +
            '<button class="equip-icon" type="button" data-equip-icon="' + attr(key) + '" data-equip-drop="1" data-op-id="' + attr(o.id) + '" data-slot="' + slot.key + '" data-index="' + i + '" title="' + attr(tip) + '" aria-label="' + attr(tip) + '"><img src="' + itemSrc(key) + '" alt="" draggable="false" /></button>' +
            '<b>' + esc(item(key)) + '</b></span>';
        }).join('');
        const add = editMode && canAddEquip(row) && slot.keys.length < 3 ? '<button class="equip-add edit-only" type="button" data-equip-add data-equip-drop="1" data-op-id="' + attr(o.id) + '" data-slot="' + slot.key + '" title="添加装备（也可从装备库拖入）">+</button>' : '';
        return '<div class="equip-col">' + icons + add + '</div>';
      }).join('');
      // 角上的按钮换的是「这一行归谁用」，不是改干员资料。
      const editBadge = editMode
        ? '<button class="equip-edit edit-only" type="button" data-equip-swap="' + entry.rowIndex + '" title="更换这一行的干员" aria-label="' + attr('更换 ' + o.name) + '">⇄</button>'
        : '';
      return '<div class="equip-row">' +
        '<div class="equip-avatar" data-op-id="' + attr(o.id) + '" role="button" tabindex="0" aria-label="查看' + attr(o.name) + '" ' + avatarStyle(o) + '><img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" />' + editBadge + '</div>' +
        cols +
      '</div>';
    }).join('');
    if (!rows && !editMode) return '';
    return '<section class="panel equip-panel">' +
      '<div class="panel-head"><span class="panel-title">装备</span></div>' +
      (rows ? '<div class="equip-matrix">' + head + rows + '</div>' : '<div class="panel-empty">拖入干员后自动生成装备位</div>') +
    '</section>';
  }

  function stageAvatars(ids, stageIndex, kind) {
    const list = (ids || []).map((id, slot) => {
      const o = op(id);
      if (!o) return '';
      const remove = editMode
        ? '<button class="stage-remove edit-only" type="button" data-stage-remove="' + stageIndex + '" data-stage-slot="' + slot + '" title="从该阶段移除" aria-label="' + attr('从该阶段移除 ' + o.name) + '">×</button>'
        : '';
      return '<span class="stage-avatar" data-stage-index="' + stageIndex + '" data-stage-kind="' + kind + '" data-stage-slot="' + slot + '" data-op-id="' + attr(o.id) + '" role="button" tabindex="0" aria-label="' + attr(o.name) + '" title="' + attr(o.name) + '" ' + avatarStyle(o, { rarity: true }) + '><img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" />' + remove + '</span>';
    }).join('');
    const add = editMode && (ids || []).length < 9
      ? '<button class="stage-add edit-only" type="button" data-stage-add data-stage-index="' + stageIndex + '" data-stage-kind="' + kind + '" title="添加干员">+</button>'
      : '';
    return list + add;
  }
  function renderStages(roomy = false) {
    const stages = stageFacts(state.stages, state.board);
    const blocks = stages.map((block) => {
      const s = block.stage;
      const i = block.index;
      const lineup = block.ids;
      const bossCompact = s.id === 'boss' && !editMode;
      const bossTight = bossCompact && lineup.length > 8;
      const roomyNote = roomy || bossCompact;
      const noteMax = 60;
      const roomyAvatars = roomy && lineup.length <= 8;
      const fill = editMode && s.id !== 'boss'
        ? '<button class="stage-fill edit-only" type="button" data-stage-fill="' + i + '">从棋盘填入</button>' : '';
      const restore = editMode && s.id === 'boss' && s.lineupSource === 'manual'
        ? '<button class="stage-restore edit-only" type="button" data-stage-restore="' + i + '">恢复联动</button>' : '';
      const note = '<div class="stage-note' + (roomyNote ? ' boss-note roomy-note' : '') + '"><span class="stage-note-text" data-edit="stages.' + i + '.note" data-max="' + noteMax + '">' + esc(s.note || '') + '</span><span class="edit-count">' + String((s.note || '').length) + '/' + noteMax + '</span></div>';
      return '<div class="stage-block" data-stage-block="' + i + '">' +
        (editMode ? '<button class="stage-block-remove edit-only" type="button" data-stage-remove-block="' + i + '" title="删除这个阶段">×</button>' : '') +
        '<div class="stage-head"><span class="stage-label">' + esc(s.label) + '</span></div>' +
        '<div class="stage-row' + (bossCompact ? ' boss-large' : '') + (bossTight ? ' boss-tight' : '') + (roomyAvatars ? ' roomy-row' : '') + '"><span class="stage-row-label">阵容</span><div class="stage-avatars' + (bossCompact ? ' boss-large' : '') + (bossTight ? ' boss-tight' : '') + (roomyAvatars ? ' roomy' : '') + '" data-stage-drop="' + i + '" data-stage-kind="lineup">' + stageAvatars(lineup, i, 'lineup') + '</div></div>' +
        note +
        '<div class="stage-tools">' + fill + restore + '</div>' +
      '</div>';
    }).join('');
    return '<section class="panel stages-panel stages-count-' + stages.length + '">' +
      '<div class="panel-head"><span class="panel-title">成型节奏</span>' +
        (editMode ? '<button class="stage-block-add edit-only" type="button" data-stage-add-block>+ 阶段</button>' : '') +
      '</div>' +
      '<div class="stages-list">' + blocks + '</div>' +
    '</section>';
  }

  function addStageBlock() {
    if (!editMode) return;
    state.stages = state.stages || [];
    if (state.stages.length >= 5) { toast('最多 5 个阶段', true); return; }
    state.stages.push({
      id: 'stage-' + Date.now(),
      label: '阶段 ' + (state.stages.length + 1),
      recruit: [],
      lineupSource: 'manual',
      lineup: [],
      note: ''
    });
    saveNow();
    renderPoster();
    toast('已添加阶段');
  }

  function removeStageBlock(index) {
    if (!editMode) return;
    if (!state.stages || state.stages.length <= 1) { toast('至少保留 1 个阶段', true); return; }
    state.stages.splice(index, 1);
    saveNow();
    renderPoster();
    toast('已删除阶段');
  }

  function renderFooter() {
    const m = state.meta;
    const credit = String(m.credit || '').trim();
    return '<footer class="poster-footer">' +
      '<span class="warn">非官方 · 非盈利 · 素材版权归鹰角网络所有 <span class="footer-data">· 数据：PRTS · 可露希尔Wiki</span>' +
        (credit ? ' <span class="footer-credit">· ' + esc(credit) + '</span>' : '') + '</span>' +
      '<span class="right"><span data-edit="meta.author" data-max="12">' + esc(m.author) + '</span> · <span data-edit="meta.version" data-max="8">' + esc(m.version) + '</span> · <span data-edit="meta.date" data-max="10">' + esc(m.date) + '</span></span>' +
    '</footer>';
  }

  const strategyIcon = (s) => s?.icon ? (ASSETS[s.icon] || s.icon) : '';
  const strategyKind = (s) => s?.kind === 'both' ? '双' : (s?.kind === 'active' ? '主动' : '被动');
  const strategyById = (id) => state.strategyLibrary?.[id] || null;
  const strategyCost = (s) => {
    if (Number.isFinite(Number(s?.cost))) return Number(s.cost);
    const fromData = Number(state.strategyCost?.[s?.id]);
    if (Number.isFinite(fromData)) return fromData;
    const m = String(s?.effect || '').match(/消耗\s*(\d+)/);
    return m ? Number(m[1]) : 0;
  };
  const strategyCostHtml = (s) => {
    const cost = strategyCost(s);
    return cost ? '<span class="strategy-cost">消耗 ' + cost + '</span>' : '';
  };
  const STRATEGY_EFFECT_H = 108;
  let strategyProbe = null;
  function measureStrategyText(text, width, decorated = false) {
    if (!strategyProbe) {
      strategyProbe = document.createElement('div');
      strategyProbe.className = 'strategy-effect-measure';
      document.body.appendChild(strategyProbe);
    }
    strategyProbe.style.width = width + 'px';
    // 面板里渲染的是关键词高亮后的 HTML，量高度时也要量同一份标记，否则徽章内边距会让最后一行溢出。
    if (decorated) strategyProbe.innerHTML = rich(text);
    else strategyProbe.textContent = text;
    return strategyProbe.scrollHeight;
  }
  const maxCharsCache = new Map();
  function maxCharsFor(width) {
    if (maxCharsCache.has(width)) return maxCharsCache.get(width);
    let lo = 0, hi = 220;
    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      if (measureStrategyText('字'.repeat(mid), width) <= STRATEGY_EFFECT_H) lo = mid;
      else hi = mid - 1;
    }
    maxCharsCache.set(width, lo);
    return lo;
  }
  // 与 styles.css 的 padding 14 / 次选 gap 10 / 次选 padding 10 对应。
  const STRATEGY_MAIN_TEXT_W = 584;
  const STRATEGY_ALT2_TEXT_W = 265;
  const STRATEGY_ALT1_TEXT_W = 562;
  const strategyWidth = (kind, altCount) => kind === 'main' ? STRATEGY_MAIN_TEXT_W : (altCount >= 2 ? STRATEGY_ALT2_TEXT_W : STRATEGY_ALT1_TEXT_W);
  const strategyBrief = (id) => state.strategyBrief?.[id] || DEFAULT_DATA.strategyBrief?.[id] || '';
  function trimStrategyText(text, width) {
    let t = String(text || '').trim();
    while (t.length > 1 && measureStrategyText(t, width, true) > STRATEGY_EFFECT_H) {
      const cut = Math.max(t.lastIndexOf('；'), t.lastIndexOf('。'), t.lastIndexOf('，'), t.lastIndexOf(' '));
      t = (cut > 0 ? t.slice(0, cut) : t.slice(0, -1)).trim();
    }
    return t;
  }
  function strategySlotInfo(s, st, kind, altCount) {
    const width = strategyWidth(kind, altCount);
    const summary = st.posterText?.[s.id] || '';
    const full = s.effect || '';
    const brief = strategyBrief(s.id);
    let text = '';
    let mode = 'full';
    if (summary && measureStrategyText(summary, width, true) <= STRATEGY_EFFECT_H) { text = summary; mode = 'summary'; }
    else if (measureStrategyText(full, width, true) <= STRATEGY_EFFECT_H) { text = full; }
    else if (brief) { text = brief; mode = 'brief'; }
    else { text = full; mode = 'brief'; }
    if (measureStrategyText(text, width, true) > STRATEGY_EFFECT_H) text = trimStrategyText(text, width);
    return { width, summary, full, brief, text, mode, maxChars: maxCharsFor(width), fit: true, height: measureStrategyText(text, width, true), overflowPx: 0 };
  }
  function strategyEffectHtml(s, st, kind, altsCount) {
    const info = strategySlotInfo(s, st, kind, altsCount);
    const cls = 'strategy-effect-' + (kind === 'main' ? 'main' : 'secondary');
    return {
      info,
      html: '<div class="' + cls + '">' + rich(info.text) + '</div>',
      warning: '',
      note: info.mode !== 'full' && editMode ? '<div class="strategy-brief-note">精要版 · 点名称看完整效果</div>' : ''
    };
  }
  function strategySecondaryCard(s, st, altsCount) {
    const e = strategyEffectHtml(s, st, 'secondary', altsCount);
    return '<div class="strategy-secondary" data-strategy-id="' + attr(s.id) + '">' +
      '<div class="strategy-secondary-head" data-strategy-open="' + attr(s.id) + '"><img src="' + strategyIcon(s) + '" alt="" draggable="false" />' +
        '<b title="' + attr(s.name + '：' + (s.effect || '')) + '">' + esc(s.name) + '</b><span class="strategy-kind ' + attr(s.kind) + '">' + strategyKind(s) + '</span><span class="strategy-hp">HP ' + esc(s.initialHp ?? '—') + '</span>' + strategyCostHtml(s) +
        (editMode ? '<button class="strategy-remove edit-only" type="button" data-strategy-remove="' + attr(s.id) + '" title="删除这个次选">×</button>' : '') +
      '</div>' +
      e.note + e.html + e.warning +
    '</div>';
  }
  function renderStrategy() {
    const picked = strategyFacts(state.strategy);
    const st = picked.raw;
    const main = picked.main;
    if (!main) {
      // 只读/导出态不保留空面板：让成型节奏直接占满右栏；
      // 编辑态保留入口，方便补选。
      if (!editMode) return '';
      return '<section class="panel strategy-panel strategy-empty-panel">' +
        '<div class="panel-head"><span class="panel-title">盟约策略</span></div>' +
        '<button class="strategy-empty" type="button" data-strategy-edit><span>点击选择盟约策略</span><b>+</b></button>' +
      '</section>';
    }
    const alts = picked.alts;
    const lock = main.unlock ? '<span class="strategy-lock" title="解锁：' + attr(main.unlock) + '">锁</span>' : '';
    const mainEffect = strategyEffectHtml(main, st, 'main', alts.length);
    const reason = picked.reason;
    const altHtml = alts.length ? '<div class="strategy-secondaries count-' + alts.length + '">' + alts.map((s) => strategySecondaryCard(s, st, alts.length)).join('') + '</div>' : '';
    return '<section class="panel strategy-panel">' +
      '<div class="panel-head"><span class="panel-title">盟约策略</span>' +
        (editMode ? '<button class="strategy-clear edit-only" type="button" data-strategy-remove="' + attr(main.id) + '" title="删除当前主盟约">删除盟约</button>' : '') +
      '</div>' +
      '<div class="strategy-main-card" data-strategy-id="' + attr(main.id) + '">' +
        '<div class="strategy-main-row"><button class="strategy-icon" type="button" data-strategy-open="' + attr(main.id) + '"><img src="' + strategyIcon(main) + '" alt="" /></button>' +
          '<div class="strategy-main-body"><div class="strategy-name-row"><button class="strategy-name" type="button" data-strategy-edit title="' + attr(main.name + '：' + (main.effect || '')) + '">' + esc(main.name) + '</button>' +
            '<span class="strategy-kind ' + attr(main.kind) + '">' + strategyKind(main) + '</span>' +
            '<span class="strategy-hp">HP ' + esc(main.initialHp ?? '—') + '</span>' + strategyCostHtml(main) + lock + '</div>' +
          '</div>' +
        '</div>' +
        mainEffect.note + mainEffect.html + mainEffect.warning +
        ((reason || editMode)
          ? '<div class="strategy-reason"><b class="strategy-reason-label">选择理由</b><span class="strategy-reason-text" data-edit="strategy.reason" data-max="40">' + esc(reason) + '</span><span class="edit-count">' + String(reason.length) + '/40</span></div>'
          : '') +
      '</div>' +
      altHtml +
      (editMode ? '<button class="strategy-alt-add edit-only" type="button" data-strategy-alt-add>+ 次选</button>' : '') +
    '</section>';
  }
  function openStrategy(id, anchor) {
    const s = strategyById(id);
    if (!s) { toast('策略数据缺失', true); return; }
    const html = '<div class="info-pop-head">' +
        '<img src="' + strategyIcon(s) + '" alt="" draggable="false" />' +
        '<div><div class="detail-kicker">STRATEGY / ' + strategyKind(s) + '</div><h3>' + esc(s.name) + '</h3>' +
        '<div class="info-pop-meta">HP ' + esc(s.initialHp ?? '—') + (strategyCost(s) ? ' · 消耗 ' + strategyCost(s) : '') + ' · ' + strategyKind(s) + ' · 解锁：' + esc(s.unlock || '无') + '</div></div>' +
      '</div>' +
      '<p class="strategy-effect info-pop-text">' + rich(s.effect || '') + '</p>' +
      (s.source ? '<p class="source-note">来源：<a href="' + attr(s.source) + '" target="_blank" rel="noreferrer">' + esc(s.sourceName || '来源') + '</a></p>' : '');
    // 手机端屏幕窄，完整策略效果放在全屏卡片里读；桌面端仍用轻量浮层。
    if (mobileUI) openModal('<div class="modal-body">' + html + '</div>');
    else openInfoPop(anchor || null, html);
  }
  function strategyPickerDetailHtml(s) {
    if (!s) return '<div class="strategy-picker-empty">点左侧策略查看详细效果</div>';
    const currentMain = state.strategy?.main === s.id;
    const currentAlt = (state.strategy?.alternatives || []).includes(s.id);
    const chosen = strategyPickerMode === 'alt' ? currentAlt : currentMain;
    const disabled = (strategyPickerMode === 'main' && currentMain) || (strategyPickerMode === 'alt' && currentMain);
    const label = strategyPickerMode === 'alt'
      ? (currentMain ? '这已经是主盟约' : (currentAlt ? '移出次选' : '加入次选'))
      : (currentMain ? '当前主盟约' : '设为主盟约');
    return '<div class="strategy-picker-detail-head"><img src="' + strategyIcon(s) + '" alt="" draggable="false" />' +
        '<div><div class="detail-kicker">STRATEGY / ' + strategyKind(s) + '</div><h3>' + esc(s.name) + '</h3>' +
        '<div class="strategy-picker-meta">HP ' + esc(s.initialHp ?? '—') + (strategyCost(s) ? ' · 消耗 ' + strategyCost(s) : '') + ' · ' + strategyKind(s) + (chosen ? ' · 当前已选' : '') + '</div></div>' +
      '</div>' +
      '<p class="strategy-picker-unlock">' + (s.unlock ? '解锁：' + esc(s.unlock) : '解锁：无') + '</p>' +
      '<div class="strategy-picker-full"><h4>完整效果</h4><p>' + rich(s.effect || '') + '</p></div>' +
      '<button class="btn btn-primary strategy-picker-choose" type="button" data-strategy-choose="' + attr(s.id) + '"' + (disabled ? ' disabled' : '') + '>' + esc(label) + '</button>' +
      (s.source ? '<p class="source-note">来源：<a href="' + attr(s.source) + '" target="_blank" rel="noreferrer">' + esc(s.sourceName || '来源') + '</a></p>' : '');
  }
  function renderStrategyPickerDetail() {
    const box = $('#strategyPickerDetail');
    if (box) box.innerHTML = strategyPickerDetailHtml(strategyById(strategyPickerPreview));
    $$('.strategy-pick').forEach((el) => el.classList.toggle('on', el.dataset.strategyPickId === strategyPickerPreview));
  }
  function previewStrategy(id) {
    if (!strategyById(id)) return;
    strategyPickerPreview = id;
    renderStrategyPickerDetail();
  }
  function strategyPickerItems() {
    const filter = strategyPickerFilter;
    const query = String(strategyPickerQuery || '').trim().toLowerCase();
    return Object.values(state.strategyLibrary || {}).filter((s) => (filter === 'all' || s.kind === filter || (filter === 'active' && s.kind === 'both')) && (!query || (s.name + ' ' + s.effect).toLowerCase().includes(query)));
  }
  function strategyPickerGridHtml(items) {
    return items.map((s) => '<button class="strategy-pick' + (s.id === strategyPickerPreview ? ' on' : '') + '" type="button" data-strategy-pick-id="' + attr(s.id) + '" title="' + attr(s.name + ' · ' + (s.unlock || '无解锁条件')) + '"><img src="' + strategyIcon(s) + '" alt="" draggable="false" /><b>' + esc(s.name) + '</b><span>' + strategyKind(s) + ' · HP ' + esc(s.initialHp ?? '—') + (strategyCost(s) ? ' · 消耗 ' + strategyCost(s) : '') + ' · ' + esc(s.unlock || '无解锁条件') + '</span></button>').join('') || '<div class="strategy-picker-empty">没有匹配的策略</div>';
  }
  function refreshStrategyPicker() {
    const items = strategyPickerItems();
    if (!items.some((s) => s.id === strategyPickerPreview)) {
      const preferred = strategyPickerMode === 'alt'
        ? (items.find((s) => s.id !== state.strategy?.main)?.id || items[0]?.id || '')
        : (items.find((s) => s.id === state.strategy?.main)?.id || items[0]?.id || '');
      strategyPickerPreview = preferred;
    }
    const grid = $('#strategyPickGrid');
    if (grid) grid.innerHTML = strategyPickerGridHtml(items);
    $$('[data-strategy-filter]').forEach((el) => el.classList.toggle('on', el.dataset.strategyFilter === strategyPickerFilter));
    renderStrategyPickerDetail();
  }
  function openStrategyPicker(mode) {
    strategyPickerMode = mode || 'main';
    const filter = strategyPickerFilter;
    const items = strategyPickerItems();
    refreshStrategyPicker();
    const tabs = ['all','active','passive'].map((k) => '<button class="strategy-filter ' + (filter === k ? 'on' : '') + '" type="button" data-strategy-filter="' + k + '">' + ({all:'全部',active:'主动',passive:'被动'}[k]) + '</button>').join('');
    const body = '<div class="modal-body"><div class="detail-kicker">STRATEGY</div><h2 class="detail-name modal-title">选择盟约策略</h2>' +
      '<p class="detail-note">点策略看完整效果，再点确认按钮；最多 3 个策略。</p>' +
      '<div class="strategy-picker-layout">' +
        '<div class="strategy-picker-left">' +
          '<input class="strategy-search" id="strategySearch" placeholder="搜索策略名称 / 效果" value="' + attr(strategyPickerQuery) + '" />' +
          '<div class="strategy-filters">' + tabs + '</div>' +
          '<div class="strategy-pick-grid" id="strategyPickGrid">' + strategyPickerGridHtml(items) + '</div>' +
        '</div>' +
        '<aside class="strategy-picker-side" id="strategyPickerDetail"></aside>' +
      '</div>' +
      '<div class="form-actions"><button class="btn" type="button" data-close>取消</button></div>' +
    '</div>';
    openModal(body, true);
    renderStrategyPickerDetail();
  }
  function pickStrategy(id) {
    const s = strategyById(id); if (!s) return;
    if (!state.strategy) state.strategy = { main: '', alternatives: [], reason: '', posterText: {} };
    if (!isObj(state.strategy.posterText)) state.strategy.posterText = {};
    if (strategyPickerMode === 'alt') {
      const arr = state.strategy.alternatives || [];
      if (arr.length >= 2 && !arr.includes(id)) { toast('次选最多 2 个', true); return; }
      if (state.strategy.main === id) { toast('这已经是主盟约', true); return; }
      if (arr.includes(id)) state.strategy.alternatives = arr.filter((x) => x !== id);
      else state.strategy.alternatives = arr.concat(id);
    } else {
      state.strategy.main = id;
      state.strategy.alternatives = (state.strategy.alternatives || []).filter((x) => x !== id);
    }
    saveNow(); closeModal(); renderPoster(); toast('策略已更新');
  }
  function removeStrategy(id) {
    const st = state.strategy;
    if (!st || !id) return;
    const wasMain = st.main === id;
    if (wasMain) {
      const alts = st.alternatives || [];
      st.main = alts[0] || '';
      st.alternatives = alts.slice(1);
    } else {
      st.alternatives = (st.alternatives || []).filter((x) => x !== id);
    }
    if (isObj(st.posterText)) delete st.posterText[id];
    saveNow();
    renderPoster();
    toast(wasMain && st.main ? '已删除主盟约，已自动顶上第一个次选' : '已删除盟约');
  }

  let strategyPickerMode = 'main';
  let strategyPickerFilter = 'all';
  let strategyPickerQuery = '';
  let strategyPickerPreview = '';

  function renderPoster() {
    const poster = $('#poster');
    const strategyHtml = renderStrategy();
    const traitPanels = state.meta?.equipmentInCore ? buildTraitPanels() : null;
    const equipmentHtml = renderEquipment();
    const lowerHtml = traitPanels ? traitPanels.left : renderBonds();
    const strategyAlts = (state.strategy?.alternatives || []).filter((id) => strategyById(id));
    const strategyLong = strategyAlts.length >= 2;
    const soloStrategy = !!strategyHtml && (!state.strategy?.main || strategyAlts.length === 0);
    const roomyStages = !strategyHtml && !editMode;
    const strategyCount = strategyHtml ? Math.min(2, strategyAlts.length) : 0;
    const traitLayout = !!state.meta?.equipmentInCore;
    const stageCount = Math.min(5, (state.stages || []).length);
    poster.innerHTML = '<div class="poster-hazard" aria-hidden="true"></div>' + renderHeader() +
      '<div class="poster-body">' +
        '<div class="poster-left' + (traitLayout ? ' trait-layout' : '') + '">' + renderBoard() +
          '<div class="poster-left-bottom' + (traitLayout ? ' trait-layout' : ' no-equipment') + '">' + lowerHtml + '</div>' +
        '</div>' +
        '<div class="poster-right' + (strategyHtml ? ' has-strategy' : '') + (equipmentHtml ? ' has-equipment' : '') + (traitPanels?.right ? ' trait-right' : '') + ' stages-' + stageCount + (strategyLong ? ' strategy-long' : '') + (soloStrategy ? ' solo-strategy' : '') + (strategyHtml ? ' strategy-count-' + strategyCount : '') + '">' + renderStages(roomyStages) + (traitPanels?.right || '') + equipmentHtml + strategyHtml + '</div>' +
      '</div>' +
      renderFooter();
    const brandTitle = $('#appbarTitle');
    if (brandTitle) brandTitle.textContent = state.meta?.title || '一图流';
    const rightNow = $('.poster-right');
    const stageNow = $('.stages-panel');
    if (rightNow && ((rightNow.scrollHeight > rightNow.clientHeight + 2) || (stageNow && stageNow.scrollHeight > stageNow.clientHeight + 2))) rightNow.classList.add('strategy-long');
    syncEditable();
    document.body.classList.toggle('has-entry', !!(state.meta.showQr && siteUrl()));
    document.body.classList.toggle('choosing-facing', !!pendingPlacement);
    if (!$('#equipmentDrawer')?.hidden) renderEquipmentLibrary();
    requestAnimationFrame(() => {
      const rightPanel = $('.poster-right');
      const stagePanel = $('.stages-panel');
      if (rightPanel && ((rightPanel.scrollHeight > rightPanel.clientHeight + 2) || (stagePanel && stagePanel.scrollHeight > stagePanel.clientHeight + 2))) rightPanel.classList.add('strategy-long');
      fitTraitPanel();   // 先定画布高度与兜底档，棋盘尺寸要跟着它算
      layoutBoard();
      fitPoster();
      checkOverflow();
      refreshPendingPreview();
      if (editMode && !mobileUI && boardRangeId && !pendingPlacement) paintBoardRange(boardRangeId);
      if (editMode) { bindBoardDnD(); bindStageDnD(); }
    });
    if (mobileUI) renderMobile();
    if (MISSING_IDS.size && !missingToastShown) {
      missingToastShown = true;
      setTimeout(() => toast('有 ' + MISSING_IDS.size + ' 个干员不在当前资料库，已显示占位头像', true), 50);
    }
  }

  /* ------------------------------------------------------------
     Layout / scale / checks
     ------------------------------------------------------------ */
  function layoutBoard() {
    const area = $('.board-area');
    const board = $('#boardGrid');
    if (!area || !board) return;
    const cols = Math.max(1, Number(state.board?.cols) || 8);
    const rows = Math.max(1, Number(state.board?.rows) || 4);
    const gap = 5;
    const w = Math.max(0, area.clientWidth - 8);
    const h = Math.max(0, area.clientHeight - 8);
    const cell = Math.max(1, Math.min(64, Math.floor(Math.min((w - (cols - 1) * gap) / cols, (h - (rows - 1) * gap) / rows))));
    board.style.gap = gap + 'px';
    board.style.gridTemplateColumns = 'repeat(' + cols + ', ' + cell + 'px)';
    board.style.gridTemplateRows = 'repeat(' + rows + ', ' + cell + 'px)';
    board.style.width = (cols * cell + (cols - 1) * gap) + 'px';
    board.style.height = (rows * cell + (rows - 1) * gap) + 'px';
  }

  /* 画布高度只改 --poster-h；宽度锁死 1600，两栏比例不动。
     导出、放大的尺寸都跟着这个值走。 */
  function applyPosterHeight(h) {
    if (h === posterHeight) return;
    posterHeight = h;
    // 挂在 :root 上：.poster 和手机上把海报推出屏外的 #stage 都读这个值
    document.documentElement.style.setProperty('--poster-h', h + 'px');
  }

  /* 左下「战斗效果 / 盟约」塞不下时依次尝试，能少牺牲就少牺牲：
       ① 1200 高度下兜底：棋盘让高（trait-tall）→ 压行高（dense）
       ② 还不够就把画布按 40px 步进加长（宽度不变），高度变了再从头试最轻的档
       ③ 到上限（1600）才收内容：收起未激活明细（ultra）→ 盟约说明压一行 + 收件人让位（tight）
     最后仍放不下时，把没标出的条数写进标题旁，不让信息无声消失。 */
  function fitTraitPanel() {
    const panel = $('.trait-sum-panel.trait-left-panel');
    const left = $('.poster-left');
    if (!panel) { applyPosterHeight(POSTER_H); return; }
    const note = $('.panel-note', panel);
    const base = note?.dataset.base ?? note?.textContent ?? '';
    const overflow = () => panel.scrollHeight - panel.clientHeight;
    const fits = () => overflow() <= 2;
    const clear = () => {
      panel.classList.remove('dense', 'ultra', 'tight');
      left?.classList.remove('trait-tall');
    };
    const settled = () => { if (note && note.textContent !== base) note.textContent = base; };
    const lightLevels = () => {
      if (fits()) return true;
      left?.classList.add('trait-tall');
      if (fits()) return true;
      panel.classList.add('dense');
      return fits();
    };

    clear();
    applyPosterHeight(POSTER_H);
    if (lightLevels()) { settled(); return; }

    // 加高画布：多出来的空间直接给左下面板
    const grown = Math.min(POSTER_MAX_H, Math.ceil((posterHeight + overflow() + POSTER_H_STEP) / POSTER_H_STEP) * POSTER_H_STEP);
    if (grown > posterHeight) {
      applyPosterHeight(grown);
      clear();
      if (lightLevels()) { settled(); return; }
    }

    // 到画布上限了，只能收内容
    panel.classList.add('ultra');
    const inactive = $('.trait-inactive-block .trait-section-head span', panel)?.textContent || '';
    if (note && inactive) note.textContent = base + ' · 未激活 ' + inactive;
    if (fits()) return;
    panel.classList.add('tight');
    if (!note) return;
    const box = panel.getBoundingClientRect();
    const hidden = $$('.trait-op-row', panel).filter((el) => el.getBoundingClientRect().bottom > box.bottom - 2).length;
    if (hidden) note.textContent += ' · 未标出 ' + hidden + ' 条';
  }

  function fitPoster() {
    if (zoomMode || mobileUI) return;
    const stage = $('#stage');
    const shell = $('#posterShell');
    const poster = $('#poster');
    if (!stage || !shell || !poster) return;
    if (poster.classList.contains('is-exporting')) return;
    const cs = getComputedStyle(stage);
    const padX = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
    const padY = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    const availW = Math.max(40, stage.clientWidth - padX - 16);
    const availH = Math.max(30, stage.clientHeight - padY - 16);
    const byW = availW / POSTER_W;
    const byH = availH / posterHeight;
    // 宽度够时，不要为了塞进视口把正文字号缩到约 14px 以下；改成滚动。
    // 宽度不够（手机上的海报模式）仍按宽度缩小，避免左右都要拖。
    const s = Math.min(byW, Math.max(byH, Math.min(byW, 0.72)));
    poster.style.transform = 'scale(' + s + ')';
    shell.style.width = (POSTER_W * s) + 'px';
    shell.style.height = (posterHeight * s) + 'px';
    const overflows = (posterHeight * s > availH + 2) || (POSTER_W * s > availW + 2);
    stage.style.overflow = overflows ? 'auto' : '';
    stage.style.placeItems = overflows ? 'start center' : '';
  }

  function posterCheck() {
    const overflow = [];
    const selectors = ['.poster-header', '.poster-body', '.board-panel', '.bonds-panel', '.equip-panel', '.trait-sum-panel', '.trait-sum-columns', '.stages-panel', '.active-bonds-panel', '.strategy-panel', '.poster-footer'];
    for (const sel of selectors) {
      const el = $(sel);
      if (!el) continue;
      if (el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2) {
        overflow.push({ sel, sw: el.scrollWidth, cw: el.clientWidth, sh: el.scrollHeight, ch: el.clientHeight });
      }
    }
    const smallText = [];
    const leaves = $$('.poster *').filter((el) => el.children.length === 0 && el.textContent.trim());
    for (const el of leaves) {
      if (el.closest('.edit-only, .edit-count, .prof-badge, .equip-add, .core-equip-slot.add, .bond-tier, .unit-tier-label')) continue;
      const fs = parseFloat(getComputedStyle(el).fontSize || '0');
      if (fs < 20) smallText.push({ tag: el.tagName, cls: el.className, text: el.textContent.trim().slice(0, 20), fs });
    }
    const stageOverflow = [];
    $$('.stage-avatars').forEach((el, i) => {
      if (el.scrollWidth > el.clientWidth + 2) stageOverflow.push({ row: i + 1, sw: el.scrollWidth, cw: el.clientWidth });
    });
    const strategyHidden = $$('[data-strategy-hidden]').filter((el) => el.dataset.strategyHidden).map((el) => ({ slot: el.dataset.strategyHidden, id: el.dataset.strategyId || '' }));
    const schema = state.schemaVersion;
    return { schema, overflow, smallText, stageOverflow, strategyHidden, placementChecks: placementChecks(), stages: state.stages?.length || 0, legacyRows: (state.legacy && state.legacy.route ? state.legacy.route.length : 0), cols: state.board?.cols, rows: state.board?.rows };
  }
  function checkOverflow() {
    const result = posterCheck();
    if (result.overflow.length) console.warn('Poster overflow', result.overflow);
    if (result.smallText.length) console.warn('Poster text < 20px', result.smallText);
    if (result.stageOverflow.length) console.warn('Stage avatars overflow', result.stageOverflow);
    if (result.strategyHidden.length) console.warn('Strategy effects hidden', result.strategyHidden);
    return result;
  }

  /* ------------------------------------------------------------
     Editable text / counters
     ------------------------------------------------------------ */
  function syncEditable() {
    $$('[data-edit]').forEach((el) => {
      el.setAttribute('contenteditable', editMode ? 'true' : 'false');
      el.spellcheck = false;
      updateCount(el);
    });
  }
  function updateCount(el) {
    const max = Number(el.dataset.max || 0);
    if (!max) return;
    const text = el.innerText.replace(/\s+/g, ' ').trim();
    const counter = el.querySelector('.edit-count') || el.parentElement?.querySelector('.edit-count');
    if (counter) {
      counter.textContent = text.length + '/' + max;
      counter.classList.toggle('over', text.length > max);
    }
    el.classList.toggle('over', text.length > max);
  }
  function syncCounts() {
    $$('[data-edit]').forEach(updateCount);
  }

  /* ------------------------------------------------------------
     Persistence / edit toggle
     ------------------------------------------------------------ */
  // 右上角的保存状态，四种：
  //   idle    刚打开，还没有任何改动（以前这里一打开就写「已自动保存 HH:MM」，其实什么都没存）
  //   pending 文字改动已记下，等输入停顿后写入
  //   saved   已写入本机，带时间
  //   error   写入失败（存储满 / 隐私模式），改动只在当前页面里
  function setSaveState(kind) {
    const el = $('#saveState');
    if (!el) return;
    el.dataset.state = kind;
    if (kind === 'saved') {
      const d = new Date();
      el.textContent = '已自动保存 ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    } else if (kind === 'pending') el.textContent = '保存中…';
    else if (kind === 'error') el.textContent = '未保存 · 本机存储写入失败';
    else el.textContent = '';
    el.hidden = kind === 'idle';
  }

  /* ------------------------------------------------------------
     撤销 / 重做
     所有改动最后都会走 saveNow()，所以历史直接挂在这里：每次写入时把
     精简存档（toStorageState，约 4KB 的字符串）和上一份比较，不同就记一步。
     不用在几十个操作里各自埋点，新加的操作只要照常 saveNow() 就自动可撤销。
     ------------------------------------------------------------ */
  const HISTORY_LIMIT = 80;
  const HISTORY_MERGE_MS = 2500;
  const HISTORY_ICON = {
    undo: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    redo: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="m15 14 5-5-5-5M20 9H10a6 6 0 0 0 0 12h3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  // 注意别叫 history：会遮住 window.history，分享链接清理 hash 要用它
  const timeline = { past: [], future: [], current: null, tag: '', at: 0 };
  let historyTag = '';
  let historyLock = false;

  function recordHistory(snap) {
    const tag = historyTag;
    historyTag = '';
    if (historyLock || timeline.current === null) return;
    // 棋子刚放下、朝向还没定，只是半步：等「确定朝向」或「撤销放入」之后再记
    if (pendingPlacement) return;
    if (snap === timeline.current) return;
    const now = Date.now();
    // 连续敲同一段文字合并成一步，不然撤销要一个字一个字退
    const merge = !!tag && tag === timeline.tag && now - timeline.at < HISTORY_MERGE_MS;
    if (!merge) {
      timeline.past.push(timeline.current);
      if (timeline.past.length > HISTORY_LIMIT) timeline.past.shift();
    }
    timeline.current = snap;
    timeline.tag = tag;
    timeline.at = now;
    timeline.future.length = 0;
    syncHistoryUi();
  }
  function initHistory() {
    timeline.past.length = 0;
    timeline.future.length = 0;
    timeline.current = JSON.stringify(toStorageState(state));
    timeline.tag = '';
    syncHistoryUi();
  }
  function historyAttrs(kind) {
    const n = kind === 'undo' ? timeline.past.length : timeline.future.length;
    const label = kind === 'undo' ? '撤销' : '重做';
    const key = kind === 'undo' ? 'Ctrl+Z' : 'Ctrl+Y';
    return {
      disabled: n ? 'false' : 'true',
      title: n ? label + '（' + key + '）· 可' + label + ' ' + n + ' 步' : '没有可' + label + '的操作'
    };
  }
  function syncHistoryUi() {
    $$('[data-history]').forEach((btn) => {
      const a = historyAttrs(btn.dataset.history);
      btn.setAttribute('aria-disabled', a.disabled);
      btn.title = a.title;
    });
  }
  function restoreSnapshot(snap) {
    historyLock = true;
    try {
      if (pendingPlacement) cancelPendingPlacement(true);
      state = hydrateState(JSON.parse(snap));
      setSaveState(safeSet(STORAGE_KEY, snap) ? 'saved' : 'error');
      // 这些界面状态指向的是旧数据里的棋子 / 装备格，一起清掉，免得指到已经不存在的东西
      closeInfoPop();
      closeDetailDrawer();
      mobileRange = null;
      mobileRangeArmed = false;
      mobileEquipOpen = null;
      renderPoster();
      renderRoster();
      renderVariants();
      if (!$('#equipmentDrawer')?.hidden) renderEquipmentLibrary();
    } finally {
      historyLock = false;
    }
  }
  function stepHistory(kind) {
    // 朝向还没定的时候按撤销，就是「撤销放入」
    if (kind === 'undo' && pendingPlacement) { cancelPendingPlacement(); return; }
    if (saveTimer) saveNow();   // 还在防抖里的文字先落盘，保证它是历史里的一步
    const from = kind === 'undo' ? timeline.past : timeline.future;
    const to = kind === 'undo' ? timeline.future : timeline.past;
    const label = kind === 'undo' ? '撤销' : '重做';
    if (!from.length) { toast('没有可' + label + '的操作'); return; }
    to.push(timeline.current);
    timeline.current = from.pop();
    timeline.tag = '';
    try {
      restoreSnapshot(timeline.current);
    } catch (e) {
      console.error(e);
      toast(label + '失败：' + (e.message || e.name), true);
    }
    syncHistoryUi();
    toast(kind === 'undo'
      ? '已撤销' + (timeline.past.length ? ' · 还可再退 ' + timeline.past.length + ' 步' : ' · 已回到最初')
      : '已重做' + (timeline.future.length ? ' · 还可重做 ' + timeline.future.length + ' 步' : ''));
  }

  function saveNow() {
    clearTimeout(saveTimer);
    saveTimer = 0;
    const snap = JSON.stringify(toStorageState(state));
    const ok = safeSet(STORAGE_KEY, snap);
    recordHistory(snap);
    setSaveState(ok ? 'saved' : 'error');
  }
  // tag：同一个 tag 的连续保存会合并成一步撤销（传入正在编辑的字段路径）
  function saveSoon(tag) {
    if (tag) historyTag = tag;
    setSaveState('pending');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 220);
  }
  function toast(message, isError) {
    const el = $('#toast');
    el.textContent = message;
    el.classList.toggle('err', !!isError);
    el.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function toggleEdit() {
    if (pendingPlacement) cancelPendingPlacement(true);
    closeInfoPop();
    closeDetailDrawer();
    editMode = !editMode;
    document.body.classList.toggle('editing', editMode);
    const bar = $('#editBar');
    if (bar) bar.hidden = !editMode;
    const btn = $('#editBtn');
    if (btn) {
      btn.setAttribute('aria-pressed', String(editMode));
      const span = btn.querySelector('span');
      if (span) span.textContent = editMode ? '完成' : '编辑';
    }
    if (!editMode) {
      boardRangeId = null;
      saveNow();
    }
    renderPoster();
    fitPoster();
    if (editMode) toast('编辑模式：在海报上改已有内容。加人先点「干员库」。要从头配一整套，用「调整阵容」。');
    else { closeRoster(); closeVariants(); closeEquipmentLibrary(); }
  }

  /* ------------------------------------------------------------
     Modal
     ------------------------------------------------------------ */
  // 弹窗关掉后把键盘焦点还给打开它的那个按钮。只记按钮类元素：
  // 可编辑文字不记（还回去会弹出手机键盘 / 触发截断检查），已被重新渲染掉的元素自然跳过。
  let modalReturnFocus = null;
  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  function openModal(html, wide) {
    closeInfoPop();
    closeDetailDrawer();
    const root = $('#modalRoot');
    if (!$('.modal')) {
      const a = document.activeElement;
      modalReturnFocus = a && a !== document.body && !a.isContentEditable && a.matches('button, a[href], [role="button"]') ? a : null;
    }
    root.innerHTML = '<div class="modal" role="presentation">' +
      '<div class="modal-backdrop" data-close></div>' +
      '<div class="modal-panel ' + (wide ? 'wide' : '') + '" role="dialog" aria-modal="true">' +
        '<button class="modal-close" type="button" data-close aria-label="关闭">×</button>' + html +
      '</div></div>';
    document.body.classList.add('modal-open');
    setTimeout(() => { const b = $('.modal-close'); if (b) b.focus(); }, 20);
  }
  function closeModal() {
    const wasOpen = !!$('.modal');
    $('#modalRoot').innerHTML = '';
    document.body.classList.remove('modal-open');
    const back = modalReturnFocus;
    modalReturnFocus = null;
    if (wasOpen && back && back.isConnected && !mobileUI) {
      try { back.focus({ preventScroll: true }); } catch (e) { /* 元素已不可聚焦 */ }
    }
  }
  // Tab 在弹窗里循环，不会跑到被遮住的海报和抽屉上。词条浮层盖在弹窗上面时，以浮层为准。
  function trapModalFocus(e) {
    const panel = $('.modal-panel');
    if (!panel) return false;
    const shown = (el) => el.getClientRects().length > 0;   // fixed 定位的元素 offsetParent 恒为 null，不能拿它判断可见
    const over = $('.info-pop.over-modal');
    const box = over && shown(over) ? over : panel;
    const items = $$(FOCUSABLE, box).filter(shown);
    if (!items.length) { e.preventDefault(); return true; }
    const first = items[0];
    const last = items[items.length - 1];
    const cur = document.activeElement;
    if (!box.contains(cur)) { e.preventDefault(); (e.shiftKey ? last : first).focus(); return true; }
    if (e.shiftKey && cur === first) { e.preventDefault(); last.focus(); return true; }
    if (!e.shiftKey && cur === last) { e.preventDefault(); first.focus(); return true; }
    return false;
  }

  /* ------------------------------------------------------------
     干员详情抽屉：桌面端不用弹窗，右侧停靠，海报让位（fitPoster 重算缩放）。
     手机上屏幕放不下两栏，仍走全屏卡片。
     ------------------------------------------------------------ */
  function ensureDetailDrawer() {
    let el = $('#detailDrawer');
    if (el) return el;
    el = document.createElement('aside');
    el.id = 'detailDrawer';
    el.className = 'detail-drawer';
    el.setAttribute('aria-label', '干员详情');
    el.innerHTML = '<div class="detail-drawer-head"><strong>干员详情</strong>' +
      '<button class="drawer-close" type="button" data-detail-close aria-label="关闭详情">×</button></div>' +
      '<div class="detail-drawer-body" id="detailDrawerBody"></div>';
    document.body.appendChild(el);
    return el;
  }
  function openDetailDrawer(html) {
    const el = ensureDetailDrawer();
    const body = $('#detailDrawerBody');
    if (body) body.innerHTML = html;
    el.classList.add('open');
    document.body.classList.add('detail-open');
    requestAnimationFrame(fitPoster);
  }
  function closeDetailDrawer() {
    const el = $('#detailDrawer');
    if (!el || !el.classList.contains('open')) return;
    el.classList.remove('open');
    const body = $('#detailDrawerBody');
    if (body) body.innerHTML = '';
    document.body.classList.remove('detail-open');
    fitPoster();
  }

  /* ------------------------------------------------------------
     轻量信息浮层：贴在被点的元素旁边，不压暗、不锁滚动、不抢焦点。
     海报是固定 1600×1200 画布，面板行高都写死了，行内展开会把下面的行挤出去，
     所以详情只能做成浮层；点空白 / 再点一次 / Esc 关闭。
     ------------------------------------------------------------ */
  let infoPop = null;
  let infoPopAnchor = null;
  function closeInfoPop() {
    if (!infoPop) return;
    infoPop.remove();
    infoPop = null;
    infoPopAnchor = null;
    termStack = [];
    termAnchor = null;
    document.removeEventListener('pointerdown', onInfoPopOutside, true);
    window.removeEventListener('resize', placeInfoPop);
    window.removeEventListener('scroll', placeInfoPop, true);
  }
  function placeInfoPop() {
    if (!infoPop || infoPop.classList.contains('sheet')) return;
    const pop = infoPop;
    pop.style.left = '0px';
    pop.style.top = '0px';
    const w = pop.offsetWidth;
    const h = pop.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (!infoPopAnchor || !document.body.contains(infoPopAnchor)) {
      pop.style.left = Math.round(Math.max(12, (vw - w) / 2)) + 'px';
      pop.style.top = Math.round(Math.max(12, (vh - h) / 2)) + 'px';
      return;
    }
    const r = infoPopAnchor.getBoundingClientRect();
    let left = r.right + 12;
    if (left + w > vw - 12) left = r.left - w - 12;
    if (left < 12) left = Math.max(12, Math.min(vw - w - 12, r.left));
    const top = Math.min(Math.max(12, r.top), Math.max(12, vh - h - 12));
    pop.style.left = Math.round(left) + 'px';
    pop.style.top = Math.round(top) + 'px';
  }
  function onInfoPopOutside(e) {
    if (!infoPop) return;
    if (infoPop.contains(e.target)) return;
    if (infoPopAnchor && infoPopAnchor.contains(e.target)) return;
    /* 手机底部浮层是 fixed 的轻量面板：点空白只负责“关掉它”，
       别让同一个手势继续点到底下的盟约行 / 棋子 / 头像。
       明确的“关闭”按钮和另一个词条链接除外：前者应该一次关掉，
       后者允许直接切换词条，不用先关再点。 */
    if (infoPop.classList.contains('sheet') &&
        !e.target.closest('[data-term-bond], [data-term-equip], [data-term-kind]') &&
        !e.target.closest('[data-close], [data-detail-close], [data-info-pop-close]')) {
      suppressClickUntil = Date.now() + 350;
    }
    closeInfoPop();
  }
  function openInfoPop(anchor, html) {
    if (infoPop && anchor && infoPopAnchor === anchor) { closeInfoPop(); return; }
    closeInfoPop();
    const el = document.createElement('div');
    el.className = 'info-pop';
    if (mobileUI || window.matchMedia('(max-width: 720px)').matches) el.classList.add('sheet');
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', '详情');
    el.innerHTML = '<button class="info-pop-close" type="button" data-info-pop-close aria-label="关闭">×</button>' + html;
    document.body.appendChild(el);
    infoPop = el;
    infoPopAnchor = anchor || null;
    placeInfoPop();
    document.addEventListener('pointerdown', onInfoPopOutside, true);
    window.addEventListener('resize', placeInfoPop);
    window.addEventListener('scroll', placeInfoPop, true);
  }
  function section(label, text) {
    if (!text) return '';
    return '<section class="detail-section"><h4>' + esc(label) + '</h4><p>' + rich(text) + '</p></section>';
  }
  function bondMini(id, interactive = true) {
    const b = bond(id);
    if (!b) return '';
    const effectText = (b.effects || []).map((e) => e.need + '：' + e.text).join('\n') || b.summary || '';
    if (!interactive) {
      return '<span class="bond-mini static" title="' + attr(b.name + '\n' + effectText) + '"><img src="' + bondIcon(id) + '" alt="" />' + esc(b.name) + '</span>';
    }
    return '<button class="bond-mini" type="button" data-bond-id="' + attr(id) + '" title="' + attr(b.name + '\n' + effectText) + '"><img src="' + bondIcon(id) + '" alt="" />' + esc(b.name) + '</button>';
  }

  /* ------------------------------------------------------------
     词条关联 + 干员详情：正文词条可点；openDetail / rangeHtml / bondInfoHtml
     规则只认数据里真实存在的名字，避免把普通文本都做成链接；
     所有词条共用一个浮层，点进去是“替换”而不是层层叠加，
     最多保留 3 层历史，可「← 返回」逐层退回。
     ------------------------------------------------------------ */
  const TERM_STACK_MAX = 3;
  let termStack = [];
  let termAnchor = null;

  function bondIdByName(name) {
    const target = String(name || '').trim();
    if (!target) return '';
    const found = Object.entries(state.bondLibrary || {}).find(([, b]) => b && b.name === target);
    return found ? found[0] : '';
  }
  function equipmentKeyByName(name) {
    const target = String(name || '').trim();
    if (!target) return '';
    return Object.keys(ITEM_META).find((k) => ITEM_META[k] === target) || '';
  }
  function termBondButton(id) {
    const b = bond(id);
    if (!b) return '';
    return '<button type="button" class="term-link term-bond" data-term-bond="' + attr(id) + '" title="' +
      attr('查看盟约「' + b.name + '」：档位效果与含有的干员') + '">' +
      '<span class="kw-name"><i>【</i>' + esc(b.name) + '<i>】</i></span></button>';
  }
  function termEquipButton(key) {
    if (!ITEM_META[key]) return '';
    return '<button type="button" class="term-link term-equip" data-term-equip="' + attr(key) + '" title="' +
      attr('查看装备「' + ITEM_META[key] + '」') + '">' +
      '<img class="term-equip-icon" src="' + attr(itemSrc(key)) + '" alt="" draggable="false" />' +
      esc(ITEM_META[key]) + '</button>';
  }
  function termKindButton(kind) {
    const cls = kind === '持续叠加' ? 'kw-stack' : (kind === '单次叠加' ? 'kw-stack once' : 'term-kind-word');
    return '<button type="button" class="term-link term-kind" data-term-kind="' + attr(kind) + '" title="' +
      attr('查看「' + kind + '」类型特质与干员') + '"><span class="' + cls + '">' + esc(kind) + '</span></button>';
  }
  const TERM_LINK_RE = new RegExp(
    '“[^”\\r\\n]{1,24}”|「[^」\\r\\n]{1,24}」|<(?:' + PHASE_TAGS.join('|') + ')>|【[^【】\\r\\n]{1,16}】|' +
    TRAIT_KINDS.join('|') + '|已激活的', 'g');
  function termLinkToken(tok, index) {
    const first = tok.charAt(0);
    if (first === '“' || first === '「') {
      const name = tok.slice(1, -1).trim();
      const key = equipmentKeyByName(name);
      if (key) return esc(first) + termEquipButton(key) + esc(tok.charAt(tok.length - 1));
      return esc(tok);
    }
    if (first === '【') {
      const id = bondIdByName(tok.slice(1, -1));
      return id ? termBondButton(id) : richToken(tok);
    }
    if (TRAIT_KINDS.includes(tok)) {
      return index === 0 ? termKindButton(tok) : richToken(tok);
    }
    return richToken(tok);
  }
  /* 和 rich() 同样的安全分段：先匹配、再分段转义，只有识别出的词条才输出按钮。 */
  function linkedRich(v) {
    const text = String(v ?? '');
    let out = '', last = 0, m;
    TERM_LINK_RE.lastIndex = 0;
    while ((m = TERM_LINK_RE.exec(text))) {
      out += esc(text.slice(last, m.index)) + termLinkToken(m[0], m.index);
      last = m.index + m[0].length;
    }
    return out + esc(text.slice(last));
  }

  function operatorBoardOrder() {
    const order = new Map();
    const placements = [...(state.board?.placements || [])].sort((a, b) => (a.row - b.row) || (a.col - b.col));
    for (const p of placements) {
      if (p && !order.has(p.operatorId)) order.set(p.operatorId, order.size);
    }
    return order;
  }
  function sortedTermOps(ops) {
    const order = operatorBoardOrder();
    return ops.slice().sort((a, b) => {
      const ao = order.has(a.id) ? order.get(a.id) : 999;
      const bo = order.has(b.id) ? order.get(b.id) : 999;
      return (ao - bo) || ((Number(a.bench) || 0) - (Number(b.bench) || 0)) ||
        String(a.name || a.id).localeCompare(String(b.name || b.id), 'zh');
    });
  }
  function termOpsGridHtml(ops, noteFor) {
    const order = operatorBoardOrder();
    return ops.map((o) => {
      const onBoard = order.has(o.id);
      const note = noteFor ? noteFor(o) : '';
      const title = (o.name || o.id) + (onBoard ? ' · 棋盘上' : '') + (note ? ' · ' + note : '');
      return '<button class="info-pop-op' + (onBoard ? ' on-board' : '') + '" type="button" data-term-op="' + attr(o.id) + '" title="' + attr(title) + '">' +
        '<img src="' + attr(avatarSrc(o.avatar)) + '" alt="" draggable="false" style="border-color:' + rarityColor(o) + '" />' +
        '<span>' + esc(o.name || o.id) + '</span>' +
        (note ? '<em>' + esc(note) + '</em>' : '') +
        (onBoard ? '<i>在场</i>' : '') +
      '</button>';
    }).join('');
  }
  function bondOperators(id) {
    return sortedTermOps(Object.values(state.operators || {}).filter((o) => (o.bonds || []).includes(id)));
  }
  function bondOpsSectionHtml(id) {
    const ops = bondOperators(id);
    const onBoard = new Set((state.board?.placements || []).map((p) => p.operatorId));
    const boardCount = ops.filter((o) => onBoard.has(o.id)).length;
    return '<div class="info-pop-ops">' +
      '<div class="info-pop-ops-head"><b>含有的干员</b><span>棋盘 ' + boardCount + ' · 名册 ' + ops.length + '</span></div>' +
      (ops.length ? '<div class="info-pop-ops-grid">' + termOpsGridHtml(ops) + '</div>' : '<p class="detail-note">名册内没有该盟约干员。</p>') +
    '</div>';
  }
  function equipmentOpsSectionHtml(key) {
    const uses = equipmentUses(key);
    const byOp = new Map();
    for (const use of uses) {
      if (!byOp.has(use.row.operatorId)) byOp.set(use.row.operatorId, []);
      byOp.get(use.row.operatorId).push(use.slot);
    }
    const ops = [];
    for (const id of byOp.keys()) {
      const o = op(id);
      if (o) ops.push(o);
    }
    const sorted = sortedTermOps(ops);
    return '<div class="info-pop-ops">' +
      '<div class="info-pop-ops-head"><b>本套装备于</b><span>' + uses.length + ' 处</span></div>' +
      (sorted.length
        ? '<div class="info-pop-ops-grid">' + termOpsGridHtml(sorted, (o) => (byOp.get(o.id) || []).map((s) => equipSlotLabel(s)).join(' / ')) + '</div>'
        : '<p class="detail-note">本套阵容还没有装备这件。</p>') +
    '</div>';
  }
  function equipmentTermInfoHtml(key) {
    if (!ITEM_META[key]) return '';
    const eff = equipmentEffect(key) || {};
    return '<div class="info-pop-head">' +
        '<img src="' + itemSrc(key) + '" alt="" draggable="false" />' +
        '<div><div class="detail-kicker">EQUIP / ITEM</div><h3>' + esc(ITEM_META[key]) + '</h3>' +
        '<div class="info-pop-meta">装备 · 当前 ' + equipmentUses(key).length + ' 处装备</div></div>' +
      '</div>' +
      '<div class="info-pop-effect"><b>基础效果</b><p>' + esc(eff.base || '暂无数据') + '</p></div>' +
      (eff.advanced ? '<div class="info-pop-effect"><b>进阶效果</b><p>' + esc(eff.advanced) + '</p></div>' : '') +
      equipmentOpsSectionHtml(key) +
      '<p class="detail-note">数据：可露希尔Wiki；卫戍协议内以游戏为准。</p>';
  }
  function kindTermInfoHtml(kind) {
    const ops = sortedTermOps(Object.values(state.operators || {}).filter((o) => traitKinds(o).includes(kind)));
    return '<div class="info-pop-head">' +
        '<div><div class="detail-kicker">TRAIT / TYPE</div><h3>' + esc(kind) + '</h3>' +
        '<div class="info-pop-meta">特质类型 · 名册内 ' + ops.length + ' 名干员</div></div>' +
      '</div>' +
      '<p class="detail-note">按特质文本开头的类型词归类；点干员查看完整特质。</p>' +
      (ops.length ? '<div class="info-pop-ops-grid">' + termOpsGridHtml(ops) + '</div>' : '<p class="detail-note">名册内没有该类型特质。</p>');
  }
  function normalizeTermEntry(entry) {
    if (!entry) return null;
    if (entry.kind === 'bond') {
      const b = bond(entry.id);
      return b ? { kind: 'bond', id: entry.id, label: b.name } : null;
    }
    if (entry.kind === 'equip') {
      return ITEM_META[entry.id] ? { kind: 'equip', id: entry.id, label: ITEM_META[entry.id] } : null;
    }
    if (entry.kind === 'kind') {
      return TRAIT_KINDS.includes(entry.id) ? { kind: 'kind', id: entry.id, label: entry.id } : null;
    }
    return null;
  }
  function termEntryHtml(entry) {
    if (entry.kind === 'bond') return bondInfoHtml(entry.id);
    if (entry.kind === 'equip') return equipmentTermInfoHtml(entry.id);
    if (entry.kind === 'kind') return kindTermInfoHtml(entry.id);
    return '';
  }
  function termPopHtml() {
    const entry = termStack[termStack.length - 1];
    if (!entry) return '';
    const back = termStack.length > 1
      ? '<button class="term-back" type="button" data-term-back title="返回上一词条">← 返回</button>'
      : '';
    return back + termEntryHtml(entry);
  }
  function bindBondPlayInputs() {
    if (!infoPop) return;
    $$('[data-bond-play]', infoPop).forEach((play) => {
      if (play.dataset.bound === '1') return;
      play.dataset.bound = '1';
      play.addEventListener('input', () => { const b = bond(play.dataset.bondPlay); if (b) b.play = play.innerText; saveSoon('bondPlay:' + play.dataset.bondPlay); });
      play.addEventListener('blur', saveNow);
    });
  }
  function showTermPop(anchor, fresh) {
    if (!fresh && infoPop && infoPop.classList.contains('term-pop')) {
      infoPop.innerHTML = '<button class="info-pop-close" type="button" data-info-pop-close aria-label="关闭">×</button>' + termPopHtml();
      infoPop.scrollTop = 0;
      bindBondPlayInputs();
      placeInfoPop();
      return;
    }
    openInfoPop(anchor || null, termPopHtml());
    if (!infoPop) return;
    infoPop.classList.add('term-pop');
    if ($('.modal')) infoPop.classList.add('over-modal');
    bindBondPlayInputs();
  }
  function openTermEntry(entry, anchor, opts = {}) {
    const normalized = normalizeTermEntry(entry);
    if (!normalized) return;
    const top = termStack[termStack.length - 1];
    const canPush = !!opts.push && !!infoPop && infoPop.classList.contains('term-pop');
    if (canPush) {
      if (top && top.kind === normalized.kind && top.id === normalized.id) return;
      termStack.push(normalized);
      if (termStack.length > TERM_STACK_MAX) termStack.shift();
      showTermPop(termAnchor, false);
      return;
    }
    closeInfoPop();
    termStack = [normalized];
    termAnchor = anchor || null;
    showTermPop(termAnchor, true);
  }
  function termBack() {
    if (termStack.length > 1) {
      termStack.pop();
      showTermPop(termAnchor, false);
    } else {
      closeInfoPop();
    }
  }
  function openBondTerm(id, anchor, push = false) {
    openTermEntry({ kind: 'bond', id }, anchor, { push });
  }
  function openEquipTerm(key, anchor, push = false) {
    openTermEntry({ kind: 'equip', id: key }, anchor, { push });
  }
  function openKindTerm(kind, anchor, push = false) {
    openTermEntry({ kind: 'kind', id: kind }, anchor, { push });
  }

  function rangeHtml(grid, facing = 'up', placed = false) {
    if (!Array.isArray(grid) || !grid.length) return '<p class="detail-note">资料库未收录攻击范围。</p>';
    const dir = normalizeFacing(facing);
    const cellsData = grid
      .map(([x, y]) => rotateRangeCell(Number(x), Number(y), dir))
      .filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
    const xs = cellsData.map((p) => p[0]);
    const ys = cellsData.map((p) => p[1]);
    const minX = Math.min(0, ...xs), maxX = Math.max(0, ...xs);
    const minY = Math.min(0, ...ys), maxY = Math.max(0, ...ys);
    const has = new Set(cellsData.map((p) => p[0] + ',' + p[1]));
    const cells = [];
    for (let y = maxY; y >= minY; y--) {
      for (let x = minX; x <= maxX; x++) {
        const on = has.has(x + ',' + y);
        const origin = x === 0 && y === 0;
        cells.push('<span class="range-cell ' + (on ? 'on ' : '') + (origin ? 'origin' : '') + '"></span>');
      }
    }
    return '<div class="range-wrap"><div class="range-grid" style="grid-template-columns:repeat(' + (maxX - minX + 1) + ',22px)">' + cells.join('') + '</div><div class="range-meta"><span class="detail-note">■ 攻击范围 · ◇ 自身</span><span class="range-facing">' + facingArrow(dir) + ' ' + (placed ? '当前朝向' : '默认正面') + '：' + FACING_LABEL[dir] + '</span></div></div>';
  }
  function skillIconSrc(s) { return s?.iconId ? (ASSETS['assets/skills/' + s.iconId + '.webp'] || ('assets/skills/' + s.iconId + '.webp')) : ''; }
  function openDetail(id) {
    const o = op(id);
    if (!o) return;
    if (o.missing) {
      openModal('<div class="modal-body"><div class="detail-hero"><img class="detail-avatar" src="' + MISSING_AVATAR + '" alt="" /><div><div class="detail-kicker">MISSING / OPERATOR</div><h2 class="detail-name">未知干员</h2><p class="detail-note">operatorId：' + esc(id) + ' 不在当前 data.js 资料库中。已保留引用，导出时显示占位头像。</p></div></div></div>');
      toast('该干员不在当前资料库，使用占位头像', true);
      return;
    }
    const bonds = (o.bonds || []).map((bid) => bondMini(bid, !mobileUI)).join('');
    const st = o.stats || {};
    const stats = [
      ['生命', st.maxHp], ['攻击', st.atk], ['防御', st.def], ['法抗', st.res],
      ['阻挡', st.blockCnt], ['攻速', attackInterval(st), false, '攻击间隔（秒）'],
      ['部署费', st.cost, true, /→/.test(String(st.cost ?? '')) ? '按阶位的部署费用：' + st.cost : '部署费用']
    ].map(([label, value, wide, title]) => '<div class="stat' + (wide ? ' wide' : '') + '"' + (title ? ' title="' + attr(title) + '"' : '') + '><span>' + esc(label) + '</span><b>' + esc(value ?? '—') + '</b></div>').join('');
    const skills = (o.skills || []).map((s, i) => {
      const on = i === Number(o.skillIdx || 0);
      return '<div class="skill-card ' + (on ? 'on' : '') + '">' +
        (skillIconSrc(s) ? '<img src="' + skillIconSrc(s) + '" alt="" />' : '<span class="skill-icon-placeholder">技</span>') +
        '<div class="skill-main"><div class="skill-head"><b>' + skillNumeral(i) + ' · ' + esc(s.name) + '</b>' +
          '<span>SP ' + esc(s.spCost ?? '—') + ' / 初动 ' + esc(s.initSp ?? '—') + (s.duration ? ' / ' + esc(s.duration) + 's' : '') + '</span></div>' +
          '<p>' + rich(s.desc || '') + '</p>' +
          (editMode ? '<button class="skill-set" type="button" data-set-skill="' + attr(o.id) + '" data-skill-index="' + i + '">' + (on ? '当前携带' : '设为携带') + '</button>' : '') +
        '</div>' +
      '</div>';
    }).join('');
    const prtsLink = 'https://prts.wiki/w/' + encodeURIComponent(o.name || id);
    const prtsEntry = window.SP_PRTS?.modules?.[id] || null;
    const defaultMod = moduleOf(o);
    const modIds = ((window.SP_OPERATOR_MODULES || {})[o.id] || (defaultMod ? [defaultMod.id] : []))
      .filter((mid) => window.SP_MODULES?.[mid]);
    const fallbackModId = (window.SP_MODULE_BY_OPERATOR || {})[o.id] || o.module?.id || modIds[0] || '';
    let selectedModId = modIds.includes(detailModulePick[o.id]) ? detailModulePick[o.id] : fallbackModId;
    if (!modIds.includes(selectedModId)) selectedModId = modIds[0] || '';
    const modTypeText = (type) => String(type || '').split('-').pop() || '?';
    const modCard = (entry) => '<div class="module-card"><span class="module-type big" title="' + attr('模组 ' + modTypeText(entry.type) + '：' + entry.name) + '">' + esc(modTypeText(entry.type)) + '</span><div class="module-card-main"><b>' + esc(entry.name) + '</b><span>' + esc(entry.type || '') + ' · 模组</span></div></div>';
    const modLevel = (entry) => {
      const lv = (entry.levels || []).slice().sort((a, b) => a.lv - b.lv).slice(-1)[0];
      if (!lv) return prtsEntry?.effect ? '<p class="module-effect prts-effect">' + rich(prtsEntry.effect) + '</p>' : '<p class="detail-note">暂无等级效果数据。</p>';
      const effectText = String(lv.effect || '').trim();
      const tm = effectText.match(/^\[([^\]]+)\]\s*/);
      const effectHtml = (tm ? '<span class="module-talent">[' + esc(tm[1]) + ']</span> ' : '') + rich(effectText.slice(tm ? tm[0].length : 0));
      return '<div class="module-level"><span class="module-lv">L' + esc(lv.lv) + '</span><div class="module-level-main">' +
        (lv.stats ? '<span class="module-stats">' + esc(lv.stats) + '</span>' : '') +
        (effectText ? '<p class="module-effect">' + effectHtml + '</p>' : '') +
      '</div></div>';
    };
    const modulePanels = modIds.map((mid) => {
      const entry = window.SP_MODULES[mid];
      return '<div class="module-panel" data-module-panel="' + attr(mid) + '"' + (mid === selectedModId ? '' : ' hidden') + '>' +
        modCard(entry) + modLevel(entry) +
        '<p class="detail-note">来源：<a href="' + attr(entry.source || 'https://closure.wiki/zh-cn/modules') + '" target="_blank" rel="noreferrer">可露希尔Wiki</a> · 基础游戏模组效果，卫戍协议内以游戏为准；模组数值可对照 <a href="' + attr(prtsLink) + '" target="_blank" rel="noreferrer">PRTS</a>。</p>' +
      '</div>';
    }).join('');
    const modulePicker = modIds.length > 1
      ? '<div class="module-picker">' + modIds.map((mid) => {
          const entry = window.SP_MODULES[mid];
          return '<button class="module-tab' + (mid === selectedModId ? ' on' : '') + '" type="button" data-module-pick="' + attr(mid) + '">' +
            '<span class="module-type">' + esc(modTypeText(entry.type)) + '</span><b>' + esc(entry.name) + '</b></button>';
        }).join('') + '</div>'
      : '';
    const moduleHtml = modIds.length
      ? modulePicker + modulePanels
      : '<p class="detail-note">该干员在当前资料库没有模组。 <a href="' + attr(prtsLink) + '" target="_blank" rel="noreferrer">查看 PRTS</a></p>';
    const traitHtml = (o.trait || o.eliteTrait)
      ? '<section class="detail-section"><h4>特质</h4>' +
        '<div class="trait-card"><span class="trait-label">基础特质</span><p>' + linkedRich(o.trait || '暂无数据') + '</p></div>' +
        '<div class="trait-card elite"><span class="trait-label">精锐特质</span><p>' + linkedRich(o.eliteTrait || '暂无数据') + '</p></div></section>'
      : '';
    const bondLines = (o.bonds || []).map((bid) => {
      const b = bond(bid); if (!b) return '';
      const eff = (b.effects || []).map((e) => '<span class="bond-tier-line"><b>激活 ' + esc(e.need) + '</b> ' + linkedRich(e.text) + '</span>').join('');
      return '<div class="detail-bond-row">' + bondMini(bid, !mobileUI) + eff + '</div>';
    }).join('');
    const talents = (o.talents || []).map((t) => '<div class="talent"><b>' + esc(t.name) + '</b><p>' + linkedRich(t.desc) + '</p></div>').join('');
    const inCore = (state.coreOperators || []).some((c) => c.operatorId === o.id);
    const placed = (state.board?.placements || []).find((p) => p.operatorId === o.id);
    const rangeFacing = normalizeFacing(placed?.facing || 'up');
    const mobilePlace = (mobileUI && editMode)
      ? '<div class="detail-actions mr-detail-place"><button class="btn btn-primary mr-place-cta" type="button" data-mr-place-op="' + attr(o.id) + '">' +
        '<span>放置到棋盘</span><i aria-hidden="true">→</i></button>' +
        '<span class="detail-note">点这里 → 收起详情和干员库 → 点棋盘空格放置。</span></div>'
      : '';
    const tier = tierRoman(o);
    const roleLine = o.subProfession || o.profession || '';
    const body = '<div class="modal-body" data-detail-op="' + attr(o.id) + '">' +
      '<div class="detail-hero">' +
        '<img class="detail-avatar" src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" style="border-color:' + tierColor(o) + '" />' +
        '<div><div class="detail-kicker">OPERATOR</div>' +
          '<h2 class="detail-name">' + esc(o.name) + '</h2>' +
          '<div class="detail-subline">' +
            (tier ? '<span class="detail-tier" title="' + attr('阶位 ' + tier) + '">' + esc(tier) + '</span>' : '') +
            (roleLine ? '<span class="detail-role" style="color:' + roleColor(o) + '">' + esc(roleLine) + '</span>' : '') +
          '</div>' +
          '<div class="detail-bonds">' + bonds + '</div>' +
          (editMode ? '<div class="detail-core"><button class="btn btn-small" type="button" data-core-op="' + attr(o.id) + '" title="' + attr(inCore ? '移出右上角（最多 6 人）' : '加入右上角：先放上棋盘；最多 6 人') + '">' + (mobileUI ? (inCore ? '★ 右上角' : '☆ 右上角') : (inCore ? '★ 移出右上角' : '☆ 加入右上角')) + '</button>' + (mobileUI ? '' : '<span class="detail-note">先放上棋盘再加入；右上角最多 6 人，不再自动收录。</span>') + '</div>' : '') +
        '</div>' +
      '</div>' +
      mobilePlace +
      '<div class="detail-sections">' +
        '<section class="detail-section"><h4>基础数值</h4><div class="stat-grid">' + stats + '</div></section>' +
        traitHtml +
        '<section class="detail-section"><h4>攻击范围</h4>' + rangeHtml(o.rangeGrid, rangeFacing, !!placed) + '</section>' +
        '<section class="detail-section"><h4>技能</h4><div class="skill-list">' + (skills || '<p class="detail-note">资料库未收录技能。</p>') + '</div></section>' +
        '<section class="detail-section"><h4>模组</h4>' + moduleHtml + '</section>' +
        '<section class="detail-section"><h4>盟约档位</h4>' + (bondLines || '<p class="detail-note">暂无盟约数据。</p>') + '</section>' +
        (talents ? '<section class="detail-section"><h4>天赋</h4><div class="talent-list">' + talents + '</div></section>' : '') +
      '</div>' +
      '<p class="detail-note">' + (mobileUI ? '数据来自本地资料库；盟约效果见上方「盟约档位」。' : '数据来自本地资料库；右侧抽屉可滚动查看全部。') + '</p>' +
    '</div>';
    if (mobileUI) openModal(body);
    else openDetailDrawer(body);
  }

  function bondInfoHtml(id) {
    const b = bond(id);
    if (!b) return '';
    const active = computeBondCounts(state)[id] || { count: 0 };
    const thresholds = (b.thresholds || []).slice().sort((a, b2) => a - b2);
    const tierText = active.reachedTier > 0 ? '当前档位 ' + esc(active.tierThreshold) : '未达档位';
    const rosterCount = bondOperators(id).length;
    const effects = b.effects || [];
    const summaryText = String(b.summary || '').trim();
    const tiers = effects.map((e) =>
      '<div class="info-pop-tier"><b>激活 ' + esc(e.need) + '</b><span>' + linkedRich(e.text) + '</span></div>').join('');
    // 很多单档盟约的 summary 和 effects[0].text 是同一句，别在浮层里显示两遍。
    const summaryDup = effects.some((e) => String(e.text || '').trim() === summaryText);
    const summaryHtml = summaryText && !summaryDup ? '<p class="info-pop-text">' + linkedRich(b.summary) + '</p>' : '';
    return '<div class="info-pop-head">' +
        '<img src="' + bondIcon(id) + '" alt="" draggable="false" />' +
        '<div><div class="detail-kicker">BOND / ' + esc(b.tag || '') + '</div><h3>' + esc(b.name) + '</h3>' +
        '<div class="info-pop-meta">棋盘 ' + esc(active.count) + ' 人 · 名册 ' + rosterCount + ' 人 · ' + tierText + ' · 阈值 ' + thresholds.join(' / ') + '</div></div>' +
      '</div>' +
      summaryHtml +
      tiers +
      bondOpsSectionHtml(id);
  }

  function openBond(id, anchor) {
    if (!bond(id)) return;
    // 读态 / 编辑态都用同一个词条浮层：编辑态的「本套怎么用」直接在浮层里改。
    openBondTerm(id, anchor || null);
  }

  /* ------------------------------------------------------------
     Operator editor
     ------------------------------------------------------------ */
  function field(label, name, value, opts = {}) {
    const cls = opts.full ? ' full' : '';
    const input = opts.textarea
      ? '<textarea name="' + attr(name) + '" rows="' + (opts.rows || 3) + '">' + esc(value) + '</textarea>'
      : '<input name="' + attr(name) + '" type="' + attr(opts.type || 'text') + '" value="' + attr(value) + '"' +
        (opts.min !== undefined ? ' min="' + opts.min + '"' : '') + (opts.max !== undefined ? ' max="' + opts.max + '"' : '') + ' />';
    return '<div class="field' + cls + '"><label>' + esc(label) + '</label>' + input + (opts.hint ? '<span class="hint">' + esc(opts.hint) + '</span>' : '') + '</div>';
  }

  function openOperatorEditor(id) {
    const o = op(id);
    if (!o) return;
    const roleOptions = Object.entries({ stack: '叠层', dps: '输出', engine: '发动机', tank: '前排', support: '功能', flex: '灵活' })
      .map(([k, v]) => '<option value="' + k + '"' + (o.roleKey === k ? ' selected' : '') + '>' + v + ' / ' + k + '</option>').join('');
    const datalist = '<datalist id="avatarKeys">' + avatarKeys.map((k) => '<option value="' + k + '">' + esc(AVATAR_LABELS[k] || k) + '</option>').join('') + '</datalist>';
    const body = '<div class="modal-body">' +
      '<div class="detail-hero" style="align-items:center">' +
        '<img class="detail-avatar" src="' + avatarSrc(o.avatar) + '" alt="" style="border-color:' + tierColor(o) + '" />' +
        '<div><div class="detail-kicker">EDIT / OPERATOR</div><h2 class="detail-name modal-title">' + esc(o.name) + '</h2>' +
        '<p class="detail-note">改完保存，海报和导出图同步。</p></div>' +
      '</div>' +
      '<form id="opEditor">' + datalist +
        '<div class="form-grid">' +
          field('名称', 'name', o.name) +
          field('头像 key / 路径', 'avatar', o.avatar, { hint: '内置：' + avatarKeys.slice(0, 8).join(' / ') }) +
          field('稀有度', 'rarity', o.rarity, { type: 'number', min: 1, max: 6 }) +
          field('阶', 'tier', tierNumber(o) || o.tier, { type: 'number', min: 1, max: 6 }) +
          field('职业', 'profession', o.profession) +
          field('定位（画布内 2-4 字）', 'role', o.role) +
          '<div class="field"><label>定位色</label><select name="roleKey">' + roleOptions + '</select></div>' +
          field('盟约（名字或 id，逗号分隔）', 'bonds', (o.bonds || []).map((b) => bond(b)?.name || b).join(', ')) +
          field('技能', 'skill', o.skill) +
          field('特质 / 叠层方式', 'trait', o.trait, { textarea: true, full: true, rows: 3 }) +
          field('精锐特质', 'eliteTrait', o.eliteTrait, { textarea: true, full: true, rows: 2 }) +
          field('为什么带', 'why', o.why, { textarea: true, full: true, rows: 3 }) +
          field('站位', 'position', o.position, { full: true }) +
          field('什么时候抓', 'timing', o.timing, { full: true }) +
          field('装备（名字或 key，逗号分隔）', 'equip', (o.equip || []).map(item).join(', '), { full: true }) +
          field('装备说明', 'equipWhy', o.equipWhy, { textarea: true, full: true, rows: 2 }) +
          field('替补 / 没有怎么办', 'substitute', o.substitute, { textarea: true, full: true, rows: 2 }) +
        '</div>' +
        '<div class="form-actions"><button class="btn" type="button" data-close>取消</button><button class="btn btn-primary" type="submit">保存</button></div>' +
      '</form>' +
    '</div>';
    openModal(body);
    const form = $('#opEditor');
    const avatarInput = form.querySelector('[name="avatar"]');
    if (avatarInput) avatarInput.addEventListener('input', () => {
      const img = $('.detail-avatar');
      if (img) img.src = avatarSrc(avatarInput.value.trim());
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const list = (v) => String(v || '').split(/[,，、\n]/).map((s) => s.trim()).filter(Boolean);
      const bondId = (name) => {
        if (state.bondLibrary[name]) return name;
        const found = Object.entries(state.bondLibrary).find(([, b]) => b.name === name);
        return found ? found[0] : name;
      };
      const next = {
        ...o,
        name: String(fd.get('name') || '').trim() || o.name,
        avatar: String(fd.get('avatar') || o.avatar).trim(),
        rarity: Math.max(1, Math.min(6, Number(fd.get('rarity')) || o.rarity)),
        tier: Math.max(1, Math.min(6, Number(fd.get('tier')) || o.tier)),
        profession: String(fd.get('profession') || '').trim(),
        professionShort: String(fd.get('profession') || '').trim().slice(0, 1),
        role: String(fd.get('role') || '').trim(),
        roleKey: String(fd.get('roleKey') || 'flex'),
        bonds: list(fd.get('bonds')).map(bondId),
        skill: String(fd.get('skill') || '').trim(),
        trait: String(fd.get('trait') || '').trim(),
        eliteTrait: String(fd.get('eliteTrait') || '').trim(),
        why: String(fd.get('why') || '').trim(),
        position: String(fd.get('position') || '').trim(),
        timing: String(fd.get('timing') || '').trim(),
        equip: list(fd.get('equip')).map(itemKey),
        equipWhy: String(fd.get('equipWhy') || '').trim(),
        substitute: String(fd.get('substitute') || '').trim()
      };
      state.operators[id] = next;
      saveNow(); closeModal(); renderPoster(); toast('已保存');
    });
  }

  /* ------------------------------------------------------------
     Saved lineups / drafts
     ------------------------------------------------------------ */
  function readSaves() {
    try {
      const arr = JSON.parse(localStorage.getItem(SAVES_KEY) || '[]');
      return Array.isArray(arr) ? arr.filter((s) => s && s.id && s.data) : [];
    } catch (e) { return []; }
  }
  function writeSaves() {
    safeSet(SAVES_KEY, JSON.stringify(saves));
  }
  function stamp(iso) {
    const d = iso ? new Date(iso) : new Date();
    return d.toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  }
  function hasLineup() {
    return (state.board?.placements || []).length > 0 || (state.coreOperators || []).length > 0;
  }
  function compactState(s) { return toStorageState(s); }
  function saveAvatars(data) {
    const d = data?.operators ? data : hydrateState(data);
    const placements = [...(d.board?.placements || [])].sort((a, b) => (a.row - b.row) || (a.col - b.col));
    const ids = placements.map((p) => p.operatorId).slice(0, 8);
    if (!ids.length) ids.push(...(d.coreOperators || []).map((c) => c.operatorId).slice(0, 8));
    return ids.map((id) => {
      const o = d.operators?.[id];
      return o ? '<img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" title="' + attr(o.name) + '" />' : '<img src="' + MISSING_AVATAR + '" alt="未知干员" title="未知干员" />';
    }).join('');
  }
  function normalizeSave(data) {
    const d = migrateToV3(data);
    if (!isValid(d)) throw new Error('存档结构不完整');
    return hydrateState(d);
  }
  function saveSlot(name, overwriteId, auto) {
    const clean = String(name || '').trim() || '未命名阵容';
    if (overwriteId) {
      const slot = saves.find((s) => s.id === overwriteId);
      if (slot) {
        slot.name = clean;
        slot.updatedAt = new Date().toISOString();
        slot.data = compactState(state);
        writeSaves();
        return slot;
      }
    }
    if (!auto && saves.filter((s) => !s.auto).length >= 12) {
      toast('最多 12 个手动存档，请先删除旧存档', true);
      return null;
    }
    const slot = { id: 'save-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6), name: clean, updatedAt: new Date().toISOString(), data: compactState(state), auto: !!auto };
    saves.unshift(slot);
    writeSaves();
    return slot;
  }
  function backupCurrent(label) {
    if (!hasLineup()) return null;
    const auto = saves.find((s) => s.auto);
    if (auto) {
      auto.name = label;
      auto.updatedAt = new Date().toISOString();
      auto.data = compactState(state);
      writeSaves();
      return auto;
    }
    return saveSlot(label, null, true);
  }
  function loadSaveSlot(id) {
    const slot = saves.find((s) => s.id === id);
    if (!slot) return;
    try {
      const next = normalizeSave(slot.data);
      backupCurrent('载入前自动备份');
      state = next;
      saveNow();
      closeModal();
      closeRoster();
      closeVariants();
      renderPoster();
      renderRoster();
      renderVariants();
      toast('已加载「' + slot.name + '」');
    } catch (e) {
      toast('存档读取失败：' + e.message, true);
    }
  }
  function overwriteSaveSlot(id) {
    const slot = saves.find((s) => s.id === id);
    if (!slot) return;
    if (!confirm('用当前海报覆盖「' + slot.name + '」？')) return;
    slot.data = compactState(state);
    slot.updatedAt = new Date().toISOString();
    writeSaves();
    renderSaveManager();
    renderVariants();
    toast('已覆盖「' + slot.name + '」');
  }
  function deleteSaveSlot(id) {
    const slot = saves.find((s) => s.id === id);
    if (!slot) return;
    if (!confirm('删除存档「' + slot.name + '」？此操作不可撤销。')) return;
    backupCurrent('删除前自动备份');
    saves = saves.filter((s) => s.id !== id);
    writeSaves();
    renderSaveManager();
    renderVariants();
    toast('已删除存档');
  }
  function openSaveManager() {
    const cards = saves.length ? saves.map((s) => {
      const tag = s.auto ? '<span class="save-card-date">AUTO</span>' : '';
      return '<div class="save-card">' +
        '<div class="save-card-head"><span class="save-card-name">' + esc(s.name) + '</span><span class="save-card-date">' + tag + ' ' + stamp(s.updatedAt) + '</span></div>' +
        '<div class="save-card-avatars">' + saveAvatars(s.data) + '</div>' +
        '<div class="save-card-actions">' +
          '<button type="button" data-save-load="' + attr(s.id) + '">加载</button>' +
          '<button type="button" data-save-overwrite="' + attr(s.id) + '">覆盖</button>' +
          '<button type="button" class="danger" data-save-delete="' + attr(s.id) + '">删除</button>' +
        '</div>' +
      '</div>';
    }).join('') : '<div class="save-note">还没有手动存档。当前编辑会自动保存在本机；想留版本就保存一个。</div>';
    const body = '<div class="modal-body">' +
      '<div class="detail-kicker">DRAFTS / SAVES</div>' +
      '<h2 class="detail-name modal-title">存档</h2>' +
      '<p class="detail-note">当前草稿会自动保存；这里保存的是可命名、可覆盖、可删除的版本。载入前会先把当前内容放进「自动备份」。</p>' +
      '<div class="save-current"><input id="saveName" value="' + attr(state.meta.title || '未命名阵容') + '" placeholder="存档名" /><button class="btn btn-primary" type="button" data-save-new>保存当前</button></div>' +
      '<div class="save-list">' + cards + '</div>' +
    '</div>';
    openModal(body);
  }
  function renderSaveManager() { openSaveManager(); }
  function saveCurrentFromManager() {
    const input = $('#saveName');
    const slot = saveSlot(input ? input.value : '', null, false);
    if (slot) {
      renderSaveManager();
      renderVariants();
      toast('已保存「' + slot.name + '」');
    }
  }

  /* ------------------------------------------------------------
     New lineup
     ------------------------------------------------------------ */
  function newLineup(skipConfirm) {
    if (!skipConfirm && !confirm('新建空白阵容？当前内容会先放进「自动备份」。')) return;
    backupCurrent('新建前自动备份');
    const base = clone(DEFAULT_DATA);
    const blank = {
      ...base,
      schemaVersion: SCHEMA_VERSION,
      meta: { ...base.meta, title: '未命名阵容', subtitle: '自定义阵容', version: 'SP-00', rating: '-', tags: ['新阵容'], headerNote: '', author: base.meta.author, date: base.meta.date, difficulty: base.meta.difficulty, mode: base.meta.mode, disclaimer: base.meta.disclaimer, sources: base.meta.sources, credit: '模板 · 卫戍协议一图流' },
      operators: clone(state.operators),
      coreOperators: [],
      board: { cols: state.board?.cols || 8, rows: state.board?.rows || 4, placements: [] },
      bondLibrary: clone(state.bondLibrary),
      equipment: [],
      equipmentNotes: {},
      stages: (base.stages || []).map((s) => ({ ...s, recruit: [], lineup: [], lineupSource: s.id === 'boss' ? 'board' : 'manual', note: '' })),
      strategy: { main: '', alternatives: [], reason: '', posterText: {} },
      bench: []
    };
    state = blank;
    saveNow();
    renderPoster();
    renderRoster();
    renderVariants();
    closeVariants();
    closeEquipmentLibrary();
    openRoster();
    toast('已新建空白阵容：拖入干员后，点棋子右上角的 ☆ 加入右上角核心');
  }

  /* ------------------------------------------------------------
     Board size
     ------------------------------------------------------------ */
  const BOARD_MIN = { cols: 6, rows: 4 };
  const BOARD_MAX = { cols: 12, rows: 6 };
  function openBoardSize() {
    const b = state.board || { cols: 8, rows: 4 };
    openModal('<div class="modal-body">' +
      '<div class="detail-kicker">BOARD</div>' +
      '<h2 class="detail-name modal-title">棋盘大小</h2>' +
      '<p class="detail-note">按战场地图的格子数放大棋盘，方便实际落位；导出图会按新尺寸重排格子。缩小棋盘时，超出范围的棋子会被移除。</p>' +
      '<div class="board-size-row">' +
        '<label for="boardCols">列</label><input id="boardCols" type="number" min="' + BOARD_MIN.cols + '" max="' + BOARD_MAX.cols + '" value="' + (b.cols || 8) + '" />' +
        '<label for="boardRows">行</label><input id="boardRows" type="number" min="' + BOARD_MIN.rows + '" max="' + BOARD_MAX.rows + '" value="' + (b.rows || 4) + '" />' +
      '</div>' +
      '<div class="board-size-presets">' +
        [[8, 4], [10, 5], [12, 6]].map(([c, r]) => '<button class="btn btn-small" type="button" data-board-preset="' + c + 'x' + r + '">' + c + ' × ' + r + '</button>').join('') +
        '<button class="btn btn-small" type="button" data-board-open-maps>对照战场地图</button>' +
      '</div>' +
      '<p class="detail-note">范围：' + BOARD_MIN.cols + '–' + BOARD_MAX.cols + ' 列，' + BOARD_MIN.rows + '–' + BOARD_MAX.rows + ' 行。再大格子会太小，海报上看不清。</p>' +
      '<div class="form-actions"><button class="btn btn-primary" type="button" data-board-apply>应用</button></div>' +
    '</div>');
  }
  function applyBoardSize(cols, rows) {
    cols = Math.max(BOARD_MIN.cols, Math.min(BOARD_MAX.cols, Math.round(Number(cols) || 8)));
    rows = Math.max(BOARD_MIN.rows, Math.min(BOARD_MAX.rows, Math.round(Number(rows) || 4)));
    const b = state.board || { cols: 8, rows: 4, placements: [] };
    const kept = (b.placements || []).filter((p) => Number(p.col) < cols && Number(p.row) < rows);
    const removed = (b.placements || []).length - kept.length;
    state.board = { cols, rows, placements: kept };
    syncLineup();
    saveNow();
    closeModal();
    renderPoster();
    toast('棋盘已改为 ' + cols + ' × ' + rows + (removed ? '，' + removed + ' 个越界棋子已移除' : ''));
  }

  /* ------------------------------------------------------------
     Lineup sync
     ------------------------------------------------------------ */
  function equipCount(row) {
    return ['must', 'big', 'optional'].reduce((n, slot) => n + (Array.isArray(row?.[slot]) ? row[slot].length : 0), 0);
  }
  function canAddEquip(row) {
    return equipCount(row) < EQUIP_MAX;
  }
  function normalizeEquipmentRow(row) {
    if (!row || typeof row !== 'object') return row;
    let left = EQUIP_MAX;
    for (const slot of ['must', 'big', 'optional']) {
      const keys = Array.isArray(row[slot]) ? row[slot].filter(Boolean) : [];
      row[slot] = keys.slice(0, Math.max(0, left));
      left -= row[slot].length;
    }
    return row;
  }
  function normalizeEquipment(rows) {
    const out = [];
    let trimmed = false;
    for (const row of (rows || [])) {
      if (!row) continue;
      const before = equipCount(row);
      normalizeEquipmentRow(row);
      if (equipCount(row) < before) trimmed = true;
      out.push(row);
    }
    return { rows: out, trimmed };
  }

  function syncLineup() {
    const placements = state.board?.placements || [];
    const placedIds = placements.map((p) => p.operatorId).filter(hasOperator);
    // 右上角核心干员是显式选择的：上场不会自动收录，移出棋盘才会离开。
    const core = (state.coreOperators || []).filter((c) => placedIds.includes(c.operatorId));
    state.coreOperators = core;
    // 装备位保留已有 3 行；新上场的干员只在还有空位时补一行。
    // manual 行是手动换过干员的，即使那名干员没上场也留着，否则换完就被同步清掉。
    const nextEq = [];
    for (const row of (state.equipment || [])) {
      if (!row.operatorId) continue;
      if (!placedIds.includes(row.operatorId) && !row.manual) continue;
      if (nextEq.length >= 3) continue;
      if (nextEq.some((r) => r.operatorId === row.operatorId)) continue;
      nextEq.push(row);
    }
    for (const id of placedIds) {
      if (nextEq.length >= 3) break;
      if (!nextEq.some((r) => r.operatorId === id)) nextEq.push({ operatorId: id, must: [], big: [], optional: [] });
    }
    state.equipment = nextEq.map((row) => normalizeEquipmentRow(row));
  }

  function toggleCore(id, refreshModal) {
    if (!editMode || !hasOperator(id)) return;
    const onBoard = (state.board?.placements || []).some((p) => p.operatorId === id);
    const list = state.coreOperators || [];
    const idx = list.findIndex((c) => c.operatorId === id);
    if (idx >= 0) {
      list.splice(idx, 1);
      toast('已移出右上角');
    } else {
      if (!onBoard) { toast('先把干员放上棋盘，再加入右上角', true); return; }
      if (list.length >= 6) { toast('右上角最多 6 人，请先移出一个', true); return; }
      list.push({ operatorId: id, role: roleOf(id) });
      toast('已加入右上角');
    }
    state.coreOperators = list;
    saveNow();
    renderPoster();
    if (refreshModal && ($('.modal') || $('#detailDrawer')?.classList.contains('open'))) openDetail(id);
  }

  function boardSnapshot() {
    return {
      board: clone(state.board),
      coreOperators: clone(state.coreOperators || []),
      equipment: clone(state.equipment || [])
    };
  }
  function beginPendingPlacement(id, before, dir = '', verb = '放入') {
    pendingPlacement = { id, before, dir: dir ? normalizeFacing(dir) : '', ignoreUntil: Date.now() + 220 };
    directionDrag = null;
    suppressClickUntil = Date.now() + 200;
    document.body.classList.add('choosing-facing');
    const coach = $('#facingCoach');
    if (coach) {
      const name = op(id)?.name || '棋子';
      coach.innerHTML = '<b>已' + esc(verb) + ' ' + esc(name) + '</b><span>按住棋子向外拖动选择朝向，松手确定 · 点空白处撤销</span>';
    }
  }
  function cancelPendingPlacement(silent) {
    const p = pendingPlacement;
    if (!p) return;
    pendingPlacement = null;
    directionDrag = null;
    clearDropPreview();
    document.body.classList.remove('choosing-facing');
    if (p.before) {
      state.board = clone(p.before.board);
      state.coreOperators = clone(p.before.coreOperators);
      state.equipment = clone(p.before.equipment);
    }
    saveNow();
    renderPoster();
    renderRoster();
    renderVariants();
    if (!silent) {
      suppressClickUntil = Date.now() + 350;
      toast('已撤销放入');
    }
  }
  function commitPendingFacing(dir) {
    const p = pendingPlacement;
    if (!p) return;
    const placement = (state.board?.placements || []).find((x) => x.operatorId === p.id);
    if (!placement) { cancelPendingPlacement(true); return; }
    pendingPlacement = null;
    directionDrag = null;
    clearDropPreview();
    document.body.classList.remove('choosing-facing');
    placement.facing = normalizeFacing(dir);
    saveNow();
    renderPoster();
    renderRoster();
    renderVariants();
    suppressClickUntil = Date.now() + 350;
    toast('朝向：' + FACING_LABEL[normalizeFacing(dir)]);
  }

  function placeRoster(id, row, col, facing = '', previewDir = '', noPending = false) {
    if (!editMode || !hasOperator(id)) return;
    if (isGateCell(row, col)) { toast('门列不能部署干员', true); return; }
    if (pendingPlacement) cancelPendingPlacement(true);
    const before = boardSnapshot();
    const list = state.board.placements || [];
    const old = list.find((p) => p.operatorId === id);
    const target = list.find((p) => Number(p.row) === row && Number(p.col) === col);
    if (target && target.operatorId === id) { clearRosterSelection(); return; }
    // 电脑上放入后不再进入「按住向外拖选朝向」。新棋子默认朝右，点头像才转向。
    if (!mobileUI) noPending = true;
    let dir = facing ? normalizeFacing(facing) : (old ? normalizeFacing(old.facing) : '');
    if (!old && !dir) dir = 'right';
    if (target) {
      if (old && old !== target) state.board.placements = list.filter((p) => p !== old);
      target.operatorId = id;
      target.facing = dir;
    } else if (old) {
      old.row = row; old.col = col; old.facing = dir;
    } else {
      list.push({ operatorId: id, row, col, facing: dir });
    }
    syncLineup();
    if (!noPending) beginPendingPlacement(id, before, dir || previewDir);
    else if (!mobileUI) boardRangeId = id;
    clearRosterSelection();
    saveNow();
    renderPoster();
    renderRoster();
    renderVariants();
    if (op(id)?.inPool === false) toast('该干员不在当前规程池', true);
  }

  function removePlacement(id) {
    state.board.placements = (state.board.placements || []).filter((p) => p.operatorId !== id);
    syncLineup();
    saveNow();
    renderPoster();
    renderRoster();
    renderVariants();
    toast('已移出棋盘');
  }

  function clearBoard() {
    if (!editMode) return;
    if (pendingPlacement) cancelPendingPlacement(true);
    const n = (state.board?.placements || []).length;
    if (!n) { toast('棋盘已经是空的'); return; }
    state.board.placements = [];
    boardRangeId = null;
    clearRosterSelection();
    syncLineup();
    saveNow();
    renderPoster();
    renderRoster();
    renderVariants();
    toast('棋盘已清空，备战区还在。Ctrl+Z 可撤销');
  }

  /* ------------------------------------------------------------
     Left roster drawer
     ------------------------------------------------------------ */
  function openRoster() {
    if (!editMode) return;
    closeDetailDrawer();
    const drawer = $('#rosterDrawer');
    if (!drawer) return;
    if (window.innerWidth <= 1100 && !$('#equipmentDrawer')?.hidden) closeEquipmentLibrary();
    drawer.hidden = false;
    document.body.classList.add('roster-open');
    $('#rosterBtn')?.setAttribute('aria-expanded', 'true');
    renderRoster();
    fitPoster();
  }
  function closeRoster() {
    const drawer = $('#rosterDrawer');
    if (!drawer) return;
    drawer.hidden = true;
    document.body.classList.remove('roster-open');
    $('#rosterBtn')?.setAttribute('aria-expanded', 'false');
    clearRosterSelection();
    fitPoster();
  }
  function clearRosterSelection() {
    selectedRosterId = null;
    document.body.classList.remove('roster-selecting');
    $$('.roster-item.selected').forEach((el) => el.classList.remove('selected'));
    $$('.variant-op.selected').forEach((el) => el.classList.remove('selected'));
  }
  function selectRoster(id) {
    selectedRosterId = id;
    document.body.classList.add('roster-selecting');
    $$('.roster-item').forEach((el) => el.classList.toggle('selected', el.dataset.rosterId === id));
    $$('.variant-op').forEach((el) => el.classList.toggle('selected', el.dataset.rosterId === id));
    toast('已选中「' + (op(id)?.name || id) + '」：点棋盘格子放置');
    if (window.innerWidth <= 1100) {
      const roster = $('#rosterDrawer');
      const variant = $('#variantDrawer');
      const equip = $('#equipmentDrawer');
      if (roster) roster.hidden = true;
      if (variant) variant.hidden = true;
      if (equip) equip.hidden = true;
      document.body.classList.remove('roster-open', 'variant-open', 'equipment-open');
      $('#rosterBtn')?.setAttribute('aria-expanded', 'false');
      $('#variantBtn')?.setAttribute('aria-expanded', 'false');
      $('#equipmentBtn')?.setAttribute('aria-expanded', 'false');
      fitPoster();
    }
  }
  function rosterFilterChip(group, value, label, active) {
    return '<button class="rf-chip' + (active ? ' on' : '') + '" type="button" data-rf-group="' + group + '" data-rf-value="' + attr(value) + '">' + esc(label) + '</button>';
  }
  function rosterFilterGroup(label, chips) {
    return '<div class="rf-group"><span class="rf-label">' + label + '</span><div class="rf-chips">' + chips + '</div></div>';
  }
  // PC 端筛选区四组 chip 会占掉 400px，允许收起；偏好记在本机。
  const FILTERS_OPEN_KEY = 'sp-guide-filters-open-v1';
  let rosterFiltersCollapsed = null;
  function filtersCollapsed() {
    if (rosterFiltersCollapsed === null) {
      try { rosterFiltersCollapsed = localStorage.getItem(FILTERS_OPEN_KEY) === '0'; } catch (e) { rosterFiltersCollapsed = false; }
    }
    return rosterFiltersCollapsed;
  }
  function setFiltersCollapsed(value) {
    rosterFiltersCollapsed = !!value;
    try { localStorage.setItem(FILTERS_OPEN_KEY, value ? '0' : '1'); } catch (e) { /* private mode */ }
  }
  function renderRosterFilters() {
    const box = $('#rosterFilters');
    if (!box) return;
    const ops = Object.values(state.operators || {});
    const bonds = currentBondEntries();
    const coreBonds = bonds.filter(([id]) => isCoreBond(id));
    const extraBonds = bonds.filter(([id]) => !isCoreBond(id));
    const triggerCounts = TRIGGER_DEFS.map((t) => ({ ...t, count: ops.filter((o) => t.re.test(operatorTraitText(o))).length })).filter((t) => t.count > 0);
    const kinds = TRAIT_KINDS.filter((k) => ops.some((o) => traitKinds(o).includes(k)));
    const tiers = TIER_ORDER.filter((t) => ops.some((o) => operatorTier(o) === t));
    const active = [];
    for (const t of rosterFilter.tier) active.push({ group: 'tier', value: t, label: '等阶 ' + t });
    for (const t of rosterFilter.trigger) { const def = TRIGGER_DEFS.find((x) => x.id === t); if (def) active.push({ group: 'trigger', value: t, label: def.label }); }
    for (const k of rosterFilter.kind) active.push({ group: 'kind', value: k, label: k });
    for (const id of rosterFilter.bond) active.push({ group: 'bond', value: id, label: state.bondLibrary?.[id]?.name || id });
    box.innerHTML =
      '<div class="rf-head">' +
        '<input class="roster-search" id="rosterSearch" placeholder="搜索干员 / 拼音" value="' + attr(rosterFilter.q) + '" />' +
        '<button class="rf-toggle" type="button" data-rf-toggle aria-expanded="' + (filtersCollapsed() ? 'false' : 'true') + '">' + (filtersCollapsed() ? '展开筛选' : '收起筛选') + '</button>' +
      '</div>' +
      '<div class="rf-body"' + (filtersCollapsed() ? ' hidden' : '') + '>' +
      rosterFilterGroup('等阶', rosterFilterChip('tier', 'all', '全部', rosterFilter.tier.size === 0) + tiers.map((t) => rosterFilterChip('tier', t, t, rosterFilter.tier.has(t))).join('')) +
      rosterFilterGroup('特质', rosterFilterChip('kind', 'all', '全部', rosterFilter.kind.size === 0) + kinds.map((k) => rosterFilterChip('kind', k, k, rosterFilter.kind.has(k))).join('')) +
      rosterFilterGroup('触发', rosterFilterChip('trigger', 'all', '全部', rosterFilter.trigger.size === 0) + triggerCounts.map((t) => rosterFilterChip('trigger', t.id, t.label, rosterFilter.trigger.has(t.id))).join('')) +
      rosterFilterGroup('核心盟约', coreBonds.map(([id, b]) => rosterFilterChip('bond', id, b.name, rosterFilter.bond.has(id))).join('')) +
      rosterFilterGroup('附加盟约', extraBonds.map(([id, b]) => rosterFilterChip('bond', id, b.name, rosterFilter.bond.has(id))).join('')) +
      '<div class="rf-active"><div class="rf-active-chips">' +
        (active.length ? active.map((a) => '<button class="rf-active-chip" type="button" data-rf-remove="' + a.group + '" data-rf-value="' + attr(a.value) + '">' + esc(a.label) + ' <b>×</b></button>').join('') : '<span class="rf-active-empty">未筛选</span>') +
      '</div><button class="rf-clear" type="button" data-rf-clear>清除全部</button></div>' +
      '</div>' +
      '<div class="rf-count" id="rosterCount"></div>';
  }
  function desktopFilterChoices() {
    const ops = Object.values(state.operators || {});
    const triggers = TRIGGER_DEFS.filter((t) => ops.some((o) => t.re.test(operatorTraitText(o))));
    const kinds = TRAIT_KINDS.filter((k) => ops.some((o) => traitKinds(o).includes(k)));
    const tiers = TIER_ORDER.filter((t) => ops.some((o) => operatorTier(o) === t));
    const bonds = currentBondEntries();
    return { ops, triggers, kinds, tiers, bonds };
  }

  function desktopSelectedOptions(choices) {
    const selected = [];
    let index = 0;
    const add = (label, test) => selected.push({ index: index++, label, test });
    for (const t of choices.tiers) if (rosterFilter.tier.has(t)) add('等阶 ' + t, operatorTierTest(t));
    for (const t of choices.triggers) if (rosterFilter.trigger.has(t.id)) add(t.label, (o) => operatorTriggers(o).includes(t.id));
    for (const k of choices.kinds) if (rosterFilter.kind.has(k)) add(k, (o) => traitKinds(o).includes(k));
    for (const id of rosterFilter.bond) add(state.bondLibrary?.[id]?.name || id, (o) => (o.bonds || []).includes(id));
    return selected;
  }

  /* 干员栏只保留头像 + 名字，下面直接摊开盟约与基础特质：
     这是玩家看卡时最先要判断的信息，不再藏进详情弹层。 */
  const TRAIT_KIND_CLASS = {
    '持续叠加': 'kind-stack',
    '单次叠加': 'kind-once',
    '作战能力': 'kind-battle',
    '整备能力': 'kind-prep',
    '特异化': 'kind-special'
  };
  function rosterBondHtml(id) {
    const b = bond(id);
    if (!b) return '';
    const core = isCoreBond(id);
    const effectText = (b.effects || []).map((e) => e.need + '：' + e.text).join('\n') || b.summary || '';
    return '<span class="roster-bond' + (core ? ' core' : ' extra') + '" title="' + attr((core ? '核心盟约' : '附加盟约') + '：' + b.name + (effectText ? '\n' + effectText : '')) + '">' +
      '<img src="' + attr(bondIcon(id)) + '" alt="" draggable="false" />' +
      '<span class="roster-bond-name">' + esc(b.name) + '</span>' +
    '</span>';
  }
  function rosterBondList(o) {
    const bonds = (o.bonds || []).filter((id) => bond(id));
    return bonds.filter((id) => isCoreBond(id)).concat(bonds.filter((id) => !isCoreBond(id)));
  }
  function rosterTraitHtml(o) {
    const raw = String(o?.trait || '').trim();
    if (!raw) return '<span class="roster-trait empty">资料库未收录基础特质</span>';
    const kind = TRAIT_KINDS.find((k) => raw.startsWith(k)) || '';
    const body = kind ? raw.slice(kind.length).trim() : raw;
    return '<span class="roster-trait" title="' + attr('基础特质：' + raw) + '">' +
      (kind ? '<span class="roster-trait-kind ' + (TRAIT_KIND_CLASS[kind] || '') + '">' + esc(kind) + '</span>' : '') +
      rich(body) +
    '</span>';
  }
  function rosterItemHtml(o) {
    const ordered = rosterBondList(o);
    return '<div class="roster-item' + (selectedRosterId === o.id ? ' selected' : '') + '" draggable="true" data-roster-id="' + attr(o.id) + '" data-name="' + attr(o.name) + '" data-prof="' + attr(o.profession || '') + '" data-rarity="' + attr(String(o.rarity ?? '')) + '" data-triggers="' + attr(operatorTriggers(o).join(',')) + '" data-tier="' + esc(o.tier) + '" data-bonds="' + attr((o.bonds || []).join(',')) + '" title="拖到棋盘放置；双击直接放入棋盘" ' + avatarStyle(o, { rarity: true }) + '>' +
      '<img class="roster-avatar" src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" />' +
      '<div class="roster-main">' +
        '<div class="roster-head"><span class="roster-name">' + esc(o.name) + '</span>' +
          ordered.map(rosterBondHtml).join('') +
        '</div>' +
        rosterTraitHtml(o) +
      '</div>' +
    '</div>';
  }

  function renderRosterList() {
    const list = $('#rosterList');
    if (!list) return;
    const choices = desktopFilterChoices();
    const q = String(rosterFilter.q || '').trim().toLowerCase();
    const ops = choices.ops.filter((o) => operatorMatchesQuery(o, q));
    const selected = desktopSelectedOptions(choices);
    const groups = buildMatchGroups(ops, selected);
    for (const g of groups) g.ops.sort(operatorSort);
    if (!groups.length) {
      list.innerHTML = '<div class="roster-empty">没有符合条件的干员</div>';
    } else {
      list.innerHTML = groups.map((g) =>
        '<section class="roster-group"><div class="roster-group-head"><b>' + esc(g.label) + '</b><span>' + g.ops.length + ' 人</span></div>' +
          '<div class="roster-group-items">' + g.ops.map(rosterItemHtml).join('') + '</div>' +
        '</section>').join('');
    }
    const unique = uniqueOps(groups);
    const count = $('#rosterCount');
    if (count) count.textContent = selected.length
      ? '筛选结果 ' + unique + ' 位干员 · 全库 ' + choices.ops.length + ' 位'
      : '全部 ' + unique + ' 位干员 · 全库 ' + choices.ops.length + ' 位';
  }

  function filterRoster() {
    renderRosterList();
  }
  function renderRoster() {
    const list = $('#rosterList');
    if (!list) return;
    renderRosterFilters();
    renderRosterList();
  }

  /* ------------------------------------------------------------
     Right variants drawer
     ------------------------------------------------------------ */
  function openVariants() {
    if (!editMode) return;
    closeDetailDrawer();
    const drawer = $('#variantDrawer');
    if (!drawer) return;
    if (!$('#equipmentDrawer')?.hidden) closeEquipmentLibrary();
    drawer.hidden = false;
    document.body.classList.add('variant-open');
    $('#variantBtn')?.setAttribute('aria-expanded', 'true');
    renderVariants();
    fitPoster();
  }
  function closeVariants() {
    const drawer = $('#variantDrawer');
    if (!drawer) return;
    drawer.hidden = true;
    document.body.classList.remove('variant-open');
    $('#variantBtn')?.setAttribute('aria-expanded', 'false');
    fitPoster();
  }
  function renderVariants() {
    const box = $('#variantBody');
    if (!box) return;
    const placed = new Set((state.board?.placements || []).map((p) => p.operatorId));
    const unplaced = Object.values(state.operators || {}).filter((o) => !placed.has(o.id))
      .sort((a, b) => (Number(b.bench) - Number(a.bench)) || (tierNumber(a) - tierNumber(b)) || a.name.localeCompare(b.name, 'zh'));
    const unplacedHtml = unplaced.length ? unplaced.map((o) => '<div class="variant-op' + (selectedRosterId === o.id ? ' selected' : '') + '" draggable="true" data-roster-id="' + attr(o.id) + '" title="' + attr(o.name) + '"><img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" ' + avatarStyle(o, { rarity: true }) + ' /><span>' + esc(o.name) + '</span></div>').join('') : '<div class="variant-empty">所有干员都已上场</div>';
    box.innerHTML =
      '<div class="variant-section"><div class="variant-title"><span>未上场干员</span><span class="count">' + unplaced.length + '</span></div><div class="variant-list">' + unplacedHtml + '</div></div>';
  }

  /* ------------------------------------------------------------
     Right equipment library drawer + 拾取器：地图 / 阶段 / 装备
     ------------------------------------------------------------ */
  function equipmentUses(key) {
    const uses = [];
    for (const row of (state.equipment || [])) {
      for (const slot of ['must', 'big', 'optional']) {
        if ((row[slot] || []).includes(key)) uses.push({ row, slot });
      }
    }
    return uses;
  }
  function openEquipmentLibrary() {
    if (!editMode) return;
    closeDetailDrawer();
    const drawer = $('#equipmentDrawer');
    if (!drawer) return;
    if (window.innerWidth <= 1100 && !$('#rosterDrawer')?.hidden) closeRoster();
    closeVariants();
    drawer.hidden = false;
    document.body.classList.add('equipment-open');
    $('#equipmentBtn')?.setAttribute('aria-expanded', 'true');
    if (!equipmentDetailKey) equipmentDetailKey = Object.keys(ITEM_META).sort((a, b) => ITEM_META[a].localeCompare(ITEM_META[b], 'zh'))[0] || '';
    renderEquipmentLibrary();
    fitPoster();
  }
  function closeEquipmentLibrary() {
    const drawer = $('#equipmentDrawer');
    if (!drawer) return;
    drawer.hidden = true;
    document.body.classList.remove('equipment-open');
    $('#equipmentBtn')?.setAttribute('aria-expanded', 'false');
    fitPoster();
  }
  function renderEquipmentLibrary() {
    const list = $('#equipmentList');
    if (!list) return;
    const q = equipmentQuery.trim().toLowerCase();
    const keys = Object.keys(ITEM_META)
      .filter((k) => !q || (ITEM_META[k] + ' ' + k).toLowerCase().includes(q))
      .sort((a, b) => ITEM_META[a].localeCompare(ITEM_META[b], 'zh'));
    list.innerHTML = keys.map((key) => {
      const uses = equipmentUses(key);
      const chips = uses.slice(0, 4).map(({ row }) => {
        const o = op(row.operatorId);
        return o ? '<img src="' + avatarSrc(o.avatar) + '" alt="" title="' + attr(o.name) + '" draggable="false" />' : '';
      }).join('');
      return '<div class="equipment-card' + (key === equipmentDetailKey ? ' selected' : '') + '" draggable="true" data-item-key="' + attr(key) + '" title="' + attr(ITEM_META[key] + '：拖到装备格') + '">' +
        '<img src="' + itemSrc(key) + '" alt="" draggable="false" />' +
        '<b>' + esc(ITEM_META[key]) + '</b>' +
        '<span class="usage">' + (uses.length ? chips + '<em>' + uses.length + ' 处</em>' : '未使用') + '</span>' +
      '</div>';
    }).join('') || '<div class="roster-empty">没有匹配的装备</div>';
    renderEquipmentDetail();
  }
  function equipmentDetailHtml(key) {
    if (!key || !ITEM_META[key]) return '<div class="equip-detail-empty">点装备查看名称与效果</div>';
    const eff = equipmentEffect(key) || {};
    const uses = equipmentUses(key);
    return '<div class="equip-detail-head">' +
        '<img src="' + itemSrc(key) + '" alt="" draggable="false" />' +
        '<div><h3>' + esc(ITEM_META[key]) + '</h3><span>装备 · ' + esc(key) + '</span></div>' +
      '</div>' +
      (eff.base ? '<div class="equip-effect"><b>基础效果</b><p>' + esc(eff.base) + '</p></div>' : '') +
      (eff.advanced ? '<div class="equip-effect"><b>进阶效果</b><p>' + esc(eff.advanced) + '</p></div>' : '') +
      '<p class="equip-detail-source">当前 ' + uses.length + ' 处装备 · 数据：可露希尔Wiki</p>';
  }
  function renderEquipmentDetail() {
    const box = $('#equipmentDetail');
    if (!box) return;
    box.innerHTML = equipmentDetailHtml(equipmentDetailKey);
    $$('.equipment-card').forEach((el) => el.classList.toggle('selected', el.dataset.itemKey === equipmentDetailKey));
  }
  function selectEquipmentDetail(key) {
    if (!ITEM_META[key]) return;
    equipmentDetailKey = key;
    renderEquipmentDetail();
  }
  function openEquipmentDetail(key) {
    if (!ITEM_META[key]) return;
    equipmentDetailKey = key;
    openEquipmentLibrary();
    selectEquipmentDetail(key);
  }
  function assignEquipmentItem(opId, slot, index, key) {
    if ((!editMode && !flowOpen) || !ITEM_META[key] || !['must', 'big', 'optional'].includes(slot)) return;
    let row = (state.equipment || []).find((e) => e.operatorId === opId);
    if (!row) {
      row = { operatorId: opId, must: [], big: [], optional: [] };
      state.equipment = state.equipment || [];
      state.equipment.push(row);
    }
    if (!Array.isArray(row[slot])) row[slot] = [];
    if (index === null || index === undefined) {
      if (!canAddEquip(row)) { toast('每名干员最多装备 2 件', true); return; }
      if (row[slot].includes(key)) { toast('该列已经有这件装备', true); return; }
      row[slot].push(key);
    } else {
      const at = row[slot].indexOf(key);
      if (at >= 0 && at !== index) { toast('该列已经有这件装备', true); return; }
      row[slot][index] = key;
    }
    saveNow();
    renderPoster();
    renderEquipmentLibrary();
    if (flowOpen) renderFlow();
    toast('装备已更新');
  }

  /* 装备区的「⇄」换的是这一行归谁用，不是改干员资料。
     棋盘只自动分配前 3 名上场干员，手动换过之后这一行会固定住（manual）。 */
  let equipSwapRow = null;
  function openEquipSwap(rowIndex) {
    if (!editMode) return;
    const rows = state.equipment || [];
    if (!rows[rowIndex]) return;
    equipSwapRow = rowIndex;
    const currentId = rows[rowIndex].operatorId;
    const boardIds = [...(state.board?.placements || [])].sort((a, b) => (a.row - b.row) || (a.col - b.col)).map((p) => p.operatorId);
    const placed = new Set(boardIds);
    const btn = (o) => {
      const onRow = rows.some((r) => r.operatorId === o.id);
      return '<button class="stage-pick' + (o.id === currentId ? ' on' : '') + '" type="button" data-equip-pick="' + attr(o.id) + '" title="' + attr(o.name + (onRow ? '（已在装备区）' : '')) + '" ' + avatarStyle(o, { rarity: true }) + '><img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" /><span>' + esc(o.name) + '</span></button>';
    };
    const boardHtml = boardIds.length ? boardIds.map((id) => op(id)).filter(Boolean).map(btn).join('') : '<div class="stage-pick-empty">棋盘上还没有干员</div>';
    const rest = Object.values(state.operators || {}).filter((o) => !placed.has(o.id)).sort((a, b) => a.name.localeCompare(b.name, 'zh'));
    const restHtml = rest.map(btn).join('');
    const body = modalShell({
      kicker: 'EQUIP / 更换干员',
      title: '这一行给谁用',
      note: '当前：' + esc(op(currentId)?.name || currentId) + '。换人后这一行固定给新干员，棋盘再变动也不会被自动顶掉；原有装备会清空。',
      body: '<section class="stage-pick-group"><h4>棋盘阵容</h4><div class="stage-pick-grid">' + boardHtml + '</div></section>' +
        '<details class="stage-pick-group"><summary>全部干员</summary><div class="stage-pick-grid">' + restHtml + '</div></details>',
      actions: '<button class="btn" type="button" data-close>取消</button>',
    });
    openModal(body);
  }
  function swapEquipmentOperator(rowIndex, id) {
    if (!hasOperator(id)) return;
    const rows = state.equipment || [];
    const row = rows[rowIndex];
    if (!row) return;
    const other = rows.findIndex((r, i) => i !== rowIndex && r.operatorId === id);
    if (other >= 0) {
      // 目标已经在别的行：整行互换，各自的装备跟着人走
      const tmp = rows[rowIndex];
      rows[rowIndex] = rows[other];
      rows[other] = tmp;
      rows[rowIndex].manual = true;
      rows[other].manual = true;
      toast('已交换装备区的两位干员');
    } else {
      rows[rowIndex] = { operatorId: id, must: [], big: [], optional: [], manual: true };
      toast('装备区已换成「' + (op(id)?.name || id) + '」');
    }
    state.equipment = rows;
    equipSwapRow = null;
    saveNow();
    closeModal();
    renderPoster();
    renderRoster();
    renderVariants();
  }
  function pickEquipOperator(id) {
    if (equipSwapRow === null) return;
    swapEquipmentOperator(equipSwapRow, id);
  }
  /* 手机端同一套语义：全屏 sheet 里选人，选完这一行就固定给新干员。 */
  function openMobileEquipSwap(rowIndex) {
    if (!editMode) return;
    const rows = state.equipment || [];
    if (!rows[rowIndex]) return;
    equipSwapRow = rowIndex;
    const currentId = rows[rowIndex].operatorId;
    const boardIds = [...(state.board?.placements || [])].sort((a, b) => (a.row - b.row) || (a.col - b.col)).map((p) => p.operatorId);
    const placed = new Set(boardIds);
    const cell = (o) => {
      const onRow = rows.some((r) => r.operatorId === o.id);
      return '<button class="mr-equip-pick' + (o.id === currentId ? ' on' : '') + '" type="button" data-mr-equip-pick="' + attr(o.id) + '" ' + avatarStyle(o, { rarity: true }) + ' aria-label="' + attr(o.name) + '">' +
        '<img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" />' +
        '<span>' + esc(o.name) + '</span>' +
        (onRow ? '<i>已在装备区</i>' : '') +
      '</button>';
    };
    const boardHtml = boardIds.length ? boardIds.map((id) => op(id)).filter(Boolean).map(cell).join('') : '<p class="mr-note">棋盘上还没有干员</p>';
    const rest = Object.values(state.operators || {}).filter((o) => !placed.has(o.id)).sort((a, b) => a.name.localeCompare(b.name, 'zh'));
    const body = modalShell({
      kicker: 'EQUIP / 更换干员',
      title: '这一行给谁用',
      note: '当前：' + esc(op(currentId)?.name || currentId) + '。换人后这一行固定给新干员，棋盘再变动也不会被顶掉；原有装备会清空。',
      body: '<section class="stage-pick-group"><h4>棋盘阵容</h4><div class="mr-equip-pick-grid">' + boardHtml + '</div></section>' +
        '<details class="stage-pick-group"><summary>全部干员</summary><div class="mr-equip-pick-grid">' + rest.map(cell).join('') + '</div></details>',
      actions: '<button class="btn" type="button" data-close>取消</button>',
    });
    openModal(body);
  }

  const MAP_DATA = window.SP_MAPS || { maps: [], missing: [] };
  const MAP_EMBED = window.SP_MAPS_EMBED || {};
  const mapSrc = (name) => MAP_EMBED[name] || ('assets/maps/' + name);
  const MAP_ATLAS = window.SP_MAPS_ATLAS || 'docs/maps-atlas.webp';
  const HAS_ATLAS = !window.SP_SINGLE_FILE || !!window.SP_MAPS_ATLAS;
  let mapSelectedId = '01';
  function mapById(id) {
    return (MAP_DATA.maps || []).find((m) => m.id === id) || null;
  }
  function openMaps(mapId, fieldIndex) {
    if (!MAP_DATA.maps?.length) { toast('地图数据未加载', true); return; }
    const current = mapById(mapId) || MAP_DATA.maps[0];
    mapSelectedId = current.id;
    const field = Math.max(0, Math.min(Number(fieldIndex) || 0, current.fields.length - 1));
    const allIds = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
    const mapTabs = allIds.map((id) => {
      const m = mapById(id);
      if (!m) return '<button class="map-tab missing" type="button" disabled>' + '#' + id + '</button>';
      return '<button class="map-tab' + (m.id === current.id ? ' on' : '') + '" type="button" data-map-id="' + attr(m.id) + '">' + esc(m.label) + '</button>';
    }).join('');
    const fieldTabs = current.fields.map((f, i) =>
      '<button class="map-field' + (i === field ? ' on' : '') + '" type="button" data-map-field="' + i + '">场地 ' + (i + 1) + '</button>').join('');
    const notes = (current.notes || []).map((n) => '<li>' + esc(n) + '</li>').join('');
    const body = '<div class="modal-body map-modal">' +
      '<div class="detail-kicker">MAP / BATTLEFIELD</div>' +
      '<h2 class="detail-name modal-title">战场地图一览</h2>' +
      '<p class="detail-note">PRTS 当前收录 #01-#06、#09-#12；#07 / #08 缺失。地图专属站位需要按实际地形自行落位，这里不伪造；本套 8 人通用站位见海报棋盘。</p>' +
      '<div class="map-layout">' +
        '<div class="map-list">' + mapTabs + '</div>' +
        '<div class="map-preview">' +
          '<div class="map-field-tabs">' + fieldTabs + '</div>' +
          '<img src="' + attr(mapSrc(current.fields[field])) + '" alt="' + attr('战场 ' + current.label + ' 场地 ' + (field + 1)) + '" draggable="false" />' +
          '<div class="map-info">' +
            '<div class="map-info-head"><b>' + esc(current.label) + ' · 场地 ' + (field + 1) + '</b>' + (HAS_ATLAS ? '<a class="map-atlas-link" href="' + attr(MAP_ATLAS) + '" target="_blank" rel="noreferrer" download>打开/下载地图长图</a>' : '<span class="map-atlas-link muted">单文件版不含拼接长图</span>') + '</div>' +
            (notes ? '<ul>' + notes + '</ul>' : '') +
            (current.devices ? '<p><b>地图装置</b>：' + esc(current.devices) + '</p>' : '') +
            (current.special ? '<p><b>特殊地形</b>：' + esc(current.special) + '</p>' : '') +
            '<p class="detail-note">地图图片与说明来源：<a href="' + attr(MAP_DATA.source) + '" target="_blank" rel="noreferrer">' + esc(MAP_DATA.sourceName || 'PRTS') + '</a></p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
    openModal(body, true);
  }

  let stagePickerCtx = null;
  function openStagePicker(stageIndex, kind, slot) {
    const stage = state.stages?.[stageIndex];
    if (!stage) return;
    stagePickerCtx = { stageIndex, kind, slot };
    const boardIds = [...(state.board?.placements || [])].sort((a, b) => (a.row - b.row) || (a.col - b.col)).map((p) => p.operatorId);
    const placed = new Set(boardIds);
    const unplaced = Object.values(state.operators || {}).filter((o) => !placed.has(o.id)).sort((a, b) => (Number(b.bench) - Number(a.bench)) || a.name.localeCompare(b.name, 'zh'));
    const btn = (o) => '<button class="stage-pick" type="button" data-stage-pick="' + attr(o.id) + '" title="' + attr(o.name) + '" ' + avatarStyle(o, { rarity: true }) + '><img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" /><span>' + esc(o.name) + '</span></button>';
    const boardHtml = boardIds.length ? boardIds.map((id) => op(id)).filter(Boolean).map(btn).join('') : '<div class="stage-pick-empty">棋盘上还没有干员</div>';
    const unplacedHtml = unplaced.length ? unplaced.map(btn).join('') : '<div class="stage-pick-empty">所有干员都已上场</div>';
    const all = Object.values(state.operators || {}).sort((a, b) => a.name.localeCompare(b.name, 'zh'));
    const allHtml = all.map(btn).join('');
    const title = kind === 'recruit' ? '抓取顺序' : '阵容';
    const body = '<div class="modal-body">' +
      '<div class="detail-kicker">STAGE / ' + esc(stage.label) + ' / ' + title + '</div>' +
      '<h2 class="detail-name modal-title">选择干员</h2>' +
      '<p class="detail-note">优先从棋盘阵容里选；备选和全部干员用于过渡。' + (slot !== null && slot !== undefined ? ' 当前为替换。' : ' 当前为新增。') + '</p>' +
      '<section class="stage-pick-group"><h4>棋盘阵容</h4><div class="stage-pick-grid">' + boardHtml + '</div></section>' +
      '<section class="stage-pick-group"><h4>备选 / 未上场</h4><div class="stage-pick-grid">' + unplacedHtml + '</div></section>' +
      '<details class="stage-pick-group"><summary>全部干员</summary><div class="stage-pick-grid">' + allHtml + '</div></details>' +
      '<div class="form-actions"><button class="btn" type="button" data-close>取消</button></div>' +
    '</div>';
    openModal(body);
  }
  function assignStage(stageIndex, kind, id, slot) {
    const s = state.stages?.[stageIndex];
    if (!s || !hasOperator(id)) {
      if (id) toast('这个干员不在当前资料库，未加入阶段', true);
      return;
    }
    if (kind === 'lineup' && s.id === 'boss' && s.lineupSource === 'board') {
      s.lineup = stageIds(s);
      s.lineupSource = 'manual';
    }
    if (!Array.isArray(s[kind])) s[kind] = [];
    const existing = s[kind].indexOf(id);
    if (existing >= 0 && (slot === null || slot === undefined || existing !== slot)) {
      toast('该阶段已经有这个干员了', true);
      return;
    }
    if (slot === null || slot === undefined) {
      if (s[kind].length >= 9) { toast('每行最多 9 个头像', true); return; }
      s[kind].push(id);
    } else {
      s[kind][slot] = id;
    }
    saveNow(); closeModal(); renderPoster(); renderVariants(); renderRoster(); toast('阶段已更新');
  }
  function removeStageOperator(stageIndex, slot) {
    const s = state.stages?.[stageIndex];
    if (!s) return;
    if (s.id === 'boss' && s.lineupSource === 'board') {
      s.lineup = stageIds(s);
      s.lineupSource = 'manual';
    }
    if (!Array.isArray(s.lineup)) return;
    const i = Number(slot);
    if (!Number.isInteger(i) || i < 0 || i >= s.lineup.length) return;
    s.lineup.splice(i, 1);
    saveNow(); renderPoster(); renderVariants(); renderRoster();
    toast('已从阶段移除');
  }
  function pickStageOperator(id) {
    if (!stagePickerCtx) return;
    assignStage(stagePickerCtx.stageIndex, stagePickerCtx.kind, id, stagePickerCtx.slot);
    stagePickerCtx = null;
  }
  function fillStage(i) {
    const s = state.stages?.[i];
    if (!s) return;
    const ids = [...(state.board?.placements || [])].sort((a, b) => (a.row - b.row) || (a.col - b.col)).map((p) => p.operatorId).slice(0, 9);
    if (!ids.length) { toast('棋盘上还没有干员', true); return; }
    s.lineup = ids;
    s.lineupSource = 'manual';
    saveNow(); renderPoster(); toast('已从棋盘填入' + (ids.length === 9 ? '前 9 人' : ''));
  }
  function restoreStage(i) {
    const s = state.stages?.[i];
    if (!s) return;
    s.lineupSource = 'board';
    saveNow(); renderPoster(); toast('已恢复棋盘联动');
  }

  let pickerCtx = null;
  function renderItemPickerDetail() {
    const box = $('#itemPickerDetail');
    if (box) box.innerHTML = equipmentDetailHtml(itemPickerPreview);
    $$('.picker-item').forEach((el) => el.classList.toggle('selected', el.dataset.pickItem === itemPickerPreview));
  }
  function previewItem(key) {
    if (!ITEM_META[key]) return;
    itemPickerPreview = key;
    renderItemPickerDetail();
  }
  function openItemPicker(opId, slot, index) {
    let row = (state.equipment || []).find((e) => e.operatorId === opId);
    if (!row) {
      row = { operatorId: opId, must: [], big: [], optional: [] };
      state.equipment = state.equipment || [];
      state.equipment.push(row);
    }
    if ((index === null || index === undefined) && !canAddEquip(row)) {
      toast('每名干员最多装备 2 件', true);
      return;
    }
    pickerCtx = { type: 'item', opId, slot, index };
    const keys = Object.keys(ITEM_META);
    itemPickerPreview = (index !== null && index !== undefined && row[slot]?.[index]) || keys[0];
    const grid = keys.map((key) =>
      '<button class="picker-item' + (key === itemPickerPreview ? ' selected' : '') + '" type="button" data-pick-item="' + attr(key) + '" title="' + attr(item(key)) + '"><img src="' + itemSrc(key) + '" alt="" draggable="false" /><span class="name">' + esc(item(key)) + '</span></button>').join('');
    const clear = index !== null && index !== undefined && row[slot]?.[index]
      ? '<button class="btn btn-small btn-danger" type="button" data-pick-clear>清空此格</button>' : '';
    const body = '<div class="modal-body">' +
      '<div class="detail-kicker">EQUIP / PICK</div>' +
      '<h2 class="detail-name modal-title">选择装备</h2>' +
      '<p class="detail-note">' + esc(op(opId)?.name || opId) + ' · ' + equipSlotLabel(slot) + ' · 点图标看右侧效果</p>' +
      '<div class="equip-picker-layout">' +
        '<div class="picker-grid">' + grid + '</div>' +
        '<aside class="equip-picker-detail" id="itemPickerDetail"></aside>' +
      '</div>' +
      '<div class="form-actions" style="justify-content:space-between">' + clear + '<span class="equip-picker-actions"><button class="btn" type="button" data-close>取消</button><button class="btn btn-primary" type="button" data-pick-confirm>装备到此格</button></span></div>' +
    '</div>';
    openModal(body, true);
    renderItemPickerDetail();
  }

  function pickItem(key) {
    if (!pickerCtx || pickerCtx.type !== 'item' || !ITEM_META[key]) return;
    const row = (state.equipment || []).find((e) => e.operatorId === pickerCtx.opId);
    if (!row) return;
    if (!Array.isArray(row[pickerCtx.slot])) row[pickerCtx.slot] = [];
    if (pickerCtx.index === null || pickerCtx.index === undefined) {
      if (!canAddEquip(row)) { toast('每名干员最多装备 2 件', true); return; }
      if (row[pickerCtx.slot].includes(key)) { toast('该列已经有这件装备', true); return; }
      row[pickerCtx.slot].push(key);
    } else {
      const at = row[pickerCtx.slot].indexOf(key);
      if (at >= 0 && at !== pickerCtx.index) { toast('该列已经有这件装备', true); return; }
      row[pickerCtx.slot][pickerCtx.index] = key;
    }
    saveNow(); closeModal(); renderPoster(); renderEquipmentLibrary(); toast('装备已更新');
  }
  function clearPicker() {
    if (!pickerCtx) return;
    if (pickerCtx.type === 'item') {
      const row = state.equipment.find((e) => e.operatorId === pickerCtx.opId);
      if (row && pickerCtx.index !== null && pickerCtx.index !== undefined) row[pickerCtx.slot].splice(pickerCtx.index, 1);
      saveNow(); closeModal(); renderPoster(); toast('已清空');
    }
  }

  /* ------------------------------------------------------------
     Data import / export
     ------------------------------------------------------------ */
  function exportData() {
    const blob = new Blob([JSON.stringify(toStorageState(state), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '卫戍协议-规程-海报数据.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('数据已导出');
  }

  async function importData(file) {
    try {
      const raw = JSON.parse(await file.text());
      const next = migrateToV3(raw);
      if (!isValid(next)) throw new Error('缺少 meta / coreOperators / board / stages');
      backup(STORAGE_KEY + '-before-import', toStorageState(state));
      state = hydrateState(next);
      saveNow();
      renderPoster();
      renderRoster();     // 干员库 / 备选抽屉里的「已上场」标记也要跟着新数据走
      renderVariants();
      toast('数据已导入（旧结构会自动迁移）');
    } catch (e) {
      console.error(e);
      toast('导入失败：' + e.message + '；当前数据未覆盖', true);
    }
  }

  function resetData() {
    if (!confirm('恢复示例内容？本机保存的编辑会先备份。')) return;
    backup(STORAGE_KEY + '-before-reset', toStorageState(state));
    state = hydrateState(DEFAULT_DATA);
    saveNow();
    renderPoster();
    renderRoster();
    renderVariants();
    toast('已恢复示例；旧数据已备份');
  }

  /* ------------------------------------------------------------
     Board drag & drop + Arknights-style direction preview
     ------------------------------------------------------------ */
  function clearDropPreview() {
    $$('.board-cell .drop-facing').forEach((el) => el.remove());
    $$('.board-cell.drop-ok').forEach((el) => el.classList.remove('drop-ok'));
    $$('.board-cell.range-preview').forEach((el) => el.classList.remove('range-preview'));
    $$('.board-cell.range-origin').forEach((el) => el.classList.remove('range-origin'));
    $$('[data-stage-drop].drop-ok, [data-equip-drop].drop-ok').forEach((el) => el.classList.remove('drop-ok'));
  }
  function applyFacingPreview(cell, dir, id) {
    if (!cell) return;
    cell.querySelector('.facing-hint')?.remove();
    dir = normalizeFacing(dir);
    cell.dataset.dropFacing = dir;
    $$('.board-cell .drop-facing').forEach((el) => { if (el.parentElement !== cell) el.remove(); });
    $$('.board-cell.range-preview').forEach((el) => el.classList.remove('range-preview'));
    $$('.board-cell.range-origin').forEach((el) => el.classList.remove('range-origin'));
    let arrow = cell.querySelector('.drop-facing');
    if (!arrow) {
      arrow = document.createElement('div');
      arrow.className = 'drop-facing';
      cell.appendChild(arrow);
    }
    arrow.innerHTML = '<span style="transform:rotate(' + facingAngle(dir) + 'deg)">→</span>';
    const o = id ? state.operators?.[id] : null;
    if (!o || !Array.isArray(o.rangeGrid) || !o.rangeGrid.length) return;
    const row = Number(cell.dataset.row), col = Number(cell.dataset.col);
    for (const [x0, y0] of o.rangeGrid) {
      const [dc, dr] = rotateRangeCell(Number(x0), Number(y0), dir);
      const target = $('.board-cell[data-row="' + (row + dr) + '"][data-col="' + (col + dc) + '"]');
      if (target) target.classList.add('range-preview');
    }
    cell.classList.add('range-origin');
  }
  function previewDrop(cell, x, y, id) {
    if (!cell) return;
    const dir = directionFromPoint(cell, x, y) || cell.dataset.dropFacing || 'right';
    applyFacingPreview(cell, dir, id);
  }
  // 放入后立刻把攻击范围亮出来：优先用落点相对格子中心的方向，取不到再用上一次预览。
  function refreshPendingPreview() {
    const p = pendingPlacement;
    if (!p || !editMode) return;
    const placement = (state.board?.placements || []).find((x) => x.operatorId === p.id);
    if (!placement) return;
    const cell = $('.board-cell[data-row="' + placement.row + '"][data-col="' + placement.col + '"]');
    if (!cell) return;
    applyFacingPreview(cell, p.dir || 'right', p.id);
    cell.classList.add('drop-ok');
  }

  function bindStageDnD() {
    if (!editMode) return;
    $$('[data-stage-drop]').forEach((row) => {
      row.addEventListener('dragover', (e) => {
        const types = Array.from(e.dataTransfer?.types || []);
        if (!types.includes('application/x-roster')) return;
        e.preventDefault();
        row.classList.add('drop-ok');
      });
      row.addEventListener('dragleave', () => row.classList.remove('drop-ok'));
      row.addEventListener('drop', (e) => {
        e.preventDefault();
        row.classList.remove('drop-ok');
        const id = e.dataTransfer.getData('application/x-roster') || e.dataTransfer.getData('text/plain');
        if (hasOperator(id)) assignStage(Number(row.dataset.stageDrop), row.dataset.stageKind, id, null);
      });
    });
  }

  function bindBoardDnD() {
    if (!editMode) return;
    $$('.board-unit').forEach((el) => {
      el.addEventListener('dragstart', (e) => {
        draggedOperatorId = el.dataset.opId;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', draggedOperatorId);
        e.dataTransfer.setData('application/x-roster', draggedOperatorId);
        e.dataTransfer.setData('application/x-board-op', draggedOperatorId);
      });
      el.addEventListener('dragend', () => {
        draggedOperatorId = null;
        clearDropPreview();
        suppressClickUntil = Date.now() + 300;
        if (boardRangeId && !pendingPlacement) paintBoardRange(boardRangeId);
      });
    });
    $$('.board-cell').forEach((cell) => {
      cell.addEventListener('dragover', (e) => {
        const types = Array.from(e.dataTransfer?.types || []);
        if (!types.includes('application/x-roster') && !types.includes('application/x-board-op')) return;
        e.preventDefault();
        cell.classList.add('drop-ok');
      });
      cell.addEventListener('dragleave', (e) => {
        if (cell.contains(e.relatedTarget)) return;
        cell.classList.remove('drop-ok');
      });
      cell.addEventListener('drop', (e) => {
        e.preventDefault();
        const type = e.dataTransfer.getData('application/x-board-op') ? 'board' : 'roster';
        const id = draggedOperatorId || e.dataTransfer.getData('application/x-roster') || e.dataTransfer.getData('text/plain');
        clearDropPreview();
        draggedOperatorId = null;
        if (!hasOperator(id)) return;
        if (type === 'board') movePlacement(id, Number(cell.dataset.row), Number(cell.dataset.col), '', '', true);
        else {
          const already = (state.board?.placements || []).some((p) => p.operatorId === id);
          boardRangeId = id;
          placeRoster(id, Number(cell.dataset.row), Number(cell.dataset.col), already ? '' : 'right', '', true);
        }
      });
    });
  }

  document.addEventListener('dragend', () => { draggedOperatorId = null; clearDropPreview(); });

  function paintBoardRange(id) {
    $$('.board-cell.range-preview').forEach((el) => el.classList.remove('range-preview'));
    $$('.board-cell.range-origin').forEach((el) => el.classList.remove('range-origin'));
    const p = (state.board?.placements || []).find((x) => x.operatorId === id);
    if (!p) { boardRangeId = null; return; }
    const cell = $('.board-cell[data-row="' + p.row + '"][data-col="' + p.col + '"]');
    if (!cell) return;
    const dir = normalizeFacing(p.facing) || 'right';
    const o = state.operators?.[id];
    cell.classList.add('range-origin');
    const grid = Array.isArray(o?.rangeGrid) ? o.rangeGrid : [];
    const row = Number(p.row), col = Number(p.col);
    for (const [x0, y0] of grid) {
      const [dc, dr] = rotateRangeCell(Number(x0), Number(y0), dir);
      const target = $('.board-cell[data-row="' + (row + dr) + '"][data-col="' + (col + dc) + '"]');
      if (target) target.classList.add('range-preview');
    }
  }
  function clearBoardRange() {
    if (!boardRangeId) return;
    boardRangeId = null;
    $$('.board-cell.range-preview').forEach((el) => el.classList.remove('range-preview'));
    $$('.board-cell.range-origin').forEach((el) => el.classList.remove('range-origin'));
  }
  function handleBoardAvatarClick(id) {
    if (!editMode || mobileUI || !hasOperator(id) || pendingPlacement) return;
    if (boardRangeId === id) {
      cycleFacing(id);
      return;
    }
    boardRangeId = id;
    paintBoardRange(id);
    const p = (state.board?.placements || []).find((x) => x.operatorId === id);
    const dir = normalizeFacing(p?.facing);
    const grid = op(id)?.rangeGrid || [];
    toast((op(id)?.name || '') + ' · 攻击范围' + (grid.length ? '' : '（暂无数据）') + ' · 朝向' + (FACING_LABEL[dir] || dir) + ' · 再点头像转向');
  }
  function firstEmptyCell() {
    const b = state.board || { cols: 8, rows: 4, placements: [] };
    const taken = new Set((b.placements || []).map((p) => Number(p.row) + ',' + Number(p.col)));
    const rows = Number(b.rows) || 4;
    const cols = Number(b.cols) || 8;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (isGateCell(r, c)) continue;
        if (!taken.has(r + ',' + c)) return { row: r, col: c };
      }
    }
    return null;
  }
  function placeRosterAtNextCell(id) {
    if (!editMode || mobileUI || !hasOperator(id)) return;
    const existing = (state.board?.placements || []).find((p) => p.operatorId === id);
    if (existing) {
      boardRangeId = id;
      renderPoster();
      toast('「' + (op(id)?.name || id) + '」已在棋盘上 · 再点头像转向');
      return;
    }
    const cell = firstEmptyCell();
    if (!cell) { toast('棋盘没有空位', true); return; }
    boardRangeId = id;
    placedFlashId = id;
    placeRoster(id, cell.row, cell.col, 'right', '', true);
    const bossFollows = (state.stages || []).some((s) => s.id === 'boss' && s.lineupSource === 'board');
    toast('已放入「' + (op(id)?.name || id) + '」，落在第 ' + (cell.row + 1) + ' 行第 ' + (cell.col + 1) + ' 列。' + (bossFollows ? 'BOSS 阶段会跟着棋盘变。' : '') + '再点头像转向');
    setTimeout(() => {
      if (placedFlashId === id) placedFlashId = '';
      document.querySelectorAll('.board-unit.just-placed').forEach((el) => el.classList.remove('just-placed'));
    }, 1600);
  }

  function cycleFacing(id) {
    const p = (state.board.placements || []).find((x) => x.operatorId === id);
    if (!p) return;
    const order = FACING_ORDER;
    p.facing = order[(order.indexOf(normalizeFacing(p.facing)) + 1) % order.length];
    if (!mobileUI) boardRangeId = id;
    saveNow();
    renderPoster();
    toast('朝向：' + (FACING_LABEL[p.facing] || p.facing));
  }

  function movePlacement(id, row, col, facing = '', previewDir = '', noPending = false) {
    if (!hasOperator(id)) return;
    if (isGateCell(row, col)) { toast('门列不能部署干员', true); return; }
    if (pendingPlacement) cancelPendingPlacement(true);
    const before = boardSnapshot();
    const list = state.board.placements || [];
    const from = list.find((p) => p.operatorId === id);
    const to = list.find((p) => Number(p.row) === row && Number(p.col) === col);
    if (!mobileUI) noPending = true;
    let dir = facing ? normalizeFacing(facing) : (from ? normalizeFacing(from.facing) : '');
    if (!from && !dir) dir = 'right';
    // 交换两个已有棋子：各自保留朝向，也不再进入「选朝向」流程。
    const isSwap = !!(from && to && from !== to);
    if (isSwap) {
      const fr = from.row, fc = from.col;
      from.row = to.row; from.col = to.col;
      to.row = fr; to.col = fc;
    } else if (from) {
      from.row = row; from.col = col; from.facing = dir;
    } else {
      list.push({ operatorId: id, row, col, facing: dir });
    }
    state.board.placements = list;
    syncLineup();
    if (editMode && !noPending && !isSwap) beginPendingPlacement(id, before, dir || previewDir, from ? '移动' : '放入');
    else if (!mobileUI && !from) boardRangeId = id;
    saveNow();
    renderPoster();
    renderRoster();
    renderVariants();
    clearRosterSelection();
    if (isSwap) toast('已交换位置，朝向各自保留');
    else if (!editMode) toast('站位已更新');
  }


  let pointerSession = null;
  let suppressClickUntil = 0;
  function pointerCleanup() {
    if (pointerSession) pointerSession.ghost?.remove();
    pointerSession = null;
    draggedOperatorId = null;
    clearDropPreview();
  }
  function bindPointerPlacement() {
    document.addEventListener('pointerdown', (e) => {
      if (!editMode || e.button !== 0 || e.pointerType === 'mouse') return;
      if (e.target.closest('button')) return;
      const boardUnit = e.target.closest('.board-unit');
      const roster = e.target.closest('.roster-item');
      const id = boardUnit?.dataset.opId || roster?.dataset.rosterId;
      if (!hasOperator(id)) return;
      draggedOperatorId = id;
      pointerSession = { id, x: e.clientX, y: e.clientY, startX: e.clientX, startY: e.clientY, moved: false, ghost: null };
    }, { passive: true });
    document.addEventListener('pointermove', (e) => {
      const s = pointerSession; if (!s) return;
      if (!s.moved && Math.hypot(e.clientX - s.startX, e.clientY - s.startY) < 8) return;
      if (!s.moved) {
        s.moved = true;
        const o = op(s.id);
        s.ghost = document.createElement('div');
        s.ghost.className = 'pointer-ghost';
        s.ghost.innerHTML = '<img src="' + avatarSrc(o.avatar) + '" alt="" />';
        document.body.appendChild(s.ghost);
      }
      s.ghost.style.left = e.clientX + 'px';
      s.ghost.style.top = e.clientY + 'px';
      const cell = document.elementFromPoint(e.clientX, e.clientY)?.closest('.board-cell');
      $$('.board-cell.drop-ok').forEach((el) => { if (el !== cell) el.classList.remove('drop-ok'); });
      if (cell) cell.classList.add('drop-ok');
    }, { passive: true });
    document.addEventListener('pointerup', (e) => {
      const s = pointerSession; if (!s) return;
      const cell = document.elementFromPoint(e.clientX, e.clientY)?.closest('.board-cell');
      const id = s.id, moved = s.moved;
      pointerCleanup();
      if (!moved) {
        const p = (state.board.placements || []).find((x) => x.operatorId === id);
        if (p && !pendingPlacement) { cycleFacing(id); suppressClickUntil = Date.now() + 500; }
        return;
      }
      if (cell) {
        movePlacement(id, Number(cell.dataset.row), Number(cell.dataset.col));
        suppressClickUntil = Date.now() + 500;
      }
    });
    document.addEventListener('pointercancel', pointerCleanup);
  }
  function bindBoardClickPlacement() {
    document.addEventListener('click', (e) => {
      if (Date.now() < suppressClickUntil) return;
      if (!editMode || !selectedRosterId) return;
      const cell = e.target.closest('.board-cell.empty');
      if (!cell) return;
      e.preventDefault();
      movePlacement(selectedRosterId, Number(cell.dataset.row), Number(cell.dataset.col), 'right', '', true);
    });
  }
  function bindFacingChoice() {
    document.addEventListener('pointerdown', (e) => {
      if (!pendingPlacement || e.button !== 0) return;
      if (Date.now() < pendingPlacement.ignoreUntil) return;
      const unit = e.target.closest('.board-unit');
      if (unit && unit.dataset.opId === pendingPlacement.id) {
        directionDrag = { id: pendingPlacement.id, cell: unit.closest('.board-cell'), startX: e.clientX, startY: e.clientY, moved: false };
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      cancelPendingPlacement();
    }, true);
    document.addEventListener('pointermove', (e) => {
      const d = directionDrag;
      if (!d) return;
      if (!d.moved && Math.hypot(e.clientX - d.startX, e.clientY - d.startY) < 6) return;
      d.moved = true;
      d.cell.classList.add('drop-ok');
      previewDrop(d.cell, e.clientX, e.clientY, d.id);
      e.preventDefault();
    }, { passive: false });
    document.addEventListener('pointerup', () => {
      const d = directionDrag;
      if (!d) return;
      const dir = d.cell.dataset.dropFacing || 'right';
      const moved = d.moved;
      directionDrag = null;
      if (!moved) { clearDropPreview(); return; }
      commitPendingFacing(dir);
    });
    document.addEventListener('pointercancel', () => {
      directionDrag = null;
      clearDropPreview();
    });
    document.addEventListener('click', (e) => {
      if (!pendingPlacement) return;
      if (Date.now() < pendingPlacement.ignoreUntil) return;
      const unit = e.target.closest('.board-unit');
      if (unit && unit.dataset.opId === pendingPlacement.id) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      cancelPendingPlacement();
      e.preventDefault();
      e.stopPropagation();
    }, true);
  }
  bindFacingChoice();
  bindPointerPlacement();
  bindBoardClickPlacement();

  /* ------------------------------------------------------------
     Export 3200 × 2400
     ------------------------------------------------------------ */
  function exportIssues() {
    const oldEdit = editMode;
    const oldTransform = $('#poster').style.transform;
    if (oldEdit) { editMode = false; document.body.classList.remove('editing'); }
    renderPoster();
    const r = posterCheck();
    const issues = [];
    for (const o of r.overflow) issues.push('版面溢出：' + o.sel);
    for (const o of r.smallText) issues.push('小字未达标：' + (o.cls || o.tag) + ' ' + o.fs + 'px');
    for (const o of r.stageOverflow) issues.push('阶段头像溢出：第 ' + o.row + ' 行');
    for (const o of r.strategyHidden) issues.push('盟约策略：' + (o.slot === 'main' ? '主推荐' : '次选') + ' 的效果被隐藏');
    for (const c of (r.placementChecks || [])) if (c.status === 'bad') issues.push('站位关系：' + (c.label || '未满足'));
    editMode = oldEdit;
    document.body.classList.toggle('editing', editMode);
    renderPoster();
    $('#poster').style.transform = oldTransform;
    return issues;
  }
  function showExportConfirm(issues) {
    const items = issues.map((x) => '<li>' + esc(x) + '</li>').join('');
    openModal('<div class="modal-body"><div class="detail-kicker">EXPORT CHECK</div><h2 class="detail-name modal-title">导出前检查</h2>' +
      '<p class="detail-note">发现以下问题，是否仍然导出？</p><ul class="export-issues">' + items + '</ul>' +
      '<div class="form-actions"><button class="btn" type="button" data-export-back>返回编辑</button><button class="btn btn-primary" type="button" data-export-force>仍然导出</button></div></div>');
  }
  let lastExport = '';
  // 只生成不下载：供调试台 / headless 批量出图使用。
  async function posterPng() {
    if (!window.htmlToImage) throw new Error('导出库未加载');
    const poster = $('#poster');
    const oldTransform = poster.style.transform;
    const oldEdit = editMode;
    if (oldEdit) { editMode = false; document.body.classList.remove('editing'); }
    renderPoster();
    poster.classList.add('is-exporting');
    poster.style.transform = 'none';
    try {
      if (document.fonts?.ready) await document.fonts.ready;
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      // renderPoster 内部会再排一次 fitPoster；导出期间必须保持 1:1，否则手机上会被缩到角落。
      poster.style.transform = 'none';
      const dataUrl = await window.htmlToImage.toPng(poster, {
        width: POSTER_W, height: posterHeight,
        pixelRatio: 2,
        backgroundColor: '#0b0706'
      });
      lastExport = dataUrl;
      return dataUrl;
    } finally {
      poster.style.transform = oldTransform;
      poster.classList.remove('is-exporting');
      editMode = oldEdit;
      document.body.classList.toggle('editing', editMode);
      renderPoster();
      fitPoster();
    }
  }

  async function exportPoster(force = false) {
    const btn = $('#exportBtn');
    const span = btn?.querySelector('span');
    if (!window.htmlToImage) { toast('导出库未加载', true); return; }
    if (!force) {
      const issues = exportIssues();
      if (issues.length) { showExportConfirm(issues); return; }
    }
    if (btn) btn.disabled = true;
    if (span) span.textContent = '生成中…';
    try {
      const dataUrl = await posterPng();
      downloadPoster(dataUrl);
    } catch (e) {
      console.error(e);
      toast('导出失败：' + e.message, true);
    } finally {
      if (btn) btn.disabled = false;
      if (span) span.textContent = '导出一图流';
    }
  }

  function downloadDataUrl(dataUrl, name) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = name;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function downloadPoster(dataUrl) {
    const safeTitle = String(state.meta.title || '一图流').replace(/[\\/:*?"<>|]/g, '-').trim() || '一图流';
    const name = '卫戍协议-规程-' + safeTitle + '-' + (state.meta.date || '2026-11-09') + '.png';
    downloadDataUrl(dataUrl, name);
    toast('已导出 3200 × 2400 PNG' + (state.meta.showQr && !siteUrl() ? '（没设入口链接，这张不带二维码）' : ''));
  }

  // 预览保留成可选动作（调试台 / 以后加「查看大图」按钮时用），导出流程不再自动弹它。
  function openPoster(dataUrl) {
    const name = '卫戍协议-规程-' + (String(state.meta.title || '一图流').replace(/[\\/:*?"<>|]/g, '-').trim() || '一图流') + '-' + (state.meta.date || '2026-11-13') + '.png';
    openModal('<div class="poster-wrap" style="padding:12px"><img src="' + dataUrl + '" alt="卫戍协议规程一图流" style="width:100%;height:auto;border:1px solid var(--line)" /></div>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 12px 12px;flex-wrap:wrap">' +
        '<span class="detail-note">3200 × 2400 PNG · 长按图片也可保存' +
          (state.meta.showQr && !siteUrl() ? ' · <span style="color:var(--orange)">已开启二维码但没设入口链接，这张图不带码（分享 → 入口二维码）</span>' : '') +
        '</span>' +
        '<a class="btn btn-primary" href="' + dataUrl + '" download="' + name + '">下载 PNG</a>' +
      '</div>', true);
  }

  /* ------------------------------------------------------------
     Share: compact state link, QR, portrait card, read mode
     ------------------------------------------------------------ */
  // 默认数据的精简形态在一次会话里不会变，算一次缓存起来；每次交出去的是副本，调用方随便改。
  let storageBaseCache = null;
  function storageBase() {
    if (!storageBaseCache) storageBaseCache = toStorageState(hydrateState(DEFAULT_DATA));
    return clone(storageBaseCache);
  }

  function diffPayload(cur, base) {
    if (Array.isArray(cur) || Array.isArray(base)) {
      return JSON.stringify(cur) === JSON.stringify(base) ? undefined : cur;
    }
    if (isObj(cur) && isObj(base)) {
      const out = {};
      for (const key of Object.keys(cur)) {
        const v = diffPayload(cur[key], base[key]);
        if (v !== undefined) out[key] = v;
      }
      return Object.keys(out).length ? out : undefined;
    }
    return JSON.stringify(cur) === JSON.stringify(base) ? undefined : cur;
  }

  function sharePayload() {
    const slim = (s) => ({
      meta: s.meta,
      coreOperators: s.coreOperators,
      board: s.board,
      stages: (s.stages || []).map((x) => ({
        id: x.id, label: x.label, lineupSource: x.lineupSource, lineup: x.lineup, note: x.note, recruit: []
      })),
      equipment: s.equipment,
      equipmentNotes: s.equipmentNotes,
      strategy: s.strategy,
      loadout: s.loadout,
      operatorOverrides: s.operatorOverrides,
      bondPlay: s.bondPlay,
      bench: s.bench
    });
    return diffPayload(slim(toStorageState(state)), slim(storageBase())) || {};
  }

  function shareCode() {
    const json = JSON.stringify(sharePayload());
    if (window.LZString?.compressToEncodedURIComponent) return window.LZString.compressToEncodedURIComponent(json);
    return encodeURIComponent(json);
  }

  function currentShareUrl() {
    return String(location.href || '').split('#')[0] + SHARE_PREFIX + shareCode();
  }

  function cleanShareHash() {
    try { history.replaceState(null, '', String(location.href || '').split('#')[0]); } catch (e) { /* file:// 可能不允许 */ }
  }

  function applyShareHash() {
    const hash = String(location.hash || '');
    if (!hash.startsWith(SHARE_PREFIX)) return false;
    let payload = null;
    try {
      const code = hash.slice(SHARE_PREFIX.length);
      const json = window.LZString?.decompressFromEncodedURIComponent
        ? window.LZString.decompressFromEncodedURIComponent(code)
        : decodeURIComponent(code);
      if (!json) throw new Error('空链接');
      payload = JSON.parse(json);
      if (!isObj(payload)) throw new Error('链接内容不完整');
    } catch (e) {
      toast('分享链接无法解析', true);
      cleanShareHash();
      return false;
    }
    try {
      const next = migrateToV3(deepMerge(storageBase(), payload));
      if (!isValid(next)) throw new Error('缺少必要字段');
      backup(STORAGE_KEY + '-before-share', toStorageState(state));
      state = hydrateState(next);
      saveNow();
      renderPoster();
      fitPoster();
      cleanShareHash();
      toast('已载入分享阵容');
      return true;
    } catch (e) {
      console.error(e);
      toast('分享链接无法载入：' + e.message, true);
      cleanShareHash();
      return false;
    }
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) { /* 继续走兜底 */ }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e) {
      return false;
    }
  }

  function openShare() {
    if (pendingPlacement) cancelPendingPlacement(true);
    const url = currentShareUrl();
    const entry = siteUrl();
    const qr = qrDataUrl(url, 260);
    const tooLong = url.length > SHARE_WARN_LEN;
    const pageNote = isHttpPage()
      ? '链接会把当前站位、技能、装备、盟约一起带过去；对方打开就是你这一版。'
      : '当前是本地文件打开，链接只能在同机使用。部署到网上、或发「单文件 HTML」，链接才能真正分享。';
    openModal('<div class="modal-body">' +
      '<div class="detail-kicker">SHARE</div>' +
      '<h2 class="detail-name modal-title">分享这套阵容</h2>' +
      '<p class="detail-note">' + esc(pageNote) + '</p>' +
      '<div class="share-qr">' + (qr ? '<img src="' + qr + '" alt="分享二维码" />' : '<span class="detail-note">二维码未生成：链接过长或组件未加载，直接复制下面的链接即可。</span>') + '</div>' +
      '<div class="share-link"><input id="shareLinkInput" readonly value="' + attr(url) + '" aria-label="分享链接" /><button class="btn btn-primary" type="button" data-share-copy>复制链接</button></div>' +
      '<p class="share-cap">' + (tooLong
        ? '<span style="color:var(--orange)">链接较长（' + url.length + ' 字符），部分聊天软件可能截断；更稳的是「导出数据」发文件。</span>'
        : '链接长度 ' + url.length + ' 字符。') + ' 手机扫上面的码可直接打开同一版。</p>' +
      '<div class="form-grid" style="margin-top:16px">' +
        '<div class="field full"><label>海报 / 长图入口二维码</label>' +
          '<label class="share-toggle"><input type="checkbox" id="shareQrToggle" ' + (state.meta.showQr ? 'checked ' : '') + '/> 在导出的海报和竖版长图上印二维码</label>' +
          '<input id="shareEntry" placeholder="https://example.com/sp/" value="' + attr(state.meta.shareUrl || '') + '" />' +
          '<span class="hint">默认关闭；开启后才会印到图上。留空则用当前页面地址，本地文件打开时不生成。</span>' +
        '</div>' +
      '</div>' +
      '<div class="share-actions">' +
        '<button class="btn" type="button" data-share-save-entry>保存入口</button>' +
        '<button class="btn" type="button" data-share-download-qr>下载二维码 PNG</button>' +
        '<button class="btn" type="button" data-share-portrait>下载竖版长图</button>' +
        '<button class="btn" type="button" data-share-template>空白模板</button>' +
      '</div>' +
    '</div>', true);
  }

  async function copyShareLink() {
    const text = $('#shareLinkInput')?.value || currentShareUrl();
    const ok = await copyText(text);
    toast(ok ? '链接已复制' : '复制失败，请手动选中复制', !ok);
  }

  function saveShareEntry() {
    const raw = String($('#shareEntry')?.value || '').trim();
    if (raw && !/^https?:\/\//i.test(raw)) { toast('入口需要以 http:// 或 https:// 开头', true); return; }
    state.meta.shareUrl = raw;
    saveNow();
    renderPoster();
    toast(raw ? '入口已保存，海报标题右侧会印上二维码' : '已清空入口链接');
    openShare();
  }

  function downloadShareQr() {
    const data = qrDataUrl(currentShareUrl(), 512);
    if (!data) { toast('二维码生成失败', true); return; }
    const a = document.createElement('a');
    a.href = data;
    a.download = '卫戍协议-阵容二维码.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function shareCardHtml() {
    const m = state.meta;
    const b = state.board || { cols: 8, rows: 4, placements: [] };
    const facts = boardFacts(b, m.boardGates);
    const cells = facts.cells.map((cell) => {
      const o = cell.operator;
      const gateClass = cell.gateType ? ' sc-gate-col' : '';
      const gateBlank = cell.gateBlank ? ' sc-gate-blank' : '';
      const gateHtml = cell.gateLabel
        ? '<span class="sc-gate ' + attr(cell.gateType) + '">' + cell.gateLabel + '</span>'
        : '';
      return '<div class="sc-cell' + (o ? ' on' : '') + gateClass + gateBlank + '">' + gateHtml +
        (o
          ? '<img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" /><span class="sc-facing">' + facingArrow(cell.placement.facing) + '</span>'
          : '') +
      '</div>';
    });
    const placedIds = (b.placements || []).map((p) => p.operatorId);
    const coreIds = coreOnField(state.coreOperators, b.placements).map((c) => c.operatorId);
    const ordered = [...coreIds, ...placedIds.filter((id) => !coreIds.includes(id))];
    const preferred = (m.shareLineup || []).map((id) => op(id)).filter(Boolean);
    const lineup = (preferred.length ? preferred : ordered.map((id) => op(id)).filter(Boolean)).slice(0, 9);
    const ops = lineup.map((o) => '<div class="sc-op" ' + avatarStyle(o, { rarity: true }) + '>' +
      '<img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" />' +
      '<b>' + esc(o.name) + '</b>' +
      '<span>' + skillNumeral(o.skillIdx) + (moduleOf(o) ? ' · ' + esc(moduleType(o)) : '') + '</span>' +
    '</div>').join('');
    const stages = stageFacts(state.stages, b).map((block) => {
      const s = block.stage;
      const ids = block.operators;
      return '<div class="sc-stage"><div class="sc-stage-label">' + esc(s.label || '') + '</div>' +
        '<div class="sc-stage-body"><div class="sc-stage-ops">' +
          ids.map((o) => '<img src="' + avatarSrc(o.avatar) + '" alt="" ' + avatarStyle(o, { rarity: true }) + ' draggable="false" />').join('') +
        '</div>' + (s.note ? '<div class="sc-stage-note">' + esc(s.note) + '</div>' : '') + '</div></div>';
    }).join('');
    const subs = lineup.filter((o) => String(o.substitute || '').trim()).slice(0, 3)
      .map((o) => '<div class="sc-sub-row"><b>' + esc(o.name) + '</b><span>' + esc(o.substitute) + '</span></div>').join('');
    const entry = siteUrl();
    const qr = state.meta.showQr && entry ? qrDataUrl(entry, 190) : '';
    return '<div class="sc-hazard"></div>' +
      '<div class="sc-head">' +
        '<div class="sc-kicker"><b>' + esc(m.version) + '</b><span>卫戍协议 · 规程</span><span>' + esc(m.date) + '</span></div>' +
        '<div class="sc-title">' + esc(m.title) + '</div>' +
        '<div class="sc-sub"><span>' + esc(m.subtitle) + '</span>' + (m.proof ? '<i>' + esc(m.proof) + '</i>' : '') + '</div>' +
      '</div>' +
      '<section class="sc-sec"><div class="sc-sec-head"><span class="sc-sec-title">该带谁</span><span class="sc-sec-note">' + esc(m.shareNote || (lineup.length + ' 人 · 技能 / 模组')) + '</span></div><div class="sc-lineup count-' + lineup.length + '">' + ops + '</div></section>' +
      '<section class="sc-sec"><div class="sc-sec-head"><span class="sc-sec-title">站位</span><span class="sc-sec-note">箭头=朝向 · 敌人从右来</span></div><div class="sc-board" style="grid-template-columns:repeat(' + facts.cols + ',minmax(0,1fr));grid-template-rows:repeat(' + facts.rows + ',minmax(0,1fr))">' + cells.join('') + '</div></section>' +
      '<section class="sc-sec"><div class="sc-sec-head"><span class="sc-sec-title">什么时候做什么</span><span class="sc-sec-note">每阶段抓谁</span></div><div class="sc-stages">' + stages + '</div></section>' +
      '<section class="sc-sec"><div class="sc-sec-head"><span class="sc-sec-title">缺卡怎么办</span><span class="sc-sec-note">' + esc(m.subsNote || '按位替换 · 先保 3 谢') + '</span></div><div class="sc-subs">' +
        (subs || '<div class="sc-sub-row" style="grid-template-columns:1fr"><span>点棋盘上的棋子可以看每位干员的替代说明。</span></div>') +
      '</div></section>' +
      '<div class="sc-foot">' +
        '<div class="sc-foot-copy"><b>' + esc(m.author) + ' · ' + esc(m.version) + '</b><span>非官方 · 非盈利 · 素材版权归鹰角网络所有</span><span>' + esc(m.date) + ' 环境 · 数据：PRTS / 可露希尔Wiki</span></div>' +
        (qr ? '<div class="sc-foot-qr"><img src="' + qr + '" alt="二维码" draggable="false" /><em>扫码看最新版</em></div>' : '') +
      '</div>';
  }

  async function exportPortrait() {
    if (!window.htmlToImage) { toast('导出库未加载', true); return; }
    closeModal();
    const card = document.createElement('div');
    card.className = 'share-card';
    card.id = 'shareCard';
    card.innerHTML = shareCardHtml();
    document.body.appendChild(card);
    try {
      if (document.fonts?.ready) await document.fonts.ready;
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const dataUrl = await window.htmlToImage.toPng(card, { width: 1080, height: 2160, pixelRatio: 2, backgroundColor: '#0b0706' });
      downloadDataUrl(dataUrl, '卫戍协议-竖版-' + (state.meta.date || '2026-11-09') + '.png');
      toast('已导出竖版长图 2160 × 4320');
    } catch (e) {
      console.error(e);
      toast('竖版长图导出失败：' + e.message, true);
    } finally {
      card.remove();
    }
  }

  function openHelp() {
    const boardOps = [...new Set((state.board?.placements || []).map((p) => p.operatorId))]
      .map((id) => op(id)).filter((o) => o && String(o.substitute || '').trim());
    const subs = boardOps.map((o) => '<li><b>' + esc(o.name) + '</b>' + esc(o.substitute) + '</li>').join('');
    openModal('<div class="modal-body">' +
      '<div class="detail-kicker">HOW TO USE</div>' +
      '<h2 class="detail-name modal-title">三步做出你的一图流</h2>' +
      '<ol class="help-steps">' +
        '<li><b>抄</b><span>当前是乌萨斯示例阵容。点任意头像看数值 / 技能 / 模组；点棋盘上的棋子看详情，里面有「替补 / 没有怎么办」的缺卡替代。</span></li>' +
        '<li><b>改</b><span>点右上角「编辑」：直接改字、拖棋子摆站位、点装备 / 盟约替换。改动自动存在本机，改错了按 Ctrl+Z（或编辑栏的撤销箭头）退回去；新建或导入前会先写自动备份。</span></li>' +
        '<li><b>发</b><span>「导出一图流」出 3200×2400 PNG；「分享」出阵容链接、二维码和竖版长图。别人打开链接看到的就是你这一版。</span></li>' +
      '</ol>' +
      '<p class="help-note">手机上看不清？点右下角「放大」（或双击海报），海报会按原始尺寸展开，拖动查看；再点一次退出。</p>' +
      (subs ? '<div class="help-sub-head">缺卡替代（本套）</div><ul class="help-subs">' + subs + '</ul>' : '') +
      '<div class="form-actions" style="justify-content:flex-start;flex-wrap:wrap;margin-top:16px">' +
        '<button class="btn btn-primary" type="button" data-help-template>用空白模板开始</button>' +
        '<button class="btn" type="button" data-help-share>分享当前阵容</button>' +
        '<button class="btn" type="button" data-help-close>知道了</button>' +
      '</div>' +
    '</div>', true);
  }

  let zoomMode = false;
  function maybeShowZoomHint() {
    const el = $('#zoomHint');
    if (!el) return;
    if (!window.matchMedia || !window.matchMedia('(max-width: 720px)').matches) return;
    try { if (localStorage.getItem('sp-zoom-hint-v1')) return; } catch (e) { return; }
    el.hidden = false;
  }
  function setZoomMode(on, point) {
    zoomMode = !!on;
    const hint = $('#zoomHint');
    if (hint && !hint.hidden) {
      hint.hidden = true;
      try { localStorage.setItem('sp-zoom-hint-v1', '1'); } catch (e) { /* ignore */ }
    }
    document.body.classList.toggle('zoomed', zoomMode);
    const btn = $('#zoomBtn');
    const poster = $('#poster');
    const shell = $('#posterShell');
    if (btn) {
      btn.setAttribute('aria-pressed', String(zoomMode));
      const span = btn.querySelector('span');
      if (span) span.textContent = zoomMode ? '退出放大' : '放大';
    }
    if (!poster || !shell) return;
    if (!zoomMode) { fitPoster(); return; }
    if (editMode) toggleEdit();
    poster.style.transform = 'none';
    shell.style.width = POSTER_W + 'px';
    shell.style.height = posterHeight + 'px';
    requestAnimationFrame(() => {
      const stage = $('#stage');
      if (!stage) return;
      if (point) {
        const stageRect = stage.getBoundingClientRect();
        stage.scrollLeft = Math.max(0, point.x - stageRect.left - stage.clientWidth / 2);
        stage.scrollTop = Math.max(0, point.y - stageRect.top - stage.clientHeight / 2);
      } else {
        stage.scrollLeft = 0;
        stage.scrollTop = 0;
      }
    });
  }

  /* ------------------------------------------------------------
     Mobile reading view (portrait, read-only)
     The poster stays mounted at 1600 × 1200 off-screen so layoutBoard(),
     posterCheck() and html-to-image keep seeing real dimensions.
     ------------------------------------------------------------ */
  function isNarrowView() {
    return !!(window.matchMedia && window.matchMedia('(max-width: 720px)').matches);
  }
  function storedViewMode() {
    try { return localStorage.getItem(VIEW_MODE_KEY) || ''; } catch (e) { return ''; }
  }
  function storeViewMode(mode) {
    try { localStorage.setItem(VIEW_MODE_KEY, mode); } catch (e) { /* private mode */ }
  }
  function enterMobileUI() {
    if (mobileUI) return;
    if (zoomMode) setZoomMode(false);
    closeInfoPop();
    closeDetailDrawer();
    mobileUI = true;
    document.body.classList.add('mobile-ui');
    const poster = $('#poster');
    const shell = $('#posterShell');
    if (poster) poster.style.transform = 'none';
    if (shell) { shell.style.width = POSTER_W + 'px'; shell.style.height = posterHeight + 'px'; }
    renderPoster();
    const box = $('#mobileRead');
    if (box) box.scrollTop = 0;
  }
  function exitMobileUI() {
    if (!mobileUI) return;
    if (editMode) setMobileEdit(false);
    closeInfoPop();
    closeDetailDrawer();
    mobileUI = false;
    document.body.classList.remove('mobile-ui');
    fitPoster();
    renderPoster();
  }
  function setViewMode(mode) {
    const next = mode === 'poster' ? 'poster' : 'read';
    storeViewMode(next);
    if (next === 'read') {
      enterMobileUI();
    } else {
      if (mobileUI && editMode) setMobileEdit(false);
      exitMobileUI();
    }
  }
  function initViewMode(forceRead) {
    if (!isNarrowView()) { exitMobileUI(); return; }
    if (forceRead) { enterMobileUI(); return; }
    if (storedViewMode() === 'poster') { exitMobileUI(); return; }
    enterMobileUI();
  }

  /* Mobile edit mode: the phone uses button placement instead of dragging
     from the roster drawer, so scrolling the operator list never fights a
     drag gesture. The same `editMode` flag drives desktop and mobile. */
  function setMobileEdit(on) {
    if (!mobileUI) return;
    const next = !!on;
    if (next === editMode) return;
    if (pendingPlacement) cancelPendingPlacement(true);
    editMode = next;
    document.body.classList.toggle('editing', editMode);
    mobileRosterOpen = false;
    mobileRosterQuery = '';
    mobileRange = null;
    mobileRangeArmed = false;
    mobileEquipOpen = null;
    mobileBondOpen = '';
    mobileFilterOpen = true;
    resetMobileFilter();
    cancelMobileDrag();
    clearRosterSelection();
    const bar = $('#editBar');
    if (bar) bar.hidden = !editMode;
    const btn = $('#editBtn');
    if (btn) {
      btn.setAttribute('aria-pressed', String(editMode));
      const span = btn.querySelector('span');
      if (span) span.textContent = editMode ? '完成' : '编辑';
    }
    saveNow();
    renderPoster();
    if (editMode) {
      requestAnimationFrame(scrollMobileBoard);
    } else {
      toast('已退出手机编辑');
    }
  }

  function cancelMobileDrag() {
    if (mobileDrag?.cell) mobileDrag.cell.classList.remove('mr-drag-source');
    document.body.classList.remove('mr-dragging');
    $$('.mr-cell.mr-drop').forEach((el) => el.classList.remove('mr-drop'));
    mobileDrag = null;
  }

  function scrollMobileBoard() {
    const box = $('#mobileRead');
    const section = $('.mr-board-section');
    if (!box || !section) return;
    const boxTop = box.getBoundingClientRect().top;
    const target = box.scrollTop + section.getBoundingClientRect().top - boxTop - 64;
    box.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
  }

  function clearMobileRangeDom() {
    mobileRange = null;
    mobileRangeArmed = false;
    const info = $('#mrPieceInfo');
    if (info) info.remove();
    applyMobileRange();
  }

  function applyMobileRange() {
    $$('.mr-cell.mr-range, .mr-cell.mr-range-origin').forEach((el) => el.classList.remove('mr-range', 'mr-range-origin'));
    const note = $('#mrRangeNote');
    if (!mobileRange) {
      if (note) { note.hidden = true; note.textContent = ''; }
      return;
    }
    const o = op(mobileRange.operatorId);
    if (!o) { mobileRange = null; return; }
    const placed = (state.board?.placements || []).find((p) => p.operatorId === o.id);
    const row = placed ? Number(placed.row) : Number(mobileRange.row);
    const col = placed ? Number(placed.col) : Number(mobileRange.col);
    const dir = normalizeFacing(placed?.facing || 'right');
    const grid = Array.isArray(o.rangeGrid) ? o.rangeGrid : [];
    for (const [gx, gy] of grid) {
      const [dc, dr] = rotateRangeCell(Number(gx), Number(gy), dir);
      const target = $('.mr-cell[data-row="' + (row + dr) + '"][data-col="' + (col + dc) + '"]');
      if (target) target.classList.add('mr-range');
    }
    const origin = $('.mr-cell[data-row="' + row + '"][data-col="' + col + '"]');
    if (origin) origin.classList.add('mr-range-origin');
    if (note) {
      note.hidden = false;
      note.textContent = '攻击范围 · ' + o.name + ' · 朝向 ' + (FACING_LABEL[dir] || dir) +
        (grid.length ? ' · 再点棋子换朝向 · 点其他位置取消' : ' · 资料库未收录范围 · 再点棋子换朝向');
    }
  }

  function selectMobileRoster(id, force = false) {
    if (!editMode || !hasOperator(id)) return;
    if (!force && selectedRosterId === id) {
      selectedRosterId = null;
      mobileRosterOpen = false;
      mobileRosterQuery = '';
      mobileRange = null;
      mobileRangeArmed = false;
      renderPoster();
      toast('已取消选择');
      return;
    }
    selectedRosterId = id;
    mobileRosterOpen = false;
    mobileRosterQuery = '';
    mobileRange = null;
    mobileRangeArmed = false;
    renderPoster();
    toast('已选中「' + (op(id)?.name || id) + '」：点棋盘空格放置');
    requestAnimationFrame(scrollMobileBoard);
  }

  function resetMobileFilter() {
    mobileFilter = { tier: new Set(), trigger: new Set(), kind: new Set(), bond: new Set() };
  }

  function mobileFilterCount() {
    return mobileFilter.tier.size + mobileFilter.trigger.size + mobileFilter.kind.size + mobileFilter.bond.size;
  }

  function updateMobileFilterLabel() {
    const btn = $('[data-mr-filter-toggle]');
    if (!btn) return;
    const n = mobileFilterCount();
    btn.textContent = (mobileFilterOpen ? '收起筛选' : '筛选') + (n ? '(' + n + ')' : '');
    btn.classList.toggle('on', n > 0);
  }

  function mobileFilterChoices() {
    const ops = Object.values(state.operators || {});
    const triggers = TRIGGER_DEFS.filter((t) => ops.some((o) => t.re.test(operatorTraitText(o))));
    const kinds = TRAIT_KINDS.filter((k) => ops.some((o) => traitKinds(o).includes(k)));
    const tiers = TIER_ORDER.filter((t) => ops.some((o) => operatorTier(o) === t));
    const bondEntries = currentBondEntries();
    return { ops, triggers, kinds, tiers, bondEntries };
  }

  function mobileSelectedOptions(choices) {
    const selected = [];
    let index = 0;
    const add = (label, test) => selected.push({ index: index++, label, test });
    for (const t of choices.tiers) if (mobileFilter.tier.has(t)) add('等阶 ' + t, operatorTierTest(t));
    for (const t of choices.triggers) if (mobileFilter.trigger.has(t.id)) add(t.label, (o) => operatorTriggers(o).includes(t.id));
    for (const k of choices.kinds) if (mobileFilter.kind.has(k)) add(k, (o) => traitKinds(o).includes(k));
    for (const [id, b] of choices.bondEntries) if (mobileFilter.bond.has(id)) add(b.name, (o) => (o.bonds || []).includes(id));
    return selected;
  }

  function mobileRosterItemHtml(o, placed) {
    const ordered = rosterBondList(o);
    return '<button class="mr-sheet-op' + (selectedRosterId === o.id ? ' on' : '') + (placed.has(o.id) ? ' placed' : '') +
      '" type="button" data-mr-op-id="' + attr(o.id) + '" data-name="' + attr(o.name) + '" data-prof="' + attr(o.profession || '') +
      '" data-rarity="' + attr(String(o.rarity ?? '')) + '" data-triggers="' + attr(operatorTriggers(o).join(',')) +
      '" data-bonds="' + attr((o.bonds || []).join(',')) + '" ' + avatarStyle(o, { rarity: true }) + ' title="' + attr(o.name + (placed.has(o.id) ? '（已在场上）' : '') + '；点开看详情 / 放置') + '">' +
      '<img src="' + avatarSrc(o.avatar) + '" alt="" draggable="false" />' +
      '<span class="mr-op-body">' +
        '<span class="mr-op-head">' +
          '<span class="mr-op-name">' + esc(o.name) + '</span>' +
          (placed.has(o.id) ? '<span class="mr-op-placed">场上</span>' : '') +
          ordered.map(rosterBondHtml).join('') +
        '</span>' +
        rosterTraitHtml(o) +
      '</span>' +
    '</button>';
  }

  function renderMobileRosterGroups() {
    const container = $('#mrRosterGroups');
    if (!container) return;
    const choices = mobileFilterChoices();
    const selected = mobileSelectedOptions(choices);
    const q = String(mobileRosterQuery || '').trim().toLowerCase();
    const ops = choices.ops.filter((o) => operatorMatchesQuery(o, q));
    const groups = buildMatchGroups(ops, selected);
    for (const g of groups) g.ops.sort(operatorSort);
    const placed = new Set((state.board?.placements || []).map((p) => p.operatorId));
    if (!groups.length) {
      container.innerHTML = '<p class="mr-empty">没有符合条件的干员</p>';
    } else {
      container.innerHTML = groups.map((g) =>
        '<section class="mr-sheet-group"><div class="mr-sheet-group-head"><b>' + esc(g.label) + '</b><span>' + g.ops.length + ' 人</span></div>' +
          '<div class="mr-sheet-grid">' + g.ops.map((o) => mobileRosterItemHtml(o, placed)).join('') + '</div>' +
        '</section>').join('');
    }
    const total = uniqueOps(groups);
    const active = !!q || selected.length > 0;
    const count = $('#mrSheetCount');
    if (count) count.textContent = active ? '筛选结果 ' + total + ' 位干员' : '全部 ' + total + ' 位干员';
    const summary = $('#mrFilterSummary');
    if (summary) {
      const parts = [];
      if (mobileFilter.tier.size) parts.push('等阶 ' + [...mobileFilter.tier].join('/'));
      if (mobileFilter.trigger.size) parts.push('触发 ' + choices.triggers.filter((t) => mobileFilter.trigger.has(t.id)).map((t) => t.label).join('/'));
      if (mobileFilter.kind.size) parts.push('特质 ' + choices.kinds.filter((k) => mobileFilter.kind.has(k)).join('/'));
      if (mobileFilter.bond.size) parts.push('盟约 ' + choices.bondEntries.filter(([id]) => mobileFilter.bond.has(id)).map(([, b]) => b.name).join('/'));
      summary.textContent = parts.length ? '已选：' + parts.join(' · ') : '';
      summary.hidden = !parts.length;
    }
    updateMobileFilterLabel();
  }

  function filterMobileRoster() {
    renderMobileRosterGroups();
  }

  function mobileRosterSheetHtml() {
    const { ops, triggers, kinds, tiers, bondEntries } = mobileFilterChoices();
    const chip = (group, value, label, on) =>
      '<button class="mr-fchip' + (on ? ' on' : '') + '" type="button" data-mrf-group="' + group + '" data-mrf-value="' + attr(value) + '">' + esc(label) + '</button>';
    const groupHtml = (label, group, items, allOn, itemOn, withAll = true) =>
      '<div class="mr-filter-group"><span class="mr-filter-label">' + label + '</span><div class="mr-filter-chips">' +
        (withAll ? chip(group, 'all', '全部', allOn) : '') +
        items.map(([value, text]) => chip(group, value, text, itemOn(value))).join('') +
      '</div></div>';
    const coreBonds = bondEntries.filter(([id]) => isCoreBond(id));
    const extraBonds = bondEntries.filter(([id]) => !isCoreBond(id));
    const filterCount = mobileFilterCount();
    const filters = mobileFilterOpen
      ? '<div class="mr-filters">' +
          groupHtml('等阶', 'tier', tiers.map((t) => [t, t]), mobileFilter.tier.size === 0, (v) => mobileFilter.tier.has(v)) +
          groupHtml('特质', 'kind', kinds.map((k) => [k, k]), mobileFilter.kind.size === 0, (v) => mobileFilter.kind.has(v)) +
          groupHtml('触发', 'trigger', triggers.map((t) => [t.id, t.label]), mobileFilter.trigger.size === 0, (v) => mobileFilter.trigger.has(v)) +
          groupHtml('核心盟约', 'bond', coreBonds.map(([id, b]) => [id, b.name]), mobileFilter.bond.size === 0, (v) => mobileFilter.bond.has(v), false) +
          groupHtml('附加盟约', 'bond', extraBonds.map(([id, b]) => [id, b.name]), mobileFilter.bond.size === 0, (v) => mobileFilter.bond.has(v), false) +
          '<button class="mr-filter-reset" type="button" data-mrf-reset>重置筛选</button>' +
        '</div>'
      : '';
    return '<div class="mr-sheet-backdrop" data-mr-sheet-close></div>' +
      '<section class="mr-sheet' + (mobileFilterOpen ? ' with-filters' : '') + '" aria-label="手机干员库">' +
        '<div class="mr-sheet-head"><b>干员库</b><span>行内看盟约与特质；点开看详情 / 放置</span>' +
          '<button class="mr-sheet-close" type="button" data-mr-sheet-close aria-label="关闭干员库">×</button></div>' +
        '<div class="mr-sheet-search-row">' +
          '<input class="mr-sheet-search" id="mrRosterSearch" type="search" autocomplete="off" placeholder="搜索干员 / 拼音" value="' + attr(mobileRosterQuery) + '" />' +
          '<button class="mr-sheet-filter-btn' + (filterCount ? ' on' : '') + '" type="button" data-mr-filter-toggle>' + (mobileFilterOpen ? '收起筛选' : '筛选') + (filterCount ? '(' + filterCount + ')' : '') + '</button>' +
        '</div>' +
        filters +
        '<div class="mr-sheet-count" id="mrSheetCount">全部 ' + ops.length + ' 位干员</div>' +
        '<div class="mr-filter-summary" id="mrFilterSummary" hidden></div>' +
        '<div class="mr-sheet-groups" id="mrRosterGroups"></div>' +
      '</section>';
  }

  function mobileBondDetailHtml(id, b) {
    if (!b) return '';
    const effects = (b.effects || []).map((e) =>
      '<div class="mr-bond-effect"><b>激活 ' + esc(e.need) + '</b><span>' + linkedRich(e.text) + '</span></div>').join('');
    const ops = bondOperators(id);
    const onBoard = new Set((state.board?.placements || []).map((p) => p.operatorId));
    const avatars = ops.map((o) =>
      '<button class="mr-bond-op' + (onBoard.has(o.id) ? ' on-board' : '') + '" type="button" data-op-id="' + attr(o.id) + '" title="' + attr(o.name + (onBoard.has(o.id) ? '（棋盘上）' : '')) + '" aria-label="' + attr('查看 ' + o.name) + '" ' + avatarStyle(o, { rarity: true }) + '>' +
        '<img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" />' +
      '</button>').join('');
    return '<div class="mr-bond-detail">' +
      (b.summary ? '<p>' + linkedRich(b.summary) + '</p>' : '') +
      '<div class="mr-bond-ops-wrap"><span class="mr-bond-ops-label">含有的干员 · 棋盘 ' + ops.filter((o) => onBoard.has(o.id)).length + ' / 名册 ' + ops.length + ' · 灰色 = 未上场</span>' +
        '<div class="mr-bond-ops">' + (avatars || '<span class="mr-note">名册内没有该盟约干员</span>') + '</div>' +
      '</div>' +
      (effects || '<p class="mr-note">暂无档位数据。</p>') +
      (b.play ? '<p class="mr-bond-play"><b>本套怎么用</b>' + linkedRich(b.play) + '</p>' : '') +
    '</div>';
  }

  function mobilePieceInfoHtml() {
    if (!editMode || !mobileRange) return '';
    const o = op(mobileRange.operatorId);
    if (!o || o.missing) return '';
    const placement = (state.board?.placements || []).find((p) => p.operatorId === o.id);
    const dir = normalizeFacing(placement?.facing || 'right');
    const sk = skillOf(o);
    const counts = computeBondCounts(state);
    const bondRows = (o.bonds || []).map((id) => {
      const b = bond(id);
      if (!b) return '';
      const c = counts[id] || { count: 0, tierThreshold: null };
      const open = mobileBondOpen === id;
      return '<div class="mr-info-bond-wrap">' +
        '<button class="mr-info-bond" type="button" data-bond-id="' + attr(id) + '" aria-expanded="' + open + '">' +
          '<img src="' + bondIcon(id) + '" alt="" />' +
          '<span>' + esc(b.name) + '</span>' +
          '<b>' + esc(c.count) + ' / ' + esc(c.tierThreshold ?? '—') + '</b>' +
          '<i>' + (open ? '▾' : '▸') + '</i>' +
        '</button>' +
        (open ? mobileBondDetailHtml(id, b) : '') +
      '</div>';
    }).join('');
    const skills = (o.skills || []).map((s, i) => {
      const on = i === Number(o.skillIdx || 0);
      return '<div class="mr-piece-skill' + (on ? ' on' : '') + '">' +
        '<div class="mr-piece-skill-head"><b>' + skillNumeral(i) + ' · ' + esc(s.name || '') + '</b>' +
          '<span>SP ' + esc(s.spCost ?? '—') + ' / 初动 ' + esc(s.initSp ?? '—') + (s.duration ? ' / ' + esc(s.duration) + 's' : '') + '</span></div>' +
        '<p>' + rich(s.desc || '') + '</p>' +
      '</div>';
    }).join('');
    return '<section class="mr-piece-info" id="mrPieceInfo">' +
      '<div class="mr-piece-head">' +
        '<img class="mr-piece-avatar" src="' + avatarSrc(o.avatar) + '" alt="" style="border-color:' + rarityColor(o) + '" />' +
        '<div class="mr-piece-title"><b>' + esc(o.name) + '</b><span>' + esc(o.profession || '') + ' · 朝向' + (FACING_LABEL[dir] || dir) +
          (sk ? ' · 技能 ' + skillNumeral(o.skillIdx) + ' ' + esc(sk.name) : '') + '</span></div>' +
        '<button class="mr-piece-close" type="button" data-mr-piece-close>收起</button>' +
      '</div>' +
      // 动作条放头部下方：面板很长，放底部要滚过盟约/特性/技能才够得着
      '<div class="mr-piece-actions">' +
        '<button class="mr-action" type="button" data-op-id="' + attr(o.id) + '">完整详情</button>' +
        '<button class="mr-action danger" type="button" data-mr-remove="' + attr(o.id) + '">移出棋盘</button>' +
      '</div>' +
      '<div class="mr-piece-sub">盟约</div>' +
      '<div class="mr-piece-bonds">' + (bondRows || '<p class="mr-note">该干员没有盟约数据。</p>') + '</div>' +
      '<div class="mr-piece-sub">特性</div>' +
      '<div class="mr-piece-text">' +
        (o.trait ? '<p><b>基础</b>' + linkedRich(o.trait) + '</p>' : '') +
        (o.eliteTrait ? '<p><b>精锐</b>' + linkedRich(o.eliteTrait) + '</p>' : '') +
        (!o.trait && !o.eliteTrait ? '<p class="mr-note">资料库未收录特性。</p>' : '') +
      '</div>' +
      '<div class="mr-piece-sub">技能</div>' +
      '<div class="mr-piece-skills">' + (skills || '<p class="mr-note">资料库未收录技能。</p>') + '</div>' +
    '</section>';
  }

  function mobileEquipDetailHtml() {
    if (!mobileEquipOpen) return '';
    const key = mobileEquipOpen.key;
    if (!ITEM_META[key]) return '';
    const actions = editMode
      ? '<div class="mr-action-row">' +
          '<button class="mr-action" type="button" data-mr-equip-change data-op-id="' + attr(mobileEquipOpen.opId) + '" data-slot="' + attr(mobileEquipOpen.slot) + '" data-index="' + attr(mobileEquipOpen.index) + '">更换装备</button>' +
          '<button class="mr-action danger" type="button" data-mr-equip-remove data-op-id="' + attr(mobileEquipOpen.opId) + '" data-slot="' + attr(mobileEquipOpen.slot) + '" data-index="' + attr(mobileEquipOpen.index) + '">移除</button>' +
        '</div>'
      : '';
    return '<div class="mr-equip-detail" id="mrEquipDetail">' +
      '<button class="mr-detail-close" type="button" data-mr-equip-close>收起</button>' +
      equipmentDetailHtml(key) +
      actions +
    '</div>';
  }

  function handleMobileBoardClick(cell) {
    if (!cell) return;
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    if (!Number.isFinite(row) || !Number.isFinite(col)) return;
    const placement = (state.board?.placements || []).find((p) => Number(p.row) === row && Number(p.col) === col);
    if (placement) {
      const id = placement.operatorId;
      if (mobileRange && mobileRange.operatorId === id && mobileRangeArmed) {
        cycleFacing(id);
        return;
      }
      mobileRange = { operatorId: id, row, col };
      mobileRangeArmed = true;
      renderPoster();
      return;
    }
    if (selectedRosterId && hasOperator(selectedRosterId)) {
      const id = selectedRosterId;
      const existing = (state.board?.placements || []).find((p) => p.operatorId === id);
      mobileRange = { operatorId: id, row, col };
      mobileRangeArmed = true;
      placeRoster(id, row, col, existing ? normalizeFacing(existing.facing) : 'right', '', true);
      toast('已放置「' + (op(id)?.name || id) + '」；再点棋子换朝向');
      return;
    }
    clearMobileRangeDom();
  }

  function bindMobileBoardDrag() {
    const root = $('#mobileRead');
    if (!root) return;
    root.addEventListener('pointerdown', (e) => {
      if (!mobileUI || !editMode || e.button !== 0) return;
      if (e.target.closest('[data-mr-remove], input, textarea, [contenteditable="true"]')) return;
      const cell = e.target.closest('.mr-cell.on');
      if (!cell) return;
      const id = cell.dataset.opId;
      if (!id || !hasOperator(id)) return;
      mobileDrag = { id, cell, startX: e.clientX, startY: e.clientY, pointerId: e.pointerId, moved: false };
      try { cell.setPointerCapture(e.pointerId); } catch (err) { /* older browsers */ }
    }, { passive: true });
    root.addEventListener('pointermove', (e) => {
      const drag = mobileDrag;
      if (!drag) return;
      if (!drag.moved && Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) < 8) return;
      if (!drag.moved) {
        drag.moved = true;
        document.body.classList.add('mr-dragging');
        drag.cell.classList.add('mr-drag-source');
      }
      const target = document.elementFromPoint(e.clientX, e.clientY)?.closest('.mr-cell');
      $$('.mr-cell.mr-drop').forEach((el) => { if (el !== target) el.classList.remove('mr-drop'); });
      if (target && target !== drag.cell) target.classList.add('mr-drop');
      e.preventDefault();
    }, { passive: false });
    root.addEventListener('pointerup', (e) => {
      const drag = mobileDrag;
      if (!drag) return;
      const target = document.elementFromPoint(e.clientX, e.clientY)?.closest('.mr-cell');
      const moved = drag.moved;
      const id = drag.id;
      cancelMobileDrag();
      if (!moved) return;
      suppressClickUntil = Date.now() + 450;
      if (!target) return;
      const row = Number(target.dataset.row);
      const col = Number(target.dataset.col);
      const from = (state.board?.placements || []).find((p) => p.operatorId === id);
      if (!Number.isFinite(row) || !Number.isFinite(col)) return;
      if (from && Number(from.row) === row && Number(from.col) === col) return;
      mobileRange = { operatorId: id, row, col };
      mobileRangeArmed = true;
      movePlacement(id, row, col, '', '', true);
      toast('位置已更新');
    });
    root.addEventListener('pointercancel', cancelMobileDrag);
  }

  function openEquipmentInfo(key) {
    if (!ITEM_META[key]) return;
    openModal('<div class="modal-body">' +
      '<div class="detail-kicker">EQUIP / ' + esc(key) + '</div>' +
      '<h2 class="detail-name modal-title">' + esc(ITEM_META[key]) + '</h2>' +
      '<div class="equip-detail-modal">' + equipmentDetailHtml(key) + '</div>' +
      '<div class="form-actions"><button class="btn" type="button" data-close>关闭</button></div>' +
    '</div>');
  }

  function mobileEditAttrs(path, max, placeholder) {
    return editMode
      ? ' contenteditable="true" spellcheck="false" data-edit="' + attr(path) + '" data-max="' + max + '" data-placeholder="' + attr(placeholder) + '"'
      : '';
  }

  renderMobile = function renderMobileView() {
    const box = $('#mobileRead');
    if (!box) return;
    const keepTop = box.scrollTop;
    const editing = !!editMode;
    const m = state.meta || {};
    const b = state.board || { cols: 8, rows: 4, placements: [] };
    const board = boardFacts(b, m.boardGates);
    const cols = board.cols;
    const rows = board.rows;

    /* 1. title */
    const proof = String(m.proof || '').trim();
    const titleHtml = '<section class="mr-hero">' +
      '<div class="mr-kicker"><span class="mr-kicker-ru">РЕГЛАМЕНТ</span><span class="mr-kicker-cn">卫戍协议 · 规程</span></div>' +
      '<h1 class="mr-title"' + mobileEditAttrs('meta.title', 24, '填写标题') + '>' + esc(m.title || '未命名阵容') + '</h1>' +
      ((proof || editing) ? '<p class="mr-proof"' + mobileEditAttrs('meta.proof', 20, '填写实测说明') + '>' + esc(proof) + '</p>' : '') +
    '</section>';

    /* 2. core operators — horizontal scroll */
    const core = coreOnField(state.coreOperators, b.placements, { knownOnly: true }).map((c) => op(c.operatorId)).filter((o) => o && !o.missing);
    const coreHtml = core.length ? core.map((o) => {
      const sk = skillOf(o);
      const icon = skillIcon(o);
      return '<button class="mr-core" type="button" data-op-id="' + attr(o.id) + '" ' + avatarStyle(o, { rarity: true, role: true }) + ' aria-label="' + attr('查看 ' + o.name + ' 详情') + '">' +
        '<span class="mr-core-avatar"><img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" /></span>' +
        '<span class="mr-core-name">' + esc(o.name) + '</span>' +
        '<span class="mr-core-meta">' +
          '<span class="mr-skill" title="' + attr(sk ? '技能 ' + skillNumeral(o.skillIdx) + '：' + sk.name : '未配置技能') + '">' +
            (icon ? '<img src="' + icon + '" alt="" draggable="false" />' : '') +
            '<b>' + skillNumeral(o.skillIdx) + '</b>' +
          '</span>' +
          moduleBadge(o) +
        '</span>' +
      '</button>';
    }).join('') : '<p class="mr-empty">还没有核心干员。编辑后点 ☆ 加入，最多 6 人。</p>';

    /* 3. board */
    const cells = board.cells.map((cell) => {
      const r = cell.row;
      const c = cell.col;
      const o = cell.operator;
      const gateClass = cell.gateType ? ' mr-gate-col' : '';
      const gateBlank = cell.gateBlank ? ' mr-gate-blank' : '';
      const gateHtml = cell.gateLabel
        ? '<span class="mr-gate ' + attr(cell.gateType) + '">' + cell.gateLabel + '</span>'
        : '';
      if (o) {
        const dir = cell.facing;
        // 移除按钮不再放进格子：46px 格子里 20px 的 × 贴着中心点，
        // 手指点「棋子中心换朝向」会被触摸补偿判成删除。改到下方信息面板。
        return '<div class="mr-cell on' + gateClass + gateBlank + '" role="button" tabindex="0" data-op-id="' + attr(o.id) + '" data-row="' + r + '" data-col="' + c + '" ' + avatarStyle(o, { rarity: true }) + ' aria-label="' + attr(o.name + '，朝向' + FACING_LABEL[dir] + '，技能 ' + skillNumeral(o.skillIdx)) + '">' + gateHtml +
          '<img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" />' +
          '<span class="mr-facing" aria-hidden="true">' + facingArrow(cell.placement.facing) + '</span>' +
        '</div>';
      }
      const placeable = editing && selectedRosterId ? ' mr-placeable' : '';
      const role = editing
        ? ' role="button" tabindex="0" aria-label="' + attr(selectedRosterId ? '放置干员' : '空格，点其他位置取消范围') + '"'
        : ' aria-hidden="true"';
      return '<div class="mr-cell empty' + placeable + gateClass + gateBlank + '" data-row="' + r + '" data-col="' + c + '"' + role + '>' + gateHtml + '</div>';
    });
    const bench = benchFacts(state.bench);
    const benchHtml = m.showBench
      ? '<div class="mr-bench"><span class="mr-bench-label">备战区 ' + bench.filled + '/' + BENCH_SIZE + '</span><div class="mr-bench-slots">' +
        bench.slots.map((slot) => {
          const o = slot.operator;
          return o
            ? '<span class="mr-bench-unit" ' + avatarStyle(o, { rarity: true }) + '><img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" /></span>'
            : '<span class="mr-bench-slot"></span>';
        }).join('') + '</div></div>'
      : '';
    const boardHtml = '<section class="mr-section mr-board-section">' +
      '<div class="mr-sec-head"><h2 class="mr-sec-title">站位</h2><span class="mr-sec-note">' + cols + ' × ' + rows + ' · 箭头=朝向</span>' +
        (editing ? '<button class="board-clear" type="button" data-board-clear>清空棋盘</button>' : '') + '</div>' +
      '<p class="mr-note">' + (editing ? '点「选人」看详情 → 点「放置到棋盘」→ 点空格；点棋子先看范围，再点换朝向；拖棋子只换位置。' : '点头像看详情。') + '</p>' +
      '<div class="mr-board-wrap"><div class="mr-board" style="--cols:' + cols + '">' + cells.join('') + '</div></div>' +
      benchHtml +
      '<p class="mr-range-note" id="mrRangeNote" hidden></p>' +
      mobilePieceInfoHtml() +
    '</section>';

    /* 4. stages */
    const stages = stageFacts(state.stages, b);
    const stageHtml = stages.length ? stages.map((block) => {
      const s = block.stage;
      const i = block.index;
      const ids = block.operators;
      const note = String(s.note || '').trim();
      const noteMax = s.id === 'boss' ? 60 : 40;
      const addHtml = editing && ids.length < 9
        ? '<button class="mr-stage-add" type="button" data-mr-stage-add="' + i + '" aria-label="添加干员到 ' + attr(s.label || '') + '">+</button>'
        : '';
      const opsHtml = ids.length
        ? '<div class="mr-stage-ops">' + ids.map((o, slot) =>
            '<div class="mr-stage-op-wrap">' +
              '<button class="mr-stage-op" type="button" data-op-id="' + attr(o.id) + '" data-mr-stage-index="' + i + '" data-mr-stage-slot="' + slot + '" ' + avatarStyle(o, { rarity: true }) + ' aria-label="' + attr(editing ? '替换 ' + o.name : '查看 ' + o.name + ' 详情') + '"><img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" /></button>' +
              (editing ? '<button class="mr-stage-remove" type="button" data-mr-stage-remove="' + i + '" data-mr-stage-slot="' + slot + '" aria-label="从阶段移除 ' + attr(o.name) + '">×</button>' : '') +
            '</div>').join('') + addHtml + '</div>'
        : (editing ? '<div class="mr-stage-ops">' + addHtml + '</div>' : '<p class="mr-empty">这一阶段还没有阵容。</p>');
      return '<article class="mr-stage">' +
        '<div class="mr-stage-head"><span class="mr-stage-label">' + esc(s.label || '') + '</span>' +
          '<span class="mr-stage-tools"><span class="mr-stage-count">' + ids.length + ' 人</span>' +
            (editing ? '<button class="mr-stage-edit" type="button" data-mr-note-focus="' + i + '" aria-label="编辑 ' + attr(s.label || '') + ' 阶段备注">改备注</button>' : '') +
          '</span></div>' +
        opsHtml +
        ((note || editing) ? '<p class="mr-stage-note"' + mobileEditAttrs('stages.' + i + '.note', noteMax, '填写本阶段要点') + '>' + esc(note) + '</p>' : '') +
      '</article>';
    }).join('') : '<p class="mr-empty">还没有阶段数据。</p>';

    /* 5. bonds */
    const counts = computeBondCounts(state);
    const bondList = Object.values(counts).sort((x, y) =>
      (y.reachedTier - x.reachedTier) || (y.count - x.count) || String(x.id).localeCompare(String(y.id)));
    const bondHtml = bondList.length ? bondList.map((bd) => {
      const lib = bond(bd.id) || { name: bd.id, thresholds: [] };
      const on = bd.reachedTier > 0;
      const open = mobileBondOpen === bd.id;
      return '<div class="mr-bond-wrap">' +
        '<button class="mr-bond' + (on ? ' on' : ' off') + '" type="button" data-bond-id="' + attr(bd.id) + '" aria-expanded="' + open + '" aria-label="' + attr('查看 ' + lib.name + ' 盟约，当前 ' + bd.count + ' 人') + '">' +
          '<img src="' + bondIcon(bd.id) + '" alt="" draggable="false" />' +
          '<span class="mr-bond-name">' + esc(lib.name) + '</span>' +
          '<span class="mr-bond-count">' + esc(bd.count) + ' / ' + esc(bd.tierThreshold ?? '—') + '</span>' +
          '<i class="mr-chev" aria-hidden="true">' + (open ? '▾' : '▸') + '</i>' +
        '</button>' +
        (open ? mobileBondDetailHtml(bd.id, lib) : '') +
      '</div>';
    }).join('') : '<p class="mr-empty">棋盘上还没有干员，盟约未统计。</p>';
    const bondOn = bondList.filter((x) => x.reachedTier > 0).length;
    const bondSection = '<section class="mr-section">' +
      '<div class="mr-sec-head"><h2 class="mr-sec-title">盟约</h2><span class="mr-sec-note">' + (bondList.length ? bondOn + ' 已激活 / ' + bondList.length : '暂无') + '</span></div>' +
      '<div class="mr-bonds">' + bondHtml + '</div>' +
    '</section>';

    /* 6. equipment */
    const eqRows = equipmentFacts(state.equipment);
    const eqHtml = eqRows.length ? eqRows.map((entry) => {
      const o = entry.operator;
      const row = entry.row;
      const colsHtml = entry.slots.map((slot) => {
        const keys = slot.keys;
        const icons = keys.map((key, i) =>
          '<button class="mr-equip-icon" type="button" data-mr-equip="' + attr(key) + '" data-op-id="' + attr(o.id) + '" data-slot="' + slot.key + '" data-index="' + i + '" title="' + attr(item(key)) + '" aria-label="' + attr(item(key) + '，查看装备效果') + '"><img src="' + itemSrc(key) + '" alt="" draggable="false" /></button>').join('');
        const add = editing && canAddEquip(row) && keys.length < 3
          ? '<button class="mr-equip-icon mr-equip-add" type="button" data-mr-equip-add data-op-id="' + attr(o.id) + '" data-slot="' + slot.key + '" aria-label="添加装备">+</button>'
          : '';
        return '<div class="mr-equip-col"><span class="mr-equip-label">' + slot.label + '</span>' +
          '<div class="mr-equip-icons">' + (icons + add || '<span class="mr-equip-none">—</span>') + '</div></div>';
      }).join('');
      // 和 PC 一致：编辑态头像角上的 ⇄ 换的是「这一行给谁用」
      const swapBtn = editing
        ? '<button class="mr-equip-swap" type="button" data-mr-equip-swap="' + entry.rowIndex + '" aria-label="' + attr('更换 ' + o.name) + '" title="更换这一行的干员">⇄</button>'
        : '';
      return '<div class="mr-equip-row">' +
        '<div class="mr-equip-op-wrap">' +
          '<button class="mr-equip-op" type="button" data-op-id="' + attr(o.id) + '" ' + avatarStyle(o, { rarity: true }) + ' aria-label="' + attr('查看 ' + o.name + ' 详情') + '">' +
            '<img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" />' +
            '<span>' + esc(o.name) + '</span>' +
          '</button>' + swapBtn +
        '</div>' + colsHtml +
      '</div>';
    }).join('') : '<p class="mr-empty">还没有装备位。</p>';
    const eqSection = '<section class="mr-section">' +
      '<div class="mr-sec-head"><h2 class="mr-sec-title">装备</h2><span class="mr-sec-note">' + EQUIP_SLOTS.map((slot) => slot.label).join(' / ') + '</span></div>' +
      '<div class="mr-equips">' + eqHtml + '</div>' +
      mobileEquipDetailHtml() +
    '</section>';

    /* 7. covenant strategy — full effect text, never trimmed */
    const picked = strategyFacts(state.strategy);
    const main = picked.main;
    const alts = picked.alts;
    const strategyCard = (s, label) => '<article class="mr-strategy">' +
      '<div class="mr-strategy-label">' + esc(label) + '</div>' +
      '<button class="mr-strategy-head" type="button" data-strategy-open="' + attr(s.id) + '" aria-label="' + attr('查看 ' + s.name + ' 完整效果') + '">' +
        '<img src="' + strategyIcon(s) + '" alt="" draggable="false" />' +
        '<span class="mr-strategy-name">' + esc(s.name) + '</span>' +
        '<span class="mr-kind ' + attr(s.kind || '') + '">' + strategyKind(s) + '</span>' +
        '<span class="mr-hp">HP ' + esc(s.initialHp ?? '—') + '</span>' +
        (strategyCost(s) ? '<span class="mr-cost">消耗 ' + strategyCost(s) + '</span>' : '') +
      '</button>' +
      '<p class="mr-effect">' + rich(s.effect || '') + '</p>' +
      (editing ? '<div class="mr-strategy-actions">' +
        (label === '主盟约'
          ? '<button class="mr-action" type="button" data-strategy-edit>更换主盟约</button>'
          : '<button class="mr-action" type="button" data-strategy-alt-add>调整次选</button>') +
        '<button class="mr-action danger" type="button" data-strategy-remove="' + attr(s.id) + '">移除</button>' +
      '</div>' : '') +
    '</article>';
    const mainHtml = main
      ? strategyCard(main, '主盟约')
      : '<p class="mr-empty">还没有选择盟约策略。' +
          (editing ? ' <button class="mr-action" type="button" data-strategy-edit>选择主盟约</button>' : '点「海报」进入编辑后可以选择。') +
        '</p>';
    const altHtml = alts.map((s) => strategyCard(s, '次选')).join('');
    const addAlt = editing && main && alts.length < 2
      ? '<button class="mr-action mr-strategy-add" type="button" data-strategy-alt-add>+ 次选</button>'
      : '';
    const reason = picked.reason.trim();
    const strategyHtml = '<section class="mr-section">' +
      '<div class="mr-sec-head"><h2 class="mr-sec-title">盟约策略</h2><span class="mr-sec-note">' + (main ? '主盟约' + (alts.length ? ' + ' + alts.length + ' 次选' : '') : '未选择') + '</span></div>' +
      '<div class="mr-strategies">' + mainHtml + altHtml + addAlt + '</div>' +
      ((reason || editing) ? '<div class="mr-reason"><b>为什么选它</b><p' + mobileEditAttrs('strategy.reason', 40, '填写选择理由') + '>' + esc(reason) + '</p></div>' : '') +
    '</section>';

    /* 8. footer */
    const credit = String(m.credit || '').trim();
    const footerMeta = editing
      ? '<span' + mobileEditAttrs('meta.author', 12, '作者') + '>' + esc(m.author || '') + '</span> · ' +
        '<span' + mobileEditAttrs('meta.version', 8, '版本') + '>' + esc(m.version || '') + '</span> · ' +
        '<span' + mobileEditAttrs('meta.date', 10, '日期') + '>' + esc(m.date || '') + '</span>'
      : esc(m.author || '') + ' · ' + esc(m.version || '') + ' · ' + esc(m.date || '');
    const footerHtml = '<footer class="mr-footer">' +
      '<p><b>非官方 · 非盈利 · 素材版权归鹰角网络所有</b> · 数据：PRTS · 可露希尔Wiki' + (credit ? ' · ' + esc(credit) : '') + '</p>' +
      '<p class="mr-meta">' + footerMeta + '</p>' +
    '</footer>';

    /* 10. sticky mode bar + fixed action dock + roster sheet */
    // 编辑时顶栏多一组撤销 / 重做（底部 dock 四个位已满，且拇指够得着顶栏右侧）
    const undoA = historyAttrs('undo');
    const redoA = historyAttrs('redo');
    const historyHtml = editing
      ? '<div class="mr-history" role="group" aria-label="撤销与重做">' +
          '<button class="mr-history-btn" type="button" data-history="undo" aria-label="撤销" aria-disabled="' + undoA.disabled + '" title="' + attr(undoA.title) + '">' + HISTORY_ICON.undo + '</button>' +
          '<button class="mr-history-btn" type="button" data-history="redo" aria-label="重做" aria-disabled="' + redoA.disabled + '" title="' + attr(redoA.title) + '">' + HISTORY_ICON.redo + '</button>' +
        '</div>'
      : '';
    const topHtml = '<header class="mr-top">' +
      '<span class="mr-top-title"><b>卫戍协议 · 规程</b><span>' + (editing ? '编辑中 / EDIT' : '阅读版 / READ') + '</span></span>' +
      historyHtml +
      '<div class="mr-switch" role="group" aria-label="显示模式">' +
        '<button class="mr-switch-btn on" type="button" data-view-mode="read" aria-pressed="true">阅读版</button>' +
        '<button class="mr-switch-btn" type="button" data-view-mode="poster" aria-pressed="false">海报</button>' +
      '</div>' +
    '</header>';
    const editHint = editing
      ? '<div class="mr-edit-hint"><b>手机编辑</b><span>点「选人」看详情 → 点「放置到棋盘」→ 点空格；点棋子先看范围/盟约/特性/技能，再点换朝向（选中后有 × 移除）；拖棋子换位；点虚线文字可改。</span></div>'
      : '';
    const dockHtml = editing
      ? '<nav class="mr-dock" aria-label="手机编辑操作">' +
          '<button class="mr-dock-btn" type="button" data-mr-roster>选人</button>' +
          '<button class="mr-dock-btn primary" type="button" data-mr-edit>完成</button>' +
          '<button class="mr-dock-btn" type="button" data-view-share>分享</button>' +
          '<button class="mr-dock-btn" type="button" data-view-export>导出</button>' +
        '</nav>'
      : '<nav class="mr-dock" aria-label="阅读版操作">' +
          '<button class="mr-dock-btn" type="button" data-mr-edit>编辑</button>' +
          '<button class="mr-dock-btn" type="button" data-view-share>分享</button>' +
          '<button class="mr-dock-btn primary" type="button" data-view-export>导出</button>' +
          '<button class="mr-dock-btn" type="button" data-view-mode="poster">海报</button>' +
        '</nav>';
    const sheetHtml = editing && mobileRosterOpen ? mobileRosterSheetHtml() : '';

    box.innerHTML = topHtml +
      '<div class="mr-wrap">' + editHint + titleHtml +
        '<section class="mr-section"><div class="mr-sec-head"><h2 class="mr-sec-title">核心干员</h2><span class="mr-sec-note">' + core.length + ' 人 · 可横滑</span></div><div class="mr-core-row">' + coreHtml + '</div></section>' +
        boardHtml +
        bondSection +
        '<section class="mr-section"><div class="mr-sec-head"><h2 class="mr-sec-title">成型节奏</h2><span class="mr-sec-note">' + stages.length + ' 阶段</span></div><div class="mr-stages">' + stageHtml + '</div></section>' +
        eqSection + strategyHtml + footerHtml +
      '</div>' + sheetHtml + dockHtml;
    applyMobileRange();
    filterMobileRoster();
    box.scrollTop = keepTop;
  };

  /* ------------------------------------------------------------
     Flow mode: 选人 → 站位（含备战） → 节奏 → 核心/装备 → 盟约
     ------------------------------------------------------------ */
  const FLOW_STEPS = ['选人', '站位', '节奏', '核心 / 装备', '策略'];
  const flowUnique = (ids) => [...new Set((ids || []).filter((id) => hasOperator(id)))];

  function flowPendingStageIds(index = null) {
    const current = index === null ? new Set() : new Set((flowStages?.[index]?.lineup) || []);
    return flowPicked.filter((id) => !current.has(id));
  }

  function flowOpenMode() {
    if (flowOpen) return;
    flowSnapshot = {
      board: clone(state.board),
      bench: clone(state.bench || []),
      core: clone(state.coreOperators || []),
      equipment: clone(state.equipment || []),
      stages: clone(state.stages || []),
      strategy: clone(state.strategy || {}),
      meta: { showBench: !!state.meta.showBench, equipmentInCore: !!state.meta.equipmentInCore }
    };
    flowBoard = clone(state.board || { cols: 9, rows: 4, placements: [] });
    flowBench = clone((state.bench || []).slice(0, BENCH_SIZE));
    // 流程是同一套阵容的分步编辑，进来就看到海报上已有的阶段，不另起一份。
    flowStages = clone(state.stages || []).map((s) => ({
      ...s,
      lineupSource: 'manual',
      lineup: stageIds(s).filter((id) => hasOperator(id)).slice(0, 9)
    }));
    flowPicked = flowUnique([
      ...(state.board?.placements || []).map((p) => p.operatorId),
      ...(state.bench || []),
      ...flowStages.flatMap((s) => s.lineup || [])
    ]);
    if (!flowStages.length) {
      flowStages = [
        { id: 'open', label: '起手', lineupSource: 'manual', lineup: [], note: '' },
        { id: 'mid', label: '中期', lineupSource: 'manual', lineup: [], note: '' },
        { id: 'end', label: '大成', lineupSource: 'manual', lineup: [], note: '' }
      ];
    }
    flowStep = 0;
    flowSelected = '';
    flowQuery = '';
    flowBond = 'all';
    flowKind = 'all';
    flowTrigger = 'all';
    flowMoreFilters = false;
    flowTier = 'all';
    flowDetailId = '';
    flowStrategyQuery = '';
    flowDrag = null;
    state.meta.showBench = true;
    state.meta.equipmentInCore = true;
    flowOpen = true;
    document.body.classList.add('flow-open');
    $('#flowMode').hidden = false;
    renderFlow();
  }

  function flowClose(commit) {
    if (!flowOpen) return;
    if (commit) {
      state.board = clone(flowBoard);
      state.bench = clone(flowBench).slice(0, BENCH_SIZE);
      state.stages = clone(flowStages);
      state.meta.showBench = true;
      state.meta.equipmentInCore = true;
      const field = new Set((state.board.placements || []).map((p) => p.operatorId));
      state.coreOperators = (state.coreOperators || []).filter((c) => field.has(c.operatorId)).slice(0, 6);
      saveNow();
    } else if (flowSnapshot) {
      state.board = clone(flowSnapshot.board);
      state.bench = clone(flowSnapshot.bench);
      state.coreOperators = clone(flowSnapshot.core);
      state.equipment = clone(flowSnapshot.equipment);
      state.stages = clone(flowSnapshot.stages);
      state.strategy = clone(flowSnapshot.strategy);
      state.meta.showBench = flowSnapshot.meta.showBench;
      state.meta.equipmentInCore = flowSnapshot.meta.equipmentInCore;
      saveNow();
    }
    flowOpen = false;
    flowSnapshot = null;
    flowSelected = '';
    document.body.classList.remove('flow-open');
    $('#flowMode').hidden = true;
    $('#flowMode').innerHTML = '';
    renderPoster();
  }

  function flowMoveField(id, row, col) {
    if (isGateCell(row, col)) { toast('门列不能部署干员', true); return; }
    const maxField = 10;
    const existing = (flowBoard.placements || []).find((p) => Number(p.row) === Number(row) && Number(p.col) === Number(col));
    const current = (flowBoard.placements || []).find((p) => p.operatorId === id);
    if (existing && existing.operatorId !== id && current) {
      const fr = current.row, fc = current.col;
      current.row = existing.row; current.col = existing.col;
      existing.row = fr; existing.col = fc;
      flowSelected = '';
      renderFlow();
      return;
    }
    if (!current && (flowBoard.placements || []).length >= maxField) { toast('场上最多 10 人', true); return; }
    flowBench = flowBench.filter((x) => x !== id);
    if (current) { current.row = row; current.col = col; }
    else {
      flowBoard.placements = flowBoard.placements || [];
      flowBoard.placements.push({ operatorId: id, row, col, facing: 'right' });
    }
    flowSelected = '';
    renderFlow();
  }

  function flowMoveBench(id, index = null) {
    const at = index === null || index === undefined ? flowBench.length : index;
    if (at >= BENCH_SIZE) { toast('备战区已满（10 格）', true); return; }
    flowBoard.placements = (flowBoard.placements || []).filter((p) => p.operatorId !== id);
    flowBench = flowBench.filter((x) => x !== id);
    flowBench.splice(Math.min(at, flowBench.length), 0, id);
    flowSelected = '';
    renderFlow();
  }

  function flowUnplace(id) {
    flowBoard.placements = (flowBoard.placements || []).filter((p) => p.operatorId !== id);
    flowBench = flowBench.filter((x) => x !== id);
    flowSelected = '';
    renderFlow();
  }

  function flowDropPicked(id) {
    flowPicked = flowPicked.filter((x) => x !== id);
    if (flowSelected === id) flowSelected = '';
    if (flowDetailId === id) flowDetailId = '';
    flowBoard.placements = (flowBoard.placements || []).filter((p) => p.operatorId !== id);
    flowBench = flowBench.filter((x) => x !== id);
    flowStages = (flowStages || []).map((s) => ({ ...s, lineup: (s.lineup || []).filter((x) => x !== id) }));
  }

  function flowRotate(id) {
    const p = (flowBoard.placements || []).find((x) => x.operatorId === id);
    if (!p) return;
    const at = FACING_ORDER.indexOf(normalizeFacing(p.facing));
    p.facing = FACING_ORDER[(at + 1) % FACING_ORDER.length];
    flowSelected = '';
    renderFlow();
  }

  function flowOperatorDetailHtml(o) {
    if (!o) return '';
    const bonds = (o.bonds || []).map((id) => bond(id)).filter(Boolean);
    return '<div class="flow-op-detail">' +
      '<div class="flow-op-detail-head"><b>' + esc(o.name) + '</b><span>' + esc(o.class || o.profession || '') + (o.cost != null ? ' · 费用 ' + esc(o.cost) : '') + '</span></div>' +
      '<div class="flow-op-detail-sec"><em>特质</em><p>' + (o.trait ? linkedRich(o.trait) : '暂无特质数据') + '</p></div>' +
      '<div class="flow-op-detail-sec"><em>盟约</em>' + (bonds.length
        ? '<div class="flow-op-detail-bonds">' + bonds.map((b) => {
          const summary = String(b.summary || '').replace(new RegExp('^【' + b.name + '】'), '');
          return '<span title="' + attr(summary) + '"><b>【' + esc(b.name) + '】</b>' + esc(summary) + '</span>';
        }).join('') + '</div>'
        : '<p>该干员没有盟约数据。</p>') + '</div>' +
    '</div>';
  }

  function flowStepHtml() {
    if (flowStep === 0) {
      const q = flowQuery.trim().toLowerCase();
      const bondEntries = currentBondEntries();
      const coreBonds = bondEntries.filter(([id]) => isCoreBond(id));
      const extraBonds = bondEntries.filter(([id]) => !isCoreBond(id));
      const bondChip = (id, name) => '<button type="button" class="' + (flowBond === id ? 'on' : '') + '" data-flow-bond="' + attr(id) + '">' + esc(name) + '</button>';
      const filterRow = (label, chips) => '<div class="flow-filter-row"><span class="flow-chip-label">' + label + '</span><div class="flow-chips">' + chips + '</div></div>';
      const list = Object.values(state.operators || {})
        .filter((o) => o && o.name && o.name !== '未知干员')
        .filter((o) => flowBond === 'all' || (o.bonds || []).includes(flowBond))
        .filter((o) => flowTier === 'all' || operatorTier(o) === flowTier)
        .filter((o) => flowKind === 'all' || String(o.trait || '').startsWith(flowKind))
        .filter((o) => flowTrigger === 'all' || String(o.trait || '').includes(flowTrigger))
        .filter((o) => !q || o.name.toLowerCase().includes(q) || String(window.OP_PINYIN?.[o.name]?.full || '').toLowerCase().includes(q) || String(window.OP_PINYIN?.[o.name]?.initials || '').toLowerCase().includes(q))
        .sort((a, b) => (tierNumber(a) - tierNumber(b)) || a.name.localeCompare(b.name, 'zh'));
      const extraOn = extraBonds.some(([id]) => id === flowBond);
      const moreOpen = flowMoreFilters || flowTrigger !== 'all' || extraOn;
      const rows = list.map((o) => {
        const on = flowPicked.includes(o.id);
        return '<div class="flow-roster-item' + (flowDetailId === o.id ? ' open' : '') + '">' +
          '<button class="flow-roster-row' + (on ? ' on' : '') + '" type="button" data-flow-pick="' + attr(o.id) + '" title="' + attr(on ? '再次点击取消 ' + o.name : '选择 ' + o.name) + '" aria-pressed="' + on + '">' +
          '<img src="' + avatarSrc(o.avatar) + '" alt="" ' + avatarStyle(o, { rarity: true }) + ' />' +
          '<span class="flow-roster-main"><b>' + esc(o.name) + '</b><em>' + esc((o.bonds || []).map((id) => state.bondLibrary?.[id]?.name || id).join(' / ')) + '</em></span>' +
          '<span class="flow-roster-trait">' + esc(String(o.trait || '').slice(0, 42)) + '</span>' +
          '<i>' + (on ? '已选' : '+') + '</i></button>' +
          (flowDetailId === o.id ? flowOperatorDetailHtml(o) : '') +
        '</div>';
      }).join('');
      const moreRows = filterRow('触发', ['all', '战斗中', '战斗开始时', '进入休整期时', '休整期结束时', '获得时', '开启技能时'].map((t) => '<button type="button" class="' + (flowTrigger === t ? 'on' : '') + '" data-flow-trigger="' + attr(t) + '">' + esc(t === 'all' ? '全部' : t) + '</button>').join('')) +
        filterRow('附加盟约', extraBonds.map(([id, b]) => bondChip(id, b.name)).join(''));
      return '<div class="flow-shell flow-pick">' +
        '<div class="flow-card"><div class="flow-card-head"><b>先把人放进池子</b><span>已选再点一次会取消 · 不摆位</span></div>' +
        '<input class="flow-search" data-flow-search value="' + attr(flowQuery) + '" placeholder="搜索干员 / 拼音" />' +
        '<div class="flow-filters">' +
          filterRow('等阶', ['all', ...TIER_ORDER].map((t) => '<button type="button" class="' + (flowTier === t ? 'on' : '') + '" data-flow-tier="' + attr(t) + '">' + esc(t === 'all' ? '全部' : t) + '</button>').join('') + '<button type="button" class="flow-reset" data-flow-reset>重置筛选</button>') +
          filterRow('特质', ['all', ...TRAIT_KINDS].map((k) => '<button type="button" class="' + (flowKind === k ? 'on' : '') + '" data-flow-kind="' + attr(k) + '">' + esc(k === 'all' ? '全部' : k) + '</button>').join('')) +
          filterRow('核心盟约', bondChip('all', '全部') + coreBonds.map(([id, b]) => bondChip(id, b.name)).join('')) +
          '<div class="flow-filter-row"><span class="flow-chip-label">更多</span><div class="flow-chips"><button type="button" data-flow-more aria-expanded="' + moreOpen + '">' + (moreOpen ? '收起筛选' : '更多筛选') + '</button></div></div>' +
          (moreOpen ? moreRows : '') +
        '</div>' +
        '<div class="flow-roster">' + (rows || '<p class="flow-muted">没有符合条件的干员</p>') + '</div></div>' +
        '<div class="flow-picked"><b>已选 ' + flowPicked.length + '</b>' + (flowPicked.length ? flowPicked.map((id) => '<span data-flow-unpick="' + attr(id) + '">' + esc(op(id)?.name || id) + ' ×</span>').join('') : '<em>点干员加入，再点一次取消</em>') + '</div>' +
      '</div>';
    }

    if (flowStep === 1) {
      const facts = boardFacts(flowBoard, state.meta.boardGates || []);
      const cells = facts.cells.map((cell) => {
        const o = cell.operator;
        const gateBlank = cell.gateBlank ? ' gate-blank' : '';
        return '<button type="button" class="flow-cell' + (cell.gateType ? ' gate' : '') + gateBlank + (o ? ' on' : '') + '" data-flow-cell="' + cell.row + ',' + cell.col + '"' + (o ? ' draggable="true" data-flow-drag="' + attr(o.id) + '" data-flow-drag-kind="field" ' + avatarStyle(o) + '' : '') + '>' +
          (cell.gateLabel ? '<span class="flow-gate ' + attr(cell.gateType) + '">' + cell.gateLabel + '</span>' : '') +
          (o ? '<img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" /><span class="facing-mark" data-dir="' + attr(cell.facing) + '"></span>' : '') +
        '</button>';
      });
      const pool = flowPicked;
      const benchSlots = benchFacts(flowBench, { compact: false }).slots.map((slot) => {
        const o = slot.operator;
        return '<button type="button" class="flow-bench-slot' + (o ? ' on' : '') + '" data-flow-bench="' + slot.index + '"' + (o ? ' draggable="true" data-flow-drag="' + attr(o.id) + '" data-flow-drag-kind="bench" ' + avatarStyle(o) + '' : '') + '>' + (o ? '<img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" />' : (slot.index + 1)) + '</button>';
      }).join('');
      return '<div class="flow-shell">' +
        '<div class="flow-card"><div class="flow-card-head"><b>站位</b><span>上场最多 10 人 · 备战区 10 格</span><button class="board-clear" type="button" data-flow-clear-board>清空棋盘</button></div>' +
        '<div class="flow-pool" data-flow-pool-drop>' + (pool.length ? pool.map((id) => {
          const onField = (flowBoard.placements || []).some((p) => p.operatorId === id);
          const onBench = flowBench.includes(id);
          return '<button type="button" class="' + (flowSelected === id ? 'on' : '') + (onField || onBench ? ' placed' : '') + '" draggable="true" data-flow-select="' + attr(id) + '" data-flow-drag="' + attr(id) + '" data-flow-drag-kind="pool" title="' + attr((op(id)?.name || id) + (onField ? ' · 已上场' : onBench ? ' · 备战区' : ' · 待放入')) + '"><img src="' + avatarSrc(op(id)?.avatar) + '" alt="" draggable="false" /><span>' + esc(op(id)?.name || id) + '</span></button>';
        }).join('') : '<span class="flow-muted">还没有选人，回上一步先选人。</span>') + '</div>' +
        '<div class="flow-board" style="--cols:' + facts.cols + '">' + cells.join('') + '</div>' +
        '<div class="flow-bench"><span>备战区</span><div>' + benchSlots + '</div></div>' +
        '<p class="flow-muted">拖头像到棋盘或备战区；点棋子换朝向；拖到已有干员的格子上会交换，朝向各自保留。</p></div>' +
        (() => { const p = buildTraitPanels(flowBoard, flowBench); return p.left + p.right; })() +
      '</div>';
    }

    if (flowStep === 2) {
      // 这一步改的是草稿阵容本身。写回之后，海报 / 阅读版 / 长图用 stageFacts 显示。
      const stages = flowStages.map((s, i) => {
        const lineup = (s.lineup || []).slice(0, 9);
        const available = flowPicked.filter((id) => !lineup.includes(id));
        return '<div class="flow-stage"><div class="flow-stage-head"><b>' + esc(s.label || ('阶段 ' + (i + 1))) + '</b>' +
          '<span class="flow-stage-actions"><button type="button" data-flow-stage-fill="' + i + '">填入可用</button>' +
          (flowStages.length > 1 ? '<button type="button" class="flow-stage-del" data-flow-stage-remove-block="' + i + '" title="删除这个阶段">×</button>' : '') + '</span></div>' +
          '<div class="flow-stage-pool"><em>可用池 · 拖入本阶段</em>' + (available.length ? available.map((id) => '<button type="button" draggable="true" data-flow-drag="' + attr(id) + '" data-flow-drag-kind="stage" data-flow-stage-source="' + i + '" ' + avatarStyle(op(id)) + '><img src="' + avatarSrc(op(id)?.avatar) + '" alt="" draggable="false" />' + esc(op(id)?.name || id) + '</button>').join('') : '<span class="flow-muted">这个阶段已经用完可用池</span>') + '</div>' +
          '<div class="flow-stage-slots flow-stage-drop" data-flow-stage-drop="' + i + '">' + Array.from({ length: 9 }, (_, j) => {
            const id = lineup[j];
            const o = id ? op(id) : null;
            return o ? '<button type="button" draggable="true" data-flow-stage-remove="' + i + ',' + j + '" data-flow-drag="' + attr(id) + '" data-flow-drag-kind="stage" data-flow-stage-source="' + i + '" ' + avatarStyle(o) + '><img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" /><span>' + esc(o.name) + '</span></button>' : '<span class="empty">' + (j + 1) + '</span>';
          }).join('') + '</div>' +
          '<input class="flow-note" data-flow-stage-note="' + i + '" value="' + attr(s.note || '') + '" placeholder="这一阶段做什么" /></div>';
      }).join('');
      return '<div class="flow-shell">' +
        '<div class="flow-card"><div class="flow-card-head"><b>节奏</b><span>池子可复用 · 每个阶段同一人不重复</span></div>' +
        '<div class="flow-pending"><b>选人池 ' + flowPicked.length + '</b>' + (flowPicked.length ? flowPicked.map((id) => '<span>' + esc(op(id)?.name || id) + '</span>').join('') : '<em>先回上一步选人</em>') + '</div>' +
        '<div class="flow-stage-add-row"><button type="button" class="btn btn-small" data-flow-stage-add' + (flowStages.length >= 5 ? ' disabled' : '') + '>+ 增加阶段</button><span>每个阶段最多 9 人；同一个人可出现在不同阶段，但同一阶段只出现一次。</span></div>' +
        '<div class="flow-stages">' + stages + '</div></div>' +
      '</div>';
    }

    if (flowStep === 3) {
      const fieldIds = (flowBoard.placements || []).map((p) => p.operatorId);
      const coreIds = coreOnField(state.coreOperators, flowBoard.placements).map((c) => c.operatorId);
      state.coreOperators = coreIds.map((id) => ({ operatorId: id, role: '' }));
      const candidates = fieldIds.filter((id) => !coreIds.includes(id));
      const coreCards = coreIds.map((id) => {
        const o = op(id);
        return o ? '<div class="flow-core-card" draggable="true" data-flow-drag="' + attr(id) + '" data-flow-drag-kind="core"><img src="' + avatarSrc(o.avatar) + '" alt="' + attr(o.name) + '" draggable="false" ' + avatarStyle(o) + ' /><b>' + esc(o.name) + '</b><button type="button" class="flow-core-remove" data-flow-core-remove="' + attr(id) + '">移出核心</button>' + coreEquipHtml(o) + '</div>' : '';
      }).join('');
      return '<div class="flow-shell">' +
        '<div class="flow-card"><div class="flow-card-head"><b>核心干员 / 装备</b><span>核心 ' + coreIds.length + ' / 6 · 拖头像加入 / 拖出移出</span></div>' +
        '<div class="flow-core-list" data-flow-core-drop>' + (coreCards || '<p class="flow-muted">还没有核心干员，把下方头像拖到这里。</p>') + '</div>' +
        '<div class="flow-candidates" data-flow-core-out><b>上场干员 · 拖入上方核心区</b>' + (candidates.length ? candidates.map((id) => '<button type="button" class="flow-core-candidate" draggable="true" data-flow-drag="' + attr(id) + '" data-flow-drag-kind="core-candidate" data-flow-core-add="' + attr(id) + '" ' + avatarStyle(op(id)) + '><img src="' + avatarSrc(op(id)?.avatar) + '" alt="" draggable="false" />' + esc(op(id)?.name || id) + '</button>').join('') : '<span class="flow-muted">所有上场干员都已在核心区</span>') + '</div>' +
        '<p class="flow-muted">装备只跟核心 6 人走；点装备槽添加 / 替换。拖核心头像到下方上场区可移出。</p></div>' +
      '</div>';
    }

    const picked = strategyFacts(state.strategy);
    const st = picked.raw;
    const all = Object.values(state.strategyLibrary || {});
    const main = picked.main;
    const alts = picked.alts;
    const card = (s, selectedKind) => '<div class="flow-strategy-card ' + selectedKind + '" title="' + attr(s.name + (s.effect ? '：' + s.effect : '')) + '">' +
      '<img src="' + strategyIcon(s) + '" alt="" draggable="false" />' +
      '<div class="flow-strategy-main"><div><b>' + esc(s.name) + '</b><em>' + esc(strategyKind(s)) + '</em></div>' +
      '<span>' + (strategyCost(s) ? '消耗 ' + strategyCost(s) : '无消耗') + (s.initialHp != null ? ' · HP ' + esc(s.initialHp) : '') + '</span>' +
      '<p>' + esc(strategyBrief(s.id) || s.effect || '') + '</p></div>' +
      '</div>';
    const q = flowStrategyQuery.trim().toLowerCase();
    const altIds = alts.map((s) => s.id);
    const candidates = all.filter((s) => s.id !== st.main && !altIds.includes(s.id) && (!q || s.name.toLowerCase().includes(q)));
    const selected = (main ? '<div class="flow-strategy-selected"><div class="flow-strategy-selected-head"><b>主选</b><span>1 个</span></div>' + card(main, 'main') +
      '<button type="button" class="flow-strategy-remove" data-flow-strategy-clear>移除主选</button></div>' : '<p class="flow-muted">还没有主选；从下方选中一个设为「主选」，也可以只保留次选或不选。</p>') +
      '<div class="flow-strategy-selected"><div class="flow-strategy-selected-head"><b>次选</b><span>' + alts.length + ' / 2</span></div>' +
      (alts.length ? alts.map((s) => card(s, 'alt') + '<button type="button" class="flow-strategy-remove" data-flow-strategy-remove="' + attr(s.id) + '">移除次选</button>').join('') : '<p class="flow-muted">可 0–2 个。</p>') + '</div>';
    return '<div class="flow-shell">' +
      '<div class="flow-card"><div class="flow-card-head"><b>盟约策略</b><span>可 0 主选 / 0–2 次选</span></div>' +
      selected +
      '<label class="flow-label">选择理由<textarea data-flow-reason rows="3" maxlength="40">' + esc(st.reason || '') + '</textarea></label>' +
      '<div class="flow-strategy-pick-head"><b>全部策略</b><input class="flow-search" data-flow-strategy-search value="' + attr(flowStrategyQuery) + '" placeholder="搜索策略" /></div>' +
      '<div class="flow-strategy-list">' + (candidates.length ? candidates.map((s) => '<div class="flow-strategy-pick">' + card(s, '') +
        '<div class="flow-strategy-pick-actions"><button type="button" data-flow-strategy-main="' + attr(s.id) + '">设为主选</button>' +
        '<button type="button" data-flow-strategy-alt="' + attr(s.id) + '"' + (alts.length >= 2 ? ' disabled' : '') + '>+ 次选</button></div></div>').join('') : '<p class="flow-muted">没有匹配的盟约。</p>') + '</div>' +
      '<p class="flow-muted">完成会写回海报；主选可空，次选最多 2 个。</p></div>' +
    '</div>';
  }

  function renderFlow() {
    if (!flowOpen) return;
    const box = $('#flowMode');
    const sameStep = box.dataset.step === String(flowStep);
    const oldBody = box.querySelector('.flow-body');
    const oldRoster = box.querySelector('.flow-roster');
    const oldBodyTop = oldBody?.scrollTop || 0;
    const oldRosterTop = oldRoster?.scrollTop || 0;
    const total = flowPicked.length;
    const field = (flowBoard?.placements || []).length;
    const bench = flowBench.length;
    box.innerHTML = '<header class="flow-head"><div><div class="flow-kicker">FLOW MODE / ' + (flowStep + 1) + ' OF 5</div><h1>' + esc(FLOW_STEPS[flowStep]) + '</h1></div>' +
      '<button type="button" class="flow-close" data-flow-close aria-label="退出流程模式">×</button></header>' +
      '<nav class="flow-stepper">' + FLOW_STEPS.map((s, i) => '<span class="' + (i === flowStep ? 'on' : (i < flowStep ? 'done' : '')) + '"><b>' + (i + 1) + '</b>' + esc(s) + '</span>').join('') + '</nav>' +
      '<main class="flow-body' + (flowStep === 0 ? ' flow-body-fill' : '') + '">' + flowStepHtml() + '</main>' +
      '<footer class="flow-foot"><span>选人 ' + total + ' · 上场 ' + field + ' · 备战 ' + bench + '</span>' +
      '<div><button type="button" class="btn" data-flow-prev' + (flowStep === 0 ? ' disabled' : '') + '>上一步</button>' +
      (flowStep === 4 ? '<button type="button" class="btn btn-primary" data-flow-finish>保存并返回</button>' : '<button type="button" class="btn btn-primary" data-flow-next>下一步</button>') + '</div></footer>';
    box.dataset.step = String(flowStep);
    if (sameStep) {
      const nextBody = box.querySelector('.flow-body');
      const nextRoster = box.querySelector('.flow-roster');
      if (nextBody) nextBody.scrollTop = oldBodyTop;
      if (nextRoster) nextRoster.scrollTop = oldRosterTop;
    }
    if (flowStep === 0) {
      const input = box.querySelector('[data-flow-search]');
      if (input && flowQuery) { input.focus({ preventScroll: true }); input.setSelectionRange(input.value.length, input.value.length); }
    }
    if (flowStep === 4) {
      const input = box.querySelector('[data-flow-strategy-search]');
      if (input && flowStrategyQuery) { input.focus({ preventScroll: true }); input.setSelectionRange(input.value.length, input.value.length); }
    }
  }

  document.addEventListener('click', (e) => {
    if (!flowOpen) return;
    if (Date.now() < flowSuppressClickUntil) return;
    const t = e.target;
    if (t.closest('[data-flow-close]')) { flowClose(false); return; }
    if (t.closest('[data-flow-clear-board]')) {
      const n = (flowBoard?.placements || []).length;
      if (!n) { toast('棋盘已经是空的'); return; }
      flowBoard.placements = [];
      flowSelected = '';
      renderFlow();
      toast('棋盘已清空，备战区还在');
      return;
    }
    const pick = t.closest('[data-flow-pick]');
    if (pick) {
      const id = pick.dataset.flowPick;
      if (flowPicked.includes(id)) flowDropPicked(id);
      else {
        flowPicked = flowUnique([...flowPicked, id]);
        flowDetailId = id;
        flowSelected = id;
      }
      renderFlow();
      return;
    }
    const unpick = t.closest('[data-flow-unpick]');
    if (unpick) {
      flowDropPicked(unpick.dataset.flowUnpick);
      renderFlow();
      return;
    }
    if (t.closest('[data-flow-reset]')) {
      flowQuery = ''; flowBond = 'all'; flowKind = 'all'; flowTrigger = 'all'; flowTier = 'all'; flowMoreFilters = false;
      renderFlow();
      return;
    }
    if (t.closest('[data-flow-more]')) {
      const extraIds = new Set(currentBondEntries().filter(([id]) => !isCoreBond(id)).map(([id]) => id));
      const advanced = flowTrigger !== 'all' || extraIds.has(flowBond);
      if (flowMoreFilters || advanced) {
        flowMoreFilters = false;
        flowTrigger = 'all';
        if (extraIds.has(flowBond)) flowBond = 'all';
      } else flowMoreFilters = true;
      renderFlow();
      return;
    }
    const tier = t.closest('[data-flow-tier]');
    if (tier) { flowTier = tier.dataset.flowTier; renderFlow(); return; }
    const bond = t.closest('[data-flow-bond]');
    if (bond) { flowBond = bond.dataset.flowBond; renderFlow(); return; }
    const kind = t.closest('[data-flow-kind]');
    if (kind) { flowKind = kind.dataset.flowKind; renderFlow(); return; }
    const trigger = t.closest('[data-flow-trigger]');
    if (trigger) { flowTrigger = trigger.dataset.flowTrigger; renderFlow(); return; }
    const sel = t.closest('[data-flow-select]');
    if (sel) { flowSelected = sel.dataset.flowSelect; renderFlow(); return; }
    const facingBtn = t.closest('[data-flow-facing]');
    if (facingBtn) {
      const p = (flowBoard.placements || []).find((x) => x.operatorId === facingBtn.dataset.flowFacing);
      if (p) {
        const at = FACING_ORDER.indexOf(normalizeFacing(p.facing));
        p.facing = FACING_ORDER[(at + 1) % FACING_ORDER.length];
        renderFlow();
      }
      return;
    }
    const cell = t.closest('[data-flow-cell]');
    if (cell) {
      const [r, c] = cell.dataset.flowCell.split(',').map(Number);
      if (flowSelected) { flowMoveField(flowSelected, r, c); return; }
      const opId = (flowBoard.placements || []).find((p) => Number(p.row) === r && Number(p.col) === c)?.operatorId;
      if (opId) flowRotate(opId);
      return;
    }
    const benchSlot = t.closest('[data-flow-bench]');
    if (benchSlot) {
      const i = Number(benchSlot.dataset.flowBench);
      if (flowSelected) { flowMoveBench(flowSelected, i); return; }
      const id = flowBench[i];
      if (id) flowUnplace(id);
      return;
    }
    const stageFill = t.closest('[data-flow-stage-fill]');
    if (stageFill) {
      const i = Number(stageFill.dataset.flowStageFill);
      const s = flowStages[i];
      const pending = flowPendingStageIds(i);
      const room = 9 - (s.lineup || []).length;
      if (!pending.length) { toast('这个阶段没有可再加入的干员', true); return; }
      s.lineup = flowUnique([...(s.lineup || []), ...pending.slice(0, Math.max(0, room))]).slice(0, 9);
      renderFlow();
      return;
    }
    if (t.closest('[data-flow-stage-add]')) {
      if (flowStages.length >= 5) { toast('最多 5 个阶段', true); return; }
      flowStages.push({ id: 'flow-stage-' + Date.now(), label: '阶段 ' + (flowStages.length + 1), lineupSource: 'manual', lineup: [], note: '' });
      renderFlow();
      return;
    }
    const stageBlockRemove = t.closest('[data-flow-stage-remove-block]');
    if (stageBlockRemove) {
      if (flowStages.length <= 1) { toast('至少保留 1 个阶段', true); return; }
      const i = Number(stageBlockRemove.dataset.flowStageRemoveBlock);
      flowStages.splice(i, 1);
      renderFlow();
      return;
    }
    const stageRemove = t.closest('[data-flow-stage-remove]');
    if (stageRemove) {
      const [i, j] = stageRemove.dataset.flowStageRemove.split(',').map(Number);
      flowStages[i].lineup.splice(j, 1);
      renderFlow();
      return;
    }
    const coreAdd = t.closest('[data-flow-core-add]');
    if (coreAdd) {
      const id = coreAdd.dataset.flowCoreAdd;
      const fieldIds = new Set((flowBoard.placements || []).map((p) => p.operatorId));
      const current = (state.coreOperators || []).filter((c) => fieldIds.has(c.operatorId));
      if (current.length >= 6) { toast('核心最多 6 人', true); return; }
      if (!current.some((c) => c.operatorId === id)) current.push({ operatorId: id, role: '' });
      state.coreOperators = current;
      renderFlow();
      return;
    }
    const coreRemove = t.closest('[data-flow-core-remove]');
    if (coreRemove) {
      const fieldIds = new Set((flowBoard.placements || []).map((p) => p.operatorId));
      state.coreOperators = (state.coreOperators || []).filter((c) => c.operatorId !== coreRemove.dataset.flowCoreRemove && fieldIds.has(c.operatorId));
      renderFlow();
      return;
    }
    const strategyMain = t.closest('[data-flow-strategy-main]');
    if (strategyMain) {
      const id = strategyMain.dataset.flowStrategyMain;
      state.strategy = { main: id, alternatives: (state.strategy?.alternatives || []).filter((x) => x !== id).slice(0, 2), reason: state.strategy?.reason || '' };
      renderFlow();
      return;
    }
    const strategyAlt = t.closest('[data-flow-strategy-alt]');
    if (strategyAlt) {
      const id = strategyAlt.dataset.flowStrategyAlt;
      const alts = (state.strategy?.alternatives || []).filter((x) => x !== state.strategy?.main && strategyById(x));
      if (alts.includes(id) || alts.length >= 2) { toast(alts.length >= 2 ? '次选最多 2 个' : '这个盟约已在次选', true); return; }
      state.strategy = { ...(state.strategy || {}), alternatives: [...alts, id] };
      renderFlow();
      return;
    }
    const strategyRemove = t.closest('[data-flow-strategy-remove]');
    if (strategyRemove) {
      const id = strategyRemove.dataset.flowStrategyRemove;
      state.strategy = { ...(state.strategy || {}), alternatives: (state.strategy?.alternatives || []).filter((x) => x !== id) };
      renderFlow();
      return;
    }
    if (t.closest('[data-flow-strategy-clear]')) {
      state.strategy = { ...(state.strategy || {}), main: '', alternatives: (state.strategy?.alternatives || []).slice(0, 2) };
      renderFlow();
      return;
    }
    if (t.closest('[data-flow-prev]')) { if (flowStep > 0) { flowStep--; renderFlow(); } return; }
    if (t.closest('[data-flow-next]')) {
      if (flowStep === 0 && !flowPicked.length) { toast('先选至少 1 名干员', true); return; }
      if (flowStep < 4) { flowStep++; renderFlow(); }
      return;
    }
    if (t.closest('[data-flow-finish]')) { flowClose(true); return; }
  });

  document.addEventListener('dragstart', (e) => {
    if (!flowOpen) return;
    const src = e.target.closest('[data-flow-drag]');
    if (!src) return;
    flowDrag = { id: src.dataset.flowDrag, kind: src.dataset.flowDragKind || 'pool' };
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', flowDrag.id);
  });
  document.addEventListener('dragend', () => {
    flowDrag = null;
    $$('.drag-over').forEach((el) => el.classList.remove('drag-over'));
  });
  document.addEventListener('dragover', (e) => {
    if (!flowOpen || !flowDrag) return;
    const zone = e.target.closest('[data-flow-cell],[data-flow-bench],[data-flow-pool-drop],[data-flow-stage-drop],[data-flow-core-drop],[data-flow-core-out]');
    if (!zone) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    $$('.drag-over').forEach((el) => el.classList.remove('drag-over'));
    zone.classList.add('drag-over');
  });
  document.addEventListener('drop', (e) => {
    if (!flowOpen || !flowDrag) return;
    const { id, kind } = flowDrag;
    const cell = e.target.closest('[data-flow-cell]');
    const bench = e.target.closest('[data-flow-bench]');
    const stage = e.target.closest('[data-flow-stage-drop]');
    const coreList = e.target.closest('[data-flow-core-drop]');
    const coreOut = e.target.closest('[data-flow-core-out]');
    const pool = e.target.closest('[data-flow-pool-drop]');
    if (!cell && !bench && !stage && !coreList && !coreOut && !pool) return;
    e.preventDefault();
    flowSuppressClickUntil = Date.now() + 250;
    if (cell) {
      const [r, c] = cell.dataset.flowCell.split(',').map(Number);
      flowDrag = null; flowMoveField(id, r, c); return;
    }
    if (bench) {
      flowDrag = null; flowMoveBench(id, Number(bench.dataset.flowBench)); return;
    }
    if (pool) {
      flowDrag = null; flowUnplace(id); return;
    }
    if (stage) {
      const i = Number(stage.dataset.flowStageDrop);
      const s = flowStages[i];
      if (!flowPicked.includes(id)) { flowDrag = null; return; }
      if ((s.lineup || []).includes(id)) { toast('这个阶段已经有该干员', true); flowDrag = null; return; }
      if ((s.lineup || []).length >= 9) { toast('阶段最多 9 人', true); flowDrag = null; return; }
      s.lineup = [...(s.lineup || []), id];
      flowDrag = null; renderFlow(); return;
    }
    if (coreList) {
      if (kind === 'core-candidate') {
        const fieldIds = new Set((flowBoard.placements || []).map((p) => p.operatorId));
        const current = (state.coreOperators || []).filter((c) => fieldIds.has(c.operatorId));
        if (current.length >= 6) { toast('核心最多 6 人', true); flowDrag = null; return; }
        if (!current.some((c) => c.operatorId === id)) current.push({ operatorId: id, role: '' });
        state.coreOperators = current;
        flowDrag = null; renderFlow(); return;
      }
      flowDrag = null; return;
    }
    if (coreOut) {
      if (kind === 'core') {
        state.coreOperators = (state.coreOperators || []).filter((c) => c.operatorId !== id);
        flowDrag = null; renderFlow(); return;
      }
      flowDrag = null; return;
    }
    flowDrag = null;
  });

  document.addEventListener('input', (e) => {
    if (!flowOpen) return;
    if (e.target.matches('[data-flow-search]')) { flowQuery = e.target.value; renderFlow(); return; }
    if (e.target.matches('[data-flow-strategy-search]')) { flowStrategyQuery = e.target.value; renderFlow(); return; }
    if (e.target.matches('[data-flow-stage-note]')) { flowStages[Number(e.target.dataset.flowStageNote)].note = e.target.value; return; }
    if (e.target.matches('[data-flow-reason]')) { state.strategy = { ...(state.strategy || {}), reason: e.target.value }; return; }
  });

  document.addEventListener('change', (e) => {
    if (!flowOpen) return;
    if (e.target.matches('[data-flow-main]')) {
      const main = e.target.value;
      state.strategy = { ...(state.strategy || {}), main, alternatives: (state.strategy?.alternatives || []).filter((id) => id !== main) };
      renderFlow();
      return;
    }
    if (e.target.matches('[data-flow-alt]')) {
      const alt = e.target.value;
      state.strategy = { ...(state.strategy || {}), alternatives: alt ? [alt] : [] };
      renderFlow();
    }
  });

  /* ------------------------------------------------------------
     Events
     ------------------------------------------------------------ */
  /* 全局点击委托：按界面分区，先进「当前浮层」，再到底下的盘面。
     每段返回 true 表示这次点击已经被消费，顺序不要乱。 */
  function onClick(e) {
    if (Date.now() < suppressClickUntil) return;
    if (editMode && !mobileUI && boardRangeId && !pendingPlacement) {
      const unit = e.target.closest('#boardGrid .board-unit');
      if (!unit || unit.dataset.opId !== boardRangeId) clearBoardRange();
    }
    if (handleHistoryClicks(e)) return;
    if (handleMobileEditClicks(e)) return;
    if (handleViewModeClicks(e)) return;
    if (handleMobileEquipClicks(e)) return;
    if (handleChromeClicks(e)) return;
    if (handleRosterDrawerClicks(e)) return;
    if (handlePanelClicks(e)) return;
  }

  function handleHistoryClicks(e) {
    const historyBtn = e.target.closest('[data-history]');
    if (historyBtn) { stepHistory(historyBtn.dataset.history === 'redo' ? 'redo' : 'undo'); return true; }
    return false;
  }

  function handleMobileEditClicks(e) {
    if (mobileUI && editMode && mobileRange && !e.target.closest('.mr-cell') && !e.target.closest('.mr-piece-info')) clearMobileRangeDom();
    const mrRemove = e.target.closest('[data-mr-remove]');
    if (mrRemove) {
      const id = mrRemove.dataset.mrRemove;
      if (mobileRange?.operatorId === id) { mobileRange = null; mobileRangeArmed = false; }
      removePlacement(id);
      clearRosterSelection();
      return true;
    }
    if (e.target.closest('[data-mr-edit]')) { setMobileEdit(!editMode); return true; }
    if (e.target.closest('[data-mr-roster]')) {
      if (!editMode) return true;
      mobileRosterOpen = !mobileRosterOpen;
      if (!mobileRosterOpen) mobileRosterQuery = '';
      renderPoster();
      return true;
    }
    if (e.target.closest('[data-mr-filter-toggle]')) {
      mobileFilterOpen = !mobileFilterOpen;
      renderPoster();
      return true;
    }
    const mrfChip = e.target.closest('[data-mrf-group]');
    if (mrfChip) {
      const group = mrfChip.dataset.mrfGroup;
      const value = mrfChip.dataset.mrfValue;
      const set = mobileFilter[group];
      if (set) {
        if (value === 'all') set.clear();
        else if (set.has(value)) set.delete(value);
        else set.add(value);
      }
      renderPoster();
      return true;
    }
    if (e.target.closest('[data-mrf-reset]')) {
      resetMobileFilter();
      renderPoster();
      return true;
    }
    if (e.target.closest('[data-mr-sheet-close]')) {
      mobileRosterOpen = false;
      mobileRosterQuery = '';
      renderPoster();
      return true;
    }
    const mrNoteFocus = e.target.closest('[data-mr-note-focus]');
    if (mrNoteFocus) {
      const note = $$('.mr-stage-note')[Number(mrNoteFocus.dataset.mrNoteFocus)];
      if (note) {
        note.focus();
        const range = document.createRange();
        range.selectNodeContents(note);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      return true;
    }
    const mrStageRemove = e.target.closest('[data-mr-stage-remove]');
    if (mrStageRemove) {
      removeStageOperator(Number(mrStageRemove.dataset.mrStageRemove), Number(mrStageRemove.dataset.mrStageSlot));
      return true;
    }
    const mrStageAdd = e.target.closest('[data-mr-stage-add]');
    if (mrStageAdd) {
      openStagePicker(Number(mrStageAdd.dataset.mrStageAdd), 'lineup', null);
      return true;
    }
    const mrStageOp = e.target.closest('.mr-stage-op');
    if (mrStageOp && mobileUI && editMode) {
      openStagePicker(Number(mrStageOp.dataset.mrStageIndex), 'lineup', Number(mrStageOp.dataset.mrStageSlot));
      return true;
    }
    const mrOp = e.target.closest('[data-mr-op-id]');
    if (mrOp) { openDetail(mrOp.dataset.mrOpId); return true; }
    const mrPlace = e.target.closest('[data-mr-place-op]');
    if (mrPlace) { closeModal(); selectMobileRoster(mrPlace.dataset.mrPlaceOp, true); return true; }
    if (e.target.closest('[data-mr-piece-close]')) { clearMobileRangeDom(); return true; }
    const mrOpEdit = e.target.closest('[data-mr-op-edit]');
    if (mrOpEdit) { openOperatorEditor(mrOpEdit.dataset.mrOpEdit); return true; }
    if (mobileUI && editMode) {
      const mrCell = e.target.closest('.mr-cell');
      if (mrCell) { handleMobileBoardClick(mrCell); return true; }
    }
    return false;
  }

  function handleViewModeClicks(e) {
    if (e.target.closest('[data-view-mode]')) { setViewMode(e.target.closest('[data-view-mode]').dataset.viewMode); return true; }
    if (e.target.closest('[data-view-share]')) { openShare(); return true; }
    if (e.target.closest('[data-view-export]')) { exportPoster(); return true; }
    if (e.target.closest('#readBtn')) { setViewMode('read'); return true; }
    return false;
  }

  function handleMobileEquipClicks(e) {
    const mrEquipSwap = e.target.closest('[data-mr-equip-swap]');
    if (mrEquipSwap) { openMobileEquipSwap(Number(mrEquipSwap.dataset.mrEquipSwap)); return true; }
    const mrEquipPick = e.target.closest('[data-mr-equip-pick]');
    if (mrEquipPick) { pickEquipOperator(mrEquipPick.dataset.mrEquipPick); return true; }
    const mrEquip = e.target.closest('[data-mr-equip]');
    if (mrEquip) {
      if (mobileUI) {
        mobileEquipOpen = {
          key: mrEquip.dataset.mrEquip,
          opId: mrEquip.dataset.opId,
          slot: mrEquip.dataset.slot,
          index: Number(mrEquip.dataset.index)
        };
        renderPoster();
        requestAnimationFrame(() => $('#mrEquipDetail')?.scrollIntoView({ block: 'nearest' }));
      } else {
        openEquipmentInfo(mrEquip.dataset.mrEquip);
      }
      return true;
    }
    const mrEquipChange = e.target.closest('[data-mr-equip-change]');
    if (mrEquipChange) {
      mobileEquipOpen = null;
      renderPoster();
      openItemPicker(mrEquipChange.dataset.opId, mrEquipChange.dataset.slot, Number(mrEquipChange.dataset.index));
      return true;
    }
    const mrEquipRemove = e.target.closest('[data-mr-equip-remove]');
    if (mrEquipRemove) {
      const opId = mrEquipRemove.dataset.opId;
      const slot = mrEquipRemove.dataset.slot;
      const index = Number(mrEquipRemove.dataset.index);
      const row = (state.equipment || []).find((r) => r.operatorId === opId);
      if (row && Array.isArray(row[slot]) && Number.isInteger(index)) {
        row[slot].splice(index, 1);
        saveNow();
        mobileEquipOpen = null;
        renderPoster();
        toast('已移除装备');
      }
      return true;
    }
    if (e.target.closest('[data-mr-equip-add]')) {
      const add = e.target.closest('[data-mr-equip-add]');
      mobileEquipOpen = null;
      renderPoster();
      openItemPicker(add.dataset.opId, add.dataset.slot, null);
      return true;
    }
    if (e.target.closest('[data-mr-equip-close]')) {
      mobileEquipOpen = null;
      renderPoster();
      return true;
    }
    return false;
  }

  function handleChromeClicks(e) {
    if (e.target.closest('#shareBtn') || e.target.closest('[data-open-share]')) { openShare(); return true; }
    if (e.target.closest('#helpBtn')) { openHelp(); return true; }
    if (e.target.closest('#zoomBtn')) { setZoomMode(!zoomMode); return true; }
    if (e.target.closest('[data-share-copy]')) { copyShareLink(); return true; }
    if (e.target.closest('[data-share-save-entry]')) { saveShareEntry(); return true; }
    if (e.target.closest('[data-share-download-qr]')) { downloadShareQr(); return true; }
    if (e.target.closest('[data-share-portrait]')) { exportPortrait(); return true; }
    if (e.target.closest('[data-share-template]') || e.target.closest('[data-help-template]')) { closeModal(); newLineup(true); return true; }
    if (e.target.closest('[data-help-share]')) { openShare(); return true; }
    if (e.target.closest('[data-help-close]')) { closeModal(); return true; }
    if (e.target.closest('#mapsBtn')) { openMaps(mapSelectedId, 0); return true; }
    const mapTab = e.target.closest('[data-map-id]');
    if (mapTab) { openMaps(mapTab.dataset.mapId, 0); return true; }
    const mapField = e.target.closest('[data-map-field]');
    if (mapField) { openMaps(mapSelectedId, Number(mapField.dataset.mapField)); return true; }
    if (e.target.closest('[data-detail-close]')) { closeDetailDrawer(); return true; }
    if (e.target.closest('[data-info-pop-close]')) { closeInfoPop(); return true; }
    if (e.target.closest('[data-term-back]')) { e.preventDefault(); termBack(); return true; }
    const termEl = e.target.closest('[data-term-bond], [data-term-equip], [data-term-kind]');
    if (termEl) {
      e.preventDefault();
      const push = !!(infoPop && infoPop.contains(termEl));
      if (termEl.dataset.termBond) openBondTerm(termEl.dataset.termBond, termEl, push);
      else if (termEl.dataset.termEquip) openEquipTerm(termEl.dataset.termEquip, termEl, push);
      else if (termEl.dataset.termKind) openKindTerm(termEl.dataset.termKind, termEl, push);
      return true;
    }
    const termOp = e.target.closest('[data-term-op]');
    if (termOp) {
      e.preventDefault();
      // 浮窗保持打开：点干员只是把详情抽屉拉到右边，收掉浮窗会让人丢了盟约上下文。
      openDetail(termOp.dataset.termOp);
      return true;
    }
    if (e.target.closest('[data-close]')) { closeModal(); return true; }
    if (e.target.closest('[data-export-back]')) { closeModal(); return true; }
    if (e.target.closest('[data-export-force]')) { closeModal(); exportPoster(true); return true; }
    if (e.target.closest('#flowBtn')) { flowOpenMode(); return true; }
    if (e.target.closest('#editBtn')) { toggleEdit(); return true; }
    if (e.target.closest('#exportBtn')) { exportPoster(); return true; }
    if (e.target.closest('#newBtn')) { newLineup(); return true; }
    if (e.target.closest('#boardBtn')) { openBoardSize(); return true; }
    if (e.target.closest('#clearBoardBtn, [data-board-clear]')) { clearBoard(); return true; }
    if (e.target.closest('[data-board-apply]')) { applyBoardSize($('#boardCols')?.value, $('#boardRows')?.value); return true; }
    const boardPreset = e.target.closest('[data-board-preset]');
    if (boardPreset) { const [c, r] = boardPreset.dataset.boardPreset.split('x'); applyBoardSize(c, r); return true; }
    if (e.target.closest('[data-board-open-maps]')) { closeModal(); openMaps(mapSelectedId, 0); return true; }
    if (e.target.closest('[data-board-checks]')) { openPlacementChecks(); return true; }
    if (e.target.closest('#rosterBtn')) {
      if ($('#rosterDrawer')?.hidden) openRoster(); else closeRoster();
      return true;
    }
    if (e.target.closest('#variantBtn')) {
      if ($('#variantDrawer')?.hidden) openVariants(); else closeVariants();
      return true;
    }
    if (e.target.closest('#saveBtn')) { openSaveManager(); return true; }
    if (e.target.closest('#importBtn')) { $('#importFile').click(); return true; }
    if (e.target.closest('#saveDataBtn')) { exportData(); return true; }
    if (e.target.closest('#resetBtn')) { resetData(); return true; }
    return false;
  }

  function handleRosterDrawerClicks(e) {
    const rfChip = e.target.closest('[data-rf-group]');
    if (rfChip) {
      const group = rfChip.dataset.rfGroup;
      const value = rfChip.dataset.rfValue;
      // 只认 rosterFilter 里真实存在的筛选组（以前这里还列着已删掉的 prof / rarity，点到会直接抛错）
      const set = rosterFilter[group];
      if (set instanceof Set) {
        if (value === 'all') set.clear();
        else if (set.has(value)) set.delete(value);
        else set.add(value);
        renderRosterFilters();
        filterRoster();
      }
      return true;
    }
    const rfRemove = e.target.closest('[data-rf-remove]');
    if (rfRemove) {
      const group = rfRemove.dataset.rfRemove;
      const value = rfRemove.dataset.rfValue;
      if (group === 'bond') rosterFilter.bond.delete(value);
      else rosterFilter[group]?.delete(value);
      renderRosterFilters();
      filterRoster();
      return true;
    }
    if (e.target.closest('[data-rf-clear]')) {
      rosterFilter.tier.clear();
      rosterFilter.trigger.clear();
      rosterFilter.kind.clear();
      rosterFilter.bond.clear();
      renderRosterFilters();
      filterRoster();
      return true;
    }
    if (e.target.closest('[data-rf-toggle]')) {
      setFiltersCollapsed(!filtersCollapsed());
      renderRosterFilters();
      filterRoster();
      return true;
    }
    if (e.target.closest('#equipmentBtn')) {
      if ($('#equipmentDrawer')?.hidden) openEquipmentLibrary(); else closeEquipmentLibrary();
      return true;
    }

    const closeDrawer = e.target.closest('[data-close-drawer]');
    if (closeDrawer) {
      if (closeDrawer.dataset.closeDrawer === 'roster') closeRoster();
      else if (closeDrawer.dataset.closeDrawer === 'equipment') closeEquipmentLibrary();
      else closeVariants();
      return true;
    }

    if (e.target.closest('[data-open-saves]')) { openSaveManager(); return true; }
    if (e.target.closest('[data-save-new]')) { saveCurrentFromManager(); return true; }
    const saveLoad = e.target.closest('[data-save-load]');
    if (saveLoad) { loadSaveSlot(saveLoad.dataset.saveLoad); return true; }
    const saveOverwrite = e.target.closest('[data-save-overwrite]');
    if (saveOverwrite) { overwriteSaveSlot(saveOverwrite.dataset.saveOverwrite); return true; }
    const saveDelete = e.target.closest('[data-save-delete]');
    if (saveDelete) { deleteSaveSlot(saveDelete.dataset.saveDelete); return true; }

    const coreRemove = e.target.closest('[data-core-remove]');
    if (coreRemove) { toggleCore(coreRemove.dataset.coreRemove, false); return true; }
    const coreChip = e.target.closest('[data-core-op]');
    if (coreChip) { toggleCore(coreChip.dataset.coreOp, !!e.target.closest('.modal, .detail-drawer')); return true; }

    const facingBtn = e.target.closest('[data-facing-op]');
    if (facingBtn) {
      if (editMode) cycleFacing(facingBtn.dataset.facingOp);
      return true;
    }
    const boardUnit = e.target.closest('#boardGrid .board-unit');
    if (boardUnit && editMode && !mobileUI && !pendingPlacement && !e.target.closest('button')) {
      handleBoardAvatarClick(boardUnit.dataset.opId);
      return true;
    }
    if (e.target.closest('[data-board-remove]')) {
      removePlacement(e.target.closest('[data-board-remove]').dataset.boardRemove);
      return true;
    }
    if (editMode && selectedRosterId) {
      const cell = e.target.closest('.board-cell');
      if (cell) {
        const already = (state.board?.placements || []).some((p) => p.operatorId === selectedRosterId);
        boardRangeId = selectedRosterId;
        placeRoster(selectedRosterId, Number(cell.dataset.row), Number(cell.dataset.col), already ? '' : 'right', '', true);
        return true;
      }
    }
    return false;
  }

  function handlePanelClicks(e) {
    const modulePick = e.target.closest('[data-module-pick]');
    if (modulePick) {
      const root = modulePick.closest('[data-detail-op]');
      const opId = root?.dataset.detailOp;
      const mid = modulePick.dataset.modulePick;
      if (root && opId && mid) {
        detailModulePick[opId] = mid;
        root.querySelectorAll('[data-module-panel]').forEach((p) => { p.hidden = p.dataset.modulePanel !== mid; });
        root.querySelectorAll('[data-module-pick]').forEach((b) => b.classList.toggle('on', b.dataset.modulePick === mid));
      }
      return true;
    }

    const setSkill = e.target.closest('[data-set-skill]');
    if (setSkill) {
      const o = op(setSkill.dataset.setSkill);
      if (o) o.skillIdx = Number(setSkill.dataset.skillIndex) || 0;
      saveNow();
      renderPoster();
      renderRoster();
      renderVariants();
      openDetail(setSkill.dataset.setSkill);
      toast('已切换技能');
      return true;
    }

    if (editMode && e.target.closest('[data-edit]')) return true;

    const rosterItem = e.target.closest('[data-roster-id]');
    if (rosterItem) {
      if (editMode) selectRoster(rosterItem.dataset.rosterId);
      else openDetail(rosterItem.dataset.rosterId);
      return true;
    }

    const pick = e.target.closest('[data-pick-item]');
    if (pick) { previewItem(pick.dataset.pickItem); return true; }
    if (e.target.closest('[data-pick-confirm]')) { pickItem(itemPickerPreview); return true; }
    if (e.target.closest('[data-pick-clear]')) { clearPicker(); return true; }

    const equipSwap = e.target.closest('[data-equip-swap]');
    if (equipSwap) { openEquipSwap(Number(equipSwap.dataset.equipSwap)); return true; }
    const equipPick = e.target.closest('[data-equip-pick]');
    if (equipPick) { pickEquipOperator(equipPick.dataset.equipPick); return true; }

    const editOp = e.target.closest('[data-edit-op]');
    if (editOp) { openOperatorEditor(editOp.dataset.editOp); return true; }

    const equipmentCard = e.target.closest('.equipment-card[data-item-key]');
    if (equipmentCard) { selectEquipmentDetail(equipmentCard.dataset.itemKey); return true; }

    const bondEl = e.target.closest('[data-bond-id]');
    if (bondEl) {
      e.preventDefault();
      if (mobileUI) {
        mobileBondOpen = mobileBondOpen === bondEl.dataset.bondId ? '' : bondEl.dataset.bondId;
        renderPoster();
        return true;
      }
      openBond(bondEl.dataset.bondId, bondEl);
      return true;
    }

    const strategyRemove = e.target.closest('[data-strategy-remove]');
    if (strategyRemove) { e.preventDefault(); removeStrategy(strategyRemove.dataset.strategyRemove); return true; }
    const strategyOpen = e.target.closest('[data-strategy-open]');
    if (strategyOpen) { openStrategy(strategyOpen.dataset.strategyOpen, strategyOpen); return true; }
    const strategyEdit = e.target.closest('[data-strategy-edit]');
    if (strategyEdit) { openStrategyPicker('main'); return true; }
    const strategyAltAdd = e.target.closest('[data-strategy-alt-add]');
    if (strategyAltAdd) { openStrategyPicker('alt'); return true; }
    const strategyPick = e.target.closest('[data-strategy-pick-id]');
    if (strategyPick) { previewStrategy(strategyPick.dataset.strategyPickId); return true; }
    const strategyChoose = e.target.closest('[data-strategy-choose]');
    if (strategyChoose) { pickStrategy(strategyChoose.dataset.strategyChoose); return true; }
    const strategyFilter = e.target.closest('[data-strategy-filter]');
    if (strategyFilter) { strategyPickerFilter = strategyFilter.dataset.strategyFilter; refreshStrategyPicker(); return true; }

    const stageRemove = e.target.closest('[data-stage-remove]');
    if (stageRemove) {
      removeStageOperator(Number(stageRemove.dataset.stageRemove), Number(stageRemove.dataset.stageSlot));
      return true;
    }
    const stageAvatar = e.target.closest('.stage-avatar');
    if (stageAvatar) {
      const i = Number(stageAvatar.dataset.stageIndex);
      if (editMode) openStagePicker(i, stageAvatar.dataset.stageKind, Number(stageAvatar.dataset.stageSlot));
      else openDetail(stageAvatar.dataset.opId);
      return true;
    }
    if (e.target.closest('[data-stage-add-block]')) { addStageBlock(); return true; }
    const stageBlockRemove = e.target.closest('[data-stage-remove-block]');
    if (stageBlockRemove) { removeStageBlock(Number(stageBlockRemove.dataset.stageRemoveBlock)); return true; }
    const stageAdd = e.target.closest('[data-stage-add]');
    if (stageAdd) { openStagePicker(Number(stageAdd.dataset.stageIndex), stageAdd.dataset.stageKind, null); return true; }
    const stagePick = e.target.closest('[data-stage-pick]');
    if (stagePick) { pickStageOperator(stagePick.dataset.stagePick); return true; }
    const fillBtn = e.target.closest('[data-stage-fill]');
    if (fillBtn) { fillStage(Number(fillBtn.dataset.stageFill)); return true; }
    const restoreBtn = e.target.closest('[data-stage-restore]');
    if (restoreBtn) { restoreStage(Number(restoreBtn.dataset.stageRestore)); return true; }

    const equipAdd = e.target.closest('[data-equip-add]');
    if (equipAdd) { openItemPicker(equipAdd.dataset.opId, equipAdd.dataset.slot, null); return true; }
    const equipIcon = e.target.closest('[data-equip-icon]');
    if (equipIcon) {
      if (editMode) openItemPicker(equipIcon.dataset.opId, equipIcon.dataset.slot, Number(equipIcon.dataset.index));
      return true;
    }

    const traitChip = e.target.closest('[data-trait-info]');
    if (traitChip) { openTraitInfo(traitChip.dataset.traitInfo, traitChip); return true; }
    const bondRow = e.target.closest('.bond-row');
    if (bondRow) { openBond(bondRow.dataset.bondId, bondRow); return true; }

    const opEl = e.target.closest('[data-op-id]');
    if (opEl) { openDetail(opEl.dataset.opId); return true; }
    return false;
  }

  document.addEventListener('click', onClick);

  document.addEventListener('dblclick', (e) => {
    if (editMode) {
      const item = e.target.closest('.roster-item');
      if (!item) return;
      if (mobileUI) { openDetail(item.dataset.rosterId); return; }
      placeRosterAtNextCell(item.dataset.rosterId);
      return;
    }
    if (!e.target.closest('#poster')) return;
    if (e.target.closest('[data-op-id], button, [role="button"], [data-edit]')) return;
    setZoomMode(!zoomMode, { x: e.clientX, y: e.clientY });
  });

  document.addEventListener('dragstart', (e) => {
    if (!editMode) return;
    const equip = e.target.closest('.equipment-card');
    if (equip) {
      const key = equip.dataset.itemKey;
      if (!key) return;
      draggedOperatorId = null;
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text/plain', key);
      e.dataTransfer.setData('application/x-item', key);
      return;
    }
    const item = e.target.closest('.roster-item, .variant-op');
    if (!item) return;
    const id = item.dataset.rosterId;
    if (!id) return;
    draggedOperatorId = id;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.setData('application/x-roster', id);
  });

  document.addEventListener('dragover', (e) => {
    if (!editMode) return;
    const target = e.target.closest('[data-equip-drop]');
    if (!target) return;
    const types = Array.from(e.dataTransfer?.types || []);
    if (!types.includes('application/x-item')) return;
    e.preventDefault();
    target.classList.add('drop-ok');
  });
  document.addEventListener('dragleave', (e) => {
    const target = e.target.closest('[data-equip-drop]');
    if (target) target.classList.remove('drop-ok');
  });
  document.addEventListener('drop', (e) => {
    if (!editMode) return;
    const target = e.target.closest('[data-equip-drop]');
    if (!target) return;
    e.preventDefault();
    target.classList.remove('drop-ok');
    const key = e.dataTransfer.getData('application/x-item') || e.dataTransfer.getData('text/plain');
    if (!ITEM_META[key]) return;
    const idxAttr = target.getAttribute('data-index');
    assignEquipmentItem(target.dataset.opId, target.dataset.slot, idxAttr === null || idxAttr === '' ? null : Number(idxAttr), key);
  });

  document.addEventListener('change', (e) => {
    if (e.target.id === 'shareQrToggle') {
      state.meta.showQr = !!e.target.checked;
      saveNow();
      renderPoster();
      toast(state.meta.showQr ? '已开启：海报表头会印二维码' : '已关闭：海报不印二维码');
      return;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileUI && mobileRosterOpen) { mobileRosterOpen = false; mobileRosterQuery = ''; renderPoster(); return; }
      if (pendingPlacement) cancelPendingPlacement();
      else if (infoPop) closeInfoPop();
      else if ($('.modal')) closeModal();
      else if ($('#detailDrawer')?.classList.contains('open')) closeDetailDrawer();
      else if (zoomMode) setZoomMode(false);
      else if (selectedRosterId) clearRosterSelection();
      else if (!$('#rosterDrawer')?.hidden) closeRoster();
      else if (!$('#equipmentDrawer')?.hidden) closeEquipmentLibrary();
      else if (!$('#variantDrawer')?.hidden) closeVariants();
      return;
    }
    if (e.key === 'Tab' && trapModalFocus(e)) return;
    // Ctrl/⌘+Z 撤销，Ctrl/⌘+Y 或 Ctrl/⌘+Shift+Z 重做。
    // 光标在文字里时不拦：那里交给浏览器自己的文字撤销（它触发的 input 事件照样会存进来）。
    if ((e.ctrlKey || e.metaKey) && !e.altKey) {
      const key = String(e.key || '').toLowerCase();
      if (key === 'z' || key === 'y') {
        const t = e.target;
        const typing = !!t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || ''));
        if (typing || !editMode || $('.modal')) return;
        e.preventDefault();
        stepHistory(key === 'y' || e.shiftKey ? 'redo' : 'undo');
        return;
      }
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"]') && !e.target.isContentEditable) {
      e.preventDefault(); e.target.click();
    }
  });

  document.addEventListener('input', (e) => {
    if (!editMode) return;
    if (e.target.id === 'mrRosterSearch') { mobileRosterQuery = e.target.value; filterMobileRoster(); return; }
    if (e.target.id === 'rosterSearch') { rosterFilter.q = e.target.value; filterRoster(); return; }
    if (e.target.id === 'equipmentSearch') { equipmentQuery = e.target.value; renderEquipmentLibrary(); return; }
    if (e.target.id === 'strategySearch') { strategyPickerQuery = e.target.value; refreshStrategyPicker(); return; }
    const el = e.target.closest('[data-edit]');
    if (!el) return;
    let value = el.innerText.replace(/\u00a0/g, ' ').replace(/\r/g, '').replace(/\n+/g, ' ').trim();
    setPath(state, el.dataset.edit, value);
    updateCount(el);
    saveSoon('edit:' + el.dataset.edit);
  });

  document.addEventListener('focusout', (e) => {
    if (!editMode) return;
    const el = e.target.closest('[data-edit]');
    if (!el) return;
    const max = Number(el.dataset.max || 0);
    if (!max) return;
    let value = el.innerText.replace(/\s+/g, ' ').trim();
    if (value.length > max) {
      value = value.slice(0, max);
      el.innerText = value;
      setPath(state, el.dataset.edit, value);
      updateCount(el);
      saveSoon('edit:' + el.dataset.edit);
      toast('已按上限截到 ' + max + ' 字', true);
    }
  });

  document.addEventListener('paste', (e) => {
    if (!editMode || !e.target.closest('[data-edit]')) return;
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text/plain');
    document.execCommand('insertText', false, text);
  });

  const importFile = $('#importFile');
  if (importFile) importFile.addEventListener('change', () => {
    const file = importFile.files?.[0];
    if (file) importData(file);
    importFile.value = '';
  });

  window.addEventListener('resize', () => {
    if (!isNarrowView()) {
      if (mobileUI) exitMobileUI();
    } else if (!mobileUI && !editMode && storedViewMode() !== 'poster') {
      enterMobileUI();
    }
    fitPoster();
    layoutBoard();
  });
  window.addEventListener('beforeunload', saveNow);

  /* ------------------------------------------------------------
     Boot
     ------------------------------------------------------------ */
  // Share links must be applied before the first view decision, so a #s= link
  // opened on a narrow screen renders the shared lineup straight into 阅读版.
  const sharedLoaded = applyShareHash();
  initViewMode(sharedLoaded);
  const presetSelect = $('#presetSelect');
  if (presetSelect) {
    presetSelect.value = PRESET;
    presetSelect.addEventListener('change', () => {
      const base = location.href.split('?')[0].split('#')[0];
      location.href = presetSelect.value ? base + '?preset=' + encodeURIComponent(presetSelect.value) : base;
    });
  }
  renderPoster();
  fitPoster();
  if (new URLSearchParams(location.search).has('export')) setTimeout(() => exportPoster(true), 700);
  bindBoardDnD();
  bindMobileBoardDrag();
  // 打开分享链接时上面已经真的写过一次存档；其余情况还没有任何改动，不谎报「已保存」
  if (!sharedLoaded) setSaveState('idle');
  initHistory();
  setTimeout(maybeShowZoomHint, 900);
  window.__posterDebug = {
    get state() { return state; },
    get equipmentTrimmed() { return equipmentTrimmed; },
    get zoomed() { return zoomMode; },
    get mobileUI() { return mobileUI; },
    get viewMode() { return mobileUI ? 'read' : 'poster'; },
    get editMode() { return editMode; },
    get mobileRange() { return mobileRange; },
    get mobileRosterOpen() { return mobileRosterOpen; },
    enterMobileUI,
    exitMobileUI,
    renderMobile,
    setViewMode,
    setMobileEdit,
    selectMobileRoster,
    openEquipmentInfo,
    renderPoster,
    exportPoster,
    exportPNG: posterPng,
    get lastExport() { return lastExport; },
    posterCheck,
    migrate,
    toStorage: () => toStorageState(state),
    saveNow,
    undo: () => stepHistory('undo'),
    redo: () => stepHistory('redo'),
    get historyDepth() { return { undo: timeline.past.length, redo: timeline.future.length }; },
    computeBondCounts,
    placementChecks,
    measureStrategyText,
    strategySlotInfo,
    traitActiveOnBench,
    summarizeTrait,
    traitGroups,
    openDetail,
    openItemPicker,
    assignStage,
    openPoster,
    hasOperator,
    toggleCore,
    removeStrategy,
    assignEquipmentItem,
    openEquipmentLibrary,
    openEquipmentDetail,
    previewDrop,
    directionFromPoint,
    shareCode,
    currentShareUrl,
    applyShareHash,
    openShare,
    openHelp,
    qrDataUrl,
    exportPortrait,
    shareCardHtml,
    setZoomMode,
    newLineup
  };
  if (pendingToast) setTimeout(() => toast(pendingToast), 300);
  if (equipmentTrimmed) setTimeout(() => toast('已按每人 2 件装备整理'), 650);
})();
