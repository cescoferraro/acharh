const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('./webpack.config.js')({production:false});
const compiler = webpack(config);
const app = express();

app.get('/vendor.js', function (req, res) {
    res.sendFile("./vendor.js",{root: "./dll"});
}); 

app.get('/vendor.json', function (req, res) {
    res.sendFile("./vendor.json",{root: "./dll"});
});

app.use(webpackDevMiddleware(compiler, {noInfo: true}));

app.use(WebpackHotMiddleware(
    compiler.compilers.find(compiler => compiler.name === 'client')));

app.use(webpackHotServerMiddleware(
    compiler, {serverRendererOptions: {production: false}}));

app.listen(4000, () => {
    console.log('Server started: http://localhost:4000');
});
