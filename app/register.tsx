import { View, Text, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, CheckBox } from "@rneui/themed";
import { Stack } from "expo-router";
import { SIZES, COLORS, FONT } from "../constants";
import React from "react";
import { Formik } from "formik";
import styles from "../components/register/register.style";
import { useTranslation } from "react-i18next";
import useValidations from "../hooks/useValidations.hook";
import RegisterInputs from "../components/register/registerInputs";
import SocialRegister from "../components/register/socialRegister";
import { SafeAreaView } from "react-native-safe-area-context";
import Compliance from "../components/register/compliance";

const Register = () => {
  const { t } = useTranslation();
  const { registerSchema } = useValidations();

  const initialValues = {
    phone: "",
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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <SafeAreaView style={styles.container}>
              <Text style={styles.title}>{t("register.title")}</Text>
              <RegisterInputs
                formikProps={formikProps}
                initialValues={{
                  phone: initialValues.phone,
                  password: initialValues.password,
                  confirm_password: initialValues.confirm_password,
                }}
              />
              <Compliance />
              <Button
                title={t("register.submit")}
                loading={formikProps.isSubmitting}
                buttonStyle={styles.submitButton}
                onPress={formikProps.handleSubmit}
                disabled={!formikProps.isValid || formikProps.isSubmitting}
              />
              <SocialRegister />
            </SafeAreaView>
          );
        }}
      </Formik>
    </>
  );
};

export default Register;
