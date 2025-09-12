import { Checkbox, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import FormControlLabel from "@mui/material/FormControlLabel";
import { type Todo } from "../types/todo";

export default function TodoItem({
  item,
  toggleTodo,
  editTodo,
  deleteTodo,
}: {
  item: Todo;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, editText: string) => void;
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
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => editTodo(item.id, "test")}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => deleteTodo(item.id)}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
