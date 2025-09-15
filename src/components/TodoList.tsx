import { FormGroup } from "@mui/material";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import useTodos from "../hooks/useTodos";

export default function TodoList({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const { todos, setTodos, toggleTodo, editTodo, deleteTodo } = useTodos();

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
