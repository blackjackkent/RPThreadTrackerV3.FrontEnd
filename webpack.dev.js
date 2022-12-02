const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
const common = require('./webpack.common');
const config = require('./config/config.dev.json');

const BUILD_DIR = path.resolve(__dirname, 'build');

const extractCSS = new MiniCssExtractPlugin({ filename: '[name].fonts.css' });
const extractSCSS = new MiniCssExtractPlugin({ filename: '[name].styles.css' });

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'build')
		},
		port: 8080,
		historyApiFallback: true
	},
	watchOptions: {
		poll: true,
		ignored: /node_modules/
	},
	plugins: [
		new webpack.DefinePlugin({
			API_BASE_URL: JSON.stringify(config.API_BASE_URL),
			TUMBLR_CLIENT_BASE_URL: JSON.stringify(config.TUMBLR_CLIENT_BASE_URL)
		}),
		extractCSS,
		extractSCSS,
		new UnusedWebpackPlugin({
			// Source directories
			directories: [path.join(__dirname, 'src')],
			// Exclude patterns
			exclude: ['*.spec.js*', 'testhelpers/*'],
			// Root directory (optional)
			root: __dirname
		})
	]
});
