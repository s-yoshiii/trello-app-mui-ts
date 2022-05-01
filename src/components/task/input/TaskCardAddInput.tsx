import { FormControl, TextField } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: { [s: string]: string }[];
  setTaskList: Dispatch<SetStateAction<{ [s: string]: string }[]>>;
};
const TaskCardAddInput: FC<Props> = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //カードを追加する
    setTaskList([...taskList, { text: inputText }]);
    setInputText("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <FormControl
      fullWidth
      component="form"
      variant="standard"
      onSubmit={handleSubmit}
    >
      <TextField label="Add a task" onChange={handleChange} value={inputText} />
    </FormControl>
  );
};

export default TaskCardAddInput;
