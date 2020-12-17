let express = require('express');
let app = express();
let handlebars = require('express-handlebars');
app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'));
app.get('/', function (req, res) {

    res.render('main', { layout: 'index' });
}).listen(8080);        