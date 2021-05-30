const path = require('path');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                "style-loader", // 3. Inject styles into DOM
                "css-loader", // 2. Turns css into javascript
                "sass-loader" // 1. Turns sass into css
            ]
            }
        ]
    }
});