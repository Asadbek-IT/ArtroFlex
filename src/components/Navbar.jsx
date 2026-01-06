import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testQuestions = [
    { q: "Harakatlanganda bo'g'imlarda qirsillash seziladimi?", points: 2 },
    { q: "Ertalab turganingizda bo'g'imlarda qotib qolish bormi?", points: 3 },
    { q: "Ob-havo o'zgarganda bo'g'imlar simillab og'riydimi?", points: 2 },
    { q: "Jismoniy yuklamadan keyin shishlar paydo bo'ladimi?", points: 3 }
  ];

  const handleTestNext = (hasIssue) => {
    if (hasIssue) setScore(score + testQuestions[step].points);
    if (step < testQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(99); // Test tugadi
    }
  };

  const getTestResult = () => {
    if (score <= 2) return "Sizda bo'g'imlar holati yaxshi, profilaktika yetarli.";
    if (score <= 5) return "E'tiborli bo'ling, bo'g'imlaringizga qo'shimcha oziqa kerak.";
    return "Sizga bo'g'imlarni faol tiklash tavsiya etiladi.";
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .nav-wrapper {
          width: 100%;
          font-family: 'Segoe UI', sans-serif;
          background: #f0f4ed;
          position: sticky; top: 0; z-index: 100;
          padding: 15px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .container-main {
          max-width: 1200px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center; padding: 0 20px;
        }

        .logo { font-style: italic; font-weight: 900; font-size: 32px; text-decoration: none; }
        .logo-green { color: #606c38; }
        .logo-dark { color: #283618; }

        .btn-test {
          background: #ff9d3d; color: white; border: none; padding: 10px 20px;
          border-radius: 50px; font-weight: 700; cursor: pointer; margin-right: 10px;
        }

        .btn-buy {
          background: #606c38; color: white; border: none; padding: 10px 25px;
          border-radius: 50px; font-weight: 700; cursor: pointer;
        }

        .nav-bar-links {
          background: white; border-radius: 50px; padding: 10px 40px;
          margin: 15px auto 0; max-width: 700px; display: flex; justify-content: space-around;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .nav-link { text-decoration: none; color: #283618; font-weight: 600; font-size: 14px; }

        /* TEST MODAL */
        .test-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(40, 54, 24, 0.8); display: flex; justify-content: center;
          align-items: center; z-index: 1002; backdrop-filter: blur(5px);
        }

        .test-card {
          background: white; padding: 30px; border-radius: 20px; width: 350px; text-align: center;
        }

        .test-btn-group { display: flex; gap: 10px; margin-top: 20px; }
        .btn-yes { flex: 1; background: #606c38; color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer; }
        .btn-no { flex: 1; background: #ddd; color: #333; border: none; padding: 10px; border-radius: 8px; cursor: pointer; }
      `}</style>

      <div className="nav-wrapper">
        <div className="container-main">
          <a href="/" className="logo">
            <span className="logo-green">Artro</span><span className="logo-dark">Fleks</span>
          </a>
          <div>
            <button className="btn-test" onClick={() => {setIsTestOpen(true); setStep(0); setScore(0);}}>
              SOG'LIQ TESTI
            </button>
            <button className="btn-buy" onClick={() => setIsModalOpen(true)}>
              SOTIB OLISH
            </button>
          </div>
        </div>

        <nav className="nav-bar-links" data-aos="fade-up">
          <a href="#features" className="nav-link" onClick={(e) => scrollToSection(e, 'features')}>Afzalliklar</a>
          <a href="#gym" className="nav-link" onClick={(e) => scrollToSection(e, 'gym')}>Gimnastika</a>
          <a href="#articles" className="nav-link" onClick={(e) => scrollToSection(e, 'articles')}>Maqolalar</a>
          <a href="#buy" className="nav-link" onClick={(e) => scrollToSection(e, 'buy')}>Do'konlar</a>
        </nav>
      </div>

      {/* TEST MODAL */}
      {isTestOpen && (
        <div className="test-overlay">
          <div className="test-card">
            {step !== 99 ? (
              <>
                <h3 style={{color: '#283618'}}>Savol {step + 1}/4</h3>
                <p style={{fontSize: '18px', margin: '20px 0'}}>{testQuestions[step].q}</p>
                <div className="test-btn-group">
                  <button className="btn-yes" onClick={() => handleTestNext(true)}>Ha</button>
                  <button className="btn-no" onClick={() => handleTestNext(false)}>Yo'q</button>
                </div>
              </>
            ) : (
              <>
                <h3 style={{color: '#283618'}}>Natija:</h3>
                <p style={{fontSize: '16px', margin: '20px 0'}}>{getTestResult()}</p>
                <button className="btn-buy" style={{width: '100%'}} onClick={() => setIsTestOpen(false)}>Yopish</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* BUY MODAL */}
      {isModalOpen && (
        <div className="test-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="test-card" onClick={e => e.stopPropagation()}>
            <h3 style={{color: '#283618'}}>Buyurtma berish</h3>
            <input type="email" placeholder="Gmail manzilingiz" style={{width:'100%', padding:'12px', margin:'10px 0', borderRadius:'8px', border:'1px solid #ddd'}} />
            <input type="tel" placeholder="+998 __ ___ __ __" style={{width:'100%', padding:'12px', margin:'10px 0', borderRadius:'8px', border:'1px solid #ddd'}} />
            <button className="btn-buy" style={{width: '100%', marginTop: '10px'}} onClick={() => setIsModalOpen(false)}>TASDIQLASH</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;