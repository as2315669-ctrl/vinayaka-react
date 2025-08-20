import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Packages from './pages/Packages'
import Fleet from './pages/Fleet'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";


export default function App() {
  return (
    <div>
      {/* <header> */}
  {/* <div className="logo">✈ Vinayaka Tour & Travels</div> */}
  <Navbar />
{/* </header> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
      </div>
      <Footer />
    </div>
  )
}
