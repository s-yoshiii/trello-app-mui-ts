import { AddCircle } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { FC } from "react";

const AddTaskCardButton: FC = () => {
  return (
    <Box pt={10}>
      <IconButton aria-label="add" sx={{ p: 0 }}>
        <AddCircle color="primary" fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default AddTaskCardButton;
