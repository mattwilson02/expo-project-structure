import { Redirect } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Main() {
	const isAuthenticated = false
	if (!isAuthenticated) {
		return <Redirect href='/(auth)/login' />
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text>Main Page</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
