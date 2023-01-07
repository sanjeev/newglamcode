import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
function MydModalWithGrid(props) {
    return (
        <Modal {...props} backdrop="static"
            keyboard={false} centered aria-labelledby="contained-modal-title-vcenter" className='modbox'>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Add New Address
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <form>
                        <div class="form-group mb-2">
                            <label for="addressHome">Address Type Ex. Home, Office etc</label>
                            <input type="text" class="form-control" id="addressHome" placeholder="Address Type Ex. Home, Office etc" />
                        </div>
                        <div class="form-group mb-2">
                            <label for="home">Address</label>
                            <input type="text" class="form-control" id="home" placeholder="Address" />
                        </div>
                        <div class="form-group mb-2">
                            <label for="location">Location</label>
                            <input type="text" class="form-control" id="location" placeholder="Location" />
                        </div>
                    </form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Close</Button>
                <Button variant="primary" style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}
function Myaddress() {
    const [modalShow, setModalShow] = useState(false);
    return (<>
        <div className="servicedesk-bg address-all" style={{ paddingBottom: '50px' }}>
            <div className="header-css-head">
                <Container fluid >
                    <div className="d-flex flex-row" onClick={() => router.back()}>
                        <div className="icon-alignments">
                            <i className="fa fa-chevron-left fontSize-m-20" />
                        </div>
                        <p className="inside-text-head">Select Address</p>
                    </div>
                </Container>
            </div>
            <Container fluid >
                <Row className='mt-5'>
                    {/* <div className="section-address">
                        <div className="inside-title-new">
                            <button className="Adbutton">
                                Add Address
                                <span style={{ marginLeft: 5 }} className="inside-checkall">
                                    <i className="fa fa-plus" />
                                </span>
                            </button>
                        </div>
                    </div> */}

                </Row>
                <Row className='mt-5' style={{ minHeight: '500px' }}>

                    <Col md={8} className="mb-4">
                        <div className='btuadd'>
                            <h5 class="card-title">My Addresses</h5>
                            <a onClick={() => setModalShow(true)} href="#" class="btn btn-primary" style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Add Address</a>
                        </div>
                        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                        <div class="card mt-2">
                            <div class="card-body">

                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">User Details</h5>
                                <form>
                                    <div class="form-group mb-2">
                                        <label for="exampleInputPhone">Phone No.</label>
                                        <input type="text" class="form-control" id="exampleInputPhone" placeholder="Phone" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="exampleInputName">Name</label>
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="Name" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>

                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Male</label>
                                    </div>
                                    <div class="form-group form-check mb-3">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Female</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary" style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Edit Profile</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    </>)
}
export default Myaddress;