import CarouselCard from './CarouselCard.js';
import CarouselCardSmall from './CarouselCardSmall.js';
import useFetch from '../../hooks/useFetch.js';
import { endpoints } from '../../endpoints.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    // const { id } = useParams();
    // const product = useFetch(endpoints.getProductById + id);

    return (
        <div className="shop-detail-box-main">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div
                            id="carousel-example-1"
                            className="single-product-slider carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner" role="listbox">

                                {
                                    // product.images.map(i => <CarouselCard key={i} imageUrl={i} />)
                                }

                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carousel-example-1"
                                role="button"
                                data-slide="prev"
                            >
                                <i className="fa fa-angle-left" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carousel-example-1"
                                role="button"
                                data-slide="next"
                            >
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                            <ol className="carousel-indicators">

                                {
                                    // product.images.map(i => <CarouselCardSmall  key={i} imageUrl={i} />)
                                }

                            </ol>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <div className="single-product-details">
                            <h2>Fachion Lorem ipsum dolor sit amet</h2>
                            <h5>
                                <del>$ 60.00</del> $40.79
                            </h5>
                            <p className="available-stock">
                                <span>
                                    More than 20 available / <a href="#">8 sold </a>
                                </span>
                            </p>
                            <p></p>
                            <h4>Short Description:</h4>
                            <p>
                                Nam sagittis a augue eget scelerisque. Nullam lacinia consectetur
                                sagittis. Nam sed neque id eros fermentum dignissim quis at tortor.
                                Nullam ultricies urna quis sem sagittis pharetra. Nam erat turpis,
                                cursus in ipsum at, tempor imperdiet metus. In interdum id nulla
                                tristique accumsan. Ut semper in quam nec pretium. Donec egestas
                                finibus suscipit. Curabitur tincidunt convallis arcu.
                            </p>
                            <ul>
                                <li>
                                    <div className="form-group size-st">
                                        <label className="size-label">Size</label>
                                        <select
                                            id="basic"
                                            className="selectpicker show-tick form-control"
                                        >
                                            <option value={0}>Size</option>
                                            <option value={0}>S</option>
                                            <option value={1}>M</option>
                                            <option value={1}>L</option>
                                            <option value={1}>XL</option>
                                            <option value={1}>XXL</option>
                                            <option value={1}>3XL</option>
                                            <option value={1}>4XL</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group quantity-box">
                                        <label className="control-label">Quantity</label>
                                        <input
                                            className="form-control"
                                            defaultValue={0}
                                            min={0}
                                            max={20}
                                            type="number"
                                        />
                                    </div>
                                </li>
                            </ul>
                            <div className="price-box-bar">
                                <div className="cart-and-bay-btn">
                                    <a className="btn hvr-hover" data-fancybox-close="" href="#">
                                        Buy New
                                    </a>
                                    <a className="btn hvr-hover" data-fancybox-close="" href="#">
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                            <div className="add-to-btn">
                                <div className="add-comp">
                                    <a className="btn hvr-hover" href="#">
                                        <i className="fas fa-heart" /> Add to wishlist
                                    </a>
                                    <a className="btn hvr-hover" href="#">
                                        <i className="fas fa-sync-alt" /> Add to Compare
                                    </a>
                                </div>
                                <div className="share-bar">
                                    <a className="btn hvr-hover" href="#">
                                        <i className="fab fa-facebook" aria-hidden="true" />
                                    </a>
                                    <a className="btn hvr-hover" href="#">
                                        <i className="fab fa-google-plus" aria-hidden="true" />
                                    </a>
                                    <a className="btn hvr-hover" href="#">
                                        <i className="fab fa-twitter" aria-hidden="true" />
                                    </a>
                                    <a className="btn hvr-hover" href="#">
                                        <i className="fab fa-pinterest-p" aria-hidden="true" />
                                    </a>
                                    <a className="btn hvr-hover" href="#">
                                        <i className="fab fa-whatsapp" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-12">
                        <div className="title-all text-center">
                            <h1>Featured Products</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                                amet lacus enim.
                            </p>
                        </div>
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