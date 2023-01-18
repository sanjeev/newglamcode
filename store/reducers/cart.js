import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT_QTY, CLEAR_CART } from '../actionTypes';

export default function cartReducer(state = { cart: [] }, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // debugger;
            const productId = action.product.id;
            if (state.cart.findIndex(product => product.id === productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product, qty: product.qty + 1, sum: (product.discounted_price) * (product.qty + 1) });
                    } else {
                        cartAcc.push(product);
                    }
                    return cartAcc;
                }, [])

                return { ...state, cart }
            }

            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: (action.product.discounted_price) * action.qty }] }

        case DECREMENT_QTY:

            if (state.cart.findIndex(product => product.id === action.productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === action.productId && product.qty > 1) {
                        cartAcc.push({ ...product, qty: product.qty - 1, sum: (product.discounted_price) * (product.qty - 1) });
                    } else {
                        cartAcc.push(product);
                    }
                    return cartAcc;
                }, [])

                return { ...state, cart }
            }
            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: (action.product.discount) * action.qty }] }

        case REMOVE_FROM_CART:
            // console.log(action.product_Id);
            // const newPeople = state.cart.filter(item => item.id !== action.product_Id);
            //console.log('remove');
            return {
                cart: state.cart.filter(item => item.id !== action.product_Id)
            }
        case CLEAR_CART:
            // console.log(action.product_Id);
            // const newPeople = state.cart.filter(item => item.id !== action.product_Id);
            //console.log('remove');
            return {
                cart: []
            }

        default:
            { }
    }

    return state;
}
