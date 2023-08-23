const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    navbar: './src/components/navbar.js',
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};