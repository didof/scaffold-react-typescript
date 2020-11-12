const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const rootPath = path.resolve(__dirname, '..', '..');

module.exports = {
	entry: path.resolve(rootPath, 'src', 'index.js'),
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(rootPath, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [rule__css(), rule__module_css(), rule__file(), rule__js()],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'assets/styles/separated.[chunkhash].css',
		}),
		new HtmlWebpackPlugin({
			title: 'Custom Scaffold React TypeScript',
			filename: 'index.html',
			scriptLoading: 'defer',
			minify: false,
			favicon: '',
			template: path.resolve(rootPath, 'src', 'assets', 'template.hbs'),
		}),
	],
};

// RULES
function rule__css() {
	return {
		test: /\.css$/i,
		use: [
			'style-loader',
			'css-loader',
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [autoprefixer()],
					},
				},
			},
		],
		exclude: /\.module\.css$/,
	};
}

function rule__module_css() {
	return {
		test: /\.css$/i,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					modules: {
						localIdentName: '[name]__[local]__[hash:base64:5]',
					},
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [autoprefixer()],
					},
				},
			},
		],
		include: /\.module\.css$/,
	};
}

function rule__file() {
	return {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					outputPath: 'assets',
					name: '[folder]/[name].[contentHash].[ext]',
				},
			},
		],
	};
}

function rule__js() {
	return {
		test: /\.jsx?/i,
		loader: 'babel-loader',
		exclude: /node_modules/,
	};
}

function rule__hbs() {
	return {
		test: /\.hbs$/i,
		loader: 'handlebars-loader',
	};
}
