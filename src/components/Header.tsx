import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  // IconButton,
  FormControlLabel,
} from "@mui/material";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { useTheme } from "../context/theme/useTheme";
// import AddIcon from "@mui/icons-material/Add";
import todoIcon from "../assets/work-order.png";

export default function Header() {
  // { focusInput }: { focusInput: () => void }
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        marginBottom: 2,
        padding: {
          xs: 1,
          md: 2,
        },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 2,
              md: 5,
            },
          }}
        >
          <Box
            component="img"
            src={todoIcon}
            alt="Logo"
            sx={{
              width: {
                xs: 50,
                md: 100,
              },
              height: "auto",
              borderRadius: 2,
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontSize: { xs: 24, md: 48 } }}
          >
            ToDo List
          </Typography>
        </Box>
        <div>
          {/* <IconButton color="inherit" onClick={focusInput}>
            <AddIcon />
          </IconButton> */}
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                checked={theme === "dark"}
                onChange={() => toggleTheme()}
              />
            }
            label=""
            sx={{
              "& ": {
                marginRight: 0,
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                },
              },
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
