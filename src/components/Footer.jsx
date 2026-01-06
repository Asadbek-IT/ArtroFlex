import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [testStep, setTestStep] = useState(0);
  const [testScore, setTestScore] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Test savollari
  const questions = [
    { q: "Harakatlanganda bo'g'imlarda qirsillash seziladimi?", p: 2 },
    { q: "Ertalab turganda bo'g'imlarda qotib qolish bormi?", p: 3 },
    { q: "Ob-havo o'zgarganda bo'g'imlar simillab og'riydimi?", p: 2 },
    { q: "Zinadan ko'tarilganda tizzalarda og'riq bo'ladimi?", p: 3 }
  ];

  const handleTest = (ans) => {
    if (ans) setTestScore(testScore + questions[testStep].p);
    if (testStep < questions.length - 1) setTestStep(testStep + 1);
    else setTestStep(99); // Yakunlash
  };

  return (
    <div className="site-wrapper">
      <style>{`
        /* 1. UMUMIY STILLAR */
        html, body {
          margin: 0; padding: 0;
          overflow-x: hidden;
          background-color: #f0f4ed; /* Mox-yashil fon */
          font-family: 'Segoe UI', Tahoma, sans-serif;
          color: #283618;
          scroll-behavior: smooth;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

        /* 2. HEADER */
        .header-main { padding: 25px 0 15px; background: white; }
        .header-top-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .logo { font-size: 34px; font-weight: 900; font-style: italic; text-decoration: none; }
        .logo .green { color: #606c38; }
        .logo .dark { color: #283618; }

        .btn-group { display: flex; gap: 10px; }
        .btn-test-trigger {
          background: #ff9d3d; color: white; padding: 12px 25px;
          border-radius: 50px; border: none; font-weight: 700; cursor: pointer;
        }
        .btn-buy-header {
          background: #606c38; color: white; padding: 12px 35px;
          border-radius: 50px; text-decoration: none; font-weight: 700;
          text-transform: uppercase; font-size: 14px; border: none; cursor: pointer;
        }

        /* NAVIGATSIYA PLASHKASI */
        .nav-bar-wrapper { display: flex; justify-content: center; width: 100%; margin-top: -25px; position: relative; z-index: 10; }
        .nav-island {
          background: #ffffff; border-radius: 100px; padding: 16px 50px;
          display: flex; gap: 35px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        .nav-island a { text-decoration: none; color: #283618; font-weight: 600; font-size: 15px; transition: 0.3s; }
        .nav-island a:hover { color: #606c38; }

        /* 3. PUZZLE SECTION */
        .puzzle-section { padding: 80px 0; }
        .puzzle-grid { display: grid; grid-template-columns: 1fr 140px 1fr; align-items: center; }
        .puzzle-card { background: white; padding: 40px; border-radius: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); }
        .card-left { border-top-right-radius: 0; border-bottom-right-radius: 0; text-align: right; }
        .card-right { border-top-left-radius: 0; border-bottom-left-radius: 0; }
        .puzzle-center { position: relative; z-index: 5; display: flex; justify-content: center; }
        .puzzle-img { width: 260px; position: absolute; }

        /* 4. GIMNASTIKA */
        .gym-section { padding: 60px 0; }
        .section-title { text-align: center; margin-bottom: 40px; font-size: 32px; color: #283618; }
        .gym-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .gym-item { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .gym-img { width: 100%; height: 220px; background: #e0eadd; }
        .gym-label { padding: 15px 20px; font-weight: 800; text-transform: uppercase; font-size: 14px; }

        /* 5. MAQOLALAR */
        .articles-section { padding: 80px 0; background: #fff; }
        .art-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
        .art-card { border-radius: 20px; overflow: hidden; background: #606c38; text-decoration: none; color: white; display: block; }
        .art-footer { padding: 20px; display: flex; justify-content: space-between; align-items: center; }
        .art-arrow { width: 30px; height: 30px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #606c38; }

        /* 6. FOOTER */
        .footer-top { background: white; padding: 60px 0 40px; border-top: 1px solid #eee; }
        .bad-warning { text-align: center; color: #606c38; font-size: 28px; font-weight: 800; margin-bottom: 40px; }
        .footer-dark { background: #283618; color: #fff; padding: 40px 0; font-size: 12px; }

        /* MODAL */
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(40, 54, 24, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;
        }
        .modal-content { background: white; padding: 35px; border-radius: 25px; width: 90%; max-width: 400px; text-align: center; }
        .form-input { width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ddd; border-radius: 10px; }

        @media (max-width: 1024px) {
          .nav-island { display: none; }
          .puzzle-grid, .gym-grid, .art-grid { grid-template-columns: 1fr; }
          .puzzle-center { height: 100px; }
        }
      `}</style>


      {/* FOOTER */}
      <footer className="footer-top">
        <div className="container">
          <div className="bad-warning">BIOLOGIK FAOL QO'SHIMCHA. DORI VOSITASI EMAS.</div>
        </div>
      </footer>

      <div className="footer-dark">
        <div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>Ishlab chiqaruvchi: Softgel Healthcare, Hindiston.<br/>SOGR № RU.77.99.11.003.E.00873.02.16</div>
          <div style={{display: 'flex', gap: '20px'}}>
            <a href="#" style={{color: '#fff'}}>Foydalanish shartlari</a>
            <a href="#" style={{color: '#fff'}}>Maxfiylik siyosati</a>
          </div>
        </div>
      </div>

      {/* TEST MODAL */}
      {isTestOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {testStep !== 99 ? (
              <>
                <h3>Savol {testStep + 1}/4</h3>
                <p style={{fontSize: '18px', margin: '20px 0'}}>{questions[testStep].q}</p>
                <div style={{display: 'flex', gap: '10px'}}>
                  <button className="btn-buy-header" style={{flex: 1}} onClick={() => handleTest(true)}>HA</button>
                  <button className="btn-buy-header" style={{flex: 1, background: '#ccc'}} onClick={() => handleTest(false)}>YO'Q</button>
                </div>
              </>
            ) : (
              <>
                <h3>Test Natijasi</h3>
                <p style={{margin: '20px 0'}}>{testScore > 5 ? "Sizga bo'g'imlarni faol qo'llab-quvvatlash tavsiya etiladi." : "Sizda holat yaxshi, profilaktika yetarli."}</p>
                <button className="btn-buy-header" onClick={() => setIsTestOpen(false)}>Yopish</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* BUY MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Buyurtma berish</h3>
            <input type="email" placeholder="Gmail manzilingiz" className="form-input" />
            <input type="tel" placeholder="+998 __ ___ __ __" className="form-input" />
            <select className="form-input">
              <option>Visa / MasterCard</option>
              <option>Humo / UzCard</option>
            </select>
            <button className="btn-buy-header" style={{width: '100%', marginTop: '10px'}} onClick={() => setIsModalOpen(false)}>TASDIQLASH</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;