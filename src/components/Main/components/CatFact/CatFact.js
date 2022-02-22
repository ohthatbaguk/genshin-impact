import styles from "./catfact.module.css";
import useCatFact from "./hooks/useCatFact";
import Widget from "src/components/Main/components/WidgetContainer/Widget";

export default function CatFact() {
  const { loading, error, fact, getData } = useCatFact();

  return (
    <Widget
      anotherClassname={styles.catFact}
      loading={loading}
      error={error}
      title="Cat Fact"
    >
      <p className={styles.factDescription}>{fact ?? "Click on the button!"}</p>
      <button onClick={getData}>Meow!</button>
    </Widget>
  );
}
