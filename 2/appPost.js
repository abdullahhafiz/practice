const express = require('express');
const appPost = express();
appPost.post('/', function(req, res){
    res.send('i will get post');
}).listen(8080);
console.log('get post');