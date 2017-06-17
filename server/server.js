const express = require('express');
const path = require('path');
const app = express();
app.disable('x-powered-by');
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/vendor', express.static(path.join(__dirname, 'vendor')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(require("./js/middleware.js").default({ title: "Production", production: true }));
app.listen(4000);
