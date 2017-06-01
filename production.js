const express = require('express');
const app = express();
app.disable('x-powered-by');
app.use(express.static("dist/"));
app.use(require("./dist/server.js").default({ title: "Production", production: true }));
app.listen(4000);
