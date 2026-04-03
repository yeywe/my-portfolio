// 作品数据（纯本地，无数据库，可直接部署）
export const works = [
  {
    id: 1,
    title: "企业管理系统",
    desc: "后台权限管理、数据可视化",
    category: "admin",
    tech: "Vue3 + ElementPlus",
    url: "https://www.baidu.com",
    extra: "负责页面开发、权限控制、性能优化"
  },
  {
    id: 2,
    title: "商城小程序",
    desc: "商品列表、购物车、支付流程",
    category: "mini",
    tech: "Uniapp + 微信小程序",
    url: "",
    extra: "负责页面搭建、接口对接"
  },
  {
    id: 3,
    title: "AI 绘画工具",
    desc: "调用 AIGC 接口生成图片、支持尺寸选择",
    category: "ai",
    tech: "Next.js + AI API",
    url: "https://www.baidu.com",
    extra: "负责对接 AI 接口、图片展示、下载功能"
  },
  {
    id: 4,
    title: "个人作品集网站",
    desc: "调用 AIGC 接口生成图片、支持尺寸选择",
    category: "personal",
    tech: "Next.js + AI API",
    url: "https://www.baidu.com",
    extra: "负责对接 AI 接口、图片展示、下载功能"
  },
  {
    id: 99,
    title: "AI 在线聊天工具",
    category: "ai",
    tech: "Next.js + DeepSeek API + AI 辅助开发",
    desc: "基于大模型 API 开发的简易 AI 聊天网页，支持实时对话",
    url: "https://你的github.io/ai-chat",
    extra: `
      • 独立调用 DeepSeek API 实现 AI 对话能力
      • 使用 AI Agent 辅助完成页面结构、交互逻辑开发
      • 开发效率提升 60%，快速完成前端界面 + 接口对接
      • 实现消息流式输出、历史记录、响应式布局
    `
  }
]

export const profile = {
  name: "Frontend Engineer",
  age: 26,
  avatar: "https://avatars.githubusercontent.com/u/1164541?v=4",
  job: "Frontend Engineer",
  intro: ["4 年前端开发经验，专注后台管理系统与微信小程序开发",
    "熟练使用 AI 辅助开发工具，借助 AI Agent 提升开发效率 60%+",
    "具备大模型前端调用与交互开发能力"],
  skills: "HTML / CSS / JS / React / Next.js / Git / 小程序 ......",
  contact: {
    wechat: "your-wechat-id",
    phone: "13800138000",
    email: "your@email.com",
    // 这里放你的微信二维码图片链接（本地/网络都可以）
    qrcode: "/images/wechat0-img.jpg"
  },
}

// data.js 追加这段
export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "Flex / Grid", "响应式布局"],
  framework: [ "Vue2/3",  "Mpx", "UniApp", "React", "Next.js"],
  tools: ["Git", "Axios", "Webpack", "Vite", "ESLint", "npm"],
  ai: [
    "AI 辅助开发",
    "AI Agent 提效",
    "DeepSeek API 调用",
    "AI 聊天页面开发",
    "代码生成与优化"
  ],
  business: ["后台管理系统", "微信小程序", "H5", "组件封装", "AI 提效开发"]
};


export const experiences = [
  {
    company: "XX科技有限公司",
    position: "前端开发工程师",
    duration: "2023.06 - 至今",
    desc: [
      "负责公司官网、后台管理系统、微信小程序的页面开发与维护",,
      "与UI、后端协作，完成接口联调与功能上线",
      "优化页面加载速度与用户交互体验",
      "引入 AI 辅助开发流程，借助 AI Agent 实现页面开发效率提升 **60%+**",
      "将传统 4 小时开发任务缩短至 **0.5–2 小时**，显著提升交付速度",
      "通过 AI 分析项目结构、自动生成模板代码，降低重复劳动，减少 Bug 率"
    ]
  },
  {
    company: "XX信息科技有限公司",
    position: "前端实习生",
    duration: "2022.6 - 2023.05",
    desc: [
      "参与小程序与管理系统页面开发",
      "学习并使用 Git 进行团队协作开发",
      "完成页面还原、交互效果实现"
    ]
  }
];