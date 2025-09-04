import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Box sx={{ width: "100%", maxWidth: 800 }}>
      <Typography variant="h3" component="h1">
        Junior React Developer Roadmap
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Learn HTML and CSS"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Learn JavaScript"
        />
        <FormControlLabel control={<Checkbox />} label="Learn TypeScript" />
      </FormGroup>
    </Box>
  );
}

export default App;
