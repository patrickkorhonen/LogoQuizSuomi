import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";

export default function Level1() {
  const [pressed, setPressed] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [logo, setLogo] = useState("");

  const logos = [
    { id: 1, logo: "A", answer: "ikea", correct: false },
    { id: 2, logo: "B", answer: "bmw", correct: false },
    { id: 3, logo: "C", answer: "citroen", correct: false },
    { id: 4, logo: "D", answer: "dhl", correct: false },
    { id: 5, logo: "E", answer: "ebay", correct: false },
    { id: 6, logo: "F", answer: "facebook", correct: false },
    { id: 7, logo: "G", answer: "google", correct: false },
    { id: 8, logo: "H", answer: "hp", correct: false },
    { id: 9, logo: "I", answer: "ikea", correct: false },
    { id: 10, logo: "J", answer: "jbl", correct: false },
    { id: 11, logo: "K", answer: "kia", correct: false },
    { id: 12, logo: "L", answer: "lg", correct: false },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#63b5d6",
          height: 120,
          paddingBottom: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          flexDirection: "row",
          //justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Link href="/levels" asChild>
          <Text style={styles.headerTextL}>←</Text>
        </Link>
        <Text style={styles.headerText}>Valitse taso</Text>
        <Text style={styles.headerTextR}></Text>
      </View>
      <ScrollView>
        <View style={styles.logosContainer}>
          {logos.map((logo) => (
            <Link key={logo.id} href={`levels/1/${logo.answer}`} asChild>
            <Pressable
              onPressIn={() => setPressed(logo.id)}
              onPressOut={() => setPressed(0)}
              onPress={() => {
                setLogo(logo.answer);
                setModalVisible(true);
              }}
              key={logo.id}
              style={pressed === logo.id ? styles.logoPres : styles.logo}
            >
              <Text style={styles.text}>{logo.logo}</Text>
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
    backgroundColor: "#fff",
  },
  logo: {
    backgroundColor: "#a3f0a6",
    padding: 30,
    margin: 30,
  },
  logoPres: {
    backgroundColor: "#000000",
    padding: 30,
    margin: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "auto",
  },
  logosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
    marginBottom: 180,
  },
  headerTextL: {
    fontSize: 20,
    fontWeight: "bold",
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
  },
});
