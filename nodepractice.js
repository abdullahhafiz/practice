
var http = require('http');
// let dt = require('dateTimeModule');
http.createServer(function (req , res) {
  console.log('hey there');
  // res.write('The Date And Time Currently is :' + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080);



