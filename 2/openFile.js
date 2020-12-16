let fs = require('fs');
    fs.open('myNewFile.txt', 'w' , function(err, file){
        if (err) throw err;
        console.log('My New File Created')
    });