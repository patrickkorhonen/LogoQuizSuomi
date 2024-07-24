import { useLocalSearchParams, Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { setItem, getItem, setlevelGuessed } from "@/app/Storage/storage";

const images = {
  hesburger: require("./images/hesburger.png"),
  hesburgerC: require("./images/hesburgerC.png"),
  fazer: require("./images/fazer.png"),
  fazerC: require("./images/fazerC.png"),
  finnair: require("./images/finnair.png"),
  finnairC: require("./images/finnairC.png"),
  prisma: require("./images/prisma.png"),
  prismaC: require("./images/prismaC.png"),
  mtv3: require("./images/mtv3.png"),
  mtv3C: require("./images/mtv3C.png"),
  fiskars: require("./images/fiskars.png"),
  fiskarsC: require("./images/fiskarsC.png"),
  taffel: require("./images/taffel.png"),
  taffelC: require("./images/taffelC.png"),
  finnkino: require("./images/finnkino.png"),
  finnkinoC: require("./images/finnkinoC.png"),
  panda: require("./images/panda.png"),
  pandaC: require("./images/pandaC.png"),
  valio: require("./images/valio.png"),
  valioC: require("./images/valioC.png"),
  dna: require("./images/dna.png"),
  dnaC: require("./images/dnaC.png"),
  neste: require("./images/neste.png"),
  nesteC: require("./images/nesteC.png"),
};

const logoOrder = [
  "hesburger",
  "fazer",
  "finnair",
  "prisma",
  "mtv3",
  "fiskars",
  "taffel",
  "finnkino",
  "panda",
  "valio",
  "dna",
  "neste",
];

export default function Logo() {
  const local = useLocalSearchParams();
  const logo = local.logo;
  const logoArr = (typeof logo === "string" ? logo : "").split("");
  const [text, onChangeText] = useState("");
  const inputRef = useRef(null);
  const image = images[logo as keyof typeof images];
  const fullImage = images[`${logo}C` as keyof typeof images];
  const [correct, setCorrect] = useState(false);
  const [hintCpressed, setHintCpressed] = useState(false);
  const [hintWpressed, setHintWpressed] = useState(false);
  const [hintedLetters, setHintedLetters] = useState("");

  const showWordAlert = () =>
    Alert.alert("Näytä vastaus", "300 kolikkoa", [
      {
        text: 'Peruuta',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        onChangeText(`${logo!.toString()}`);
        setCorrect(true), (inputRef.current as TextInput | null)?.blur();
        setItem(`${logo!.toString()}`, "true");
        setlevelGuessed("1");
      }},
    ]);

  const showLetterAlert = () =>
    Alert.alert("Näytä kirjain", "100 kolikkoa", [
      {
        text: 'Peruuta',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        handleTextChange(`${hintedLetters}${logo!.toString().slice(hintedLetters.length, hintedLetters.length + 1)}`);
        //onChangeText(`${hintedLetters}${logo!.toString().slice(hintedLetters.length, hintedLetters.length + 1)}`);
        if (logo!.toString().slice(hintedLetters.length + 1, hintedLetters.length + 2) === " ") {
          setHintedLetters(hintedLetters + logo!.toString().slice(hintedLetters.length, hintedLetters.length + 1) + " ");
        } else {
          setHintedLetters(hintedLetters + logo!.toString().slice(hintedLetters.length, hintedLetters.length + 1));
        }
        //setCorrect(true), (inputRef.current as TextInput | null)?.blur();
        //setItem(`${logo!.toString()}`, "true");
        //setlevelGuessed("1");
      }},
    ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItem(`${logo!.toString()}`);
      if (data === "true") {
        setCorrect(true);
        onChangeText(`${logo!.toString()}`);
      } else {
        setTimeout(() => (inputRef.current as TextInput | null)?.focus(), 530);
      }
    };
    fetchData();
  }, []);

  const handleTextChange = (newText: string) => {
    if (newText.length < text.length && newText === text.trim()) {
      onChangeText(newText.slice(0, -1));
    } else if (newText.trim() === text) {
      return;
    } else {
      if (newText.length <= logoArr.length) {
        if (logoArr[newText.length] === " ") {
          onChangeText(newText + " ");
        } else {
          onChangeText(newText);
        }
      }
      if (newText.toLowerCase() === logo!.toString().toLowerCase()) {
        setCorrect(true), (inputRef.current as TextInput | null)?.blur();
        console.log("oikein");
        setItem(`${logo!.toString()}`, "true");
        setlevelGuessed("1");
      } else if (newText.length === logoArr.length) {
        console.log("väärin");
      }
    }
  };

  return (
    <View style={{ height: "100%", flexDirection: "column" }}>
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
          marginBottom: 0,
        }}
      >
        <Link replace href="/levels/1" asChild>
          <Text style={styles.headerTextL}>←</Text>
        </Link>
        <Text style={styles.headerText}></Text>
        <Text style={styles.headerTextR}></Text>
      </View>
      <View style={{ padding: 20, flexGrow: 1 }}>
        {correct ? (
          <Image style={styles.image} source={fullImage}></Image>
        ) : (
          <Image style={styles.image} source={image}></Image>
        )}

        <View>
          <Pressable
            style={{
              marginTop: 0,
              marginBottom: 10,
            }}
            onPress={() =>
              !correct ? (inputRef.current as TextInput | null)?.focus() : null
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 30,
              }}
            >
              {logoArr.map((letter, index) => (
                <View key={index}>
                  {text[index] != undefined && letter != " " ? (
                    <View style={styles.boxtop}>
                      <Text style={styles.char}>{text[index]}</Text>
                      <Text style={styles.char2}>—</Text>
                    </View>
                  ) : letter === " " ? (
                    <View style={styles.boxtop}>
                      <Text style={styles.char}>&nbsp;</Text>
                      <Text style={styles.char2}>&nbsp;</Text>
                    </View>
                  ) : (
                    <View style={styles.boxtop}>
                      <Text style={styles.char}>&nbsp;</Text>
                      <Text style={styles.char2}>—</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </Pressable>
          <View style={{ flexDirection: "row" }}>
            {logoOrder.indexOf(logo!.toString()) > 0 ? (
              <View style={{ flex: 1 }}>
                <Link
                  replace
                  href={`/levels/1/${
                    logoOrder[logoOrder.indexOf(logo!.toString()) - 1]
                  }`}
                  asChild
                >
                  <Text style={styles.previous}>←</Text>
                </Link>
              </View>
            ) : (
              <Text style={{ flex: 1 }}>&nbsp;</Text>
            )}
            
              {!correct && (
                <View style={{flexDirection: "row", flex: 2}}>
                <Pressable
                onPressIn={() => setHintCpressed(true)}
                onPressOut={() => setHintCpressed(false)}
                onPress={showLetterAlert}
                style={hintCpressed ? styles.hintPressed : styles.hint}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: "white",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  A
                </Text>
              </Pressable>
              <Pressable
                onPressIn={() => setHintWpressed(true)}
                onPressOut={() => setHintWpressed(false)}
                onPress={showWordAlert}
                style={hintWpressed ? styles.hintPressed : styles.hint}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: "white",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  ?
                </Text>
              </Pressable>
              </View>
              )}
              
            
            {logoOrder.indexOf(logo!.toString()) < logoOrder.length - 1 ? (
              <View style={{ flex: 1 }}>
                <Link
                  replace
                  href={`/levels/1/${
                    logoOrder[logoOrder.indexOf(logo!.toString()) + 1]
                  }`}
                  asChild
                >
                  <Text style={styles.next}>→</Text>
                </Link>
              </View>
            ) : (
              <Text style={{ flex: 1 }}>&nbsp;</Text>
            )}
          </View>
          <TextInput
            ref={inputRef}
            style={{ opacity: 0, height: 0, width: 0 }}
            onChangeText={handleTextChange}
            value={text}
          />
        </View>
        {correct && (
          <View
            style={{
              backgroundColor: "#39963c",
              width: "100%",
              padding: 24,
              margin: 30,
              marginHorizontal: "auto",
              borderRadius: 10,
              flexGrow: 1,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
                color: "white",
                textAlign: "center",
              }}
            >
              OIKEIN
            </Text>
            <Image
              style={{
                objectFit: "contain",
                margin: "auto",
                width: 50,
                height: 50,
              }}
              source={require("../images/correct.png")}
            ></Image>
            <Pressable>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 10,
                  marginHorizontal: "auto",
                }}
              >
                <Link replace href="/levels/1" asChild>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#39963c",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  >
                    &nbsp;Sulje&nbsp;
                  </Text>
                </Link>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  logo: {
    backgroundColor: "#a3f0a6",
    padding: 30,
    margin: 30,
  },
  logoPres: {
    backgroundColor: "#000000",
    padding: 30,
    margin: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "auto",
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
  },
  char: {
    fontSize: 36,
    fontWeight: "400",
    textTransform: "uppercase",

    textAlign: "center",
  },
  char2: {
    fontSize: 40,
    fontWeight: "300",
    textTransform: "uppercase",

    textAlign: "center",
    marginTop: -20,
  },
  boxtop: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: 40,
    justifyContent: "center",
  },
  previous: {
    fontSize: 40,
    fontWeight: "bold",
    //flex: 1,
    textAlign: "left",
    padding: 6,
  },
  next: {
    fontSize: 40,
    fontWeight: "bold",
    //flex: 1,
    textAlign: "right",
    padding: 6,
  },
  image: {
    width: "60%",
    height: 230,
    objectFit: "contain",
    marginHorizontal: "auto",
    //backgroundColor: "red"
  },
  hint: {
    flex: 1,
    backgroundColor: "#c4ba9b",
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: "center",
    borderColor: "#ded2af",
    borderWidth: 3,
  },
  hintPressed: {
    flex: 1,
    backgroundColor: "#ded2af",
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: "center",
    borderColor: "#ded2af",
    borderWidth: 3,
  }
});
