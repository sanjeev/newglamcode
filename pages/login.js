import React from "react";
import { useForm } from 'react-hook-form';
import { frontService } from "../_services/front.services";
export default function Login() {
    const { register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        frontService.sendOtpcode(data)
            .then(
                res => {
                    console.log(res);
                    if (res.status == 'success') {
                        console.log(res);
                    } else if (res.status == 'error') {
                        console.log("Invalid Credetials !!", "Login");
                    } else {
                        console.log("Invalid Credetials !!", "Login");

                    }
                }, error => {

                    console.log("Invalid Credetials !!", "Login");

                }
            )
    };


    return (<>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="inputField"
                            maxLength={10}
                            placeholder="Mobile Number (8127111333)"
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

                        <button className="button">Send OTP</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}