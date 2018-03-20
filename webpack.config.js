const path = require('path');

module.exports = function(env) {
  return {
    mode: 'development',

    entry: './src/index.jsx',

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },

    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ],

      extensions: ['.js', '.jsx', '.json']
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },

    devServer: {
      contentBase: __dirname + '/src',
      host: '0.0.0.0',
      disableHostCheck: true
    }
  };
}
