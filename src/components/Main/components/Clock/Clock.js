import styles from "./clock.module.css";
import useDateTime from "./hooks/useDateTime";
import Widget from "src/components/WidgetContainer/Widget";

export default function Clock() {
  const { date, time } = useDateTime();

  return (
    <Widget anotherClassname={styles.clock} title="Date and Time">
      <p className={styles.date}>{date}</p>
      <p className={styles.time}>{time}</p>
    </Widget>
  );
}
