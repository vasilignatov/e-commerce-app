import './Header.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Auth from '../Auth/Auth.js';
import * as authService from '../../services/authService.js';
import { useAuth } from '../../contexts/AuthContext.js';
import { useCart } from '../../contexts/CartContext.js';

const Header = () => {

    const navigate = useNavigate();
    const { user, onLogout } = useAuth();
    const [isVisible, setIsVisible] = useState(false);
    const { cart } = useCart();

    function setIsVisibleHandler() {
        setIsVisible(isVisible => !isVisible);
    }

    function onAuthClickHandler(e) {
        e.preventDefault();
        if (e.target.tagName == 'A' || e.target.tagName == 'LI') {
            setIsVisible(true);
        }
    }

    function onLogoutHandler(e) {
        e.preventDefault();
        authService.logout()
            .then(() => {
                onLogout();
                navigate('/');
            });
    }

    return (
        <>
            {
                isVisible
                    ? <Auth setIsVisibleHandler={setIsVisibleHandler} />
                    : ''
            }

            <header className="main-header">
                {/* <!-- Start Navigation --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">
                        {/* <!-- Start Header Navigation --> */}
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src="https://ik.imagekit.io/8brpz6ecl/e-commerce-react/logo.png?updatedAt=1680077299158" className="logo" alt="Site Logo" />
                            </Link>
                        </div>
                        {/* <!-- End Header Navigation --> */}

                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">

                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="about">About Us</Link>
                                </li>

                                <li className="dropdown megamenu-fw">
                                    <Link to="/products" className="nav-link">Products</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="services">Our Service</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="contacts">Contact Us</Link>
                                </li >

                            </ul>
                        </div>
                        {/* <!-- /.navbar-collapse --> */}

                        {/* <!-- Start Atribute Navigation --> */}
                        <div className="attr-nav">

                            <ul>
                                {
                                    user.email
                                        ? (<>

                                            <li className="cart">
                                                <Link to="/cart">
                                                    <i className="fa fa-shopping-bag"></i>
                                                    <span className="badge">{cart.length}</span>
                                                </Link>
                                            </li>

                                            <li className="dropdown">
                                                <a href="">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                </a>
                                                <ul className="dropdown-menu">

                                                    {/* TODO: Style div */}
                                                    <div className="profile-icon">
                                                        <p className="text-center font-weight-bold">Welcome, <span className="font-italic">{user.username}</span></p>
                                                    </div>
                                                    <li><Link to="" onClick={onLogoutHandler}>Log Out</Link></li>
                                                    <li><Link to="/profile/my-orders">My Orders</Link></li>
                                                    <li><Link to="/profile/whishlist">Wishlist</Link></li>
                                                </ul>
                                            </li>
                                        </>)

                                        : (<li className="auth" onClick={onAuthClickHandler}>
                                            <a href="" className="btn">
                                                Login/Register
                                            </a>
                                        </li>)


                                }

                            </ul>
                        </div>
                        {/* <!-- End Atribute Navigation --> */}
                    </div>


                    {/* <!-- Start Side Menu --> */}
                    {/* <div className="side">
                        <Link to="/cart" className="close-side"><i className="fa fa-times"></i></Link>
                        <li className="cart-box">
                            <ul className="cart-list">
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Delica omtantur </a></h6>
                                    <p>1x - <span className="price">$80.00</span></p>
                                </li>

                                <li className="total">
                                    <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                    <span className="float-right"><strong>Total</strong>: $180.00</span>
                                </li>
                            </ul>
                        </li>
                    </div> */}
                    {/* <!-- End Side Menu --> */}
                </nav>
                {/* <!-- End Navigation --> */}
            </header>
        </>
    );
}

export default Header;