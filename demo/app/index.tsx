import Format from "@/components/Format";
import GridSquare from "@/components/GridSquare";
import IconButton from "@/components/IconButton";
import { recorder } from "@/hooks/recorder";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { startRecording, stopRecording, playSound, uri } = recorder();
  const [status, setStatus] = useState<"idle" | "recording" | "readyToPlay">(
    "idle"
  );
  const [audioUri, setAudioUri] = useState<string | null>(null);

  async function handlePress() {
    if (status === "idle") {
      await startRecording();
      setStatus("recording");
    } else if (status === "recording") {
      await stopRecording();
      setStatus("readyToPlay");
    } else if (status === "readyToPlay" && audioUri) {
      await playSound();
    }
  }

  function getButtonIcon() {
    if (status === "idle") return "mic";
    if (status === "recording") return "stop";
    if (status === "readyToPlay") return "play-arrow";
    return "mic";
  }

  function handleDelete() {
    setAudioUri(null);
    setStatus("idle");
  }

  function handleSave() {
    if (audioUri) {
      router.push({
        pathname: "/recs/[data_id]",
        params: { data_id: encodeURIComponent(audioUri!) },
      });
    }
  }

  if (uri && uri !== audioUri) {
    setAudioUri(uri);
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

        <View style={styles.gridContainer}>
          <Format type="circle" size={280} color="#030200" borderWidth={2.4} />
          <GridSquare
            type="circle"
            rows={8}
            cols={8}
            pointSize={18}
            spacing={10}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </View>

        <View style={styles.flex}>
          <View style={styles.buttonRow}>
            <IconButton
              iconName={getButtonIcon()}
              onPress={handlePress}
              color={status === "recording" ? "#FE5252" : "#70CDDE"}
              size={75}
            />

            <IconButton
              iconName="delete"
              onPress={handleDelete}
              color="#FE5252"
              size={75}
              disabled={!audioUri}
            />
          </View>

          <View style={styles.bottomButtons}>
            <IconButton
              title="Salvar Gravação"
              iconName="save"
              color="#FFF"
              textColor="#030200"
              borderColor="#030200"
              onPress={handleSave}
              // disabled={!audioUri}
              width="85%"
              type="outline"
              height={55}
            />

            <IconButton
              title="Ver Gravações"
              iconName="library-music"
              onPress={() => router.push("/recs/")}
              color="#FFF"
              textColor="#030200"
              borderColor="#030200"
              type="outline"
              width="85%"
              height={55}
            />
          </View>
        </View>

        {/* {audioUri && (
          <Text style={{ marginTop: 20, color: "#030200", fontSize: 14 }}>
            Arquivo salvo em:
            {"\n"}
            {audioUri}
          </Text>
        )} */}
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
    fontSize: 65,
    fontWeight: 700,
    lineHeight: 80,
  },
  gridContainer: {
    marginTop: 30,
    width: 260,
    height: 260,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
  bottomButtons: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 12,
  },
});
