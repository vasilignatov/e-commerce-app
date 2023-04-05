import { Link } from 'react-router-dom';
// import {} from 'react';
import Auth from '../Auth/Auth.js';
import './Header.css';
const Header = () => {


    return (
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
                                <Link to="products" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">Product</Link>
                                <ul className="dropdown-menu megamenu-content" role="menu">
                                    <li>
                                        <div className="row">
                                            <div className="col-menu col-md-3">
                                                <h6 className="title">Top</h6>
                                                <div className="content">
                                                    <ul className="menu-col">
                                                        <li><a href="shop.html">Jackets</a></li>
                                                        <li><a href="shop.html">Shirts</a></li>
                                                        <li><a href="shop.html">Sweaters & Cardigans</a></li>
                                                        <li><a href="shop.html">T-shirts</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- end col-3 --> */}
                                            <div className="col-menu col-md-3">
                                                <h6 className="title">Bottom</h6>
                                                <div className="content">
                                                    <ul className="menu-col">
                                                        <li><a href="shop.html">Swimwear</a></li>
                                                        <li><a href="shop.html">Skirts</a></li>
                                                        <li><a href="shop.html">Jeans</a></li>
                                                        <li><a href="shop.html">Trousers</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- end col-3 --> */}
                                            <div className="col-menu col-md-3">
                                                <h6 className="title">Clothing</h6>
                                                <div className="content">
                                                    <ul className="menu-col">
                                                        <li><a href="shop.html">Top Wear</a></li>
                                                        <li><a href="shop.html">Party wear</a></li>
                                                        <li><a href="shop.html">Bottom Wear</a></li>
                                                        <li><a href="shop.html">Indian Wear</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-menu col-md-3">
                                                <h6 className="title">Accessories</h6>
                                                <div className="content">
                                                    <ul className="menu-col">
                                                        <li><a href="shop.html">Bags</a></li>
                                                        <li><a href="shop.html">Sunglasses</a></li>
                                                        <li><a href="shop.html">Fragrances</a></li>
                                                        <li><a href="shop.html">Wallets</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- end col-3 --> */}
                                        </div>
                                        {/* <!-- end row --> */}
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                                <ul className="dropdown-menu">
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="shop-detail.html">Shop Detail</a></li>
                                </ul>
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

                            <li className="search">
                                <a href="#">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li>

                            <li className="side-menu"><a href="#">
                                <i className="fa fa-shopping-bag"></i>
                                <span className="badge">3</span>
                            </a></li>

                            <li className="dropdown">
                                <a href="/profile">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </a>
                                <ul className="dropdown-menu">

                                    {/* TODO: Style div */}
                                    <div className="profile-icon">
                                        <p>Welcome, Vasil</p>
                                        <a >Log Out</a>
                                    </div>
                                    <li><a href="wishlist.html">My Orders</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                </ul>
                            </li>

                            <li className="auth">
                                <a href="/auth">
                                    Login/Register
                                </a>
                            </li>

                        </ul>
                    </div>
                    {/* <!-- End Atribute Navigation --> */}
                </div>


                {/* <!-- Start Side Menu --> */}
                <div className="side">
                    <a href="#" className="close-side"><i className="fa fa-times"></i></a>
                    <li className="cart-box">
                        <ul className="cart-list">

                            <li>
                                <a href="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Delica omtantur </a></h6>
                                <p>1x - <span className="price">$80.00</span></p>
                            </li>
                            <li>
                                <a href="#" className="photo"><img src="images/img-pro-02.jpg" className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Omnes ocurreret</a></h6>
                                <p>1x - <span className="price">$60.00</span></p>
                            </li>
                            <li>
                                <a href="#" className="photo"><img src="images/img-pro-03.jpg" className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Agam facilisis</a></h6>
                                <p>1x - <span className="price">$40.00</span></p>
                            </li>
                            <li className="total">
                                <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                <span className="float-right"><strong>Total</strong>: $180.00</span>
                            </li>
                        </ul>
                    </li>
                </div>
                {/* <!-- End Side Menu --> */}
            </nav>
            {/* <!-- End Navigation --> */}
        </header>
    );
}

export default Header;