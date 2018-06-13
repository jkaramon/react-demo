/* eslint-disable no-console,global-require */
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function webpackConfig() {
  const env = process.env.NODE_ENV;

  const config = {
    mode: 'development',
    devServer: {
      port: 8200,
      host: '0.0.0.0',
      historyApiFallback: {
        index: '/'
      },
      proxy: {
      },
      stats: {
        assets: false,
        cached: false,
        cachedAssets: false,
        children: false,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        colors: false,
        depth: false,
        entrypoints: false,
        errors: true,
        errorDetails: true,
        hash: false,
        maxModules: 0,
        modules: false,
        performance: false,
        providedExports: false,
        publicPath: false,
        reasons: false,
        source: false,
        timings: false,
        usedExports: false,
        version: false,
        warnings: true
      },
    },
    context: path.resolve('src'),
    entry: './app.js',
    devtool: 'source-map',
    output: {
      path: path.resolve('dist'),
      filename: 'app.js',
      publicPath: '/'
    },
    resolve: {
      modules: [
        path.resolve('src'),
        path.resolve('node_modules')
      ]
    },
    plugins: [
      new FlowStatusWebpackPlugin({
        failOnError: true,
        onError: stdout => {
          console.log(stdout);
        },
        onSuccess: stdout => {
          console.log(stdout);
        },
        binaryPath: require('flow-bin')
      }),
      // new FaviconsWebpackPlugin('assets/favicon.png'),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true
      }),
      new ExtractTextPlugin('style.css'),
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        ts: +new Date()
      })
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          include: path.resolve('src/assets/img'),
          use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: 'file-loader?name=fonts/[name].[ext]',
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 1,
                  localIdentName: '[path]_[name]__[local]___[hash:base64:5]'
                }
              }
            ]
          })
        },
        {
          test: /\.sass/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                query: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 1,
                  localIdentName: '[path]_[name]__[local]___[hash:base64:5]'
                }
              },
              'sass-loader'
            ]
          })
        }
      ]
    },
  };

  return config;
};
