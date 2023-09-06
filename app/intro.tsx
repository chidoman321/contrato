import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-elements";
import IntroScreen from "../components/Intro/IntroScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../components/Intro/IntroScreen.style";
import { Stack } from "expo-router";

const slides = [
  {
    key: "slide1",
    title: "Bienvenido a la App",
    text: "Descubre todas las características emocionantes que nuestra aplicación tiene para ofrecer.",
    icon: (
      <Icon
        name="rocket"
        size={250}
        style={styles.imgContainer}
        color="black"
      />
    ),
  },
  {
    key: "slide2",
    title: "Contratos",
    text: "Encuentra una variedad de contratos , rellenalo , mandaselo a la otra parte todo 100% en linea ",
    icon: (
      <Icon name="heart" size={250} style={styles.imgContainer} color="black" />
    ), // Ejemplo de otro icono
  },
  {
    key: "slide3",
    title: "Constituye tu empresa",
    text: "Necesitas crear una empresa y no sabes por donde empezar , tu relajate mientras nosotros lo hacemos",
    icon: (
      <Icon name="star" size={250} style={styles.imgContainer} color="black" />
    ), // Ejemplo de otro icono
  },
];

const Intro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = (): void => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
    }
  };

  const getButtonTitle = (): string => {
    return slides[currentSlide].key !== "slide3" ? "Siguiente" : "Comenzar";
  };

  const handleBackButton = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {slides[currentSlide].icon}

        <IntroScreen slide={slides[currentSlide]} />
        <View style={styles.introScreenButtonGroup}>
          <TouchableOpacity>
            <Icon
              name="arrow-left"
              size={40}
              color="black"
              onPress={handleBackButton}
              style={styles.introScreenBackButton(slides[currentSlide])}
            />
          </TouchableOpacity>

          <Button
            title={getButtonTitle()}
            onPress={handleNextSlide}
            buttonStyle={styles.introScreenNextButton}
          />
        </View>
      </View>
    </>
  );
};

export default Intro;
