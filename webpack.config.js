"use strict";

module.exports = (env)=>[ 
    require("./internal/webpack/client.js")(env), 
    require("./internal/webpack/server.js")(env) 
];
