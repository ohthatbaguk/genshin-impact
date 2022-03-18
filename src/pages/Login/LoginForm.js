import styles from "src/pages/Login/loginForm.module.css";
import React, { useState } from "react";
import { Button, Field } from "src/feature/form";
import { Link } from "react-router-dom";
import Form from "src/feature/form/components/Form/Form";
import validators from "src/pages/Login/validators";
import { getFromLocalStorage } from "src/services/localStorage";

export default function LoginForm() {
  const localData = getFromLocalStorage("newUser");
  const [error, setError] = useState("");

  const onSubmit = (values) => {
    const isValid =
      values.login !== localData.login ||
      values.password !== localData.password;

    isValid ? setError("Something went wrong") : setError("");
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
        No account? Create a new one.
      </Link>
      {error}
    </Form>
  );
}
