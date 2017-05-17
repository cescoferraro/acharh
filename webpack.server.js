const path = require('path');
const extras = require("./internal/webpack/extras.js");

module.exports = ( env ) => ( {
    name: 'server',
    target: 'node',
    entry: env.production ? "./server/production":'./server/server',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    devtool: 'source-map',
    module:  extras.LOADERS(env,false),
    resolve: extras.resolve,
    plugins: extras.SERVER_PLUGINS 
} );
