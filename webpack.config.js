/*eslint no-undef: "off"*/
/* eslint import/no-extraneous-dependencies: "off" */

const webpack = require('webpack');
const path = require('path');
const Autoprefixer = require('autoprefixer');
const PostcssInitial = require('postcss-initial');
const cssnano = require('cssnano');

let entry = ['./src/index'];
let output = {
  filename: 'dist/index.js',
  path: path.join(__dirname, '/'),
  publicPath: path.join(__dirname, '/')
};

let rules = [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    include: path.join(__dirname, './src'),
    use: ['babel-loader']
  },{
    test: /\.jsx$|\.js$/,
    use: 'eslint-loader',
    enforce: 'pre',
    include: path.join(__dirname, './src')
  },{
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]',
      'postcss-loader',
      'resolve-url-loader',
      'sass-loader?sourceMap'
    ]
  }];


//For all environments
let eslint = {
  failOnWarning: false,
  failOnError: true
};

let postcss = [
  Autoprefixer({
    browsers: ['> 1%', 'last 2 versions'],
    cascade: false
  }),
  PostcssInitial({
    reset: 'inherited' // reset only inherited rules
  }),
  cssnano({
    discardComments: {
      removeAll: true
    },
    discardUnused: false,
    mergeIdents: false,
    reduceIdents: false,
    safe: true
  })
];

let plugins = [
  new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }
  ),
  new webpack.LoaderOptionsPlugin({
    debug: false,
    noInfo: true,
    options: {
      context: __dirname,
      output: {path: './'},
      postcss: function () {
        return postcss;
      },
      eslint: eslint
    }
  }),
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false},
    output: {comments: false},
    sourceMap: true
  })
];


//For all environments
module.exports = {
  devtool: 'source-map',
  entry: entry,
  target: 'web',
  output: output,
  module: {
    rules: rules
  },
  plugins: plugins
};
