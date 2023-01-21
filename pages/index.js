import React from "react"
import Slider from "../components/Slider/homeSlider"
import Maincategory from "../components/Maincategory/maincategory"
import Maincategorymobile from "../components/Maincategory/Maincategorymobile"
import Faqs from "../components/Faqs/index"
import Serving from "../components/Serving"
import Knowmore from "../components/Knowmore"
import Head from 'next/head'
import Header from "../components/Header";
export default function Home() {



  return (
    <div className='background2'>
      <>
        <Head>
          <title>Glamcode Luxury Home Salon</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="title" content="Top Salon at Home |Salon Home Service| Home Salon services| Beauty Parlour Services at Home| near me| in Lucknow" data-react-helmet="true"></meta>
          <meta name="description" content="Bored of random Salon Visits? Book an appointment with GlamCode Luxury Salon at Home at an Affordable price. Offers Salon Home Service and provides professional Home Salon Services and is trending Beauty Parlor Services at Home in Lucknow. Offers Salon Services at Home,  Parlour services at Home, Beauty Services at Home, Salon at Home Services, Salon at Home in Lucknow, home salon in Lucknow, Beauty Parlour Services at Home, Beauty Services at Home in Lucknow, Home Salon near me, Hair Spa, facial and Waxing services, at home Manicure and pedicure Services, Body Massage near me in Lucknow." data-react-helmet="true"></meta>
          <meta name="keywords" content="Salon at Home,  Salon Home Service, professional Home Salon Services, Beauty Parlor Services at Home, Salon Services at Home, Parlour services at Home, Beauty Services at Home, Salon at Home Services, Salon at Home in Lucknow, home salon in Lucknow, Beauty Services at Home in Lucknow,  Home Salon near me, Hair Spa, Facial and Waxing services, at home Manicure and Pedicure Services, Body Massage near me in Lucknow. salon at home Lucknow, parlour at home, beauty parlour services list, beautician at home, home salon service in Lucknow, home salon in Lucknow, bridal makeup near me, hair spa at home, hair stylist at home,  home salon, home parlour service in Lucknow, home service beauty parlour in Lucknow, Best salon services in lucknow,  beauty parlour services at home, beauty services at home in lucknow, best bridal makeup artist in lucknow, salon in lucknow." data-react-helmet="true"></meta>
          <meta name="robots" content="index, follow" data-react-helmet="true"></meta>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" data-react-helmet="true"></meta>
          <meta name="language" content="English" data-react-helmet="true"></meta>
          <meta name="revisit-after" content="1 days" data-react-helmet="true"></meta>
          <meta name="author" content="Glamcode" data-react-helmet="true"></meta>
          <meta name="zipcode" content="201301" data-react-helmet="true"></meta>
          <meta name="city" content="Noida" data-react-helmet="true"></meta>
          <meta name="country" content="India" data-react-helmet="true"></meta>
          <meta name="Geography" content="B1002 Amrapali Zodiac, Sector 120, Noida, Uttar Pradesh 201301" data-react-helmet="true"></meta>
          <meta name="geo.position" content="28.5839021,77.3959942" data-react-helmet="true"></meta>
          <meta name="ICBM" content="28.5839021,77.3959942" data-react-helmet="true"></meta>
        </Head>

        <Header />

        <Slider />
        {localStorage.getItem('devise') === 'D' ? (<>
          <div className="col-12 " style={{ marginTop: '50px' }}>
            <hr style={{ border: '2px solid rgb(102, 102, 102)', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.5px 0.5px', backgroundColor: 'rgb(255, 255, 255)' }} />
          </div></>) : (
          <>
            <div className="title-content" style={{ marginTop: '32px' }}>
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

          <Maincategorymobile /></>)}




        {localStorage.getItem('devise') === 'D' ? (
          <div className="col-12 " style={{ marginTop: '50px' }}>
            <hr style={{ border: '2px solid rgb(102, 102, 102)', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.5px 0.5px', backgroundColor: 'rgb(255, 255, 255)' }} />
          </div>) : ''}


        <Faqs />
        {localStorage.getItem('devise') === 'D' ? (
          <div className="col-12 " style={{ marginTop: '50px' }}>
            <hr style={{ border: '2px solid rgb(102, 102, 102)', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.5px 0.5px', backgroundColor: 'rgb(255, 255, 255)' }} />
          </div>
        ) : ''}


        {localStorage.getItem('devise') === 'D' ? (<Serving />) : ''}


        <Knowmore />
      </>


    </div>
  )
}