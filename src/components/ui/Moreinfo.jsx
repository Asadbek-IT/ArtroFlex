import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Articles = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const articlesData = [
    {
      title: "Bo'g'im muammolarida parhez taomlar",
      img: "https://artroflex.ru/wp-content/uploads/2024/11/img-1-3.png",
      link: "#"
    },
    {
      title: "Xondroprotektorlar nima o'zi?",
      img: "https://artroflex.ru/wp-content/uploads/2024/11/img-2-1.png",
      link: "#"
    },
    {
      title: "Nima uchun tizzalar bezovta qiladi?",
      img: "https://artroflex.ru/wp-content/uploads/2024/11/img-3-1.png",
      link: "#"
    }
  ];

  return (
    <>
      <style>{`
        .articles-section {
          width: 100%;
          background-color: #f0f4ed; /* Och sage yashil fon */
          padding: 80px 0;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
        }

        .articles-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .articles-header {
          margin-bottom: 50px;
        }

        .articles-title {
          color: #283618; /* To'q o'rmon yashili */
          font-size: 38px;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 10px 0;
        }

        .articles-subtitle {
          color: #606c38; /* Mox yashili */
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-bottom: 40px;
        }

        .article-card {
          background: #fff;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(96, 108, 56, 0.1);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .article-card:hover {
          transform: translateY(-10px);
          border-color: #606c38;
          box-shadow: 0 15px 40px rgba(96, 108, 56, 0.2);
        }

        .article-img-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .article-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .article-card:hover .article-img {
          transform: scale(1.1);
        }

        .article-footer {
          background-color: #606c38; /* Mox yashili footer */
          padding: 25px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-grow: 1;
        }

        .article-card-title {
          color: #fff;
          font-size: 17px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
          max-width: 85%;
        }

        .arrow-circle {
          width: 32px;
          height: 32px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #606c38;
          font-size: 18px;
          flex-shrink: 0;
          transition: 0.3s;
        }
        
        .article-card:hover .arrow-circle {
          background: #283618;
          color: #fff;
        }

        .btn-wrapper {
          margin-top: 20px;
        }

        .btn-all-articles {
          display: inline-block;
          padding: 14px 40px;
          border: 2px solid #606c38;
          border-radius: 50px;
          color: #606c38;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          transition: 0.3s;
        }

        .btn-all-articles:hover {
          background-color: #606c38;
          color: #fff;
          transform: scale(1.05);
        }

        /* --- Adaptiv dizayn --- */
        @media (max-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
          .articles-title { font-size: 28px; }
          .articles-header { text-align: center; }
          .btn-wrapper { text-align: center; }
        }

        @media (max-width: 430px) {
          .articles-section { padding: 40px 0; }
          .article-card-title { font-size: 16px; }
          .article-img-wrapper { height: 200px; }
        }
      `}</style>

      <section className="articles-section">
        <div className="articles-container">
          <div className="articles-header" data-aos="fade-right">
            <h2 className="articles-title">Bo'g'imlar salomatligi haqida<br/>ko'proq biling</h2>
            <span className="articles-subtitle">Foydali maqolalar to'plami</span>
          </div>

          <div className="articles-grid">
            {articlesData.map((article, index) => (
              <a 
                href={article.link} 
                className="article-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="article-img-wrapper">
                  <img src={article.img} alt={article.title} className="article-img" />
                </div>
                <div className="article-footer">
                  <h3 className="article-card-title">{article.title}</h3>
                  <div className="arrow-circle">→</div>
                </div>
              </a>
            ))}
          </div>

          <div className="btn-wrapper" data-aos="fade-up">
            <a href="#" className="btn-all-articles">Barcha maqolalar</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;