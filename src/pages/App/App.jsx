import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { getUser } from '../../utilities/users-service.js';
import AuthPage from '../../components/AuthPage/AuthPage.jsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import HomePage from '../HomePage/HomePage.tsx';
import LocationPage from '../LocationPage/LocationPage.tsx';
import ProfilePage from '../ProfilePage/ProfilePage.tsx';
import CommodityPage from "../CommodityPage/CommodityPage.tsx"
import CommodityDetailPage from '../CommodityDetailPage/CommodityDetailPage.tsx';
import CartPage from '../CartPage/CartPage.jsx';
import React from 'react';
import CartProvider from './CartContext.jsx';
import CommodityPageBrand from '../CommodityPageBrand/CommodityPageBrand.tsx';

function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      <>
        <CartProvider>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage setUser={setUser} />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path='/profile' element={<ProfilePage user={user} setUser={setUser} />} />
            <Route path="/parts" element={<CommodityPage />} />
            <Route path="/parts/brand/:brand" element={<CommodityPageBrand/>} />
            <Route path="/parts/:part" element={<CommodityPage />} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/commodities/:id' element={<CommodityDetailPage />} />
          </Routes>
        </CartProvider>
      </>
    </main>
  );
}

export default App;
