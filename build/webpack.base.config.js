const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const jsReg = /\.(js|jsx)$/
const cssReg = /\.(css)$/
const cssModuleReg = /\.module\.css$/
const lessReg = /\.less$/
const lessModuleReg = /\.module\.less$/

const lessOptions = () => {
  const varsLess = resolve('../src/styles/vars.less')
  return {
    additionalData: `@import "${varsLess}";`
  }
}

const config = {
  entry: {
    main: resolve('../src/main.jsx')
  },
  mode: isDev ? 'development' : 'production',
  devtool: 'source-map',
  output: {
    path: resolve('../dist'),
    publicPath: isDev ? '/' : './',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[id].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolve('../src')
    }
  },
  module: {
    rules: [
      {
        test: jsReg,
        include: resolve('../src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: cssReg,
        include: resolve('../src'),
        exclude: [cssModuleReg, '/node_modules/'],
        use: ['style-loader', 'css-loader']
      },
      {
        test: cssModuleReg,
        include: resolve('../src'),
        exclude: '/node_modules/',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src')
              },
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: lessReg,
        include: resolve('../src'),
        exclude: [lessModuleReg, '/node_modules/'],
        use: [
          'style-loader', 'css-loader',
          {
            loader: 'less-loader',
            options: lessOptions()
          }
        ]
      },
      {
        test: lessModuleReg,
        include: resolve('../src'),
        exclude: '/node_modules/',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src')
              },
              importLoaders: 2
            }
          },
          {
            loader: 'less-loader',
            options: lessOptions()
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html')
    })
  ]
}

module.exports = config
