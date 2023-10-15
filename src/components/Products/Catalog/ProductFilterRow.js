import { useContext } from 'react';
import { AllProductsContext } from '../../../contexts/AllProductsContext.js';

const ProductFilterRow = () => {

    const products = useContext(AllProductsContext);

    return (
        <div className="product-item-filter row">
            <div className="col-12 col-sm-8 text-center text-sm-left">
                {/* <div className="toolbar-sorter-right">
                    <span>Sort by </span>
                    <select
                        id="basic"
                        className="selectpicker show-tick form-control"
                        data-placeholder="$ USD"
                    >
                        <option data-display="Select">Nothing</option>
                        <option value={1}>Popularity</option>
                        <option value={2}>High Price → High Price</option>
                        <option value={3}>Low Price → High Price</option>
                        <option value={4}>Best Selling</option>
                    </select>
                </div> */}
                {
                    products.length > 0
                        ? products.length === 1
                            ? <p>Showing 1 result</p>
                            : <p>Showing all { products.length } results</p>
                        : <p>No results to show</p>
                }
            </div>
            <div className="col-12 col-sm-4 text-center text-sm-right">
                {/* <ul className="nav nav-tabs ml-auto">
                    <li>
                        <a
                            className="nav-link active"
                            href="#grid-view"
                            data-toggle="tab"
                        >
                            <i className="fa fa-th" />
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#list-view" data-toggle="tab">
                            <i className="fa fa-list-ul" />
                        </a>
                    </li>
                </ul> */}
            </div>
        </div>

    )
}

export default ProductFilterRow;