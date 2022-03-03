import { useState } from "react";
import randomSequenceGenerator from "src/utils/randomSequenceGenerator";
import delay from "src/utils/delay";

const CLICK_TIMEOUT = 500;
const PAUSE_TIMEOUT = 500;

export default function useSimon() {
  const [item, setItem] = useState();
  const [length, setLength] = useState(5);
  const [isDisabled, setDisabled] = useState(true);
  const [sequence, setSequence] = useState();
  const [input, setInput] = useState([]);

  const handleClick = (e) => {
    setInput([...input, e.target.value]);
    console.log(`Button ${e.target.value} was clicked`);
  };

  const handleClickStart = async () => {
    const randomSequence = randomSequenceGenerator(length, 4);
    setSequence(randomSequence);
    for (let i = 0; i < randomSequence.length; i++) {
      setItem(randomSequence[i]);
      await delay(CLICK_TIMEOUT);
      setItem(null);
      await delay(PAUSE_TIMEOUT);
    }
    setDisabled(false);
  };

  return [item, handleClickStart, isDisabled, handleClick, sequence, input];
}
