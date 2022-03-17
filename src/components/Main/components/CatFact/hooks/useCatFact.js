import { useState } from "react";
import useOpenClose from "src/hooks/useOpenClose";

export default function useCatFact() {
  const { loading, startLoading, endLoading } = useOpenClose();
  const [error, setError] = useState(null);
  const [fact, setFact] = useState(null);

  const getData = () => {
    startLoading();
    getCatFact().then(setFact).catch(setError).finally(endLoading());
  };

  return { loading, error, fact, getData };
}

const getCatFact = async () => {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
  const result = await response.json();
  return result.text;
};
