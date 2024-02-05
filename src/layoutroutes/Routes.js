import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Footer from '../components/footer/footer';
import Logout from '../components/Logout/Logout';
import ProductDetails from '../components/productdetails/ProductDetails';

function RoutesLayout() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ftstore" element={<Home />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RoutesLayout;
