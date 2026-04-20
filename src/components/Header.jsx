import './Header.css';  

const Header = ({ onOpenPrice }) => {  // Добавить пропс
  return (
    <header className="app-header">
      <h1 className="app-title">Макарония</h1>
      <button onClick={onOpenPrice} className="price-nav-btn">
        📄 Прайс-лист
      </button>
    </header>
  );
};

export default Header;
