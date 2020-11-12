const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const dev = {
	mode: 'development',
	output: {
		filename: 'bundle.js',
	},
	devServer: {
		compress: true,
		port: 3000,
		contentBase: path.join(__dirname, 'dist'),
		open: true,
	},
};

module.exports = merge(common, dev);
