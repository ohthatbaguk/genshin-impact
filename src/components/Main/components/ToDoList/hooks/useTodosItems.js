import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/services/localStorage";

export default function useTodosItems() {
  const [items, setItems] = useState(getFromLocalStorage("todos"));

  useEffect(() => {
    saveToLocalStorage("todos", items);
  }, [items]);

  const itemToRemove = (itemToRemove) => {
    setItems((todos) => todos.filter((item) => item !== itemToRemove));
  };

  return { items, setItems, itemToRemove };
}
