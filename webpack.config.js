const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	{ CleanWebpackPlugin } = require('clean-webpack-plugin'),
	CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './assets/scripts/main.js',
		screen: './assets/scripts/components/screen.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		port: 3333,
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			title: '!t',
			template: 'assets/index.html'
		}),
		new CopyPlugin ({
			patterns: [
				{ from: 'assets/imgs', to: 'assets/imgs' },
			],		
		}), 
	],

	output: {		
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [ 'style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				],
			},
		],
	},
};