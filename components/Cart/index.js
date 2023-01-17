import React from 'react'
import { useDispatch } from 'react-redux';
import { addtoCartData, decrementQty, removeFromCart } from '../../store/actions';
function Cart({ data }) {
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = React.useState(data.qty);
    const onDecrement = (itemsid) => {
        setItemCount(Math.max(itemCount - 1, 0));
        if (Math.max(itemCount - 1, 0) === 0) {
            dispatch(removeFromCart(itemsid))
        } else {
            dispatch(decrementQty(itemsid, 1))
        }

    }
    const onIncrement = (items) => {
        setItemCount(itemCount + 1);
        dispatch(addtoCartData(items, 1));
    }
    return (
        <>

            <div className="Addtocart-Items-m d-flex flex-row mt-0">
                <div className="addcart-minus" onClick={() => onDecrement(data.id)}>-</div>
                <div className="addcart-count">{itemCount}</div>
                <div className="addcart-plus" onClick={() => onIncrement(data)}>+</div>
            </div>
        </>
    )
}
export default Cart;