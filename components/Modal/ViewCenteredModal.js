
import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
export default function ViewCenteredModal(props) {
    const handleClose = () => props.onHide();
    const [itemCount, setItemCount] = React.useState(0);
    const onDecrement = (items) => {
        setItemCount(Math.max(itemCount - 1, 0));
    }
    const onIncrement = (items) => {
        setItemCount(itemCount + 1);
    }
    console.log(props);
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
                                <h3 class="product-details-title"> {props.datato.name}</h3>
                                <div className="product-details-review mb-5">
                                    <div className="product-review-icon">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-o" />
                                    </div>
                                </div>
                                <ul className="mb-6">
                                    <li> Rica Roll On wax</li>
                                </ul>
                                <p className="mb-6"> </p>
                                <div className="product-details-pro-qty">
                                    <div className="Addtocart-Items d-flex flex-row">
                                        <div className="addcart-plus" onClick={() => onDecrement(props.datato)}>-</div>
                                        <div className="addcart-count">{itemCount}</div>
                                        <div className="addcart-minus" onClick={() => onIncrement(props.datato)}>+</div>
                                    </div>
                                </div>
                                <div className="product-details-action">
                                    <div className="product-item prices">
                                        <span className="price">₹499</span>
                                        <span
                                            className="price-old"
                                            style={{ textDecorationLine: "line-through" }}
                                        >
                                            ₹713
                                        </span>
                                    </div>
                                    <div className="product-details-cart-wishlist">
                                        <button type="button" className="btn">
                                            <i className="fa fa-clock-o" />
                                            25 minutes{" "}
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