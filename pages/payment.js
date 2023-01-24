import Logo from "/glamcode.png"
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coupon from '../components/Coupon/Coupon';
import { frontService } from '../_services/front.services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearCart } from '../store/actions';
import useRazorpay from "react-razorpay";
import AddToCart from "../components/Cart/AddToCart";
import LoginModal from "../components/Login";

function Payment() {
    const Razorpay = useRazorpay()
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cardAdd?.cart);
    const userAddress = useSelector(state => state.userAddress?.useraddress);
    const [total, setTotal] = React.useState(0);
    const [couponModal, setCouponModal] = useState(false)
    // const [coupon, setCoupon] = useState(null)
    const [sending, setSending] = useState(false)
    const [pType, setPType] = useState("cash")
    const [update, setUpdate] = useState(1)
    const coupon_id = localStorage.getItem("coupon_id")
    const coupon_amount = localStorage.getItem("coupon_amount")
    const coupon_min = localStorage.getItem("coupon_min")

    const user = JSON.parse(localStorage.getItem('gluserDetails'))
    console.log(user)

    // console.log(userAddress)
    useEffect(() => {
        if (!localStorage.getItem('gluserDetails')) {
            // router.push("/login")
        }
        var total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += parseInt(cart[i].sum);
        }
        setTotal(total);
    }, [cart]);

    const finalTotal = (Math.round(total) + 49) - (coupon_id ? Math.round(coupon_amount) : 0)

    const onSubmit = () => {
        const id = JSON.parse(localStorage.getItem('gluserDetails')).id
        const dateTime = localStorage.getItem("booking_time")
        const data = {
            deal_id: "", deal_quantity: "", user_id: id, date_time: dateTime,
            status: "pending", payment_gateway: pType, total_amount: total, discount: "",
            coupon_id: coupon_id ? coupon_id : "", coupon_discount: coupon_id ? coupon_amount : "",
            discount_percent: "0", tax_name: "",
            tax_percent: "", tax_amount: "",
            extra_fees: "49", distance_fee: "",
            amount_to_pay: finalTotal, payment_status: pType === "cash" ? "pending" : "complete",
            additional_notes: "", item_details: cart.map(e => {
                return {
                    business_service_id: e.business_service_id || e.id,
                    unit_price: Math.round(e.price),
                    quantity: e.qty,
                    amount: Math.round(e.price) * e.qty
                }
            })
        }
        setSending(true)
        frontService.bookOrder(data)
            .then(
                res => {
                    if (res?.status == 'success') {
                        localStorage.removeItem("coupon_id")
                        localStorage.removeItem("coupon_amount")
                        localStorage.removeItem("coupon_min")
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
                    } else if (res?.status == 'fail') {
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
                            type: "error"
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
                            type: "error"

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
                        type: "error"
                    });
                    setSending(false)
                }
            )
    };


    const options = {
        key: 'rzp_test_cspHH5os0wjcRW',
        amount: finalTotal * 100, //  = INR 1
        name: 'Glam code',
        description: '',
        image: Logo,
        handler: function (response) {
            onSubmit()
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
        },
        prefill: {
            name: user?.name,
            contact: user?.mobile,
            email: user?.email
        },
        notes: {
            address: (userAddress?.address_heading + ", " + userAddress?.address + ", " + userAddress?.street)
        },
        theme: {
            color: "#3399cc",
            hide_topbar: false
        }
    };
    const openPayModal = () => {
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };

    const mapItems = (items) => {
        return (
            items.map((item, index) => {
                return (<li key={index} className="text" style={{ listStyle: 'disc', }}>{` ` + item.toString()}</li>);
            })
        );
    }

    return (<>
        {!user && <LoginModal show={!user} />}
        <Coupon show={couponModal} coupon={coupon_id}
            setCoupon={(c) => {
                console.log(c)
                localStorage.setItem("coupon_id", c.id)
                localStorage.setItem("coupon_amount", c.amount)
                localStorage.setItem("coupon_min", c.minimum_purchase_amount)
            }}
            total={total}
            handleClose={() => { setCouponModal(!couponModal) }} />
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
                                                <div className="Price">₹{Math.round(item.price)}</div>
                                                <div className="p-rl-2 offerPrice">₹{Math.round(item.discounted_price)}</div>
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
                                            <AddToCart data={item} />

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


                            {!coupon_id ? null : <div className="col-12">
                                <div className="d-flex flex-row justify-content-between-flex">
                                    <p className="p-1 font-family-alata">Coupon</p>
                                    <p className="p-1 font-family-alata">-₹ {Math.round(coupon_amount)}</p>
                                </div>
                            </div>}

                            <div className="col-12" >
                                <div className="d-flex flex-row justify-content-between-flex">
                                    <p className="p-1 font-family-alata">Total Service Amount Payable</p>
                                    <p className="p-1 font-family-alata">₹ {finalTotal}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='timeSlot-all'>
                        <p className="inside-title">Summary</p>
                        <div className="col-12 mt-2">
                            <div className="background-deflex" onClick={() => {
                                if (!coupon_id) {
                                    setCouponModal(true)
                                    setUpdate(update - 1)
                                } else {
                                    setUpdate(update + 1)
                                    localStorage.removeItem("coupon_id")
                                    localStorage.removeItem("coupon_amount")
                                    localStorage.removeItem("coupon_min")
                                }
                            }
                            }>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div>
                                            <i className="fa fa-tag fontSize-m-20"></i>
                                        </div>
                                        <div style={{ marginLeft: '10px' }} >
                                            {!coupon_id ? "Apply Coupon" : "Remove Coupon"}
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
                                        {pType === "razorpay" ?
                                            <i className="fa fa-dot-circle-o  fontSize-m-24" style={{ fontSize: 24 }}></i>
                                            : <i className="fa fa-circle-thin  fontSize-m-24" style={{ fontSize: 24 }}></i>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="background-deflex"
                                onClick={() => { setPType("cash") }}>
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
                                        {pType === "cash" ?
                                            <i className="fa fa-dot-circle-o  fontSize-m-20" style={{ fontSize: 24 }}></i>
                                            : <i className="fa fa-circle-thin  fontSize-m-20" style={{ fontSize: 24 }}></i>}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="checkoutBtn-container ">
                        <button className="checkoutBtn-all" type='button'
                            disabled={cart.length === 0 || sending}
                            onClick={() => {
                                if (!userAddress || userAddress.length === 0) {
                                    toast('Add address to book order', {
                                        position: "bottom-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                        type: "error"
                                    });
                                    return
                                }
                                if (pType === "cash") {
                                    onSubmit()
                                } else {
                                    openPayModal()
                                }
                            }} >{sending ? "Booking" : "Book Order"}</button>
                    </div>
                </Col>
                <Col md={1}></Col>

            </Row>
            <ToastContainer />

        </div>
    </>);
}
export default Payment;