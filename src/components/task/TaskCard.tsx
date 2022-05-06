import { Card, CardContent } from "@mui/material";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardAddInput from "./input/TaskCardAddInput";
import TaskCardTitle from "./TaskCardTitle";
import TasksArea from "./TasksArea";
type Props = {
  taskCardsList: { id: string; draggableId: string }[];
  setTaskCardsList: Dispatch<
    SetStateAction<{ id: string; draggableId: string }[]>
  >;
  taskCard: { id: string; draggableId: string };
};
const TaskCard: FC<Props> = (props) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState<
    { id: string; draggableId: string; text: string }[]
  >([]);
  const { taskCardsList, setTaskCardsList, taskCard } = props;
  return (
    <Card
      variant="outlined"
      sx={{ width: { xs: "100%", md: 300 }, position: "relative" }}
    >
      <CardContent>
        <TaskCardTitle />
        <TaskCardDeleteButton
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
        <TaskCardAddInput
          inputText={inputText}
          setInputText={setInputText}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TasksArea taskList={taskList} setTaskList={setTaskList} />
      </CardContent>
    </Card>
  );
};

export default TaskCard;
