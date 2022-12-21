import React from "react";
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Card from "./Card";
export default function Maincategory() {
    const [showCategory, setShowcategory] = React.useState([]);
    const datacat = useSelector(state => state.maincat);

    return (
        <Row>


            {datacat.maincategory?.map((item, index) => {

                return (
                    <Col lg="2" md="4" className="mt-5" key={index} >
                        <Card cname="salonehome-all-Category" id={item.id} name={item.name} image={item.image} slug={item.slug} />
                    </Col>

                );
            })}



        </Row>
    )
}