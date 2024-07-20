import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { getLevelGuessed } from "../Storage/storage";

export default function Levels() {
  const [pressed, setPressed] = useState(0);
  const [progress, setProgress] = useState<string[]>([]);

  const levels = [
    { id: 1, title: "Taso 1" },
    { id: 2, title: "Taso 2" },
    { id: 3, title: "Taso 3" },
    { id: 4, title: "Taso 4" },
    { id: 5, title: "Taso 5" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      levels.map(async (level) => {
        await getLevelGuessed(`${level.id}`).then((data) => {
          if (data) {
            const prevArray = progress;
            prevArray.push(data);
            setProgress([...prevArray]);
            
          } else {
            const prevArray = progress;
            prevArray.push("0");
            setProgress([...prevArray]);
          }
        });
      });
    };
    fetchData();
  }, []);

  

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
                <Text style={styles.textsm}>{((Number(progress[level.id - 1]) / 12) * 100).toFixed(1)}%</Text>
                <View style={styles.progressbar}>
                  <View
                    style={{
                      backgroundColor: "#ab4418",
                      height: 6,
                      width: `${(Number(progress[level.id - 1]) / 12) * 100}%`,
                      borderRadius: 10,
                    }}
                  ></View>
                </View>
                <Text style={styles.textsm}>{progress[level.id - 1]}/12</Text>
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
    marginBottom: 20,
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
