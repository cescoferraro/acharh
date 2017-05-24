const path = require('path');
const extras = require("./internal/webpack/extras.js");

module.exports = ( env = {production:false}) => {
    console.log("hello");
    console.log(env);
    return ( {
	name: 'client',
	target: 'web',
	entry: ['react-hot-loader/patch', 
		'webpack-hot-middleware/client',
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
