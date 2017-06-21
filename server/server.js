const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
app.use(compression());
app.disable('x-powered-by');
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/vendor', express.static(path.join(__dirname, 'vendor')));
app.use('/icons', express.static(path.join(__dirname, 'icons')));
app.get('/FB35B4FE618262EF0B9F299C03184A31.txt', (req, res) => {
    res.sendFile("./FB35B4FE618262EF0B9F299C03184A31.txt",{root: "./ssl"});
}); 
app.use(require("./js/middleware.js").default({ title: "Production", production: true }));
app.listen(4000);
