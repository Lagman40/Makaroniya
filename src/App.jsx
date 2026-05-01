import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Добавлен useEffect
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import PriceTable from "./components/PriceTable";
import './App.css'; // Убедитесь, что стили подключены здесь

function App() {
  const [showPriceModal, setShowPriceModal] = useState(false);

  // Блокировка прокрутки фона при открытой модалке
  useEffect(() => {
    if (showPriceModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showPriceModal]);

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header onOpenPrice={() => setShowPriceModal(true)} />
        
        <Routes>
          <Route path="/" element={
            <>
              <main><Products /></main>
              <Footer />
            </>
          } />
        </Routes>
        
        {/* Модальное окно */}
        {showPriceModal && (
          <div className="price-modal" onClick={() => setShowPriceModal(false)}>
            <div className="price-modal-content" onClick={e => e.stopPropagation()}>
              <div className="price-modal-close" onClick={() => setShowPriceModal(false)}>
                ×
              </div>
              <PriceTable />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

