import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { Datepicker, DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
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
            <Datepicker

                locale={enUS}

            />
        </div>
    </>);
}
export default Checkout;