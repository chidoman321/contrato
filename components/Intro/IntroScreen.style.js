import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const isBackButtonVisible = (slide) => {
  return slide.key !== "slide1" ? "flex" : "none";
};

const styles = StyleSheet.create({
  imgContainer: {
    textAlign: "center",
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
  },
  introScreen: {
    marginTop: -50,
  },
  introScreenTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
  },
  introScreenNextButton: {
    width: "100%",
    backgroundColor: "black",
    borderRadius: SIZES.xxLarge,
  },
  introScreenText: {
    textAlign: "justify",
    marginTop: SIZES.medium,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  introScreenButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  introScreenBackButton: (slide) => ({
    display: isBackButtonVisible(slide),
    borderRadius: SIZES.xxLarge,
  }),
});

export default styles;
