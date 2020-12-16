const express = require ('express');
const appDelete = express();
appDelete.delete('/', function(req,res){
    res.send('i am Deleted');

}).listen(8080);