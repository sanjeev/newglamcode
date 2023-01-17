import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LoadingScreen from "../components/LoadingScreen/loadingScreen";
import { frontService } from "../_services/front.services";

export default function blogs() {
    const router = useRouter()
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        frontService.blogs()
            .then(
                res => {
                    if (res.status === 'success') {
                        setItems(res.services);
                        setLoading(false)
                    } else {
                        console.log('Something went wrong !!');
                        setLoading(false)
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    setLoading(false)
                }
            )
    }, []);

    return (<section>
        <div className="header-css-head">
            <Container fluid >
                <div className="d-flex flex-row" onClick={() => router.back()}>
                    <div className="icon-alignments">
                        <i className="fa fa-chevron-left fontSize-m-20" />
                    </div>
                    <p className="inside-text-head">Blogs</p>
                </div>
            </Container>
        </div>

        {loading ? <LoadingScreen /> : <div style={{ minHeight: "80vh" }} className="d-flex align-items-center justify-content-center">Items</div>}
    </section>
    )
}