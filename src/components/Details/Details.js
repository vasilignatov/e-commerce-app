import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { endpoints } from '../../endpoints.js';
import useFetch from '../../hooks/useFetch.js';
import Carousel from './Carousel/Carousel.js';
import ProductDetails from './ProductDetails/ProductDetails.js';

const Details = () => {
    const { id } = useParams();
    const product = useFetch(endpoints.getProductById + id);
    const ProductContext = createContext(product);

    return (
        <div className="shop-detail-box-main">
            <div className="container">
                <div className="row">

                    <ProductContext.Provider value={product}>

                        <Carousel />
                        <ProductDetails />

                    </ProductContext.Provider>

                </div>



                {/* FEATURED PRODUCTS SECTION */}
                <div className="row my-5">
                    <div className="col-lg-12">
                        <div className="title-all text-center">
                            <h1>Featured Products</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                                amet lacus enim.
                            </p>
                        </div>

                        {/* FEATURED PRODUCTS ITEMS*/}
                        <div className="featured-products-box owl-carousel owl-theme">
                            <div className="item">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <img
                                            src="images/img-pro-01.jpg"
                                            className="img-fluid"
                                            alt="Image"
                                        />
                                        <div className="mask-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="View"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Compare"
                                                    >
                                                        <i className="fas fa-sync-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Add to Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="cart" href="#">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <img
                                            src="images/img-pro-02.jpg"
                                            className="img-fluid"
                                            alt="Image"
                                        />
                                        <div className="mask-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="View"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Compare"
                                                    >
                                                        <i className="fas fa-sync-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Add to Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="cart" href="#">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <img
                                            src="images/img-pro-03.jpg"
                                            className="img-fluid"
                                            alt="Image"
                                        />
                                        <div className="mask-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="View"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Compare"
                                                    >
                                                        <i className="fas fa-sync-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Add to Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="cart" href="#">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <img
                                            src="images/img-pro-04.jpg"
                                            className="img-fluid"
                                            alt="Image"
                                        />
                                        <div className="mask-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="View"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Compare"
                                                    >
                                                        <i className="fas fa-sync-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Add to Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="cart" href="#">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <img
                                            src="images/img-pro-01.jpg"
                                            className="img-fluid"
                                            alt="Image"
                                        />
                                        <div className="mask-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="View"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Compare"
                                                    >
                                                        <i className="fas fa-sync-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Add to Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="cart" href="#">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <img
                                            src="images/img-pro-02.jpg"
                                            className="img-fluid"
                                            alt="Image"
                                        />
                                        <div className="mask-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="View"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Compare"
                                                    >
                                                        <i className="fas fa-sync-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Add to Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="cart" href="#">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <img
                                            src="images/img-pro-03.jpg"
                                            className="img-fluid"
                                            alt="Image"
                                        />
                                        <div className="mask-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="View"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Compare"
                                                    >
                                                        <i className="fas fa-sync-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Add to Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="cart" href="#">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <img
                                            src="images/img-pro-04.jpg"
                                            className="img-fluid"
                                            alt="Image"
                                        />
                                        <div className="mask-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="View"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Compare"
                                                    >
                                                        <i className="fas fa-sync-alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        data-toggle="tooltip"
                                                        data-placement="right"
                                                        title="Add to Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a className="cart" href="#">
                                                Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details;