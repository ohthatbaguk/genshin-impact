import styles from "./aside.module.css";
import { getFromLocalStorage } from "src/services/localStorage";

export default function Aside() {
  const data = getFromLocalStorage("currentUser");

  return (
    <aside className={styles.aside}>
      <section className={styles.bio}>
        <p className={styles.item}>{data.lastName + " " + data.firstName}</p>
        <p className={styles.item}>{data.login}</p>
      </section>
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/72410940?v=4"
        width="60"
        alt="foto"
      />
    </aside>
  );
}
