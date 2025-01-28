import { Button, Text } from "@sf-digital-ui/react-native";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>

      <Link
        href={{
          pathname: "/(transactions)/[id]",
          params: {
            id: "123",
          },
        }}
      >
        <Button.Root>
          <Button.Text>Go to Transaction 123</Button.Text>
        </Button.Root>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
