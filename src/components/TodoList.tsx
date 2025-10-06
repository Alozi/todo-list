import { useState } from "react";
import { FormGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import useTodos from "../hooks/useTodos";
import Hero from "./Hero";

export default function TodoList({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const {
    todos,
    setTodos,
    toggleTodo,
    editTodo,
    deleteTodo,
    deleteCompleted,
    completedTodosQuantity,
  } = useTodos();

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  function handleFilterChange(
    event: React.MouseEvent<HTMLElement>,
    newFilter: "all" | "active" | "completed" | null
  ) {
    if (newFilter !== null) setFilter(newFilter);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <FormGroup>
      <Hero
        todosCompleted={completedTodosQuantity()}
        totalTodos={todos.length}
      />

      <TodoInput
        setTodos={setTodos}
        inputRef={inputRef}
        deleteCompleted={deleteCompleted}
      />

      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilterChange}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
      </ToggleButtonGroup>

      {filteredTodos.map((item) => (
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
