import { Button } from "@mui/material";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

export default function DeleteCompletedButton({
  deleteCompleted,
}: {
  deleteCompleted: () => void;
}) {
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<DeleteSweepIcon />}
      onClick={deleteCompleted}
      sx={{
        whiteSpace: "nowrap",
        fontSize: { xs: 12, md: 14 },
        width: {
          xs: "50%",
          sm: "auto",
        },
      }}
    >
      Delete Completed
    </Button>
  );
}
