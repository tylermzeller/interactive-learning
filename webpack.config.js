var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    devServer: {
        port: 8080,
        open: true,
        hot: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: "src/index.html",
        hash: true, // This is useful for cache busting
        filename: 'index.html'
    })],
}
