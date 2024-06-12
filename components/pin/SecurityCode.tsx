import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SIZES, COLORS, FONT, routes } from "../../constants";
import { useTranslation } from "react-i18next";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import { useRouter } from "expo-router";
import styles from "./pin.style";
import { Input } from "@rneui/base";
const SecurityCode = ({ formikProps, initialValues }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const goToRegister = () => {
    router.push(routes.register);
  };

  const inputs = Array(6)
    .fill(0)
    .map(() => React.createRef());

  const handleChange = (text, index) => {
    let SC = formikProps.values.securityCode.split("");
    SC[index] = text;
    SC = SC.join("");
    formikProps.setFieldValue("securityCode", SC);
  };

  return (
    <View style={styles.inputsContainer}>
      {inputs.map((ref, index) => (
        <Input
          key={index}
          ref={ref}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            // a delete should be equal to " "
            if (text === "") {
              text = " ";
            }
            // we just want numbers
            if (isNaN(text)) {
              return;
            }
            handleChange(text, index);
            //avoid focus change if there is some value
            if (
              formikProps.values.securityCode[index + 1] === " " &&
              Platform.OS !== "web"
            ) {
              inputs[index + 1].current.focus();
            }
          }}
          value={
            formikProps.values.securityCode[index] === " "
              ? ""
              : formikProps.values.securityCode[index]
          }
          onBlur={formikProps.handleBlur("securityCode")}
          onFocus={() => {
            ref.current.value = "";
            handleChange(" ", index);
          }}
          returnKeyType="done"
          selectionColor="black"
          containerStyle={styles.pinMainContainer}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
      ))}
    </View>
  );
};

export default SecurityCode;
