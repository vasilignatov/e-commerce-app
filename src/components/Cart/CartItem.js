import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext.js';

const CartItem = ({ item, dispatch }) => {

    // const { cart, dispatch } = useCart();

    const onChangeQuantity = (e) => {
        e.preventDefault();
        if (e.currentTarget.value > 0) {
            let editedItem = Object.assign({}, item);
            editedItem.quantity = Number(e.currentTarget.value);
            editedItem.total = editedItem.quantity * editedItem.product.price;

            dispatch({
                type: 'ADD_ITEM',
                payload: editedItem
            });
        }
    }

    const onRemoveItem = (e) => {
        if (e.target.tagName == "A" || e.target.tagName == 'I') {
            e.preventDefault();
            dispatch({
                type: 'REMOVE_ITEM',
                payload: Object.assign({}, item)
            });
        }
    }

    return (
        <tr>
            <td className="thumbnail-img">
                <Link to={`/products/${item.productId}`}>
                    <img
                        className="img-fluid"
                        src={item.product.images[0]}
                        alt="Item image"
                    />
                </Link>
            </td>
            <td className="name-pr">
                <Link to={`/products/${item.productId}`}>
                    {item.product.title}
                </Link>
            </td>
            <td className="price-pr">
                <p>$ {item.product.price}</p>
            </td>
            <td className="price-pr">
                <p>{item.size}</p>
            </td>
            <td className="quantity-box">
                <input
                    onChange={onChangeQuantity}
                    type="number"
                    size={4}
                    value={item.quantity}
                    min={0}
                    step={1}
                    className="c-input-text qty text"
                />
            </td>
            <td className="total-pr">
                <p>$ {item.total}</p>
            </td>
            <td className="remove-pr">
                <a href="#" onClick={onRemoveItem}>
                    <i className="fas fa-times" />
                </a>
            </td>
        </tr>
    )
}

export default CartItem;