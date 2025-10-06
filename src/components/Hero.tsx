import { useEffect, useState } from "react";
import { Box, LinearProgress, Typography, useTheme } from "@mui/material";
import confetti from "canvas-confetti";

export default function Hero({
  todosCompleted,
  totalTodos,
}: {
  todosCompleted: number;
  totalTodos: number;
}) {
  const theme = useTheme();
  const progress = totalTodos === 0 ? 0 : (todosCompleted / totalTodos) * 100;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (todosCompleted === totalTodos && totalTodos > 0) {
      setScale(1.2);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      const timer = setTimeout(() => setScale(1), 500);
      return () => clearTimeout(timer);
    }
  }, [todosCompleted, totalTodos]);

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "11px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          alignSelf: "center",
          width: "100%",
          maxWidth: "455px",
          padding: "12px",
          margin: "0 auto 20px",
          bgcolor: theme.palette.background.paper,
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
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            width: "150px",
            height: "150px",
            borderRadius: "75px",
            fontSize: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            transform: `scale(${scale})`,
            transition: "transform 0.3s ease",
          }}
        >
          {todosCompleted}/{totalTodos}
        </Box>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          mt: 1,
          height: 10,
          borderRadius: 5,
          backgroundColor: theme.palette.action.hover,
          "& .MuiLinearProgress-bar": {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );
}
