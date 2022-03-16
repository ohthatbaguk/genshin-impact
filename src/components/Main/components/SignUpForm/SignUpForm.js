import styles from "./form.module.css";
import validators from "src/components/Main/components/SignUpForm/validators";
import Field from "src/feature/form/components/Field/Field";
import React from "react";
import { Provider } from "src/feature/form/formContext";
import useForm from "src/feature/form/hooks/useForm/useForm";

export default function SignUpForm() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const { values, changeHandler, errors, isValid, isTouched, handleSubmit } =
    useForm({}, validators, onSubmit);

  return (
    <form name="signUpForm" onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Sign Up</h1>
      <Provider value={{ values, errors, isTouched, changeHandler }}>
        <Field title="First Name" name="firstName" type="text" />
        <Field title="Last Name" name="lastName" />
        <Field title="Login" name="login" />
        <Field title="Password" name="password" type="password" />
        <Field title="Repeat password" name="repeatPassword" type="password" />
        <Field title="Age" name="age" type="number" />
        <Field title="Email" name="email" type="email" />
      </Provider>
      <input name="file" type="file" />
      <button disabled={!isValid} className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
}
