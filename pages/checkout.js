import React, { useState } from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { Datepicker, DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import Datedata from "./datedata";
import moment from 'moment';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Checkout() {
    const router = useRouter();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1

    };
    console.log(moment().toString());
    const [active, setActive] = useState("");
    const [isselected, setIsselected] = useState("");



    // const handleClick = (val) => {
    //     alert(val);
    //     setActive(event.target.id);

    //}

    const timeslots = [
        { id: 1, slottime: "10:00 AM - 10:15 AM", slotstart: "10:00", slotend: "10:15", isselected: false, isavailable: true },
        { id: 2, slottime: "10:30 AM - 10:45 AM", slotstart: "10:30", slotend: "10:45", isselected: false, isavailable: true },
        { id: 3, slottime: "11:00 AM - 11:15 AM", slotstart: "11:00", slotend: "11:15", isselected: false, isavailable: true },
        { id: 4, slottime: "11:30 AM - 11:45 AM", slotstart: "11:30", slotend: "11:45", isselected: false, isavailable: true },
        { id: 5, slottime: "12:00 PM - 12:15 PM", slotstart: "12:00", slotend: "12:15", isselected: false, isavailable: true },
        { id: 6, slottime: "12:30 PM - 12:45 PM", slotstart: "12:30", slotend: "12:45", isselected: false, isavailable: true },
        { id: 7, slottime: "1:00 PM - 1:15 PM", slotstart: "13:00", slotend: "13:15", isselected: false, isavailable: true },
        { id: 8, slottime: "1:30 PM - 1:45 PM", slotstart: "13:30", slotend: "13:45", isselected: false, isavailable: true },
        { id: 9, slottime: "2:00 PM - 2:15 PM", slotstart: "14:00", slotend: "14:15", isselected: false, isavailable: true },
        { id: 10, slottime: "2:30 PM - 2:45 PM", slotstart: "14:30", slotend: "14:45", isselected: false, isavailable: true },
        { id: 11, slottime: "3:00 PM - 3:15 PM", slotstart: "15:00", slotend: "15:15", isselected: false, isavailable: true },
        { id: 12, slottime: "3:30 PM - 3:45 PM", slotstart: "15:30", slotend: "15:45", isselected: false, isavailable: true },
        { id: 13, slottime: "4:00 PM - 2:15 PM", slotstart: "16:00", slotend: "16:15", isselected: false, isavailable: true },
        { id: 14, slottime: "4:30 PM - 4:45 PM", slotstart: "16:30", slotend: "16:45", isselected: false, isavailable: true },
        { id: 15, slottime: "5:00 PM - 5:15 PM", slotstart: "17:00", slotend: "17:15", isselected: false, isavailable: true },
        { id: 16, slottime: "5:30 PM - 5:45 PM", slotstart: "17:30", slotend: "17:45", isselected: false, isavailable: true },
        { id: 17, slottime: "6:00 PM - 6:15 PM", slotstart: "18:00", slotend: "18:15", isselected: false, isavailable: true },
    ];

    return (<>
        <div className="servicedesk-bg checkout-all" style={{ paddingBottom: '50px' }}>
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

                {/* <Datedata /> */}
                <div className="date_sec " >

                    {/* <Slider {...settings}> */}
                    {[...Array(7)].map((elementInArray, index) => (

                        < div className={`date-card ${active === index ? "active" : ''}`} key={index} id={index} onClick={() => setActive(index)}>
                            <span className="day">{moment(moment().add(index, 'days').toString()).format('dddd').toString()}</span>
                            <span className="date"> {moment(moment().add(index, 'days').toString()).format("DD").toString()}</span>
                            <span className="month"> {moment(moment().add(index, 'days').toString()).format("MMMM").toString()}</span>
                        </div>

                    )
                    )}
                    {/* </Slider> */}
                </div>
                <div className="timeSlot-all">
                    <p className="inside-title">Prime Time Slots</p>
                    <div className="row-m-check">

                        {timeslots.map((item, index) => {

                            if (item.isavailable) {
                                return (
                                    <div className="col-6-m-check" style={{ width: "32.7%" }} key={index} onClick={() => setIsselected(index)}>
                                        <div className={isselected === index ? "divinside-items selected" : "divinside-items"} >
                                            <p className="timeslots-texts">{item.slottime}</p>
                                        </div>
                                    </div>
                                );
                            }


                        })}

                    </div>
                </div>
                <div
                    className="checkoutBtn-container"
                    style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}
                >
                    <button className="checkoutBtn-all">Proceed</button>
                </div>
            </div>

        </div>
    </>);
}
export default Checkout;