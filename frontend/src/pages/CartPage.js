import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item._id !== id && item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cart.length === 0) return <div>Your shopping cart is empty.</div>;

  return (
    <div style={{ maxWidth: 800, margin: '40px auto' }}>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item._id || item.id} style={{ marginBottom: 24, position: 'relative' }}>
          <ProductCard product={item} />
          <button onClick={() => removeFromCart(item._id || item.id)} style={{ position: 'absolute', top: 10, right: 10, background: '#d32f2f', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 12px' }}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
