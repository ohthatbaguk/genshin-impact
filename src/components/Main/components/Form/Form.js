import styles from "./form.module.css";
import { Button, TextField } from "@mui/material";

export default function Form() {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData.get("firstName"));
    console.log(formData.get("lastName"));
    console.log(formData.get("login"));
    console.log(formData.get("password"));
    console.log(formData.get("repeatPassword"));
    console.log(formData.get("age"));
    console.log(formData.get("email"));
    console.log(formData.get("file"));
  };

  return (
    <form name="signUpForm" onSubmit={onSubmit} className={styles.form}>
      <h1 className={styles.title}>Sign Up</h1>
      <TextField
        className={styles.field}
        type="text"
        name="firstName"
        id="standard-basic"
        label="First Name"
        variant="standard"
      />
      <TextField
        className={styles.field}
        type="text"
        name="lastName"
        id="standard-basic"
        label="Last Name"
        variant="standard"
      />
      <TextField
        className={styles.field}
        type="text"
        name="login"
        id="standard-basic"
        label="Login"
        variant="standard"
      />
      <TextField
        type="password"
        className={styles.field}
        name="password"
        id="standard-basic"
        label="Password"
        variant="standard"
      />
      <TextField
        type="password"
        className={styles.field}
        name="repeatPassword"
        id="standard-basic"
        label="Repeat password"
        variant="standard"
      />
      <TextField
        type="number"
        className={styles.field}
        name="age"
        id="standard-basic"
        label="Age"
        variant="standard"
      />
      <TextField
        type="text"
        className={styles.field}
        name="email"
        id="standard-basic"
        label="Email"
        variant="standard"
      />
      <Button className={styles.field} variant="contained" component="label">
        <input name="file" type="file" />
      </Button>
      <Button className={styles.submitButton} type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}
