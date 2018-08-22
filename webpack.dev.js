const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');
const config = require('./config/config.dev.json');

const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: BUILD_DIR,
		compress: true,
		hot: true,
		open: true,
		overlay: true
	},
	plugins: [
		new webpack.DefinePlugin({
			API_BASE_URL: JSON.stringify(config.API_BASE_URL),
			TUMBLR_CLIENT_BASE_URL: JSON.stringify(config.TUMBLR_CLIENT_BASE_URL)
		}),
		new webpack.HotModuleReplacementPlugin()
	]
});
