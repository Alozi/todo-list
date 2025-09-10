import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

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
        <TodoList />
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 64, right: 32 }}
        >
          <AddIcon />
        </Fab>
      </Container>
      <Footer />
    </>
  );
}

export default App;
