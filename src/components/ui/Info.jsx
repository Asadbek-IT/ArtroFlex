import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Afzalliklar matni o'zbek tilida
  const advantages = [
    { text: "BO'G'IMLARDA QULAYLIK HISINI SAQLASHGA YORDAM BERADI", note: "3,7" },
    { text: "BO'G'IMLARNING HARAKATCHANLIGINI SAQLASHGA KO'MAKLASHADI", note: "3,7" },
    { text: "QADOQNING HAMYONBOP NARXI", note: "4" }
  ];

  return (
    <>
      <style>{`
        .info-section-container {
          width: 100%;
          background-color: #f0f4ed; /* Och yashil fon (Sage) */
          padding: 40px 0;
          overflow: hidden;
          box-sizing: border-box;
        }

        .info-card-box {
          background: white;
          max-width: 1100px;
          margin: 0 auto;
          width: calc(100% - 30px); 
          border-radius: 40px;
          /* Soya yashil tusga moslashtirildi */
          box-shadow: 0 10px 40px rgba(96, 108, 56, 0.12);
          display: flex;
          flex-wrap: nowrap;
          padding: 45px 10px;
          box-sizing: border-box;
        }

        .info-cell {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          position: relative;
          box-sizing: border-box;
        }

        /* Vertikal chiziqlar mox rangida */
        .info-cell:not(:last-child) {
          border-right: 1.5px solid rgba(96, 108, 56, 0.2);
        }

        .sphere-bullet {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          /* Mox rangli gradient */
          background: radial-gradient(circle at 35% 35%, #8da24a, #606c38);
          box-shadow: 2px 4px 12px rgba(96, 108, 56, 0.3);
          margin-right: 12px;
        }

        .info-text-style {
          color: #283618; /* To'q o'rmon yashili */
          font-family: 'Segoe UI', Arial, sans-serif;
          font-weight: 700;
          font-size: 13px;
          line-height: 1.25;
          text-transform: uppercase;
        }

        .sup-small {
          font-size: 8px;
          vertical-align: super;
          margin-left: 2px;
          color: #606c38; /* Mox rangi */
        }

        /* --- Mobil moslashuv --- */
        @media (max-width: 900px) {
          .info-card-box {
            flex-direction: column;
            border-radius: 30px;
            padding: 15px 0;
          }

          .info-cell {
            width: 100%;
            justify-content: flex-start;
            padding: 20px 25px;
            border-right: none !important;
          }

          /* Gorizontal chiziq mox rangida */
          .info-cell:not(:last-child) {
            border-bottom: 1.5px solid rgba(96, 108, 56, 0.15);
          }
        }

        @media (max-width: 430px) {
          .info-section-container {
            padding: 20px 0;
          }
          .info-card-box {
            width: calc(100% - 20px);
          }
          .info-text-style {
            font-size: 11.5px;
          }
          .sphere-bullet {
            width: 24px;
            height: 24px;
            min-width: 24px;
          }
        }
      `}</style>

      <div className="info-section-container">
        <div className="info-card-box" data-aos="fade-up">
          {advantages.map((item, index) => (
            <div className="info-cell" key={index}>
              <div className="sphere-bullet"></div>
              <p className="info-text-style">
                {item.text}
                <span className="sup-small">{item.note}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Info;