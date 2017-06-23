const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
app.use(compression());
app.disable('x-powered-by');
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/vendor', express.static(path.join(__dirname, 'vendor')));
app.use('/icons', express.static(path.join(__dirname, 'icons')));
app.get('/service-worker.js', (req, res) => {
    res.sendFile("./service-worker.js",{root: "./"});
}); 
app.get('/4C945DCD9BF98AD34B33F5773DF474FB.txt', (req, res) => {
    res.sendFile("./4C945DCD9BF98AD34B33F5773DF474FB.txt",{root: "./ssl"});
}); 
app.use(require("./js/middleware.js").default({ title: "Production", production: true }));
app.listen(4000);
