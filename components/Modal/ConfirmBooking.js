import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ConfirmBooking(props) {
    const { item, cancelBooking, sending } = props

    return (
        <Modal {...props} backdrop="static"
            keyboard={false} centered aria-labelledby="contained-modal-title-vcenter" className='modbox'>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Cancel Order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid pt-0">
                <div className="form-group text-center">
                    <label htmlFor="addressHome">Are you sure you want to cancel this order?</label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Close</Button>
                <Button variant="primary" onClick={() => cancelBooking(item)} disabled={sending} style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>{sending ? "Cancelling" : "Cancel Order"}</Button>
            </Modal.Footer>
        </Modal>
    );
}
