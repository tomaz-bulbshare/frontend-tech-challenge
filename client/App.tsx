import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    async function init() {
      const page = 0;
      const briefref = "brief-DD650C75-1401-11ED-B757-0A9E4A196D19";

      // FEED
      let dataFeed = await fetch(`http://localhost:4000/feed?PAGE=${page}`);
      dataFeed = await dataFeed.json();
      console.log(dataFeed);

      // COMMENTS
      let dataComments = await fetch(`http://localhost:4000/comments/${briefref}`);
      dataComments = await dataComments.json();
      console.log(dataComments);
      
    }
    init();
  }, []);

  return (
    <div className="App">
      Hello, World
    </div>
  );
}

export default App;
