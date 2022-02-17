import { useEffect, useState } from "react";

export default function useDateTime() {
  const [date, setDate] = useState(new Date());

  const timeStr = date.toLocaleTimeString();
  const dateStr = new Date().toDateString();

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  return { time: timeStr, date: dateStr };
}
