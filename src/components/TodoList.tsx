import { FormGroup } from "@mui/material";
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
