
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeedComponant.css';


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
            <img src={feedItem.banner_image} alt={feedItem.feed_title} className="feed-image" loading='lazy' />
            <h2 className="feed-title">{feedItem.feed_title}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeedComponant;