import { Box } from "@mui/system";
import React, { Dispatch, FC, SetStateAction } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Task from "./Task";
type Props = {
  taskList: { id: number; text: string }[];
  setTaskList: Dispatch<SetStateAction<{ id: number; text: string }[]>>;
};
const TasksArea: FC<Props> = (props) => {
  const { taskList, setTaskList } = props;
  return (
    <DragDropContext>
      <Droppable droppableId="droppableId">
        {(provided) => (
          <Box
            component="div"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskList.map((task, i) => (
              <Task
                key={i}
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
