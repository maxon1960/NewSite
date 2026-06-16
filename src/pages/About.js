import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>О нас</h1>
        <p className="about-subtitle">TrekGear - ваш надежный партнер в мире туристической экипировки</p>
      </div>

      <div className="about-content">
        <section className="about-section">
        <div className="mission-section">
  <div className="mission-content">
    <div className="mission-image">
      <img
        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Наша миссия - безопасные походы"
        className="mission-image-src"
      />
    </div>
    <div className="mission-text">
      <h2>Наша миссия</h2>
      <p>
        Мы верим, что каждый человек должен иметь возможность безопасно и комфортно исследовать природу в любое время года.
        Наша цель — предоставить туристам и путешественникам надежную экипировку, которая выдержит любые погодные условия
        и сделает каждое приключение незабываемым.
      </p>
    </div>
  </div>
</div>
        </section>

        <section className="about-section">
          <h2>10 лет опыта и доверия</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-text">Лет<br/>опыта</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-text">Довольных<br/>клиентов</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-text">Товаров<br/>в каталоге</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">85</div>
              <div className="stat-text">Регионов<br/>доставки</div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Почему выбирают TrekGear?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Качественная продукция</h3>
              <p>Мы работаем только с проверенными производителями и тщательно отбираем каждый товар. Вся продукция сертифицирована и имеет гарантию качества.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>Экспертная консультация</h3>
              <p>Наши специалисты — опытные туристы, которые помогут подобрать экипировку под любые условия и цели вашего путешествия.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Быстрая доставка</h3>
              <p>Доставляем заказы по всей России в течение 3-7 дней. Бесплатная доставка при заказе от 5000 рублей.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <h3>Гарантия возврата</h3>
              <p>Если товар не подошел, вы можете вернуть его в течение 30 дней. Полный возврат средств без лишних вопросов.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Свяжитесь с нами</h2>
          <div className="contact-info">
            <p>Есть вопросы? Наша команда всегда готова помочь!</p>

            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>Email:</strong> info@trekgear.ru
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Телефон:</strong> 8 (800) 123-45-67
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <strong>Режим работы:</strong> Пн-Вс 9:00-21:00 (МСК)
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;

