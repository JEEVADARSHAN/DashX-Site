import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CookieConsent from './components/Cookies/Cookies';

import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Download from './pages/Download/Download';
import About from './pages/About/About';
import Privacy from './pages/Privacy/Privacy';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <CookieConsent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
