import { Card, CardContent } from "@mui/material";
import React, { FC, useState } from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardAddInput from "./input/TaskCardAddInput";
import TaskCardTitle from "./TaskCardTitle";
import TasksArea from "./TasksArea";

const TaskCard: FC = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState<
    { id: number; draggableId: string; text: string }[]
  >([]);
  return (
    <Card variant="outlined" sx={{ width: { xs: "100%", md: 250 } }}>
      <CardContent>
        <TaskCardTitle />
        <TaskCardDeleteButton />
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
