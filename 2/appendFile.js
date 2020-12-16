    let fs = require("fs");
    fs.appendFile('myNewFile.txt', 'Hello Content', function(err){
        if (err) throw err;
        console.log('File Created');
        

    });
    