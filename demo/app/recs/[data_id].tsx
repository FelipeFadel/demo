import GridSquare from "@/components/GridSquare";
import { MOCK_DATA, Recording } from "@/mocks/MOCK_DATA";
import { Button, Icon, Input } from "@rneui/themed";
import { useSearchParams } from "expo-router/build/hooks";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const params = useSearchParams();
  const audioUri = params.get("data_id") ?? "";
  console.log("URI recebida:", audioUri);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleSave() {
    if (!audioUri) {
      alert("Nenhum arquivo de áudio disponível.");
      return;
    }

    const newRecording: Recording = {
      name,
      date,
      notes,
      uri: audioUri,
    };

    MOCK_DATA.push(newRecording);
    console.log("Dados salvos no mock:", MOCK_DATA);
    alert("Gravação salva!");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Save</Text>
        <Text style={styles.text}>Demo</Text>
      </View>

      <View style={styles.gridContainer}>
        <GridSquare
          type="square"
          color="#70CDDE"
          rows={6}
          cols={6}
          pointSize={18}
          spacing={10}
        />
      </View>

      <View style={styles.formContainer}>
        <Input
          placeholder="Digite o nome da gravação"
          value={name}
          onChangeText={setName}
          leftIcon={
            <Icon
              name="edit"
              size={20}
              color="#030200"
              style={{ marginRight: 10 }}
            />
          }
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={styles.inputStyle}
        />

        <Input
          placeholder="Digite a data"
          value={date}
          onChangeText={setDate}
          leftIcon={
            <Icon
              name="calendar-today"
              size={20}
              color="#030200"
              style={{ marginRight: 10 }}
            />
          }
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={styles.inputStyle}
        />

        <Input
          placeholder="Digite suas anotações"
          value={notes}
          onChangeText={setNotes}
          leftIcon={
            <Icon
              name="notes"
              size={20}
              color="#030200"
              style={{ marginRight: 10 }}
            />
          }
          multiline
          numberOfLines={4}
          style={{ textAlignVertical: "center" }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={[styles.inputStyle, { height: 100 }]}
        />

        <Button
          title="Salvar"
          onPress={handleSave}
          icon={
            <Icon
              name="save"
              size={20}
              color="#fff"
              style={{ marginRight: 10 }}
            />
          }
          buttonStyle={styles.saveButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF2E9",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 40,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#030200",
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: "#FFF",
    height: 50,
  },
  textContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 32,
    marginTop: 20,
    zIndex: 2,
  },
  text: {
    color: "#030200",
    fontSize: 65,
    fontWeight: "700",
    lineHeight: 80,
  },
  gridContainer: {
    position: "absolute",
    top: 10,
    left: 100,
    width: 260,
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  formContainer: {
    width: "90%",
    marginTop: 100,
  },
  saveButton: {
    backgroundColor: "#70CDDE",
    borderRadius: 12,
    height: 50,
    marginTop: 20,
  },
});
