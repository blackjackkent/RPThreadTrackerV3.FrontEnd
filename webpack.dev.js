const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const config = require('./config/config.dev.json');

const BUILD_DIR = path.resolve(__dirname, 'build');

const extractCSS = new MiniCssExtractPlugin({ filename: '[name].fonts.css' });
const extractSCSS = new MiniCssExtractPlugin({ filename: '[name].styles.css' });

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
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			API_BASE_URL: JSON.stringify(config.API_BASE_URL),
			TUMBLR_CLIENT_BASE_URL: JSON.stringify(config.TUMBLR_CLIENT_BASE_URL)
		}),
		extractCSS,
		extractSCSS,
		new webpack.HotModuleReplacementPlugin()
	]
});
