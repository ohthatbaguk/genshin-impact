import styles from "./form.module.css";
import useForm from "src/components/Main/components/Form/hooks/useForm";
import validators from "src/components/Main/components/Form/validators";
import TextField from "src/components/Main/components/TextField/TextField";
import React from "react";
import { Provider } from "src/components/Main/components/Form/formContext";

export default function Form() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const { values, changeHandler, errors, isValid, isTouched, handleSubmit } =
    useForm({}, validators, onSubmit);

  return (
    <form name="signUpForm" onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Sign Up</h1>
      <Provider value={{ values, errors, isTouched, changeHandler }}>
        <TextField title="First Name" name="firstName" type="text" />
        <TextField title="Last Name" name="lastName" />
        <TextField title="Login" name="login" />
        <TextField title="Password" name="password" type="password" />
        <TextField
          title="Repeat password"
          name="repeatPassword"
          type="password"
        />
        <TextField title="Age" name="age" type="number" />
        <TextField title="Email" name="email" type="email" />
      </Provider>
      <input name="file" type="file" />
      <button disabled={!isValid} className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
}
