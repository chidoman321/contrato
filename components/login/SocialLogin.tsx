import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SIZES, COLORS, FONT, routes } from "../../constants";
import { useTranslation } from "react-i18next";
import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import styles from "./login.style";

const SocialLogin = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const goToRegister = () => {
    router.push(routes.register);
  };
  return (
    <View style={{ alignItems: "center", marginTop: SIZES.xxLarge }}>
      {/* Botón de Google */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <Icon
          name="google"
          size={40}
          color="black"
          style={{ marginRight: 10 }}
        />
        <Text>{t("input.google")}</Text>
      </TouchableOpacity>

      {/* Botón de Facebook */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Icon
          name="facebook"
          size={40}
          color="black"
          style={{ marginRight: 10 }}
        />
        <Text>{t("input.facebook")}</Text>
      </TouchableOpacity>
      {/* Botón de ya tengo cuenta */}
      <TouchableOpacity
        onPress={goToRegister}
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Icon name="sign-in" size={40} style={{ marginRight: 10 }} />
        <Text>{t("button.createAccount.label")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;
