function ToDoItem({ toggleToDo, deleteToDo, id, completed, title }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteToDo(id)}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
