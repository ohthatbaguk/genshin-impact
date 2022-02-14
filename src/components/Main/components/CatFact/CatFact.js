import styles from "./catfact.module.css";
import useCatFact from "./hooks/useCatFact";

export default function CatFact() {
  const { loading, error, fact, getData } = useCatFact();

  if (error) {
    return <p>Something went wrong.. </p>;
  }

  return (
    <article className={styles.catFact}>
      <h3 className={styles.title}>Cat fact</h3>
      <p className={styles.factDescription}>{loading ? "Loading.." : fact}</p>
      <button onClick={getData}>Meow!</button>
    </article>
  );
}
