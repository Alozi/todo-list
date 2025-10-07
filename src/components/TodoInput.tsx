import { useState, type Dispatch, type SetStateAction } from "react";
import { TextField, Button, Box } from "@mui/material";
import { type Todo } from "../types/todo";
import DeleteCompletedButton from "./DeleteCompletedButton";

export default function TodoInput({
  inputRef,
  setTodos,
  deleteCompleted,
}: {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  deleteCompleted: () => void;
}) {
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
        display: {
          xs: "block",
          sm: "flex",
        },
        justifyContent: "space-between",
        alignItems: "center",
        gap: {
          xs: 2,
        },
        marginBottom: {
          xs: "16px",
          md: "20px",
        },
      }}
    >
      <TextField
        id="outlined-basic"
        label="Add a new task"
        variant="standard"
        sx={{
          width: {
            xs: "100%",
            md: "60%",
          },
          marginBottom: {
            xs: "16px",
            sm: 0,
          },
        }}
        inputRef={inputRef}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        error={!!error}
        helperText={error}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: {
            xs: 2,
          },
        }}
      >
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{
            whiteSpace: "nowrap",
            fontSize: { xs: 12, md: 14 },
            width: {
              xs: "50%",
              sm: "auto",
            },
          }}
        >
          Add
        </Button>
        <DeleteCompletedButton deleteCompleted={deleteCompleted} />
      </Box>
    </Box>
  );
}
