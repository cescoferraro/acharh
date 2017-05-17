"use strict";
const path = require('path');

module.exports = (env)=>[ 
    require("./webpack.client.js")(env), 
    require("./webpack.server.js")(env) 
];
