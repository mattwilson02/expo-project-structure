import { Text } from "@sf-digital-ui/react-native";
import { StyleSheet, View } from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
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
