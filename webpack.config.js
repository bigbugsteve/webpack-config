let mode = "development"

if ( process.env.NODE_ENV === "production" ) {
    mode = "production";
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,  //$ ends with .js - rules for js
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    devtool: "source-map",         // pretranslated js in console eg
    devServer: {
        static: "./dist",   // instead of contentBase 
    }
}