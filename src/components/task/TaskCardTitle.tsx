import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useState } from "react";

const TaskCardTitle: FC = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <Box>
      <Typography variant="h5" component="h3">
        TODAY
      </Typography>
    </Box>
  );
};

export default TaskCardTitle;
