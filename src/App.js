import React, { useState } from 'react';
import Navbar from './components/navbar';
import All from './pages/all';
import UnstichedData from './pages/unstiched';
import Readyfun from './pages/ready';
import Westfun from './pages/west';
import Manfun from './pages/man';
import Kidseastfun from './pages/kidseast';
import Homefun from './pages/home';
import Sleepfun from './pages/sleep';
import Accessoriesfun from './pages/accessories';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import Unstiched from './pages/unstiched';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<All />} />
        <Route exact path="/All" element={<All />} />
        <Route exact path="/Party" element={<UnstichedData />} />
        <Route exact path="/Fall/Winter'22" element={<Readyfun />} />
        <Route exact path="/Tops" element={<Westfun />} />
        <Route exact path="/Mens" element={<Manfun />} />
        <Route exact path="/Childern" element={<Kidseastfun />} />
        <Route exact path="/Beds" element={<Homefun />} />
        <Route exact path="/Essentials" element={<Sleepfun />} />
        <Route exact path="/Denim" element={<Accessoriesfun />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
