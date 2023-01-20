import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LoadingScreen from "../components/LoadingScreen/loadingScreen";
import { frontService } from "../_services/front.services";

export default function Bookings() {
    const router = useRouter()
    const [items, setItems] = useState([])
    const [historyItems, setHistoryItems] = useState([])
    const [loading, setLoading] = useState(true)
    const user = JSON.parse(localStorage.getItem('gluserDetails'))

    useEffect(() => {
        frontService.myBookings(user.id)
            .then(
                res => {
                    if (res.status === 'success') {
                        console.log(res)
                        setItems(res.OngoingBookingsArr);
                        setHistoryItems(res.HistoryBookingsArr);
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
        {loading ? <LoadingScreen /> : <Container>
            <div className='mt-4 pt-4 row card-container'>
                <h4 className="font-12 fw-bold">Bookings</h4>
                {items && items.length > 0 ?
                    (items.map((e) => {
                        return <div className="col-lg-3" key={e.id}>
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
                    })) : <div className="mt-5">No Bookings Found</div>}
            </div>
            <div className='mt-4 pt-4 row card-container'>
                {historyItems.length > 0 && <h4 className="font-12 fw-bold">Previous Bookings</h4>}
                {historyItems && historyItems.length > 0 ?
                    (historyItems.map((e) => {
                        return <div className="col-lg-3" key={e.id}>
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
                    })) : ""}
            </div>
        </Container >}
    </div>
    )
}