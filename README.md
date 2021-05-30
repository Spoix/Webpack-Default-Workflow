# Webpack Default Workflow
A set of configurations designed to be used as a default webpack workflow.

## How to use this repo
1. `git clone <your desired local folder name>` this repository
2. `cd` into your new local repository
3. Run `npm install` in the terminal

## Packages and tools
This workflow makes use of the following packages and tools:
- [Webpack](https://webpack.js.org/)
- [Sass](https://sass-lang.com/)
- [Babel](https://babeljs.io/)
- [PostCSS](https://postcss.org/)

It's designed to be quick to understand, easy to use and to scale into more complex sets of packages. 

## Webpack loaders used
It's being used the following webpack loaders:
- [style-loader](https://webpack.js.org/loaders/style-loader/)
> Inject CSS into the DOM.

- [css-loader]https://webpack.js.org/loaders/css-loader/)
> The css-loader interprets @import and url() like import/require() and will resolve them.

- [sass-loader](https://webpack.js.org/loaders/sass-loader/)
> Loads a Sass/SCSS file and compiles it to CSS.

## Webpack plugins used
It's being used the following webpack plugins:
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
> Simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

- [Clean Webpack Plugin](https://www.npmjs.com/package/clean-webpack-plugin)
> A webpack plugin to remove/clean your build folder(s). By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

- [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
> This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
This's being used so the user won't see a page with unstyled elements because of javascript taking too long to load. This way, the CSS will be applied first, despite javascript load time.

## Image processing
It's being used the [Asset Modules](https://webpack.js.org/guides/asset-modules/) functionality in order to process media types.
```
{
    test: /\.(svg|png|jpg|gif|jpeg)$/i,
    type: "asset/resources"
}
```

The folder where images will go on the outputted bundle can be defined inside the output object, by setting `assetModuleFilename` like this:
```
assetModuleFilename: 'assets/[name][hash][ext][query]'
```

## Webpack config splitting
The most used `webpack.config.js` file is splitted into `webpack.common.js`, `webpack.dev.js` and `webpack.prod.js`. It's designed this way so we can execute different scripts based on each config. The common components between them are being merged with `webpack-merge` [package](https://www.npmjs.com/package/webpack-merge).

The config files are requiring `webpack.common.js` through these stataments:
```
const common = require("./webpack.common")
const {merge} = require("webpack-merge")
```

Which are further called by module.exports as `merge(common)`.

### Production mode
> In production, our goals shift to a focus on minified bundles, lighter weight source maps, and optimized assets to improve load time. 

### Development mode
> In development, we want strong source mapping and a localhost server with live reloading or hot module replacement.
Development mode makes use of webpack-dev-server through `npm install --save-dev webpack-dev-server` and `mode: "development"` on the configuration file.

#### Source maps
In development mode, source maps are enabled in order to make it easier to debuug code. You can disable or change it by setting `devtool` on `webpack.dev.js`. If you wish, you can read more about the subject [here](https://webpack.js.org/configuration/devtool/)

## General instructions

### Scripts
1. `npm start` which runs `webpack serve --config webpack.dev.js`
* When using `npm start` you have to acess the localhost where your project will run. It'll look like this: `http://localhost:8080/`
2. `npm run build` which runs `webpack --config webpack.prod.js`

### Javascript modules
In order to bundle javascripts files you should use ES6 Modules, with exports and imports to your .js entrypoint.

### Sass @use
.scss files [can be imported](https://sass-lang.com/documentation/at-rules/use) with `@use`, similar to javascript modules. This way we'll have just 1 main scss files.

### Caching
> Once the contents of /dist have been deployed to a server, clients (typically browsers) will hit that server to grab the site and its assets. The last step can be time consuming, which is why browsers use a technique called caching. This allows sites to load faster with less unnecessary network traffic. However, it can also cause headaches when you need new code to be picked up.

So basically, depending on the browser and how it retrieves information related to web pages already visited , users can be presented with an outdated version of your page, even after you upload the server with new or more up to date files. Luckily, [webpack has a way to deal with it.](https://webpack.js.org/guides/caching/).

This is accomplished using `[hash]` between the output filename, like this: `filename: "bundle.[hash].js"`. This way, the bundled js file will have a different name each time it's built. However, if we have a different filename each time we aren't able to hard code ou bundled js file into a html `script` tag, therefore we are to use `HtmlWebpackPlugin` to generate our HTML files.

## Folder structure
The folder structure is just a sugestion and can be customized according to the developer's needs. Just make sure to change paths in case you need to make structural changes to the configuration of folders.
```
.
├── dist
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── assets
│   │   └── wallpaper.jpg
│   ├── js
│   │   ├── index.js
│   │   └── utilities.js
│   ├── styles
│   │   ├── main.scss
│   │   └── utilities
│   │       ├── _normalize.scss
│   │       └── _utilities.scss
│   └── template.html
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```


## My sincere thanks to
This repository was made as a practice/studying tool, based on the documentation brought above from external sources and on the following tutorials, in case one needs further reference then that presented here:
- https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/es6-modules
- https://www.youtube.com/watch?v=MpGLUVbqoYQ
- https://www.youtube.com/watch?v=TOb1c39m64A
- https://www.youtube.com/watch?v=SH6Y_MQzFVw
- https://www.youtube.com/watch?v=iWUR04B42Hc
- https://www.youtube.com/watch?v=X1nxTjVDYdQ
- https://www.youtube.com/watch?v=lziuNMk_8eQ
- https://www.youtube.com/watch?v=nu5mdN2JIwM