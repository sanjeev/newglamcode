import React from "react"
import Header from "../Header";
import Footer from "../Footer";
import LoadingScreen from "../LoadingScreen/loadingScreen";
import { frontService } from "../../_services/front.services";
import { menuSave, mainCategory, mainLocation } from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { responsiveReturn } from '../../responsiveCheck'
import { ToastContainer } from "react-toastify";
function Layout({ children }) {
    const dispatch = useDispatch();
    const val = responsiveReturn("D", "M", 991);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {

        localStorage.setItem('devise', val);

        setTimeout(() => {
            setLoading(false)
        }, 200);




    }, []);



    React.useEffect(() => {




        frontService.allSlider()
            .then(
                res => {
                    if (res.status === 'success') {
                        dispatch(menuSave(res.slider_images));
                    } else {
                        console.log('Something went wrong !!');
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                }
            )
        frontService.maincategory()
            .then(
                res => {

                    if (res.status === 'success') {
                        dispatch(mainCategory(res.maincategory));
                    } else {
                        console.log('Something went wrong !!');
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    //toast.error("Something went wrong !!", "Fashion Store");
                }
            )
        frontService.locationall()
            .then(
                res => {

                    if (res.status === 'success') {
                        dispatch(mainLocation(res.locations));
                    } else {
                        console.log('Something went wrong !!');
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    //toast.error("Something went wrong !!", "Fashion Store");
                }
            )


    }, []);


    return (
        <>
            <ToastContainer />

            {!loading ?
                (
                    <>

                        <div className="allsection">{children}</div>
                        <Footer />
                    </>
                ) : (
                    <>
                        <LoadingScreen />
                    </>
                )}
        </>
    );
}
export default Layout;
