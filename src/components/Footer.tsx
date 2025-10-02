import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          borderTop: 1,
          borderColor: "divider",
          p: 2,
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2025 My ToDo App
        </Typography>
        <Box>
          <Typography
            href="https://github.com/Alozi"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: 2 }}
            variant="body2"
            color="primary"
            component="a"
          >
            GitHub
          </Typography>
          <Typography
            href="https://linkedin.com/in/victoria-bogutska-1135a923b"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: 2 }}
            variant="body2"
            color="primary"
            component="a"
          >
            LinkedIn
          </Typography>
          <Typography
            href="https://www.flaticon.com/free-icons/to-do-list"
            title="to do list icons"
            target="_blank"
            sx={{ ml: 2 }}
            variant="body2"
            color="primary"
            component="a"
          >
            To do list icons created by Freepik - Flaticon
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}
