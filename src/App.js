import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import Join from './pages/join';
import MyPage from './pages/myPage';
import Support from './pages/support';
import Cart from './pages/cart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/join' element={<Join/>}/>
      <Route path='/myPage' element={<MyPage/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  );
}

export default App;
