import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <h1>Добро пожаловать в онлайн-библиотеку "Ариадна"!</h1>
        <p>Ваш проводник в мире литературы. Находите, читайте, открывайте новое.</p>
        <div className="hero-actions">
          <Link to="/catalog" className="btn btn-primary">
            Перейти к каталогу
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;