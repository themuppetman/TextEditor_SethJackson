const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

console.log(`Current working directory: ${process.cwd()}`);
const indexHtmlPath = path.resolve(__dirname, 'src', 'index.html');
console.log(`Resolved path to index.html: ${indexHtmlPath}`);
const entryPath = path.resolve(__dirname, 'src/js/index.js');
console.log(`Resolved path to entry: ${entryPath}`);
const swSrcPath = path.resolve(__dirname, 'src-sw.js');
console.log(`Resolved path to swSrc: ${swSrcPath}`);

module.exports = {
  mode: 'development',
  entry: entryPath,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: indexHtmlPath,
    }),
    new InjectManifest({
      swSrc: swSrcPath,
      swDest: 'service-worker.js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  stats: {
    children: true,
  },
};