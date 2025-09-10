import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

import { type Todo } from "./types/todo";

const roadmap: Todo[] = [
  {
    id: 1,
    text: "Semantic tags (header, main, footer, article, section)",
    section: "HTML",
    completed: true,
  },
  { id: 2, text: "Forms and validation", section: "HTML", completed: false },
  {
    id: 3,
    text: "Accessibility attributes (alt, aria-label)",
    section: "HTML",
    completed: false,
  },
  { id: 4, text: "Flexbox & Grid", section: "CSS", completed: false },
  {
    id: 5,
    text: "Positioning (absolute, relative, sticky, fixed)",
    section: "CSS",
    completed: false,
  },
  {
    id: 6,
    text: "Media queries (responsive design)",
    section: "CSS",
    completed: false,
  },
  { id: 7, text: "Transitions & animations", section: "CSS", completed: false },
  {
    id: 8,
    text: "Initializing repositories, commits, branches",
    section: "Git",
    completed: false,
  },
  { id: 9, text: "Merge vs rebase", section: "Git", completed: false },
  { id: 10, text: ".gitignore", section: "Git", completed: false },
  {
    id: 11,
    text: "Working with GitHub / GitLab",
    section: "Git",
    completed: false,
  },
  { id: 12, text: "Variables: let, const", section: "JS", completed: false },
  {
    id: 13,
    text: "Destructuring, spread/rest operators",
    section: "JS",
    completed: false,
  },
  { id: 14, text: "Functions", section: "JS", completed: false },
  {
    id: 15,
    text: "Arrays: map, filter, reduce, find, some, every",
    section: "JS",
    completed: false,
  },
  { id: 16, text: "Objects & JSON", section: "JS", completed: false },
  { id: 17, text: "async/await, fetch API", section: "JS", completed: false },
  { id: 18, text: "Modules (import/export)", section: "JS", completed: false },
  {
    id: 19,
    text: "Primitive types (string, number, boolean, any, unknown)",
    section: "TS",
    completed: false,
  },
  { id: 20, text: "Arrays & objects", section: "TS", completed: false },
  {
    id: 21,
    text: "Interfaces & type aliases",
    section: "TS",
    completed: false,
  },
  {
    id: 22,
    text: "Typing functions and React props",
    section: "TS",
    completed: false,
  },
  {
    id: 23,
    text: "Union, optional types, generics (basic)",
    section: "TS",
    completed: false,
  },
  { id: 24, text: "JSX & rules", section: "React Core", completed: false },
  {
    id: 25,
    text: "Functional components",
    section: "React Core",
    completed: false,
  },
  { id: 26, text: "Props & children", section: "React Core", completed: false },
  {
    id: 27,
    text: "State management with useState",
    section: "React Core",
    completed: false,
  },
  {
    id: 28,
    text: "Side effects with useEffect (lifecycle)",
    section: "React Core",
    completed: false,
  },
  {
    id: 29,
    text: "useRef, useMemo, useCallback (intro level)",
    section: "React Core",
    completed: false,
  },
  {
    id: 30,
    text: "Conditional rendering",
    section: "React Core",
    completed: false,
  },
  {
    id: 31,
    text: "Rendering lists & using key",
    section: "React Core",
    completed: false,
  },
  {
    id: 32,
    text: "Controlled forms & inputs",
    section: "React Core",
    completed: false,
  },
  {
    id: 33,
    text: "Lifting state up (state sharing)",
    section: "React Core",
    completed: false,
  },
  {
    id: 34,
    text: "Fetching data from APIs",
    section: "React Core",
    completed: false,
  },
  {
    id: 35,
    text: "React Router (navigation & routes)",
    section: "React Ecosystem",
    completed: false,
  },
  {
    id: 36,
    text: "Context API (global state)",
    section: "React Ecosystem",
    completed: false,
  },
  {
    id: 37,
    text: "Styling solutions: styled-components, Material UI, Tailwind (pick at least one)",
    section: "React Ecosystem",
    completed: false,
  },
  {
    id: 38,
    text: "Data fetching: react-query or swr (basic usage)",
    section: "React Ecosystem",
    completed: false,
  },
  {
    id: 39,
    text: "Redux Toolkit",
    section: "State Management",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(roadmap);

  function toggleTodo(id: number): void {
    setTodos((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  }

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          sx={{ marginBottom: 4, textAlign: "center" }}
        >
          Junior React Developer Roadmap
        </Typography>
        <FormGroup>
          {todos.map((item) => {
            return (
              <TodoItem key={item.id} item={item} toggleTodo={toggleTodo} />
            );
          })}
        </FormGroup>
      </Container>
      <Footer />
    </>
  );
}

export default App;
