import GitHubInfo from "./components/GitHubInfo/GitHubInfo";
import styles from "./section.module.css";
import SimonGame from "src/components/Section/Section/components/SimonGame/SimonGame";

export default function Section() {
  return (
    <section className={styles.sectionContainer}>
      <GitHubInfo />
      <SimonGame />
    </section>
  );
}
