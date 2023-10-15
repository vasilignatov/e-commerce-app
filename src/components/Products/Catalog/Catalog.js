import ProductFilterRow from './ProductFilterRow.js';
import ProductCardSmall from './ProductCardSmall.js';
import { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { endpoints } from '../../../endpoints.js';
import { AllProductsContext } from '../../../contexts/AllProductsContext.js';


const Catalog = () => {

    const { state: products } = useFetch(endpoints.getProducts);


    return (
        <AllProductsContext.Provider value={products}>

            <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                <div className="right-product-box">

                    <ProductFilterRow />

                    <div className="row product-categorie-box">
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                                <div className="row">

                                    {
                                        products.map(p => <ProductCardSmall key={p._id} data={p} />)
                                    }

                                </div>
                            </div>

                            <div role="tabpanel" className="tab-pane fade" id="list-view">
                                <div className="list-view-box">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                            <div className="products-single fix">
                                                <div className="box-img-hover">
                                                    <div className="type-lb">
                                                        <p className="new">New</p>
                                                    </div>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                            <div className="why-text full-width">
                                                <h4>Lorem ipsum dolor sit amet</h4>
                                                <h5>

                                                    <del>$ 60.00</del> $40.79
                                                </h5>
                                                <p>
                                                    Integer tincidunt aliquet nibh vitae dictum. In turpis
                                                    sapien, imperdiet quis magna nec, iaculis ultrices
                                                    ante. Integer vitae suscipit nisi. Morbi dignissim
                                                    risus sit amet orci porta, eget aliquam purus
                                                    sollicitudin. Cras eu metus felis. Sed arcu arcu,
                                                    sagittis in blandit eu, imperdiet sit amet eros. Donec
                                                    accumsan nisi purus, quis euismod ex volutpat in.
                                                    Vestibulum eleifend eros ac lobortis aliquet.
                                                    Suspendisse at ipsum vel lacus vehicula blandit et
                                                    sollicitudin quam. Praesent vulputate semper libero
                                                    pulvinar consequat. Etiam ut placerat lectus.
                                                </p>
                                                <a className="btn hvr-hover" href="#">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-view-box">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                            <div className="products-single fix">
                                                <div className="box-img-hover">
                                                    <div className="type-lb">
                                                        <p className="sale">Sale</p>
                                                    </div>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                            <div className="why-text full-width">
                                                <h4>Lorem ipsum dolor sit amet</h4>
                                                <h5>

                                                    <del>$ 60.00</del> $40.79
                                                </h5>
                                                <p>
                                                    Integer tincidunt aliquet nibh vitae dictum. In turpis
                                                    sapien, imperdiet quis magna nec, iaculis ultrices
                                                    ante. Integer vitae suscipit nisi. Morbi dignissim
                                                    risus sit amet orci porta, eget aliquam purus
                                                    sollicitudin. Cras eu metus felis. Sed arcu arcu,
                                                    sagittis in blandit eu, imperdiet sit amet eros. Donec
                                                    accumsan nisi purus, quis euismod ex volutpat in.
                                                    Vestibulum eleifend eros ac lobortis aliquet.
                                                    Suspendisse at ipsum vel lacus vehicula blandit et
                                                    sollicitudin quam. Praesent vulputate semper libero
                                                    pulvinar consequat. Etiam ut placerat lectus.
                                                </p>
                                                <a className="btn hvr-hover" href="#">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-view-box">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                            <div className="products-single fix">
                                                <div className="box-img-hover">
                                                    <div className="type-lb">
                                                        <p className="sale">Sale</p>
                                                    </div>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                            <div className="why-text full-width">
                                                <h4>Lorem ipsum dolor sit amet</h4>
                                                <h5>
                                                    <del>$ 60.00</del> $40.79
                                                </h5>
                                                <p>
                                                    Integer tincidunt aliquet nibh vitae dictum. In turpis
                                                    sapien, imperdiet quis magna nec, iaculis ultrices
                                                    ante. Integer vitae suscipit nisi. Morbi dignissim
                                                    risus sit amet orci porta, eget aliquam purus
                                                    sollicitudin. Cras eu metus felis. Sed arcu arcu,
                                                    sagittis in blandit eu, imperdiet sit amet eros. Donec
                                                    accumsan nisi purus, quis euismod ex volutpat in.
                                                    Vestibulum eleifend eros ac lobortis aliquet.
                                                    Suspendisse at ipsum vel lacus vehicula blandit et
                                                    sollicitudin quam. Praesent vulputate semper libero
                                                    pulvinar consequat. Etiam ut placerat lectus.
                                                </p>
                                                <a className="btn hvr-hover" href="#">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </AllProductsContext.Provider>

    )
}

export default Catalog;