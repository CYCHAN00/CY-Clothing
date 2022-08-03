import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductContext';
import ProductCard from '../../components/product_card/ProductCard';
import './Shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
      ;
    </div>
  );
};

export default Shop;
