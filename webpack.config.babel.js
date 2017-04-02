import * as path from "path";

module.exports = {
	entry: {
		app: "./src/es/entry.js"
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
	plugins: []
};