import { List } from "@mui/material";
import React, { FC } from "react";
import Task from "./Task";
type Props = {
  taskList: { [s: string]: string }[];
};
const TasksArea: FC<Props> = (props) => {
  const { taskList } = props;
  const isTaskList: boolean = taskList.length === 0;
  return (
    <>
      {taskList.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </>
  );
};

export default TasksArea;
