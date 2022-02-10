import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.production}>2022© Bahuk production</p>
      <nav className={styles.navigation}>
        <a className={styles.link} href="https://twitter.com/bubeichik">
          Twitter
        </a>
        <a className={styles.link} href="https://github.com/ohthatbaguk">
          GitHub
        </a>
      </nav>
      <address className={styles.address}>
        Contact:
        <a
          className={styles.link}
          href="mailto:natallia.bahuk@itechart-group.com"
        >
          Natallia Bahuk
        </a>
      </address>
    </footer>
  );
}
