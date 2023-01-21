import { useDispatch, useSelector } from "react-redux";
import { addtoCartData, decrementQty, removeFromCart } from "../../store/actions";

export default function AddToCartModalView({ data }) {
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
        {inCart.length > 0 ? <div className="Addtocart-Items d-flex flex-row">
            <div className="pro-qty">
                <div className="dec qty-btn" onClick={() => onDecrement(data.id)}>-</div>
                <input type="text" title="Quantity" readOnly={true} value={inCart[0].qty} />
                <div className="inc qty-btn" onClick={() => onIncrement(data)}>+</div>
            </div>
        </div> :
            <div className="pro-qty" role="button">
                <div className="align-items-center justify-content-center Addtocart d-flex gap-3 input" onClick={() => onIncrement(data)}>
                    Add
                </div>
            </div>}
    </>
    )
}