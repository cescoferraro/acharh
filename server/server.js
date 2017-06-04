const express = require('express');
const app = express();
app.disable('x-powered-by');
app.use(express.static("./js"));
app.use(express.static("./icons"));
app.use(require("./js/middleware.js").default({ title: "Production", production: true }));
app.listen(4000);
