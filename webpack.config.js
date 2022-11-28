const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const config = require('./config/config.dev.json');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');
module.exports = {
	entry: ['babel-polyfill', `${SRC_DIR}/index.js`],
	output: {
		path: BUILD_DIR,
		publicPath: '/',
		filename: '[name].[hash].bundle.js',
		chunkFilename: '[name].[hash].bundle.js'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'build')
		},
		port: 8080
	},
	module: {
		// exclude node_modules
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css)$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src')
		},
		extensions: ['*', '.js']
	},
	plugins: [
		new webpack.DefinePlugin({
			API_BASE_URL: JSON.stringify(config.API_BASE_URL),
			TUMBLR_CLIENT_BASE_URL: JSON.stringify(config.TUMBLR_CLIENT_BASE_URL)
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].css'
		})
	]
};
