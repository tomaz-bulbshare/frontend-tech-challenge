import React, { useEffect, useRef } from 'react';
import './feed.css';
import FeedItem from "./FeedItem";

function Feed({ data, fetchNextPage, activeItemState}) {
    const target = useRef();

    try {
        useEffect(() => {
            function init() {
                if (target.current !== undefined) {
                    let observer = new IntersectionObserver(fetchNextPage);
                    observer.observe(target.current);
                } else {
                    setTimeout(() => {
                        init();
                    }, 100);
                }
            }
            init();
        }, [])

        if (data.length === 0) {
            return null;
        }

        return (
            <div className="feed">
                {data.map((item, index) => {
                    return <FeedItem key={index} data={item} activeItemState={activeItemState} />
                })}
                <span ref={target} className="fetch-next-page"></span>
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default Feed;
