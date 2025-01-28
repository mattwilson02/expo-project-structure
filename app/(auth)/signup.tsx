import { Text } from '@sf-digital-ui/react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Signup() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Signup</Text>
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
