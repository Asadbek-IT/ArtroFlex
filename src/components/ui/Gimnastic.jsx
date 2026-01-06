import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gym = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const exercises = [
    { title: "TIRSAL BO'G'IMI", img: "https://artroflex.ru/wp-content/uploads/2024/11/img-3.png" },
    { title: "CHANOQ-SON BO'G'IMI", img: "https://artroflex.ru/wp-content/uploads/2024/11/img-1-2.png" },
    { title: "TIZZA BO'G'IMI", img: "https://artroflex.ru/wp-content/uploads/2024/11/img-2.png" }
  ];

  return (
    <>
      <style>{`
        .gym-section {
          width: 100%;
          background-color: #f0f4ed; /* Och sage yashil fon */
          padding: 80px 0;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
        }

        .gym-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .gym-header {
          margin-bottom: 40px;
        }

        .gym-title {
          color: #283618; /* To'q o'rmon yashili */
          font-size: 38px;
          font-weight: 800;
          margin: 0 0 10px 0;
        }

        .gym-subtitle {
          color: #606c38; /* Mox yashili */
          font-size: 16px;
          opacity: 0.9;
          max-width: 550px;
          line-height: 1.4;
        }

        .gym-grid {
          display: flex;
          gap: 20px;
          justify-content: space-between;
        }

        .gym-card {
          flex: 1;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(96, 108, 56, 0.1);
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          aspect-ratio: 4 / 3;
          display: flex;
          flex-direction: column;
        }

        .gym-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(96, 108, 56, 0.2);
        }

        .gym-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.5s ease;
        }
        
        .gym-card:hover .gym-card-img {
          transform: scale(1.05);
        }

        .gym-card-title {
          position: absolute;
          bottom: 25px;
          left: 20px;
          color: #283618; /* To'q yashil */
          font-size: 20px;
          font-weight: 800;
          max-width: 180px;
          line-height: 1.1;
          z-index: 2;
          text-transform: uppercase;
        }

        /* --- Mobil moslashuv --- */
        @media (max-width: 900px) {
          .gym-grid {
            flex-wrap: wrap;
            justify-content: center;
          }
          .gym-card {
            min-width: 280px;
            flex: none;
          }
          .gym-title { font-size: 28px; }
        }

        @media (max-width: 430px) {
          .gym-section { padding: 40px 0; }
          .gym-container { padding: 0 15px; }
          .gym-card {
            width: 100%;
            min-width: auto;
          }
          .gym-card-title { font-size: 18px; }
          .gym-subtitle { font-size: 14px; }
        }
      `}</style>

      <section className="gym-section">
        <div className="gym-container">
          <div className="gym-header" data-aos="fade-right">
            <h2 className="gym-title">Bo'g'imlar uchun gimnastika</h2>
            <p className="gym-subtitle">
              Tayanch-harakat tizimi kasalliklari rivojlanish xavfini kamaytirishga yordam beradi
            </p>
          </div>

          <div className="gym-grid">
            {exercises.map((item, index) => (
              <div 
                className="gym-card" 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 150}
              >
                <img src={item.img} alt={item.title} className="gym-card-img" />
                <h3 className="gym-card-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gym;