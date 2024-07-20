import { Link } from "expo-router";
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
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#63b5d6",
          height: 120,
          paddingBottom: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          flexDirection: "row",
          //justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        
        <Link href="/" asChild>
            <Text style={styles.headerTextL}>←</Text>
        </Link>
        <Text
          style={styles.headerText}
        >
          Valitse taso
        </Text>
        <Text style={styles.headerTextR}></Text>
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            marginBottom: 180,
          }}
        >
          {levels.map((level) => (
            <Link key={level.id} href={`levels/${level.id}`} asChild>
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
            </Link>
          ))}
        </View>
      </ScrollView>
    </View>
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
  headerTextL: {
    fontSize: 26,
    fontWeight: "900",
    color: "#fff",
    flex: 1,
    textAlign: "left",
    marginLeft: 40,
  },
  headerTextR: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "right",
    marginRight: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "center",
    marginBottom: 4,
  },
});
