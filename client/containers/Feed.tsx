import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedItem from '../components/FeedItem';

const Feed = () => {
    const [feedData, setFeedData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/data/feed.json');
            setFeedData(response.data);
          } catch (error) {
            console.error('Error fetching feed data:', error);
          }
        };
  
        fetchData();
      }, []);

      const isFeedDataEmpty = feedData.length === 0;

    return isFeedDataEmpty ? (<p className='no-feed-data'>No feed data found.</p>) : (
      <ul className='feed'>
          {
              feedData.map((item) => (
                  <FeedItem 
                      key={item.briefref} 
                      title={item.feed_title} 
                      imgSrc={item.banner_image} 
                      name={item.brand.name} 
                      link='#' />
              ))
          }
      </ul>
  ) ;
};

export default Feed;