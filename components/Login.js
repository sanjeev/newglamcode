import React from "react";
import { useForm } from 'react-hook-form';
import { frontService } from "../_services/front.services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
import { useDispatch } from 'react-redux';
import { userData } from '../store/actions/index';
import { Modal } from "react-bootstrap";

export default function LoginModal(props) {
    const { show, handleClose } = props

    const dispatch = useDispatch();
    const { pathname } = Router
    const [mainOtp, setMainotp] = React.useState(false);
    const [dataMb, setDataMb] = React.useState([]);
    const [sending, setSending] = React.useState(false)
    const { register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        setSending(true)
        frontService.sendOtpcode(data)
            .then(
                res => {

                    if (res.status == 'success') {
                        localStorage.setItem("phonenumber", data.phone);
                        setMainotp(true)
                        reset();
                        setDataMb(res.mb);
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
                    setSending(false)
                }
            )
    };
    const onOtp = (data) => {
        //console.log(dataMb.otp)
        //console.log(data.otp);
        setSending(true)
        if (parseInt(data.otp) === parseInt(dataMb.otp)) {

            const dat = {
                'mobile': dataMb.mobile,
            }
            frontService.sendOtpverify(dat)
                .then(
                    res => {

                        if (res.status === 'success') {
                            console.log(res.user);
                            localStorage.setItem('gluserDetails', JSON.stringify(res.user));
                            dispatch(userData(res.user));

                            reset();
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

                            window.location.reload()
                            // Router.push('/checkout')

                        } else if (res.status === 'fail') {
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
                        setSending(false)
                    }
                )
        } else {
            toast('Wrong OTP', {
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
    }


    return (<Modal
        show={show}
        // onHide={handleClose}
        // onHide={() => { }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='mobilepopud coupon-modal login-modal'>
        <Modal.Body>
            <div className="section-login-background">
                <div className="section-model-login">
                    <div className="headsecftion">
                        <img
                            className="imagelogo"
                            src="https://www.glamcode.in/img/fav.png"
                            alt="Glamcode"
                        />
                    </div>
                    <div className="bottomsecftion">
                        {mainOtp ? (
                            <form onSubmit={handleSubmit(onOtp)}>
                                <input
                                    className="inputField"
                                    placeholder="Otp"
                                    defaultValue=""
                                    maxLength={4}
                                    {...register("otp", {
                                        required: "Otp is Required",

                                    })}
                                    onKeyUp={() => {
                                        trigger("otp");
                                    }}

                                />
                                {errors.otp && (
                                    <span style={{ marginLeft: '58px', color: 'red' }}>{errors.otp.message}</span>
                                )}

                                <button disabled={sending} className="button">Verify</button>
                            </form>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="inputField"
                                    maxLength={10}
                                    placeholder="Enter the 10 digit mobile"
                                    defaultValue=""
                                    {...register("phone", {
                                        required: "Phone is Required",
                                        pattern: {
                                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                            message: "Invalid Phone No",
                                        },
                                    })}
                                    onKeyUp={() => {
                                        trigger("phone");
                                    }}

                                />
                                {errors.phone && (
                                    <span style={{ marginLeft: '58px', color: 'red' }}>{errors.phone.message}</span>
                                )}

                                <button disabled={sending} className="button">Send OTP</button>
                            </form>

                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Modal.Body>
    </Modal>
    )
}