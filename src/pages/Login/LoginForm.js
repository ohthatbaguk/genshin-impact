import styles from "src/pages/Login/loginForm.module.css";
import React from "react";
import { Button, Field } from "src/feature/form";
import { Link } from "react-router-dom";
import Form from "src/feature/form/components/Form/Form";
import validators from "src/pages/Login/validators";
import useLoginForm from "src/pages/Login/hooks/useLoginForm";
import { CircularProgress } from "@mui/material";

export default function LoginForm() {
  const { error, onSubmit, loading } = useLoginForm();

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
      {loading && <CircularProgress color="inherit" />}
      <p className={styles.error}>{error}</p>
    </Form>
  );
}
