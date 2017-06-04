var path = require("path");
var webpack = require("webpack");

module.exports = (env)=>( {
    entry: {
        vendor: ["react",
		 "react-dom",
		 "redux", 
		 "rxjs", 
		 "lodash", 
		 "react-redux", 
		 "recompose",
		 "react-redux-firebase", 
		 "connected-react-router", 
		 "react-router",
		 "react-helmet", 
		 "redux-observable", 
		 "redux-logger"
		]
    },
    output: {
        path: path.join(__dirname, "../../dll"),
        filename: "[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "../../dll", "[name].json"),
            name: "[name]",
            context: path.resolve(__dirname, "client")
        }),
    ]
});