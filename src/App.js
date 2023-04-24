import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Home/HomePage.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import AboutUsPage from './components/AboutUs/AboutUs.js';
import ContactsPage from './components/Contacts/ContactsPage.js';
import OurServicesPage from './components/OurServices/OurServicesPage.js';
import ProductsPage from './components/Products/ProductsPage.js';
import DetailsPage from './components/Details/DetailsPage.js';
import CartPage from './components/Cart/CartPage.js';
import CheckoutPage from './components/Checkout/CheckoutPage.js';
import WhishlistPage from './components/Whishlist/WhishlistPage.js';
import ErrorPage from './components/404/404.js';


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
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/cart/checkout" element={<CheckoutPage />}></Route>
        <Route path="profile/my-orders" element={<Navigate to='/' />}></Route>
        <Route path="/profile/whishlist" element={<WhishlistPage />}></Route>
        <Route path="/404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
