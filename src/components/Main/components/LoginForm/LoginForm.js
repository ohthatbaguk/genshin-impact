import styles from "./loginForm.module.css";
import { useState } from "react";
import validators from "src/components/Main/components/LoginForm/validators";

export default function LoginForm() {
  const [values, setValue] = useState({});
  const { errors, isValid } = validate(values, validators);

  const handleChange = (e) => {
    const enteredData = {
      ...values,
      [e.target.name]: e.target.value,
    };

    setValue(enteredData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`The login is ${values.login}`);
    console.log(`The password is ${values.password}`);
  };

  return (
    <form onSubmit={onSubmit} className={styles.loginForm}>
      <label>
        Login
        <input onChange={handleChange} name="login" type="text" />
        {errors.login ?? ""}
      </label>
      <label>
        Password
        <input onChange={handleChange} name="password" type="password" />
        {errors.password ?? ""}
      </label>
      <input disabled={!isValid} type="submit" value="Log in" />
    </form>
  );
}

function validate(values, validators) {
  const errors = validators
    .map((validator) => validator(values))
    .filter((item) => typeof item === "object")
    .reduce((errors, error) => ({ ...errors, ...error }), {});

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
}
