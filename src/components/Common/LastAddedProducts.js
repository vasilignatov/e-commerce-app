import useFetch from "../../hooks/useFetch";
import { endpoints } from '../../endpoints.js';
import ProductsCardSmall from '../Products/Catalog/ProductCardSmall.js';

const LastAddedProducts = () => {

    const { state: products } = useFetch(endpoints.getProducts);

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
                        products.map(x => <ProductsCardSmall key={x._id} data={x} />)
                    }

                </div>
            </div>
        </div>

    )
}

export default LastAddedProducts;