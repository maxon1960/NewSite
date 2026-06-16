import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="80" />
                <div>
                  <h3>{item.title}</h3>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <span className="item-price">{item.price * item.quantity} ₽</span>
                  <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Итого: {totalPrice} ₽</h3>
            <button onClick={clearCart} className="btn-clear">Очистить корзину</button>
            <button className="btn-primary">Оформить заказ</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
