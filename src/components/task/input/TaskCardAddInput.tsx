import { FormControl, TextField } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: string[];
  setTaskList: Dispatch<SetStateAction<string[]>>;
};
const TaskCardAddInput: FC<Props> = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  return (
    <FormControl
      fullWidth
      component="form"
      variant="standard"
      onSubmit={handleSubmit}
    >
      <TextField label="Add a task" onChange={handleChange} />
    </FormControl>
  );
};

export default TaskCardAddInput;
