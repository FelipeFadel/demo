import Format from "@/components/Format";
import GridSquare from "@/components/GridSquare";
import { recorder } from "@/hooks/recorder";
import { Button } from "@rneui/themed";
import { Href, router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { recording, uri, startRecording, stopRecording, playSound } =
    recorder();

  function openRecs(path: Href) {
    router.push(path);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>Rec</Text>
          <Text style={styles.text}>Demo</Text>
        </View>

        <View style={styles.flex}>
          <Button
            onPress={() => openRecs("/recs/")}
            title={"Gravar"}
            containerStyle={{ marginHorizontal: 10, marginVertical: 10 }}
          />
          <Button
            onPress={() => openRecs("/recs/teste")}
            title={"Ver gravações"}
            containerStyle={{ marginHorizontal: 10, marginVertical: 10 }}
          />

          <Button
            onPress={recording ? stopRecording : startRecording}
            title={recording ? "Parar Gravação" : "Iniciar Gravação"}
            containerStyle={{ marginHorizontal: 10, marginVertical: 10 }}
          />

          <Button
            onPress={playSound}
            title={"Tocar Áudio Gravado"}
            disabled={!uri}
            containerStyle={{ marginHorizontal: 10, marginVertical: 10 }}
          />
        </View>

        <View style={styles.gridContainer}>
          <Format type="circle" size={320} color="#030200" borderWidth={4} />
          <GridSquare
            type="circle"
            rows={8}
            cols={8}
            pointSize={25}
            spacing={12}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </View>

        {uri && (
          <Text style={{ marginTop: 20, color: "#030200", fontSize: 14 }}>
            Arquivo salvo em:
            {"\n"}
            {uri}
          </Text>
        )}
      </ScrollView>
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
  gridContainer: {
    marginTop: 30,
    width: 260,
    height: 260,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});
