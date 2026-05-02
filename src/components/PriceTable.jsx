import React, { useMemo, useEffect } from 'react';
import './PriceTable.css';

const PriceTable = ({ onClose }) => {
  const products = [
    { id: 1, name: 'Бишбармак', weight: '500 г', price: 90 },
    { id: 2, name: 'Бишбармак', weight: '300 г', price: 60 },
    { id: 3, name: 'Лапша яичная тукмас', weight: '200 г', price: 40 },
    { id: 4, name: 'Жайма (Казахский бишбармак)', weight: '200 г', price: 40 },
    { id: 5, name: 'Лагман короткорезанный', weight: '250 г', price: 50 },
    { id: 6, name: 'Лагман в контейнере', weight: '250 г', price: 60 }
  ];

  const formattedDate = useMemo(() => {
    const now = new Date();
    return `Действителен с ${now.toLocaleDateString('ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}`;
  }, []);

  // ИСПРАВЛЕННАЯ ФУНКЦИЯ ПЕЧАТИ
  const handlePrint = () => {
    try {
      const originalTitle = document.title;
      document.title = 'Прайс-лист МакарониЯ';
      
      // Небольшая задержка помогает браузеру "собраться" перед открытием окна
      setTimeout(() => {
        window.print();
        document.title = originalTitle;
      }, 100);
    } catch (error) {
      console.error('Ошибка печати:', error);
      alert('Не удалось открыть окно печати.');
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="price-list">
      <div className="price-header">
        <h1>🍜 ПРАЙС-ЛИСТ</h1>
        <p>ООО «МакарониЯ» — натуральная лапша и макаронные изделия</p>
        <div className="price-date">{formattedDate}</div>
      </div>
      
      <div className="price-content">
        <div className="price-table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Наименование товара</th>
                <th>Вес</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td className="product-name">{product.name}</td>
                  <td className="product-weight">{product.weight}</td>
                  <td className="price">{product.price} ₽</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="price-summary">
          <p><strong>📦 Условия заказа:</strong></p>
          <p>• Минимальная сумма заказа: от 500 рублей</p>
          <p>• Оптовые скидки: при заказе от 10 единиц одного товара — скидка 5%</p>
          <p>• Доставка: по городу — бесплатно при заказе от 1500 рублей</p>
        </div>
        
        <div className="company-info">
          <div className="info-block">
            <h4>📞 Контакты</h4>
            <p>+7 (999) 134-83-20<br/>kunaksell@yandex.ru</p>
          </div>
          <div className="info-block">
            <h4>⏰ Режим работы</h4>
            <p>Пн-Пт: 09:00 - 19:00<br/>Сб: 10:00 - 16:00<br/>Вс: выходной</p>
          </div>
        </div>
      </div>
      
      <div className="price-actions no-print">
        <button 
          className="price-download-btn" 
          onClick={handlePrint}
          type="button"
        >
          🖨️ Сохранить как PDF / Печать
        </button>
        {onClose && (
          <button 
            className="price-close-btn" 
            onClick={onClose}
            type="button"
          >
            ✕ Закрыть
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceTable;

