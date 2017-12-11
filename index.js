var express = require('express');
var app = express();

var cors = require('cors');
var posts = require('./data').posts;

app.use(cors());

app.get('/', function(req, res) {
  res.json(posts);
});

app.get('/posts/:id', function(req, res) {
  res.json(posts[req.params.id - 1]);
});

app.listen(3001, function() {
  console.log('Listening on 3001');
})
