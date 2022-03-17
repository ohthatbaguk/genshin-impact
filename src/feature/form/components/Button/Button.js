import styles from "src/feature/form/components/Button/button.module.css";
import { useContext } from "react";
import { formContext } from "src/feature/form";

export default function Button({ title, type = "submit" }) {
  const { isValid } = useContext(formContext);
  return (
    <button className={styles.submitButton} disabled={!isValid} type={type}>
      {title}
    </button>
  );
}
