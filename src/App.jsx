import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import PriceTable from "./components/PriceTable";
import './App.css';

function App() {
  const [showPriceModal, setShowPriceModal] = useState(false);

  // Блокировка прокрутки фона при открытой модалке
  useEffect(() => {
    if (showPriceModal) {
      document.body.classList.add('modal-open');
      // Блокируем прокрутку на body
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
    
    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPriceModal]);

  // Обработчик клавиши Escape
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && showPriceModal) {
        setShowPriceModal(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [showPriceModal]);

  const closeModal = () => {
    setShowPriceModal(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Header onOpenPrice={() => setShowPriceModal(true)} />
        
        <Routes>
          <Route path="/" element={
            <>
              <main className="main-content">
                <Products />
              </main>
              <Footer />
            </>
          } />
        </Routes>
        
        {/* Модальное окно */}
        {showPriceModal && (
          <div className="price-modal-overlay" onClick={closeModal}>
            <div className="price-modal-container" onClick={e => e.stopPropagation()}>
              <button 
                className="price-modal-close" 
                onClick={closeModal}
                aria-label="Закрыть"
              >
                ×
              </button>
              <PriceTable onClose={closeModal} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

