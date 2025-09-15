import useLocalStorage from "./useLocalStorage";
import { roadmap } from "../data/roadmap";

export default function useTodos() {
  const [todos, setTodos] = useLocalStorage("todos", roadmap);

  function toggleTodo(id: number): void {
    setTodos((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  }

  function editTodo(id: number, editText: string): void {
    setTodos((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, text: editText } : item
      );
    });
  }

  function deleteTodo(id: number): void {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }

  return { todos, setTodos, toggleTodo, editTodo, deleteTodo };
}
