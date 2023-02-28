  const path = require('path');
  module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve('public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx*$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
