import styles from "src/pages/SignUp/signUpForm.module.css";
import React, { useState } from "react";
import { Button, Field } from "src/feature/form";
import Form from "src/feature/form/components/Form/Form";
import validators from "src/pages/SignUp/validators";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/services/localStorage";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (values) => {
    let users = getFromLocalStorage("users");
    if (!Array.isArray(users)) {
      users = [];
    }

    if (users.find((item) => item.login === values.login)) {
      setError("User already exist!");
    } else {
      saveToLocalStorage("users", [...users, values]);
      navigate("/login");
    }
  };

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
      <p>{error ?? ""}</p>
    </Form>
  );
}
