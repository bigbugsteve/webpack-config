const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development"
let target = "web";

if ( process.env.NODE_ENV === "production" ) {
    mode = "production";
    target = "browserslist"
}

module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"] // this order!!
            },
            {
                test: /\.jsx?$/,            //$ ends with .js - rules for js
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx"], // support js,jsx for React, dont have to add file extension at import
    },

    devtool: "source-map",         // pretranslated js in console eg
    devServer: {
        static: "./dist",   // instead of contentBase 
        hot: true,          // hot reload on save (not refresh page)
    }
}