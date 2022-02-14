import { useState } from "react";

export default function useCatFact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fact, setFact] = useState("Click on the button!");

  const getData = () => {
    setLoading(true);
    getCatFact()
      .then(setFact)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { loading, error, fact, getData };
}

const getCatFact = async () => {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
  const result = await response.json();
  return result.text;
};
