
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import AddToCart from "../Cart/AddToCart";
import Card from "../Maincategory/Card";
import ViewDetails from "../ViewDetails/ViewDetails";
function Preferedservices({ data }) {

    const mapItems = (data) => {
        return (
            data.map((item, index) => {
                return (<li className="listService" key={index}>
                    <i className="fa fa-snowflake-o" aria-hidden="true" />
                    {` ` + item.toString()}</li>);
            })
        );
    }
    return (<>
        <Container>
            <div className="title-content">
                <h2 className="title font-familt-jost" style={{ width: '100%', textAlign: 'center', }}>Prefered Services</h2>
            </div>
            <Row className='card-container'>
                {data?.map((x, i) => <Item x={x} i={i} key={i} mapItems={mapItems} />)}
            </Row>
        </Container>
    </>)
}
export default Preferedservices;



const Item = ({ x, i, mapItems }) => {
    return <div className="col-md-6 col-12 p-md-5 pt-md-3 pb-md-0 p-2" key={i} id="scrollto225">
        <div className="servicesMD row servicesMD-bg-color-1">
            <a className="col-4 p-0" href="#">
                <img className="image"
                    src={x.service_image_url}
                    alt={x.name} />
            </a>
            <div className="col-8 pt-1 position-relative">
                <div className="title">
                    <a href="#">{x.name}</a>
                </div>
                <div className="d-flex flex-row align-items-center" style={{ margin: "4% 0.625rem -2% 0%" }}>
                    <div className="p-rl-2 Price">₹ {Math.round(x.price)}</div>
                    <div className="p-rl-2 offerPrice">₹ {Math.round(x.discounted_price)}</div>
                    {x.discount && <div className="p-rl-2 discountTitle">{x.discount + "%"}</div>}
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