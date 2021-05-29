const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: false,
    entry: './src/js/index.js',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]

            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif|jpeg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "media",
                    name: "[name].[hash].[ext]"
                    }
                
            }
        ]
    }
}