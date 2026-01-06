import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Usage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        .usage-section {
          width: 100%;
          background-color: #fff;
          padding: 80px 0;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
        }

        .usage-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        /* Chap blok matn bilan */
        .usage-content {
          flex: 1;
          max-width: 500px;
          z-index: 2;
        }

        .usage-title {
          color: #283618; /* To'q o'rmon yashili */
          font-size: 42px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 50px;
          text-transform: uppercase;
        }

        .usage-feature {
          display: flex;
          align-items: center;
          margin-bottom: 35px;
          gap: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
        }

        .feature-text {
          color: #283618;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        .feature-text b {
          display: block;
          color: #606c38; /* Mox yashili */
          font-size: 18px;
          text-transform: uppercase;
        }

        /* Kurs ko'rsatkichi */
        .course-badge {
          display: inline-block;
          background: #ffffff;
          border-radius: 15px;
          padding: 20px 30px;
          box-shadow: 0 10px 30px rgba(96, 108, 56, 0.1);
          margin-top: 20px;
          border: 1px solid #f0f4ed;
        }

        .course-label {
          color: #606c38;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 5px;
          display: block;
        }

        .course-value {
          color: #ff9d3d; /* Urg'u uchun to'q sariq saqlandi (yoki #606c38 qilish mumkin) */
          font-size: 32px;
          font-weight: 800;
        }

        /* O'ng blok qadoq bilan */
        .usage-image-box {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          position: relative;
        }

        .product-open-img {
          max-width: 600px;
          height: auto;
          transform: rotate(-5deg);
          transition: transform 0.5s ease;
        }

        /* --- Mobil moslashuv --- */
        @media (max-width: 1024px) {
          .usage-container {
            flex-direction: column;
            text-align: center;
          }
          .usage-content {
            margin-bottom: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .usage-feature {
            flex-direction: column;
            gap: 10px;
          }
          .product-open-img {
            max-width: 100%;
            transform: none;
          }
        }

        @media (max-width: 430px) {
          .usage-section { padding: 40px 0; }
          .usage-title { font-size: 28px; margin-bottom: 30px; }
          .feature-text { font-size: 14px; }
          .feature-text b { font-size: 16px; }
          .course-value { font-size: 26px; }
        }
      `}</style>

      <section className="usage-section">
        <div className="usage-container">
          
          <div className="usage-content" data-aos="fade-right">
            <h2 className="usage-title">
              ARTROFLEKS<br/>qabul qilish qulay³
            </h2>

            {/* Xususiyat 1 */}
            <div className="usage-feature">
              <img src="https://artroflex.ru/wp-content/uploads/2024/11/icon-1.svg" className="feature-icon" alt="ikonka"/>
              <p className="feature-text">
                Kuniga <b>1 KAPSULA</b>
              </p>
            </div>

            {/* Xususiyat 2 */}
            <div className="usage-feature">
              <img src="https://artroflex.ru/wp-content/uploads/2024/11/icon-2.svg" className="feature-icon" alt="ikonka"/>
              <p className="feature-text">
                <b>YUTISH OSON</b>
                kapsulaning silliq yuzasi va qulay shakli tufayli
              </p>
            </div>

            {/* Kurs */}
            <div className="course-badge">
              <span className="course-label">Xondroprotektorlarning tavsiya etilgan kursi</span>
              <span className="course-value">Yiliga 2-3 marta⁵,⁶</span>
            </div>
          </div>

          <div className="usage-image-box" data-aos="fade-left">
            <img 
              src="https://artroflex.ru/wp-content/uploads/2024/11/upakovka-otkrytaya-3.png" 
              className="product-open-img" 
              alt="Artrofleks qadog'i"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default Usage;