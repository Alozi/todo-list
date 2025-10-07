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
        padding: {
          xs: "10px",
          md: "20px",
        },
        marginBottom: {
          xs: "16px",
          md: "20px",
        },
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
          margin: {
            xs: "0 auto 16px",
            md: "0 auto 20px",
          },
          padding: {
            xs: "12px",
            md: "20px",
          },
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontSize: { xs: 34, md: 38 } }}
          >
            Task Done
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontSize: { xs: 20, md: 24 } }}
          >
            Keep it up
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            width: {
              xs: "100px",
              md: "150px",
            },
            height: {
              xs: "100px",
              md: "150px",
            },
            borderRadius: "50%",
            fontSize: { xs: 32, md: 48 },
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
