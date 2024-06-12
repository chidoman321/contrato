import React, { useState } from "react";
import { Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { SIZES, COLORS, FONT, routes } from "../../constants";
import styles from "./register.style";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Link } from "expo-router";
const Compliance = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.complianceContainer}>
      <Text>
        {t("label.first")}
        <Link href={routes.terms}>
          <Text style={styles.complianceLink}>{t("label.acceptTerms")}</Text>
        </Link>

        {t("label.and")}
        <Link href={routes.privacy}>
          <Text style={styles.complianceLink}>
            {t("label.acceptPrivacyPolicy")}
          </Text>
        </Link>

        {t("label.last")}
      </Text>
    </View>
  );
};

export default Compliance;
