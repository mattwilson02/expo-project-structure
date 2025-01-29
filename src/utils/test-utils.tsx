import { render } from '@testing-library/react-native'
import {
	ThemeProvider,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native'

import type { ReactNode } from 'react'

jest.mock('expo-router', () => ({
	Stack: {
		Screen: () => null,
	},
	useRouter: () => ({
		push: jest.fn(),
		replace: jest.fn(),
		back: jest.fn(),
	}),
}))

jest.mock('expo-splash-screen', () => ({
	preventAutoHideAsync: jest.fn(),
	hideAsync: jest.fn(),
}))

jest.mock('expo-font', () => ({
	useFonts: () => [true],
}))

jest.mock('@/hooks/useColorScheme', () => ({
	useColorScheme: () => 'light',
}))

interface CustomRenderOptions {
	theme?: 'light' | 'dark'
}

const AllTheProviders = ({
	children,
	theme = 'light',
}: { children: ReactNode; theme?: 'light' | 'dark' }) => {
	return (
		<ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
			{children}
		</ThemeProvider>
	)
}

const customRender = (
	ui: React.ReactElement,
	options: CustomRenderOptions = {},
) => {
	const { theme = 'light', ...renderOptions } = options

	return render(ui, {
		wrapper: ({ children }) => (
			<AllTheProviders theme={theme}>{children}</AllTheProviders>
		),
		...renderOptions,
	})
}

export * from '@testing-library/react-native'
export { customRender as render }
