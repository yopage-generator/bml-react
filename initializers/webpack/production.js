import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import common from './common';

common.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', ['css', 'postcss']),
  include: common.root,
});

common.module.loaders.push({
  test: /\.s(a|c)ss$/,
  loader: ExtractTextPlugin.extract('style', ['css', 'sass']),
});

common.module.loaders.push({
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style', ['css', 'less']),
});

common.module.loaders.push({
  test: /\.gif$/,
  loader: 'url-loader?mimetype=image/png',
});

export default {
  postcss: common.postcss,

  entry: common.entry,

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new CleanWebpackPlugin('dist', { root: process.cwd() }),
    new CopyWebpackPlugin([
      {
        from: path.join(process.cwd(), 'public'),
        to: '.',
      },
    ]),
    new CopyWebpackPlugin([
      {
        from: path.join(process.cwd(), 'src/assets/images'),
        to: 'images',
      },
    ]),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __ENV__: '"production"', // TODO https://github.com/zertosh/loose-envify
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false, // Нельзя минимифировать, потому что удаляются имена View
      output: { comments: false },
      compress: { warnings: true, drop_debugger: true },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],

  resolve: common.resolve,

  module: common.module,
};
