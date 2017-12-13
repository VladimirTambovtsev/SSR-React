const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

	// Root file of server application
	entry: './src/client/client.js',

	// Put file to build folder 
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
};

module.exports = merge(baseConfig, config);
