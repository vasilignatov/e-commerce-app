import './ProductDetails.css';
import { useContext } from 'react';
import ProductContext from '../../../contexts/ProductContext.js';
import UserDetailsBtn from './UserDetailsBtn.js'
import { useAuth } from '../../../contexts/AuthContext';

const ProductDetails = () => {

    const { isAuthenticated } = useAuth();
    const { product } = useContext(ProductContext);

    return (
        <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="single-product-details">
                <p className="product-categories">
                    <a className="category">{product.category}</a>
                    <span> / </span>
                    <a className="subcategory">{product.subCategory}</a>
                </p>
                <h2>{product.title}</h2>
                <h5>${product.price}</h5>
                <p className="available-stock">
                    <span>
                        More than 20 available / <a href="#">{product.soldCount} sold </a>
                    </span>
                </p>
                <p></p>
                <h4>Short Description:</h4>

                <p>{product.description}</p>

                {
                    isAuthenticated && <UserDetailsBtn />
                }

            </div>
        </div>

    )
}

export default ProductDetails;