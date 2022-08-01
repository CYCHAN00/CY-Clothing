import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/sign-in/SignIn';

const Shop = () => {
  return <div>I am shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
