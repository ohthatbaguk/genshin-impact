import { useEffect, useRef, useState } from "react";

export default function useToDoList() {
  let [items, setItems] = useState(getFromLocalStorage());
  const [isInlineView, setInlineView] = useState(false);
  const elementRefInput = useRef();

  const todoList = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const item = formData.get("todosItem");
    if (items.includes(item)) return;
    setItems((todos) => [item, ...todos]);

    const element = elementRefInput.current;
    element.value = "";
  };

  useEffect(() => {
    addToLocalStorage(items);
  }, [items]);

  const itemToRemove = (itemToRemove) => {
    setItems((todos) => todos.filter((item) => item !== itemToRemove));
  };

  const changeView = () => {
    setInlineView((isInlineView) => !isInlineView);
  };

  return {
    elementRefInput,
    items,
    isInlineView,
    itemToRemove,
    changeView,
    todoList,
  };
}

const addToLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.log("Something went wrong..");
    return null;
  }
};

const getFromLocalStorage = () => {
  const reference = localStorage.getItem("todos");
  if (reference) {
    try {
      return JSON.parse(reference);
    } catch (error) {
      return [];
    }
  }
  return [];
};
