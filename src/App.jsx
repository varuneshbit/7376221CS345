import './App.css';
import React from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import TopUsers from './components/TopUsers';
import { Routes, Route } from 'react-router-dom';
import TrendingPosts from './components/TrendingPosts';

const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/top-users' element={<TopUsers />} />
        <Route path='/trending-posts' element={<TrendingPosts />} />
    </Routes>
    </div>
    </>
  )
}

export default App
