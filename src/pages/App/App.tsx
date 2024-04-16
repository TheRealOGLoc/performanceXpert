import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { getUser } from '../../utilities/users-service.js';
import AuthPage from '../../components/AuthPage/AuthPage.jsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import HomePage from '../HomePage/HomePage.tsx';
import LocationPage from '../LocationPage/LocationPage.tsx';
import ProfilePage from '../ProfilePage/ProfilePage.tsx';
import React from 'react';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        <>
          <NavBar user = {user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/auth' element={<AuthPage setUser={setUser} />} />
            <Route path="/location" element={<LocationPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='*' element={<HomePage/>} />
          </Routes>
        </>
    </main>
  );
}

export default App;
