import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, addToCart, goBack }) => {
  return (
    <div className="product-details-container">
      {/* Кнопка "Назад" */}
      <button className="back-button" onClick={goBack}>
        ← Назад
      </button>

      {/* Карточка товара */}
      <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-season">{product.season}</p>
          <p className="product-price">{product.price} ₽</p>
          <div className="product-rating">
            <span>⭐ {product.rating}</span>
            <span>({product.reviews} отзывов)</span>
          </div>
          <div className="product-description">
            <h3>Описание:</h3>
            <p>{product.description}</p>
          </div>
          <button
            className="btn-add-to-cart"
            onClick={() => addToCart(product)}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


