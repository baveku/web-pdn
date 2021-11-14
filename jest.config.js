// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const { defaults } = require('jest-config');
const { pathsToModuleNameMapper } = require('ts-jest/utils')
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig')

module.exports = {
	clearMocks: true,
	moduleFileExtensions: [
		"js",
		"json",
		"jsx",
		"ts",
		"tsx",
		"node"
	],
	preset: 'ts-jest',
	setupFilesAfterEnv: ['./src/setupTests.ts'],
	coveragePathIgnorePatterns: ['node_modules'],
	testMatch: ['<rootDir>/**/*.test.ts'],
	testPathIgnorePatterns: ['/node_modules/'],
	// A list of paths to snapshot serializer modules Jest should use for snapshot testing
	// snapshotSerializers: [],

	// The test environment that will be used for testing
	testEnvironment: 'node',
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
}
