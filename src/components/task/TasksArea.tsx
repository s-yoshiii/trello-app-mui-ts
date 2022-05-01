import React, { FC } from "react";
import Task from "./Task";
type Props = {
  taskList: { [s: string]: string }[];
};
const TasksArea: FC<Props> = (props) => {
  const { taskList } = props;
  return (
    <div>
      {taskList.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </div>
  );
};

export default TasksArea;
