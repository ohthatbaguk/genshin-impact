import styles from "src/feature/form/components/Field/textField.module.css";
import { useContext } from "react";
import { formContext } from "src/feature/form/formContext";

export default function Field({ title, name, type = "text" }) {
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
        <p className={styles.error}>{errors[name]?.join("! ")}</p>
      )}
    </label>
  );
}
