import { Grid } from "@mui/material";
import React, { FC, useState } from "react";
import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCardsArea: FC = () => {
  const [taskCardsList, setTaskCardList] = useState<
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
        {taskCardsList.map(
          (taskCardList: { id: string; draggableId: string }) => (
            <Grid
              item
              sx={{ width: { xs: "100%", sm: 325 } }}
              key={taskCardList.id}
            >
              <TaskCard />
            </Grid>
          )
        )}
        <Grid item>
          <AddTaskCardButton
            taskCardsList={taskCardsList}
            setTaskCardList={setTaskCardList}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TaskCardsArea;
