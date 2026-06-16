import React, { useState } from 'react';
import './AccountPage.css';

const AccountPage = () => {
  // Стейты для аутентификации и регистрации
  const [authMode, setAuthMode] = useState('login'); // 'login' или 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  // Данные пользователя (тестовые, в реальном приложении — из API/Backend)
  const [userData, setUserData] = useState({
    name: 'Иван Иванов',
    email: 'ivan.ivanov@mail.ru',
    phone: '+7 (987) 654-32-10',
    address: 'Москва, ул. Ленина, 35, кв. 42',
    orderHistory: [
      { id: 101, date: '15.05.2024', status: 'Доставлен', total: '18990 ₽' },
      { id: 102, date: '10.05.2024', status: 'Доставлен', total: '12990 ₽' },
      { id: 103, date: '05.05.2024', status: 'В обработке', total: '7990 ₽' }
    ],
    orderDetails: null
  });

  // Логика аутентификации
  const handleLogin = (e) => {
    e.preventDefault();
    // Имитация проверки логина/пароля (в реальном приложении — запрос на Backend)
    if (email === 'ivan.ivanov@mail.ru' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Неверный email или пароль');
    }
  };

  // Логика регистрации
  const handleRegister = (e) => {
    e.preventDefault();
    // Проверяем корректность данных
    if (!name.trim() || !email.trim() || !password || !phone.trim()) {
      alert('Все поля обязательны для заполнения');
      return;
    }
    if (password.length < 6) {
      alert('Пароль должен содержать не менее 6 символов');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Некорректный email');
      return;
    }

    // Сохраняем данные пользователя (в реальном приложении — отпраляем на сервер)
    const newUserData = {
      name,
      email,
      phone,
      address: 'Адрес не указан', // По умолчанию
      orderHistory: [],
      orderDetails: null
    };

    setUserData(newUserData);
    setIsAuthenticated(true);
    setAuthMode('login'); // Переключаемся на форму входа после регистрации
    alert('Регистрация успешна! Теперь войдите в аккаунт.');
  };

  // Логика смены режима (вход/регистрация)
  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
    // Сбрасываем поля формы
    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
  };

  // Остальные методы остаются без изменений
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEditProfile = () => {
    console.log('Редактирование профиля');
  };

  const handleOrderClick = (order) => {
    setUserData(prev => ({
      ...prev,
      orderDetails: orderDetails(
        order.id,
        order.date,
        order.status,
        order.total
      )
    }));
  };

  const orderDetails = (id, date, status, total) => {
    return {
      id,
      date,
      status,
      total,
      items: [
        { title: 'Треккинговая куртка Alpine Pro', price: '12990 ₽', quantity: 1 },
        { title: 'Треккинговые брюки Explorer', price: '7990 ₽', quantity: 1 }
      ]
    };
  };

  // Рендер формы аутентификации (вход/регистрация)
  const renderAuthForm = () => {
    if (!isAuthenticated) {
      return (
        <div className="account-auth">
          <header className="auth-header">
            <h1>{authMode === 'login' ? 'Вход' : 'Регистрация'}</h1>
            <p className="description">
              {authMode === 'login'
                ? 'Войдите в ваш аккаунт для управления заказами'
                : 'Зарегистрируйтесь, чтобы получить доступ ко всем функциям'}
            </p>
          </header>

          <form
            onSubmit={authMode === 'login' ? handleLogin : handleRegister}
            className="auth-form"
          >
            {authMode === 'register' && (
              <div className="form-group">
                <label>Имя и фамилия</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ivan@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            {authMode === 'register' && (
              <div className="form-group">
                <label>Телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (9XX) XXX-XX-XX"
                  required
                />
              </div>
            )}

            <div className="form-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={toggleAuthMode}
              >
                {authMode === 'login' ? 'Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                {authMode === 'login' ? 'Войти' : 'Зарегистрироваться'}
              </button>
            </div>
          </form>
        </div>
      );
    }

    // Кнопка выхода при авторизованном пользователе
    return (
      <div className="account-header-actions">
        <h2>Личный кабинет</h2>
        <button
          className="btn-logout"
          onClick={() => setIsAuthenticated(false)}
        >
          Выйти
        </button>
      </div>
    );
  };

  // Основной рендер (если авторизован)
  if (!isAuthenticated) {
    return (
      <div className="account-container">
        {renderAuthForm()}
      </div>
    );
  }

  return (
    <div className="account-container">
      <div className="account-header">
        {renderAuthForm()}
      </div>

      <div className="account-content">
        <aside className="account-sidebar">
          <nav className="sidebar-nav">
            <ul>
              <li
                className={activeTab === 'profile' ? 'active' : ''}
                onClick={() => handleTabChange('profile')}
              >
                <span className="icon">👤</span> Профиль
              </li>
              <li
                className={activeTab === 'orders' ? 'active' : ''}
                onClick={() => handleTabChange('orders')}
              >
                <span className="icon">📦</span> Заказы
              </li>
              <li
                className={activeTab === 'subscriptions' ? 'active' : ''}
                onClick={() => handleTabChange('subscriptions')}
              >
                <span className="icon">🔔</span> Подписки
              </li>
              <li
                className={activeTab === 'addresses' ? 'active' : ''}
                onClick={() => handleTabChange('addresses')}
              >
                <span className="icon">🏠</span> Адреса
              </li>
              <li
                className={activeTab === 'security' ? 'active' : ''}
                onClick={() => handleTabChange('security')}
              >
                <span className="icon">🔒</span> Безопасность
              </li>
            </ul>
          </nav>
        </aside>

        <main className="account-main">
          {activeTab === 'profile' && (
            <section className="profile-section">
              <div className="profile-header">
                <h2>Ваш профиль</h2>
                <button
                  className="btn-edit"
                  onClick={handleEditProfile}
                >
                  Редактировать
                </button>
              </div>

              <div className="profile-details">
                <div className="profile-field">
                  <label>Имя и фамилия</label>
                  <p>{userData.name}</p>
                </div>

                <div className="profile-field">
                  <label>Email</label>
                  <p>{userData.email}</p>
                </div>

                <div className="profile-field">
                  <label>Телефон</label>
                  <p>{userData.phone}</p>
                </div>

                <div className="profile-field">
                  <label>Адрес доставки</label>
                  <p>{userData.address}</p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'orders' && (
            <section className="orders-section">
              <div className="orders-header">
                <h2>История заказов</h2>
              </div>

              <div className="orders-grid">
                {userData.orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className="order-card"
                    onClick={() => handleOrderClick(order)}
                  >
                    <div className="order-id">Заказ #{order.id}</div>
                    <div className="order-date">{order.date}</div>
                    <div className="order-status">{order.status}</div>
                    <div className="order-total">{order.total}</div>
                  </div>
                ))}
              </div>

              {userData.orderDetails && (
                <div className="order-details-modal">
                  <div className="modal-header">
                    <h3>Детали заказа #{userData.orderDetails.id}</h3>
                    <button
                      className="close-btn"
                      onClick={() => setUserData(prev => ({
                        ...prev,
                        orderDetails: null
                      }))}
                    >
                      ×
                    </button>
                  </div>

                  <div className="modal-content">
                    <div className="order-summary">
                      <div className="order-info">
                        <div>
                          <span>Дата:</span> {userData.orderDetails.date}
                        </div>
                        <div>
                          <span>Статус:</span> {userData.orderDetails.status}
                        </div>
                      </div>
                      <div className="order-total">
                        Итого: {userData.orderDetails.total}
                      </div>
                    </div>

                    <div className="order-items">
                      <h4>Товары</h4>
                      <div className="items-list">
                        {userData.orderDetails.items.map((item, index) => (
                          <div key={index} className="item-row">
                            <div className="item-name">{item.title}</div>
                            <div className="item-price">{item.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {activeTab === 'subscriptions' && (
            <section className="subscriptions-section">
              <div className="subscriptions-header">
                <h2>Ваши подписки</h2>
                <p>У вас нет активных подписок</p>
              </div>
            </section>
          )}

          {activeTab === 'addresses' && (
            <section className="addresses-section">
              <div className="addresses-header">
                <h2>Адреса доставки</h2>
                <button className="btn-add">Добавить адрес</button>
              </div>

              <div className="addresses-list">
                <div className="address-item">
                  <div>
                    <h3>Основной адрес</h3>
                    <p>{userData.address}</p>
                  </div>
                  <div className="address-actions">
                    <button className="btn-edit">Редактировать</button>
                    <button className="btn-remove">Удалить</button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'security' && (
            <section className="security-section">
              <div className="security-header">
                <h2>Безопасность аккаунта</h2>
              </div>

              <div className="security-options">
                <div className="security-option">
                  <h3>Изменить пароль</h3>
                  <p>Вы можете изменить пароль для повышения безопасности вашего аккаунта</p>
                  <button className="btn-security">Изменить пароль</button>
                </div>

                <div className="security-option">
                  <h3>Двухфакторная аутентификация</h3>
                  <p>Установите двухфакторную аутентификацию для дополнительной защиты</p>
                  <button className="btn-security">Включить 2FA</button>
                </div>

                <div className="security-option">
                  <h3>Уведомления</h3>
                  <p>Настройте уведомления о заказах и акциях</p>
                  <button className="btn-security">Настроить уведомления</button>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default AccountPage;

