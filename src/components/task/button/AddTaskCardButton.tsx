import { AddCircle } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
type Props = {
  taskCardsList: { id: string; draggableId: string }[];
  setTaskCardList: Dispatch<
    SetStateAction<{ id: string; draggableId: string }[]>
  >;
};
const AddTaskCardButton: FC<Props> = (props) => {
  const { taskCardsList, setTaskCardList } = props;
  const addTaskCard = () => {
    const taskCardId = uuidv4();
    //タスクカードを追加する
    setTaskCardList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <Box sx={{ pt: { md: 5 } }}>
      <IconButton aria-label="add" onClick={addTaskCard}>
        <AddCircle color="primary" sx={{ fontSize: 56 }} />
      </IconButton>
    </Box>
  );
};

export default AddTaskCardButton;
