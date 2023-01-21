import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import PlaceAutocomplete from '../components/PlaceAutocomplete'
import { useForm } from 'react-hook-form';
import { frontService } from "../_services/front.services";
import Router, { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { userAddress, userData } from '../store/actions/index';
import Login from '../components/Login';

function MydModalWithGrid(props) {

    const dispatch = useDispatch();
    const userdetails = useSelector(state => state.userdetails?.userdetails);

    const [location, setLocation] = useState('');
    const [latLng, setLatLng] = useState({ lat: '', lng: '' });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();





    const handleRegistration = (data) => {

        const adde = { addressHome: data.addressHome, address: data.address, id: data.id, location: location, lat: latLng.lat, lng: latLng.lng }
        frontService.updateAddress(adde)
            .then(
                res => {

                    if (res.status === 'success') {

                        Router.push('/payment')
                        dispatch(userAddress(res.data));
                    } else {
                        toast.error(res.message, "error");

                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    //toast.error("Something went wrong !!", "Fashion Store");
                }
            )
    }

    return (
        <Modal {...props} backdrop="static"
            keyboard={false} centered aria-labelledby="contained-modal-title-vcenter" className='modbox'>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Add New Address
                </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <Modal.Body className="show-grid">


                    <div className="form-group mb-2">
                        <label htmlFor="addressHome">Address Type Ex. Home, Office etc</label>
                        <input type="text" className="form-control" id="addressHome" placeholder="Address Type Ex. Home, Office etc" defaultValue="Home" name="addressHome" {...register('addressHome')} required />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="home">Address</label>
                        <input type="text" className="form-control" id="home" name="address" {...register('address')} placeholder="Address" required />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="location">Location</label>
                        <input name="id" {...register('id')} type="hidden" defaultValue={userdetails?.id} />
                        <input name="location" {...register('location')} type="hidden" value={location} />
                        <input name="lat" {...register('lat')} type="hidden" value={latLng?.lat} />
                        <input name="lng" {...register('lng')} type="hidden" value={latLng?.lng} />
                        <PlaceAutocomplete onChangeValue={setLocation} onValue={setLatLng} />

                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Close</Button>
                    <Button variant="primary" type="submit" style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Save changes</Button>
                </Modal.Footer>
            </form>

        </Modal>
    );
}
function Myaddress() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [addressl, setAddresslist] = useState([]);
    const userdetails = useSelector(state => state.userdetails?.userdetails);
    const [modalShow, setModalShow] = useState(false);
    const user = JSON.parse(localStorage.getItem('gluserDetails'))
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        if (!localStorage.getItem('gluserDetails')) {
            // router.push("/login")
        }
        frontService.addressList(userdetails?.id)
            .then(
                res => {

                    if (res.status === 'success') {
                        setAddresslist(res.address);
                    } else {
                        toast.error(res.message, "error");
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    //toast.error("Something went wrong !!", "Fashion Store");
                }
            )
    }, [])

    const handleRegistration = (data) => {
        frontService.useSave(data)
            .then(
                res => {

                    if (res.status == 'success') {

                        localStorage.setItem('gluserDetails', JSON.stringify(res.user));
                        dispatch(userData(res.user));
                        toast(res.message, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    } else if (res.status == 'fail') {
                        toast(res.message, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                    } else {
                        toast('Invalid', {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                    }
                }, error => {

                    toast('Invalid', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                }
            )

    }
    const defaultAddress = (id, user_id) => {
        const data = {
            "id": id,
            "user_id": user_id,
        }
        frontService.defaultaddress(data)
            .then(
                res => {

                    if (res.status === 'success') {
                        setAddresslist(res.address);
                        toast.success(res.message, "Fashion Store");
                        dispatch(userAddress(res.setaddress));
                        Router.push('/payment')
                    } else {
                        toast.error(res.message, "error");

                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    //toast.error("Something went wrong !!", "Fashion Store");
                }
            )
    }
    const deleteAddress = (id, user_id) => {

        const data = {
            "id": id,
            "user_id": user_id,
        }
        frontService.deleteaddress(data)
            .then(
                res => {

                    if (res.status === 'success') {
                        setAddresslist(res.address);
                    } else {
                        toast.error(res.message, "error");

                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    //toast.error("Something went wrong !!", "Fashion Store");
                }
            )
    }
    return (<>
        {!user && <Login show={!user} />}

        <div className="servicedesk-bg address-all" style={{ paddingBottom: '50px' }}>
            <div className="header-css-head">
                <Container fluid >
                    <div className="d-flex flex-row" onClick={() => router.back()}>
                        <div className="icon-alignments">
                            <i className="fa fa-chevron-left fontSize-m-20" />
                        </div>
                        <p className="inside-text-head">Select Address</p>
                    </div>
                </Container>
            </div>
            <Container fluid >
                <Row className='mt-5'>
                    {/* <div className="section-address">
                        <div className="inside-title-new">
                            <button className="Adbutton">
                                Add Address
                                <span style={{ marginLeft: 5 }} className="inside-checkall">
                                    <i className="fa fa-plus" />
                                </span>
                            </button>
                        </div>
                    </div> */}

                </Row>
                <Row className='mt-5' style={{ minHeight: '500px' }}>

                    <Col md={8} className="mb-4">
                        <div className='btuadd'>
                            <h5 className="card-title">My Addresses</h5>
                            <a onClick={() => setModalShow(true)} href="#" className="btn btn-primary" style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Add Address</a>
                        </div>
                        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />

                        {addressl.map((popup, i) => (
                            <div key={i} className={popup.is_primary === 1 ? 'card mt-2 active' : 'card mt-2'}>
                                <div className="card-body" >
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ cursor: 'pointer', marginBottom: '0px !important', padding: '14px' }} className="card-text" onClick={() => defaultAddress(popup.address_id, popup.user_id)}>{popup.address_heading},{popup.address},{popup.street}</p>
                                        <p className='deletedata' onClick={() => deleteAddress(popup.address_id, popup.user_id)}><i className="fa fa-trash-o" aria-hidden="true"></i></p>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">User Details</h5>
                                <form onSubmit={handleSubmit(handleRegistration)}>
                                    <div className="form-group mb-2">
                                        <label htmlFor="exampleInputPhone">Phone No.</label>
                                        <input type="text" className="form-control" id="exampleInputPhone" placeholder="Phone" name="name" defaultValue={userdetails?.mobile} {...register('mobile')} required />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="exampleInputName">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName" placeholder="Name" defaultValue={userdetails?.name} name="name" {...register('name')} required />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" {...register('email')} defaultValue={userdetails?.email} required />
                                        {/* <small id="emailHelp" "form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>

                                    <input type="hidden" className="form-control" name="id" defaultValue={userdetails?.id} {...register('id')} />
                                    <button type="submit" className="btn btn-primary" style={{ background: '#7c00b7', border: '1px solid #7c00b7' }}>Edit Profile</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
        <ToastContainer />
    </>)
}
export default Myaddress;