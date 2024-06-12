import React, { useState } from "react";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { SIZES, COLORS, FONT } from "../../constants";
import styles from "./login.style";
import { useTranslation } from "react-i18next";

const LoginInputs = ({ formikProps, initialValues }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const closeIcon = (field: string) => (
    <Icon
      name="close"
      size={30}
      onPress={() => {
        setFieldValue(field, "");
      }}
    />
  );

  const eyeIcon = () => (
    <Icon
      name={showPassword ? "eye-slash" : "eye"}
      size={30}
      onPress={() => setShowPassword(!showPassword)}
    />
  );

  const allowJustNumbers = (text: string) => {
    const cleanedText = text.replace(/[^0-9]/g, "");
    formikProps.handleChange("phone")(cleanedText);
  };

  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    formikProps;

  initialValues.phone = {
    placeholder: t("input.phone.placeholder"),
    keyboardType: "numeric",
    label: t("input.phone.label"),
    onChangeText: allowJustNumbers,
    maxLength: 10,
    minLength: 10,
  };

  initialValues.password = {
    placeholder: t("input.password.placeholder"),
    label: t("input.password.label"),
    secureTextEntry: !showPassword,
    rightIcon: eyeIcon(),
  };

  return Object.keys(initialValues).map((fieldKey) => (
    <Input
      key={fieldKey}
      inputContainerStyle={styles.loginInputContainer}
      rightIconContainerStyle={styles.closeButtonIcon}
      labelStyle={styles.inputLabel}
      inputStyle={styles.loginInput}
      errorStyle={styles.errorMessage}
      errorMessage={touched[fieldKey] && errors[fieldKey]}
      rightIcon={closeIcon(fieldKey)}
      returnKeyType="done"
      onChangeText={handleChange(fieldKey)}
      onBlur={handleBlur(fieldKey)}
      value={values[fieldKey]}
      {...initialValues[fieldKey]}
    />
  ));
};

export default LoginInputs;
