import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { CartContext } from '../../contexts/CartContext';
import './Checkout.styles.scss';
const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        );
      })}
      <span className='total'>{`Total:${totalPrice}`}</span>
    </div>
  );
};

export default CheckOut;
