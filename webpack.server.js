const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
	// Inform webpack that we're building bundle for node js, rather than for the browser
	target: 'node',

	// Root file of server application
	entry: './src/index.js',

	// Put file to build folder 
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
