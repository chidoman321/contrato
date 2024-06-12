import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "@rneui/themed";
import { Stack, useRouter } from "expo-router";
import { SIZES, COLORS, FONT } from "../constants";
import React from "react";
import { Formik } from "formik";
import styles from "../components/login/login.style";
import SocialLogin from "../components/login/SocialLogin";
import { useTranslation } from "react-i18next";
import useValidations from "../hooks/useValidations.hook";
import ForgotInputs from "../components/forgot/ForgotInputs";
const Forgot = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { loginSchema } = useValidations();

  const initialValues = {
    phone: "",
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
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <View style={styles.container}>
              <Text style={styles.title}>{t("forgot.title")}</Text>
              <ForgotInputs
                formikProps={formikProps}
                initialValues={{ ...initialValues }}
              />
              <Button
                title={t("forgot.submit")}
                loading={formikProps.isSubmitting}
                buttonStyle={styles.submitButton}
                onPress={formikProps.handleSubmit}
                disabled={!formikProps.isValid || formikProps.isSubmitting}
              />
            </View>
          );
        }}
      </Formik>
    </>
  );
};

export default Forgot;
