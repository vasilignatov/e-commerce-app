import ProductFilterRow from './ProductFilterRow.js';
import ProductCardSmall from './ProductCardSmall.js';
import useFetch from '../../../hooks/useFetch';
import { endpoints } from '../../../endpoints.js';
import { AllProductsContext } from '../../../contexts/AllProductsContext.js';
import { useParams } from 'react-router-dom';

const Catalog = () => {
    const { gender, category } = useParams();
    const queryString = gender !== '' && category
        ? `?gender=${gender}&category=${category}`
        : '';
    const { state: products } = useFetch(endpoints.getProducts + queryString);

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
                                        products.map(p => <ProductCardSmall key={p._id} data={p} isSub={Boolean(gender)} />)
                                    }

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