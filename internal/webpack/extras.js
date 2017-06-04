const webpack = require("webpack");
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = {
    extensions: ['.js', '.tsx', '.json', 'pcss']
};

const LOADERS = (env, isClient)=>{
    let rules = [
	{ test: /\.(pcss)$/,
	  use:[ 
	      {loader: 'isomorphic-style-loader'},
	      {loader: 'css-loader',
	       options: {importLoaders: 1,
			 sourceMap: true,
			 modules: true,
			 localIdentName: "[name]_[local]_[hash:base64:3]"}},
	      {
		  loader: 'typed-css-modules-loader',
		  options: {
		      searchDir: "**/*.pcss"
		  }
	      },
	      {loader: 'postcss-loader',
	       options: {
		   plugins: (loader) => [
		       require('postcss-import')({ root: loader.resourcePath }),
		       require("postcss-cssnext")({
			   browsers: '> 0%', customProperties: true,
			   colorFunction: true, customSelectors: true
		       })
		   ]
	       }}]
	},
	{ test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
	{ enforce: "pre",  exclude: /node_modules/, test: /\.js$/, loader: "source-map-loader" },
	{ test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
	  use:[
	      {	loader: 'file-loader',
		options:{
		    emitFile: isClient,
		    name: "fonts/font-[sha512:hash:base64:7].[ext]"
		}}]},
	{ test: /\.(jpe?g|png|gif|svg)$/,
	  use:[
	      {loader: 'file-loader',
	       options:{
		   emitFile: isClient,
		   name: "fonts/font-[sha512:hash:base64:7].[ext]"
	       }}]}];
    return ( {rules: rules} ); 
};
const HOTLOADER = (entry, env)=>{
    if (!env.production) {
	return ['react-hot-loader/patch',
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false', 
		...entry]; 
    }
    return entry;

};

const LOADERS_OPTIONS =  new webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: true,
    options: {
	context: '/'
    }
});

const SERVER_PLUGINS = [LOADERS_OPTIONS];
const DEVTOOLS = (env)=> {
    return  ( env.production ? "eval" : "eval" );
}; 

const CLIENT_PLUGINS = env => {
    let og = [];
    if (env.production){
	og.push(
	    new CopyWebpackPlugin([ {from: "./server/server.js",to:"./server.js"} ]),
	    new CopyWebpackPlugin([ {from: "./server/index.html",to:"./index.html"} ])
	);
    } else {
	og.push(
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.DllReferencePlugin({
		context: process.cwd(),
		manifest: require("../../dll/vendor.json")
	    }));
    }
    og.push(
	new webpack.NamedModulesPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new FaviconsWebpackPlugin({
	    prefix: 'icons/',
	    logo: './shared/icon/favicon.png'
	}),
	LOADERS_OPTIONS
    );
    return  ( og );
};

module.exports = {
    resolve: resolve,
    SERVER_PLUGINS: SERVER_PLUGINS,
    HOTLOADER:HOTLOADER,
    DEVTOOLS: DEVTOOLS,
    CLIENT_PLUGINS: CLIENT_PLUGINS,
    LOADERS: LOADERS 
};
