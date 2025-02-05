// import { Redirect } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { api } from '../../src/services/api'
import { useQuery } from '@tanstack/react-query'
import { Button, Heading } from '@sf-digital-ui/react-native'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

export default function Main() {
	const router = useRouter()
	const { t } = useTranslation()

	const { data: users, isFetching } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await api.get('/users')
			return response.data
		},
	})

	if (isFetching) {
		return <Text style={styles.container}>Loading...</Text>
	}

	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<Heading>Users</Heading>
				<View style={{ gap: 8, alignItems: 'center' }}>
					{users.map(
						(user: {
							id: string
							email: string
							password: string
						}) => (
							<Text key={user.id}>
								{user.email} - {user.password}
							</Text>
						),
					)}
				</View>

				<Button.Root onPress={() => router.replace('/(auth)/login')}>
					<Button.Text>Logout</Button.Text>
				</Button.Root>
				<Text>{t('hello_world')}</Text>
			</SafeAreaView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
	},
})
