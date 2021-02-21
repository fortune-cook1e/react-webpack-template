const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = !!(process.env.NODE_ENV !== 'production')
const jstsRegex = /\.(js|jsx|ts|tsx)$/
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : 'none',
  entry: {
    app: resolve('../src/main.jsx')
  },
  output: {
    path: resolve('../dist'),
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
    chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@/src': path.resolve(__dirname, '../src/')
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
        exclude: [cssModuleRegex, '/node_modules/'],
        include: resolve('../src'),
        use: ['style-loader', 'css-loader']
      },
      {
        test: cssModuleRegex,
        exclude: '/node_modules/',
        include: resolve('../src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
              importLoaders: 1,
            }
          }
        ]
      },
      {
        test: lessRegex,
        exclude: [lessModuleRegex, '/node_modules/'],
        use: [
          'style-loader', 'css-loader', 'less-loader'
        ],
        sideEffects: true,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Webpack Template',
      template: resolve('../public/index.html'),
      filename: 'index.html',
      inject: 'body',  // script插入body底部
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: resolve('../report/index.html'),
      openAnalyzer: false,
    }),
  ]
}