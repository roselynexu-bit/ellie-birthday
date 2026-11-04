/* ============================================================
 * data/cities.js — 城市素材统一配置
 * ------------------------------------------------------------
 * 用法：在页面中通过 <script src="data/cities.js"></script> 引入，
 *       然后读取 window.ELLIE_DATA.cities。
 *
 * 字段说明：
 *  id        城市唯一标识（同时是 assets/cities/ 下的目录名）
 *  name      英文显示名
 *  nameZh    中文显示名
 *  pinColor  星星贴纸的填充色
 *  caption   城市记忆页下方的城市文字留言，可留空
 *  notes     Dock 的留言栏目文字数组，只显示文字（可选）
 *  unlocked  默认值；本次页面会话中的解锁状态由谜题流程管理
 *  globe     星星在地球 SVG 上的坐标（viewBox 1440x900，勿随意改动）
 *  photos    城市记忆页的图片相对路径数组，按展示顺序填写
 *  photoMessages  城市记忆页图片留言数组，与 photos 按序对应（可选）
 *  albumPhotos    Dock 的 Photos 相册图片数组，与城市记忆页分开配置（可选）
 *  videos    视频相对路径数组
 *
 * 规则：
 *  1. 不要在这里填写不存在的文件名。
 *  2. 添加新城市 = 复制一个对象 + 在 assets/cities/ 建同名目录。
 * ============================================================ */
window.ELLIE_DATA = window.ELLIE_DATA || {};

window.ELLIE_DATA.cities = [
  {
    id: 'shanghai',
    name: 'Shanghai',
    nameZh: '上海',
    pinColor: '#9f584a',
    caption: '',
    unlocked: false,
    globe: { x: 795, y: 450 },
    photos: [
      'assets/cities/shanghai/photos/01.JPG',
      'assets/cities/shanghai/photos/02.JPG',
      'assets/cities/shanghai/photos/03.JPG',
      'assets/cities/shanghai/photos/04.JPG',
      'assets/cities/shanghai/photos/05.JPG',
      'assets/cities/shanghai/photos/06.JPG',
      'assets/cities/shanghai/photos/07.JPG',
      'assets/cities/shanghai/photos/08.JPG',
      'assets/cities/shanghai/photos/09.JPG',
      'assets/cities/shanghai/photos/10.JPG',
      'assets/cities/shanghai/photos/11.JPG',
      'assets/cities/shanghai/photos/12.JPG',
      'assets/cities/shanghai/photos/13.JPG',
      'assets/cities/shanghai/photos/14.JPG',
      'assets/cities/shanghai/photos/15.JPG',
      'assets/cities/shanghai/photos/16.JPG',
      'assets/cities/shanghai/photos/17.JPG?v=2',
      'assets/cities/shanghai/photos/18.JPG',
      'assets/cities/shanghai/photos/19.JPG',
      'assets/cities/shanghai/photos/20.JPG'
    ],
    photoMessages: [
      '两个女人为爱奔赴小黄 一个女人已经沦陷',
      '贝果侠合体大战万圣节',
      '星期三与料理鼠王跨时代会晤',
      '参加的hyj的第一个生日！',
      '本人18岁的第一天 无比幸福',
      '麦当劳小姐无奈劝架芥末酱和番茄酱',
      '这两人为啥这么委屈：）',
      '一年前的今天！时间好快',
      '生日合照持续更新中',
      '大驾光临黄帅同学19岁生日',
      '闺蜜合照（安吉莉卡限定版',
      '又在迪士尼 小饼和维尼',
      '好吧这两个人的萌是客观的公正的',
      '是谁在举起我的海报！',
      '好辛苦的Day1 好怀念的记忆 Satisfied～',
      '大梦一场就这么结束了呜呜',
      '毕业照：给大家介绍一下 这是我闺蜜',
      '你家的小狗！可惜我没拍CC',
      '在领科的最后一天 （by 阮一言）',
      '国内的最后一个生日由v师傅收尾 而伦敦的第一个生日由你开启'
    ],
    videos: [
      'assets/cities/shanghai/videos/hamilton.MP4'
    ],
    ll: [121.47, 31.23],
  },
  {
    id: 'yunnan',
    name: 'Yunnan',
    nameZh: '云南',
    pinColor: '#dfb858',
    caption: '',
    unlocked: false,
    globe: { x: 700, y: 490 },
    photos: [
      'assets/cities/yunnan/photos/01.JPG',
      'assets/cities/yunnan/photos/02.JPG',
      'assets/cities/yunnan/photos/03.JPG',
      'assets/cities/yunnan/photos/04.jpg',
      'assets/cities/yunnan/photos/05.JPG',
      'assets/cities/yunnan/photos/06.JPG'
    ],
    photoMessages: [
      '嗯呢 谁家早期抗打图片被考古出来了',
      '人要学会放弃 更要学会放过自己……',
      '好精彩的一个晚上 好精彩的一群人',
      '为啥这个Jesse杵在中间',
      '大理！好想再去一起大理',
      '日照金山会一直给你带来好运的！'
    ],
    videos: [],
    ll: [102.83, 24.88],
  },
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    nameZh: '香港',
    pinColor: '#c09094',
    caption: '',
    unlocked: false,
    globe: { x: 760, y: 484 },
    photos: [
      'assets/cities/hong-kong/photos/01.JPG',
      'assets/cities/hong-kong/photos/02.JPG',
      'assets/cities/hong-kong/photos/03.JPG',
      'assets/cities/hong-kong/photos/04.JPG',
      'assets/cities/hong-kong/photos/05.JPG',
      'assets/cities/hong-kong/photos/06.JPG',
      'assets/cities/hong-kong/photos/07.JPG'
    ],
    photoMessages: [
      '《电梯口》',
      '香港早茶真的好好吃 我好想飞回国内吃',
      '这张图的含金量不用多说了吧',
      '港大红墙来打卡宝宝巴了！（可惜我们都没看上港大哼哼哼',
      '好淳朴一孩子',
      '好怀念这口',
      '回国机票！ps:听听歌吧！Jennie这个cover真的很好听！我找了好久呢！'
    ],
    videos: [],
    ll: [114.17, 22.32],
  },
  {
    id: 'suzhou',
    name: 'Suzhou',
    nameZh: '苏州',
    pinColor: '#617058',
    caption: '',
    unlocked: false,
    globe: { x: 780, y: 428 },
    photos: [
      'assets/cities/suzhou/photos/01.JPG',
      'assets/cities/suzhou/photos/02.JPG'
    ],
    photoMessages: [
      '咖啡店标准打卡 原谅我的拍照技术 还需要向周师傅进修',
      '手机合照再+1'
    ],
    videos: [],
    ll: [120.59, 31.3],
  },
  {
    id: 'taizhou',
    name: 'Taizhou',
    nameZh: '台州',
    pinColor: '#687e93',
    caption: '',
    unlocked: false,
    globe: { x: 785, y: 480 },
    photos: [
      'assets/cities/taizhou/photos/01.JPG',
      'assets/cities/taizhou/photos/02.JPG',
      'assets/cities/taizhou/photos/03.JPG',
      'assets/cities/taizhou/photos/04.JPG',
      'assets/cities/taizhou/photos/05.JPG',
      'assets/cities/taizhou/photos/06.JPG',
      'assets/cities/taizhou/photos/07.JPG'
    ],
    photoMessages: [
      '为了这个芝麻饼怒排两小时！但是很有体验呀',
      '想不想半夜再来一次K歌',
      '日出！没看到全程 但全程在追着太阳跑',
      '体验一下龙井小学的上学日常',
      '非常幸福 特别幸福 超级幸福',
      '小马小马你快跑',
      '哼哼哼 我们的厨艺肯定已经不同往日了！'
    ],
    videos: [],
    ll: [121.42, 28.66],
  },
  {
    id: 'beijing',
    name: 'Beijing',
    nameZh: '北京',
    pinColor: '#9f584a',
    caption: '',
    unlocked: false,
    globe: { x: 775, y: 355 },
    photos: [
      'assets/cities/beijing/photos/01.JPG',
      'assets/cities/beijing/photos/02.JPG',
      'assets/cities/beijing/photos/03.JPG',
      'assets/cities/beijing/photos/04.JPG',
      'assets/cities/beijing/photos/05.JPG',
      'assets/cities/beijing/photos/06.JPG',
      'assets/cities/beijing/photos/07.JPG?v=2',
      'assets/cities/beijing/photos/08.JPG?v=2',
      'assets/cities/beijing/photos/09.JPG?v=2',
      'assets/cities/beijing/photos/10.JPG?v=2',
      'assets/cities/beijing/photos/11.JPG?v=2',
      'assets/cities/beijing/photos/12.JPG?v=3',
      'assets/cities/beijing/photos/13.JPG?v=2',
      'assets/cities/beijing/photos/14.JPG?v=2',
      'assets/cities/beijing/photos/15.JPG?v=2',
      'assets/cities/beijing/photos/16.JPG?v=2',
      'assets/cities/beijing/photos/17.PNG',
      'assets/cities/beijing/photos/18.JPG?v=2'
    ],
    photoMessages: [
      '机场大集合！大概拍了五六七八遍吧',
      '“我和我的大摄影师！” “对不上焦哈哈哈”',
      '好多好多合照',
      '两个在啃糖葫芦的南方小妞',
      '吃完酸奶出来完全恢复能量了！',
      '一直在自拍呀 每一帧都很好看呀！',
      '故宫虽累 但实在震撼',
      '第三视角沉浸式出片',
      '漂亮 美丽 pretty beautiful gorgeous',
      '“珍！宝！馆！” “当当当当～”',
      '神投手的诞生',
      '来了来了 神图出现了',
      '变形金刚很酷',
      '依旧走路出片',
      '其实我也出镜了 我的大棉袄出镜了！',
      '两个人凑这干啥呢',
      '我真很喜欢很喜欢这张！',
      '360度无死角！ps:北京是除上海外照片最多的。当时我只觉得记录素材，整理素材和剪视频都很烦人。但现在站在旅途的终点回望，才会发现有影像记录是一件多幸运的事。被记录下来的每一分，每一秒，都是永恒。'
    ],
    videos: [
      'assets/cities/beijing/videos/vlog1.MP4',
      'assets/cities/beijing/videos/vlog2.MP4'
    ],
    ll: [116.41, 39.9],
  },
  {
    id: 'hangzhou',
    name: 'Hangzhou',
    nameZh: '杭州',
    pinColor: '#dfb858',
    caption: '',
    unlocked: false,
    globe: { x: 755, y: 465 },
    photos: [
      'assets/cities/hangzhou/photos/01.JPG',
      'assets/cities/hangzhou/photos/02.JPG',
      'assets/cities/hangzhou/photos/03.JPG',
      'assets/cities/hangzhou/photos/04.JPG',
      'assets/cities/hangzhou/photos/05.JPG',
      'assets/cities/hangzhou/photos/06.JPG'
    ],
    photoMessages: [
      '胶片真的有独一份的味道',
      'hiahiahia 不美丽但很开心的一张',
      '气死我了两个祖宗！',
      '好萌嘿嘿嘿',
      '人从嗯呢',
      '剧本杀再约一场吧！'
    ],
    videos: [
      'assets/cities/hangzhou/videos/KTV.MP4'
    ],
    ll: [120.16, 30.27],
  },
  {
    id: 'wuxi',
    name: 'Wuxi',
    nameZh: '无锡',
    pinColor: '#617058',
    caption: '',
    unlocked: false,
    globe: { x: 750, y: 423 },
    photos: [
      'assets/cities/wuxi/photos/01.jpg',
      'assets/cities/wuxi/photos/02.JPG',
      'assets/cities/wuxi/photos/03.JPG',
      'assets/cities/wuxi/photos/04.JPG',
      'assets/cities/wuxi/photos/05.JPG',
      'assets/cities/wuxi/photos/06.JPG',
      'assets/cities/wuxi/photos/07.jpg'
    ],
    photoMessages: [
      '想吃记得来无锡找我 我肯定在',
      '大变样的惠山古镇 快被热死的四个人',
      '酒店 外卖 跑男',
      '偶遇小黄',
      '两个赖床的女人',
      '秋名山车神养成记',
      '一直在逆袭哦'
    ],
    videos: [],
    ll: [120.31, 31.49],
  },
  {
    id: 'macau',
    name: 'Macau',
    nameZh: '澳门',
    pinColor: '#c09094',
    caption: '',
    unlocked: false,
    globe: { x: 740, y: 495 },
    photos: [
      'assets/cities/macau/photos/01.JPG',
      'assets/cities/macau/photos/02.JPG',
      'assets/cities/macau/photos/03.JPG',
      'assets/cities/macau/photos/04.JPG',
      'assets/cities/macau/photos/05.JPG',
      'assets/cities/macau/photos/06.JPG',
      'assets/cities/macau/photos/07.JPG',
      'assets/cities/macau/photos/08.JPG',
      'assets/cities/macau/photos/09.JPG'
    ],
    photoMessages: [
      '准备出发！',
      '好好吃的冰室！下次去澳门肯定要再吃一次！',
      '闺蜜合照呀',
      '发呆的小姐姐',
      '很有故事感哦',
      '看我这张拼的多好！',
      '有那个镜子依赖症哦',
      '很巧妙的摄像头 很好逛的小店',
      '一人一桶泡面！一直在饿'
    ],
    videos: [],
    ll: [113.54, 22.2],
  },
  {
    id: 'london',
    name: 'London',
    nameZh: '伦敦',
    pinColor: '#687e93',
    caption: '',
    unlocked: false,
    globe: { x: 567, y: 270 },
    photos: [
      'assets/cities/london/photos/01.JPG',
      'assets/cities/london/photos/02.JPG',
      'assets/cities/london/photos/03.JPG',
      'assets/cities/london/photos/04.JPG',
      'assets/cities/london/photos/05.JPG',
      'assets/cities/london/photos/06.JPG',
      'assets/cities/london/photos/07.JPG',
      'assets/cities/london/photos/08.JPG',
      'assets/cities/london/photos/09.JPG',
      'assets/cities/london/photos/10.JPG',
      'assets/cities/london/photos/11.JPG'
    ],
    photoMessages: [
      '在宜家啥都想买的两个女人',
      '不能播加sz伦敦成功会晤！',
      '要一起做很多很多顿饭',
      '要一起吃很多很多顿饭',
      '给你欣赏一下海德公园的大天鹅',
      '好多好多好多好多好多南瓜',
      '两个人饿极了等待薯条中',
      '大吃一口：）',
      '过分热烈的阳光',
      '英国天黑的好早 下午三四点太阳就开始往下走了',
      '诡秘我的肩膀你想靠就靠！'
    ],
    videos: [],
    ll: [-0.13, 51.51],
  }
];
