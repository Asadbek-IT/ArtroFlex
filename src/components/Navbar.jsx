import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    // AOS animatsiyasini ishga tushirish
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Menyu bandlari o'zbek tilida
  const menuItems = [
    "Afzalliklar", "Tarkibi", "Qanday qabul qilinadi", 
    "Bo'g'imlar uchun gimnastika", "Foydali maqolalar", "Test"
  ];

  return (
    <>
      <style>{`
        .nav-wrapper {
          width: 100%;
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          /* Mox va yashil tusdagi gradient fon */
          background: linear-gradient(180deg, #f0f4ed 0%, #ffffff 100%);
          padding-bottom: 40px;
        }

        .container-top {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 20px;
        }

        .logo {
          font-style: italic;
          font-weight: 900;
          font-size: 38px;
          letter-spacing: -2px;
          display: flex;
          cursor: default;
        }

        /* Logotip ranglari: Mox va To'q yashil */
        .logo-green-moss { color: #606c38; }
        .logo-dark-forest { color: #283618; margin-left: 2px; }

        .btn-buy {
          background-color: #606c38; /* Mox rangli tugma */
          color: white;
          border: none;
          padding: 14px 45px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 15px rgba(96, 108, 56, 0.2);
        }

        .btn-buy:hover {
          background-color: #4a542b; /* Biroz to'qroq mox rangi */
        }

        .btn-buy:active {
          transform: scale(0.96);
        }

        .nav-bar-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .nav-bar {
          background: white;
          border-radius: 50px;
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 30px rgba(40, 54, 24, 0.08);
          border: 1px solid rgba(96, 108, 56, 0.1);
        }

        .nav-list {
          list-style: none;
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: #283618; /* To'q o'rmon rangi */
          font-weight: 600;
          font-size: 15px;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #606c38; /* Mox rangi xoverda */
        }

        @media (max-width: 900px) {
          .nav-list { flex-wrap: wrap; justify-content: center; gap: 15px; }
          .nav-bar { border-radius: 20px; }
        }
      `}</style>

      <div className="nav-wrapper">
        {/* Yuqori qism */}
        <div className="container-top" data-aos="fade-down">
          <div className="logo">
            <span className="logo-green-moss">Artro</span>
            <span className="logo-dark-forest">Fleks</span>
          </div>
          
          <button className="btn-buy">
            SOTIB OLISH
          </button>
        </div>

        {/* Navigatsiya paneli */}
        <div className="nav-bar-container" data-aos="fade-up" data-aos-delay="200">
          <nav className="nav-bar">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="nav-link">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;