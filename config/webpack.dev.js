const { merge } = require('webpack-merge')
const paths = require('./paths')
const commonConfig = require('./webpack.common')

const PORT = 8080

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'cheap-source-map',
	devServer: {
		historyApiFallback: true,
		static: paths.build,
		compress: true,
		hot: true,
		port: PORT,
		open: true
	}
})
