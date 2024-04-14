import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { getUser } from '../../utilities/users-service.js';
import AuthPage from '../../components/AuthPage/AuthPage.jsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import HomePage from '../HomePage/HomePage.tsx';
import React from 'react';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {/* { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={< NewOrderPage /> } />
            <Route path="/orders" element={ < OrderHistroryPage /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      } */}
      {
        <>
          <NavBar user = {user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/auth' element={<AuthPage setUser={setUser} />} />
            
            
            <Route path='*' element={<HomePage/>} />
          </Routes>
        </>
      }
    </main>
  );
}

export default App;
