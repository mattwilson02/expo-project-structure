import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Main() {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
