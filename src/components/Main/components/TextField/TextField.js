import styles from "./textField.module.css";
import { useContext } from "react";
import { formContext } from "src/components/Main/components/Form/formContext";

export default function TextField({ title, name, type = "text" }) {
  const { values, errors, isTouched, changeHandler } = useContext(formContext);

  return (
    <label>
      {title}
      <input
        value={values[name] ?? ""}
        onChange={changeHandler}
        required
        className={styles.field}
        type={type}
        name={name}
      />
      {isTouched[name] && errors[name] && (
        <p className={styles.error}>{errors[name]}</p>
      )}
    </label>
  );
}
