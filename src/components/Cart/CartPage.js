
import AllTitleBox from '../Common/AllTitleBox.js';
import Cart from './Cart.js';
import InstaFeed from '../Common/InstaFeed.js';
import { useCart } from '../../contexts/CartContext.js';
import { Row, Image } from 'react-bootstrap';

const CartPage = () => {

    const { cart } = useCart();
    return (
        <>
            <AllTitleBox title="Cart" />

            {
                cart.length > 0
                    ? <Cart />
                    : <Row className="justify-content-md-center">
                        <Image src='https://ik.imagekit.io/8brpz6ecl/e-commerce-react/empty_cart.png?updatedAt=1681828651912' />
                    </Row>
            }

            <InstaFeed />
        </>
    );
}

export default CartPage;