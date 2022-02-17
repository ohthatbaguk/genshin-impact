import styles from "./todolist.module.css";
import classNames from "classnames";
import useToDoList from "./hooks/useToDoList";
import Widget from "src/components/WidgetContainer/Widget";
import useToggle from "src/hooks/useToggle/useToggle";

export default function ToDoList() {
  const { onSubmit, elementRefInput, itemToRemove, items } = useToDoList();
  const [inlineView, changeView] = useToggle();

  return (
    <Widget anotherClassname={styles.todoList} title="TODO">
      <form onSubmit={onSubmit}>
        <input
          placeholder="Add a TODO.."
          ref={elementRefInput}
          name="todosItem"
          type="text"
        />
        <input type="submit" value="Add" />
      </form>
      <ul
        id="todosList"
        className={classNames(styles.ul, { [styles.toggleView]: inlineView })}
      >
        {items.map((item) => (
          <li onClick={() => itemToRemove(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={changeView}>Toggle view</button>
    </Widget>
  );
}
