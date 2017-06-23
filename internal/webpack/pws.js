const lookup = require('lookup');
const WEBPACK_COMPILATION_HOOK = 'compilation';
const HTML_PLUGIN_BEFORE_PROCESS = 'html-webpack-plugin-before-html-processing';
const HTML_PLUGIN_ALTER_ASSETS = 'html-webpack-plugin-alter-asset-tags';
const FAVICON_PLUGIN = 'FaviconPlugin';

let opt = {

};

function HelloWorldPlugin(options) {
    // Setup the plugin instance with options...
    opt = options;
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    console.log(compiler.plugin);
    compiler.plugin(WEBPACK_COMPILATION_HOOK, function(compilation) {
	console.log(compilation);
	compilation.plugin(HTML_PLUGIN_ALTER_ASSETS, (htmlData, callback) => {
            const assets = Object.keys(compilation.assets);
            if (config.icons === FAVICON_PLUGIN) {
		// use the favicon
		const images = assets.filter(a => a.includes('android-chrome-'));
		config.icons = images.map(image => ({ src: image, type: lookup(image), sizes: image.match(/(\d{2,3}x\d{2,3})/g)[0] }));
            }
            const source = JSON.stringify(normaliseConfig(config), null, 2);
	    console.log(source);
            compilation.assets['manifest.json'] = {
		source: () => source,
		size: () => source.length
            };
            callback(null, htmlData);
	});


    });
};

module.exports = HelloWorldPlugin;
