import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { frontService } from "../../_services/front.services";

export default function Coupon(props) {
    const { show, handleClose, coupon, setCoupon } = props
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        frontService.coupons()
            .then(
                res => {
                    if (res.status === 'success') {
                        setCoupons(res.couponData);
                    } else {
                        console.log('Something went wrong !!');
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                }
            )

    }, []);
    return (<Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='mobilepopud coupon-modal'>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" >
                Coupon and Offers
            </Modal.Title>

        </Modal.Header>
        <Modal.Body>
            <div className="form-group mb-2">
                <div className='search-box mt-0'>
                    <div className='search-conatiner me-0'>
                        <input className='search-input' placeholder='Apply Coupon Code' />
                        <button className='search-btn pe-2' type='button'>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
            <div className="row ">
                {coupons.map((e, i) => {
                    return <div className="col-lg-12 mt-xl-2" key={e.id}>
                        <div className="row justify-content-between">
                            {/* <div className="col-lg-3 col-3 text-center">
                                <img src="/paytm.png" alt="logo" className="logo" />
                            </div> */}
                            <div className="col-lg-7 col-9">
                                <p className="title">{e.title}</p>
                                <p className="disacount-amount">Upto ₹500 off</p>
                                <p className="save-amount">Save ₹{e.amount} on this order</p>
                                <p className="t-and-c">View T&C</p>
                            </div>
                            <div className="col-lg-2 col-3 text-end" onClick={() => {
                                setCoupon(e)
                                handleClose()
                            }}>
                                <p className="apply-btn" role="button">Apply</p>
                            </div>
                        </div>
                        {i === (coupons.length - 1) ? "" : <hr />}
                    </div>
                })}
            </div>
        </Modal.Body>
    </Modal>
    )
}