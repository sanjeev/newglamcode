
import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import { addtoCartData, decrementQty, removeFromCart } from '../../store/actions';
import { useDispatch } from 'react-redux';
import AddToCartModalView from "../Cart/AddToCartModalView";
export default function ViewCenteredModal(props) {
    const handleClose = () => props.onHide();
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = React.useState(0);
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

        //     dispatch({
        //         type: 'FETCH_DATA',
        //         data: responseData
        //    })
        dispatch(addtoCartData(items, 1));
    }
    const mapItems = (items) => {
        return (
            items.map((item, index) => {
                return (<li key={index}>
                    <i className="fa fa-snowflake-o" aria-hidden="true" />
                    {` ` + item.toString()}</li>);
            })
        );
    }
    return (
        <>
            <Modal
                {...props}
                fullscreen
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='mobilepopud'
            >
                <div onClick={handleClose} className="image-d-location-close">X</div>
                <Modal.Body>
                    <Row >
                        <Col md={6}>
                            <div className="product-single-thumb">
                                <img src={props.datato.service_image_url} alt="Luxury Party Makeup" width="544" height="560" />

                            </div>
                        </Col>
                        <Col md={6}>

                            <div className="product-details-content">
                                <h3 className="product-details-title"> {props.datato.name}</h3>
                                <div className="product-details-review mb-5">
                                    <div className="product-review-icon">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-o" />
                                    </div>
                                </div>
                                {props.datato.description && <ul className="mb-6" style={{ paddingLeft: '0px' }}>
                                    {mapItems(props.datato.description.replace(/(<([^>]+)>)/ig, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/(?:&nbsp;)/g, '')
                                        .replace(/&amp;/g, '&').toString().split('.'))}
                                </ul>}
                                <p className="mb-6"> </p>
                                <div className="product-details-pro-qty">
                                    <AddToCartModalView data={props.datato} />
                                </div>
                                <div className="product-details-action">
                                    <div className="product-item prices">
                                        <span className="price">₹ {props.datato.discounted_price}</span>
                                        <span
                                            className="price-old"
                                            style={{ textDecorationLine: "line-through" }}
                                        >
                                            ₹ {props.datato.price}
                                        </span>
                                    </div>
                                    <div className="product-details-cart-wishlist" style={{ marginLeft: '35px' }}>
                                        <button type="button" className="btn">
                                            <i className="fa fa-clock-o" />
                                            {props.datato.time} {props.datato.time_type}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Modal.Body>
            </Modal>
        </>
    )
}