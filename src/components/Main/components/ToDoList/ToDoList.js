import styles from "./todolist.module.css";
import classNames from "classnames";
import useToDoList from "./hooks/useToDoList";

export default function ToDoList() {
  const {
    elementRefInput,
    items,
    isInlineView,
    itemToRemove,
    changeView,
    todoList,
  } = useToDoList();

  return (
    <article className={styles.todoList}>
      <button onClick={changeView}>Toggle view</button>
      <h3>List TODO</h3>
      <form onSubmit={todoList}>
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
            <li onClick={() => itemToRemove(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </form>
    </article>
  );
}
