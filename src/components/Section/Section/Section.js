import GitHubInfo from "./components/GitHubInfo/GitHubInfo";
import styles from "./section.module.css";

export default function Section() {
  return (
    <section className={styles.sectionContainer}>
      <GitHubInfo />
    </section>
  );
}
