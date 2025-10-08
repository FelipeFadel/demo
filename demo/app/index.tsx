import { Button } from "@rneui/themed";
import { Href, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  function getCurrentDate() {
    return new Date();
  }

  function openRecs(path: Href) {
    router.push(path);
  }

  const today = getCurrentDate();
  console.log(today);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Rec</Text>
        <Text style={styles.text}>Demo</Text>
      </View>
      <View style={styles.flex}>
        <Button
          onPress={() => openRecs("/recs/")}
          title={"Gravar"}
          containerStyle={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        />
        <Button
          onPress={() => openRecs("/recs/teste")}
          title={"Ver gravações"}
          containerStyle={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        />
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
  flex: {
    width: "80%",
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
