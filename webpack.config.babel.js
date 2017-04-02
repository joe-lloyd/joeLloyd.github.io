import * as path from "path";
import webpack from "webpack";
import Bump from "bump-webpack-plugin";

module.exports = {
	entry: {
		app: "./es/entry.js"
	},
	output: {
		path: "./dist",
		filename: "bundle.js"
	},
	resolve: {
		root: [
			path.resolve('./es')
		]
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader'
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
		new Bump('package.json')
	]
};