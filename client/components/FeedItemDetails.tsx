import React from 'react';

type Props = {
    name: string;
    link: string;
    linkTitle: string;
};

const FeedItemDetails = (props: Props) => {
    const {name, link, linkTitle} = props;


    return (
        <div className='details'>
            <span className='title'>{name}</span>
            <a href={link} title={linkTitle}>Join Brief Now</a>
        </div>
    );
};

export default FeedItemDetails;