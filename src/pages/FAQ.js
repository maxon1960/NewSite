import React from 'react';

const FAQPage = () => {
  return (
    <div className="page-container">
      <h1>FAQ - Часто задаваемые вопросы</h1>
      
      <div className="faq-list">
        <div className="faq-item">
          <h3>Как получить доступ ко всем книгам?</h3>
          <p>Доступ ко всей библиотеке открывается после регистрации и выбора подходящей подписки.</p>
        </div>
        
        <div className="faq-item">
          <h3>Можно ли скачивать книги?</h3>
          <p>Да, большинство книг доступно для скачивания в форматах PDF и EPUB.</p>
        </div>
        
        <div className="faq-item">
          <h3>Есть ли мобильное приложение?</h3>
          <p>Да, наше приложение доступно для iOS и Android.</p>
        </div>
        
        <div className="faq-item">
          <h3>Как часто обновляется каталог?</h3>
          <p>Мы добавляем новые книги еженедельно, следите за обновлениями!</p>
        </div>
        
        <div className="faq-item">
          <h3>Есть ли детский раздел?</h3>
          <p>Да, у нас есть специальный раздел с литературой для детей разных возрастов.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
