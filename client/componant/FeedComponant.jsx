
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeedComponant.css';
import LazyLoad from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';


const FeedComponant = () => {
    const [feedData, setFeedData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4000/feed.json');
          setFeedData(response.data);
        } catch (error) {
          console.error('Error fetching feed data:', error);
        }
      };
  
      fetchData();
    }, []); 
  
    return (
        <div className="feed-container">
        {feedData.map((feedItem) => (
          <div className="feed-item" key={feedItem.briefref}>
            <div className="header">
                <div className="brand-logo-name">
              <img src={feedItem.brand.logo} alt={`${feedItem.brand.name} Logo`} className="brand-logo" loading='lazy' />
               <p className="brand-name">{feedItem.brand.name}</p>
               </div>
              <div className="brand-info">
               
                <a href="#" className="join-link">
                  Join Brief Now
                </a>
              </div>
            </div>
            <LazyLoad height={200} offset={100}>
            <img src={feedItem.banner_image} alt={feedItem.feed_title} className="feed-image" loading='lazy' />
            </LazyLoad>
            <h2 className="feed-title">{feedItem.feed_title}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeedComponant;