import styles from "src/pages/SignUp/signUpForm.module.css";
import React from "react";
import { Button, Field } from "src/feature/form";
import Form from "src/feature/form/components/Form/Form";
import validators from "src/pages/SignUp/validators";
import useSignUpForm from "src/pages/SignUp/hooks/useSignUpForm";

export default function SignUpForm() {
  const { error, onSubmit } = useSignUpForm();
  return (
    <Form className={styles.form} onSubmit={onSubmit} validators={validators}>
      <h1 className={styles.title}>Sign Up</h1>
      <Field title="First Name" name="firstName" type="text" />
      <Field title="Last Name" name="lastName" />
      <Field title="Login" name="login" />
      <Field title="Password" name="password" type="password" />
      <Field title="Repeat password" name="repeatPassword" type="password" />
      <Field title="Age" name="age" type="number" />
      <Field title="Email" name="email" type="email" />
      <Button title="Submit" />
      <p className={styles.error}>{error ?? ""}</p>
    </Form>
  );
}
