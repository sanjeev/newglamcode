import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import Router from 'next/router'
import { useRouter } from "next/navigation";
function Modalpup(props) {
    const router = useRouter()

    const dataloctions = useSelector(state => state.loctions);
    const handleClose = () => props.onHide();
    const { noRedirect, onSelect } = props

    const selecthandleclick = (locId, locName, locAddress, locationslug, locMinBookingAmount) => {
        localStorage.setItem("id", locId);
        localStorage.setItem("cityname", locName);
        localStorage.setItem("locAddress", locAddress);
        localStorage.setItem("loc_min_booking_amount", locMinBookingAmount);

        if (noRedirect) {
            onSelect(locId, locName)
        } else {
            Router.push('/' + locationslug);
            window.location.href = '/' + locationslug;
            //Router.reload(window.location.pathname)
        }
    }
    return (
        <>
            <Modal
                {...props}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                {/* <Modal.Header closeButton>

                </Modal.Header> */}
                <div onClick={handleClose} className="image-d-location-close">X</div>
                <Modal.Body>
                    <div className='row mb-2'>
                        {dataloctions.location?.map((x, i) =>
                            <div className="col-4 " style={{ marginTop: 10 }} key={i}  {...props} onClick={() => selecthandleclick(x.id, x.city, x.name, x.slug, x.price)}>
                                <div className={`image-d-location-head servicesMD-bg-color-${i}`}>
                                    <div className="image-d-location">
                                        <img
                                            className="images-m center-img-all"
                                            src={x.image_base_url}
                                            alt={x.city}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="center-content-all">
                                            <div className="title">{x.city}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
export default Modalpup;