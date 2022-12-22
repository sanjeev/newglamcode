
import React from "react";
import ViewCenteredModal from '../Modal/ViewCenteredModal'
export default function ViewDetails(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="viewDetails" onClick={() => setModalShow(true)}>View Details</div>

            <ViewCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                datato={props.alldata}

            />
        </>
    );
}