const express = require ('express');
const app = express();

app.delete('/delete', function(req,res){
    res.send('i am Deleted');

}).listen(8080);
