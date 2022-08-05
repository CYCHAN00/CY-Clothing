import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import CheckOut from './routes/checkout/Checkout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='shop/*' element={<Shop></Shop>}></Route>
        <Route path='auth' element={<Authentication></Authentication>}></Route>
        <Route path='checkout' element={<CheckOut></CheckOut>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
