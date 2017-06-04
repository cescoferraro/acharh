const path = require('path');
const extras = require("./internal/webpack/extras.js");

module.exports = ( env = {production:false}) => {
    return ( {
	name: 'client',
	target: 'web',
	entry: ['react-hot-loader/patch', 
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false',
		'./client/client' ],
	output: {
	    path:  path.join(__dirname, 'dist'),
	    filename: 'client.js'
	},
	devtool: extras.DEVTOOLS(env),
	plugins: extras.CLIENT_PLUGINS(env,true), 
	module:  extras.LOADERS(env),
	resolve: extras.resolve 
    } ); };
