let http = require('http');
let dt = require('./dateTimeModule');
http.createServer(function (req, res) {
    res.write('Date And Time Is :' + dt.myDateTime());
    res.end();

}).listen(8080);