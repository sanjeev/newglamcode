import { useRouter } from "next/router";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

export default function PageNotFound() {
    const router = useRouter()
    return (<>
        <div className="section-login-background">
            <div className="section-model-login">
                <div className="headsecftion">
                    <img
                        className="imagelogo"
                        src="/images/NotFound.png"
                        alt="Glamcode"
                    />
                </div>
                <div className="bottomsecftion">
                    <h1 className="mt-4 text-center"> Oops, looks like the page is lost.</h1>

                    <p style={{ fontSize: 18 }} className="text-center">This is not a fault, just an accident that was not intentional</p>
                    <button onClick={() => router.push("/")} className="button rounded-3">Back To Menu</button>
                </div>
            </div>
        </div>
    </>)
}