import { useEffect, useState } from "react";

export default function useDateTime() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  const date = new Date().toDateString();

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return { time, date };
}
