import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About"
// import Services from "./components/Services/Services";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isopen={isSideBarOpen} toggle={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;




