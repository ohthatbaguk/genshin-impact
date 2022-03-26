import Form from "src/feature/form/components/Form/Form";
import { Button, Field } from "src/feature/form";
import styles from "./profile.module.css";
import React from "react";
import { getFromLocalStorage } from "src/services/localStorage";

export default function Profile() {
  const data = getFromLocalStorage("currentUser");

  return (
    <Form initialData={data} className={styles.profileForm}>
      <h1 className={styles.title}>P r o f i l e</h1>
      <section className={styles.fields}>
        <Field title="First Name" name="firstName" type="text" />
        <Field title="Last Name" name="lastName" />
        <Field title="Login" name="login" />
        <Field title="Age" name="age" type="number" />
        <Field title="Email" name="email" type="email" />
      </section>
      <Button classname={styles.button} title="Edit" />
    </Form>
  );
}
