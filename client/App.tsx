import React, { useEffect, useState } from 'react';
import './App.css';
import Feed from './components/Feed';

function App() {
  const [feedData, setFeedData] = useState([]);
  const [page, setPage] = useState(0);

  function fetchNextPage() {
    const _page = page + 1;
    setPage(_page);
  }

  useEffect(() => {
    async function init() {
      // const briefref = "brief-DD650C75-1401-11ED-B757-0A9E4A196D19";

      // FEED
      let newFeedData = await fetch(`http://localhost:4000/feed?PAGE=${page}`);
      newFeedData = await newFeedData.json();
      //@ts-ignore
      setFeedData([...feedData, ...newFeedData]);
      

      // COMMENTS
      // let dataComments = await fetch(`http://localhost:4000/comments/${briefref}`);
      // dataComments = await dataComments.json();
      // console.log(dataComments);
      
    }
    init();
  }, [page]);

  return (
    <div className="App">
      {/* @ts-ignore */}
      <Feed data={feedData} fetchNextPage={fetchNextPage} />
    </div>
  );
}

export default App;
