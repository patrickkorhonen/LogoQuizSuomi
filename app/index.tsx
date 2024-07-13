import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#fff",
        marginVertical: 120,
      }}>Logo Quiz Suomi</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "#3a9ad9" : "#46b4e3", // Darker shade when pressed
          },
        ]}
      >
        <Text style={styles.text}>Pelaa</Text>
      </Pressable>
      <View style={{
        flexDirection: "row",
      }}>
        <Pressable
          style={({ pressed }) => [
            styles.button2,
            {
              backgroundColor: pressed ? "#5838ba" : "#6d46e3",
            },
          ]}
        >
          <Text style={styles.text}>Tilastot</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button2,
            {
              backgroundColor: pressed ? "#cfc340" : "#e3d646",
            },
          ]}
        >
          <Text style={styles.text}>Kauppa</Text>
        </Pressable>
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
  button2: {
    backgroundColor: "#46b4e3",
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
