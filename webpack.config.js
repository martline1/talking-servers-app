const path                 = require("path");
const webpack              = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin         = require("eslint-webpack-plugin");
const HtmlWebpackPlugin    = require("html-webpack-plugin");

module.exports = (env, argv) => {
	const mode = argv.mode === "development" ? "development" : "production";

	return {
		mode,
		target  : "electron-renderer",
		resolve : {
			modules : [path.resolve(__dirname, "src"), "node_modules"],
		},
		entry : {
			app : path.resolve(__dirname, "src", "index.js"),
		},
		output : {
			path       : path.resolve(__dirname, "dist"),
			filename   : "[name].js",
			publicPath : "./",
		},
		module : {
			rules : [
				{
					test    : /\.(jsx|js)$/,
					include : path.resolve(__dirname, "src"),
					exclude : /node_modules/,
					use     : [
						{
							loader  : "babel-loader",
							options : {
								presets : ["@babel/preset-env", "@babel/preset-react"],
							},
						},
					],
				},
				{
					test : /\.(s[ac]ss|css)$/,
					use  : [
						// Creates `style` nodes from JS strings
						"style-loader",
						// Translates CSS into CommonJS
						"css-loader",
						// Compiles Sass to CSS
						"sass-loader",
					],
				},
				{
					test    : /\.(png|jpe?g|gif|ttf)$/,
					include : path.resolve(__dirname, "src"),
					exclude : /node_modules/,
					use     : [
						{
							loader : "file-loader",
						},
					],
				},
			],
		},
		plugins : [
			new MiniCssExtractPlugin({
				filename : "[name].css",
			}),
			new webpack.ProvidePlugin({
				React : "react",
			}),
			new ESLintPlugin({
				fix        : true,
				extensions : ["js", "jsx"],
			}),
			new HtmlWebpackPlugin({
				template : path.resolve(__dirname, "src", "index.html"),
				minify   : mode === "production",
			}),
		],
	};
};
