import React from 'react';
import { useContext } from 'react';

import './CategoriesPreview.styles.scss';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../../components/category-preview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </>
  );
};

export default CategoriesPreview;
