const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = !!(process.env.NODE_ENV !== 'production')
const UNABLE_ANALYZE = 0
const USE_ANALYZE = process.env.USE_ANALYZE || UNABLE_ANALYZE
const jstsRegex = /\.(js|jsx|ts|tsx)$/
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

USE_ANALYZE && config.plugins.push(
  new BundleAnalyzerPlugin()
)

const cssModuleOptions = (type, useModules) => {
  const options = { importLoaders: type || 1 }
  if (useModules) {
    options.modules = {
      localIdentName: '[path][name]_[hash:base64:5]',
      localIdentContext: paths.src,
      exportLocalsConvention: 'camelCase'
    }
  }
  return options
}

const lessOptions = () => {
  const vars = paths.src + '/styles/vars.less'
  const lessOptions = {
    modifyVars: { 'hack': `true; @import "${vars}";` },
    javascriptEnabled: true
  }
  return {
    lessOptions
  }
}

const config = {
  entry: {
    app: paths.src + '/main.jsx'
  },
  output: {
    path: paths.build,
    publicPath: isDev ? '/' : './',
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
    chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@/src': paths.src
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Webpack Template',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
      inject: 'body',  // script插入body底部
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],

  module: {
    rules: [
      {
        test: jstsRegex,
        exclude: '/node_modules/',
        include: paths.src,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          }
        ]
      },
      {
        test: cssRegex,
        exclude: [cssModuleRegex, '/node_modules/'],
        include: paths.src,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, false)
          },
          'postcss-loader'
        ],
        sideEffects: true,
      },
      {
        test: cssModuleRegex,
        exclude: '/node_modules/',
        include: paths.src,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, true)
          },
          'postcss-loader'
        ]
      },
      {
        test: lessRegex,
        exclude: [lessModuleRegex, '/node_modules/'],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, false)
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: lessOptions()
          }
        ],
        sideEffects: true,
      },
      {
        test: lessModuleRegex,
        exclude: '/node_modules/',
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: cssModuleOptions(1, true) },
          'postcss-loader',
          { loader: 'less-loader' },
        ],
      },
    ]
  },
}

module.exports = config