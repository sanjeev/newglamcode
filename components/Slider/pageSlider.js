import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux';
function Pageslider() {
    const [showResults, setShowResults] = React.useState([]);
    const dataslide = useSelector(state => state.slide);
    return (
        <>
            <div className='mid-2 d-flex '>
                {localStorage.getItem('devise') === 'D' ? (
                    <>
                        <Container fluid>
                            <Row className='slidesection pt-5'>

                                <Col lg="12" md="12">
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                        spaceBetween={0}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        slidesPerView={2.2}
                                        pagination={{ clickable: true }}>
                                        {dataslide.media.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    {/* <div className='slideimage'>
                                                <img src={item.slider_image_base_url} alt="loading" style={{
                                                    borderRadius: "10px",
                                                    width: 750,
                                                }} />
                                            </div> */}
                                                    <div key={index} style={{ width: '100%', height: '50%', paddingLeft: 5, paddingTop: 10, paddingBottom: 40 }}>
                                                        <img src={item.slider_image_base_url} alt="loading" style={{
                                                            borderRadius: "10px",
                                                        }} />
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>

                                </Col>
                            </Row>
                        </Container>
                    </>) : (<>
                        <Container>
                            <Row className=''>

                                <Col lg="12" md="12">
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                        spaceBetween={0}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        slidesPerView={'auto'}
                                        speed={500}>
                                        {dataslide.media.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className='slideimage'>
                                                        <img src={item.slider_image_base_url} alt="loading" style={{
                                                            borderRadius: "10px",

                                                        }} />
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>

                                </Col>
                            </Row>
                        </Container>

                    </>)}
            </div>
        </>
    );
}

export default Pageslider;