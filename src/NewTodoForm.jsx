import { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.length > 0) {
      addTodo(newItem);
      setNewItem("");
    }
  }
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row"></div>
      <label htmlFor="item">New Item</label>
      <input
        type="text"
        id="item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
}

export default NewTodoForm;
