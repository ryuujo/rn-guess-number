import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";

const { bodyText, title } = DefaultStyles;

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={title}>The game is over!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={bodyText}>Number of Rounds: {props.rounds}</Text>
        <Text style={bodyText}>Number was: {props.userNumber}</Text>
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
  }
});

export default GameOverScreen;
