import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: "Voltar",
        headerStyle: {
          backgroundColor: "#FFF2E9",
        },
        headerTintColor: "#030200",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}
