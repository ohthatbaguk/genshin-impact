import styles from "./todolist.module.css";
import { useRef, useState } from "react";
import classNames from "classnames";

export default function ToDoList() {
  const [items, setItems] = useState([]);
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
        <input ref={elementRefInput} name="todosItem" type="text" />
        <input type="submit" value="DO IT!" />
        <ul className={classNames({ [styles.toggleView]: isInlineView })}>
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