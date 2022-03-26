import styles from "src/feature/form/components/Button/button.module.css";
import { useContext } from "react";
import { formContext } from "src/feature/form";
import classNames from "classnames";

export default function Button({ title, type = "submit", classname }) {
  const { isValid } = useContext(formContext);
  return (
    <button
      className={classNames(styles.submitButton, classname)}
      disabled={!isValid}
      type={type}
    >
      {title}
    </button>
  );
}
