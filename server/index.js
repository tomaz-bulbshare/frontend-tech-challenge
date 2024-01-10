require('dotenv').config();
const express = require('express')
const path = require('path');
const cors = require('cors');


const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname,'assets')));

app.get("/feed", (request, response) => {
  try {
    // console.log("GET :: /feed :: ", request.query);
    const data = require("./data/feed.json");
    const page = parseInt(request.query.PAGE);
    const page_size = parseInt(request.query.PAGE_SIZE || 5);
    const startIndex = page * page_size;
    const endIndex = startIndex + page_size;
    const resData = data.slice(startIndex, endIndex);
    response.json(resData);
  } catch (error) {
    response.error("could not load /feed");
  }
});

app.get("/comments/:id", (request, response) => {
  try {
    // console.log("GET :: /comments :: ", request.params);
    const data = require("./data/comments.json");
    const briefref = request.params.id;
    const resData = data.filter((item) => {
      return item.briefref === briefref;
    });
    response.json(resData);
  } catch (error) {
    response.error("could not fetch /comments/:id");
  }
});


app.listen(4000, function (err) {
  if (err) return err
  console.log('(HTTP) App now running on port', 4000);
})
