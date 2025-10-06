import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Lunch from './components/pages/Lunch';
import Breakfast from './components/pages/Breakfast';
import About from './components/pages/About';
import Contact from './components/pages/Contact'
import ScrollToTop from './components/ScrollToTop';
import StorePage from './components/pages/StorePage';


function App() {
  return (
    <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<StorePage />} />
        </Routes>
      </Router>
  );
}

export default App;
