const path = require('path');
const extras = require("./extras.js");

module.exports = ( env= {production:false} ) => ( {
    name: 'server',
    target: 'node',
    entry: './server/middleware',
    output: {
        path: path.join(__dirname, '../../dist'),
        filename: 'js/middleware.js',
        libraryTarget: 'commonjs2',
	publicPath: extras.PUBLIC_PATH(env) 
    },
    devtool: extras.DEVTOOLS(env), 
    module:  extras.LOADERS(env,false),
    resolve: extras.resolve,
    plugins: extras.SERVER_PLUGINS(env)
} );
