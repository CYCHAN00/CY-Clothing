import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import './CartDropdown.scss';

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>GO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
