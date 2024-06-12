import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "@rneui/themed";
import { Stack, useRouter } from "expo-router";
import { SIZES, COLORS, FONT } from "../constants";
import React from "react";
import { Formik } from "formik";
import styles from "../components/login/login.style";
import { useTranslation } from "react-i18next";
import useValidations from "../hooks/useValidations.hook";
import ResetInputs from "../components/reset/ResetInputs";

const Reset = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { resetSchema } = useValidations();

  const initialValues = {
    password: "",
    confirm_password: "",
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
        validationSchema={resetSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <View style={styles.container}>
              <Text style={styles.title}>{t("reset.title")}</Text>
              <ResetInputs
                formikProps={formikProps}
                initialValues={{ ...initialValues }}
              />
              <Button
                title={t("reset.submit")}
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

export default Reset;
