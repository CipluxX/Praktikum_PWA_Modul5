// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { FaBook, FaGamepad } from 'react-icons/fa';
import './App.css';
import Login from './pages/Login';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Book from './pages/Book';
import DetailMovie from './pages/DetailMovie';
import Games from './pages/Games';

function App() {
  // Layout component to wrap pages that need header and footer
  const PageLayout = ({ children }) => (
    <>
      <header>
        <p id="titleGroup">Kelompok 34</p>
      </header>
      {children}
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <FaBook className="icon" /> Book
        </NavLink>
        <NavLink to="/games" className="iconWrapper">
          <FaGamepad className="icon" /> Games
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
      
          <Route path="/" element={<Navigate to="/login" replace />} />
                
          <Route path="/login" element={<Login />} />
          
          <Route path="/movie" element={
            <PageLayout>
              <Movie />
            </PageLayout>
          } />
          
          <Route path="/movie/detail/:id" element={<DetailMovie />} />
          
          <Route path="/profile" element={
            <PageLayout>
              <Profile />
            </PageLayout>
          } />
          
          <Route path="/book" element={
            <PageLayout>
              <Book />
            </PageLayout>
          } />
          
          <Route path="/games" element={
            <PageLayout>
              <Games />
            </PageLayout>
          } />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;