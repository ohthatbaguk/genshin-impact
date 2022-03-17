import Widget from "src/components/Main/components/WidgetContainer/Widget";
import styles from "src/components/Section/components/SimonGame/simongame.module.css";
import classNames from "classnames";
import useSimon from "src/components/Section/components/SimonGame/hooks/useSimon";

export default function SimonGame() {
  const [activeItem, handleClickStart, isDisabled, handleClick, level] =
    useSimon();

  return (
    <Widget title="Simon Game" anotherClassname={styles.simonGame}>
      <h1>Level {level - 2}</h1>
      <section className={styles.buttons}>
        <button
          value="0"
          onClick={handleClick}
          disabled={isDisabled}
          className={classNames(styles.button, styles.red, {
            [styles.clicked]: activeItem === 0,
          })}
        >
          Red
        </button>
        <button
          value="1"
          onClick={handleClick}
          disabled={isDisabled}
          className={classNames(styles.button, styles.green, {
            [styles.clicked]: activeItem === 1,
          })}
        >
          Green
        </button>
        <button
          value="2"
          onClick={handleClick}
          disabled={isDisabled}
          className={classNames(styles.button, styles.blue, {
            [styles.clicked]: activeItem === 2,
          })}
        >
          Blue
        </button>
        <button
          value="3"
          onClick={handleClick}
          disabled={isDisabled}
          className={classNames(styles.button, styles.yellow, {
            [styles.clicked]: activeItem === 3,
          })}
        >
          Yellow
        </button>
      </section>
      <button onClick={handleClickStart}>START</button>
    </Widget>
  );
}
