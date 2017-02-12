const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");


module.exports = {
    entry: __dirname + "/src/js/main.js",

    output: {
        path: __dirname + "/app",
        filename: "bundle.js",

    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    loader: 'css-loader',
                    options: {

                        sourceMap: true
                    }
                }),
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // Will inject the style tag if plugin fails
                    loader: "css-loader!sass-loader",
                }),
            }
        ],

    },
    watch :true,
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ],
    devServer: {
        contentBase: "./app",
        // colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }

}