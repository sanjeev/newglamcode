import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { Datepicker, DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import Datedata from "./datedata";
import moment from 'moment';
function Checkout() {
    const router = useRouter()
    console.log(moment().toString());
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
                <div className="date_sec" >
                    {[...Array(30)].map((elementInArray, index) => (

                        <div class="date-card" key={index}>
                            <span class="day">{moment(moment().add(index, 'days').toString()).format('dddd').toString()}</span>
                            <span class="date"> {moment(moment().add(index, 'days').toString()).format("DD").toString()}</span>
                            <span class="month"> {moment(moment().add(index, 'days').toString()).format("MMMM").toString()}</span>
                        </div>

                    )
                    )}
                </div>
            </div>

        </div>
    </>);
}
export default Checkout;