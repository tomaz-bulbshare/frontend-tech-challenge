import React from 'react';

type Props = {
    title: string;
    altTag: string;
    imgSrc: string;
};

const FeedItemImage = (props: Props) => {
    const {title, altTag, imgSrc} = props;

    return (
        <div className='image-container'>
            <h1>{title}</h1>
            <img src={imgSrc} alt={altTag} />
        </div>
    );
};

export default FeedItemImage;