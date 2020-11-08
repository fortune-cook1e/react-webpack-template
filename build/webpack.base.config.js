const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const resolve = (dir) => {
  return path.join(__dirname,dir)
}


const jsReg = /\.(js|jsx)$/
const cssReg = /\.(css)$/

const config = {
  entry:{
    main:resolve('../src/main.jsx')
  },
  mode:isDev ? 'development' : 'production',
  devtool:'source-map',
  output:{
    path:resolve('../dist'),
    publicPath:isDev ? '/' :'./',
    filename:'js/[name].[hash].js',
    chunkFilename:'js/[name].[id].js'
  },
  resolve:{
    extensions:['.js','.jsx'],
    alias:{
      '@':resolve('../src')
    }
  },
  module:{
    rules:[
      {
        test:jsReg,
        include:resolve('../src'),
        exclude:/node_modules/,
        use:[
          {
            loader:'babel-loader',
            options:{
              cacheDirectory:true
            }
          }
        ]
      },
      {
        test:cssReg,
        include:resolve('../src'),
        exclude:/node_modules/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:resolve('../public/index.html')
    })
  ]
}

module.exports = config