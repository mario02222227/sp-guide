/*!
 * 旧入口兼容：?preset=ursus
 *
 * 乌萨斯示例已经是 data.js 里的默认阵容。这个文件不再改数据，
 * 只给旧链接补上页面标题。草稿槽仍由 app.js 的 PRESET 分开。
 */
(function () {
  'use strict';
  let preset = '';
  try { preset = new URLSearchParams(location.search).get('preset') || ''; } catch (e) { /* file:// */ }
  if (preset !== 'ursus') return;
  document.title = '乌萨斯公式化运营｜卫戍协议 · 规程一图流';
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', '明日方舟「卫戍协议：规程」乌萨斯公式化运营一图流：3乌起手、2迅1奥、四本海雅、五本冻河、6乌3奥2迅。固定 4:3 海报，可编辑、可导出 3200×2400 PNG。');
  document.body.dataset.preset = 'ursus';
  const poster = document.getElementById('poster');
  if (poster) poster.setAttribute('aria-label', '卫戍协议规程乌萨斯公式化运营一图流');
})();
