import { useState } from "react";

export default function useToggle() {
  const [value, setToggle] = useState(false);

  const toggle = () => {
    setToggle((prevState) => !prevState);
  };

  return [value, toggle];
}
