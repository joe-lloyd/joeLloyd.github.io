import * as path from "path";
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "[name].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		app: "./src/es/entry.js"
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [{
						loader: "css-loader", options: {
							sourceMap: true
						}
					}, {
						loader: "sass-loader", options: {
							sourceMap: true
						}
					}],
					fallback: "style-loader"
				})
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		extractSass
	]
};