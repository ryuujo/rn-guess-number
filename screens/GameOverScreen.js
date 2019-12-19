import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";

const { bodyText, title, center } = DefaultStyles;

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={{...title, ...styles.resultText}}>The game is over!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            /* source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/2/2c/Summit_photo_Zugspitze.jpg"
            }} */
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={{ ...bodyText, ...center, ...styles.resultText }}>
          Your phone needed{" "}
          <Text style={styles.highlights}>{props.rounds}</Text> rounds to guess
          the number <Text style={styles.highlights}>{props.userNumber}</Text>
        </Text>
      </View>
      <Button
        title="New Game"
        onPress={props.onRestart}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  textContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center"
  },
  highlights: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultText: {
    fontSize: 18,
    marginHorizontal: 30
  }
});

export default GameOverScreen;
