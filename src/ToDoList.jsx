import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteToDo, toggleToDo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No ToDos"}
      {todos.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            {...todo}
            deleteToDo={deleteToDo}
            toggleToDo={toggleToDo}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;
