import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import About from "./pages/About";
import RoomDetail from "./pages/RoomDetail";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
     <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
         <Route path="/room-detail" element={<RoomDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
