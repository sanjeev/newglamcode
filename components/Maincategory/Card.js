import React from "react";

export default function Card(props) {
    return (
        <div className="salonehome-all-Category">
            <div className="salonehome-all-Category-box" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <div className="salonehome-all-Category-images">
                    <img src={`https://www.glamcode.in/user-uploads/maincategory/${props.image}`} alt={props.name} />
                </div>
            </div>
            <div className="salone-all-category-text">{props.name}</div>
        </div>
    )

}