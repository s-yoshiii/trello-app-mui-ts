import { Grid } from "@mui/material";
import React, { FC } from "react";
import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCardsArea: FC = () => {
  return (
    <>
      <Grid container spacing={5} px={5}>
        <Grid item sx={{ width: { xs: "100%", sm: 250 } }}>
          <TaskCard />
        </Grid>
      </Grid>
      <AddTaskCardButton />
    </>
  );
};

export default TaskCardsArea;
