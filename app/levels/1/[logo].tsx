import { useLocalSearchParams, Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable, Image } from "react-native";

const images = {
  hesburger: require('./images/hesburger.png'),
  bmw: require('./images/bmw.png'),
};

const logoOrder = ["hesburger", "bmw", "citroen", "dhl", "ebay", "facebook", "google", "hp", "ikea", "jbl", "kia", "lg"];

export default function Logo() {
  const local = useLocalSearchParams();
  const logo = local.logo;
  const logoArr = (typeof logo === "string" ? logo : "").split("");
  const [text, onChangeText] = useState("");
  const inputRef = useRef(null);
  const image = images[logo as keyof typeof images];
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    setTimeout(() => (inputRef.current as TextInput | null)?.focus(), 520)
  }, []);


  const handleTextChange = (newText: string) => {
    if (newText.trim() === text) {
      return;
    }
    if (newText.length <= logoArr.length) {
      onChangeText(newText); 
    }
    if (newText.toLowerCase() === logo!.toString().toLowerCase()) {
      setCorrect(true),
      (inputRef.current as TextInput | null)?.blur()
      console.log("oikein")
    }
    else if (newText.length === logoArr.length) {
      console.log("väärin")
    }
  };

  return (
    <View style={{height: "100%", flexDirection: "column"}}>
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
        <Link href="/levels/1" asChild>
          <Text style={styles.headerTextL}>←</Text>
        </Link>
        <Text style={styles.headerText}></Text>
        <Text style={styles.headerTextR}></Text>
      </View>
      <View style={{padding: 20, flexGrow: 1}}>
      <Image style={{
        height: 300,
        width: "70%",
        objectFit: "contain",
        marginHorizontal: "auto",
      }} source={image}>
      </Image>
      <View>
        <Pressable
          style={{
            marginTop: 0,
          }}
          onPress={() => (inputRef.current as TextInput | null)?.focus()}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {logoArr.map((letter, index) => (
                <View key={index}>
                  {text[index] != undefined ? (
                    <View style={styles.boxtop} >
                    <Text style={styles.char}>{text[index]}</Text>
                    <Text style={styles.char2}>—</Text>
                    </View>
                  ) : (
                    <View style={styles.boxtop} >
                    <Text style={styles.char}>&nbsp;</Text>
                    <Text style={styles.char2}>—</Text>
                    </View>
                  )}
                </View>
            ))}
            </View>
  
        </Pressable>
        <View style={{flexDirection: "row"}}>
        {logoOrder.indexOf(logo!.toString()) > 0 ? (
          <Link href={`/levels/1/${logoOrder[logoOrder.indexOf(logo!.toString()) - 1]}`} asChild>
            <Text style={styles.previous}>←</Text>
          </Link>
        ) : (
          <Text style={{flex: 1}}>&nbsp;</Text>
        )}
        <Text style={{flex: 1}}>&nbsp;</Text>
        {logoOrder.indexOf(logo!.toString()) < logoOrder.length - 1 ? (
          <Link href={`/levels/1/${logoOrder[logoOrder.indexOf(logo!.toString()) + 1]}`} asChild>
            <Text style={styles.next}>→</Text>
          </Link>
        ) : (
          <Text style={{flex: 1}}>&nbsp;</Text>
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
        <View style={{
          backgroundColor: "#39963c",
          width: "100%",
          padding: 20,
          margin: 40,
          marginHorizontal: "auto",
          borderRadius: 10,
          flexGrow: 1,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
          <Text style={{fontSize: 30, fontWeight: "700", color: "white", textAlign: "center"}}>OIKEIN</Text>
          <Image style={{objectFit: "contain", margin: "auto", width: 60, height: 60}} source={require("../images/correct.png")}></Image>

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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "auto",
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
  char: {
    fontSize: 36,
    fontWeight: "300",
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
    flex: 1,
    textAlign: "left",
    padding: 6,
  },
  next: {
    fontSize: 40,
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
    padding: 6,
  }
});
