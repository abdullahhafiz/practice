    const express = require('express');
    const webApp = express();
    
    webApp.get('/' ,(req, res)=>{
        res.send('Hello World');
    }).listen(8080);
    console.log('Web App Is Listening ')

    // const port = 8080;
    /* webApp.listen(port,()=>{
        onsole.log('Web App Is Listening ')c
    });*/
    


    