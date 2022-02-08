import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";

import { BrowserRouter, Route, Routes } from 'react-router-dom'


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
