import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>all</Text>
        <Text style={styles.text}>Demo</Text>
        <Text style={styles.text}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2E9",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textContainer: {
    alignSelf: "flex-start",
    padding: 32,
    top: 32,
  },
  text: {
    color: "#030200",
    fontSize: 50,
  },
});
