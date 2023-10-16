import { useContext } from 'react';
import ProductContext from '../../../contexts/ProductContext.js';

const ProductImage = () => {

    const { product } = useContext(ProductContext);

    return (
        <div className="col-xl-5 col-lg-5 col-md-6" >
            <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">

                <div className="carousel-inner" role="listbox">
                    <img
                        className="d-block w-100"
                        src={product?.images[0]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductImage;