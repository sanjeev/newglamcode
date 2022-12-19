import React from "react"
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from "react-redux";
import store from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from '../components/Layout/index'
import "font-awesome/css/font-awesome.css";
import 'swiper/css';
import persistor from "../store/store"


function MyApp({ Component, pageProps }) {

    return (
        <>

            <React.Fragment>
                <Provider store={store}>

                    <Layout>
                        <Component {...pageProps} />
                    </Layout>

                </Provider>

            </React.Fragment>

        </>

    );
}

export default MyApp;
