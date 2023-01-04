import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { Datepicker, DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import Datedata from "./datedata";
function Checkout() {
    const router = useRouter()

    return (<>
        <div className="servicedesk-bg" style={{ paddingBottom: '50px' }}>
            <div className="header-css-head">
                <Container fluid >
                    <div className="d-flex flex-row" onClick={() => router.back()}>
                        <div className="icon-alignments">
                            <i className="fa fa-chevron-left fontSize-m-20" />
                        </div>
                        <p className="inside-text-head">Select Booking Slots</p>
                    </div>
                </Container>
            </div>
            <div className='mt-5'>

                <Datedata />

                {[...Array(n)].map((elementInArray, index) => (
                    <div className="" key={index}> Whatever needs to be rendered repeatedly... </div>
                )
                )}
            </div>

        </div>
    </>);
}
export default Checkout;