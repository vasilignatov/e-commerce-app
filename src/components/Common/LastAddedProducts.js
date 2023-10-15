import ProductsCardSmall from '../Products/Catalog/ProductCardSmall.js';
import { getLastAdded } from '../../services/productService';
import { useState, useEffect } from 'react';

const LastAddedProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const productsData = await getLastAdded();
            console.log(productsData);
            setProducts(productsData);
        })();
    },[]);

    return (
        <div className="products-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-all text-center">
                            <h1>Last Added Products</h1>
                            <p>
                                Last added products in the shop
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row special-list">

                    {
                        products?.map(x => <ProductsCardSmall key={x._id} data={x} />)
                    }

                </div>
            </div>
        </div>

    )
}

export default LastAddedProducts;