import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import LoadingScreen from "../../../components/LoadingScreen/loadingScreen";
import { frontService } from "../../../_services/front.services";
import { Audio } from 'react-loader-spinner'
import ViewDetails from '../../../components/ViewDetails/ViewDetails'
export default function Categoryslug() {
    const router = useRouter()
    const [mainCategory, setMaincategory] = React.useState([]);
    const [categories, setCategories] = React.useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const datacat = useSelector(state => state.maincat);


    useEffect(() => {
        frontService.datamancat()
            .then(
                res => {
                    if (res.status === 'success') {
                        setMaincategory(res.mainCategory);
                        setCategories(res.categories);
                    } else {
                        console.log('Something went wrong !!');
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                }
            )
    }, []);
    const mapItems = (items) => {
        return (
            items.map((item, index) => {
                return (<li className="listService" key={index}>
                    <i className="fa fa-snowflake-o" aria-hidden="true" />
                    {` ` + item.toString()}</li>);
            })
        );
    }
    return (
        <>

            <div className="servicedesk-bg" style={{ paddingBottom: '50px' }}>
                <div className="header-css-head">
                    <Container fluid >
                        <div className="d-flex flex-row" onClick={() => router.back()}>
                            <div className="icon-alignments">
                                <i className="fa fa-chevron-left fontSize-m-20" />
                            </div>
                            <p className="inside-text-head">{mainCategory ? mainCategory.name : 'loging...'}</p>
                        </div>

                    </Container>
                    {categories ? (<>
                        <div className="g-3 g-sm-6" style={{ padding: '20px', background: '#f3f3f3' }}>
                            <Row>


                                {categories?.map((x, i) =>
                                    <>
                                        <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                                            <a
                                                id="cat210"
                                                className="pcats product-category-item"
                                                style={{ backgroundColor: "rgb(255, 255, 255)", padding: 15 }}
                                            >
                                                <h3
                                                    className="fontFamily-alata-only"
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        textAlign: "center",
                                                        marginBottom: 0,
                                                        position: "relative",
                                                        marginTop: 0
                                                    }}
                                                >
                                                    {x.name}
                                                </h3>
                                                <span className="flag-new" style={{ display: "none" }}>
                                                    new
                                                </span>
                                            </a>
                                        </div>

                                    </>
                                )}

                            </Row>
                        </div>
                    </>) : (<>
                        <Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="green"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </>)}


                </div>
                <div style={{ marginTop: '140px' }}>

                    {categories.length > 0 ? (
                        <>
                            <Container>
                                <Row>
                                    {categories?.map((x, i) => <>
                                        <div
                                            className="col-md-6 col-12 p-md-5 pt-md-3 pb-md-0 p-2"
                                            style={{ marginTop: 0 }}

                                        >
                                            <div className="servicesMD row servicesMD-bg-color-1">
                                                <div
                                                    className="pcats product-category-item-services"
                                                    style={{ backgroundColor: "rgba(255, 255, 255, 0)", padding: 0 }}
                                                >
                                                    <span className="flag-new" style={{ display: "none" }}>
                                                        new
                                                    </span>
                                                    <a className="col-4-m p-0 image-m" href="#">
                                                        <img
                                                            className="image"
                                                            src={x.category_image_url}
                                                            alt={x.name}
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                margin: 0,
                                                                border: "medium none"
                                                            }}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {x?.service.map((y, i) => <>

                                            <div className="col-md-6 col-12 p-md-5 pt-md-3 pb-md-0 p-2" key={i} id="scrollto225">
                                                <div className="servicesMD row servicesMD-bg-color-1">
                                                    <a className="col-4 p-0" href="#">
                                                        <img
                                                            className="image"
                                                            src={y.service_image_url}
                                                            alt="Full Body Scrub"
                                                        />
                                                    </a>
                                                    <div className="col-8 pt-1">
                                                        <div className="title">
                                                            <a href="#">{y.name}</a>
                                                        </div>
                                                        <div className="d-flex flex-row" style={{ margin: "4% 0.625rem -2% 0%" }}>
                                                            <div className="p-rl-2 Price">₹ {y.price}</div>
                                                            <div className="p-rl-2 offerPrice">₹ {y.discounted_price}</div>
                                                            <div className="p-rl-2 discountTitle">{y.discount} %</div>
                                                        </div>
                                                        <div
                                                            className="d-flex flex-row"
                                                            style={{ margin: "0.625rem 0.625rem 1%" }}
                                                        >
                                                            <div className="p-2 time-settings">
                                                                <i className="fa fa-clock-o" />
                                                                {y.time} {y.time_type}
                                                            </div>
                                                        </div>
                                                        <div className="Addtocart">Add</div>
                                                        <div className="lineDiv" />
                                                        <div className="descriptionServices">
                                                            <ul className="p-2" style={{ marginBottom: "-25px" }}>
                                                                {mapItems(y.description.replace(/(<([^>]+)>)/ig, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/(?:&nbsp;)/g, '')
                                                                    .replace(/&amp;/g, '&').toString().split('.'))}
                                                            </ul>
                                                        </div>
                                                        <ViewDetails
                                                            alldata={y}
                                                        />

                                                    </div>
                                                </div>
                                            </div>

                                        </>)}


                                    </>)}
                                </Row>
                            </Container>
                            <div className="menu-category-d" onClick={handleShow}>Menu</div>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                className='mobilepopud'
                            >
                                <div onClick={handleClose} className="image-d-location-close">X</div>
                                <Modal.Body>
                                    <div className='productcatpage'>


                                        {datacat.maincategory?.map((item, index) => {

                                            return (

                                                <div key={index}>
                                                    <a
                                                        href={`/category/${item.slug}/${localStorage.getItem('cityname').toLowerCase()}`}

                                                    >
                                                        <img className="images-m center-img-all" src={`https://www.glamcode.in/user-uploads/maincategory/${item.image}`} alt={item.name} />
                                                        <div className="center-content-all">
                                                            <span
                                                                style={{ fontSize: 13 }}
                                                            >
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>


                                            );
                                        })}



                                    </div>
                                </Modal.Body>

                            </Modal>
                        </>
                    ) : (<LoadingScreen />)}

                </div>









            </div>
        </>

    )
}