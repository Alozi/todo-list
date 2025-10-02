import { useRef } from "react";
import { Typography, Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "./context/theme/ThemeProvider";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <ThemeProvider>
      <Header focusInput={focusInput} />
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          sx={{ marginBottom: 4, textAlign: "center" }}
        >
          Junior React Developer Roadmap
        </Typography>
        <TodoList inputRef={inputRef} />
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 64, right: 32 }}
          onClick={focusInput}
        >
          <AddIcon />
        </Fab>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
