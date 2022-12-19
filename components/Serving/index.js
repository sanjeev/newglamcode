
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { frontService } from "../../_services/front.services";
import { useSelector } from 'react-redux';
export default function Serving() {
    const dataloctions = useSelector(state => state.loctions);
    return (<>
        <Container fluid>
            <div className="section-title text-center">
                <h2 className="title">SERVING IN</h2>
            </div>
            <div className="SERVINGin">
                <Row>
                    <Col>
                        <div
                            className="d-flex flex-row"
                            style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}
                        >
                            {dataloctions.location?.map((x, i) =>
                                <div className="p-2" key={i}>
                                    <a className="salonehome-all-Category">
                                        <div
                                            className="salonehome-all-Category-box"
                                            style={{ backgroundColor: "rgb(255, 255, 255)" }}
                                        >
                                            <div className="salonehome-all-Category-images">
                                                <img
                                                    src={`https://www.glamcode.in/user-uploads/locations/${x.image}`}
                                                    alt={x.city}
                                                    style={{ marginTop: 10 }}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="salone-all-category-text">
                                            <p>{x.city}</p>
                                        </div>
                                    </a>
                                </div>
                            )}

                        </div>
                    </Col>
                </Row>

            </div>
        </Container>
    </>)

}