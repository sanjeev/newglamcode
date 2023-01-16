import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import LoadingScreen from "../../components/LoadingScreen/loadingScreen";
import { frontService } from "../../_services/front.services";
import ViewDetails from '../../components/ViewDetails/ViewDetails';
import AddToCart from '../../components/AddToCard';

export default function SearchItem() {
    const router = useRouter()
    const query = router.query
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        frontService.search(query.item, localStorage.getItem("id"))
            .then(
                res => {
                    if (res.status === 'success') {
                        setItems(res.services);
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
                            <p className="inside-text-head" style={{ textTransform: "capitalize" }}>{query ? query.item : 'loging...'}</p>
                        </div>
                    </Container>

                </div>
                <div style={{ marginTop: '80px' }}>
                    {items.length > 0 ? (
                        <>
                            <Container>
                                <Row>
                                    {items?.map((x, i) => <Item x={x} i={i} key={i} mapItems={mapItems} />)}
                                </Row>
                            </Container>
                        </>
                    ) : (<LoadingScreen />)}

                </div>
            </div>
        </>

    )
}

const Item = ({ x, i, mapItems }) => {
    return <div className="col-md-6 col-12 p-md-5 pt-md-3 pb-md-0 p-2" key={i} id="scrollto225">
        <div className="servicesMD row servicesMD-bg-color-1">
            <a className="col-4 p-0" href="#">
                <img className="image"
                    src={x.service_image_url}
                    alt={x.name} />
            </a>
            <div className="col-8 pt-1">
                <div className="title">
                    <a href="#">{x.name}</a>
                </div>
                <div className="d-flex flex-row" style={{ margin: "4% 0.625rem -2% 0%" }}>
                    <div className="p-rl-2 Price">₹ {x.price}</div>
                    <div className="p-rl-2 offerPrice">₹ {x.discounted_price}</div>
                    <div className="p-rl-2 discountTitle">{x.discount} %</div>
                </div>
                <div
                    className="d-flex flex-row"
                    style={{ margin: "0.625rem 0.625rem 1%" }}>
                    <div className="p-2 time-settings">
                        <i className="fa fa-clock-o" />
                        {x.time} {x.time_type}
                    </div>
                </div>
                <AddToCart data={x} />
                <div className="lineDiv" />
                {x.description && <div className="descriptionServices">
                    <ul className="p-2" style={{ marginBottom: "-25px" }}>
                        {mapItems(x.description.replace(/(<([^>]+)>)/ig, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/(?:&nbsp;)/g, '')
                            .replace(/&amp;/g, '&').toString().split('.'))}
                    </ul>
                </div>}
                <ViewDetails
                    alldata={x}
                />
            </div>
        </div>
    </div>
}