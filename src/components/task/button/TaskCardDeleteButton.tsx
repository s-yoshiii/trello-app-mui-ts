import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
type Props = {
  taskCardsList: { id: string; draggableId: string }[];
  setTaskCardsList: Dispatch<
    SetStateAction<{ id: string; draggableId: string }[]>
  >;
  taskCard: { id: string; draggableId: string };
};
const TaskCardDeleteButton: FC<Props> = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard } = props;
  const taskCardDeleteButton = (id: string) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <IconButton
      aria-label="delete"
      sx={{ position: "absolute", top: 5, right: 5 }}
      onClick={() => taskCardDeleteButton(taskCard.id)}
    >
      <Close />
    </IconButton>
  );
};

export default TaskCardDeleteButton;
