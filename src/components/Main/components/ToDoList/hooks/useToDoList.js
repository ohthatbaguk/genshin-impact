import useTodosItems from "src/components/Main/components/ToDoList/hooks/useTodosItems";

export default function useToDoList(inputRef) {
  const { items, addItem, removeItem } = useTodosItems();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const item = formData.get("todosItem");
    if (items.includes(item)) return;
    addItem(item);

    const element = inputRef.current;
    element.value = "";
  };

  return {
    items,
    removeItem,
    onSubmit,
  };
}
