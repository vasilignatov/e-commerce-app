import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { endpoints } from '../../endpoints.js';
import useFetch from '../../hooks/useFetch.js';
import Carousel from './Carousel/Carousel.js';
import ProductDetails from './ProductDetails/ProductDetails.js';
import ProductContext from '../../contexts/ProductContext.js';
import FeaturedProducts from '../Common/FeaturedProducts.js';

const DetailsPage = () => {
    const { id } = useParams();
    const { state: product, isLoading } = useFetch(endpoints.getProductById + id);

    return (
        <ProductContext.Provider value={{ product, isLoading }}>
            <div className="shop-detail-box-main">
                <div className="container">
                    <div className="row">
                        <Carousel />

                        <ProductDetails />
                    </div>


                    <FeaturedProducts />


                </div>
            </div>
        </ProductContext.Provider>
    )
}

export default DetailsPage;