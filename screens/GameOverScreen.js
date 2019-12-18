import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text>The game is over!</Text>
        <Text>Number of Rounds: {props.rounds}</Text>
        <Text>Number was: {props.userNumber}</Text>
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
  textContainer: {
    marginBottom: 20,
    alignItems: "center"
  }
});

export default GameOverScreen;
