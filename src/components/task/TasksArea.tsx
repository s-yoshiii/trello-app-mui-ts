import { List } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
import Task from "./Task";
type Props = {
  taskList: { id: number; text: string }[];
  setTaskList: Dispatch<SetStateAction<{ id: number; text: string }[]>>;
};
const TasksArea: FC<Props> = (props) => {
  const { taskList, setTaskList } = props;
  return (
    <>
      {taskList.map((task, i) => (
        <Task
          key={i}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </>
  );
};

export default TasksArea;
