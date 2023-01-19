import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export default function Bookings() {
    const router = useRouter()
    const DATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    return (<div className="servicedesk-bg checkout-all" style={{ paddingBottom: '50px' }}>
        <div className="header-css-head">
            <Container fluid >
                <div className="d-flex flex-row" onClick={() => router.back()}>
                    <div className="icon-alignments">
                        <i className="fa fa-chevron-left fontSize-m-20" />
                    </div>
                    <p className="inside-text-head">Bookings</p>
                </div>
            </Container>
        </div>
        <Container>
            <div className='mt-5 pt-2 row card-container'>
                {DATA.map((e, i) => {
                    return <div className="col-lg-3">
                        <div className="p-2">
                            <div className="servicesMD p-3 row servicesMD-bg-color-1 d-flex justify-content-center align-items-center">
                                <h2 className="text-center">Item {i + 1}</h2>
                                <div>02/12/2023</div>
                                <div className="d-flex flex-row justify-content-between-flex">
                                    <p className="p-1 font-family-alata">Status</p>
                                    <p className="p-1 font-family-alata">Pending</p>
                                </div>
                                <button className="btn btn-danger">Cancel Order</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </Container >
    </div>
    )
}