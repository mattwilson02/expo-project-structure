import '@testing-library/jest-native'

// Mock expo modules
jest.mock('expo-font', () => ({
	useFonts: () => [true],
	loadAsync: () => Promise.resolve(),
}))

jest.mock('expo-asset', () => ({
	Asset: {
		loadAsync: () => Promise.resolve(),
	},
}))
