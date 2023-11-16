import React from "react";

import { DuplicateTaskInterface } from "../lib/definitions";

const DuplicateTask: React.FC<DuplicateTaskInterface> = ({
  duplicateTask,
  taskId,
}) => {
  return (
    <button
      className=" rounded border bg-gray-100 py-1 px-3 hover:bg-gray-200 cursor-pointer"
      onClick={() => duplicateTask(taskId)}
    >
      Duplicate
    </button>
  );
};

export default DuplicateTask;
