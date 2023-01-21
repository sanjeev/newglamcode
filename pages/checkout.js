import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import moment from 'moment';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from '../components/Login';

function Checkout() {
    const router = useRouter();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        loop: false

    };
    const [active, setActive] = useState(0);
    const [isselected, setIsselected] = useState(-1);
    const [error, setError] = useState("")
    const user = JSON.parse(localStorage.getItem('gluserDetails'))

    // const handleClick = (val) => {
    //     alert(val);
    //     setActive(event.target.id);

    //}
    const h = parseInt(moment().format("HH"))
    const mm = parseInt(moment().format("mm"))
    const half = mm > 29

    const today = active === 0

    useEffect(() => {
        if (!localStorage.getItem('gluserDetails')) {
            // router.push("/login")
        }
        if (h > 17) {
            setActive(1)
        } else {
            setActive(0)
        }
    }, [])

    useEffect(() => {
        const rightBtn = document.querySelector('#right-button');
        const leftBtn = document.querySelector('#left-button');
        const content = document.querySelector('#content');
        const width = content?.offsetWidth

        rightBtn.addEventListener("click", function (event) {
            content.scrollLeft += (width - 20);
            event.preventDefault();
        });

        leftBtn.addEventListener("click", function (event) {
            content.scrollLeft -= (width - 20);
            event.preventDefault();
        });

    })
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
        { id: 13, slottime: "4:00 PM - 4:15 PM", slotstart: "16:00", slotend: "16:15", isselected: false, isavailable: true },
        { id: 14, slottime: "4:30 PM - 4:45 PM", slotstart: "16:30", slotend: "16:45", isselected: false, isavailable: true },
        { id: 15, slottime: "5:00 PM - 5:15 PM", slotstart: "17:00", slotend: "17:15", isselected: false, isavailable: true },
        { id: 16, slottime: "5:30 PM - 5:45 PM", slotstart: "17:30", slotend: "17:45", isselected: false, isavailable: true },
        { id: 17, slottime: "6:00 PM - 6:15 PM", slotstart: "18:00", slotend: "18:15", isselected: false, isavailable: true },
    ];

    return (<>
        {!user && <Login show={!user} />}

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
            <div className='pt-5'>

                {/* <Datedata /> */}
                <div className="date_sec  flex-column" >
                    {/* <Slider {...settings}> */}
                    <div className='d-flex position-relative'>
                        <div className="prev-date-btn" style={{ zIndex: 2 }}>
                            <button id="left-button" className="" style={{ background: "rgb(55, 78, 140)" }}>&lt;</button>
                        </div>
                        <div className='section-selectBooking flex-column' id="content">
                            <div className='d-flex align-items-end date-card-container'>
                                {[...Array(100)].map((elementInArray, index) => {
                                    const day_ = moment(moment().add(index, 'days').toString()).format('dddd').toString()
                                    const day = day_.substring(0, 3)
                                    const d = moment(moment().add(index, 'days').toString()).format("DD").toString()
                                    const m = moment(moment().add(index, 'days').toString()).format("MMMM").toString()

                                    return <span key={index}>
                                        {(d === "01" || index === 0) ? <div className='month-name'>{m}</div> : <div></div>}
                                        <div className={`date-card`} key={index} id={index}
                                            onClick={() => {
                                                setIsselected(-1)
                                                setActive(index)
                                            }}
                                        >
                                            <div className={`d-flex flex-column ${active === index ? "active" : ''}`} >
                                                <span className="day">{day}</span>
                                                <span className="date"> {moment(moment().add(index, 'days').toString()).format("DD").toString()}</span>
                                                {/* <span className="month">{moment(moment().add(index, 'days').toString()).format("MMMM").toString()}</span> */}
                                            </div>
                                        </div>
                                    </span>
                                }
                                )}
                            </div>
                        </div>
                        <div className="next-date-btn" style={{ zIndex: 2 }}>
                            <button id="right-button" className="" style={{ background: "rgb(55, 78, 140)" }}>&gt;</button>
                        </div>
                    </div>
                </div>
                <div className="timeSlot-all">
                    <p className="inside-title">Prime Time Slots</p>
                    {(active === 0 && h > 17) && <p className="">No slots available</p>}

                    <div className="row-m-check">
                        {timeslots.map((item, index) => {
                            if (today && ((item.id + 17 + (half ? 0 : 1)) < h * 2)) {
                                return null
                            }
                            if (item.isavailable) {
                                return (
                                    <div className="col-6-m-check time-slots" key={index} onClick={() => {
                                        setIsselected(index)
                                        setError("")
                                    }}>
                                        <div className={isselected === index ? "divinside-items selected" : "divinside-items"} >
                                            <p className="timeslots-texts">{item.slottime}</p>
                                        </div>
                                    </div>
                                );
                            }


                        })}

                    </div>
                </div>
                {error && <div>
                    <p className='text-danger text-center my-2 fw-bold'>{error}</p>
                </div>}
                <div className="checkoutBtn-container"
                    style={{ width: "30%", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                    <button className="checkoutBtn-all w-auto px-5" type='button'
                        onClick={() => {
                            if (isselected === -1) {
                                setError("Please Select slot to continue")
                                return
                            } else {
                                const time = (timeslots.find((e, i) => i === isselected) || {}).slotstart
                                const date = moment(moment().add(active, 'days').toString()).format('yyyy-MM-DD').toString()
                                localStorage.setItem("booking_time", `${date} ${time}:00`)
                                router.push("/payment")
                            }
                        }}

                    >Proceed</button>
                </div>
            </div>

        </div>
    </>);
}
export default Checkout;