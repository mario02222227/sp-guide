# NOTICE / 数据与素材来源

本文件与 README 的「数据来源与授权」表保持一致。

| 文件 / 范围 | 来源 | 协议 | 取用内容 | 是否整理改动 |
|---|---|---|---|---|
| index.html, app.js, styles.css, regulation-theme.css, tools/, tests/, data.js 的布局与默认内容 | 本项目原创 | MIT（见 LICENSE） | 页面、交互、样式、脚本、默认布局 | 原创 |
| data/stronghold.js | https://github.com/Misyra/Stronghold-Protocol | GPL-3.0（见 LICENSES/GPL-3.0.txt） | 干员数值、技能文本、模组名、攻击范围 | 是；已裁剪/规范化，未复制仓库程序 |
| data/closure.js | https://closure.wiki/zh-cn/stronghold-protocol/3 | 未找到明确再使用许可；仅署名引用 | 干员特质、精锐特质、羁绊、策略、装备基础/进阶效果 | 是；按海报需要摘录整理 |
| data/modules.js | https://closure.wiki/zh-cn/modules | 未找到明确再使用许可；仅署名引用 | 模组名称、类型、L1–L3 属性加成与效果 | 是；tools/fetch-modules.mjs 抓取整理 |
| data/prts.js | https://prts.wiki/ | CC BY-NC-SA 4.0 | 模组效果摘录（可选交叉核对） | 是；摘录整理，详见文件头 |
| data/maps.js | https://prts.wiki/w/卫戍协议·规程/战场一览 | CC BY-NC-SA 4.0（站点页脚）；地图画面版权归鹰角 / Yostar | 地图编号、场地、地图装置与特殊地形说明 | 是；按图鉴需要摘录整理 |
| data/roster-prts.js | https://prts.wiki/ | CC BY-NC-SA 4.0 | 75 名补录干员数值、技能、职业分支、模组名 | 是；摘录整理，详见文件头 |
| data/pinyin.js | pypinyin | MIT | 141 名干员拼音检索 | 生成 |
| assets/, assets-embed.js | 游戏素材 / 各 Wiki | 版权归鹰角网络 / Yostar；非授权引用；不归 MIT/GPL/CC | 头像、技能、羁绊、策略、装备图标 | 生成物；仅打包引用 |
| vendor/html-to-image.js | 上游库 | MIT（见 LICENSES/html-to-image-MIT.txt） | 导出库 | 否，保留原版权头 |
| vendor/lz-string.min.js | https://github.com/pieroxy/lz-string | MIT（见 LICENSES/lz-string-LICENSE.txt） | 分享链接里的阵容压缩 | 否，原样引用 |
| vendor/qrcode.js | https://github.com/kazuhikoarase/qrcode-generator | MIT（见 LICENSES/qrcode-generator-MIT.txt） | 海报 / 长图上的入口二维码 | 否，原样引用 |

MIT 只覆盖本项目原创代码与布局，不覆盖 data/*、assets/*、assets-embed.js、vendor/*。

本项目非官方、非盈利，禁止商用；权利人要求删除时请在仓库 Issues 提出。
