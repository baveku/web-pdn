const resolveTsconfigPathsToAlias = require('./resolve-tsconfig-path-to-webpack-alias');
const path = require('path');
const plugins = require('./plugins');
module.exports = {
	mode: "production",
	resolve: {
		alias: resolveTsconfigPathsToAlias({ tsconfigPath: __dirname + "/../tsconfig.json", webpackConfigBasePath: __dirname + '/../' }),
		extensions: ['.ts', '.tsx', '.js'],
	},
	entry: [
		'./src/index.tsx'
	],
	module: {
		rules: require('./rules.webpack'),
	},
	plugins: plugins
}