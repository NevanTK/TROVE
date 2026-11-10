import {Navigate, Route, Routes} from 'react-router-dom';
import {useState, useEffect} from "react"; 
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Outdoor from '../Merch/Outdoor/Outdoor';
import Profile from '../Profile/Profile';
import Men from '../Merch/Men/Men';
import Women from '../Merch/Women/Women';
import Youth from '../Merch/Youth/Youth';
import Navbar from '../Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page__content">
        <Header />
        <Navbar />
        <Routes>
        <Route path="/cart" element={<header className="header"><h1>Cart</h1></header>} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/youth" element={<Youth />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;