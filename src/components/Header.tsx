import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
import todoIcon from "../assets/work-order.png";

export default function Header({ focusInput }: { focusInput: () => void }) {
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{ marginBottom: 2, padding: 2 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Typography variant="h3" component="h1">
            ToDo List
          </Typography>
          <Box
            component="img"
            src={todoIcon}
            alt="Logo"
            sx={{ width: 100, height: "auto", borderRadius: 2 }}
          />
        </Box>
        <div>
          <IconButton color="inherit" onClick={focusInput}>
            <AddIcon />
          </IconButton>
          {/* <IconButton color="inherit">
            <Brightness4Icon />
          </IconButton> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}
