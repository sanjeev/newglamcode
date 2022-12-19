import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import Logo from "../../glamcode.png"
import Dropdown from 'react-bootstrap/Dropdown';
import Modalpup from '../Modal/loction';
function Header() {
    const [showResults, setShowResults] = useState(false);
    const onClick = () => setShowResults(value => !value);
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Container fluid>
                <Row className='headerclass background1 menufix'>
                    <Col lg="9" md="12">
                        <div className='logsection'>
                            <div className='log'>
                                <a href='/'><Image src={Logo} alt="Glam code" width="50" height="50" /></a>
                            </div>
                            <div className='selectloction'>
                                <div>
                                    <button onClick={() => setModalShow(true)} className="dropdown-toggle dropdownborder" type="button" id="dropdownMenuButton" >
                                        {localStorage.getItem("cityname") ? localStorage.getItem("cityname") : 'Select your Location'}
                                    </button>
                                    <Modalpup show={modalShow} onHide={() => setModalShow(false)} />

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="12" className='menutop'>
                        <div className="d-flex gap-2">
                            <a href='/' className="btn btn-outline-light bgsalon">Home</a>
                            <a href='/' className="btn btn-outline-light bgsalon">Blogs</a>
                            <button className="btn btn-outline-light bgsalon" onClick={onClick}>
                                <i className="fa fa-bars  icon-m" aria-hidden="true" />
                            </button>

                        </div>
                        {showResults ? (
                            <div className="sidemenu-modal-d" style={{ display: 'block' }}>
                                <div className="sidemenu-outbox-d">
                                    <i className="fa fa-info-circle  icon-m" aria-hidden="true" />
                                    <span style={{ marginLeft: '20px' }}>About us</span>
                                </div>
                                <div className="sidemenu-outbox-d">
                                    <i className="fa fa-comment  icon-m" aria-hidden="true" />
                                    <span style={{ marginLeft: '20px' }}>Contact us</span>
                                </div>
                                <div className="sidemenu-outbox-d">
                                    <i className="fa fa-user  icon-m" aria-hidden="true" />
                                    <span style={{ marginLeft: '20px' }}>My Bookings</span>
                                </div><div className="sidemenu-outbox-d">
                                    <i className="fa fa-sign-in  icon-m" aria-hidden="true" />
                                    <span style={{ marginLeft: '20px' }}>Login</span>
                                </div>
                            </div>
                        ) : null}

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;