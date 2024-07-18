import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { setItem, getItem } from "@/app/Storage/storage";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const images = {
  hesburger: require('./images/hesburger.png'),
  bmw: require('./images/bmw.png'),
};

const logos = [
  { id: 1, logo: "A", answer: "hesburger", image: images.hesburger},
  { id: 2, logo: "B", answer: "bmw", image: images.bmw },
  { id: 3, logo: "C", answer: "citroen", image: images.bmw },
  { id: 4, logo: "D", answer: "dhl", image: images.bmw },
  { id: 5, logo: "E", answer: "ebay", image: images.bmw  },
  { id: 6, logo: "F", answer: "facebookfacebook", image: images.bmw  },
  { id: 7, logo: "G", answer: "google", image: images.bmw  },
  { id: 8, logo: "H", answer: "hp", image: images.bmw  },
  { id: 9, logo: "I", answer: "ikea", image: images.bmw  },
  { id: 10, logo: "J", answer: "jbl", image: images.bmw  },
  { id: 11, logo: "K", answer: "kia", image: images.bmw  },
  { id: 12, logo: "L", answer: "lg", image: images.bmw  },
];
let logoC: any = {}

export default function Level1() {
  const [pressed, setPressed] = useState(0);

  

  useEffect(() => {
    
    const fetchData = async () => {
    
    logos.forEach(async (logo) => {
      const data = await getItem(`${logo.answer}`)
      logoC[logo.answer] = data
    })
  }
    fetchData()
  }, [])
  

  
  
  

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#63b5d6",
          height: 120,
          paddingBottom: 24,
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
              key={logo.id}
              style={pressed === logo.id ? styles.logoPres : logoC[logo.answer] ? { ...styles.logo, opacity: 0.5 } : styles.logo}
            >
              {logo.image ? (
                <Image style={{
                  height: 120,
                  width: 120,
                  objectFit: "contain",
                }} source={logo.image} />
              ) : (
                <Text style={styles.text}>{logo.logo}</Text>
              )}
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
    //backgroundColor: "#fff",
  },
  logo: {
    //backgroundColor: "#a3f0a6",
    padding: 0,
    marginVertical: 10,
  },
  logoPres: {
    opacity: 0.5,
    padding: 0,
    margin: 0,
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
    marginBottom: 10,
  },
  headerTextL: {
    fontSize: 20,
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
  },
});
