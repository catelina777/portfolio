import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

export default {
  mode: 'development',
  entry: `${src}/index.jsx`,

  output: {
    path: dist,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', 'jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: 'index.html',
    }),
  ],
};
