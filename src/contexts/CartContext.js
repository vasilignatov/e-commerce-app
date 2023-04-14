import { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const CartContext = createContext();

const initialCartState = [
    {
        productId: 'asdf',
        size: 'M',
        quantity: 1,
        product: {}
    },
    {
        productId: '1234',
        size: 'XL',
        quantity: 2,
        product: {}
    }
];


const reducer = (state, action) => {

    switch (action.type) {

        case 'addItem':

            break;
        case 'removeItem':
            let items = state.filter(i => i.productId == action.payload.productId);

            // CASE 1 -> productId doesn`t exist -> add to cart
            if (items.length == 0) {
                return [...state, Object.assign({}, action.payload)];
            }

            let result = items.filter(i => i.size == action.payload.size);
            // CASE 2 -> productId exist -> chech size (doesn`t exist same size in cart) -> add to cart
            if (items.length > 0 && result.length == 0) {
                return [...state, Object.assign({}, action.payload)];
            } else {
                // C ASE 3 -> productId exist -> same size exist -> you already add to cart / increment quantity
                const newState = JSON.parse(JSON.stringify(state));
                const index = newState.findIndex(x => x.productId == action.payload.productId)
                newState[index].quantity++;
                return [...newState];
            }

            break;
        case 'clearCart':

            break;
        default:
            throw new Error();
            break;
    }


}

const CartProvider = ({ children }) => {

    // const [cart, setCart] = useLocalStorage('cart', initalCartState);
    const [cart, dispatch] = useReducer(reducer, initialCartState, initFunc);

    dispatch('add', {
        productId: 'asdfasdf498sdc498sd',
        product: {/* PRODUCT DATA*/ },
        size: 'xxl',
        quantity: 1
    })

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
}

export default CartProvider;