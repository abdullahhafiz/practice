    const express = require('express');
    const webApp = express();
    const port = 8080;
    webApp.get('/' ,(req, res)=>{
        res.send('Hello World');
    }).listen(8080);

    /* webApp.listen(port,()=>{
        console.log('Web App Is Listening ')
    });*/
    console.log('Hello World');
    console.log('');


    