import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
