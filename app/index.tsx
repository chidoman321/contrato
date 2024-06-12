import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar, Button, CheckBox } from "@rneui/themed";
import { Stack } from "expo-router";
import { SIZES, COLORS, FONT } from "../constants";
import React from "react";
import { Formik } from "formik";
import styles from "../components/profile/profile.style";
import { useTranslation } from "react-i18next";
import useValidations from "../hooks/useValidations.hook";
import RegisterInputs from "../components/register/registerInputs";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { t } = useTranslation();
  const { registerSchema } = useValidations();

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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView style={styles.container}>
        <View>
          <Avatar
            size={96}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <Text style={styles.title}>John Doe</Text>
        </View>
        <View>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.option}>
              <Icon name="gear" size={SIZES.xxLarge} />
              <Text style={styles.title}>Ajustes</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;
