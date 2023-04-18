import { useCart } from '../../contexts/CartContext.js';
import { useAuth } from '../../contexts/AuthContext.js';
import { createOrder } from '../../services/ordersService.js'
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const onOrder = (e) => {
        e.preventDefault();
        const orderData = Object.fromEntries(new FormData(e.target));

        createOrder(orderData, user._id)
            .then(() =>{
                navigate('/products');
            });
    }

    return (
        <div className="cart-box-main">
            <div className="container">

                <div className="row">
                    <div className="col-sm-6 col-lg-6 mb-3">
                        <div className="checkout-address">
                            <div className="title-left">
                                <h3>Billing address</h3>
                            </div>
                            <form className="needs-validation" id="on-order" onSubmit={onOrder}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName">First name *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name='firstName'
                                            placeholder=""
                                            defaultValue=""
                                            required="true"
                                        />
                                        <div className="invalid-feedback">

                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Last name *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                            placeholder=""
                                            defaultValue=""
                                            required="true"
                                        />
                                        <div className="invalid-feedback">

                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address">Address *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        placeholder=""
                                        required="true"
                                    />
                                    <div className="invalid-feedback">

                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <hr className="mb-4" />
                                <div className="title">

                                    <span>Payment</span>
                                </div>
                                <div className="d-block my-3">
                                    <div className="custom-control custom-radio">
                                        <input
                                            id="onDelivery"
                                            name="onDelivery"
                                            type="radio"
                                            className="custom-control-input"
                                            defaultChecked="true"
                                            required=""
                                        />
                                        <label className="custom-control-label" htmlFor="onDelivery">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6 mb-3">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="shipping-method-box">
                                    <div className="title-left">
                                        <h3>Shipping Method</h3>
                                    </div>
                                    <div className="mb-4">
                                        <div className="custom-control custom-radio">
                                            <input
                                                id="shippingOption1"
                                                name="shipping-option"
                                                className="custom-control-input"
                                                defaultChecked="checked"
                                                type="radio"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="shippingOption1"
                                            >
                                                Standard Delivery
                                            </label>
                                            <span className="float-right font-weight-bold">FREE</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <div className="order-box">
                                    <div className="title-left">
                                        <h3>Your order</h3>
                                    </div>
                                    <div className="d-flex">
                                        <div className="font-weight-bold">Product</div>
                                        <div className="ml-auto font-weight-bold">Total</div>
                                    </div>
                                    <hr className="my-1" />
                                    <div className="d-flex">
                                        <h4>Sub Total</h4>
                                        <div className="ml-auto font-weight-bold"> $ 440 </div>
                                    </div>
                                    <div className="d-flex">
                                        <h4>Discount</h4>
                                        <div className="ml-auto font-weight-bold"> $ 40 </div>
                                    </div>
                                    <hr className="my-1" />
                                    <div className="d-flex">
                                        <h4>Coupon Discount</h4>
                                        <div className="ml-auto font-weight-bold"> $ 10 </div>
                                    </div>
                                    <div className="d-flex">
                                        <h4>Tax</h4>
                                        <div className="ml-auto font-weight-bold"> $ 2 </div>
                                    </div>
                                    <div className="d-flex">
                                        <h4>Shipping Cost</h4>
                                        <div className="ml-auto font-weight-bold"> Free </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex gr-total">
                                        <h5>Grand Total</h5>
                                        <div className="ml-auto h5"> $ 388 </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="col-12 d-flex shopping-box">

                                <button href="checkout.html" type="submit" form="on-order" className="ml-auto btn hvr-hover" >
                                    Place Order
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CheckoutPage;