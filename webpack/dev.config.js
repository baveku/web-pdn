const resolveTsconfigPathsToAlias = require('./resolve-tsconfig-path-to-webpack-alias');
const path = require('path');
const plugins = require('./plugins');
module.exports = {
	resolve: {
		alias: resolveTsconfigPathsToAlias({ tsconfigPath: __dirname + "/../tsconfig.json", webpackConfigBasePath: __dirname + '/../' }),
		extensions: ['.ts', '.tsx', '.js'],
	},
	entry: './src/index.tsx',
	module: {
		rules: require('./rules.webpack'),
	},
	plugins: plugins,
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
		open: true,
	}
}