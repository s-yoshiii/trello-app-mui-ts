import { FormControl, TextField } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: string[];
  setTaskList: Dispatch<SetStateAction<string[]>>;
};
const TaskCardAddInput: FC<Props> = (props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    console.log(e);
  };
  return (
    <FormControl
      fullWidth
      component="form"
      variant="standard"
      onSubmit={handleSubmit}
    >
      <TextField label="Add a task" />
    </FormControl>
  );
};

export default TaskCardAddInput;
