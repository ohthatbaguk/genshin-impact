import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/services/localStorage";

export default function useTodosItems() {
  const [items, setItems] = useState(getFromLocalStorage("todos", []));

  useEffect(() => {
    saveToLocalStorage("todos", items);
  }, [items]);

  const removeItem = (itemToRemove) => {
    setItems((todos) => todos.filter((item) => item !== itemToRemove));
  };

  const addItem = (item) => {
    setItems((todos) => [item, ...todos]);
  };

  return { items, addItem, removeItem };
}
