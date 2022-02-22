import styles from "./todolist.module.css";
import classNames from "classnames";
import useToDoList from "./hooks/useToDoList";
import Widget from "src/components/Main/components/WidgetContainer/Widget";
import useToggle from "src/hooks/useToggle/useToggle";
import ToDoForm from "src/components/Main/components/ToDoList/components/ToDoForm/ToDoForm";
import ToDoItems from "src/components/Main/components/ToDoList/components/ToDoItems/ToDoItems";

export default function ToDoList() {
  const { onAddItem, removeItem, items } = useToDoList();
  const [inlineView, changeView] = useToggle();

  return (
    <Widget anotherClassname={styles.todoList} title="TODO">
      <ToDoForm addTodo={onAddItem} />
      <ToDoItems
        items={items}
        className={classNames(styles.ul, { [styles.toggleView]: inlineView })}
        removeItem={removeItem}
      />
      <button onClick={changeView}>Toggle view</button>
    </Widget>
  );
}
