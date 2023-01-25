
import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import { frontService } from "../_services/front.services";
import LoadingScreen from "../components/LoadingScreen/loadingScreen"
import Maincategory from "../components/Maincategory/maincategory"
import Faqs from "../components/Faqs/index"
import Serving from "../components/Serving"
import Knowmore from "../components/Knowmore"
import Pageslider from "../components/Slider/pageSlider"
import Preferedservices from "../components/Preferedservices/Preferedservices"
import Maincategorymobile from "../components/Maincategory/Maincategorymobile"
import Header from "../components/Header/index"
export default function getRoute() {
    // Calling useRouter() hook
    const router = useRouter()
    const slug = router.query.data;
    const [knowmore, setKnowmore] = React.useState();
    const [items, setItems] = React.useState();

    React.useEffect(() => {
        frontService.knowDataSlug(slug)
            .then(
                res => {
                    if (res.status === 'success') {
                        if (!res.knowdataslug[0]) {
                            router.push("/404")
                        } else {
                            setKnowmore(res.knowdataslug[0]);
                        }
                        // console.log(res.knowdataslug[0]);
                    } else {
                        console.log('Something went wrong !!');
                        //toast.error(res.errors[0], "Fashion Store");
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                    //toast.error("Something went wrong !!", "Fashion Store");
                }
            )

        frontService.preferredPack(localStorage.getItem("id"))
            .then(
                res => {
                    if (res.status === 'success') {
                        setItems(res.preferredPack);
                    } else {
                        console.log('Something went wrong !!');
                    }
                },
                error => {
                    console.log('Something went wrong !!');
                }
            )

    }, [slug]);

    return (


        <>

            <div className='background2'>
                {/* <div>
                    <h1>Sanjeev</h1>
                    <h2>pathname:- {router.pathname}</h2>
                    <h2>asPath:- {router.asPath}</h2>
                </div> */}


                {knowmore ? (
                    <>
                        <Head>
                            <title>Glamcode Luxury Home Salon</title>
                            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                            <meta name="title" content={knowmore.seo_title} data-react-helmet="true"></meta>
                            <meta name="description" content={knowmore.seo_desc} data-react-helmet="true"></meta>
                            <meta name="keywords" content={knowmore.seo_key} data-react-helmet="true"></meta>
                            <meta name="robots" content="index, follow" data-react-helmet="true"></meta>
                            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" data-react-helmet="true"></meta>
                            <meta name="language" content="English" data-react-helmet="true"></meta>
                            <meta name="revisit-after" content="1 days" data-react-helmet="true"></meta>
                            <meta name="author" content="Glamcode" data-react-helmet="true"></meta>
                            <meta name="zipcode" content={knowmore.zip} data-react-helmet="true"></meta>
                            <meta name="city" content={knowmore.city} data-react-helmet="true"></meta>
                            <meta name="country" content="India" data-react-helmet="true"></meta>
                            <meta name="Geography" content={knowmore.name} data-react-helmet="true"></meta>
                            <meta name="geo.position" content={`${knowmore.latitude},${knowmore.longitude}`} data-react-helmet="true"></meta>
                            <meta name="ICBM" content={`${knowmore.latitude},${knowmore.longitude}`} data-react-helmet="true"></meta>
                        </Head>
                        <Header />
                        <Pageslider />

                        {localStorage.getItem('devise') === 'D' ? (<>
                            <div className="col-12 ">
                                <hr style={{ border: '2px solid #ff6', margin: 10, boxShadow: '0px 0.5px 0.5px rgba(0, 0, 0, 0.25)', backgroundColor: '#FFFFFF' }} />
                            </div></>) : (
                            <>
                                <div className="title-content">
                                    <h2
                                        className="title font-familt-jost"
                                        style={{ width: "100%", textAlign: "center" }}
                                    >
                                        Services
                                    </h2>
                                </div>

                            </>
                        )}




                        {localStorage.getItem('devise') === 'D' ? (<Maincategory />) : (<> <hr className="hr-white"></hr>

                            <Maincategorymobile /></>)
                        }


                        <div className="col-12 " style={{ marginTop: '50px' }}>
                            <hr style={{ border: '2px solid rgb(102, 102, 102)', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.5px 0.5px', backgroundColor: 'rgb(255, 255, 255)' }} />
                        </div>

                        <Preferedservices data={items} />


                        <Faqs slug={slug} />
                        <div className="col-12 " style={{ marginTop: '50px' }}>
                            <hr style={{ border: '2px solid rgb(102, 102, 102)', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.5px 0.5px', backgroundColor: 'rgb(255, 255, 255)' }} />
                        </div>

                        {localStorage.getItem('devise') === 'D' ? (<Serving />) : ''}

                        <Knowmore />
                    </>
                ) : <LoadingScreen />}
            </div>
        </>




    )
}