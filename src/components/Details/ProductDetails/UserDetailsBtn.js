import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Alert from 'react-bootstrap/Alert';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProductContext from '../../../contexts/ProductContext.js';
import { isAuth } from '../../../hoc/isAuth.js';

const alertInitalState = { message: null, variant: null };

const ProductDetailBtns = () => {

    const navigate = useNavigate();
    const { product, isLoading } = useContext(ProductContext);
    const [size, setSize] = useState('Choose your size');
    const [quantity, setQuantity] = useState(0);
    const [alert, setAlert] = useState(alertInitalState);

    function onSizeClickHandler(e) {
        e.preventDefault();
        if (e.target.tagName == 'A' && e.target.classList.contains('active')) {
            setSize(e.target.textContent);
            setAlert(alertInitalState);
        }
    }

    function onQuantityChangeHandler(e) {
        if (e.target.value > 0) {
            setQuantity(e.target.value);
            setAlert(alertInitalState);
        }
    }

    function onAddToCart(e) {
        if (size == 'Choose your size') {
            return setAlert({
                message: 'Please select a size',
                variant: 'danger'
            });
        }

        if (quantity == 0) {
            return setAlert({
                message: 'Pleace select a quantity!',
                variant: 'danger'
            });
        }

        if (!alert.message) {
            setAlert({
                message: 'The item has been successfully added to the cart',
                variant: 'success'
            });
            console.log();
            // setTimeout(() => setAlert(alertInitalState), 2000);
            // navigate('/cart');
        }
    }

    return (
        <>
            <ul>
                <li>
                    <div className="form-group size-st">
                        <label className="size-label">Size</label>

                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            menuVariant="dark"
                            title="Dropdown button"
                            className="mt-2"
                            onClick={onSizeClickHandler}
                            title={size}
                        >
                            {
                                !isLoading
                                    ? Object.entries(product.sizesAvailable)
                                        .map(([k, v]) => {
                                            return <Dropdown.Item eventKey={k} active={v}>{k}</Dropdown.Item>
                                        })
                                    : ''
                            }

                        </DropdownButton>

                    </div>
                </li>
                <li>
                    <div className="form-group quantity-box">
                        <label className="control-label">Quantity</label>
                        <input className="form-control" onChange={onQuantityChangeHandler} defaultValue={0} min={0} max={20} type="number" />
                    </div>
                </li>
            </ul>

            <div className="price-box-bar">

                {alert
                    ? <Alert variant={alert.variant}>{alert.message}</Alert>
                    : ''
                }

                <div className="cart-and-bay-btn">
                    <a className="btn hvr-hover" data-fancybox-close="" href="#">
                        Buy New
                    </a>
                    <a className="btn hvr-hover" data-fancybox-close="" href="#" onClick={onAddToCart}>
                        Add to cart
                    </a>
                </div>
            </div>


            <div className="add-to-btn">

                <div className="add-comp">

                    <a className="btn hvr-hover" href="#">
                        <i className="fas fa-heart" /> Add to wishlist
                    </a>

                    {/*<a className="btn hvr-hover" href="#">
                        <i className="fas fa-sync-alt" /> Add to Compare
                    </a> */}
                </div>

                {/* SOCIAL MEDIA BUTTONS */}
                <div className="share-bar">
                    <a className="btn hvr-hover" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com">
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
        </>
    )
}


export default isAuth(ProductDetailBtns);