import { FormControl, TextField } from "@mui/material";
import React, { FC } from "react";

const TaskCardAddInput: FC = () => {
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
