import Widget from "src/components/Main/components/WidgetContainer/Widget";
import styles from "src/components/Section/components/GitHubInfo/githubinfo.module.css";
import useGitHubZen from "src/components/Section/components/GitHubInfo/hooks/useGitHubZen";
import useGitHubInfo from "src/components/Section/components/GitHubInfo/hooks/useGitHubInfo";

export default function GitHubInfo() {
  const zen = useGitHubZen();
  const info = useGitHubInfo();

  if (!info) {
    return <article>Loading..</article>;
  }

  return (
    <Widget anotherClassname={styles.githubInfoContainer} title="GitHub Info">
      <p className={styles.description}>{zen}</p>
      <p className={styles.description}>
        have {info.public_repos} public repositories
      </p>
      <p className={styles.description}>have {info.followers} followers</p>
      <p className={styles.description}>{info.name}</p>
      <p className={styles.description}>{`(${info.login})`}</p>
      <p className={styles.description}>{info.location}</p>
      <img
        width="60"
        src="https://avatars.githubusercontent.com/u/72410940?v=4"
        alt="avatar"
      />
    </Widget>
  );
}
