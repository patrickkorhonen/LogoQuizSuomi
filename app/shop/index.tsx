import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { getCoins } from "../Storage/storage";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoins } from "@fortawesome/free-solid-svg-icons/faCoins";

export default function Shop() {
  const [pressed, setPressed] = useState(0);
  const [coin, setCoin] = useState(0);
  
  const options = [
    { id: 2, coins: "50", price: "0.99"},
    { id: 3, coins: "150", price: "1.99"},
    { id: 4, coins: "350", price: "3.99"},
    { id: 5, coins: "800", price: "7.99"},
    { id: 6, coins: "2000", price: "15.99"},
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoin(data)
    };
    fetchData();
  }, []);
 

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#d1c438",
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
          Kauppa
        </Text>
        <Text style={styles.headerTextR}></Text>
      </View>
      <ScrollView>
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <View>
            
          <Pressable
              key={1}
              onPressIn={() => setPressed(1)}
              onPressOut={() => setPressed(0)}
              style={
                pressed === 1
                  ? styles.optionPres
                  : styles.option
              }
            >
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={{...styles.textsm, flex: 1}}>Poista mainokset</Text>
              <Text style={{...styles.textsm, color: "#f0eded"}}>3.99 €</Text>
              </View>
            </Pressable>
          </View>
          <View style={{backgroundColor: "#7a7a7a", height: 2, marginVertical: 20, marginHorizontal: 30, borderRadius: 20}}></View>
          <View style={{flexDirection: "row", paddingHorizontal: 30, marginBottom: 16}}>
              <Text style={{flex: 1, fontSize: 26, fontWeight: 800, color: "#9e810e"}}>Kolikot: </Text>
              <Text style={{fontSize: 26, fontWeight: 800, color: "#9e810e"}}>{coin}</Text>
            </View>
          {options.map((option) => (
            <Pressable
              key={option.id}
              onPressIn={() => setPressed(option.id)}
              onPressOut={() => setPressed(0)}
              style={
                pressed === option.id
                  ? styles.optionPres
                  : styles.option
              }
            >
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={{...styles.textsm, flex: 1}}>{option.coins} kolikkoa</Text>
              <Text style={{...styles.textsm, color: "#f0eded"}}>{option.price} €</Text>
              </View>
            </Pressable>
          ))}
          <View>
          <View style={{backgroundColor: "#919191", height: 2, marginVertical: 20, marginHorizontal: 30, borderRadius: 20}}></View>
          <Pressable
              key={7}
              onPressIn={() => setPressed(7)}
              onPressOut={() => setPressed(0)}
              style={
                pressed === 7
                  ? styles.optionPres
                  : styles.option
              }
            >
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={{...styles.textsm, flex: 1}}>20 kolikkoa</Text>
              <Text style={{...styles.textsm, color: "#f0eded"}}>Katso mainos</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0edb9",
    height: "100%",
    //justifyContent: "center",
  },
  option: {
    backgroundColor: "#67a4c9",
    padding: 20,
    margin: 4,
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
  optionPres: {
    backgroundColor: "#5082a1",
    padding: 20,
    margin: 4,
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
