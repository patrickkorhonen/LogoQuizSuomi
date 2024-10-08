import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Switch } from "react-native";
import { getAllLevelsGuessed, getSound, setSound } from "../Storage/storage";

const levels = [
  { id: 1, title: "Taso 1"},
  { id: 2, title: "Taso 2"},
  { id: 3, title: "Taso 3"},
  { id: 4, title: "Taso 4"},
  { id: 5, title: "Taso 5"},
];

export default function Stats() {
  const [sum, setSum] = useState(0);
  const [progress, setProgress] = useState<string[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    setSound(!isEnabled);
  } 


  const level = ["1", "2", "3", "4", "5"];
 
  useEffect(() => {
    const fetchData = async () => {
      const guessed = await getAllLevelsGuessed(level)
      const sound = await getSound();
      setIsEnabled(sound);
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
          backgroundColor: "#6d46e3",
          height: 120,
          //paddingBottom: 20,
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
        
        <Link style={{flex: 1}} href="/">
        <View style={{padding: 24}}>
            <Text style={styles.headerTextL}>←</Text>
        </View>
        </Link>
        <Text
          style={styles.headerText}
        >
          Asetukset
        </Text>
        <Text style={styles.headerTextR}></Text>
      </View>
      <ScrollView>
        <View style={{flexDirection: "row", marginHorizontal: 40, marginTop: 30}}>
          <Text style={{flex: 1, color: "#fff", fontSize: 20, fontWeight: 700, marginVertical: "auto"}}>Äänet</Text>
      <Switch
        trackColor={{false: '#767577', true: '#fcfcfc'}}
        thumbColor={isEnabled ? '#609adb' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
        <Text style={{color: "#fff", fontSize: 32, fontWeight: 700, textAlign: "center", margin: 30}}>Logoja ratkaistu</Text>
        <View
          style={{
            marginHorizontal: 40,
            padding: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
          {levels.map((level) => (
            <View key={level.id}  style={{flexDirection: "row", margin: 10}}>
            <Text style={{flex: 1, fontSize: 20, fontWeight: 400}}>{level.title}</Text>
            <Text style={{fontSize: 20, fontWeight: 600}}>{progress[level.id - 1]}/12</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            marginHorizontal: 40,
            marginTop: 20,
            padding: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
          <Text style={{fontSize: 24, fontWeight: 600, textAlign: "center"}}>Yhteensä: {sum}/60</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ad9edb",
    height: "100%",
    //justifyContent: "center",
  },
  headerTextL: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
    //flex: 1,
    //textAlign: "left",
    marginLeft: 20,
  },
  headerTextR: {
    //fontSize: 20,
    //fontWeight: "bold",
    //color: "#fff",
    flex: 1,
    //textAlign: "right",
    //marginRight: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "center",
    marginBottom: 26,
  },
});
