import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SIZES, COLORS, FONT, routes } from "../../constants";
import { useTranslation } from "react-i18next";
import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import styles from "./register.style";
const SocialRegister = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const goToLogin = () => {
    router.push(routes.login);
  };

  return (
    <View
      style={{
        marginTop: SIZES.xLarge,
        flexDirection: "row",
        marginLeft: SIZES.small,
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        {/* Botón de Google */}
        <TouchableOpacity style={styles.socialButtonContainer}>
          <Icon
            name="google"
            size={40}
            color="black"
            style={styles.socialIcon}
          />
          <Text>{t("input.register.google")}</Text>
        </TouchableOpacity>

        {/* Botón de Facebook */}
        <TouchableOpacity style={styles.socialButtonContainer}>
          <Icon
            name="facebook"
            size={40}
            color="black"
            style={styles.socialIcon}
          />
          <Text>{t("input.register.facebook")}</Text>
        </TouchableOpacity>
      </View>
      {/* Botón de ya tengo cuenta */}
      <TouchableOpacity
        style={{ ...styles.alreadyHaveAccount }}
        onPress={goToLogin}
      >
        <Icon name="sign-in" size={40} style={styles.alreadyHaveAccountIcon} />
        <Text>{t("button.alreadyHaveAccount.label")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialRegister;
