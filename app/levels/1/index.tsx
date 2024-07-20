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
import { getItem, clear, getLevelGuessed } from "@/app/Storage/storage";

const images = {
  hesburger: require("./images/hesburger.png"),
  bmw: require("./images/bmw.png"),
};

const logos = [
  { id: 1, answer: "hesburger", image: images.hesburger },
  { id: 2, answer: "bmw", image: images.bmw },
  { id: 3, answer: "citroen", image: images.bmw },
  { id: 4, answer: "dhl", image: images.bmw },
  { id: 5, answer: "ebay", image: images.bmw },
  { id: 6, answer: "facebookfacebook", image: images.bmw },
];

export default function Level1() {
  const [pressed, setPressed] = useState(0);
  const [logoArray, setLogoArray] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      logos.map(async (logo) => {
        await getItem(`${logo.answer}`).then((data) => {
          if (data) {
            const prevArray = logoArray;
            prevArray.push(logo.answer);
            setLogoArray([...prevArray]);
            //console.log(logoArray)
          }
        });
      });
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
        <Link href="/levels" asChild>
          <Text style={styles.headerTextL}>←</Text>
        </Link>
        <Text style={styles.headerText}>Valitse taso</Text>
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
                    height: 120,
                    width: 120,
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
