import React from 'react';
import './pageTwo.css';

function PageTwo({ item }) {
    try {
        if (item === null) {
            return null;
        }
        return (
            <div id="page-2" className="page-2">
                <div className="content-area">
                    <img className="brand-logo" src={item.brand.logo} alt={`Image of ${item.brand.name}`} ></img>
                    <h1>{item.feed_title}</h1>
                    <p>{item.starts_on.replace(/(\d{4})-(\d{2})-(\d{2}).*/, "$3 $2 $1")}</p>
                    <p>{item.banner_text}</p>
                    <img className="ad-image" src={item.ad_1_image} alt={`Image of ${item.brand.name}`} ></img>
                    <p className="description">{item.description}</p>
                    <img className="ad-image" src={item.ad_2_image} alt={`Image of ${item.brand.name}`} ></img>
                </div>
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default PageTwo;
