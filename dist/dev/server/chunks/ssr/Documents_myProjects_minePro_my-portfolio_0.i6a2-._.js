module.exports = [
"[project]/Documents/myProjects/minePro/my-portfolio/app/data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 作品数据（纯本地，无数据库，可直接部署）
__turbopack_context__.s([
    "profile",
    ()=>profile,
    "works",
    ()=>works
]);
const works = [
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
    }
];
const profile = {
    name: "前端开发者",
    job: "Frontend Engineer",
    intro: "专注 Vue/React 开发，擅长交互动效",
    skills: "Vue3, React, Next.js, JavaScript, CSS",
    contact: "wx: D643618"
};
}),
"[project]/Documents/myProjects/minePro/my-portfolio/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/myProjects/minePro/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$app$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/myProjects/minePro/my-portfolio/app/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/myProjects/minePro/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    const me = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$app$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"];
    const categoryMap = {
        '全部': 'all',
        '管理系统': 'admin',
        '小程序': 'mini',
        '个人作品': 'personal',
        'AI作品': 'ai'
    };
    // ✅ 所有动画放在 useEffect 里，安全运行在客户端
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // ==============================================
        // 🌸 花瓣飘落
        // ==============================================
        function createPetal() {
            const container = document.getElementById('petals-container');
            if (!container) return;
            const petal = document.createElement('div');
            const isLeaf = Math.random() > 0.5;
            petal.textContent = isLeaf ? '🍃' : '🌸';
            petal.style.position = 'absolute';
            petal.style.top = '-50px';
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.fontSize = Math.random() * 14 + 10 + 'px';
            petal.style.opacity = 0.8 + Math.random() * 0.2;
            petal.style.animation = 'fall ' + (Math.random() * 3 + 4) + 's linear forwards';
            container.appendChild(petal);
            setTimeout(()=>petal.remove(), 7000);
        }
        const style = document.createElement('style');
        style.textContent = '@keyframes fall {' + '0%{transform:translateY(0) rotate(0deg);opacity:1}' + '100%{transform:translateY(100vh) rotate(360deg);opacity:0}' + '}';
        document.head.appendChild(style);
        setInterval(createPetal, 300);
        // ==============================================
        // 分类切换
        // ==============================================
        document.querySelectorAll('.tab').forEach((tab)=>{
            tab.addEventListener('click', ()=>{
                document.querySelectorAll('.tab').forEach((t)=>t.classList.remove('active'));
                tab.classList.add('active');
                const c = tab.dataset.category;
                document.querySelectorAll('.card').forEach((card)=>{
                    card.style.display = c === 'all' || card.dataset.category === c ? 'block' : 'none';
                });
            });
        });
        document.querySelector('.tab[data-category="all"]').classList.add('active');
        // ==============================================
        // 卡片展开 / 收起 + 自动滚动
        // ==============================================
        let lastOpenCard = null;
        function scrollToCenter(el) {
            setTimeout(()=>{
                const rect = el.getBoundingClientRect();
                const top = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }, 300);
        }
        document.querySelectorAll('.toggle-btn').forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                const card = btn.closest('.card');
                const isOpening = !card.classList.contains('open');
                document.querySelectorAll('.card').forEach((c)=>{
                    c.classList.remove('open');
                    c.querySelector('.toggle-btn').textContent = '查看详情';
                });
                if (isOpening) {
                    card.classList.add('open');
                    btn.textContent = '收起详情';
                    scrollToCenter(card);
                    lastOpenCard = card;
                } else {
                    if (lastOpenCard) scrollToCenter(lastOpenCard);
                    lastOpenCard = null;
                }
            });
        });
        // ==============================================
        // 视差滚动
        // ==============================================
        window.addEventListener('scroll', ()=>{
            const bg = document.querySelector('.parallax-bg');
            if (bg) bg.style.transform = 'translateY(' + window.scrollY * 0.5 + 'px)';
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "petals-container",
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 9999
                }
            }, void 0, false, {
                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero parallax-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "parallax-bg"
                    }, void 0, false, {
                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container hero-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "Hi, 我是",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                        lineNumber: 124,
                                        columnNumber: 21
                                    }, this),
                                    me.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: me.job
                            }, void 0, false, {
                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    maxWidth: 500,
                                    lineHeight: 1.6
                                },
                                children: me.intro
                            }, void 0, false, {
                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#works",
                                className: "btn",
                                children: "查看作品集"
                            }, void 0, false, {
                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "About Me"
                    }, void 0, false, {
                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container about-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "avatar"
                            }, void 0, false, {
                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: me.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "job",
                                        children: me.job
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "intro",
                                        children: me.intro
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "skills",
                                        children: me.skills
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "works",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "作品集"
                    }, void 0, false, {
                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tabs",
                                children: Object.keys(categoryMap).map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "tab",
                                        "data-category": categoryMap[label],
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$app$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["works"].map((item, index)=>{
                                    const col = index % 3 + 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `card col-${col}`,
                                        "data-category": item.category,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-img"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-body",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card-short-content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "card-title",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                lineNumber: 165,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "card-desc",
                                                                children: item.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                lineNumber: 166,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "card-tech",
                                                                children: item.tech
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                lineNumber: 167,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card-detail",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "detail-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        children: "📝 项目简介"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                        lineNumber: 172,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: item.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                        lineNumber: 173,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                lineNumber: 171,
                                                                columnNumber: 23
                                                            }, this),
                                                            item.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "detail-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        children: "🔗 作品链接"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                        lineNumber: 178,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: item.url,
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: item.url
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                            lineNumber: 180,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                        lineNumber: 179,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                lineNumber: 177,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "detail-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        children: "💻 技术栈"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                        lineNumber: 188,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: item.tech
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                        lineNumber: 189,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "detail-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        children: "✅ 主要贡献"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                        lineNumber: 193,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: item.extra
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                        lineNumber: 194,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                                lineNumber: 192,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "toggle-btn",
                                                        children: "查看详情"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: me.contact
                    }, void 0, false, {
                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$myProjects$2f$minePro$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2026 Personal Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/myProjects/minePro/my-portfolio/app/page.js",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/myProjects/minePro/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/myProjects/minePro/my-portfolio/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=Documents_myProjects_minePro_my-portfolio_0.i6a2-._.js.map