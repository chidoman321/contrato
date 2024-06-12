import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    justifyContent: "center",
    backgroundColor: "white",
  },
  loginInputContainer: {
    outline: "none",
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
    borderRadius: SIZES.xLarge,
    paddingVertical: SIZES.xxxSmall,
    backgroundColor: COLORS.lightWhite,
  },
  errorMessage: { color: "red" },
  loginInput: {
    marginLeft: SIZES.large,
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
  },
  title: {
    textAlign: "center",
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    marginBottom: SIZES.xxxLarge,
  },
  submitButton: {
    paddingVertical: SIZES.xSmall,
    marginTop: SIZES.xxLarge,
    backgroundColor: "black",
    borderRadius: SIZES.xLarge,
  },
  inputLabel: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    marginBottom: SIZES.xxSmall,
  },
  closeButtonIcon: { marginRight: 10 },
  googleSignIn: {},
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});
export default styles;
