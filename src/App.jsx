// src/App.js
import React, { useState, useEffect } from 'react'; // Added imports for useState and useEffect
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banner/Banner';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import About from './Components/About/About';
import { Footer } from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import MenuPage from './pages/MenuPage'; // Ensure the import path is correct
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useTranslation();

  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar HandlePopup={HandlePopup} />
        <Routes>
          <Route path="/" element={<><Hero /><Banner /><WhyChoose /><About HandlePopup={HandlePopup} /><Banner /><Footer /></>} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </Router>
  );
};

export default App;


