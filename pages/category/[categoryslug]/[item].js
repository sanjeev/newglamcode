import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from "../../../components/LoadingScreen/loadingScreen";
import { frontService } from "../../../_services/front.services";
import { Audio } from 'react-loader-spinner'
import Head from 'next/head'
import ViewDetails from '../../../components/ViewDetails/ViewDetails'
import { addtoCartData, decrementQty, removeFromCart } from '../../../store/actions';
import AddToCart from '../../../components/AddToCard';
import { Link } from 'react-scroll';
export default function Categoryslug() {
    const router = useRouter()
    const [mainCategory, setMaincategory] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const datacat = useSelector(state => state.maincat);
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = React.useState(0);

    const onDecrement = (itemsid) => {
        setItemCount(Math.max(itemCount - 1, 0));
        if (Math.max(itemCount - 1, 0) === 0) {
            dispatch(removeFromCart(itemsid))
        } else {
            dispatch(decrementQty(itemsid, 1))
        }

    }
    const onIncrement = (items) => {
        setItemCount(itemCount + 1);

        //     dispatch({
        //         type: 'FETCH_DATA',
        //         data: responseData
        //    })
        dispatch(addtoCartData(items, 1));
    }

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

    const callurl = (slug, id) => {
        localStorage.setItem('mid', id);
        //router.push('/category/' + slug + '/' + localStorage.getItem('cityname').toLowerCase())
    }
    return (
        <>
            <Head>
                <title>Glamcode Luxury Home Salon</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="title" content={mainCategory.seo_title} data-react-helmet="true"></meta>
                <meta name="description" content={mainCategory.seo_desc} data-react-helmet="true"></meta>
                <meta name="keywords" content={mainCategory.seo_key} data-react-helmet="true"></meta>
                <meta name="robots" content="index, follow" data-react-helmet="true"></meta>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" data-react-helmet="true"></meta>
                <meta name="language" content="English" data-react-helmet="true"></meta>
                <meta name="revisit-after" content="1 days" data-react-helmet="true"></meta>
                <meta name="author" content="Glamcode" data-react-helmet="true"></meta>
                <meta name="zipcode" content="201301" data-react-helmet="true"></meta>
                <meta name="city" content="Noida" data-react-helmet="true"></meta>
                <meta name="country" content="India" data-react-helmet="true"></meta>
                <meta name="Geography" content="B1002 Amrapali Zodiac, Sector 120, Noida, Uttar Pradesh 201301" data-react-helmet="true"></meta>
                <meta name="geo.position" content="28.5839021,77.3959942" data-react-helmet="true"></meta>
                <meta name="ICBM" content="28.5839021,77.3959942" data-react-helmet="true"></meta>
            </Head>
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
                        <div className="g-3 g-sm-6 gap-2 categories-top-header" style={{ padding: '20px', background: '#f3f3f3' }}>
                            {categories?.map((x, i) =>
                                <>
                                    <Link spy={true}
                                        // smooth={true}
                                        activeClass="product-category-item-selected"
                                        id="cat210"
                                        to={`${x.slug}`}
                                        className="pcats product-category-item cat210 mt-0"
                                        style={{ backgroundColor: "rgb(255, 255, 255)", padding: 15 }}
                                        key={i}>
                                        <h3 className="fontFamily-alata-only"
                                            style={{
                                                fontSize: 13,
                                                fontWeight: 500,
                                                textAlign: "center",
                                                marginBottom: 0,
                                                position: "relative",
                                                marginTop: 0
                                            }}
                                        >
                                            {x.name}
                                        </h3>

                                    </Link>

                                </>
                            )}


                        </div>
                    </>) : (<>
                        <Audio height="80" width="80" radius="9"
                            color="green"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </>)}


                </div>
                <div style={{}}>

                    {categories.length > 0 ? (
                        <>
                            <Container>
                                <Row className='card-container'>
                                    {categories?.map((x, i) => <div id={x.slug}
                                        style={{ paddingTop: i === 0 ? 140 : 15 }}
                                        className="col-md-12 col-12 "
                                        key={i}>
                                        <div
                                            className='p-md-5 pt-md-3 pb-md-0 p-2'
                                            id={x.slug}
                                            style={{ marginTop: 0 }}>
                                            <div className='row justify-content-center'>
                                                <div className='col-lg-6 col-12'>
                                                    <div className="servicesMD row servicesMD-bg-color-1">
                                                        <div
                                                            className="pcats product-category-item-services"
                                                            style={{ backgroundColor: "rgba(255, 255, 255, 0)", padding: 0 }}
                                                        >

                                                            <a className="col-4-m p-0 image-m" href="#" >
                                                                <img
                                                                    className="image"
                                                                    src={x.category_image_url}
                                                                    alt={x.name}
                                                                    id={x.id}
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
                                            </div>
                                        </div>
                                        <Row>
                                            {x?.service.map((y, i) => <>
                                                <div className="col-md-6 col-12 p-md-5 pt-md-3 pb-md-0 p-2" key={i}
                                                >
                                                    <div className="servicesMD row servicesMD-bg-color-1">
                                                        <a className="col-4 p-0" href="#">
                                                            <img
                                                                className="image"
                                                                src={y.service_image_url}
                                                                alt={y.name}
                                                            />
                                                        </a>
                                                        <div className="col-8 pt-1 position-relative">
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
                                                            <AddToCart data={y} />
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
                                        </Row>

                                    </div>)}
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
                                                        onClick={() => callurl(item.slug, item.id)}
                                                        href={`/category/${item.slug}/${localStorage.getItem('cityname').toLowerCase()}`}
                                                        style={{ color: '#000' }}
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