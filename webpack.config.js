'use strict'

const LiveReloadPlugin = require('webpack-livereload-plugin')
const options = {
	port: 3000
}

let ExtractTextPlugin = require('extract-text-webpack-plugin')
let    UglifyJsPlugin = require('uglify-js-plugin')

module.exports = {
	entry: './src/js/index.jsx',
	output: {
		path: './dist',
		filename: 'build.js'
	},

	watch: false,
	// devtool: 'source-map',

  plugins: [
  	new LiveReloadPlugin(options),
  	new ExtractTextPlugin('build.css'),
    new UglifyJsPlugin({
        compress: true, //default 'true', you can pass 'false' to disable this plugin 
        debug: true //default 'false', it will display some information in console 
    })
  ],

	module: {
	  loaders: [
	  	{
	  		test: /all.sass$/,
	      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader')
	  	},
	    {
	      test: /\.(jsx|js)$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015', 'react']
	      }
	    }
	  ]
	}

};