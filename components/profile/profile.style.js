import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,
    marginTop: "auto",
    backgroundColor: "white",
  },
  avatar: {},
  option: { display: "flex", flexDirection: "row", width: "100%" },
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
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
  },
  submitButton: {
    paddingVertical: SIZES.xSmall,
    backgroundColor: "black",
    borderRadius: SIZES.xLarge,
    marginTop: SIZES.large,
  },
  inputLabel: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    marginBottom: SIZES.xxSmall,
  },
  closeButtonIcon: { marginRight: 10 },
  googleSignIn: {},
  complianceContainer: {
    alignItems: "center",
  },
  complianceLink: {
    fontFamily: FONT.bold,
  },
  socialRegisterContainer: {
    marginTop: SIZES.xLarge,
    flexDirection: "row",
    justifyContent: "center",
  },
  alreadyHaveAccount: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  alreadyHaveAccountIcon: { marginHorizontal: 10, textAlign: "center" },
  socialButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  socialIcon: { marginRight: 10 },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});
export default styles;
