const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const antdTheme = require('./theme')

const jstsRegex = /\.(js|jsx|ts|tsx)$/
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

const isDev = process.env.NODE_ENV === 'development'

const analysis = process.env.ANALYSIS === '1'

const cssModuleOptions = (type, useModules) => {
	const options = { importLoaders: type || 1 }
	if (useModules) {
		options.modules = {
			localIdentName: '[path][name]_[hash:base64:5]',
			exportLocalsConvention: 'camelCase'
		}
	}
	return options
}

const lessOptions = () => {
	const lessOptions = {
		modifyVars: antdTheme,
		javascriptEnabled: true
	}
	return {
		lessOptions
	}
}

const config = {
	target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
	entry: {
		app: paths.src + '/main.tsx'
	},
	output: {
		path: paths.build,
		publicPath: isDev ? '/' : './',
		filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
		chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': paths.src
		}
	},
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
							plugins: [isDev && require.resolve('react-refresh/babel')].filter(
								Boolean
							)
						}
					}
				]
			},
			{
				test: cssRegex,
				exclude: [cssModuleRegex, '/node_modules/'],
				include: paths.src,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: cssModuleOptions(1, false)
					},
					'postcss-loader'
				],
				sideEffects: true
			},
			{
				test: cssModuleRegex,
				exclude: '/node_modules/',
				include: paths.src,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
				include: paths.src,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
				sideEffects: true
			},
			{
				test: lessModuleRegex,
				exclude: '/node_modules/',
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: cssModuleOptions(1, true) },
					'postcss-loader',
					{ loader: 'less-loader' }
				]
			}
		].filter(Boolean)
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'React Webpack Template',
			template: paths.public + '/index.html', // template file
			favicon: paths.public + '/favicon.ico',
			filename: 'index.html', // output file
			inject: 'body' // script插入body底部
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css'
		}),
		analysis && new BundleAnalyzerPlugin(),
		isDev && new ReactRefreshWebpackPlugin()
	].filter(Boolean)
}

module.exports = config
