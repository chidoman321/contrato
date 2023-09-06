import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import styles from "./IntroScreen.style";

const IntroScreen = ({ slide }) => {
  return (
    <View style={styles.introScreen}>
      <Text style={styles.introScreenTitle}>{slide.title}</Text>
      <Text style={styles.introScreenText}>{slide.text}</Text>
    </View>
  );
};

export default IntroScreen;
