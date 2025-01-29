import { render, fireEvent, waitFor } from '@/utils/test-utils'
import Login from '@/app/(auth)/login'

jest.mock('@sf-digital-ui/react-native', () => ({
	Button: {
		Root: ({
			children,
			onPress,
			disabled,
		}: {
			children: React.ReactNode
			onPress: () => void
			disabled: boolean
		}) => {
			const { Pressable } = require('react-native')
			return (
				<Pressable testID='button' onPress={onPress} disabled={disabled}>
					{children}
				</Pressable>
			)
		},
		Text: ({
			children,
		}: {
			children: React.ReactNode
		}) => {
			const { Text } = require('react-native')
			return <Text>{children}</Text>
		},
	},
	TextInput: ({
		onChangeText,
		placeholder,
	}: {
		onChangeText: (text: string) => void
		placeholder: string
	}) => {
		const { TextInput: RNTextInput } = require('react-native')
		return (
			<RNTextInput
				testID='text-input'
				onChangeText={onChangeText}
				placeholder={placeholder}
			/>
		)
	},
}))

jest.mock('@expo/vector-icons', () => ({
	AntDesign: () => 'Icon',
}))

describe('Login Component', () => {
	const mockRouter = {
		push: jest.fn(),
		replace: jest.fn(),
	}

	beforeEach(() => {
		jest.clearAllMocks()

		jest
			.spyOn(require('expo-router'), 'useRouter')
			.mockImplementation(() => mockRouter)
	})

	it('renders correctly with initial empty form', () => {
		const { getByPlaceholderText, getAllByTestId } = render(<Login />)

		expect(getByPlaceholderText('name@email.com')).toBeTruthy()
		expect(getByPlaceholderText('**********')).toBeTruthy()

		const buttons = getAllByTestId('button')
		expect(buttons).toHaveLength(2)

		const signInButton = buttons[1]
		expect(signInButton).toBeDisabled()
	})

	it('enables submit button when both fields have values', () => {
		const { getByPlaceholderText, getAllByTestId } = render(<Login />)

		const emailInput = getByPlaceholderText('name@email.com')
		const passwordInput = getByPlaceholderText('**********')
		const buttons = getAllByTestId('button')
		const signInButton = buttons[1]

		expect(signInButton).toBeDisabled()

		fireEvent.changeText(emailInput, 'test@example.com')
		expect(signInButton).toBeDisabled()

		fireEvent.changeText(passwordInput, 'password123')
		expect(signInButton).toBeEnabled()

		fireEvent.changeText(emailInput, '')
		expect(signInButton).toBeDisabled()
	})

	it('navigates to signup page when "Sign Up Instead" button is pressed', async () => {
		const { getAllByTestId } = render(<Login />)

		const buttons = getAllByTestId('button')
		fireEvent.press(buttons[0])

		await waitFor(() => {
			expect(mockRouter.push).toHaveBeenCalledWith('/(auth)/signup')
		})
	})

	it('handles successful login submission', () => {
		const { getByPlaceholderText, getAllByTestId } = render(<Login />)

		fireEvent.changeText(
			getByPlaceholderText('name@email.com'),
			'test@example.com',
		)
		fireEvent.changeText(getByPlaceholderText('**********'), 'password123')

		const buttons = getAllByTestId('button')
		const signInButton = buttons[1]
		fireEvent.press(signInButton)

		expect(mockRouter.replace).toHaveBeenCalledWith('/')
	})
})
