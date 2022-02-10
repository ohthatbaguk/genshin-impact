import styles from "./todolist.module.css";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export default function ToDoList() {
  let [items, setItems] = useState(getFromLocalStorage());
  const [isInlineView, setInlineView] = useState(false);
  const elementRefInput = useRef();

  const handleSubmit = (e) => {
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

  const handleClick = (itemToRemove) => {
    setItems((todos) => todos.filter((item) => item !== itemToRemove));
  };

  const handleButtonClick = () => {
    setInlineView((isInlineView) => !isInlineView);
  };

  return (
    <article className={styles.todoList}>
      <button onClick={handleButtonClick}>Toggle view</button>
      <h3>List TODO</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add a TODO.."
          ref={elementRefInput}
          name="todosItem"
          type="text"
        />
        <input type="submit" value="Add" />
        <ul
          id="todosList"
          className={classNames({ [styles.toggleView]: isInlineView })}
        >
          {items.map((item) => (
            <li onClick={() => handleClick(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </form>
    </article>
  );
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
