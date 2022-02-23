import { useState } from "react";
import randomSequenceGenerator from "src/utils/randomSequenceGenerator";

const CLICK_TIMEOUT = 1000;
const PAUSE_TIMEOUT = 1000;

export default function useSimon() {
  const [item, setItem] = useState();

  const onClick = async () => {
    const randomSequence = randomSequenceGenerator(4);
    for (let i = 0; i < randomSequence.length; i++) {
      setItem(randomSequence[i]);
      await delay(CLICK_TIMEOUT);
      setItem(null);
      await delay(PAUSE_TIMEOUT);
    }
  };

  return [item, onClick];
}

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
