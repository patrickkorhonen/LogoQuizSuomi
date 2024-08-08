import { Link, useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import { getAllItems, clear } from "@/app/Storage/storage";
import { logos, colors } from "@/arrays/levelArrays";




export default function Level() {
  const local = useLocalSearchParams();
  const level = local.level;
  const [pressed, setPressed] = useState(0);
  const [logoArray, setLogoArray] = useState<string[]>([]);
  const [logosLevel, setLogosLevel] = useState<any[]>([]);

  

  useEffect(() => {
    setLogosLevel(logos[Number(level!.toString()) - 1]);
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const logoArray = await getAllItems(logos[Number(level!.toString()) - 1].map(logo => logo.answer));
      const filtered = logoArray?.filter(logo => logo[1] != null)
      //console.log(filtered?.map(logo => logo[0]))
      if (filtered != undefined) {
        setLogoArray(filtered?.map(logo => logo[0]))
      }
    };
    fetchData();
    //clear()
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors[Number(level!.toString()) - 1],
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
        <Link replace href="/levels" asChild>
          <Text style={styles.headerTextL}>←</Text>
        </Link>
        <Text style={styles.headerText}>Taso {level}</Text>
        <Text style={styles.headerTextR}></Text>
      </View>
      <ScrollView> 
      <View style={styles.logosContainer}>
        {logosLevel.map((logo) => (
          <Link replace key={logo.id} href={`levels/${level}/${logo.answer}`} asChild>
            <Pressable
              onPressIn={() => setPressed(logo.id)}
              onPressOut={() => setPressed(0)}
              key={logo.id}
              style={
                pressed === logo.id
                  ? styles.logoPres
                  : logoArray.includes(logo.answer)
                  ? styles.logoCorrect
                  : styles.logo
              }
            >
              {logo.image && (
                <ImageBackground
                  style={{
                    height: 84,
                    width: 84,
                    margin: 18
                    //objectFit: "contain",
                  }}
                  resizeMode="contain"
                  source={logo.image}
                >
                  {logoArray.includes(logo.answer) && (
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        alignSelf: "center",
                        marginVertical: "auto",
                      }}
                      source={require("../images/correct.png")}
                    />
                  )}
                </ImageBackground>
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
    height: "100%"
    //backgroundColor: "#fff",
  },
  logo: {
    //backgroundColor: "#a3f0a6",
    padding: 0,
    marginVertical: 10,
  },
  logoCorrect: {
    //backgroundColor: "#a3f0a6",
    padding: 0,
    marginVertical: 10,
    opacity: 0.5,
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
