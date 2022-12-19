import React from "react";
import Modalpup from '../Modal/loction';
import { useRouter } from 'next/router'
export default function Card(props) {
    const router = useRouter()
    const [modalShow, setModalShow] = React.useState(false);
    const callurl = (slug) => {
        router.push('/category/' + slug)
    }
    return (
        <>
            {localStorage.getItem("id") ? (<>
                <div className="salonehome-all-Category" onClick={() => callurl(props.slug)} >
                    <div className="salonehome-all-Category-box" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                        <div className="salonehome-all-Category-images">
                            <img src={`https://www.glamcode.in/user-uploads/maincategory/${props.image}`} alt={props.name} />
                        </div>
                    </div>
                    <div className="salone-all-category-text">{props.name}</div>
                </div>

            </>) : (
                <>
                    <div className="salonehome-all-Category" onClick={() => setModalShow(true)}>
                        <div className="salonehome-all-Category-box" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                            <div className="salonehome-all-Category-images">
                                <img src={`https://www.glamcode.in/user-uploads/maincategory/${props.image}`} alt={props.name} />
                            </div>
                        </div>
                        <div className="salone-all-category-text">{props.name}</div>
                    </div >
                    <Modalpup show={modalShow} onHide={() => setModalShow(false)} /></>
            )
            }


        </>
    )

}