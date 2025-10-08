import { Icon } from "@rneui/themed";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function RecsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#FFF2E9" },
        headerTintColor: "#030200",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Ir pra tela inicial",
          headerLeft: () => (
            <Pressable
              onPress={() => router.push("/")}
              style={{ marginLeft: 10 }}
            >
              <Icon name="home" type="flaticon" color="#030200" size={26} />
            </Pressable>
          ),
        }}
      />

      <Stack.Screen
        name="[data_id]"
        options={{
          title: "Voltar",
        }}
      />
    </Stack>
  );
}
