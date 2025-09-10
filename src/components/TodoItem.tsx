import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { type Todo } from "../types/todo";

export default function TodoItem({
  item,
  toggleTodo,
}: {
  item: Todo;
  toggleTodo: (id: number) => void;
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={item.completed}
          onChange={() => toggleTodo(item.id)}
        />
      }
      label={item.text}
    />
  );
}
