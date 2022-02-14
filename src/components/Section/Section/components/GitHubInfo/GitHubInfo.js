import styles from "./githubinfo.module.css";
import useGitHubInfo from "./hooks/useGitHubInfo";

export default function GitHubInfo() {
  const { zen, info } = useGitHubInfo();

  if (!info) {
    return <article>Loading..</article>;
  }

  return (
    <article className={styles.githubInfoContainer}>
      <h3 className={styles.title}>GitHub Zen</h3>
      <p className={styles.description}>{zen}</p>
      <h3 className={styles.title}>GitHub Info</h3>
      <p className={styles.description}>
        have {info.public_repos} public repositories
      </p>
      <p className={styles.description}>have {info.followers} followers}</p>
      <p className={styles.description}>{info.name}</p>
      <p className={styles.description}>{`(${info.login})`}</p>
      <p className={styles.description}>{info.location}</p>
      <img
        width="60"
        src="https://avatars.githubusercontent.com/u/72410940?v=4"
        alt="avatar"
      />
    </article>
  );
}
