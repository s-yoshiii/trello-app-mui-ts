import React, { FC } from "react";
type Props = {
  task: { [s: string]: string };
};
const Task: FC<Props> = (props) => {
  const { task } = props;
  return (
    <div>
      <p>{task.text}</p>
    </div>
  );
};

export default Task;
