import { Grid } from "@mui/material";
import React, { FC, useCallback, useState } from "react";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCardsArea: FC = () => {
  const [taskCardsList, setTaskCardsList] = useState<
    { id: string; draggableId: string }[]
  >([{ id: "0", draggableId: "item-0" }]);
  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }
      const newState = [...taskCardsList];
      const [removed] = newState.splice(result.source.index, 1);
      newState.splice(result.destination.index, 0, removed);
      setTaskCardsList(newState);
    },
    [taskCardsList]
  );
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppableCards" direction="horizontal">
        {(provided: DroppableProvided) => (
          <Grid
            container
            spacing={5}
            px={5}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskCardsList.map(
              (taskCard: { id: string; draggableId: string }, i) => (
                <Grid
                  item
                  sx={{ width: { xs: "100%", sm: 325 } }}
                  key={taskCard.id}
                >
                  <TaskCard
                    taskCardsList={taskCardsList}
                    setTaskCardsList={setTaskCardsList}
                    taskCard={taskCard}
                    index={i}
                  />
                </Grid>
              )
            )}
            {provided.placeholder}
            <Grid item>
              <AddTaskCardButton
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            </Grid>
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCardsArea;
