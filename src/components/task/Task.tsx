import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { Dispatch, FC, SetStateAction } from "react";
type Props = {
  task: { id: number; text: string };
  taskList: { id: number; text: string }[];
  setTaskList: Dispatch<SetStateAction<{ id: number; text: string }[]>>;
};
const Task: FC<Props> = (props) => {
  const { task, taskList, setTaskList } = props;
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
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
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleDelete(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Task;
