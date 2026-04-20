import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const styles = {
    footer: {
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '50px 20px 30px',
      marginTop: '60px'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px'
    },
    section: {
      textAlign: 'left'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#e67e22'
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '20px',
      position: 'relative',
      paddingBottom: '10px',
      borderBottom: '2px solid #e67e22',
      display: 'inline-block'
    },
    text: {
      lineHeight: '1.8',
      fontSize: '14px',
      color: '#bdc3c7',
      marginBottom: '8px'
    },
    link: {
      color: '#bdc3c7',
      textDecoration: 'none',
      fontSize: '14px',
      lineHeight: '2',
      transition: 'color 0.3s ease',
      display: 'inline-block',
      cursor: 'pointer'
    },
    copyright: {
      textAlign: 'center',
      paddingTop: '30px',
      marginTop: '40px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      fontSize: '12px',
      color: '#95a5a6'
    },
    developerInfo: {
      marginTop: '15px',
      fontSize: '11px',
      color: '#7f8c8d',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '15px',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap'
    },
    workingHours: {
      marginTop: '10px',
      fontSize: '13px',
      color: '#bdc3c7'
    }
  };

  // Простой обработчик клика по ссылкам
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer"> 
  <div className="footer-container">
        
        <div style={styles.section}>
          <div style={styles.logo}>
            ООО «МакарониЯ»
          </div>
          <p style={styles.text}>
            Производство натуральной лапши и макаронных изделий высшего качества с 2012 года.
          </p>
          <p style={styles.text}>
            Мы сохраняем традиционные рецепты и дарим вкус домашней кухни.
          </p>
        </div>
        
        <div style={styles.section}>
          <h4 style={styles.title}>Навигация</h4>
          <div>
            <a 
              href="#home" 
              style={styles.link} 
              className="footer-link"
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Главная
            </a><br/>
            <a 
              href="#products" 
              style={styles.link} 
              className="footer-link"
              onClick={(e) => handleLinkClick(e, 'products')}
            >
              Продукция
            </a><br/>
            <a 
              href="#about" 
              style={styles.link} 
              className="footer-link"
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              О производстве
            </a><br/>
            <a 
              href="#contacts" 
              style={styles.link} 
              className="footer-link"
              onClick={(e) => handleLinkClick(e, 'contacts')}
            >
              Контакты
            </a><br/>
          </div>
        </div>
        
        <div style={styles.section}>
          <h4 style={styles.title}>Контакты</h4>
          <p style={styles.text}>
            <strong>📍 Адрес:</strong><br/>
            г. Сибай, п-т Горняков 6/3-6
          </p>
          <p style={styles.text}>
            <strong>📞 Телефон:</strong><br/>
            +7 (999) 134-83-20
          </p>
          <p style={styles.text}>
            <strong>✉️ Email:</strong><br/>
            kunaksell@yandex.ru
          </p>
          <div style={styles.workingHours}>
            <strong>🕐 Режим работы:</strong><br/>
            Пн-Пт: 9:00 - 18:00<br/>
          </div>
        </div>
      </div>
      
      <div style={styles.copyright}>
        <div>© {currentYear} ООО «МакарониЯ». Все права защищены.</div>
        <div style={{ fontSize: '11px', marginTop: '5px' }}>
          Производство натуральной лапши и макаронных изделий
        </div>
        
        <div style={styles.developerInfo} className="footer-developer-info">
          <span>🌐 Разработка сайта: ИП Дильмухаметов Э.Р.</span>
          <span>📧 Email: dilmuhametoveduard@yandex.ru</span>
          <span>📱 Тел.: +7 (933) 043-48-44</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
