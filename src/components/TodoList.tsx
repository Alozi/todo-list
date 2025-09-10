import { useRef, useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import TodoItem from "./TodoItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { type Todo } from "../types/todo";
import { roadmap } from "../data/roadmap";
import { Box } from "@mui/material";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(roadmap);
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleTodo(id: number): void {
    setTodos((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  }

  function handleSubmit(): void {
    if (!inputRef.current || inputRef.current.value == "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputRef.current.value.trim(),
      section: "new item",
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  return (
    <FormGroup>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          marginBottom: 2,
        }}
      >
        <TextField
          id="outlined-basic"
          label="New task"
          variant="standard"
          sx={{ width: "100%" }}
          inputRef={inputRef}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </Box>

      {todos.map((item) => (
        <TodoItem key={item.id} item={item} toggleTodo={toggleTodo} />
      ))}
    </FormGroup>
  );
}
