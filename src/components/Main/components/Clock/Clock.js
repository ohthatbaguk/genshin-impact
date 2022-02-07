import { useEffect, useState } from "react";
import styles from "./clock.module.css";

export default function Clock({ className }) {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  const date = new Date().toDateString();

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return (
    <article className={styles.clock}>
      <h3 className={styles.title}>Date and Time</h3>
      <p className={styles.date}>{date}</p>
      <p className={styles.time}>{time}</p>
    </article>
  );
}
