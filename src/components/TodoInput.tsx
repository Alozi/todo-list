import { useRef, useState, type Dispatch, type SetStateAction } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { type Todo } from "../types/todo";

export default function TodoInput({
  setTodos,
}: {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  function handleSubmit(): void {
    if (!inputRef.current || inputRef.current.value == "") {
      setError("Please enter a task");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: inputRef.current.value.trim(),
      section: "new item",
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
    setError("");
  }

  return (
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
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Add
      </Button>
    </Box>
  );
}
