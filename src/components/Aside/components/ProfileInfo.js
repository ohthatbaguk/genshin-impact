import styles from "src/components/Aside/aside.module.css";

export default function ProfileInfo({ data }) {
  return (
    <>
      <p className={styles.item}>{data.lastName + " " + data.firstName}</p>
      <p className={styles.item}>{data.login}</p>
    </>
  );
}
