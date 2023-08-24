const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    navbar: './src/components/navbar.js',
    menu: './src/components/menu.js',
    location: './src/components/location.js',
    locationModal: './src/components/locationModal.js',
    contact: './src/components/contact.js',
    footer: './src/components/footer.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};