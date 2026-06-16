import React, { useState } from 'react';
import './Catalog.css';



const Catalog = () => {
  const [products] = useState([
    {
      id: 1,
      title: 'Треккинговая куртка Alpine Pro',
      description: 'Универсальная треккинговая куртка для любого сезона. Водонепроницаемая мембрана 10000 мм, дышащая ткань.',
      season: 'Всесезон',
      category: 'Куртки',
      price: 12990,
      rating: 4.8,
      reviews: 125,
      image: 'https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBqYWNrZXQlMjBvdXRkb29yJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc5MDEzMjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Подробнее'
    },
    {
      id: 2,
      title: 'Водонепроницаемая куртка Storm Shield',
      description: 'Защита от дождя и ветра. Проклеенные швы, вентиляция под мышками.',
      season: 'Осень',
      category: 'Куртки',
      price: 15490,
      rating: 4.9,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29mJTIwamFja2V0JTIwcmFpbnxlbnwxfHx8fDE3NzkwMTMyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Подробнее'
    },
    {
      id: 3,
      title: 'Флисовая куртка Thermal Comfort',
      description: 'Утепленная флисовая куртка для холодной погоды. Мягкая и теплая.',
      season: 'Зима',
      category: 'Куртки',
      price: 6990,
      rating: 4.7,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1635062562403-117becb17d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGVlY2UlMjBjbG90aGluZyUyMHdhcm18ZW58MXx8fHwxNzc5MDEzMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Подробнее'
    },
    {
      id: 4,
      title: 'Треккинговые брюки Explorer',
      description: 'Комфортные брюки для треккинга с отстегивающимися штанинами. Быстросохнущая ткань.',
      season: 'Всесезон',
      category: 'Брюки',
      price: 7990,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1778837705073-91d1e06acdfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFudHMlMjBoaWtpbmclMjB0cmFpbHxlbnwxfHx8fDE3NzkwMTMyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Подробнее'
    },
    {
      id: 5,
      title: 'Туристические ботинки Mountain Peak',
      description: 'Прочные треккинговые ботинки с мембраной Gore-Tex. Виброизоляция подошвы.',
      season: 'Всесезон',
      category: 'Обувь',
      price: 14990,
      rating: 4.9,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1600100315760-ac46b65f6fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRyZWtraW5nJTIwYm9vdHN8ZW58MXx8fHwxNzc5MDEzMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Подробнее'
    },
    {
      id: 6,
      title: 'Туристический рюкзак Nomad 60L',
      description: 'Вместительный рюкзак для многодневных походов. Анатомическая спинка, поясной ремень.',
      season: 'Всесезон',
      category: 'Рюкзаки',
      price: 11990,
      rating: 4.8,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwYmFja3BhY2slMjBnZWFyfGVufDF8fHx8MTc3OTAxMzI0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Подробнее'
    },
    {
      id: 7,
      title: 'Легкая ветровка Breeze',
      description: 'Ультралегкая ветровка для весенних походов. Компактно складывается.',
      season: 'Весна',
      category: 'Ветровки',
      price: 4990,
      rating: 4.5,
      reviews: 54,
      image: 'https://avatars.mds.yandex.net/get-goods_pic/14330745/hat8b6b6f599b497f9d33eb1e2e727fe6c4/orig',
      details: 'Подробнее'
    },
    {
      id: 8,
      title: 'Зимняя куртка Arctic',
      description: 'Теплая зимняя куртка с синтетическим утеплителем. До -25°C.',
      season: 'Зима',
      category: 'Куртки',
      price: 18990,
      rating: 4.7,
      reviews: 43,
      image: 'https://avatars.mds.yandex.net/get-goods_pic/16317419/hat99d6b47f143a7b968627b759665857aa/orig',
      details: 'Подробнее'
    },
    {
      id: 9,
      title: 'Летние шорты Trek',
      description: 'Легкие треккинговые шорты для летних походов. Много карманов.',
      season: 'Лето',
      category: 'Шорты',
      price: 3990,
      rating: 4.4,
      reviews: 89,
      image: 'https://champ.ski/optimpictures/images/fd96ef995bbf6121705e48010b2e71bf/vjxiu3ornysn478sibtkve1rd7t30nui.jpg.webp',
      details: 'Подробнее'
    },
    {
      id: 10,
      title: 'Термобелье Base Layer',
      description: 'Комплект термобелья из мериносовой шерсти. Регулирует температуру тела.',
      season: 'Зима',
      category: 'Термобелье',
      price: 5990,
      rating: 4.8,
      reviews: 112,
      image: 'https://avatars.mds.yandex.net/get-goods_pic/15248975/hat276cc5b44b3bfa766ff717d81068e45e/orig',
      details: 'Подробнее'
    },
    {
      id: 11,
      title: 'Дождевик Rainproof',
      description: 'Компактный дождевик для экстренных случаев. Легко помещается в рюкзак.',
      season: 'Осень',
      category: 'Дождевики',
      price: 3490,
      rating: 4.3,
      reviews: 37,
      image: 'https://rusmedia-group.ru/upload/images/2020/04/04/1627442791/big_photo.jpg',
      details: 'Подробнее'
    },
    {
      id: 12,
      title: 'Рюкзак городской Urban 25L',
      description: 'Универсальный городской рюкзак для повседневного использования и коротких походов.',
      season: 'Всесезон',
      category: 'Рюкзаки',
      price: 5490,
      rating: 4.6,
      reviews: 62,
      image: 'https://avatars.mds.yandex.net/get-yastore/18145482/mb6nrnhmhrkn6vjvwmlgnq2hvr49h4tl/x1920',
      details: 'Подробнее'
    }
  ]);

  const [filters, setFilters] = useState({
    category: 'all',
    season: 'all',
    minPrice: 0,
    maxPrice: 20000
  });

  const handleFilterChange = (e) => {
    const { name, value, type } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const seasons = ['Весна', 'Лето', 'Осень', 'Зима', 'Всесезон'];
  const categories = ['Куртки', 'Брюки', 'Обувь', 'Рюкзаки', 'Ветровки', 'Шорты', 'Термобелье', 'Дождевики'];

  const filteredProducts = products.filter(product => {
    return (filters.category === 'all' || product.category === filters.category) &&
           (filters.season === 'all' || product.season === filters.season) &&
           product.price >= filters.minPrice &&
           product.price <= filters.maxPrice;
  });

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      season: 'all',
      minPrice: 0,
      maxPrice: 20000
    });
  };

  const handleAddToCart = (product) => {
    alert(`Товар "${product.title}" добавлен в корзину за ${product.price}₽`);
  };

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Наш каталог</h1>
      <p className="product-count">Найдено товаров: {filteredProducts.length}</p>

      <div className="catalog-content">
        <aside className="filters-panel">
          <h2 className="filters-title">Фильтры</h2>

          <div className="filter-section">
            <h3>Категории</h3>
            <div className="filter-options">
              <label className="filter-option">
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={filters.category === 'all'}
                  onChange={handleFilterChange}
                />
                Все категории
              </label>
              {categories.map(category => (
                <label key={category} className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={handleFilterChange}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Сезон</h3>
            <div className="filter-options">
              <label className="filter-option">
                <input
                  type="radio"
                  name="season"
                  value="all"
                  checked={filters.season === 'all'}
                  onChange={handleFilterChange}
                />
                Любой сезон
              </label>
              {seasons.map(season => (
                <label key={season} className="filter-option">
                  <input
                    type="radio"
                    name="season"
                    value={season}
                    checked={filters.season === season}
                    onChange={handleFilterChange}
                  />
                  {season}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Цена</h3>
            <div className="price-range">
              <div className="price-inputs">
                <span>От</span>
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  min="0"
                  max={filters.maxPrice}
                />₽
              </div>
              <div className="price-inputs">
                <span>До</span>
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  min={filters.minPrice}
                  max="20000"
                />₽
              </div>
            </div>
            <div className="price-slider">
              <input
                type="range"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                min="0"
                max="20000"
                step="1000"
                className="slider"
              />
              <input
                type="range"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                min="0"
                max="20000"
                step="1000"
                className="slider"
              />
            </div>
          </div>

          <button
            className="reset-filters"
            onClick={handleResetFilters}
          >
            Сбросить фильтры
          </button>
        </aside>

        <main className="products-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <div className="product-season">{product.season}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-rating">
                  <span className="stars">{'★'.repeat(5).substring(0, Math.round(product.rating))}</span>
                  <span className="rating-value">({product.reviews} отзывов)</span>
                </div>
                <div className="product-price">{product.price}₽</div>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  В корзину
                </button>
                <button className="product-details">
                  {product.details}
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Catalog;

