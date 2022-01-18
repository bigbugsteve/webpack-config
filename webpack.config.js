const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
let mode = "development"
let target = "web";

if ( process.env.NODE_ENV === "production" ) {
    mode = "production";
    target = "browserslist"
}

module.exports = {
    mode: mode,
    target: target,

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",  // decide whether inline or image, best choice
                // type: "asset/inline",    // base64, creates javascript bundle of the images. Growth size of bundle, bad for large images, only for icons
                // type: "asset/resource", 
                // parser: {
                //     dataUrlCondition: {
                //         maxsize: 30 * 1024
                //     }
                // }
            },
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        // options: { publicPath: "" }, // not neccessary when no error with mcep
                    },
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ] // this order!!
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

    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: "./src/index.html",       // html template
        })
    ],

    resolve: {
        extensions: [".js", ".jsx"], // support js,jsx for React, dont have to add file extension at import
    },

    devtool: "source-map",         // pretranslated js in console eg
    devServer: {
        static: "./dist",   // instead of contentBase 
        hot: true,          // hot reload on save (not refresh page)
    }
}