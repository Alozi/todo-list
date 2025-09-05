import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    // <footer>

    // </footer>

    <Box
      sx={{
        borderTop: 1,
        borderColor: "divider",
        p: 2,
        mt: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "grey.100",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 My ToDo App
      </Typography>
      <Box>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 2 }}
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 2 }}
        >
          LinkedIn
        </Link>
        <Link
          href="https://www.flaticon.com/free-icons/to-do-list"
          title="to do list icons"
          target="_blank"
          sx={{ ml: 2 }}
        >
          To do list icons created by Freepik - Flaticon
        </Link>
      </Box>
    </Box>
  );
}
