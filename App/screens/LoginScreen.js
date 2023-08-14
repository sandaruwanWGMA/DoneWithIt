import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import LoginInput from "../components/LoginInput";

import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginScreen() {
  return (
    <Screen>
      <Formik
        initialValues={{ username: "", email: "", nothing: "abc" }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <LoginInput
              input="username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              error={errors.username}
            ></LoginInput>

            <LoginInput
              input="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
            ></LoginInput>
            {touched.email && errors.email && <Text>{errors.email}</Text>}

            <Button
              title="Submit"
              onPress={() => {
                console.log(values);
              }}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({});
