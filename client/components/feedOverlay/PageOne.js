import React from 'react';
import './pageOne.css';

function PageOne({ item }) {
    try {
        if (item === null) {
            return null;
        }
        return (
            <div id="page-1" className="page-1">
                <div className="content-area">
                    <img className="banner-image" src={item.banner_image} alt={`Image of ${item.brand.name}`} ></img>
                </div>
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default PageOne;
