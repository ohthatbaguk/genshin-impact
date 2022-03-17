import styles from "./todolist.module.css";
import classNames from "classnames";
import Widget from "src/components/Main/components/WidgetContainer/Widget";
import useToggle from "src/hooks/useToggle";
import ToDoForm from "src/components/Main/components/ToDoList/components/ToDoForm/ToDoForm";
import ToDoItems from "src/components/Main/components/ToDoList/components/ToDoItems/ToDoItems";
import useTodosItems from "src/components/Main/components/ToDoList/hooks/useTodosItems";

export default function ToDoList() {
  const { items, removeItem, addItem } = useTodosItems();
  const [inlineView, changeView] = useToggle();

  return (
    <Widget anotherClassname={styles.todoList} title="TODO">
      <ToDoForm addTodo={addItem} />
      <ToDoItems
        items={items}
        className={classNames(styles.ul, { [styles.toggleView]: inlineView })}
        removeItem={removeItem}
      />
      <button onClick={changeView}>Toggle view</button>
    </Widget>
  );
}
