import { Typography, Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Layout({
  focusInput,
  children,
}: {
  focusInput: () => void;
  children: React.ReactNode;
}) {
  return (
    <Container
      maxWidth="md"
      sx={{
        padding: {
          xs: 1,
          sm: 2,
          md: 5,
        },
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          marginBottom: { xs: 2, md: 4 },
          textAlign: "center",
          fontSize: { xs: 32, md: 48 },
        }}
      >
        Junior React Developer Roadmap
      </Typography>
      {children}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          width: {
            xs: 33,
            md: 56,
          },
          height: {
            xs: 33,
            md: 56,
          },
          bottom: { xs: 32, md: 64 },
          right: { xs: 16, md: 32 },
        }}
        onClick={focusInput}
      >
        <AddIcon sx={{ fontSize: { xs: "16px", md: "24px" } }} />
      </Fab>
    </Container>
  );
}
