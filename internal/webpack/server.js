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
	publicPath: env.production ? "http://acharh.cescoferraro.xyz" : "http://localhost:4000"
    },
    devtool: extras.DEVTOOLS(env), 
    module:  extras.LOADERS(env,false),
    resolve: extras.resolve,
    plugins: extras.SERVER_PLUGINS 
} );
