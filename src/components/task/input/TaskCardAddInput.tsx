import { FormControl, TextField } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: { id: number; text: string }[];
  setTaskList: Dispatch<SetStateAction<{ id: number; text: string }[]>>;
};
const TaskCardAddInput: FC<Props> = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //カードを追加する
    if (inputText === "") {
      return;
    }
    setTaskList([...taskList, { id: taskList.length, text: inputText }]);
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
      <TextField
        label="Add a task"
        onChange={handleChange}
        value={inputText}
        sx={{ mb: "16px" }}
      />
    </FormControl>
  );
};

export default TaskCardAddInput;
