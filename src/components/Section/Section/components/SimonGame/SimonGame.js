import Widget from "src/components/Main/components/WidgetContainer/Widget";
import styles from "./simongame.module.css";
import classNames from "classnames";
import useSimon from "src/components/Section/Section/components/SimonGame/hooks/useSimon";

export default function SimonGame() {
  const [activeItem, onClick] = useSimon();

  return (
    <Widget title="Simon Game" anotherClassname={styles.simonGame}>
      <section className={styles.buttons}>
        <button
          className={classNames(styles.button, styles.red, {
            [styles.clicked]: activeItem === 0,
          })}
        >
          Red
        </button>
        <button
          className={classNames(styles.button, styles.green, {
            [styles.clicked]: activeItem === 1,
          })}
        >
          Green
        </button>
        <button
          className={classNames(styles.button, styles.blue, {
            [styles.clicked]: activeItem === 2,
          })}
        >
          Blue
        </button>
        <button
          className={classNames(styles.button, styles.yellow, {
            [styles.clicked]: activeItem === 3,
          })}
        >
          Yellow
        </button>
      </section>
      <button onClick={onClick}>START</button>
    </Widget>
  );
}
