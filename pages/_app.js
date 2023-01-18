import React from "react"
import "../styles/globals.css";
import "../styles/mobilepage.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from "react-redux";
import store from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from '../components/Layout/index'
import "font-awesome/css/font-awesome.css";
import 'swiper/css';
import Script from 'next/script'
import persistor from "../store/store"
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {

    return (
        <>
            <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD15KqCiXEN2FKVzFgsO3Td-MyaeFotL84&libraries=places" />
            <React.Fragment>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        {() => (
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        )}

                    </PersistGate>
                </Provider>

            </React.Fragment>

        </>

    );
}

export default MyApp;
