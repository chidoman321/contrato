import * as yup from "yup";
import { useTranslation } from "react-i18next";

const useValidations = () => {
  const { t } = useTranslation();

  const minPhoneDigits = (val) => {
    if (val) {
      const phoneNumber = val.toString();
      return phoneNumber.length >= 10;
    }
    return true;
  };

  const loginSchema = yup.object().shape({
    phone: yup
      .number()
      .positive(t("input.phone.error.positive"))
      .integer(t("input.phone.error.integer"))
      .test("len", t("input.phone.error.minLength"), minPhoneDigits)
      .required(t("requiredInput")),
    password: yup
      .string()
      .min(8, t("input.password.error.minLength"))
      .matches(/[A-Z]/, t("input.password.error.capital"))
      .matches(/[a-z]/, t("input.password.error.lowercase"))
      .matches(/[0-9]/, t("input.password.error.atLeastOneNumber"))
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        t("input.password.error.atLeastOneSpecialCharacter")
      )
      .required(t("requiredInput")),
  });

  const registerSchema = yup.object().shape({
    phone: yup
      .number()
      .positive(t("input.phone.error.positive"))
      .integer(t("input.phone.error.integer"))
      .test("len", t("input.phone.error.minLength"), minPhoneDigits)
      .required(t("requiredInput")),
    password: yup
      .string()
      .min(8, t("input.password.error.minLength"))
      .matches(/[A-Z]/, t("input.password.error.capital"))
      .matches(/[a-z]/, t("input.password.error.lowercase"))
      .matches(/[0-9]/, t("input.password.error.atLeastOneNumber"))
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        t("input.password.error.atLeastOneSpecialCharacter")
      )
      .required(t("requiredInput")),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        t("input.password.error.matchPasswords")
      )
      .required(t("requiredInput")),
  });

  const securityCodeSchema = yup.object().shape({
    securityCode: yup
      .string()
      .transform((value) => value.replace(/\s+/g, ""))
      .required(t("input.pinCode.required"))
      .min(6, t("input.pinCode.leastCharacters")),
  });

  const resetSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, t("input.password.error.minLength"))
      .matches(/[A-Z]/, t("input.password.error.capital"))
      .matches(/[a-z]/, t("input.password.error.lowercase"))
      .matches(/[0-9]/, t("input.password.error.atLeastOneNumber"))
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        t("input.password.error.atLeastOneSpecialCharacter")
      )
      .required(t("requiredInput")),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        t("input.password.error.matchPasswords")
      )
      .required(t("requiredInput")),
  });

  return { loginSchema, registerSchema, securityCodeSchema, resetSchema };
};

export default useValidations;
