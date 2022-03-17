import styles from "src/pages/Login/loginForm.module.css";
import React from "react";
import { Button, Field } from "src/feature/form";
import { Link } from "react-router-dom";
import Form from "src/feature/form/components/Form/Form";
import validators from "src/pages/Login/validators";
import { saveToLocalStorage } from "src/services/localStorage";

export default function LoginForm() {
  const onSubmit = (values) => {
    saveToLocalStorage("login", values);
  };

  return (
    <Form
      className={styles.loginForm}
      onSubmit={onSubmit}
      validators={validators}
    >
      <Field name="login" title="Login" />
      <Field name="password" type="password" title="Password" />
      <Button title="Login" />
      <Link className={styles.link} to="/sign-up">
        No account? Create a new one
      </Link>
    </Form>
  );
}
