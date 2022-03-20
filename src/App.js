import React from "react";
import Navbar from "./components/UI/Navbar";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/meist" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
