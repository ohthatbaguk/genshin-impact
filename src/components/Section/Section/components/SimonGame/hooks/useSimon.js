import { useState } from "react";
import randomSequenceGenerator from "src/utils/randomSequenceGenerator";
import delay from "src/utils/delay";

const CLICK_TIMEOUT = 500;
const PAUSE_TIMEOUT = 500;

export default function useSimon() {
  const [item, setItem] = useState();
  const [length, setLength] = useState(3);
  const [isDisabled, setDisabled] = useState(true);
  const [sequence, setSequence] = useState([]);
  const [input, setInput] = useState([]);

  const handleClick = (e) => {
    const newInput = [...input, +e.target.value];
    setInput(newInput);
    for (let i = 0; i < newInput.length; i++) {
      if (sequence[i] !== newInput[i]) {
        console.log("You lose!");
        return;
      }
    }
    if (newInput.length === sequence.length) {
      console.log("Won!");
      setLength((prev) => prev + 1);
    }
  };

  const handleClickStart = async () => {
    setInput([]);
    const randomSequence = randomSequenceGenerator(length, 4);
    setSequence(randomSequence);
    for (let i = 0; i < randomSequence.length; i++) {
      await delay(CLICK_TIMEOUT);
      setItem(randomSequence[i]);
      await delay(CLICK_TIMEOUT);
      setItem(null);
      await delay(PAUSE_TIMEOUT);
    }
    setDisabled(false);
  };

  return [item, handleClickStart, isDisabled, handleClick, length];
}
