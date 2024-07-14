import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";

export default function Logo() {
  const local = useLocalSearchParams();
  const logo = local.logo;

  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {logo}
      </Text>
    </View>
  );
}
