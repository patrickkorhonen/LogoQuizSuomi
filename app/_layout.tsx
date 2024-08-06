import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false, animation: "fade", animationDuration: 150 }} name="stats/index" />
      <Stack.Screen options={{ headerShown: false, animation: "fade", animationDuration: 150 }} name="shop/index" />
      <Stack.Screen options={{ headerShown: false, animation: "fade", animationDuration: 150, gestureEnabled: false }} name="levels/index" />
      <Stack.Screen options={{ headerShown: false, animation: "fade", animationDuration: 150, gestureEnabled: false  }} name="levels/[level]/index" />
      <Stack.Screen options={{ headerShown: false, animation: "fade", animationDuration: 150, gestureEnabled: false }} name="levels/[level]/[logo]" />
    </Stack>
  );
}
