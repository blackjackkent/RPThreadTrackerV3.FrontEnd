const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');
module.exports = {
	entry: ['babel-polyfill', `${SRC_DIR}/index.js`],
	output: {
		path: BUILD_DIR,
		publicPath: '/',
		filename: '[name].[fullhash].bundle.js',
		chunkFilename: '[name].[chunkhash].bundle.js'
	},
	optimization: {
		moduleIds: 'named',
		splitChunks: {
			chunks: 'all'
		}
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
					MiniCssExtractPlugin.loader,
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
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './public/img', to: 'img' },
				{ from: './web.config', to: 'web.config' }
			]
		})
	]
};
