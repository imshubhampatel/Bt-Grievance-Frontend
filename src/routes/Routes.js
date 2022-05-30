import React from "react";
import AddressForm from "../components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ManageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddressForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
