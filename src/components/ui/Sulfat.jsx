import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Action = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        .action-section {
          width: 100%;
          background-color: #f0f4ed; /* Och yashil (Sage) fon */
          padding: 80px 0;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
        }

        .action-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .action-main-title {
          color: #283618; /* To'q o'rmon yashili */
          font-size: clamp(24px, 4vw, 38px);
          font-weight: 800;
          margin-bottom: 50px;
        }

        /* GRID TIZIMI */
        .action-grid-system {
          display: grid;
          grid-template-columns: 1fr 120px 1fr;
          align-items: center;
          position: relative;
        }

        .action-card {
          background: #ffffff;
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(96, 108, 56, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        /* Pazl bilan tutashgan joylar */
        .card-left {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          margin-right: -1px;
        }

        .card-right {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          margin-left: -1px;
        }

        .puzzle-center {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          height: 100%;
        }

        .puzzle-img {
          width: 220px;
          max-width: none;
          height: auto;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          /* Rangli filtr orqali svg-ni biroz yashil tusga keltirish mumkin (ixtiyoriy) */
          /* filter: hue-rotate(100deg); */
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          gap: 10px;
        }

        .moss-txt {
          color: #606c38; /* Mox rangi */
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
        }

        .action-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .action-list li {
          position: relative;
          padding-left: 20px;
          color: #283618;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .action-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #606c38; /* Mox rangi marker uchun */
          font-size: 20px;
          top: -3px;
        }

        /* --- MOBIL MOSLASHUV --- */
        @media (max-width: 1024px) {
          .action-grid-system {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .action-card {
            border-radius: 25px;
            margin: 0;
          }
          .card-left { padding-bottom: 80px; }
          .card-right { padding-top: 80px; }

          .puzzle-center {
            height: 0;
            width: 100%;
          }
          .puzzle-img {
            width: 160px;
            transform: translate(-50%, -50%);
          }
          .action-main-title { text-align: center; }
        }

        @media (max-width: 430px) {
          .action-card { padding: 25px; }
          .moss-txt { font-size: 19px; }
          .action-list li { font-size: 14px; }
        }
      `}</style>

      <section className="action-section">
        <div className="action-container">
          <h2 className="action-main-title" data-aos="fade-up">
            Ikki sulfatning kompleks ta'siri
          </h2>

          <div className="action-grid-system">
            {/* Chap karta */}
            <div className="action-card card-left" data-aos="fade-right">
              <div className="card-header-row">
                <h3 className="moss-txt">Glyukozamin sulfat ko'maklashadi³:</h3>
                <span className="moss-txt">500 mg</span>
              </div>
              <ul className="action-list">
                <li>Bo'g'imlarda qulaylik hisini saqlashga</li>
                <li>Bo'g'imlar harakatchanligini oshirishga</li>
                <li>Tog'ay to'qimasida modda almashinuvini yaxshilashga</li>
              </ul>
            </div>

            {/* Markazdagi pazl rasm */}
            <div className="puzzle-center" data-aos="zoom-in">
              <img 
                src="https://artroflex.ru/wp-content/uploads/2024/11/img-1-1.svg" 
                alt="Bog'liqlik" 
                className="puzzle-img"
              />
            </div>

            {/* O'ng karta */}
            <div className="action-card card-right" data-aos="fade-left">
              <div className="card-header-row">
                <h3 className="moss-txt">Xondroitin sulfat ko'maklashadi³:</h3>
                <span className="moss-txt">400 mg</span>
              </div>
              <ul className="action-list">
                <li>Tog'ay to'qimasi salomatligini qo'llab-quvvatlashga</li>
                <li>Kollagen hosil bo'lishini rag'batlantirishga</li>
                <li>Boylamlarning mustahkamligi va elastikligiga</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Action;