import { useState } from "react";

import {
  Checkbox,
  Box,
  Button,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";

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
  const [openDialog, setOpenDialog] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSave = () => {
    editTodo(item.id, editText.trim());
    setOpenDialog(false);
  };

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
          onClick={handleOpen}
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

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            fullWidth
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
