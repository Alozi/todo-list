import { useState, useEffect } from "react";

import FormGroup from "@mui/material/FormGroup";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

import { type Todo } from "../types/todo";
import { roadmap } from "../data/roadmap";

export default function TodoList({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localStoredTodos = localStorage.getItem("todos");
    return localStoredTodos ? JSON.parse(localStoredTodos) : roadmap;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id: number): void {
    setTodos((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  }

  return (
    <FormGroup>
      <TodoInput setTodos={setTodos} inputRef={inputRef} />

      {todos.map((item) => (
        <TodoItem key={item.id} item={item} toggleTodo={toggleTodo} />
      ))}
    </FormGroup>
  );
}
