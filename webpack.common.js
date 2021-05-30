const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/js/index.js',
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][hash][ext][query]'
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif|jpeg)$/i,
                type: "asset/resource"
            }
        ]
    }
}