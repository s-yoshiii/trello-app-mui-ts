import { FormControl, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useState } from "react";

const TaskCardTitle: FC = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("TODAY");
  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClick(false);
  };
  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <Box component="div" sx={{ mb: 4 }} onClick={handleClick}>
      {isClick ? (
        <FormControl
          fullWidth
          component="form"
          variant="standard"
          onSubmit={handleSubmit}
        >
          <Input
            fullWidth
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            inputProps={{ maxLength: 10 }}
          />
        </FormControl>
      ) : (
        <Typography variant="h5" component="h3">
          {inputCardTitle}
        </Typography>
      )}
    </Box>
  );
};

export default TaskCardTitle;
