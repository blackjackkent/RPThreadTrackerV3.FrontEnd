const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['react', 'env']
					}
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(scss)$/,
				use: ['css-hot-loader'].concat([
					'style-loader',
					{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, alias: { '../img': '../public/img' } } },
					{ loader: 'sass-loader', options: { sourceMap: true } }
				])
			},
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './img/[name].[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[hash].[ext]'
				}
			}]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html'
		}),
		new CopyWebpackPlugin(
			[
				{ from: './public/img', to: 'img' },
				{ from: './web.config', to: 'web.config' }
			],
			{ copyUnmodified: false }
		)
	]
};
