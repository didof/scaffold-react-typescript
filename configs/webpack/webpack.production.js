const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const prod = {
	mode: 'production',
	output: {
		filename: 'bundle.[contenthash].js',
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
};

module.exports = merge(common, prod);
