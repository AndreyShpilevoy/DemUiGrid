/*eslint no-undef: "off"*/

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const PostcssInitial = require('postcss-initial');
const cssnano = require('cssnano');

const entryPoints = {
  js: ['./src/index']
};

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};
const output = {filename: 'index.js'};
output.path = './lib';

const rules = [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    include: path.join(__dirname, './src'),
    use: ['babel-loader']
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: 'url-loader?limit=8192&name=images/[name]-[hash].[ext]'
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[hash:base64:5]',
          },
        },
        'postcss-loader',
        'resolve-url-loader',
        'sass-loader'
      ]
    })
  }
];

const eslint = {
  failOnWarning: false,
  failOnError: true
};

const postcss = [
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

const plugins = [
  new webpack.LoaderOptionsPlugin({
    debug: false,
    noInfo: true,
    options: {
      context: __dirname,
      output: {path: './'},
      resolveLoader: {
        alias: {
          'images': path.resolve(__dirname + './src/images'),
        },
      },
      postcss: function () {
        return postcss;
      },
      eslint: eslint
    }
  }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'index.css'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false}
    })
  ];

//For all environments
module.exports = {
  entry: entryPoints,
  externals: externals,
  target: 'web',
  output: output,
  module: {
    rules: rules
  },
  plugins: plugins
};
