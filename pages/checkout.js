import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import DatePicker from "react-horizontal-datepicker";
function Checkout() {
    const router = useRouter()
    const [start, setStart] = useState(new Date("2021-10-21"));
    const selectedDay = (val) => {
        setStart(val);
    };
    console.log(start);
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
            <DatePicker
                getSelectedDay={selectedDay}
                labelFormat={"MMMM"}
                selectDate={start}
                color={"#374e8c"}
            />
        </div>
    </>);
}
export default Checkout;