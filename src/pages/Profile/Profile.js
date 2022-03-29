import Form from "src/feature/form/components/Form/Form";
import { Button, Field } from "src/feature/form";
import styles from "src/pages/Profile/profile.module.css";
import React from "react";
import { getFromLocalStorage } from "src/services/localStorage";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = getFromLocalStorage("currentUser");
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/edit-profile");
  };

  return (
    <Form initialData={user} className={styles.profileForm}>
      <h1 className={styles.title}>P r o f i l e</h1>
      <section className={styles.fields}>
        <Field disabled title="First Name" name="firstName" />
        <Field disabled title="Last Name" name="lastName" />
        <Field disabled title="Login" name="login" />
        <Field disabled title="Age" name="age" type="number" />
        <Field disabled title="Email" name="email" type="email" />
      </section>
      <Button onClick={onClick} classname={styles.button} title="Edit" />
    </Form>
  );
}
