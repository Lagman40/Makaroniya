import React, { useState, useEffect } from 'react';
import mask1 from '../assets/images/mask1.png'; 
import mask2 from '../assets/images/mask2.png';
import mask3 from '../assets/images/mask3.png';
import mask4 from '../assets/images/mask4.png';
import mask5 from '../assets/images/mask5.png';
import mask6 from '../assets/images/mask6.png';
import made from '../assets/images/made.png';
import PriceTable from './PriceTable';
import './Products.css';

const products = [
  { id: 1, title: "Лагман в контейнере 250г", description: "Изготовлена из хлебопекарной муки высшего сорта", image: mask1 },
  { id: 2, title: "Лагман 250г", description: "Традиционный вкус, знакомый с детства", image: mask2 },
  { id: 3, title: "Лапша яичная тукмас 200г", description: "Замечательная тонкая короткорезанная лапша", image: mask3 },
  { id: 4, title: "Бишбармак 300г", description: "Башкирский бишбармак 1см на 1см", image: mask4 },
  { id: 5, title: "Бишбармак 500г", description: "Лапша для бишбармака", image: mask5 },
  { id: 6, title: "Жайма 200г", description: "лапша для жаймы", image: mask6 },
];

const Products = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showPriceModal, setShowPriceModal] = useState(false);

  // Блокировка прокрутки при открытом модальном окне
  useEffect(() => {
    if (showPriceModal) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [showPriceModal]);

  // Обработчик клавиши Escape
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        if (showPriceModal) {
          setShowPriceModal(false);
        }
        if (selectedImg) {
          setSelectedImg(null);
        }
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showPriceModal, selectedImg]);

  const closePriceModal = () => {
    setShowPriceModal(false);
  };

  const styles = {
    productCard: {
      background: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      cursor: 'zoom-in',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    productImage: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      cursor: 'zoom-out',
    },
    modalImage: {
      maxWidth: '90%',
      maxHeight: '90%',
      borderRadius: '8px',
      objectFit: 'contain',
    },
  };

  return (
    <section className="products-section">
      <h2 className="products-title">
        Наша продукция и производство
      </h2>
      
      <div className="products-container">
        
        <div className="products-left-column">
          <div className="products-grid">
            {products.map(item => (
              <div 
                key={item.id} 
                className="product-card"
                style={styles.productCard}
                onClick={() => setSelectedImg(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={styles.productImage} 
                  loading="lazy"
                />
                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-block">
            <h3 className="about-title">О нас</h3>
            
            <div className="about-content">
              <p>
                <strong>ООО «МакарониЯ»</strong> — это семейное предприятие, основанное в 2012 году. 
                Мы специализируемся на производстве натуральной лапши и макаронных изделий высшего качества.
              </p>
              <p>
                Наша миссия — сохранять традиционные рецепты и дарить нашим клиентам вкус домашней кухни. 
                Мы используем только отборную муку высшего сорта и натуральные ингредиенты без консервантов.
              </p>
              <p>
                Каждый этап производства проходит строгий контроль качества. Мы гордимся тем, 
                что наша продукция пользуется доверием у тысяч семей по всей России.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">лет на рынке</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products-right-column">
          
          <div className="production-block">
            <h3 className="production-title">Наше производство</h3>
            <img 
              src={made} 
              alt="Наш цех" 
              className="production-image"
              loading="lazy"
            />
            <div className="production-text">
              <p>Мы используем только современное оборудование и традиционные рецепты.</p>
              <ul>
                <li>Мука высшего сорта</li>
                <li>Контроль качества на каждом этапе</li>
                <li>Соблюдение норм ХАССП</li>
              </ul>
            </div>
          </div>

          <div className="contacts-block">
            <h3 className="contacts-title">Контакты</h3>
            
            <div className="contacts-content">
              <a 
                href="https://max.ru/join/S7GgSbBXVI2_IbpmQhEgXKf9TRAZaSCoYVQswYbbyOQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                <span className="contact-icon">💬</span>
                Написать в MAX
              </a>
              
              <div className="price-button-wrapper">
                <button 
                  onClick={() => setShowPriceModal(true)}
                  className="price-button"
                  aria-label="Открыть прайс-лист"
                >
                  📄 Открыть прайс-лист
                </button>
              </div>
            </div>
            
            <div className="contact-details">
              <p>
                <strong>📍 Адрес:</strong> г. Сибай, п-т Горняков 6/3-6<br/>
                <strong>📞 Телефон:</strong> +7 (999) 134-83-20<br/>
                <strong>✉️ Email:</strong> kunaksell@yandex.ru
              </p>
            </div>
          </div>

          <div className="slogan-block">
            <div className="slogan-text">
              очень<br/>
              вкусно
            </div>
          </div>

        </div>
      </div>

      {/* Модальное окно для увеличенного фото */}
      {selectedImg && (
        <div onClick={() => setSelectedImg(null)} style={styles.modal}>
          <img 
            src={selectedImg} 
            style={styles.modalImage} 
            alt="Увеличенное фото" 
          />
          <button 
            className="modal-close-btn"
            onClick={() => setSelectedImg(null)}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
      )}

      {/* Модальное окно с прайс-листом - ИСПРАВЛЕНО */}
      {showPriceModal && (
        <div className="price-modal-overlay" onClick={closePriceModal}>
          <div 
            className="price-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="price-modal-close" 
              onClick={closePriceModal}
              aria-label="Закрыть прайс-лист"
            >
              ×
            </button>
            <PriceTable onClose={closePriceModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;