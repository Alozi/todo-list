import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface Todo {
  id: number;
  text: string;
  section: string;
  // completed: boolean;
}

const roadmap: Todo[] = [
  {
    id: 1,
    text: "Semantic tags (header, main, footer, article, section)",
    section: "HTML",
  },
  { id: 2, text: "Forms and validation", section: "HTML" },
  {
    id: 3,
    text: "Accessibility attributes (alt, aria-label)",
    section: "HTML",
  },
  { id: 4, text: "Flexbox & Grid", section: "CSS" },
  {
    id: 5,
    text: "Positioning (absolute, relative, sticky, fixed)",
    section: "CSS",
  },
  { id: 6, text: "Media queries (responsive design)", section: "CSS" },
  { id: 7, text: "Transitions & animations", section: "CSS" },
  {
    id: 8,
    text: "Initializing repositories, commits, branches",
    section: "Git",
  },
  { id: 9, text: "Merge vs rebase", section: "Git" },
  { id: 10, text: ".gitignore", section: "Git" },
  { id: 11, text: "Working with GitHub / GitLab", section: "Git" },
  { id: 12, text: "Variables: let, const", section: "JS" },
  { id: 13, text: "Destructuring, spread/rest operators", section: "JS" },
  { id: 14, text: "Functions", section: "JS" },
  {
    id: 15,
    text: "Arrays: map, filter, reduce, find, some, every",
    section: "JS",
  },
  { id: 16, text: "Objects & JSON", section: "JS" },
  { id: 17, text: "async/await, fetch API", section: "JS" },
  { id: 18, text: "Modules (import/export)", section: "JS" },
  {
    id: 19,
    text: "Primitive types (string, number, boolean, any, unknown)",
    section: "TS",
  },
  { id: 20, text: "Arrays & objects", section: "TS" },
  { id: 21, text: "Interfaces & type aliases", section: "TS" },
  { id: 22, text: "Typing functions and React props", section: "TS" },
  { id: 23, text: "Union, optional types, generics (basic)", section: "TS" },
  { id: 24, text: "JSX & rules", section: "React Core" },
  { id: 25, text: "Functional components", section: "React Core" },
  { id: 26, text: "Props & children", section: "React Core" },
  { id: 27, text: "State management with useState", section: "React Core" },
  {
    id: 28,
    text: "Side effects with useEffect (lifecycle)",
    section: "React Core",
  },
  {
    id: 29,
    text: "useRef, useMemo, useCallback (intro level)",
    section: "React Core",
  },
  { id: 30, text: "Conditional rendering", section: "React Core" },
  { id: 31, text: "Rendering lists & using key", section: "React Core" },
  { id: 32, text: "Controlled forms & inputs", section: "React Core" },
  { id: 33, text: "Lifting state up (state sharing)", section: "React Core" },
  { id: 34, text: "Fetching data from APIs", section: "React Core" },
  {
    id: 35,
    text: "React Router (navigation & routes)",
    section: "React Ecosystem",
  },
  { id: 36, text: "Context API (global state)", section: "React Ecosystem" },
  {
    id: 37,
    text: "Styling solutions: styled-components, Material UI, Tailwind (pick at least one)",
    section: "React Ecosystem",
  },
  {
    id: 38,
    text: "Data fetching: react-query or swr (basic usage)",
    section: "React Ecosystem",
  },
  { id: 39, text: "Redux Toolkit", section: "State Management" },
];

function App() {
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
          {roadmap.map((item) => {
            console.log(item);
            return (
              <FormControlLabel
                control={<Checkbox />}
                label={item.text}
                key={item.id}
              />
            );
          })}
        </FormGroup>
      </Container>
      <Footer />
    </>
  );
}

export default App;
