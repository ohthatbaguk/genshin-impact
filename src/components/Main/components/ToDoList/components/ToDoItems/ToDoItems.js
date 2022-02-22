export default function ToDoItems({ className, items, removeItem }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li onClick={() => removeItem(item)} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
