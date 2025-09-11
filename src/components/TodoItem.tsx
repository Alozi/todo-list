import { Checkbox, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import FormControlLabel from "@mui/material/FormControlLabel";
import { type Todo } from "../types/todo";

export default function TodoItem({
  item,
  toggleTodo,
  deleteTodo,
}: {
  item: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={item.completed}
            onChange={() => toggleTodo(item.id)}
          />
        }
        label={item.text}
      />
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => deleteTodo(item.id)}
      >
        Delete
      </Button>
    </Box>
  );
}
