import { useRouter } from "next/router"
import { Container, } from "react-bootstrap"
import GoogleMapReact from "google-map-react"
import { frontService } from "../_services/front.services";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ContactUs() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [sending, setSending] = useState(false)
    const [error, setError] = useState("")
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const onSubmit = () => {
        const data = {}
        if (!name) {
            setError("Name required")
            return
        }
        data.user_name = name
        data.user_email = email
        data.user_phone = phone
        data.user_subject = subject
        console.log(data)
        setSending(true)
        frontService.contact(data)
            .then(
                res => {
                    if (res.status == 'success') {
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
                        setName("")
                        setEmail("")
                        setPhone("")
                        setSubject("")
                        setSending(false)
                    } else if (res.status == 'fail') {
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
                    setSending(false)

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

                }
            )
    };
    return (<>
        <div className="servicedesk-bg checkout-all min-vh-100" id="myBookings" style={{ paddingBottom: '50px' }}>
            <div className="header-css-head">
                <Container fluid >
                    <div className="d-flex flex-row" onClick={() => router.back()}>
                        <div className="icon-alignments">
                            <i className="d-flex justify-content-center fa fa-chevron-left fontSize-m-20" />
                        </div>
                        <p className="inside-text-head">Contact Us</p>
                    </div>
                </Container>
            </div>

            <Container>
                <div className='mt-xl-5 mt-4 pt-xl-5 pt-4  card-container'>
                    <div className="terms-conditions">
                        <h3 style={{ color: "#8E8E8E" }} className="mb-2 text-uppercase">Contact Us</h3>
                        <div className="card border-0 rounded-0" style={{ background: "#D9BEF4" }}>
                            <div className="card-body p-xl-5">
                                <div className="row gap-4 gap-xl-5 justify-content-center align-items-center">
                                    <div className="col-lg-5">
                                        <h3 className="text-uppercase text-center">
                                            Send Us Message
                                        </h3>
                                        <div className="mb-3">
                                            <input className="form-control" onChange={(e) => setName(e.target.value)} value={name} name="user_name" placeholder="your name" />
                                        </div>
                                        <div className="mb-3">
                                            <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="user_email" placeholder="your email" />
                                        </div>
                                        <div className="mb-3">
                                            <input className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} name="user_phone" placeholder="phone number" />
                                        </div>
                                        <div className="mb-3">
                                            <textarea rows={10} className="form-control" onChange={(e) => setSubject(e.target.value)} value={subject} name="user_subject" placeholder="write your query" />
                                        </div>
                                        <div className="mb-3">
                                            {error && <p className="text-danger ">{error}</p>}
                                        </div>
                                        <div>
                                            <button onClick={() => { onSubmit() }} disabled={sending} className="w-100 bg-black text-white rounded-2 py-xl-3" style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)" }}>SUBMIT</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="card border-0" style={{ background: "#A854FC", boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)" }}>
                                            <div className="card-body py-5 text-white">
                                                <h3 className="mb-xl-3 mb-3 text-uppercase" style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)", color: "white", fontWeight: 800 }}>Contact Us</h3>
                                                <div>
                                                    <p className="pb-xl-3 pb-3" style={{ fontSize: 24, lineHeight: 1 }}>We would love to hear from you. Drop us a line or Call with your queries,
                                                        feedback or concerns.
                                                    </p>
                                                    <div className="contact-data" style={{ fontSize: 20, color: "white" }}>
                                                        <div className="d-flex gap-2 align-xl-items-center align-items-baseline"><span style={{ minWidth: 20, textAlign: "center" }}><i className="d-flex justify-content-center fa fa-map-marker"></i></span>3/34, Vineet Khand Gomti Nagar, Lucknow</div>
                                                        <div className="d-flex gap-2 align-xl-items-center align-items-baseline"><span style={{ minWidth: 20, textAlign: "center" }}><i className="d-flex justify-content-center fa fa-envelope-o"></i></span> glamourminstry@gmail.com</div>
                                                        <div className="d-flex gap-2 align-xl-items-center align-items-baseline"><span style={{ fontSize: 24, minWidth: 20, textAlign: "center" }}><i className="d-flex justify-content-center fa fa-mobile"></i></span> +91-812-7111-333</div>
                                                    </div>
                                                    <div className="pt-xl-4 pt-4" style={{ height: '40vh', width: '100%' }}>
                                                        <GoogleMapReact
                                                            bootstrapURLKeys={{ key: "" }}
                                                            defaultCenter={defaultProps.center}
                                                            defaultZoom={defaultProps.zoom}>
                                                        </GoogleMapReact>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Container >
        </div >
        <ToastContainer />
    </>
    )
}