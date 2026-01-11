import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogList from './components/BlogList';
import Article from './components/Article';
import AddArticle from './components/AddArticle';
import './App.css';
import Licznik from "./Licznik"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/dodaj" element={<AddArticle />} />
          </Routes>
        </div>
      </div>
    </Router>

    // <>
    //    <Licznik />
    // </>
  );
}


export default App