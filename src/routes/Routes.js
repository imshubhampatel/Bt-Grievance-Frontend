import React from "react";
import AddressForm from "../components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Cards/Card";
import Checkout from "../components/Payments/Checkout";

export default function ManageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddressForm />} />
          <Route path="/make-payment" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
