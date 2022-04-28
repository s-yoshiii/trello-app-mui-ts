import { Card, CardContent } from "@mui/material";
import React, { FC } from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardAddInput from "./input/TaskCardAddInput";
import TaskCardTitle from "./TaskCardTitle";
import TasksArea from "./TasksArea";

const TaskCard: FC = () => {
  return (
    <Card variant="outlined" sx={{ width: 250, mx: 5 }}>
      <CardContent>
        <TaskCardTitle />
        <TaskCardDeleteButton />
        <TaskCardAddInput />
        <TasksArea />
      </CardContent>
    </Card>
  );
};

export default TaskCard;
