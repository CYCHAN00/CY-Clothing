import './CartIcon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
