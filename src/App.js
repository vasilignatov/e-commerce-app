import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Contacts from './components/Contacts/Contacts.js';
import OurServices from './components/OurServices/OurServices.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
