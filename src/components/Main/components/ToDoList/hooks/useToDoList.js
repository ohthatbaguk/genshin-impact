import { useRef } from "react";
import useTodosItems from "src/components/Main/components/ToDoList/hooks/useTodosItems";

export default function useToDoList() {
  const { items, setItems, itemToRemove } = useTodosItems();
  const elementRefInput = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const item = formData.get("todosItem");
    if (items.includes(item)) return;
    setItems((todos) => [item, ...todos]);

    const element = elementRefInput.current;
    element.value = "";
  };

  return {
    elementRefInput,
    items,
    itemToRemove,
    onSubmit,
  };
}
