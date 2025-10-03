import { Box, Typography } from "@mui/material";

export default function Hero({
  todosCompleted,
  totalTodos,
}: {
  todosCompleted: number;
  totalTodos: number;
}) {
  return (
    <Box
      sx={{
        border: "1px solid #90caf9",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "center",
        width: "100%",
        maxWidth: "455px",
        padding: "12px",
        borderRadius: "11px",
        margin: "0 auto 20px",
      }}
    >
      <Box>
        <Typography variant="h4" component="h2">
          Task Done
        </Typography>
        <Typography variant="h6" component="p">
          Keep it up
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#90caf9",
          width: "150px",
          height: "150px",
          borderRadius: "75px",
          fontSize: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {todosCompleted}/{totalTodos}
      </Box>
    </Box>
  );
}
