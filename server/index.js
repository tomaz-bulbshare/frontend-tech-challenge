require('dotenv').config();
const express = require('express')
const path = require('path');
const cors = require("cors");
const fs = require('fs');

const DATA_FILE_PATH = './server/data/feed.json'
const COMMENTS_DATA_FILE_PATH = './server/data/comments.json'

const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname,'assets')));
const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `http://localhost:3000`)
  res.header(`Access-Control-Allow-Methods`, `GET`)
  res.header(`Access-Control-Allow-Headers`, `Content-Type`)
  next()
}

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(allowCrossDomain)


app.get('/', function(req, res){
  const page = req.query.page || 1
  const perPage = 5
  const offset = perPage * (page - 1)
  fs.readFile(DATA_FILE_PATH, 'utf8', (err, data) => {
    if (err) console.log(err)
    let response = JSON.parse(data)
    response = response.slice(offset, perPage * page)
    res.json(response)
  })
});

app.get('/comments/:id', function(req, res) {
  fs.readFile(COMMENTS_DATA_FILE_PATH, 'utf8', (err, data) => {
    if (err) console.log(err)
    let response = JSON.parse(data)
    const comments = []
    response.forEach((item) => {
      if(item.briefref === req.params.id) {
        comments.push(item)
      }
    })
    if (comments.length) {
      res.json(comments)
    } else {
      res.json({ noComments: true })
    }
  })
})

app.listen(4000, function (err) {
  if (err) return err
  console.log('(HTTP) App now running on port', 4000)
})