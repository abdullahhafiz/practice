let express = require('express');
let app = express();

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

let handlebars = require('express-handlebars');
app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'));
app.get('/', function (req, res) {

    res.render('main', { layout: 'index' });
})
   
                                                        //new         
 app.post('/display',  urlencodedParser , function(req,res){
     console.log(req.body)
 let Name = req.body.Name;
 let Email = req.body.Email;
 let DOB = req.body.DOB;
 let newDisplay = {Name:Name , Email:Email, DOB: DOB};
res.render('showuser',{Name:Name,Email:Email , DOB : DOB, layout:'display'},);
}).listen(8080);



// app.post('/display', urlencodedParser, function (req, res) {  
//     console.log(req.body)
//     // Prepare output in JSON format  
//     response = {  
//         first_name:req.body.Name,  
//         Email:req.body.Email  
//     };  
//     console.log(response);  
//     res.end(JSON.stringify(response));  
//  })  

//  var server = app.listen(8080, function () {  
//     var host = server.address().address  
//     var port = server.address().port  
//     console.log("app listening at http://%s:%s", host, port)  
//   }) 

//         // res.send('main',{layout :'index'} );

// }).listen(8080);

