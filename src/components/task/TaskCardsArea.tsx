import { Grid } from "@mui/material";
import React, { FC, useState } from "react";
import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCardsArea: FC = () => {
  const [taskCardsList, setTaskCardsList] = useState<
    { id: string; draggableId: string }[]
  >([{ id: "0", draggableId: "item-0" }]);
  return (
    <>
      <Grid
        container
        spacing={5}
        px={5}
        justifyContent={{ xs: "center", sm: "flex-start" }}
      >
        {taskCardsList.map((taskCard: { id: string; draggableId: string }) => (
          <Grid item sx={{ width: { xs: "100%", sm: 325 } }} key={taskCard.id}>
            <TaskCard
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </Grid>
        ))}
        <Grid item>
          <AddTaskCardButton
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TaskCardsArea;
