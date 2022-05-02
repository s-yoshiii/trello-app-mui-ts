import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC } from "react";
type Props = {
  task: { [s: string]: string };
};
const Task: FC<Props> = (props) => {
  const { task } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        mb: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent sx={{ maxWidth: "75%", pr: "0" }}>
        <Typography component="div" sx={{ overflowWrap: "break-word" }}>
          {task.text}
        </Typography>
      </CardContent>
      <CardActions sx={{ pr: "16px", pl: "0" }}>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Task;
