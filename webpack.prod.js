const merge = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common.js');
const config = require('./config/config.prod.json');
process.traceDeprecation = true;
module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			API_BASE_URL: JSON.stringify(config.API_BASE_URL),
			TUMBLR_CLIENT_BASE_URL: JSON.stringify(config.TUMBLR_CLIENT_BASE_URL)
		}),
		new CompressionPlugin()
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimize: true
	}
});
