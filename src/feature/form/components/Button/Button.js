import styles from "src/feature/form/components/Button/button.module.css";

export default function Button({ title, type = "submit", isValid }) {
  return (
    <button className={styles.submitButton} disabled={isValid} type={type}>
      {title}
    </button>
  );
}
