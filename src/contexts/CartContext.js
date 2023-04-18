import { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext();

const createInitialCartState = (initialState) => {
    const current = localStorage.getItem('cart');

    if (!current) {
        localStorage.setItem('cart', JSON.stringify(initialState));

        return initialState;
    }

    return JSON.parse(current);
}

const reducer = (state, action) => {

    switch (action.type) {

        case 'ADD_ITEM':
            let items = state.filter(i => i.productId == action.payload.productId);

            // CASE 1 -> productId doesn`t exist -> add to cart
            if (items.length == 0) {
                try {
                    const newState = [...state, Object.assign({}, action.payload)];
                    localStorage.setItem('cart', JSON.stringify(newState));
                    return newState;
                } catch (error) {
                    console.log(error);
                }
            }

            let result = items.filter(i => i.size == action.payload.size);
            // CASE 2 -> productId exist -> chech size (doesn`t exist same size in cart) -> add to cart
            if (items.length > 0 && result.length == 0) {
                try {
                    const newState = [...state, Object.assign({}, action.payload)];
                    localStorage.setItem('cart', JSON.stringify(newState));
                    return newState;
                } catch (error) {
                    console.log(error);
                }
            } else {
                // CASE 3 -> productId exist -> same size exist -> you already add to cart / increment quantity
                try {
                    const newState = JSON.parse(JSON.stringify(state));
                    const index = newState.findIndex(x => (x.productId === action.payload.productId) && (x.size === action.payload.size));
                    newState[index] = action.payload;
                    localStorage.setItem('cart', JSON.stringify(newState));
                    return newState;

                } catch (error) {
                    console.log(error);
                }
            }

        case 'REMOVE_ITEM':
            try {
                const newState = state.filter(x => (x.productId !== action.payload.productId) && (x.size !== action.payload.size));
                console.log(action.payload);
                localStorage.setItem('cart', JSON.stringify(newState));
                return newState;
            } catch (error) {
                console.log(error);
            }

        case 'CLEAR_CART':
            try {
                localStorage.removeItem('cart');
                return [];
            } catch (error) {
                console.log(error);
            }
        default:
            throw new Error('Wrong action type');
    }


}

const CartProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(reducer, [], createInitialCartState);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    return (
        <CartContext.Provider value={{ cart, dispatch, discount, setDiscount, total, setTotal, grandTotal, setGrandTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
}

export default CartProvider;