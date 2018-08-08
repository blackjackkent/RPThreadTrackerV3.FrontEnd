const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

const extractCSS = new MiniCssExtractPlugin({ filename: '[name].fonts.css' });
const extractSCSS = new MiniCssExtractPlugin({ filename: '[name].styles.css' });

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = (env = {}) => {
	const config = require(`./config/config.${Object.keys(env)[0]}.json`);
	return {
		entry: ['babel-polyfill', `${SRC_DIR}/index.js`],
		output: {
			path: BUILD_DIR,
			publicPath: '/',
			filename: '[name].[hash].bundle.js',
			chunkFilename: '[name].[hash].bundle.js'
		},
		devtool: env.prod ? 'source-map' : 'cheap-module-eval-source-map',
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
						'style-loader', // or MiniCssExtractPlugin.loader
						{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, alias: { '../img': '../public/img' } } },
						{ loader: 'sass-loader', options: { sourceMap: true } }
					])
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						'css-loader'
					]
				},
				{
					test: /\.(png|jpg|jpeg|gif|ico)$/,
					use: [
						{
							// loader: 'url-loader'
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
			new webpack.DefinePlugin({
				API_BASE_URL: JSON.stringify(config.API_BASE_URL),
				TUMBLR_CLIENT_BASE_URL: JSON.stringify(config.TUMBLR_CLIENT_BASE_URL)
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin(),
			extractCSS,
			extractSCSS,
			new HtmlWebpackPlugin({
				inject: true,
				template: './public/index.html'
			}),
			new CopyWebpackPlugin(
				[
					{ from: './public/img', to: 'img' },
					{ from: './web.config', to: 'web.config' },
					{ from: './.htaccess', to: '.htaccess', toType: 'file' }
				],
				{ copyUnmodified: false }
			),
			new CompressionPlugin()
		],
		optimization: {
			splitChunks: {
				chunks: 'all'
			},
			minimize: true
		}
	};
};
