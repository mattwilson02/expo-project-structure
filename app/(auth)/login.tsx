// Imports
import { AntDesign } from '@expo/vector-icons'
import { Button, Heading, TextInput } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { z } from 'zod'

// Types and Interfaces, and Zod Schemas

// type LoginProps = {
// 	email: string
// 	password: string
// }

// const loginSchema = z.object({
// 	email: z.string().email(),
// 	password: z.string().min(8),
// })

export default function Login() {
	// Hooks
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	// TODO: add refs once design system is updated
	//   const passwordInputRef = useRef<RNTextInput>(null);

	// Variables
	const isValid = email !== '' && password !== ''

	// Functions and logic
	const handleSubmit = () => {
		router.replace('/')
	}

	const goToSignUp = () => {
		router.push('/(auth)/signup')
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.inputContainer}>
				<Heading testID='sign-in-heading'>Sign In</Heading>
				<TextInput
					testID='email-input'
					placeholder='name@email.com'
					onChangeText={setEmail}
					//   onSubmitEditing={(e) => passwordInputRef.current?.focus()}
				/>
				<TextInput
					testID='password-input'
					placeholder='**********'
					onChangeText={setPassword}
					//   ref={passwordInputRef}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button.Root onPress={goToSignUp} size='sm' variant='secondary'>
					<Button.Text>
						<AntDesign
							name='arrowleft'
							size={24}
							color={colors['primary-green']['500']}
						/>
					</Button.Text>
					<Button.Text>Sign Up Instead</Button.Text>
				</Button.Root>
				<Button.Root
					testID='sign-in-button'
					disabled={!isValid}
					size='sm'
					onPress={handleSubmit}
				>
					<Button.Text>Sign In</Button.Text>
				</Button.Root>
			</View>
		</SafeAreaView>
	)
}

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
		backgroundColor: 'white',
	},
	inputContainer: {
		maxWidth: 280,
		width: '100%',
		gap: 8,
	},
	buttonContainer: {
		gap: 8,
		flexDirection: 'row',
	},
})
