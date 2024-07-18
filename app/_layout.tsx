import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="levels/index" />
      <Stack.Screen options={{ headerShown: false, animation: "fade", animationDuration: 150  }} name="levels/1/index" />
      <Stack.Screen options={{ headerShown: false, animation: "fade", animationDuration: 150 }} name="levels/1/[logo]" />
    </Stack>
  );
}
