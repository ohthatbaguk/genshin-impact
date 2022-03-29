import styles from "src/feature/form/components/Field/field.module.css";
import { useContext } from "react";
import { formContext } from "src/feature/form";

export default function Field({
  title,
  name,
  type = "text",
  disabled = false,
}) {
  const { values, errors, isTouched, changeHandler } = useContext(formContext);

  return (
    <>
      <label htmlFor={name}>{title}</label>
      <input
        disabled={disabled}
        value={values[name] ?? ""}
        onChange={changeHandler}
        required
        className={styles.field}
        type={type}
        name={name}
        id={name}
      />
      {isTouched[name] && errors[name] && (
        <p className={styles.error}>{errors[name]?.join("! ")}</p>
      )}
    </>
  );
}
