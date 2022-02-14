import styles from "./clock.module.css";
import useDateTime from "./hooks/useDateTime";

export default function Clock() {
  const { date, time } = useDateTime();

  return (
    <article className={styles.clock}>
      <h3 className={styles.title}>Date and Time</h3>
      <p className={styles.date}>{date}</p>
      <p className={styles.time}>{time}</p>
    </article>
  );
}
