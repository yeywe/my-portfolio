'use client';

import { works, profile } from './data';
import { useEffect } from 'react';

export default function Home() {
  const me = profile;
  const categoryMap = {
    '全部': 'all',
    '管理系统': 'admin',
    '小程序': 'mini',
    '个人作品': 'personal',
    'AI作品': 'ai',
  };

  // ✅ 所有动画放在 useEffect 里，安全运行在客户端
  useEffect(() => {
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
      setTimeout(() => petal.remove(), 7000);
    }

    const style = document.createElement('style');
    style.textContent =
      '@keyframes fall {' +
      '0%{transform:translateY(0) rotate(0deg);opacity:1}' +
      '100%{transform:translateY(100vh) rotate(360deg);opacity:0}' +
      '}';
    document.head.appendChild(style);
    setInterval(createPetal, 300);

    // ==============================================
    // 分类切换
    // ==============================================
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const c = tab.dataset.category;
        document.querySelectorAll('.card').forEach(card => {
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
      setTimeout(() => {
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 300);
    }

    document.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const isOpening = !card.classList.contains('open');

        document.querySelectorAll('.card').forEach(c => {
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
    window.addEventListener('scroll', () => {
      const bg = document.querySelector('.parallax-bg');
      if (bg) bg.style.transform = 'translateY(' + window.scrollY * 0.5 + 'px)';
    });
  }, []);

  return (
    <main>
      {/* 🌸 花瓣容器 */}
      <div
        id="petals-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      {/* 头部 */}
      <section className="hero parallax-section">
        <div className="parallax-bg" />
        <div className="container hero-content">
          <h1>Hi, 我是<br />{me.name}</h1>
          <p>{me.job}</p>
          <p style={{ maxWidth: 500, lineHeight: 1.6 }}>{me.intro}</p>
          <a href="#works" className="btn">查看作品集</a>
        </div>
      </section>

      {/* 关于我 */}
      <section className="about">
        <h2 className="section-title">About Me</h2>
        <div className="container about-box">
          <div className="avatar" />
          <div>
            <h3>{me.name}</h3>
            <p className="job">{me.job}</p>
            <p className="intro">{me.intro}</p>
            <p className="skills">{me.skills}</p>
          </div>
        </div>
      </section>

      {/* 作品 */}
      <section id="works">
        <h2 className="section-title">作品集</h2>
        <div className="container">
          <div className="tabs">
            {Object.keys(categoryMap).map(label => (
              <button key={label} className="tab" data-category={categoryMap[label]}>
                {label}
              </button>
            ))}
          </div>

          <div className="grid">
            {works.map((item, index) => {
              const col = (index % 3) + 1;
              return (
                <div key={item.id} className={`card col-${col}`} data-category={item.category}>
                  <div className="card-img" />
                  <div className="card-body">
                    <div className="card-short-content">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.desc}</p>
                      <p className="card-tech">{item.tech}</p>
                    </div>

                    <div className="card-detail">
                      <div className="detail-block">
                        <h4>📝 项目简介</h4>
                        <p>{item.desc}</p>
                      </div>

                      {item.url && (
                        <div className="detail-block">
                          <h4>🔗 作品链接</h4>
                          <p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              {item.url}
                            </a>
                          </p>
                        </div>
                      )}

                      <div className="detail-block">
                        <h4>💻 技术栈</h4>
                        <p>{item.tech}</p>
                      </div>

                      <div className="detail-block">
                        <h4>✅ 主要贡献</h4>
                        <p>{item.extra}</p>
                      </div>
                    </div>

                    <button className="toggle-btn">查看详情</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>{me.contact}</p>
        <p>© 2026 Personal Portfolio</p>
      </footer>
    </main>
  );
}