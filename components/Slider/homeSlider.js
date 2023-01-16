import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import glame from '../../assets/img/glam.png'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux';
function Slider() {
    const [showResults, setShowResults] = React.useState([]);
    const dataslide = useSelector(state => state.slide);
    return (
        <>
            <div className='mid-2 d-flex mt-4'>
                {localStorage.getItem('devise') === 'D' ? (
                    <>
                        <Container>
                            <Row className='slidesection'>
                                <Col lg="4" md="12">
                                    <div>
                                        <img src={glame.src} alt="loading" style={{ width: "80px" }} />
                                        <h1>Salon at Home for Women</h1>
                                        <p className="spanp"><span className="fa fa-star faimg"></span>4.76(978k)</p>
                                    </div>
                                </Col>
                                <Col lg="8" md="12">
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
                                                            width: 750,
                                                        }} />
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>

                                </Col>

                            </Row>

                        </Container>



                    </>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </>
    );
}

export default Slider;