import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import About from "./pages/About";
import RoomDetail from "./pages/RoomDetail";
import WhatsappButton from "./components/WhasappButon";
import { ToastContainer } from 'react-toastify';
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Navbar />
        <ScrollToTop />
       <ToastContainer></ToastContainer>
      <Routes>
     <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
         <Route path="/room-detail/:type" element={<RoomDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
<WhatsappButton />
      <Footer />
    </>
  );
}

export default App;
