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
        {inCart.length > 0 ? <div className="mt-0 Addtocart-Items-m Addtocart d-inline-flex gap-xl-3 gap-1 position-relative w-auto">
            <div className="addcart-minus" onClick={() => onDecrement(data.id)}>-</div>
            <div className="addcart-count">{inCart[0].qty}</div>
            <div className="addcart-plus" onClick={() => onIncrement(data)}>+</div>
        </div> :
            <div id="cart-btn" className="position-relative d-inline-flex">
                <div className="Addtocart position-relative d-inline-flex gap-3" onClick={() => onIncrement(data)}>
                    Add
                </div>
            </div>}
        {/* {inCart.length > 0 ? <div className="Addtocart-Items d-flex flex-row">
            <div className="pro-qty">
                <div className="dec qty-btn" onClick={() => onDecrement(data.id)}>-</div>
                <input type="text" title="Quantity" readOnly={true} value={inCart[0].qty} />
                <div className="inc qty-btn" onClick={() => onIncrement(data)}>+</div>
            </div>
        </div> :
            <div className="pro-qty" role="button">
                <div className="align-items-center justify-content-center Addtocart d-inline-flex gap-3 input" onClick={() => onIncrement(data)}>
                    Add
                </div>
            </div>} */}
    </>
    )
}