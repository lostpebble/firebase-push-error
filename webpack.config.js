const { join } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/push-error',
    target: 'web',
    output: {
        path: join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    devtool: 'source-map',
    performance: {
        hints: 'warning'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                ],
            },
        ],
    },
    plugins: [
          new webpack.LoaderOptionsPlugin({
              minimize: true,
              debug: false,
          }),
          new webpack.optimize.UglifyJsPlugin({
              beautify: false,
              mangle: {
                  screw_ie8: true,
              },
              compress: {
                  screw_ie8: true,
                  warnings: false,
                  drop_console: true,
              },
              screw_ie8: true,
              output: {
                  comments: false,
              },
              sourceMap: false,
          }),
          new webpack.DefinePlugin({
              'process.env': {
                  NODE_ENV: JSON.stringify('production'),
              },
          }),
      ],
};
