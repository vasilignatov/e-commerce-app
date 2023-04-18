import { useState } from 'react';
import { useCart } from '../../contexts/CartContext.js'
import CartItem from './CartItem.js';
import { isAuth } from '../../hoc/isAuth.js'

const Cart = () => {
   const { cart, dispatch } = useCart();
   const [discount, setDiscount] = useState(0);
   const total = cart.reduce((a, c) => a += c.total, 0);

   const onApplyCoupon = (e) => {
      e.preventDefault();
      let { currentCoupone } = Object.fromEntries(new FormData(e.currentTarget));
      currentCoupone = Number(currentCoupone);

      if (currentCoupone > 0 && currentCoupone <= 20) {
         setDiscount(currentCoupone);
      }
   }

   const onCheckOut = () => {
      
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
                              cart.map(item => <CartItem key={item.productId} item={item} dispatch={dispatch} />)
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
                     <input defaultValue="Update Cart" type="submit" />
                  </div>
               </div>
            </div>

            <div className="row my-5">
               <div className="col-lg-8 col-sm-12" />
               <div className="col-lg-4 col-sm-12">
                  <div className="order-box">
                     <h3>Order summary</h3>
                     <div className="d-flex">
                        <h4>Sub Total</h4>
                        <div className="ml-auto font-weight-bold"> $ {total} </div>
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
                        <div className="ml-auto h5"> $ {total - discount} </div>
                     </div>
                     <hr />
                  </div>
               </div>
               <div className="col-12 d-flex shopping-box">
                  <a href="checkout.html" className="ml-auto btn hvr-hover">
                     Checkout
                     </a>
               </div>
            </div>

         </div>
      </div>
   )
}

export default isAuth(Cart);