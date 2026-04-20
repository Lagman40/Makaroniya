import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // Добавить
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import PriceTable from "./components/PriceTable"; // Добавить импорт

function App() {
  const [showPriceModal, setShowPriceModal] = useState(false); // Состояние для модалки

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header onOpenPrice={() => setShowPriceModal(true)} /> {/* Передать функцию */}
        <Routes>
          <Route path="/" element={
            <>
              <main><Products /></main>
              <Footer />
            </>
          } />
        </Routes>
        
        {/* Модальное окно на уровне App */}
        {showPriceModal && (
          <div className="app-price-modal" onClick={() => setShowPriceModal(false)}>
            <div className="app-price-modal-content" onClick={e => e.stopPropagation()}>
              <button className="app-price-modal-close" onClick={() => setShowPriceModal(false)}>
                ×
              </button>
              <PriceTable />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
