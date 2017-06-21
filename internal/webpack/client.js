const path = require('path');
const extras = require("./extras.js");

module.exports = ( env = {production:false}) => {
    const config = ( {
	name: 'client',
	target: 'web',
	entry: {
	    client: extras.HOTLOADER(['./client/client'],env) 
	},
	output: {
	    path:  path.join(__dirname, '../../dist'),
	    filename: 'js/[name].js'
	},
	devtool: extras.DEVTOOLS(env),
	plugins: extras.CLIENT_PLUGINS(env,true), 
	module:  extras.LOADERS(env),
	resolve: extras.resolve 
    } );
    if (env.production){
	config.entry.react = ["react", "react-dom"];
	config.entry.firebase = ["firebase"];
	config.entry.material= ["material-ui"];
	config.entry.rxjs = ["rxjs"];
    } else {
	config.entry.vendor = require("./libs.js")  ;
    };
 return config; };
