import React from "react";
import Modalpup from '../Modal/loction';
import { useRouter } from 'next/router'
export default function Card(props) {
    const router = useRouter()
    const [modalShow, setModalShow] = React.useState(false);
    const callurl = (slug, id) => {
        localStorage.setItem('mid', id);
        router.push('/category/' + slug + '/' + localStorage.getItem('cityname').toLowerCase())
    }

    return (
        <>
            {localStorage.getItem("id") ? (<>
                <div className={props.cname} onClick={() => callurl(props.slug, props.id)} >
                    <div className="salonehome-all-Category-box" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                        <div className="salonehome-all-Category-images">
                            <img src={`https://www.glamcode.in/user-uploads/maincategory/${props.image}`} alt={props.name} />
                        </div>
                    </div>
                    <div className="salone-all-category-text">{props.name}</div>
                </div>

            </>) : (
                <>
                    <div className={props.cname} onClick={() => setModalShow(true)}>
                        <div className="salonehome-all-Category-box" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                            <div className="salonehome-all-Category-images">
                                <img src={`https://www.glamcode.in/user-uploads/maincategory/${props.image}`} alt={props.name} />
                            </div>
                        </div>
                        <div className="salone-all-category-text">{props.name}</div>
                    </div >
                    <Modalpup show={modalShow} onHide={() => setModalShow(false)}
                        noRedirect={true}
                        onSelect={(id, name) => {
                            localStorage.setItem('mid', props.id);
                            localStorage.setItem('tid', id);
                            router.push('/category/' + props.slug + '/' + name.toLowerCase())
                        }}
                    /></>
            )
            }


        </>
    )

}