import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="levels/index" />
      <Stack.Screen options={{ headerShown: false }} name="levels/1/index" />
    </Stack>
  );
}
