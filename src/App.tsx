import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: 2, textAlign: "center" }}
        >
          HTML
        </Typography>
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Semantic tags (header, main, footer, article, section)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Forms and validation"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Accessibility attributes (alt, aria-label)"
          />
        </FormGroup>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: 2, textAlign: "center" }}
        >
          CSS
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Flexbox & Grid" />
          <FormControlLabel
            control={<Checkbox />}
            label="Positioning (absolute, relative, sticky, fixed)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Media queries (responsive design)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Transitions & animations"
          />
        </FormGroup>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: 2, textAlign: "center" }}
        >
          Git & Version Control
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Initializing repositories, commits, branches"
          />
          <FormControlLabel control={<Checkbox />} label="Merge vs rebase" />
          <FormControlLabel control={<Checkbox />} label=".gitignore" />
          <FormControlLabel
            control={<Checkbox />}
            label=" Working with GitHub / GitLab"
          />
        </FormGroup>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: 2, textAlign: "center" }}
        >
          JavaScript (ES6+)
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Variables: let, const"
          />
          <FormControlLabel control={<Checkbox />} label="Functions" />
          <FormControlLabel
            control={<Checkbox />}
            label="Destructuring, spread/rest operators"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Arrays: map, filter, reduce, find, some, every"
          />
          <FormControlLabel control={<Checkbox />} label="Objects & JSON" />
          <FormControlLabel
            control={<Checkbox />}
            label="async/await, fetch API"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Modules (import/export)"
          />
        </FormGroup>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: 2, textAlign: "center" }}
        >
          TypeScript Basics (Recommended)
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Primitive types (string, number, boolean, any, unknown)"
          />
          <FormControlLabel control={<Checkbox />} label="Arrays & objects" />
          <FormControlLabel
            control={<Checkbox />}
            label=" Interfaces & type aliases"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Typing functions and React props"
          />
          <FormControlLabel
            control={<Checkbox />}
            label=" Union, optional types, generics (basic)"
          />
        </FormGroup>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: 2, textAlign: "center" }}
        >
          React Core
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="JSX & rules" />
          <FormControlLabel
            control={<Checkbox />}
            label="Functional components"
          />
          <FormControlLabel control={<Checkbox />} label="Props & children" />
          <FormControlLabel
            control={<Checkbox />}
            label="State management with useState"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Side effects with useEffect (lifecycle)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="useRef, useMemo, useCallback (intro level)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Conditional rendering"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Rendering lists & using key"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Controlled forms & inputs"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Lifting state up (state sharing)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Fetching data from APIs"
          />
        </FormGroup>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: 2, textAlign: "center" }}
        >
          React Ecosystem
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="React Router (navigation & routes)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Context API (global state)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Styling solutions: styled-components, Material UI, Tailwind (pick at least one)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Data fetching: react-query or swr (basic usage)"
          />
        </FormGroup>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: 2, textAlign: "center" }}
        >
          State Management
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Redux Toolkit" />
        </FormGroup>
      </Container>
      <Footer />
    </>
  );
}

export default App;
