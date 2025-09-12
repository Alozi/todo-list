import FormGroup from "@mui/material/FormGroup";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import useLocalStorage from "../hooks/useLocalStorage";

import { roadmap } from "../data/roadmap";

export default function TodoList({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [todos, setTodos] = useLocalStorage("todos", roadmap);

  function toggleTodo(id: number): void {
    setTodos((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  }

  function editTodo(id: number, editText: string): void {
    setTodos((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, text: editText } : item
      );
    });
  }

  function deleteTodo(id: number): void {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }

  return (
    <FormGroup>
      <TodoInput setTodos={setTodos} inputRef={inputRef} />

      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </FormGroup>
  );
}
