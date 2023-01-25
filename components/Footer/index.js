import React, { useEffect, useState } from "react";

import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import facebook2 from '../../assets/img/facebook2.svg'
import instargram from '../../assets/img/instargram.svg'
import pin from '../../assets/img/pin.svg'
import reddit from '../../assets/img/reddit.svg'
import twitter from '../../assets/img/twitter.svg'
import youtube from '../../assets/img/youtube.svg'
import moment from "moment";
import { frontService } from "../../_services/front.services";

function Footer() {
    const router = useRouter()
    const cart = useSelector(state => state.cardAdd?.cart);
    const [total, setTotal] = React.useState(0);
    const [coupons, setCoupons] = useState([])


    const renderInput = () => {

        router.push('/login');
    }
    useEffect(() => {
        var total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += parseInt(cart[i].sum);
        }
        setTotal(total);
    }, [cart]);

    useEffect(() => {
        // setError("")
        var day = moment().format('dddd');

        frontService.coupons()
            .then(
                res => {
                    if (res.status === 'success') {
                        setCoupons(arr => [...res.couponData.filter(e => isDay(e.days, day))]);
                    } else {
                        // setError('Something went wrong !!');
                    }
                    // setLoading(false)
                },
                error => {
                    // setLoading(false)
                    // setError('Something went wrong !!');
                }
            )

    }, []);

    const shortedCoupons = coupons.sort((a, b) => a.minimum_purchase_amount - b.minimum_purchase_amount)

    let dif = ((shortedCoupons[0] || {}).minimum_purchase_amount || 0) - total

    let minAmount = localStorage.getItem("loc_min_booking_amount") || "0"
    minAmount = parseInt(minAmount)
    if (minAmount > total) {
        dif = 0
    }

    const isDay = (s, day) => {
        let string = s.replaceAll('\"', "")
        string = string.replace('[', "")
        string = string.replace(']', "")
        string = string.replaceAll('"', "")
        string = string.split(',')

        let has = false
        string.forEach(element => {
            if (!has) {
                if (element === day) {
                    has = true
                }
            }

        });
        return has
    }

    return (
        <>
            <footer className="footer-container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-12 col-lg-2 tc">
                                <a href="/about-us" className="footer-text">
                                    About Us
                                </a>
                            </div>
                            <div className="col-md-12 col-lg-2 tc">
                                <a href="/terms-conditions" className="footer-text">
                                    Terms &amp; conditions
                                </a>
                            </div>
                            <div className="col-md-12 col-lg-2 tc">
                                <a href="/privacy-policy" className="footer-text">
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="col-md-12 col-lg-2 tc">
                                <a href="/" className="footer-text">
                                    Faqs
                                </a>
                            </div>
                            <div className="col-md-12 col-lg-2 tc">
                                <a href="/" className="footer-text">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <hr style={{ border: "1px solid rgb(255, 255, 255)" }} />
                    </div>
                    <div className="col-12">
                        <p className="footer-text">{localStorage.getItem("locAddress") ? localStorage.getItem("locAddress") : 'Amrapali Zodiac, Sector 120, Noida, Uttar Pradesh, India'}</p>
                    </div>
                </div>
            </footer>
            {
                localStorage.getItem('devise') === 'D' ? (<>
                    <div style={{ position: "fixed", zIndex: 9, right: 0, top: "30%" }}>
                        <ul className=" me-auto mb-2 mb-lg-0">
                            <li>
                                <a
                                    href="https://twitter.com/jaketrent"
                                    className="social-icon"
                                    style={{
                                        display: "inline-block",
                                        width: 50,
                                        height: 50,
                                        position: "relative",
                                        overflow: "hidden",
                                        verticalAlign: "middle"
                                    }}
                                    target="_blank"
                                    aria-label="twitter"
                                >
                                    <div
                                        className="social-container"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >
                                        <img src={twitter.src} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/myglamcode"
                                    className="social-icon"
                                    target="_blank"
                                    style={{
                                        display: "inline-block",
                                        width: 50,
                                        height: 50,
                                        position: "relative",
                                        overflow: "hidden",
                                        verticalAlign: "middle"
                                    }}
                                    aria-label="facebook"
                                >
                                    <div
                                        className="social-container"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >
                                        <img src={facebook2.src} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/myglamcode?igshid=YmMyMTA2M2Y="
                                    className="social-icon"
                                    style={{
                                        display: "inline-block",
                                        width: 50,
                                        height: 50,
                                        position: "relative",
                                        overflow: "hidden",
                                        verticalAlign: "middle"
                                    }}
                                    target="_blank"
                                    aria-label="instagram"
                                >
                                    <div
                                        className="social-container"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >
                                        <img src={instargram.src} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://youtube.com/channel/UC0tPgNGS96oVlkUqBf4ZM2Q"
                                    className="social-icon"
                                    style={{
                                        display: "inline-block",
                                        width: 50,
                                        height: 50,
                                        position: "relative",
                                        overflow: "hidden",
                                        verticalAlign: "middle"
                                    }}
                                    target="_blank"
                                    aria-label="youtube"
                                >
                                    <div
                                        className="social-container"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >
                                        <img src={youtube.src} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.reddit.com/u/myglamcode/?utm_source=share&utm_medium=ios_app&utm_name=iossmf"
                                    className="social-icon"
                                    target="_blank"
                                    style={{
                                        display: "inline-block",
                                        width: 50,
                                        height: 50,
                                        position: "relative",
                                        overflow: "hidden",
                                        verticalAlign: "middle"
                                    }}
                                    aria-label="reddit"
                                >
                                    <div
                                        className="social-container"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >
                                        <img src={reddit.src} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://pin.it/1DMbsqq"
                                    className="social-icon"
                                    target="_blank"
                                    style={{
                                        display: "inline-block",
                                        width: 50,
                                        height: 50,
                                        position: "relative",
                                        overflow: "hidden",
                                        verticalAlign: "middle"
                                    }}
                                    aria-label="sharethis"
                                >
                                    <div
                                        className="social-container"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >
                                        <img src={pin.src} />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </>) : (<div >
                    <ul className=" me-auto mb-2 mb-lg-0" style={{ display: 'flex', justifyContent: 'center', paddingLeft: "0px", marginTop: '10px' }}>
                        <li>
                            <a
                                href="https://twitter.com/jaketrent"
                                className="social-icon"
                                style={{
                                    display: "inline-block",
                                    width: 50,
                                    height: 50,
                                    position: "relative",
                                    overflow: "hidden",
                                    verticalAlign: "middle"
                                }}
                                target="_blank"
                                aria-label="twitter"
                            >
                                <div
                                    className="social-container"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <img src={twitter.src} />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/myglamcode"
                                className="social-icon"
                                target="_blank"
                                style={{
                                    display: "inline-block",
                                    width: 50,
                                    height: 50,
                                    position: "relative",
                                    overflow: "hidden",
                                    verticalAlign: "middle"
                                }}
                                aria-label="facebook"
                            >
                                <div
                                    className="social-container"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <img src={facebook2.src} />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/myglamcode?igshid=YmMyMTA2M2Y="
                                className="social-icon"
                                style={{
                                    display: "inline-block",
                                    width: 50,
                                    height: 50,
                                    position: "relative",
                                    overflow: "hidden",
                                    verticalAlign: "middle"
                                }}
                                target="_blank"
                                aria-label="instagram"
                            >
                                <div
                                    className="social-container"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <img src={instargram.src} />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://youtube.com/channel/UC0tPgNGS96oVlkUqBf4ZM2Q"
                                className="social-icon"
                                style={{
                                    display: "inline-block",
                                    width: 50,
                                    height: 50,
                                    position: "relative",
                                    overflow: "hidden",
                                    verticalAlign: "middle"
                                }}
                                target="_blank"
                                aria-label="youtube"
                            >
                                <div
                                    className="social-container"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <img src={youtube.src} />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.reddit.com/u/myglamcode/?utm_source=share&utm_medium=ios_app&utm_name=iossmf"
                                className="social-icon"
                                target="_blank"
                                style={{
                                    display: "inline-block",
                                    width: 50,
                                    height: 50,
                                    position: "relative",
                                    overflow: "hidden",
                                    verticalAlign: "middle"
                                }}
                                aria-label="reddit"
                            >
                                <div
                                    className="social-container"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <img src={reddit.src} />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://pin.it/1DMbsqq"
                                className="social-icon"
                                target="_blank"
                                style={{
                                    display: "inline-block",
                                    width: 50,
                                    height: 50,
                                    position: "relative",
                                    overflow: "hidden",
                                    verticalAlign: "middle"
                                }}
                                aria-label="sharethis"
                            >
                                <div
                                    className="social-container"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <img src={pin.src} />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>)
            }


            {(router.pathname === "/login" || router.pathname === "/payment" || router.pathname === "/checkout") ? "" : (cart.length > 0 ?

                <div className="bottomservicesCheckout" key={0}>
                    <div className="topinside">
                        <p className="text">{`Minimum Booking Amount :- ₹  ${localStorage.getItem("loc_min_booking_amount")}`}</p>
                    </div>
                    <div className="bottominside">
                        <div className="d-flex justify-content-between" >
                            <div className="d-flex flex-column-m">
                                <p className="textHead" >Total Price ₹ {total} {" "}
                                    {dif > 0 && <span style={{ paddingLeft: "6px" }}>{` Add ₹${dif} more to avail coupon`}</span>}
                                </p>
                            </div>

                            <span
                                onClick={() => {
                                    let minAmount = localStorage.getItem("loc_min_booking_amount") || "0"
                                    minAmount = parseInt(minAmount)
                                    if (minAmount > total) {
                                        toast("Add more items to checkout");
                                    } else if (!localStorage.getItem('gluserDetails')) {
                                        router.push("/login")
                                    } else {
                                        router.push("/checkout")
                                    }
                                }}
                                className="textHead" style={{ cursor: "pointer" }}>
                                Checkout <i className="fa fa-chevron-right" style={{ marginLeft: 10 }} aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>

                </div>

                : '')}

        </>
    );
}

export default Footer;
