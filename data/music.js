/* ============================================================
 * data/music.js — 背景音乐 / 歌曲统一配置
 * ------------------------------------------------------------
 * 用法：在页面中通过 <script src="data/music.js"></script> 引入，
 *       然后读取 window.ELLIE_DATA.music。
 *
 * 规则：
 *  1. 只放入你合法拥有 / 已购买 / 可使用的音乐文件（mp3、m4a 等）。
 *  2. 文件放在 assets/music/ 下，src 填写相对路径。
 *  3. cover 为可选的封面图路径，没有可留空字符串。
 *  4. city 为可选的对应城市 id（同 data/cities.js 里的 id），
 *     用于按城市归属歌曲；主页默认歌曲不用填。
 *  5. 添加歌曲 = 往数组里加一个对象，无需改动其他代码。
 * ============================================================ */
window.ELLIE_DATA = window.ELLIE_DATA || {};

window.ELLIE_DATA.music = {
  // 首页 / 全站背景氛围乐（可选，不填则全站静音）
  ambient: 'assets/music/Main_TheBestForYou.mp3',

  // 城市页面或点唱机可播放的歌曲列表
  songs: [
    {
      title: 'The Best For You',
      artist: '欧阳娜娜',
      src: 'assets/music/Main_TheBestForYou.mp3',
      cover: 'assets/music/covers/默认.JPG'
    },
    {
      title: 'We',
      artist: '酸月亮 Sour Moon',
      src: 'assets/music/shanghai_we.mp3',
      cover: 'assets/music/covers/Shanghai.JPG',
      city: 'shanghai'
    },
    {
      title: '二十二',
      artist: '陶喆',
      src: 'assets/music/yunnan_twentytwo.mp3',
      cover: 'assets/music/covers/Yunnan.JPG',
      city: 'yunnan'
    },
    {
      title: '走い走い',
      artist: 'Barry',
      src: 'assets/music/苏州_走い走い.mp3',
      cover: 'assets/music/covers/Suzhou.JPG',
      city: 'suzhou'
    },
    {
      title: '下落',
      artist: '余佳运',
      src: 'assets/music/台州_下落.mp3',
      cover: 'assets/music/covers/Taizhou.JPG',
      city: 'taizhou'
    },
    {
      title: 'Promise',
      artist: 'Wonstein',
      src: 'assets/music/hangzhou_promise.mp3',
      cover: 'assets/music/covers/Hangzhou.JPG',
      city: 'hangzhou'
    },
    {
      title: 'Bedtime Story',
      artist: '欧阳娜娜',
      src: 'assets/music/london_BedtimeStory.mp3',
      cover: 'assets/music/covers/London.JPG',
      city: 'london'
    },
    {
      title: 'The Moment',
      artist: '孙燕姿',
      src: 'assets/music/澳门_themoment.mp3',
      cover: 'assets/music/covers/Macau.JPG',
      city: 'macau'
    },
    {
      title: 'My Love Mine All Mine',
      artist: 'Mitski',
      src: 'assets/music/北京_Mylove.mp3',
      cover: 'assets/music/covers/Beijing.JPG',
      city: 'beijing'
    },
    {
      title: 'Spring Rain',
      artist: 'Oscar Dunbar',
      src: 'assets/music/无锡_SpringRain.mp3',
      cover: 'assets/music/covers/Wuxi.JPG',
      city: 'wuxi'
    },
    {
      title: 'Snowman',
      artist: 'Jennie',
      src: 'assets/music/香港-snowman.mp3',
      cover: 'assets/music/covers/HongKong.JPG',
      city: 'hong-kong'
    }
  ]
};
