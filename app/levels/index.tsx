import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { getAllLevelsGuessed } from "../Storage/storage";

const levels = [
  { id: 1, title: "Taso 1", open: 0, color: "#2f6e4b"},
  { id: 2, title: "Taso 2", open: 0, color: "#cc1440"},
  { id: 3, title: "Taso 3", open: 0, color: "#391cba"},
  { id: 4, title: "Taso 4", open: 0, color: "#e38d14"},
  { id: 5, title: "Taso 5", open: 35, color: "#ff0000"},
];

export default function Levels() {
  const [pressed, setPressed] = useState(0);
  const [progress, setProgress] = useState<string[]>([]);
  const [sum, setSum] = useState(0);

useEffect(() => {
  const fetchData = async () => {
    const guessed = await getAllLevelsGuessed(levels.map(level => level.id.toString()));
    //console.log(summed)
    setSum(guessed!.map(logo => logo[1] != null ? Number(logo[1]) : 0).reduce((a, b) => a + b, 0))
    setProgress(guessed!.map(logo => logo[1] != null ? logo[1] : "0")); 
  };
  fetchData();
}, []);  

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#0063e3",
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
            marginVertical: 20,
          }}
        >
          {levels.map((level) => level.open <= sum ? (
            
            <Link key={level.id} href={`levels/${level.id}`} asChild>
              <Pressable
                onPressIn={() => setPressed(level.id)}
                onPressOut={() => setPressed(0)}
                key={level.id}
                style={pressed === level.id ? {...styles.levelPres, backgroundColor: level.color, opacity: 0.8} : {...styles.level, backgroundColor: level.color}}
              >
                
                <Text style={styles.text}>{level.title}</Text>
                <View style={{flexDirection: "row"}}>
                <Text style={styles.textsm}>{progress[level.id - 1]}/12</Text>
                <Text style={styles.textsm}>{((Number(progress[level.id - 1]) / 12) * 100).toFixed(1)}%</Text>
                </View>
                <View style={styles.progressbar}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      height: 5,
                      width: `${(Number(progress[level.id - 1]) / 12) * 100}%`,
                      borderRadius: 10,
                    }}
                  ></View>
                </View>
                
              </Pressable>
            </Link>
          ) : (
            <View key={level.id} style={styles.levelLocked}>
              <Text style={styles.text}>{level.title}</Text>
              <Text style={styles.textsm}>Lukittu</Text>
              <Text style={styles.textsm}>Taso aukeaa {level.open - sum} logon päästä</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dce7f5",
    height: "100%",
    //justifyContent: "center",
  },
  level: {
    //backgroundColor: "#e6927a",
    padding: 20,
    margin: 10,
    marginHorizontal: 30,
    //height: 150,
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
    //backgroundColor: "#c77967",
    padding: 20,
    margin: 10,
    marginHorizontal: 30,
    //height: 150,
    //justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  levelLocked: {
    backgroundColor: "#595959",
    padding: 20,
    margin: 10,
    marginHorizontal: 30,
    //height: 150,
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
    marginBottom: 20,
  },
  textsm: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    margin: 6
  },
  progressbar: {
    backgroundColor: "#242424",
    height: 5,
    width: "100%",
    margin: 6,
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
