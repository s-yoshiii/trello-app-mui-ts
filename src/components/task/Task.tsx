import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Draggable } from "react-beautiful-dnd";
import type { DraggableProvided } from "react-beautiful-dnd";
type Props = {
  task: { id: number; draggableId: string; text: string };
  taskList: { id: number; draggableId: string; text: string }[];
  setTaskList: Dispatch<
    SetStateAction<{ id: number; draggableId: string; text: string }[]>
  >;
  index: number;
};
const Task: FC<Props> = (props) => {
  const { task, taskList, setTaskList, index } = props;
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided: DraggableProvided) => (
        <Card
          variant="outlined"
          sx={{
            mb: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
      )}
    </Draggable>
  );
};

export default Task;
