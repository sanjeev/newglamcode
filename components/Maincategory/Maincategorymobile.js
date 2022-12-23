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
                    <Card cname="salonehome-all-Categorym" key={index} name={item.name} id={item.id} image={item.image} slug={item.slug} />
                );
            })}



        </Row>
    )
}