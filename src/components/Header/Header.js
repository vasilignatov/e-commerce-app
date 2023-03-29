import { Link } from 'react-router-dom';
// import {} from 'react';
import Auth from '../Auth/Auth.js';

const Header = () => {


    return (
        <header class="main-header">
            {/* <!-- Start Navigation --> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                <div class="container">
                    {/* <!-- Start Header Navigation --> */}
                    <div class="navbar-header">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars"></i>
                        </button>
                        <Link class="navbar-brand" to="/">
                            <img src="https://ik.imagekit.io/8brpz6ecl/e-commerce-react/logo.png?updatedAt=1680077299158" class="logo" alt="Site Logo" />
                        </Link>
                    </div>
                    {/* <!-- End Header Navigation --> */}

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">

                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="about">About Us</Link>
                            </li>

                            <li class="dropdown megamenu-fw">
                                <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">Product</a>
                                <ul class="dropdown-menu megamenu-content" role="menu">
                                    <li>
                                        <div class="row">
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Top</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="shop.html">Jackets</a></li>
                                                        <li><a href="shop.html">Shirts</a></li>
                                                        <li><a href="shop.html">Sweaters & Cardigans</a></li>
                                                        <li><a href="shop.html">T-shirts</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- end col-3 --> */}
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Bottom</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="shop.html">Swimwear</a></li>
                                                        <li><a href="shop.html">Skirts</a></li>
                                                        <li><a href="shop.html">Jeans</a></li>
                                                        <li><a href="shop.html">Trousers</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- end col-3 --> */}
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Clothing</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="shop.html">Top Wear</a></li>
                                                        <li><a href="shop.html">Party wear</a></li>
                                                        <li><a href="shop.html">Bottom Wear</a></li>
                                                        <li><a href="shop.html">Indian Wear</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Accessories</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
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
                            <li class="dropdown">
                                <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                                <ul class="dropdown-menu">
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="shop-detail.html">Shop Detail</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="services">Our Service</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="contacts">Contact Us</Link>
                            </li >

                        </ul>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}

                    {/* <!-- Start Atribute Navigation --> */}
                    <div class="attr-nav">
                        <ul>

                            <li class="search">
                                <a href="#">
                                    <i class="fa fa-search"></i>
                                </a>
                            </li>

                            <li class="side-menu"><a href="#">
                                <i class="fa fa-shopping-bag"></i>
                                <span class="badge">3</span>
                            </a></li>

                            <li class="prifile">
                                <a href="/profile">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </a>
                            </li>

                            <li class="auth">
                                <a href="/auth">
                                    Login/Register
                                </a>
                            </li>

                        </ul>
                    </div>
                    {/* <!-- End Atribute Navigation --> */}
                </div>


                {/* <!-- Start Side Menu --> */}
                <div class="side">
                    <a href="#" class="close-side"><i class="fa fa-times"></i></a>
                    <li class="cart-box">
                        <ul class="cart-list">

                            <li>
                                <a href="#" class="photo"><img src="images/img-pro-01.jpg" class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Delica omtantur </a></h6>
                                <p>1x - <span class="price">$80.00</span></p>
                            </li>
                            <li>
                                <a href="#" class="photo"><img src="images/img-pro-02.jpg" class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Omnes ocurreret</a></h6>
                                <p>1x - <span class="price">$60.00</span></p>
                            </li>
                            <li>
                                <a href="#" class="photo"><img src="images/img-pro-03.jpg" class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Agam facilisis</a></h6>
                                <p>1x - <span class="price">$40.00</span></p>
                            </li>
                            <li class="total">
                                <a href="#" class="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                <span class="float-right"><strong>Total</strong>: $180.00</span>
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