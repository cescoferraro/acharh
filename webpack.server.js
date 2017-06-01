const path = require('path');
const extras = require("./internal/webpack/extras.js");

module.exports = ( env= {production:false} ) => ( {
    name: 'server',
    target: 'node',
    entry: './server/server',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    devtool: extras.DEVTOOLS(env), 
    module:  extras.LOADERS(env,false),
    resolve: extras.resolve,
    plugins: extras.SERVER_PLUGINS 
} );
