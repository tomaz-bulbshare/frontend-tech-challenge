import React from 'react';
import FeedItemImage from './FeedItemImage';
import FeedItemDetails from './FeedItemDetails';

type Props = {
    title: string;
    imgSrc: string;
    name: string;
    link: string;
};

const FeedItem = (props: Props) => {
    const {title, imgSrc, name, link} = props;

    return (
        <li>
            <FeedItemImage altTag={title} imgSrc={imgSrc} title={title} />
            <FeedItemDetails name={name} link={link} linkTitle={title} />
        </li>
    );
};

export default FeedItem;