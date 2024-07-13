import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [pressed, setPressed] = useState(false);
  const [pressedSh, setPressedSh] = useState(false);
  const [pressedSt, setPressedSt] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          alignSelf: "center",
          color: "#fff",
          marginVertical: 120,
        }}
      >
        Logo Quiz Suomi
      </Text>
      <Link href="/levels" asChild>
        <Pressable
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          style={pressed ? styles.buttonPres : styles.button}
        >
          <Text style={styles.text}>Pelaa</Text>
        </Pressable>
      </Link>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Link href="/stats" asChild>
          <Pressable
            onPressIn={() => setPressedSt(true)}
            onPressOut={() => setPressedSt(false)}
            style={pressedSt ? styles.buttonSt2 : styles.buttonSt}
          >
            <Text style={styles.text}>Tilastot</Text>
          </Pressable>
        </Link>
        <Link href="/shop" asChild>
          <Pressable
            onPressIn={() => setPressedSh(true)}
            onPressOut={() => setPressedSh(false)}
            style={pressedSh ? styles.buttonSh2 : styles.buttonSh}
          >
            <Text style={styles.text}>Kauppa</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a3f0a6",
    height: "100%",
    padding: 40,
    //justifyContent: "center",
  },
  button: {
    backgroundColor: "#46b4e3",
    padding: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPres: {
    backgroundColor: "#3a9ad9",
    padding: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSh: {
    backgroundColor: "#e3d646",
    flexGrow: 1,
    padding: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSh2: {
    backgroundColor: "#cfc340",
    flexGrow: 1,
    padding: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSt: {
    backgroundColor: "#6d46e3",
    flexGrow: 1,
    padding: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSt2: {
    backgroundColor: "#5838ba",
    flexGrow: 1,
    padding: 20,
    margin: 5,
    justifyContent: "center",
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
  },
});
