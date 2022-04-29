import { Card, CardContent } from "@mui/material";
import React, { FC } from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardAddInput from "./input/TaskCardAddInput";
import TaskCardTitle from "./TaskCardTitle";
import TasksArea from "./TasksArea";

const TaskCard: FC = () => {
  return (
    <Card variant="outlined" sx={{ width: { xs: "100%", md: 250 } }}>
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
