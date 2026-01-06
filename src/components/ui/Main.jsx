import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 550px;
          background: #ffffff;
          overflow: hidden;
          display: flex;
          align-items: center;
          font-family: 'Segoe UI', Roboto, sans-serif;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 10;
        }

        .hero-text-content {
          max-width: 550px;
          padding-top: 20px;
        }

        .hero-logo-img {
          width: 320px;
          height: auto;
          margin-bottom: 25px;
        }

        .hero-subtitle {
          color: #283618; /* To'q o'rmon yashili */
          font-size: 38px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .hero-description {
          color: #606c38; /* Mox yashili */
          font-size: 15px;
          font-weight: 500;
          line-height: 1.4;
          margin-bottom: 40px;
          max-width: 420px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }

        .btn-buy {
          background-color: #606c38; /* Mox rangi */
          color: #fff;
          border: none;
          padding: 14px 35px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0 4px 15px rgba(96, 108, 56, 0.2);
        }

        .btn-buy:hover { 
          background-color: #4a542b; 
          transform: translateY(-2px); 
        }

        .btn-outline {
          background: transparent;
          color: #606c38;
          border: 1px solid #606c38;
          padding: 14px 25px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          text-transform: uppercase;
          transition: 0.3s ease;
        }

        .btn-outline:hover { 
          background: #f0f4ed; 
        }

        .hero-image-wrapper {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          padding-bottom: 20px;
        }

        .main-hero-img {
          max-width: 800px;
          height: auto;
          margin-right: -80px;
          display: block;
        }

        /* Mox rangli pastki chiziq */
        .bottom-border-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: #606c38;
          z-index: 20;
        }

        @media (max-width: 1024px) {
          .hero-container { flex-direction: column; text-align: center; padding-top: 40px; }
          .hero-text-content { display: flex; flex-direction: column; align-items: center; }
          .main-hero-img { margin-right: 0; max-width: 100%; margin-top: 20px; }
          .hero-buttons { justify-content: center; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-container">
          
          {/* Chap blok */}
          <div className="hero-text-content" data-aos="fade-right">
            <img 
              src="https://artroflex.ru/wp-content/uploads/2024/11/logo.png" 
              alt="ArtroFleks" 
              className="hero-logo-img"
            />
            <h2 className="hero-subtitle">
              bo'g'imlar va umurtqa pog'onasi salomatligini saqlash uchun
            </h2>
            <p className="hero-description">
              Oson so'riluvchi sulfat shaklidagi ikkita xondroprotektor ¹⁻³
            </p>
            <div className="hero-buttons">
              <button className="btn-buy">SOTIB OLISH</button>
              <button className="btn-outline">YO'RIQNOMA</button>
            </div>
          </div>

          {/* Rasmli o'ng blok */}
          <div className="hero-image-wrapper" data-aos="fade-left">
            <img 
              src="https://artroflex.ru/wp-content/uploads/2024/11/img-1.png" 
              alt="ArtroFleks qadoqlanishi" 
              className="main-hero-img"
            />
          </div>

        </div>

        {/* Yashil chiziq */}
        <div className="bottom-border-line"></div>
      </section>
    </>
  );
};

export default Main;