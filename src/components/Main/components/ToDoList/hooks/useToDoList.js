import useTodosItems from "src/components/Main/components/ToDoList/hooks/useTodosItems";

export default function useToDoList() {
  const { items, addItem, removeItem } = useTodosItems();

  const onAddItem = (item) => {
    if (items.includes(item)) return;
    addItem(item);
  };

  return {
    items,
    removeItem,
    onAddItem,
  };
}
