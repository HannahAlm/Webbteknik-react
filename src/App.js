import React from 'react'

import Home from './pages/Home';
import About from './pages/About';
import Storleksguide from './pages/Storleksguide';
import Smycken from './pages/Smycken';
import Produkt from './pages/Produkt';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return <div>
    <Router>
    <Header/>
    <Navbar />

    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Storleksguide" element={<Storleksguide/>} />
      <Route path="/Smycken" element={<Smycken/>} />
      <Route path="/Produkt" element={<Produkt/>} />
    </Routes>
    <Footer/>
    </Router>
  </div>
}

export default App;
