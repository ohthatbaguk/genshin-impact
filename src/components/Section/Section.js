import GitHubInfo from "src/components/Section/components/GitHubInfo/GitHubInfo";
import styles from "src/components/Section/section.module.css";
import SimonGame from "src/components/Section/components/SimonGame/SimonGame";

export default function Section() {
  return (
    <section className={styles.sectionContainer}>
      <GitHubInfo />
      <SimonGame />
    </section>
  );
}
