import { useState } from "react";
import styles from "./catfact.module.css";

export default function CatFact() {
  const [fact, setFact] = useState(null);

  const handleClick = () => {
    getCatFact().then(setFact);
  };
  return (
    <article className={styles.catFact}>
      <h3 className={styles.title}>Cat fact</h3>
      <p className={styles.factDescription}>{fact}</p>
      <button onClick={handleClick}>Meow!</button>
    </article>
  );
}

const getCatFact = async () => {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
  const result = await response.json();
  return result.text;
};
