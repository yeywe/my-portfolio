'use client';

import { works, profile, experiences, skills } from './data';
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
        <div className="container">
          <div className="hero-content">
    <div className="hero-intro">
      {/* 标题组：Hi,我是 + 前端开发者 两行 */}
      <div className="hero-title-group">
        <span className="hero-greeting">Hi,我是</span>
        <h1 className="hero-title">{me.name}</h1>
      </div>
      <p className="hero-role">{me.job}</p>
       {profile.intro.map((item, i) => (
          <p key={i} className="hero-skills">{item}</p>
        ))}
      {/* <p className="hero-skills">{me.skills}</p> */}

      <button onClick={() => {
    const target = document.getElementById('works');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }} className="hero-btn">查看作品集</button>
    </div>
  </div>
        </div>
      </section>

      {/* 关于我 */}
      <section className="about">
        <h2 className="section-title">About Me</h2>
        <div className="container about-box">
          <div className="avatar" />
          <div className="about-info">
            <h3>{me.name}</h3>
            <div style={{ marginTop: '14px', lineHeight: '1.8' }}>
            <p><strong>年龄：</strong>{me.age}</p>
            <p><strong>微信：</strong>{me.contact.wechat}</p>
            <p><strong>手机：</strong>{me.contact.phone}</p>
            <p><strong>邮箱：</strong>{me.contact.email}</p>

        {/* 微信二维码 */}
      </div>
          </div>
            <img
              src={me.contact.qrcode}
              alt="微信二维码"
              className='wechat-img'
             
            />
        </div>
      </section>

      {/* 技术技能栈 */}
<section className="skill-section">
  <h2 className="skill-title">技术技能栈</h2>
  <p className="skill-subtitle">4 年前端开发经验 | 专注管理系统与小程序</p>

  <div className="skill-grid">
    <div className="skill-card">
      <h3>前端基础</h3>
      <div className="skill-tags">
        {skills.frontend.map((item, i) => (
          <span key={i} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>

    <div className="skill-card">
      <h3>框架 / 库</h3>
      <div className="skill-tags">
        {skills.framework.map((item, i) => (
          <span key={i} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>

    <div className="skill-card">
      <h3>工具 / 工程化</h3>
      <div className="skill-tags">
        {skills.tools.map((item, i) => (
          <span key={i} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>

    <div className="skill-card">
      <h3>业务方向</h3>
      <div className="skill-tags">
        {skills.business.map((item, i) => (
          <span key={i} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* 工作经历 */}
<section id="experience" className="exp-section">
  <h2 className="exp-title">工作经历</h2>
  <p className="exp-subtitle">我的职业成长历程</p>

  <div>
    {(experiences || []).map((exp, idx) => (
      <div key={idx} className="exp-item">
        <div className="exp-header">
          <h3 className="exp-position">{exp.position}</h3>
          <span className="exp-duration">{exp.duration}</span>
        </div>
        <div className="exp-company">{exp.company}</div>
        <ul className="exp-desc">
          {(exp.desc || []).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
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
        <p>{me.contact.email}</p>
        <p>© 2026 Personal Portfolio</p>
      </footer>
    </main>
  );
}