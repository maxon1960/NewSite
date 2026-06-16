import React, { useState, useEffect } from 'react';
import './App.css';
import CatalogPage from './pages/Catalog';
import AboutPage from './pages/About';
import SubscriptionPage from './pages/Subscription';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AccountPage from './pages/AccountPage';
import RegistrationForm from './pages/RegistrationForm';

const Logo = () => (
  <div className="logo">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7.59 2 4 5.59 4 10C4 14.41 7.59 18 12 18C16.41 18 20 14.41 20 10C20 5.59 16.41 2 12 2ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9C14 7.9 13.1 7 12 7ZM7 10C7 8.89 8.89 8 10 8C11.11 8 12 8.89 12 10C12 11.11 11.11 12 10 12C8.89 12 8 11.11 8 10C8 8.89 7 10 7 10Z"
            fill="#2D5A3D" /> {/* Темно-зеленый цвет для природной тематики */}
      <path d="M12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10Z"
            fill="#4CAF50" />
    </svg>
    <span className="logo-text">TrekGear</span>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [user, setUser] = useState(null); // Состояние пользователя
  const [showRegistration, setShowRegistration] = useState(false); // Количество товаров в корзине

  // Функции для управления корзиной
  const addToCart = (product) => {
    const productExists = cartItems.find(item => item.id === product.id);
    if (productExists) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
      setCartItemCount(prevCount => prevCount + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      setCartItemCount(prevCount => prevCount + 1);
    }
    
  };
  
  const handleButtonClick = (e) => {
  const button = e.currentTarget;
  handleCartClick({ currentTarget: button, clientX: e.clientX, clientY: e.clientY });
};
const handleCartClick = (e) => {
  const button = e.currentTarget;
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');

  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ripple.style.width = `${rect.width}px`;
  ripple.style.height = `${rect.height}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};
  
   const handleLogin = (email, password) => {
    // Проверяем сохранённые данные в localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      if (userData.email === email && userData.password === password) {
        setUser(userData);
        return true;
      }
    }
    return false;
  };

  const handleRegister = (userData) => {
    // Сохраняем данные в localStorage (для простоты, без хэширования пароля)
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setShowRegistration(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  const removeFromCart = (productId) => {
    const productToRemove = cartItems.find(item => item.id === productId);
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);

    // Если товар удаляется из корзины, обновляем количество
    if (productToRemove) {
      setCartItemCount(prevCount => prevCount - productToRemove.quantity);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // минимальное значение
    const productToUpdate = cartItems.find((item) => item.id === productId);
    if (!productToUpdate) return;

    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);

    const quantityDiff = newQuantity - productToUpdate.quantity;
    setCartItemCount((prev) => prev + quantityDiff);
  };

  const clearCart = () => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartItems([]);
    setCartItemCount(0);
  };

  
  const popularProducts = [
  {
    id: 1,
    title: "Треккинговая куртка Alpine Pro",
    season: "Всесезон",
    price: 12990,
    image: "https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Универсальная треккинговая куртка для любого сезона.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: 'Найлон 66, полиэстер, мембрана Gore-Tex',
    features: ['Водонепроницаемость: 10000 мм', 'Дышащая ткань', 'Отстегивающийся капюшон'],
    care: 'Ручная стирка',
    rating: 4.8,
    reviews: 42
  },
    {
      id: 2,
      title: "Водонепроницаемая куртка Storm Shield",
      season: "Осень",
      price: 15490,
      image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29mJTIwamFja2V0JTIwcmFpbnxlbnwxfHx8fDE3NzkwMTMyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Защита от дождя и ветра. Проклеенные швы, вентиляция под мышками.",
      rating: 4.9,
      reviews: 38
    },
    {
      id: 3,
      title: "Флисовая куртка Thermal Comfort",
      season: "Зима",
      price: 6990,
      image: "https://images.unsplash.com/photo-1635062562403-117becb17d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGVlY2UlMjBjbG90aGluZyUyMHdhcm18ZW58MXx8fHwxNzc5MDEzMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Утепленная флисовая куртка для холодной погоды. Мягкая и теплая.",
      rating: 4.7,
      reviews: 56
    },
    {
      id: 4,
      title: "Треккинговые брюки Explorer",
      season: "Всесезон",
      price: 7990,
      image: "https://images.unsplash.com/photo-1778837705073-91d1e06acdfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFudHMlMjBoaWtpbmclMjB0cmFpbHxlbnwxfHx8fDE3NzkwMTMyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Комфортные брюки для треккинга с отстегивающимися штанинами. Быстросохнущая ткань.",
      rating: 4.6,
      reviews: 29
    }
  ];

  const advantages = [
    {
      title: "Гарантия качества",
      description: "Все товары сертифицированы и имеют гарантию производителя"
    },
    {
      title: "Быстрая доставка",
      description: "Доставка по всей России в течение 3-7 дней"
    },
    {
      title: "Удобная оплата",
      description: "Оплата картой, наличными или при получении"
    }
  ];

   const renderPage = () => {
    const { page, productId } = currentPage;
    switch (page) {
      case 'catalog':
        return <CatalogPage addToCart={addToCart} />;
      case 'about':
        return <AboutPage />;
      case 'subscriptions':
        return <SubscriptionPage />;
      case 'account':
        return (
          <AccountPage user={user} onLogout={handleLogout} />
        );
     case 'product-details':
        const selectedProduct = popularProducts.find((product) => product.id === productId);
        if (!selectedProduct) return <div>Товар не найден</div>;
        return (
          <ProductDetails
            product={selectedProduct}
            addToCart={addToCart}
            goBack={() => setCurrentPage('home')}
          />
        );
      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            clearCart={clearCart}
          />
        );
      case 'registration':
        return (
          <RegistrationForm
            onRegister={handleRegister}
            onCancel={() => setCurrentPage('account')}
          />
        );
    case 'home':
    default:
      return (
        <div className="home-content">
            <section className="hero-section">
  <div className="hero-content">
    <div className="hero-overlay"></div>
    <div className="hero-text">
      <h1 style={{color: '#fff'}}>Всесезонная одежда для туризма</h1>
      <p style={{color: '#fff'}}>Качественная экипировка для любых погодных условий.<br/>От лёгких ветровок до зимних курток.</p>
      <button
        className="btn-primary"
        onClick={() => setCurrentPage('catalog')}
        onMouseDown={(e) => {
          const button = e.currentTarget;
          handleCartClick({ currentTarget: button, clientX: e.clientX, clientY: e.clientY });
        }}
      >
        Перейти в каталог
      </button>
    </div>
  </div>
</section>

            <section className="advantages-section">
              <div className="advantages-grid">
                {advantages.map((advantage, index) => (
                  <div key={index} className="advantage-item">
                    <h3>{advantage.title}</h3>
                    <p>{advantage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="popular-products-section">
              <h2>Популярные товары</h2>
              <div className="products-grid">
                {popularProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-info">
                      <div className="product-header">
                        <h3>{product.title}</h3>
                        <span className="product-season">{product.season}</span>
                      </div>
                      <p className="product-description">{product.description}</p>
                      <div className="product-rating">
                        <span className="stars">★★★★★</span>
                        <span className="rating-value">{product.rating}</span>
                        <span className="reviews">({product.reviews} отзывов)</span>
                      </div>
                      <div className="product-price">{product.price} ₽</div>
                       <button
                className="btn-secondary"
                onClick={() => setCurrentPage({ page: 'product-details', productId: product.id })}
              >
                Подробнее
              </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-secondary view-all" onClick={() => setCurrentPage('catalog')}>Весь каталог</button>
            </section>

            <section className="seasonal-section">
              <h2>Экипировка для любого сезона</h2>
              <p>Выбирайте одежду для весенних походов, летних треккингов, осенних путешествий и зимних экспедиций</p>
              <button className="btn-secondary" onClick={() => setCurrentPage('catalog')}>Смотреть все категории</button>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <header className="app-header">
  <Logo />
  <nav className="main-nav">
    <a
      href="#home"
      className={currentPage.page === 'home' ? 'active' : ''}
      onClick={(e) => { e.preventDefault(); setCurrentPage({ page: 'home', productId: null }); }}
    >
      Главная
    </a>
    <a
      href="#catalog"
      className={currentPage.page === 'catalog' ? 'active' : ''}
      onClick={(e) => { e.preventDefault(); setCurrentPage({ page: 'catalog', productId: null }); }}
    >
      Каталог
    </a>
    <a
      href="#about"
      className={currentPage.page === 'about' ? 'active' : ''}
      onClick={(e) => { e.preventDefault(); setCurrentPage({ page: 'about', productId: null }); }}
    >
      О нас
    </a>
    <a
      href="#account"
      className={currentPage.page === 'account' ? 'active' : ''}
      onClick={(e) => { e.preventDefault(); setCurrentPage({ page: 'account', productId: null }); }}
    >
      Личный кабинет
    </a>
  </nav>

  {/* Кнопка корзины (с эффектом нажатия и количеством товаров) */}
  <div
    className="cart-header"
    onClick={() => {
      setCurrentPage('cart'); // Переход на страницу корзины
      handleCartClick({ // Эффект "риппла" при нажатии
        currentTarget: { getBoundingClientRect: () => ({ width: 40, height: 40, left: 0, top: 0 }) },
        clientX: 0,
        clientY: 0,
      });
    }}
  >
    <svg className="cart-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6ZM19 20H5V8H13V20H19ZM13 7H5V8H13V7Z" fill="#333"/>
    </svg>
    {cartItemCount > 0 && (
      <span className={`cart-count ${cartItemCount >= 10 ? 'large-count' : ''}`}>
        {cartItemCount}
      </span>
    )}
    <span className="cart-label">Корзина</span>
  </div>
</header>


      <main>
        {showRegistration ? (
          <RegistrationForm
            onRegister={handleRegister}
            onCancel={() => setShowRegistration(false)}
          />
        ) : (
          renderPage()
        )}
      </main>

      <footer className="app-footer">
  <div className="footer-content">
    <div className="footer-logo">
      <Logo />
      <p>Всесезонная туристическая одежда и экипировка для любых приключений</p>
    </div>

    <div className="footer-section">
      <h3>Навигация</h3>
      <ul>
        <li><a href="#home" onClick={(e) => {e.preventDefault(); setCurrentPage('home');}}>Главная</a></li>
        <li><a href="#catalog" onClick={(e) => {e.preventDefault(); setCurrentPage('catalog');}}>Каталог</a></li>
        <li><a href="#about" onClick={(e) => {e.preventDefault(); setCurrentPage('about');}}>О нас</a></li>
        <li>Корзина</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Категории</h3>
      <ul>
        <li>Куртки</li>
        <li>Брюки</li>
        <li>Обувь</li>
        <li>Рюкзаки</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Контакты</h3>
      <p>info@trekgear.ru</p>
      <p>8 (800) 123-45-67</p>
      <p>Москва, Россия</p>
    </div>

    <div className="footer-section subscription-section">
      <h3>Подпишитесь, чтобы быть в курсе новостей</h3>
      <input type="email" placeholder="Ваш email" />
      <button className="btn-secondary" onClick={() => {/* обработка подписки */}}>Подписаться</button>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 TrekGear. Все права защищены.</p>
  </div>
</footer>
    </div>
  );
}

export default App;
