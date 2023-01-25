import * as types from '../actionTypes';
export function menuSave(payload) {
    return {
        type: types.HOME_DATA,
        payload: payload,
    }
}

export function userData(payload) {
    return {
        type: types.USERDATA,
        payload: payload,
    }
}
export function userAddress(payload) {
    return {
        type: types.USERADDRESS,
        payload: payload,
    }
}


export function mainCategory(payload) {
    return {
        type: types.MAIN_CATEGORY,
        payload: payload,
    }
}

export function mainLocation(payload) {
    return {
        type: types.LOCATION,
        payload: payload,
    }
}
export function addToCart(product, qty) {
    // console.log("Item Added to Cart !!");
    dispatch(addtoCartData(product, qty))
}

// export const addToCart = (product, qty) => (dispatch) => {

//     console.log("Item Added to Cart !!");
//     console.log(product);
//     //dispatch(addtoCartData(product, qty));
// };
export const decrementQty = (productId) => ({
    type: types.DECREMENT_QTY,
    productId
});
export const addtoCartData = (product, qty) => ({
    type: types.ADD_TO_CART,
    product,
    qty
});
export const removeFromCart = (productId) => ({
    type: types.REMOVE_FROM_CART,
    product_Id: productId
});

export const clearCart = () => ({
    type: types.CLEAR_CART,
    product_Id: ""
});

// export const removeFromCart = productId => (dispatch) => {

//     dispatch({
//         type: types.REMOVE_FROM_CART,
//         product_Id: productId
//     });
// }
export const AddToCartAndRemoveWishlist = (product, qty) => (dispatch) => {
    toast.success("Item Added to Cart !!");
    dispatch(addToCart(product, qty));
    dispatch(removeFromWishlist(product.id));
}

// export const removeFromCart = productId => (dispatch) => {
//     toast.success("Item Removed from Cart !!");
//     dispatch({
//         type: types.REMOVE_FROM_CART,
//         product_Id: productId
//     });
// }


// export const decrementQty = (productId) => ({
//     type: types.DECREMENT_QTY,
//     productId
// });
// export const decrementQty = (productId) => ({
//     type: types.DECREMENT_QTY,
//     productId
// });
// export function decrementQty(productId) {
//     return {
//         type: types.DECREMENT_QTY,
//         productId
//     }
// }

// export const decrementQty = (productId) => (dispatch) => {
//     toast.success("Item Decrement Qty to Cart !!");
//     dispatch({
//         type: types.DECREMENT_QTY,
//         productId
//     });
// }

export const incrementQty = (product, qty) => (dispatch) => {
    toast.success("Item Added to Cart !!");
    dispatch(addtoCartData(product, qty));
}