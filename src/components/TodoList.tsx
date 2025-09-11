import { useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import TodoItem from "./TodoItem";

import { type Todo } from "../types/todo";
import { roadmap } from "../data/roadmap";
import TodoInput from "./TodoInput";

export default function TodoList({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [todos, setTodos] = useState<Todo[]>(roadmap);

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
