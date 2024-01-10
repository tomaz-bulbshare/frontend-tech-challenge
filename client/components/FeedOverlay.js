import React from 'react';
import './feedOverlay.css';

import PageOne from "./feedOverlay/PageOne";
import PageTwo from "./feedOverlay/PageTwo";
import Comments from "./feedOverlay/Comments";
import FeedOverlayControls from "./feedOverlay/FeedOverlayControls";

function FeedOverlay({activeItemState}) {
    const item = activeItemState.activeItem;

    function closeOverlay() {
        activeItemState.setActiveItem(null);
    }

    if (item === null) {
        return null;
    }

    try {
        window.scrollTo({ left: 0, top: 0, behavior: "instant" });

        return (
            <div className="feed-overlay">
                <div className="scroll-area">
                    <PageOne item={item} />
                    <PageTwo item={item} />
                </div>
                <div className="comment-area">
                    <Comments item={item} />
                </div>
                <FeedOverlayControls closeOverlay={closeOverlay} />
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default FeedOverlay;
