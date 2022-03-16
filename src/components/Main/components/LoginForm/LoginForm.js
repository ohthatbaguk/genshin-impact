import styles from "./loginForm.module.css";
import validators from "src/components/Main/components/LoginForm/validators";
import Field from "src/feature/form/components/Field/Field";
import { Provider } from "src/feature/form/formContext";
import useForm from "src/feature/form/hooks/useForm/useForm";
import React from "react";

export default function LoginForm() {
  const onSubmit = (values) => {
    console.log(`The login is ${values.login}`);
    console.log(`The password is ${values.password}`);
  };

  const { values, changeHandler, errors, isValid, isTouched, handleSubmit } =
    useForm({}, validators, onSubmit);

  console.log(errors);
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Provider value={{ values, errors, isTouched, changeHandler }}>
        <Field name="login" title="Login" />
        <Field name="password" type="password" title="Password" />
      </Provider>
      <button disabled={!isValid} type="submit">
        Login
      </button>
    </form>
  );
}
