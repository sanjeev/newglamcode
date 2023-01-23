import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LoadingScreen from "../components/LoadingScreen/loadingScreen";
import { frontService } from "../_services/front.services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import ConfirmBooking from "../components/Modal/ConfirmBooking";

export default function Bookings() {
    const router = useRouter()
    const [items, setItems] = useState([])
    const [historyItems, setHistoryItems] = useState([])
    const [loading, setLoading] = useState(true)
    const user = JSON.parse(localStorage.getItem('gluserDetails'))

    useEffect(() => {
        if (!localStorage.getItem('gluserDetails')) {
            router.push("/login")
        }
        getBookings()

    }, []);

    const getBookings = () => {
        frontService.myBookings(user?.id)
            .then(res => {
                if (res.status === 'success') {
                    setItems(res.OngoingBookingsArr);
                    setHistoryItems(res.HistoryBookingsArr);
                    setLoading(false)
                } else {
                    console.log('Something went wrong !!');
                    setLoading(false)
                }
            }, error => {
                console.log('Something went wrong !!');
                setLoading(false)
            }
            )
    }

    return (<>
        <div className="servicedesk-bg checkout-all min-vh-100" id="myBookings" style={{ paddingBottom: '50px' }}>
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
                <div className='mt-4 pt-xl-5 pt-4  card-container'>
                    <h4 className="font-12 fw-bold mb-xl-4 mb-2">Ongoing Bookings</h4>
                    <div className='row'>
                        {items && items.length > 0 ?
                            (items.map((e) => {
                                return <Item e={e} key={e.booking_id} user={user} getBookings={getBookings} update={true} />
                            })) : <div className="mt-5 col-12">No Ongoing Booking</div>}
                    </div>
                </div>
                <div className='mt-4 pt-xl-5 pt-4 row card-container'>
                    <h4 className="font-12 fw-bold mb-xl-4 mb-2">History Bookings</h4>
                    <div className='row'>
                        {historyItems && historyItems.length > 0 ?
                            (historyItems.map((e) => {
                                return <Item e={e} key={e.booking_id} />
                            })) : <div className="mt-5 col-12">No History Booking</div>}
                    </div>
                </div>
            </Container >}
        </div>
        <ToastContainer />
    </>
    )
}


const Item = ({ e, user, getBookings, update = false }) => {
    const router = useRouter()
    const [sending, setSending] = useState(false)
    const [open, setOpen] = useState(false)

    const cancelBooking = (data) => {
        const booking = { user_id: user.id, bookingid: data.booking_id, ty: "1" }
        setSending(true)
        frontService.cancelBooking(booking)
            .then(
                res => {
                    if (res.status === 'success') {
                        setOpen(false)
                        toast.success("Booking Cancelled", "success");
                        getBookings()
                    } else {
                        toast.error(res.message, "error");

                    }
                    setSending(false)
                },
                error => {
                    console.log('Something went wrong !!');
                    //toast.error("Something went wrong !!", "Fashion Store");
                }
            )
    }

    return <div className="col-lg-4 col-12 mb-xl-4 mb-3" key={e.booking_id}>
        <ConfirmBooking sending={sending} show={open} onHide={() => setOpen(false)} cancelBooking={cancelBooking} item={e} />
        <div className="servicesMD p-3   servicesMD-bg-color-1 d-flex justify-content-between  h-100 flex-column">
            <h5 className="text-center">{e.service_name}</h5>
            <div className="d-flex flex-row justify-content-between-flex">
                <p className="booking-title">Booking Date</p>
                <p className="booking-desc">{moment(e.booking_time).format('MM/DD/YYYY')}</p>
            </div>
            <div className="d-flex flex-row justify-content-between-flex">
                <p className="booking-title">Booking Time</p>
                <p className="booking-desc">{moment(e.booking_time).format('h:mm a')}</p>
            </div>
            <div className="d-flex flex-row justify-content-between-flex">
                <p className="booking-title">Payment Type</p>
                <p className="booking-desc">{e.payment_gateway}</p>
            </div>
            <div className="d-flex flex-row justify-content-between-flex">
                <p className="booking-title">Total Amount</p>
                <p className="booking-desc">₹{" "}{e.total_amount}</p>
            </div>
            <div className="d-flex flex-row justify-content-between-flex">
                <p className="booking-title">Order Status</p>
                <p className="booking-desc">{e.order_status}</p>
            </div>
            {update && e.order_status === "pending" &&
                <div className="row mt-2">
                    <div className="col-lg-6 col-6 px-2">
                        <button style={{ background: "rgb(124, 0, 183)", border: "1px solid rgb(124, 0, 183)" }} className="btn btn-danger w-100" onClick={() => setOpen(true)} >Cancel Order</button>
                    </div>
                    <div className="col-lg-6 col-6 px-2">
                        <button style={{ background: "rgb(124, 0, 183)", border: "1px solid rgb(124, 0, 183)" }} className="btn btn-primary w-100" onClick={() => router.push(`/reschedule/${e.booking_id}`)}>Reschedule</button>
                    </div>
                </div>
            }
        </div>
    </div>
}