// export default function Header() {
//   return (
//     <header className="header">
//
//       <h1>ToDo List</h1>
//     </header>
//   );
// }
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import todoIcon from "../assets/work-order.png";

export default function Header() {
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
          <IconButton color="inherit">
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
