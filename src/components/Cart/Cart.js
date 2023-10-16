import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext.js'
import CartItem from './CartItem.js';
import { isAuth } from '../../hoc/isAuth.js'

const Cart = () => {

   const navigate = useNavigate();
   const {
      cart, dispatch,
      discount, setDiscount,
      total, setTotal,
      grandTotal, setGrandTotal
   } = useCart();

   useEffect(() => {
      onRefresh();
   }, [total, grandTotal, cart, discount]);

   const onApplyCoupon = (e) => {
      e.preventDefault();
      let { currentCoupone } = Object.fromEntries(new FormData(e.currentTarget));
      currentCoupone = Number(currentCoupone);

      if (currentCoupone > 0 && currentCoupone <= 20) {
         setDiscount(currentCoupone);
      }
   }

   const onRefresh = (e) => {
      setTotal(cart.reduce((a, c) => a += c.total, 0));
      setGrandTotal(Number(total) - discount);
   }

   const onCheckout = (e) => {
      navigate('/cart/checkout');
   }

   return (
      <div className="cart-box-main">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="table-main table-responsive">

                     <table className="table">
                        <thead>
                           <tr>
                              <th>Images</th>
                              <th>Product Name</th>
                              <th>Price</th>
                              <th>Size</th>
                              <th>Quantity</th>
                              <th>Total</th>
                              <th>Remove</th>
                           </tr>
                        </thead>
                        <tbody>

                           {
                              cart.map((item, i) => <CartItem key={i} item={item} dispatch={dispatch} onRefresh={onRefresh} />)
                           }

                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div className="row my-5">
               <div className="col-lg-6 col-sm-6">
                  <div className="coupon-box">
                     <form className="input-group input-group-sm" onSubmit={onApplyCoupon}>
                        <input
                           name="currentCoupone"
                           className="form-control"
                           placeholder="Enter your coupon code"
                           aria-label="Coupon code"
                           type="text"
                        />
                        <div className="input-group-append">
                           <button className="btn btn-theme" type="submit" >
                              Apply Coupon
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="col-lg-6 col-sm-6">
                  <div className="update-box">
                     <input value="Update Cart" type="submit" onClick={onRefresh} />
                  </div>
               </div>
            </div>

            <div className="row my-5">
               <div className="col-lg-8 col-sm-12" >
               </div>
               <div className="col-lg-4 col-sm-12">
                  <div className="order-box">
                     <h3>Order summary</h3>
                     <div className="d-flex">
                        <h4>Sub Total</h4>
                        <div className="ml-auto font-weight-bold"> $ {total.toFixed(2)} </div>
                     </div>
                     <hr className="my-1" />
                     <div className="d-flex">
                        <h4>Coupon Discount</h4>
                        <div className="ml-auto font-weight-bold"> $ {discount} </div>
                     </div>
                     <div className="d-flex">
                        <h4>Shipping Cost</h4>
                        <div className="ml-auto font-weight-bold"> Free </div>
                     </div>
                     <hr />
                     <div className="d-flex gr-total">
                        <h5>Grand Total</h5>
                        <div className="ml-auto h5"> $ {grandTotal.toFixed(2)} </div>
                     </div>
                     <hr />
                  </div>
               </div>
               <div className="col-12 d-flex shopping-box">
                  <button onClick={onCheckout} className="ml-auto btn hvr-hover">
                     Checkout
                  </button>
               </div>
            </div>

         </div>
      </div>
   )
}

export default isAuth(Cart);