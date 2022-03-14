import React from 'react';
import Navbar from './components/UI/Navbar';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
