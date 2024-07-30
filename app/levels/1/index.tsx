import { Link } from "expo-router";
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
import { getItem, clear, getLevelGuessed, getAllItems } from "@/app/Storage/storage";
import { KeyValuePair } from "@react-native-async-storage/async-storage/lib/typescript/types";

const images = {
  hesburger: require("./images/hesburger.png"),
  fazer: require("./images/fazer.png"),
  finnair: require("./images/finnair.png"),
  prisma: require("./images/prisma.png"),
  mtv3: require("./images/mtv3.png"),
  fiskars: require("./images/fiskars.png"),
  taffel: require("./images/taffel.png"),
  finnkino: require("./images/finnkino.png"),
  panda: require("./images/panda.png"),
  valio: require("./images/valio.png"),
  dna: require("./images/dna.png"),
  neste: require("./images/neste.png"),
};

const logos = [
  { id: 1, answer: "hesburger", image: images.hesburger },
  { id: 2, answer: "fazer", image: images.fazer },
  { id: 3, answer: "finnair", image: images.finnair },
  { id: 4, answer: "prisma", image: images.prisma },
  { id: 5, answer: "mtv3", image: images.mtv3 },
  { id: 6, answer: "fiskars", image: images.fiskars },
  { id: 7, answer: "taffel", image: images.taffel },
  { id: 8, answer: "finnkino", image: images.finnkino },
  { id: 9, answer: "panda", image: images.panda },
  { id: 10, answer: "valio", image: images.valio },
  { id: 11, answer: "dna", image: images.dna },
  { id: 12, answer: "neste", image: images.neste },
];

const logoOrder = ["hesburger", "fazer", "finnair", "prisma", "mtv3", "fiskars", "taffel", "finnkino", "panda", "valio", "dna", "neste"];

export default function Level1() {
  const [pressed, setPressed] = useState(0);
  const [logoArray, setLogoArray] = useState<string[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const logos = await getAllItems(logoOrder)
      const filtered = logos?.filter(logo => logo[1] != null)
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
        <Link replace href="/levels" asChild>
          <Text style={styles.headerTextL}>←</Text>
        </Link>
        <Text style={styles.headerText}>Taso 1</Text>
        <Text style={styles.headerTextR}></Text>
      </View>

      <View style={styles.logosContainer}>
        {logos.map((logo) => (
          <Link replace key={logo.id} href={`levels/1/${logo.answer}`} asChild>
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
                    height: 90,
                    width: 90,
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
