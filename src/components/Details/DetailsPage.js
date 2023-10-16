import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { endpoints } from '../../endpoints.js';
import useFetch from '../../hooks/useFetch.js';
import ProductImage from './ProductImage/ProductImage.js';
import ProductDetails from './ProductDetails/ProductDetails.js';
import ProductContext from '../../contexts/ProductContext.js';
import LastAddedProducts from '../Common/LastAddedProducts.js';

const DetailsPage = () => {
    const { id } = useParams();
    const { state: product, isLoading } = useFetch(endpoints.getProductById + id);

    return (
        <ProductContext.Provider value={{ product, isLoading }}>
            <div className="shop-detail-box-main">
                <div className="container">
                    <div className="row">
                        {
                            !isLoading && <ProductImage product={product} />
                        }

                        <ProductDetails />
                    </div>

                    <LastAddedProducts />

                </div>
            </div>
        </ProductContext.Provider>
    )
}

export default DetailsPage;