import styles from "./loginForm.module.css";
import validators from "src/components/Main/components/LoginForm/validators";
import TextField from "src/components/Main/components/TextField/TextField";
import { Provider } from "src/components/Main/components/Form/formContext";
import useForm from "src/hooks/useForm/useForm";
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
        <TextField name="login" title="Login" />
        <TextField name="password" type="password" title="Password" />
      </Provider>
      <button disabled={!isValid} type="submit">
        Login
      </button>
    </form>
  );
}
