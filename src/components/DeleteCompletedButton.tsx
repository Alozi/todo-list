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
      sx={{ width: "40%" }}
    >
      DeleteCompleted
    </Button>
  );
}
