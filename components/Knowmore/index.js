import React from "react";
import { frontService } from "../../_services/front.services";
import LoadingScreen from "../LoadingScreen/loadingScreen"
export default function Knowmore() {

    const [knowmore, setKnowmore] = React.useState();

    React.useEffect(() => {
        frontService.knowData()
            .then(
                res => {

                    if (res.status === 'success') {
                        setKnowmore(res.knowdata[0].content);

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
    }, []);
    return (
        <>
            <div className="title-content">
                <h2 className="title" style={{ width: '100%', textAlign: 'center', marginTop: '32px' }} >
                    Know More
                    <i className="fa fa-chevron-up" style={{ marginLeft: 20, }} aria-hidden="true"></i>
                </h2>
            </div>
            {knowmore ? (<>
                <div className="removeknowmore" key={0} dangerouslySetInnerHTML={{ __html: knowmore }} style={{ padding: 30, fontFamily: 'Alata', fontStyle: 'normals', fontSize: 16, textAlign: 'center', }} />
            </>) : <LoadingScreen />}


        </>
    )

}