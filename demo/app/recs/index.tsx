import { MOCK_DATA } from "@/mocks/MOCK_DATA";
import { Card, Icon } from "@rneui/themed";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [recordings, setRecordings] = useState(MOCK_DATA);

  function handleDelete(index: number) {
    Alert.alert(
      "Excluir gravação",
      "Tem certeza que deseja excluir esta gravação?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            const updated = recordings.filter((_, i) => i !== index);
            setRecordings(updated);
          },
        },
      ]
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>All</Text>
        <Text style={styles.text}>Demo</Text>
      </View>

      <View style={styles.cardsContainer}>
        {recordings.map((item, index) => (
          <Card key={index} containerStyle={styles.card}>
            <View style={styles.cardHeader}>
              <Icon name="audiotrack" color="#030200" size={26} />
              <Text style={styles.cardTitle}>{item.name}</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.cardDate}>Data: {item.date}</Text>
              <Text style={styles.cardNotes}>{item.notes}</Text>
            </View>

            <View style={styles.cardFooter}>
              <Icon
                name="play-arrow"
                color="#70CDDE"
                size={30}
                style={styles.iconButton}
              />
              <Icon
                name="delete"
                color="#FE5252"
                size={30}
                style={styles.iconButton}
                onPress={() => handleDelete(index)}
              />
            </View>
          </Card>
        ))}

        {recordings.length === 0 && (
          <Text style={styles.emptyText}>Nenhuma gravação disponível.</Text>
        )}
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
    paddingBottom: 40,
  },
  textContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 32,
    marginTop: 32,
  },
  text: {
    color: "#030200",
    fontSize: 50,
    fontWeight: "700",
  },
  cardsContainer: {
    marginTop: 20,
    width: "90%",
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#030200",
    backgroundColor: "#FFF",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: "#030200",
    fontWeight: "700",
    marginLeft: 10,
  },
  cardBody: {
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 14,
    color: "#555",
  },
  cardNotes: {
    fontSize: 16,
    color: "#030200",
    marginTop: 5,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  iconButton: {
    marginLeft: 15,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 30,
    color: "#777",
    fontSize: 16,
  },
});
