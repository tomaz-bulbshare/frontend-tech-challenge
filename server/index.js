require('dotenv').config();
const express = require('express')
const path = require('path');
const cors = require("cors");
const  feedRoutes = require('./routes/feed.js');


const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname,'assets')));
app.use('/feed', feedRoutes);

app.listen(4000, function (err) {
  if (err) return err
  console.log('(HTTP) App now running on port', 4000)
})
