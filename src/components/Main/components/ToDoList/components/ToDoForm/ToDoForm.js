import { useRef } from "react";

export default function ToDoForm({ addTodo }) {
  const elementInputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const item = formData.get("todosItem");

    const element = elementInputRef.current;
    element.value = "";

    addTodo(item);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="todosItem"
        ref={elementInputRef}
        placeholder="Add a TODO.."
        type="text"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
