import { View, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "@rneui/themed";
import { Stack, useRouter } from "expo-router";
import { SIZES, COLORS, FONT } from "../constants";
import React from "react";
import { Formik } from "formik";
import LoginInputs from "../components/login/LoginInputs";
import styles from "../components/pin/pin.style";
import { useTranslation } from "react-i18next";
import useValidations from "../hooks/useValidations.hook";
import SecurityCode from "../components/pin/SecurityCode";

const Otp = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { securityCodeSchema } = useValidations();

  const initialValues = {
    securityCode: "      ",
  };
  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes realizar acciones con los valores del formulario
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false, headerTransparent: true }} />

      <Formik
        initialValues={initialValues}
        validationSchema={securityCodeSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <View style={styles.container}>
              <Text style={styles.title}>{t("pin.title")}</Text>
              <SecurityCode
                formikProps={formikProps}
                initialValues={{ ...initialValues }}
              />
              <Button
                title={t("button.pinCode.submit")}
                loading={formikProps.isSubmitting}
                buttonStyle={styles.submitButton}
                onPress={formikProps.handleSubmit}
                disabled={!formikProps.isValid || formikProps.isSubmitting}
              />
              <TouchableOpacity>
                <Text style={{ textAlign: "center", fontSize: SIZES.large }}>
                  {t("pin.resend")}
                  0:54
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </>
  );
};

export default Otp;
