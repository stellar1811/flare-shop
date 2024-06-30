const List = ({ items, deleteItem, editItem, setIsDone }) => {
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          <button onClick={() => editItem(item.name, item.id)}>Edit</button>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => setIsDone(item.id, item.isDone)}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
