import { Stack } from 'expo-router'

export default function TransactionsLayout() {
	return (
		<Stack>
			<Stack.Screen
				name='[id]'
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	)
}
