import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import APIDocumentation from "./pages/APIDocumentation";
import ContactUs from "./pages/ContactUs";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/api-documentation" element={<APIDocumentation />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
