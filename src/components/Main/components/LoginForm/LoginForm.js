import styles from "./loginForm.module.css";
import validators from "src/components/Main/components/LoginForm/validators";
import React from "react";
import { Button, Field, Provider, useForm } from "src/feature/form";

export default function LoginForm() {
  const onSubmit = (values) => {
    console.log(`The login is ${values.login}`);
    console.log(`The password is ${values.password}`);
  };

  const { values, changeHandler, errors, isValid, isTouched, handleSubmit } =
    useForm({}, validators, onSubmit);

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Provider value={{ values, errors, isTouched, changeHandler }}>
        <Field name="login" title="Login" />
        <Field name="password" type="password" title="Password" />
      </Provider>
      <Button title="Login" isValid={!isValid} />
    </form>
  );
}
