const path = require('path');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    entry: './src/js/index.js',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    }
});