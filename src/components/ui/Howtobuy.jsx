import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Buy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "KOMPLEKS TA'SIR",
      img: "https://artroflex.ru/wp-content/uploads/2024/11/img-1-2.svg",
      text: "Optimal dozadagi glyukozamin sulfat va xondroitin sulfat bo'g'imlar va umurtqa pog'onasi tog'ay to'qimalarini qo'llab-quvvatlash va himoya qilishga yordam beradi³"
    },
    {
      title: "OSON SO'RILUVCHI TARKIB",
      img: "https://artroflex.ru/wp-content/uploads/2024/11/img-2.svg",
      text: "Sulfat shaklidagi glyukozamin organizm tomonidan glyukozamin gidroxloridga qaraganda yaxshiroq so'riladi¹⁻³"
    },
    {
      title: "TABIIY FORMULA",
      img: "https://artroflex.ru/wp-content/uploads/2024/11/img-3.svg",
      text: "Tog'ay to'qimasining tabiiy komponentlarini o'z ichiga oladi³,⁸"
    }
  ];

  const shops = [
    { img: "https://artroflex.ru/wp-content/uploads/2024/11/img-1-3.svg", url: "#" },
    { img: "https://artroflex.ru/wp-content/uploads/2024/11/mask-group-1.png", url: "#" },
    { img: "https://artroflex.ru/wp-content/uploads/2024/11/mask-group-2.png", url: "#" },
    { img: "https://artroflex.ru/wp-content/uploads/2025/01/group-239.png", url: "#" }
  ];

  return (
    <>
      <style>{`
        .buy-section {
          width: 100%;
          /* Ko'k o'rniga yashil gradiyent */
          background: linear-gradient(180deg, #606c38 0%, #283618 100%);
          padding: 80px 0;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
        }

        .buy-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /* Yuqori 3 ta kartochka */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-bottom: 80px;
        }

        .feat-card {
          background: #fff;
          border-radius: 25px;
          padding: 40px 30px;
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }
        
        .feat-card:hover {
          transform: translateY(-5px);
        }

        .feat-title {
          color: #283618; /* To'q yashil */
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 25px;
          line-height: 1.2;
          height: 50px;
          text-transform: uppercase;
        }

        .feat-img {
          height: 80px;
          width: auto;
          margin-bottom: 25px;
        }

        .feat-text {
          color: #444;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* Pastki blok: Qayerdan sotib olish */
        .buy-bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
        }

        .buy-info-side {
          flex: 1;
        }

        .buy-title {
          color: #fff;
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .buy-descr {
          color: #fff;
          font-size: 16px;
          max-width: 400px;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .btn-find-pharmacy {
          background: #ff9d3d; /* Urg'u uchun to'q sariq saqlab qolindi (yashil bilan yaxshi kontrast) */
          color: #fff;
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          transition: 0.3s;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .btn-find-pharmacy:hover { 
          background: #e68a2e; 
          transform: scale(1.05); 
        }

        .shops-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          flex: 1;
        }

        .shop-link {
          background: rgba(255,255,255,0.15);
          border-radius: 15px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          backdrop-filter: blur(5px);
          transition: 0.3s;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .shop-link:hover { 
          background: rgba(255,255,255,0.25);
          border-color: rgba(255,255,255,0.4);
        }

        .shop-img {
          max-width: 100%;
          max-height: 40px;
          object-fit: contain;
          /* Oq logotiplar ko'rinishi uchun kerak bo'lsa filtr */
          filter: brightness(0) invert(1); 
        }

        /* Adaptiv dizayn */
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: 1fr; }
          .buy-bottom-flex { flex-direction: column; align-items: center; text-align: center; }
          .buy-title { font-size: 36px; }
          .buy-descr { margin: 0 auto 30px; }
          .shops-grid { width: 100%; }
        }

        @media (max-width: 430px) {
          .buy-section { padding: 40px 0; }
          .feat-card { padding: 30px 20px; }
          .feat-title { font-size: 17px; height: auto; }
          .shops-grid { grid-template-columns: 1fr; }
          .buy-title { font-size: 32px; }
        }
      `}</style>

      <section className="buy-section">
        <div className="buy-container">
          
          {/* Yuqori xususiyatlar kartalari */}
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className="feat-title">{f.title}</h3>
                <img src={f.img} alt={f.title} className="feat-img" />
                <p className="feat-text">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Pastki "Qayerdan sotib olish" bloki */}
          <div className="buy-bottom-flex">
            <div className="buy-info-side" data-aos="fade-right">
              <h2 className="buy-title">Qayerdan sotib olish mumkin?</h2>
              <p className="buy-descr">
                Siz ArtroFleksni onlayn platformalarda hamda shahringizdagi dorixonalardan xarid qilishingiz mumkin
              </p>
              <button className="btn-find-pharmacy">DORIXONA TOPISH</button>
            </div>

            <div className="shops-grid" data-aos="fade-left">
              {shops.map((s, i) => (
                <a href={s.url} className="shop-link" key={i} target="_blank" rel="noopener noreferrer">
                  <img src={s.img} alt="shop logo" className="shop-img" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Buy;