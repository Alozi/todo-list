import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Todo {
  id: number;
  text: string;
  section: string;
  completed: boolean;
}

interface TodoItemProps {
  item: Todo;
  toggleTodo: (id: number) => void;
}

export default function TodoItem({ item, toggleTodo }: TodoItemProps) {
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
