import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  inputsContainer: { flexDirection: "row" },
  pinMainContainer: { flex: 1 },
  inputContainer: {
    borderBottomWidth: 0,
  },
  input: {
    width: 1 / 6,
    borderRadius: SIZES.medium,
    textAlign: "center",
    backgroundColor: COLORS.lightWhite,
    fontSize: 70,
  },
  loginInputContainer: {
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
  },
  submitButton: {
    paddingVertical: SIZES.xSmall,
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
