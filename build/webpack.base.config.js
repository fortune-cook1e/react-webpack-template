const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = !!(process.env.NODE_ENV !== 'production')
const jstsRegex = /\.(js|jsx|ts|tsx)$/
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    app: './src/main.jsx'
  },
  output: {
    path: resolve('../dist'),
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
    chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
  },
  devtool: isDev ? 'source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@/src': resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: jstsRegex,
        exclude: '/node_modules/',
        include: resolve('../src'),
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true }}
        ]
      },
      {
        test: cssRegex,
        exclude: '/node_modules/',
        include: resolve('../src'),
        use: ['style-loader', 'css-loader']
      },
      {
        test: lessRegex,
        exclude: [lessModuleRegex, '/node_modules/'],
        use: [
          'style-loader','css-loader','less-loader'
        ],
        sideEffects: true,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Basic App',
      template: resolve('../public/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
