module.exports = {
	preset: 'jest-expo',
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
	setupFiles: ['./jest.setup.js'],
	rootDir: './',
	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
	],
	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
		'^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@/constants/(.*)$': '<rootDir>/src/constants/$1',
		'^@/utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@/app/(.*)$': '<rootDir>/app/$1',
		'^@/assets/(.*)$': '<rootDir>/assets/$1',
		'^@/services/(.*)$': '<rootDir>/src/services/$1',
	},
}
