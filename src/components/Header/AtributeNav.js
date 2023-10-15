import { useAuth } from '../../contexts/AuthContext.js';
import { useCart } from '../../contexts/CartContext.js';
import { useNavigate, Link } from 'react-router-dom';
import * as authService from '../../services/authService.js';

const AtributeNav = ({ setIsVisible }) => {

    const { user, tokens, onLogout } = useAuth();
    const { cart } = useCart();
    const navigate = useNavigate();

    function onAuthClickHandler(e) {
        e.preventDefault();
        if (e.target.tagName == 'A' || e.target.tagName == 'LI') {
            setIsVisible(true);
        }
    }

    async function onLogoutHandler(e) {
        e.preventDefault();
        await authService.logout({ refreshToken: tokens.refreshToken });
        onLogout();
        navigate('/');
    }

    const userNav = (
        <>
            <li className="cart">
                <Link to="/cart">
                    <i className="fa fa-shopping-bag"></i>
                    <span className="badge">{cart.length}</span>
                </Link>
            </li>

            <li className="dropdown">
                <span className='dropdown__container'>
                    <i className="fa fa-user" ></i>
                </span>
                <ul className="dropdown-menu">
                    <div className="profile-icon">
                        <p className="text-center font-weight-bold">
                            Welcome, <span className="font-italic">{user.username}</span>
                        </p>
                    </div>
                    <li><Link to="" onClick={onLogoutHandler}>Log Out</Link></li>
                    <li><Link to="/profile/my-orders">My Orders</Link></li>
                    <li><Link to="/profile/whishlist">Wishlist</Link></li>
                </ul>
            </li>
        </>
    );

    const guestNav = (
        <li className="auth" onClick={onAuthClickHandler}>
            <a href="#" className="btn">
                Login/Register
            </a>
        </li>
    );

    return (
        <div className="attr-nav">
            <ul>
                {
                    user.email
                        ? userNav
                        : guestNav
                }
            </ul >
        </div >
    )
}

export default AtributeNav;