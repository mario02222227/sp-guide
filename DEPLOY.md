# 部署与分享

**不用租服务器。** 这是纯静态页面（HTML + CSS + JS + 图片），没有后端、没有数据库、没有登录，任何静态托管都能跑。

## 三种方式

| 方式 | 成本 | 国内访问 | 适合 |
|---|---|---|---|
| GitHub Pages | 免费 | 有时慢 / 不稳定 | 开源仓库、给作者和开发者看 |
| Cloudflare Pages | 免费 | 通常可用 | 给玩家点开的正式入口（推荐） |
| 自己的服务器 / OSS | 域名 + 流量 | 最快 | 已有域名、想长期做 |

> 国内云服务器放网站需要 **ICP 备案**；GitHub Pages / Cloudflare Pages 不需要。先别买服务器。

## 本次部署（已上线）

| 入口 | 地址 | 说明 |
|---|---|---|
| 主入口（Cloudflare） | <https://sp-guide.pages.dev/> | 国内访问快，分享用这个 |
| GitHub Pages | <https://mario02222227.github.io/sp-guide/> | 源码仓库：<https://github.com/mario02222227/sp-guide>；国内首屏要等 1–2 分钟（2.8 MB 的素材文件被限速） |

更新（改完内容后）：

```powershell
node tools/make-deploy.mjs

# Cloudflare
$env:CLOUDFLARE_ACCOUNT_ID = "bde83874dc63c966237ec4d8c68542c4"
node "$env:TEMP\sp-wrangler\node_modules\wrangler\bin\wrangler.js" pages deploy deploy --project-name=sp-guide --branch=main --commit-dirty=true

# GitHub（登录态由 gh 保存在本机）
$env:GITHUB_TOKEN = (& "$env:TEMP\gh\bin\gh.exe" auth token)
node tools/deploy-github.mjs
```

> `$env:TEMP` 被清理后，这两条命令会找不到 wrangler / gh；重新装一次即可，或改用各自的网页面板。

## 方案 A：GitHub Pages

1. 把整个仓库推到 GitHub（**公开**仓库；`index.html` 要在仓库根目录，不是只传 `dist/`）。没装 Git 也可以用 GitHub Desktop，或在网页上直接拖拽上传。
2. 仓库 → **Settings → Pages** → Source 选 **Deploy from a branch** → Branch 选 `main`、目录选 `/ (root)` → Save。
3. 等 1 分钟左右，地址是：

```
https://<你的用户名>.github.io/<仓库名>/
```

4. 以后每次 `git push`，页面自动更新。

> 仓库里的 `assets-embed.js`（2.7 MB）和 `assets/maps/`（2 MB）会一起上传；GitHub 单文件 100 MB 限制完全够用。

## 方案 B：Cloudflare Pages（推荐）

1. 注册 Cloudflare → **Workers & Pages → Create → Pages**。
2. 两种接法：
   - **Connect to Git**：选仓库，构建命令留空，输出目录填 `/`，Deploy；
   - **Direct Upload**：把整个项目文件夹拖进去（不用 Git 也行）。
3. 得到 `https://<项目名>.pages.dev/`，国内一般能直接打开。
4. 想用自己域名：Pages → Custom domains 绑定即可（域名在 Cloudflare 托管时不需要备案）。

## 方案 C：自己的服务器（可选）

已经有服务器的话，把整个目录丢到 Nginx 的站点根目录即可：

```nginx
server {
  listen 80;
  server_name sp.example.com;
  root /var/www/sp-guide;
  index index.html;
}
```

注意：国内服务器 + 域名需要备案；不做备案就只用 IP 访问。

## 部署后的两件事

### 1.（可选）让海报印上入口二维码

二维码默认**不印**，页头保持干净。需要时：顶栏「分享」→ 勾选「在导出的海报和竖版长图上印二维码」→ 在下面填站点地址（如 `https://sp.example.com/`）→ 保存。

入口越短，二维码越清楚（建议 ≤ 25 字符）；不勾选时导出图不带码。

### 2. 分享链接会变短

之前看到的是：

```
file:///C:/Users/.../dist/卫戍协议一图流.html#s=<压缩后的阵容>
```

托管之后只需要：

```
https://你的站点/#s=<压缩后的阵容>
```

默认阵容只占 **5 个字符**；改一套阵容一般是几百字符。之前那条之所以长，是因为：
1. `file://` 把 Windows 绝对路径整个写了进去；
2. 单文件版的路径里有中文，被 URL 编码成 `%E5%8D%AB...`；
3. 早期分享码把不参与渲染的 `legacy` 旧数据也一起压了——现在已去掉，只带 meta / 棋盘 / 阵容 / 装备 / 盟约 / 技能。

## 单文件版还要发吗？

要。两条线并行：

- **网页版**：适合发链接、被搜索引擎/社区收录、自动更新；
- **单文件版**：适合 QQ 群文件、离线看。`node tools/build-single.mjs` 会把战场地图也内联进去（约 6–7 MB），打开就能看图。

## 常见问题

**GitHub Pages 打开空白？** 检查仓库是不是 Public、Pages 分支是不是 `main` + `/ (root)`，以及 `index.html` 是否在根目录。

**能放 B 站/公众号吗？** 链接可以，但正文里直接贴外链可能限流；图片 + 评论区链接更稳。

**要买域名吗？** 不必须。`*.pages.dev` / `*.github.io` 都能用；买域名只是更好记。

**会被版权方要求下架吗？** 项目是非盈利同人攻略，页脚已带声明；收到请求就删对应素材，别加广告/打赏。
