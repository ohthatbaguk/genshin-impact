import Form from "src/feature/form/components/Form/Form";
import { Button, Field } from "src/feature/form";
import React from "react";
import styles from "./editProfile.module.css";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/services/localStorage";
import { useNavigate } from "react-router-dom";
import updateUser from "src/feature/api/updateUser";

export default function EditProfile() {
  const user = getFromLocalStorage("currentUser");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await updateUser(values);
    saveToLocalStorage("currentUser", values);
    navigate("/profile");
  };

  return (
    <Form initialData={user} className={styles.profileForm} onSubmit={onSubmit}>
      <h1 className={styles.title}>E d i t P r o f i l e</h1>
      <section className={styles.fields}>
        <Field title="First Name" name="firstName" type="text" />
        <Field title="Last Name" name="lastName" />
        <Field disabled title="Login" name="login" />
        <Field title="Age" name="age" type="number" />
        <Field title="Email" name="email" type="email" />
      </section>
      <Button classname={styles.button} title="Save change" />
    </Form>
  );
}
