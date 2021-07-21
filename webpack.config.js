const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Simplifies creation of HTML files to serve
// webpack bundle. Advantages also include
// auto-hashing the "src" attribute of
// script tag, so browser does not refer
// to any cached version of script
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html'
});

module.exports = {
  entry: './src/index.tsx',

  // Loaders and how to deal with different files
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|svg|wav|m4a)$/i,
        type: 'asset/resource'
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [htmlPlugin],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  }
};
