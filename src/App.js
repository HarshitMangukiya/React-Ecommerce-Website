import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="Home" element={<Home />} />
            <Route exact path="About" element={<About />} />
            <Route exact path="Product" element={<Product />} />
            <Route exact path="Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
