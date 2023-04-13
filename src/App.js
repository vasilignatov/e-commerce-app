import HomePage from './components/Home/HomePage.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import AboutUsPage from './components/AboutUs/AboutUs.js';
import ContactsPage from './components/Contacts/ContactsPage.js';
import OurServicesPage from './components/OurServices/OurServicesPage.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './components/Products/ProductsPage.js';
import DetailsPage from './components/Details/DetailsPage';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to='/' />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/services" element={<OurServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
