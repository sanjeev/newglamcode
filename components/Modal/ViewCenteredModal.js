
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
                                <ul className="mb-6" style={{ paddingLeft: '0px' }}>
                                    {mapItems(props.datato.description.replace(/(<([^>]+)>)/ig, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/(?:&nbsp;)/g, '')
                                        .replace(/&amp;/g, '&').toString().split('.'))}
                                </ul>
                                <p className="mb-6"> </p>
                                <div className="product-details-pro-qty">
                                    <div className="Addtocart-Items d-flex flex-row">
                                        <div className="pro-qty">
                                            <div className="dec qty-btn" onClick={() => onDecrement(props.datato)}>-</div>
                                            <input type="text" title="Quantity" readOnly="" value={itemCount} />

                                            <div className="inc qty-btn" onClick={() => onIncrement(props.datato)}>+</div>
                                        </div>
                                        {/* <div className="addcart-plus" >-</div>
                                        <div className="addcart-count">{itemCount}</div>
                                        <div className="addcart-minus" >+</div> */}
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
                                    <div className="product-details-cart-wishlist" style={{ marginLeft: '35px' }}>
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