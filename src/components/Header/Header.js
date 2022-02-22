import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <a className={styles.link} href="#">
          My experience
        </a>
        <a className={styles.link} href="#">
          Useful information
        </a>
        <a className={styles.link} href="#">
          About Me
        </a>
        <a className={styles.link} href="#">
          Contacts
        </a>
      </nav>
    </header>
  );
}
