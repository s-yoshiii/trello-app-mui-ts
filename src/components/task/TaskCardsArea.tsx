import { Grid } from "@mui/material";
import React, { FC } from "react";
import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCardsArea: FC = () => {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item>
          <TaskCard />
        </Grid>
      </Grid>
      <AddTaskCardButton />
    </div>
  );
};

export default TaskCardsArea;
