import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";

function TabPanel({
  children,
  index,
  value,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" component="h1" sx={{ marginBottom: 2 }}>
          Junior React Developer Roadmap
        </Typography>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Web Development Fundamentals" />
              <Tab label="JS & TS" />
              <Tab label="React" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <FormLabel component="legend">HTML</FormLabel>
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
            <FormLabel component="legend">CSS</FormLabel>
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
            <FormLabel component="legend">Git & Version Control</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Initializing repositories, commits, branches"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Merge vs rebase"
              />
              <FormControlLabel control={<Checkbox />} label=".gitignore" />
              <FormControlLabel
                control={<Checkbox />}
                label=" Working with GitHub / GitLab"
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormLabel component="legend">JavaScript (ES6+)</FormLabel>
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
            <FormLabel component="legend">
              TypeScript Basics (Recommended)
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Primitive types (string, number, boolean, any, unknown)"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Arrays & objects"
              />
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
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FormLabel component="legend">React Core</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="JSX & rules" />
              <FormControlLabel
                control={<Checkbox />}
                label="Functional components"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Props & children"
              />
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
            <FormLabel component="legend">React Ecosystem</FormLabel>
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
            <FormLabel component="legend">State Management</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Redux Toolkit" />
            </FormGroup>
          </TabPanel>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;
