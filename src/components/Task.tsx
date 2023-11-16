import React from "react";
import EditTask from "./EditTask";
import DuplicateTask from "./DuplicateTask";
import DeleteTask from "./DeleteTask";

import { TaskProps } from "../lib/definitions";

const Task: React.FC<TaskProps> = ({
  todo,
  deleteTask,
  editTask,
  duplicateTask,
}) => {
  return (
    <div className="flex gap-3 flex-col flex-auto rounded bg-gray-100 p-6">
      <h3 className={`text-xl font-bold ${todo.completed && "line-through"} `}>
        {todo.todo}
      </h3>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {todo.completed ? (
            <span className="text-green-600">completed</span>
          ) : (
            <span className="text-blue-600">in Progress</span>
          )}
        </div>
        <div className="gap-2 flex">
          <EditTask editTask={editTask} todo={todo} />
          <DuplicateTask duplicateTask={duplicateTask} taskId={todo.id} />
          <DeleteTask deleteTask={deleteTask} todoId={todo.id} />
        </div>
      </div>
    </div>
  );
};

export default Task;
