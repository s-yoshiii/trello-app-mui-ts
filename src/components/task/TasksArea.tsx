import { Box } from "@mui/system";
import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import type { DropResult, DroppableProvided } from "react-beautiful-dnd";
import Task from "./Task";
type Props = {
  taskList: { id: string; draggableId: string; text: string }[];
  setTaskList: Dispatch<
    SetStateAction<{ id: string; draggableId: string; text: string }[]>
  >;
};
const TasksArea: FC<Props> = (props) => {
  const { taskList, setTaskList } = props;
  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }
      const newState = [...taskList];
      const [removed] = newState.splice(result.source.index, 1);
      newState.splice(result.destination.index, 0, removed);
      setTaskList(newState);
    },
    [taskList]
  );
  console.log(taskList);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided: DroppableProvided) => (
          <Box
            component="div"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskList.map((task, i) => (
              <Task
                key={i}
                index={i}
                task={task}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TasksArea;
