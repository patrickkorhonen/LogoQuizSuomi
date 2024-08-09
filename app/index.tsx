import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [pressed, setPressed] = useState(false);
  const [pressedSh, setPressedSh] = useState(false);
  const [pressedSt, setPressedSt] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", marginVertical: 60 }}
        resizeMode="contain"
        source={require("../assets/images/logo_text.png")}
      />
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
            <Text style={styles.text}>Asetukset</Text>
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
    backgroundColor: "#002f6c",
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
    backgroundColor: "#d1c438",
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
    backgroundColor: "#b8ac30",
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
