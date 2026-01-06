import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="site-wrapper">
      <style>{`
        /* 1. ОБЩИЕ СТИЛИ */
        html, body {
          margin: 0; padding: 0;
          overflow-x: hidden;
          background-color: #f0f8ff;
          font-family: 'Segoe UI', Tahoma, sans-serif;
          color: #1a4f8b;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

        /* 2. HEADER (ДВУХУРОВНЕВЫЙ) */
        .header-main { padding: 25px 0 15px; }
        
        .header-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        .logo { font-size: 34px; font-weight: 900; font-style: italic; text-decoration: none; }
        .logo .blue { color: #00aeef; }
        .logo .dark { color: #1a4f8b; }

        .btn-buy-header {
          background: #00aeef; color: white; padding: 12px 35px;
          border-radius: 50px; text-decoration: none; font-weight: 700;
          text-transform: uppercase; font-size: 14px;
          box-shadow: 0 4px 15px rgba(0, 174, 239, 0.2);
        }

        /* ТА САМАЯ ПЛАШКА С ТЕКСТОМ ПО ЦЕНТРУ */
        .nav-bar-wrapper { display: flex; justify-content: center; width: 100%; }
        .nav-island {
          background: #ffffff;
          border-radius: 100px;
          padding: 16px 50px;
          display: flex;
          justify-content: center; /* Текст по центру плашки */
          gap: 35px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
        }
        .nav-island a {
          text-decoration: none;
          color: #1a4f8b;
          font-weight: 600;
          font-size: 15px;
          white-space: nowrap;
          transition: color 0.3s;
        }
        .nav-island a:hover { color: #00aeef; }

        /* 3. СЕКЦИЯ С ПАЗЛОМ (БЕЗ НАЛОЖЕНИЯ ТЕКСТА) */
        .puzzle-section { padding: 60px 0; }
        .puzzle-grid {
          display: grid;
          grid-template-columns: 1fr 140px 1fr; /* Фиксированный центр защищает текст */
          align-items: center;
          position: relative;
        }
        .puzzle-card { background: white; padding: 40px; border-radius: 30px; z-index: 1; }
        .card-left { border-top-right-radius: 0; border-bottom-right-radius: 0; }
        .card-right { border-top-left-radius: 0; border-bottom-left-radius: 0; }
        
        .puzzle-center { position: relative; z-index: 5; display: flex; justify-content: center; }
        .puzzle-img { width: 260px; position: absolute; pointer-events: none; }

        /* 4. ГИМНАСТИКА (ИЗ СКРИНШОТА image_5d3841.png) */
        .gym-section { padding: 60px 0; }
        .gym-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px; }
        .gym-item { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .gym-img { width: 100%; height: 200px; object-fit: cover; }
        .gym-label { padding: 15px 20px; font-weight: 800; text-transform: uppercase; color: #1a4f8b; }

        /* 5. СТАТЬИ (ИЗ СКРИНШОТА image_5d4ba7.jpg) */
        .articles-section { padding: 60px 0; background: #fff; }
        .art-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin: 40px 0; }
        .art-card { border-radius: 20px; overflow: hidden; background: #00aeef; text-decoration: none; color: white; transition: 0.3s; }
        .art-card:hover { transform: translateY(-5px); }
        .art-img { height: 180px; width: 100%; object-fit: cover; background: #ddd; }
        .art-footer { padding: 20px; display: flex; justify-content: space-between; align-items: center; }
        .art-title { font-weight: 700; font-size: 15px; margin-right: 10px; }
        .art-arrow { width: 30px; height: 30px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #00aeef; font-weight: bold; }

        /* 6. ФУТЕР (ИЗ СКРИНШОТА image_5dad01.jpg и image_5db8ff.png) */
        .footer-top { background: white; padding: 60px 0 40px; border-top: 1px solid #eee; }
        .bad-warning { text-align: center; color: #00aeef; font-size: 32px; font-weight: 800; text-transform: uppercase; margin-bottom: 40px; }
        .sources-text { font-size: 11px; color: #999; line-height: 1.5; margin-bottom: 40px; }
        
        .footer-logo-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 30px; }
        .footer-dark { background: #1a3a5a; color: #fff; padding: 40px 0; font-size: 12px; }
        .footer-dark-grid { display: flex; justify-content: space-between; align-items: flex-start; }

        /* АДАПТИВНОСТЬ 430px */
        @media (max-width: 1024px) {
          .nav-island { gap: 15px; padding: 15px 25px; width: 95%; overflow-x: auto; justify-content: flex-start; }
          .puzzle-grid { grid-template-columns: 1fr; }
          .puzzle-center { height: 120px; order: 2; }
          .puzzle-img { width: 180px; top: -30px; }
          .card-left { order: 1; border-radius: 30px; margin-bottom: 0; }
          .card-right { order: 3; border-radius: 30px; margin-top: 0; }
          .gym-grid, .art-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* FOOTER */}
      <footer className="footer-top">
      </footer>
      <div className="footer-dark">
        <div className="container footer-dark-grid">
          <div>
            Производитель: Softgel Healthcare Privet Limited, Индия.<br/>
            СОГР № RU.77.99.11.003.E.008.73 .02.16 от 24.02.2016
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <a href="#" style={{color: '#fff'}}>Пользовательское соглашение</a>
            <a href="#" style={{color: '#fff'}}>Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;