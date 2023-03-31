import { useContext } from 'react';
import ProductContext from '../../contexts/ProductContext.js';

const ProductDetails = () => {

    const product = useContext(ProductContext);

    return (
        <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="single-product-details">
                <h2>{product.title}</h2>
                <h5>${product.price}</h5>
                <p className="available-stock">
                    <span>
                        More than 20 available / <a href="#">8 sold </a>
                    </span>
                </p>
                <p></p>
                <h4>Short Description:</h4>

                <p>{product.description}</p>

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

    )
}

export default ProductDetails;