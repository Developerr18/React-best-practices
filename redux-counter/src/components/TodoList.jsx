import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../features/todos/todosSlice";

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      dispatch(addTodo(inputText.trim()));
      setInputText("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>Total todos: {todos.length}</p>
      <p>Completed: {todos.filter((todo) => todo.completed).length}</p>
    </div>
  );
}
