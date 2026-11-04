# 素材放置指南（ASSET_GUIDE）

本指南说明 `ellie-birthday` 项目中各类素材应该放在哪里、用什么格式，
以及如何添加新的城市和照片。** currently 所有素材目录均为空，等待你从 Mac 中复制真实文件进来。**

---

## 一、目录结构总览

```
ellie-birthday/
├── index.html                  ← 开机主页（已完成，勿动）
├── scrapbook.html              ← 手账页（已有，勿动）
├── photos/                     ← 主页三张替换照片（已完成，勿动）
├── assets/
│   ├── cover-bg.jpg            ← 主页背景（已有，勿动）
│   ├── jeweled-c.png           ← 宝石字母 C（已有，勿动）
│   ├── cities/                 ← 【城市素材】按城市分目录
│   │   ├── shanghai/{photos,videos}/
│   │   ├── yunnan/{photos,videos}/
│   │   ├── hong-kong/{photos,videos}/
│   │   ├── suzhou/{photos,videos}/
│   │   ├── taizhou/{photos,videos}/
│   │   ├── beijing/{photos,videos}/
│   │   ├── hangzhou/{photos,videos}/
│   │   ├── wuxi/{photos,videos}/
│   │   ├── macau/{photos,videos}/
│   │   └── london/{photos,videos}/
│   ├── music/                  ← 【音乐】合法获得的音频文件
│   ├── games/puzzle/           ← 【小游戏】拼图等游戏的图片素材
│   └── ui/                     ← 【界面装饰】图标、边框、贴纸等
├── data/
│   ├── cities.js               ← 城市配置（照片/视频路径、图钉颜色、文案）
│   └── music.js                ← 音乐配置（背景乐、歌曲列表）
└── ASSET_GUIDE.md              ← 本文件
```

---

## 二、从 Mac 的哪里复制素材？

| 素材类型 | Mac 上的常见位置 | 操作建议 |
|---|---|---|
| 手机照片/视频 | 「照片」App、iPhone 隔空投递到「下载」 | 在照片 App 中选中 → 文件 → 导出 → 导出到 `assets/cities/<城市>/photos/` |
| 桌面上的照片 | `~/Desktop/` | 直接拖入对应城市的 `photos/` 目录 |
| 微信收到的图 | `~/Downloads/` 或微信存储目录 | 复制到对应目录 |
| 音乐文件 | `~/Music/`、iTunes/Apple Music 资料库 | 仅复制你合法拥有的文件（购买下载的 mp3/m4a） |

> 注意：直接引用 `~/Pictures/Photos Library.photoslibrary` 内部路径是不可靠的，
> 请务必先导出为普通文件再复制进项目。

## 三、推荐文件格式与大小

| 用途 | 推荐格式 | 建议大小 |
|---|---|---|
| 城市照片 | `.jpg`（最省空间）或 `.png` | 单张建议 ≤ 2 MB，最长边 1600–2400 px 足够 |
| 城市视频 | `.mp4`（H.264，兼容性最好） | 单条建议 ≤ 20 MB，短片段 5–30 秒 |
| 音乐 | `.mp3` 或 `.m4a` | 单首建议 ≤ 10 MB |
| 拼图/装饰图 | `.png`（需要透明底）或 `.jpg` | 拼图原图建议 ≥ 800 px 宽 |
| 界面装饰 | `.png` / `.svg` | 尽量小，装饰性文件 |

文件名建议：英文小写 + 数字序号，如 `01.jpg`、`02.jpg`，**不要**用中文名和空格
（避免浏览器路径兼容问题）。放入后如需改名，直接改文件即可，配置文件里同步改路径。

## 四、每座城市需要放入哪些文件？

每座城市的最低配置是 **「0 张照片也可以」**——页面会自动跳过空城市。
建议每座城市至少 3–5 张照片 + 可选 1–2 段视频：

```
assets/cities/shanghai/
├── photos/
│   ├── 01.jpg      ← 必放：主图（用于城市封面/图钉弹窗首图）
│   ├── 02.jpg      ← 选放
│   ├── 03.jpg      ← 选放
│   └── ...         ← 上限建议 20 张以内
└── videos/
    └── 01.mp4      ← 选放，没有视频可留空
```

放好后，打开 `data/cities.js`，在对应城市的 `photos: []` 里按顺序填写路径：

```js
{
  id: 'shanghai',
  name: 'Shanghai',
  nameZh: '上海',
  pinColor: '#9f584a',
  caption: '第一次一起看的展',     // 图钉旁的一句话，可留空
  photos: [
    'assets/cities/shanghai/photos/01.jpg',
    'assets/cities/shanghai/photos/02.jpg',
    'assets/cities/shanghai/photos/03.jpg'
  ],
  videos: [
    'assets/cities/shanghai/videos/01.mp4'
  ]
},
```

**务必保证：配置里写的每个路径，在磁盘上都有对应的真实文件。**

## 五、音乐怎么放？

1. 把音频文件复制到 `assets/music/`（如 `assets/music/song-01.mp3`）。
2. 打开 `data/music.js`：
   - `ambient`：填一首全站背景乐路径，留空则全站静音；
   - `songs`：按模板把每首歌的 `title` / `artist` / `src` / `cover` 填进去；
   - `city`：可选，填城市 id（同 `data/cities.js` 的 `id`），表示这首歌属于哪座城市。
     网站规则：**只显示默认歌曲 + 已解锁城市的歌曲**；每解锁一座城市，
     点唱机和黑胶唱片机里就会多一首对应城市的歌。

### 黑胶唱片封面（cover）

- 封面图放在 **`assets/music/covers/`**，建议和 mp3 同名，如
  `assets/music/covers/shanghai_we.jpg`；
- 在 `data/music.js` 对应歌曲的 `cover` 字段填路径，如
  `cover: 'assets/music/covers/shanghai_we.jpg'`；
- 推荐正方形（500×500 px 以上）、`.jpg` 或 `.png`、单张 ≤ 300 KB；
- **没放封面也不影响播放**：唱片标签会自动显示城市主题色 + 歌名首字。

## 六、如何添加一座新城市？

1. 建目录（终端执行，把 `chengdu` 换成新城市英文名）：
   ```bash
   mkdir -p assets/cities/chengdu/photos assets/cities/chengdu/videos
   ```
2. 复制照片/视频进去；
3. 在 `data/cities.js` 的数组里复制一个城市对象，改 `id`、`name`、`nameZh`、路径；
4. 新城市自动出现在网站中，无需改其他代码。

## 七、如何确认素材已经被网站识别？

本阶段网站代码还没有读取这些素材，所以用以下两种方式自检：

**方式 A：终端核对（最可靠）**

```bash
cd ~/ellie-birthday
ls assets/cities/*/photos/        # 应列出每座城市的照片
ls assets/music/                  # 应列出音乐文件
```

**方式 B：浏览器直接访问（确认文件路径没写错）**

```bash
cd ~/ellie-birthday && python3 -m http.server 8000
```

然后浏览器打开 `http://localhost:8000/assets/cities/shanghai/photos/01.jpg`，
能看到图片即说明路径正确；404 则说明文件名和配置不一致。

> 阶段二开发城市页面时，我们会把 `data/cities.js` 接入网页，
> 到时候打开页面就能直接看到素材是否加载成功。
