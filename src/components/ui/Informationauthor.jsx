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
        /* 1. ASOSIY STILLAR */
        html, body {
          margin: 0; padding: 0;
          width: 100%; overflow-x: hidden;
          background-color: #f0f4ed; /* Och yashil fon */
          font-family: 'Segoe UI', Tahoma, sans-serif;
          color: #283618; /* To'q o'rmon yashili */
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

        /* 2. HEADER */
        .header-main { padding: 25px 0 10px; }
        .header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .logo { font-size: 36px; font-weight: 900; font-style: italic; text-decoration: none; display: flex; }
        .logo .blue { color: #606c38; } /* Mox yashili */
        .logo .dark { color: #283618; } /* To'q yashil */
        
        .btn-buy-top {
          background: #ff9d3d; /* Urg'u beruvchi to'q sariq */
          color: white; padding: 12px 35px;
          border-radius: 50px; text-decoration: none; font-weight: 700;
          text-transform: uppercase; font-size: 14px;
          transition: 0.3s;
        }
        .btn-buy-top:hover { background: #e68a2e; }

        /* NAVIGATSIYA PLASHKASI */
        .nav-island-container { display: flex; justify-content: center; width: 100%; }
        .nav-island {
          background: #ffffff; border-radius: 100px; padding: 18px 50px;
          box-shadow: 0 5px 20px rgba(40, 54, 24, 0.08);
          display: flex; gap: 40px; justify-content: center;
        }
        .nav-island a { text-decoration: none; color: #283618; font-weight: 600; font-size: 15px; transition: 0.3s; }
        .nav-island a:hover { color: #606c38; }

        /* 3. PROMO STRIP */
        .promo-strip {
          background: #ffffff; border-radius: 20px; padding: 30px;
          display: flex; justify-content: space-between; margin: 40px 0;
          box-shadow: 0 10px 30px rgba(96, 108, 56, 0.1);
        }
        .promo-item { display: flex; align-items: center; gap: 15px; flex: 1; position: relative; padding: 0 20px; }
        .promo-item:not(:last-child)::after {
          content: ''; position: absolute; right: 0; top: 10%; height: 80%; width: 1px; background: #606c38; opacity: 0.2;
        }
        .promo-circle { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #606c38, #283618); flex-shrink: 0; }
        .promo-text { font-size: 13px; font-weight: 800; text-transform: uppercase; color: #283618; }

        /* 4. PUZZLE SECTION */
        .puzzle-section { padding: 60px 0; }
        .puzzle-grid { display: grid; grid-template-columns: 1fr 140px 1fr; align-items: center; position: relative; }
        .puzzle-card { background: white; padding: 40px; border-radius: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); z-index: 1; }
        .card-left { border-top-right-radius: 0; border-bottom-right-radius: 0; }
        .card-right { border-top-left-radius: 0; border-bottom-left-radius: 0; }
        .puzzle-center { position: relative; z-index: 5; display: flex; justify-content: center; }
        .puzzle-img { width: 260px; position: absolute; }

        .card-title { color: #ff9d3d; font-size: 22px; font-weight: 700; margin-bottom: 20px; display: flex; justify-content: space-between; }
        .puzzle-card ul { list-style: none; padding: 0; }
        .puzzle-card li { margin-bottom: 12px; padding-left: 20px; position: relative; font-weight: 600; font-size: 15px; color: #283618; }
        .puzzle-card li::before { content: '•'; position: absolute; left: 0; color: #606c38; font-size: 24px; top: -5px; }

        /* 5. FOOTER */
        .footer { background: #fff; padding: 60px 0; border-top: 1px solid #eee; }
        .bad-label { text-align: center; color: #606c38; font-size: 32px; font-weight: 800; text-transform: uppercase; margin-bottom: 40px; }
        .sources { font-size: 11px; color: #999; line-height: 1.5; margin-bottom: 40px; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; }
        .footer-btns { display: flex; gap: 15px; }
        .btn-outline { border: 1px solid #606c38; color: #606c38; padding: 10px 25px; border-radius: 50px; text-decoration: none; font-weight: 700; text-transform: uppercase; font-size: 13px; transition: 0.3s; }
        .btn-outline:hover { background: #606c38; color: #fff; }

        /* ADAPTIV */
        @media (max-width: 1024px) {
          .nav-island { gap: 15px; padding: 15px 20px; width: 90%; overflow-x: auto; justify-content: flex-start; }
          .puzzle-grid { grid-template-columns: 1fr; gap: 0; }
          .puzzle-center { height: 100px; order: 2; }
          .puzzle-img { width: 180px; top: -40px; }
          .card-left { order: 1; border-radius: 30px; }
          .card-right { order: 3; border-radius: 30px; }
          .promo-strip { flex-direction: column; gap: 20px; }
          .promo-item::after { display: none; }
          .footer-bottom { flex-direction: column; gap: 30px; }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="bad-label">BIOLOGIK FAOL QO'SHIMCHA. DORI VOSITASI EMAS.</div>
          
          <div className="sources">
            <strong>Ma'lumot manbalari</strong><br/><br/>
            1. Aghazadeh-Habashi A., Jamali F. The glucosamine controversy... 2011<br/>
            2. Setnikar I., Rovati L.C. Absorption, distribution, metabolism and excretion of glucosamine sulfate... 2001<br/>
            3. Artroflex biologik faol qo'shimchasini qo'llash bo'yicha yo'riqnoma-ilovasi, № RU.77.99.11.003.E.00873.02.16, 24.02.2016<br/>
            4. Faol komponentlar tarkibiga ega vositalar bilan taqqoslaganda apteka.ru saytidagi narxlar tahlili asosida... (kirish sanasi 21.01.2025)<br/>
            5. USHKALOVA E.A., ZRYANOV S.K. Osteoartritni davolashda sekin ta'sir qiluvchi simptomatik dori vositalari... 2020
          </div>

          <div className="footer-bottom">
            <a href="/" className="logo">
              <span className="blue">Artro</span><span className="dark">Fleks</span>
            </a>
            <div className="footer-btns">
              <a href="#buy" className="btn-buy-top" style={{fontSize: '12px'}}>XARID QILISH</a>
              <a href="#" className="btn-outline">YO'RIQNOMA-ILOVA</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;