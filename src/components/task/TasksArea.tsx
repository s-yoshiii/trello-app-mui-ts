import React, { FC } from "react";
type Props = {
  inputText: string;
  taskList: { [s: string]: string }[];
};
const TasksArea: FC<Props> = (props) => {
  const { inputText, taskList } = props;
  return (
    <div>
      {taskList.map((task, i) => (
        <div key={i}>{task.text}</div>
      ))}
    </div>
  );
};

export default TasksArea;
