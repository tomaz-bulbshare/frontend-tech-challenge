import React from 'react';
import './feedOverlayControls.css';

function FeedOverlayControls({ closeOverlay }) {
    try {
        function scrollUp() {
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }
        function scrollDown() {
            const el = document.querySelector("#page-2");
            const rect = el.getBoundingClientRect();
            window.scrollTo({ left: rect.x, top: rect.y, behavior: "smooth" });
        }
        return (
            <div className="overlay-controls">
                <button className="button close-button"><img className="" src="./close-dialog.svg" alt="close icon" onClick={closeOverlay} ></img></button>
                <button className="button up-button"><img className="" src="./switch-down.svg" alt="up icon" onClick={scrollUp} ></img></button>
                <button className="button down-button"><img className="" src="./switch-down.svg" alt="down icon" onClick={scrollDown} ></img></button>
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default FeedOverlayControls;
