import "./styles.css";
import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === 0) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setToDos((prev) => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        },
      ];
    });
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDos) => {
      return currentToDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  }

  console.log(todos);

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">ToDo List</h1>
      <ToDoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
}

export default App;
