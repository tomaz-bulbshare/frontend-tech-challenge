import React, { useEffect, useState } from 'react';
import './App.css';
import Feed from './components/Feed';
import FeedOverlay from './components/FeedOverlay';

function App() {
  const [feedData, setFeedData] = useState([]);
  const [page, setPage] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  function fetchNextPage() {
    const _page = page + 1;
    setPage(_page);
  }

  function handleSetActiveItem(item) {
    // when opening overlay, save previous scroll Y position
    // when closing overlay, scroll to saved scroll Y position
    if (item === null) {
        window.requestAnimationFrame(() => {
          window.scrollTo({ left: 0, top: scrollY, behavior: "instant" });
        })
    } else {
      setScrollY(window.scrollY);
    }
    setActiveItem(item);
  }

  useEffect(() => {
    async function init() {
      // FEED
      let newFeedData = await fetch(`http://localhost:4000/feed?PAGE=${page}`);
      newFeedData = await newFeedData.json();
      //@ts-ignore
      setFeedData([...feedData, ...newFeedData]);
    }
    init();
  }, [page]);

  return (
    <div className="App">
      {/* @ts-ignore */}
      <FeedOverlay activeItemState={{ activeItem, setActiveItem: handleSetActiveItem }} />
      {/* @ts-ignore */}
      <Feed data={feedData} fetchNextPage={fetchNextPage} activeItemState={{ setActiveItem: handleSetActiveItem }} />
    </div>
  );
}

export default App;
