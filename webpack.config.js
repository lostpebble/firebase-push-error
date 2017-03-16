const { join } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'main': ['regenerator-runtime/runtime', './src/push-error']
    },
    target: 'web',
    output: {
        path: join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    devtool: 'source-map',
    performance: {
        hints: false
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
          new webpack.DefinePlugin({
              'process.env': {
                  NODE_ENV: JSON.stringify('production'),
              },
          }),
      ],
};
