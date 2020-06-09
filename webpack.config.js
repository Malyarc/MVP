var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    minimize: true,
  },

  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //presets: ['react', 'es2015', 'env']
            presets: ['@babel/preset-react', '@babel/preset-env'],
            //plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]


      }
    ]
  }
}