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
            {localStorage.getItem('devise') === 'D' ? (

                <Container>
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
            ) : (
                <>
                    <Container className='background2 mobilepop' fluid>
                        <div className="header-top-aream header-top-area--style-1">
                            <ul className="event-list" style={{ paddingTop: "5px" }}>
                                <li className="list-item">
                                    <a
                                        area-label="mobile menu offcanvas svg icon"
                                        className="btn btn--size-33-33 btn--center btn--round btn--color-radical-red btn--bg-white btn--box-shadow main-menu offcanvas-toggle offside-menu"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                        >
                                            <g id="Group_1" data-name="Group 1" transform="translate(-28 -63)">
                                                <path
                                                    id="Rectangle_3"
                                                    data-name="Rectangle 3"
                                                    d="M0,0H5A2,2,0,0,1,7,2V5A2,2,0,0,1,5,7H2A2,2,0,0,1,0,5V0A0,0,0,0,1,0,0Z"
                                                    transform="translate(28 63)"
                                                    fill="#7c00b7"
                                                />
                                                <path
                                                    id="Rectangle_6"
                                                    data-name="Rectangle 6"
                                                    d="M2,0H5A2,2,0,0,1,7,2V5A2,2,0,0,1,5,7H0A0,0,0,0,1,0,7V2A2,2,0,0,1,2,0Z"
                                                    transform="translate(28 72)"
                                                    fill="#7c00b7"
                                                />
                                                <path
                                                    id="Rectangle_4"
                                                    data-name="Rectangle 4"
                                                    d="M2,0H7A0,0,0,0,1,7,0V5A2,2,0,0,1,5,7H2A2,2,0,0,1,0,5V2A2,2,0,0,1,2,0Z"
                                                    transform="translate(37 63)"
                                                    fill="#7c00b7"
                                                />
                                                <path
                                                    id="Rectangle_5"
                                                    data-name="Rectangle 5"
                                                    d="M2,0H5A2,2,0,0,1,7,2V7A0,0,0,0,1,7,7H2A2,2,0,0,1,0,5V2A2,2,0,0,1,2,0Z"
                                                    transform="translate(37 72)"
                                                    fill="#7c00b7"
                                                />
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <h2 className="title text-center font-familt-jost">GLAMCODE</h2>
                                </li>
                                <li className="list-item">
                                    <ul className="list-child">
                                        <li className="list-item">
                                            <span className="notch-bg notch-bg--sunset-orange" />
                                            <a
                                                href="/cart"
                                                area-label="Cart"
                                                className="btn btn--size-33-33 btn--center btn--round btn--color-radical-red btn--bg-white btn--box-shadow"
                                                style={{ color: "rgb(124, 0, 183)" }}
                                            >
                                                <i className="fa fa-shopping-cart" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className='selectloction'>
                                <div>
                                    <button onClick={() => setModalShow(true)} className="dropdown-toggle dropdownborder" type="button" id="dropdownMenuButton" >
                                        {localStorage.getItem("cityname") ? localStorage.getItem("cityname") : 'Select your Location'}
                                    </button>
                                    <Modalpup show={modalShow} onHide={() => setModalShow(false)} />

                                </div>
                            </div>

                        </div>
                    </Container>
                </>
            )
            }
        </>
    );
}

export default Header;