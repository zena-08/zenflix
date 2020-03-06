const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const distFolder = path.join(__dirname, 'www');
const htmlPlugin = new HtmlWebPackPlugin({
  template: distFolder + '/index.html',
  filename: './index.html'
});

module.exports = (env_props, options) => {
  const env = options.mode === 'production' ? 'prod' : 'dev';
  return {
    entry: './src/index.js',
    output: {
      filename: 'app.js',
      path: distFolder
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: distFolder,
      port: 7000
    },
    plugins: [htmlPlugin]
  };
};