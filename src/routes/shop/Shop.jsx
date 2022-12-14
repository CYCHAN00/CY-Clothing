import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import './Shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
      <Route path=':category' element={<Category></Category>}></Route>
    </Routes>
  );
};

export default Shop;
