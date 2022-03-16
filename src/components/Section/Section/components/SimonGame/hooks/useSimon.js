import { useState } from "react";
import randomSequenceGenerator, {
  randomNumber,
} from "src/utils/randomSequenceGenerator";
import delay from "src/utils/delay";

const CLICK_TIMEOUT = 500;
const PAUSE_TIMEOUT = 500;
const UPPER_BOUNDARY = 4;

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
    let nextSequence;
    if (sequence.length === 0) {
      nextSequence = randomSequenceGenerator(length, UPPER_BOUNDARY);
    } else {
      nextSequence = [...sequence, randomNumber(UPPER_BOUNDARY)];
    }
    setInput([]);
    setSequence(nextSequence);
    for (let i = 0; i < nextSequence.length; i++) {
      await delay(CLICK_TIMEOUT);
      setItem(nextSequence[i]);
      await delay(CLICK_TIMEOUT);
      setItem(null);
      await delay(PAUSE_TIMEOUT);
    }
    setDisabled(false);
  };

  return [item, handleClickStart, isDisabled, handleClick, length];
}
