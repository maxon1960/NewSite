import React from 'react';


const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Свяжитесь с нами</h1>
        <p>Мы всегда готовы ответить на ваши вопросы и помочь с любыми проблемами</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>support@library.com</p>
          </div>
          <div className="contact-item">
            <h3>Телефон</h3>
            <p>+7 (123) 456-78-90</p>
          </div>
          <div className="contact-item">
            <h3>Адрес</h3>
            <p>г. Москва, ул. Читательская, д. 15</p>
          </div>
          <div className="contact-item">
            <h3>Часы работы</h3>
            <p>Пн-Пт: 9:00-18:00</p>
            <p>Сб-Вс: 10:00-16:00</p>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Напишите нам</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Ваше имя" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Ваш email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
            </div>
            <button type="submit">Отправить сообщение</button>
          </form>
        </div>
      </div>
      
      <div className="map-section">
        <h2>Как нас найти</h2>
        <div className="map-placeholder">
          <p>Здесь будет карта с нашим местоположением</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

