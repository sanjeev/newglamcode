import { useDispatch, useSelector } from "react-redux";
import { addtoCartData, decrementQty, removeFromCart } from "../store/actions";

export default function AddToCart({ data }) {
    const cart = useSelector(state => state.cardAdd?.cart)
    const dispatch = useDispatch();
    const inCart = cart.filter((e) => e.id === data.id)

    const onDecrement = (itemsid) => {
        if (Math.max(inCart[0].qty - 1, 0) === 0) {
            dispatch(removeFromCart(itemsid))
        } else {
            dispatch(decrementQty(itemsid, 1))
        }

    }
    const onIncrement = (items) => {
        dispatch(addtoCartData(items, 1));
    }

    return (<>
        {inCart.length > 0 ? <div className="mt-0 Addtocart-Items-m Addtocart d-flex gap-xl-3 gap-1">
            <div className="addcart-minus" onClick={() => onDecrement(data.id)}>-</div>
            <div className="addcart-count">{inCart[0].qty}</div>
            <div className="addcart-plus" onClick={() => onIncrement(data)}>+</div>
        </div> :
            <div className="Addtocart d-flex gap-3" onClick={() => onIncrement(data)}>
                Add
            </div>}
    </>
    )
}