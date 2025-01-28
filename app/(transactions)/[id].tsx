import { Text } from "@sf-digital-ui/react-native";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TransactionById() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Transaction {id}</Text>
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
