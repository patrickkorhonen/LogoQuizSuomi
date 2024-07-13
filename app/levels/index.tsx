import { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";

export default function Levels() {
  const [pressed, setPressed] = useState(0);

  const levels = [
    { id: 1, title: "Taso 1", progress: "0/12" },
    { id: 2, title: "Taso 2", progress: "3/12" },
    { id: 3, title: "Taso 3", progress: "6/12" },
    { id: 4, title: "Taso 4", progress: "9/12" },
    { id: 5, title: "Taso 5", progress: "12/12" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          marginVertical: 80,
        }}
      >
        {levels.map((level) => (
          <Pressable
            onPressIn={() => setPressed(level.id)}
            onPressOut={() => setPressed(0)}
            key={level.id}
            style={pressed === level.id ? styles.levelPres : styles.level}
          >
            <Text style={styles.text}>{level.title}</Text>
            <View style={styles.progressbar}></View>
            <Text style={styles.textsm}>{level.progress}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a3f0a6",
    //justifyContent: "center",
  },
  level: {
    backgroundColor: "#e6927a",
    padding: 26,
    margin: 20,
    marginHorizontal: 40,
    height: 150,
    //justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  levelPres: {
    backgroundColor: "#c77967",
    padding: 26,
    margin: 20,
    marginHorizontal: 40,
    height: 150,
    //justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "auto",
  },
  textsm: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  progressbar: {
    backgroundColor: "#fff",
    height: 6,
    width: "100%",
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
});