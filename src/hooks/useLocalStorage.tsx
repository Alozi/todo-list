import { useState, useEffect } from "react";
import { type Todo } from "../types/todo";

export function useLocalStorage(key: string, initialTodos: Todo[]) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localStoredTodos = localStorage.getItem(key);
    return localStoredTodos ? JSON.parse(localStoredTodos) : initialTodos;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  return [todos, setTodos] as const;
}
