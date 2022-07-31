import React from 'react';
import CategoryItem from '../category-item/CategoryItem';
import './Directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id}></CategoryItem>
      ))}
    </div>
  );
};

export default Directory;
