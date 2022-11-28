const merge = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const config = require('./config/config.staging.json');

const extractCSS = new MiniCssExtractPlugin({ filename: '[name].fonts.css' });
const extractSCSS = new MiniCssExtractPlugin({ filename: '[name].styles.css' });

process.traceDeprecation = true;
module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
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
		new CompressionPlugin()
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimize: true
	}
});
