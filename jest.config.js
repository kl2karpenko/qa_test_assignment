export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.jsx?$': 'babel-jest', // Use babel-jest to handle ES Modules
	},
	moduleFileExtensions: ['js', 'jsx'],
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
	"transformIgnorePatterns": [
		"node_modules/(?!variables/.*)"
	]
};