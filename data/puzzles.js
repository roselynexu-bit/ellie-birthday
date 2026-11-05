/* ============================================================
 * data/puzzles.js — 每座城市独立的谜题配置
 * ------------------------------------------------------------
 * 未确认的答案和素材保持 null / pending，避免错误答案意外解锁。
 * 修改图片或谜题时，只需编辑对应城市对象。
 * ============================================================ */
window.ELLIE_DATA = window.ELLIE_DATA || {};

window.ELLIE_DATA.puzzles = {
  shanghai: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'image-choice',
    title: '请选择当前城市的装扮',
    prompt: '哪一张装扮属于上海？',
    hint: '看看四张城市纪念画里的穿着。',
    options: [
      { id: 'shanghai', image: 'assets/games/puzzle/上海.jpg' },
      { id: 'london', image: 'assets/games/puzzle/伦敦.jpg' },
      { id: 'macau', image: 'assets/games/puzzle/澳门.jpg' },
      { id: 'beijing', image: 'assets/games/puzzle/北京.jpg' }
    ],
    correctOption: 'shanghai'
  },
  yunnan: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'luck',
    title: '云南的好运签',
    prompt: '点击揭开这份好运。',
    successMessage: '恭喜你运气爆棚！当前城市直接解锁！'
  },
  'hong-kong': {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'multiple-choice',
    title: '香港之旅的小插曲',
    prompt: '我们的香港之旅有一位朋友发烧了，请问他是？',
    options: [
      { id: 'a', label: 'A. 李某' },
      { id: 'b', label: 'B. 徐某' },
      { id: 'c', label: 'C. 龙某' },
      { id: 'd', label: 'D. 刘某' }
    ],
    correctOption: 'c',
    successMessage: '答对了！香港城市回忆已解锁。'
  },
  suzhou: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'luck',
    title: '苏州欢迎信',
    prompt: '点击打开苏州的欢迎信。',
    successMessage: '粉随正主 欧皇降霖 欢迎来到苏州！'
  },
  taizhou: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'person-choice',
    title: '请点击照片中的ta',
    prompt: '我们因为某人的生日前往了台州。',
    hint: '回想一下合照里大家的站位。',
    correctPosition: 'right-1',
    image: 'assets/games/puzzle/无锡小分队错2.JPG',
    options: [
      { id: 'left-1', label: 'A. 左一' },
      { id: 'left-2', label: 'B. 左二' },
      { id: 'right-2', label: 'C. 右一' },
      { id: 'right-1', label: 'D. 右二' }
    ]
  },
  beijing: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'image-choice',
    title: '请选择当前城市的装扮',
    prompt: '哪一张装扮属于北京？',
    hint: '看看四张城市纪念画里的穿着。',
    options: [
      { id: 'shanghai', image: 'assets/games/puzzle/上海.jpg' },
      { id: 'london', image: 'assets/games/puzzle/伦敦.jpg' },
      { id: 'macau', image: 'assets/games/puzzle/澳门.jpg' },
      { id: 'beijing', image: 'assets/games/puzzle/北京.jpg' }
    ],
    correctOption: 'beijing'
  },
  hangzhou: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'person-choice',
    title: '请点击照片中的ta',
    prompt: '我们因为某人的生日前往了杭州。',
    hint: '回想一下合照里大家的站位。',
    correctPosition: 'left-2',
    image: 'assets/games/puzzle/无锡小分队错2.JPG',
    options: [
      { id: 'left-1', label: 'A. 左一' },
      { id: 'left-2', label: 'B. 左二' },
      { id: 'right-2', label: 'C. 右一' },
      { id: 'right-1', label: 'D. 右二' }
    ]
  },
  wuxi: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'image-choice',
    title: '请选择前往无锡的小分队',
    prompt: '哪一张照片是正确的无锡小分队？',
    hint: '仔细看看照片中的小分队成员。',
    options: [
      { id: 'wrong-1', image: 'assets/games/puzzle/无锡小分队错1.JPG' },
      { id: 'correct', image: 'assets/games/puzzle/无锡小分队正确答案.JPG' },
      { id: 'wrong-2', image: 'assets/games/puzzle/无锡小分队错2.JPG' },
      { id: 'wrong-3', image: 'assets/games/puzzle/无锡小分队错3.web.jpg' }
    ],
    correctOption: 'correct',
    successMessage: '找到正确的无锡小分队了！'
  },
  macau: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'image-choice',
    title: '请选择当前城市的装扮',
    prompt: '哪一张装扮属于澳门？',
    hint: '看看四张城市纪念画里的穿着。',
    options: [
      { id: 'shanghai', image: 'assets/games/puzzle/上海.jpg' },
      { id: 'london', image: 'assets/games/puzzle/伦敦.jpg' },
      { id: 'macau', image: 'assets/games/puzzle/澳门.jpg' },
      { id: 'beijing', image: 'assets/games/puzzle/北京.jpg' }
    ],
    correctOption: 'macau'
  },
  london: {
    status: 'ready',
    unlockAnimation: 'paper-airdrop-letter',
    type: 'image-choice',
    title: '请选择当前城市的装扮',
    prompt: '哪一张装扮属于伦敦？',
    hint: '看看四张城市纪念画里的穿着。',
    options: [
      { id: 'shanghai', image: 'assets/games/puzzle/上海.jpg' },
      { id: 'london', image: 'assets/games/puzzle/伦敦.jpg' },
      { id: 'macau', image: 'assets/games/puzzle/澳门.jpg' },
      { id: 'beijing', image: 'assets/games/puzzle/北京.jpg' }
    ],
    correctOption: 'london'
  }
};
