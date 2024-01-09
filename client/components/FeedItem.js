
import React from 'react';
import './feedItem.css';

function FeedItem({data}) {
    try {
        return (
            <div className="feed-item">
                <div className="header">
                    <span className="left text-left">
                        <img className="image" src={data.brand.logo} />
                        <span className="name">{data.brand.name}</span>
                    </span>
                    <span className="right text-right">
                        <a className="link "href="/404">JOIN BRIEF NOW</a>
                    </span>
                </div>
                <img className="main-image" src={data.banner_image} />
                <h2 className="title">{data.feed_title}</h2>
            </div>
        );
    } catch (error) {
        console.log(error);
    }
}

export default FeedItem;
