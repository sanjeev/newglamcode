import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import Addcart from '../components/Cart'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coupon from '../components/Coupon/Coupon';
import { frontService } from '../_services/front.services';
import { toast } from 'react-toastify';
import { clearCart } from '../store/actions';
function Payment() {
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cardAdd?.cart);
    const userAddress = useSelector(state => state.userAddress?.useraddress);
    const [total, setTotal] = React.useState(0);
    const [couponModal, setCouponModal] = useState(false)
    const [coupon, setCoupon] = useState(null)
    const [sending, setSending] = useState(false)
    const [pType, setPType] = useState("cash")

    useEffect(() => {
        if (!localStorage.getItem('gluserDetails')) {
            router.push("/login")
        }
        var total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += parseInt(cart[i].sum);
        }
        setTotal(total);
    }, [cart]);


    const onSubmit = () => {
        const id = JSON.parse(localStorage.getItem('gluserDetails')).id
        const data = {
            deal_id: "", deal_quantity: "", user_id: id, date_time: new Date(),
            status: "pending", payment_gateway: pType, total_amount: total, discount: "",
            coupon_id: coupon ? coupon.id : "", coupon_discount: "",
            discount_percent: "0", tax_name: "",
            tax_percent: "", tax_amount: "",
            extra_fees: "49", distance_fee: "",
            amount_to_pay: total, payment_status: "pending",
            additional_notes: "", item_details: cart.map(e => {
                return {
                    business_service_id: e.business_service_id || e.id,
                    unit_price: e.price,
                    quantity: e.qty,
                    amount: e.price * e.qty
                }
            })
        }
        setSending(true)
        frontService.bookOrder(data)
            .then(
                res => {
                    if (res.status == 'success') {
                        dispatch(clearCart())
                        toast(res.message, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        router.push("/confirmation")
                    } else if (res.status == 'fail') {
                        setSending(true)
                        toast(res.message, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                    } else {
                        setSending(true)
                        toast('Invalid', {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                    }
                }, error => {
                    toast('Invalid', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setSending(false)
                }
            )
    };
    const mapItems = (items) => {
        return (
            items.map((item, index) => {
                return (<li key={index} className="text" style={{ listStyle: 'disc', }}>{` ` + item.toString()}</li>);
            })
        );
    }
    // console.log(cart);
    return (<>
        <Coupon show={couponModal} coupon={coupon} setCoupon={setCoupon} handleClose={() => { setCouponModal(!couponModal) }} />
        <div className="servicedesk-bg checkout-all" style={{ paddingBottom: '50px' }}>
            <div className="header-css-head">
                <Container fluid >
                    <div className="d-flex flex-row" onClick={() => router.back()}>
                        <div className="icon-alignments">
                            <i className="fa fa-chevron-left fontSize-m-20" />
                        </div>
                        <p className="inside-text-head">Payment</p>
                    </div>
                </Container>
            </div>
            <Row className='mt-5 card-container'>
                <Col md={1}></Col>
                <Col md={5}>

                    {cart.length > 0 ? (<>

                        <div className="row card-container">
                            {cart.map((item, index) => (<>

                                <div className="col-12 p-md-5 pt-md-3 pb-md-0 p-2" key={index}>
                                    <div className="servicesMD row servicesMD-bg-color-1">
                                        <a className="col-4 p-0" href="#">
                                            <img
                                                className="image"
                                                src={item.service_image_url}
                                                alt={item.name}

                                            />
                                        </a>
                                        <div className="col-8 pt-1 position-relative">
                                            <div className="title">
                                                <a href="#"> {item.name}</a>
                                            </div>
                                            <div className="d-flex flex-row mt-2">
                                                <div className="Price">₹{item.price}</div>
                                                <div className="p-rl-2 offerPrice">₹{item.discounted_price}</div>
                                                <div className="p-rl-2 discountTitle">{item.discount}%</div>
                                            </div>
                                            <div className="d-flex flex-column-m mt-2">
                                                <p className="p-rl-1 ratting" style={{ fontSize: 12 }}>
                                                    <i className="fa fa-star" /> {Math.round(item.rating_pop / 1000)}K reviews
                                                </p>


                                                <p className="p-rl-1 time-settings" style={{ fontSize: 12, marginLeft: '15px', marginTop: '2px' }}><i className="fa fa-clock-o"></i>
                                                    {item.time + ` ` + item.time_type}
                                                </p>
                                            </div>
                                            <Addcart data={item} />

                                            <div className="lineDiv" />
                                            <div className="descriptionServices">
                                                <ul className="p-2" style={{ fontSize: 10, }}>
                                                    {mapItems(item.description.replace(/(<([^>]+)>)/ig, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/(?:&nbsp;)/g, '')
                                                        .replace(/&amp;/g, '&').toString().split('.'))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                            )}


                        </div>

                    </>) : (<>
                        No Data
                    </>)

                    }
                </Col>
                <Col md={1}></Col>
                <Col md={4}>
                    <div className="section-address">
                        <a href="/myaddress" className="inside-title" style={{ fontSize: 22 }}>Address<span className="inside-checkall"><i className="fa fa-edit"></i></span></a>

                        <p className="inside-items">{userAddress?.address_heading},{userAddress?.address},{userAddress?.street}</p>
                    </div>
                    <div className="timeSlot-all">
                        <p className="inside-title">Summary</p>

                        <div className="row-m-check">

                            <div className="col-12">
                                <div className="d-flex flex-row justify-content-between-flex">
                                    <p className="p-1 font-family-alata">Service Charge</p>
                                    <p className="p-1 font-family-alata">₹ {total}</p>
                                </div>
                            </div>


                            <div className="col-12">
                                <div className="d-flex flex-row justify-content-between-flex">
                                    <p className="p-1 font-family-alata">Transport Fees</p>
                                    <p className="p-1 font-family-alata">₹ 0</p>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="d-flex flex-row justify-content-between-flex">
                                    <p className="p-1 font-family-alata"> Safety & Hygiene Fee</p>
                                    <p className="p-1 font-family-alata">₹ 49</p>
                                </div>
                            </div>


                            <div className="col-12">
                                <div className="d-flex flex-row justify-content-between-flex">
                                    <p className="p-1 font-family-alata">Coupon</p>
                                    <p className="p-1 font-family-alata">-₹ 0</p>
                                </div>
                            </div>

                            <div className="col-12" >
                                <div className="d-flex flex-row justify-content-between-flex">
                                    <p className="p-1 font-family-alata">Total Service Amount Payable</p>
                                    <p className="p-1 font-family-alata">₹ 0</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='timeSlot-all'>
                        <p className="inside-title">Summary</p>
                        <div className="col-12 mt-2">
                            <div className="background-deflex" onClick={() => setCouponModal(true)}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div>
                                            <i className="fa fa-tag fontSize-m-20"></i>
                                        </div>
                                        <div style={{ marginLeft: '10px' }} >
                                            Apply Coupon
                                        </div>
                                    </div>

                                    <div>
                                        <i className="fa fa-chevron-right fontSize-m-20"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="background-deflex"
                                onClick={() => { setPType("razorpay") }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                    onClick={() => { setPType("razorpay") }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div>
                                            <i className="fa fa-credit-card fontSize-m-20" aria-hidden="true"></i>
                                        </div>
                                        <div style={{ marginLeft: '10px' }}>
                                            Card & Upi
                                        </div>
                                    </div>

                                    <div>
                                        {pType === "razorpay" && "Selected"}
                                        <i className="fa fa-chevron-right fontSize-m-20"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="background-deflex"
                                onClick={() => { setPType("cash") }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}                                >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div>
                                            <i className="fa fa-inr fontSize-m-20" aria-hidden="true"></i>
                                        </div>
                                        <div style={{ marginLeft: '10px' }}>
                                            Cash
                                        </div>
                                    </div>
                                    <div>
                                        {pType === "cash" && "Selected"}
                                        <i className="fa fa-chevron-right fontSize-m-20"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="checkoutBtn-container ">
                        <button className="checkoutBtn-all" type='button'
                            disabled={cart.length === 0 || sending}
                            onClick={onSubmit} >{sending ? "Booking" : "Book Order"}</button>
                    </div>
                </Col>
                <Col md={1}></Col>


            </Row>
        </div>
    </>);
}
export default Payment;