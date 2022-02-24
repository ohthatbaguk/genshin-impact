import { useState } from "react";
import randomSequenceGenerator from "src/utils/randomSequenceGenerator";
import delay from "src/utils/delay";

const CLICK_TIMEOUT = 1000;
const PAUSE_TIMEOUT = 1000;

export default function useSimon() {
  const [item, setItem] = useState();
  const [length, setLength] = useState(5);
  const [isDisabled, setDisabled] = useState(true);

  const handleClick = (e) => {
    console.log(`Button ${e.target.value} was clicked`);
  };

  const handleClickStart = async () => {
    const randomSequence = randomSequenceGenerator(length, 4);
    for (let i = 0; i < randomSequence.length; i++) {
      setItem(randomSequence[i]);
      await delay(CLICK_TIMEOUT);
      setItem(null);
      await delay(PAUSE_TIMEOUT);
    }
    setDisabled(false);
  };

  return [item, handleClickStart, isDisabled, handleClick];
}
