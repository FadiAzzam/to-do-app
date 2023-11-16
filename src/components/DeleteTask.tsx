import React from "react";

type props = {
  deleteTask: (id: string) => void;
  todoId: string;
};
const DeleteTask: React.FC<props> = ({ deleteTask, todoId }) => {
  return (
    <button
      className="rounded py-1 px-3 text-red-400 hover:text-red-500"
      onClick={() => deleteTask(todoId)}
    >
      Delete
    </button>
  );
};

export default DeleteTask;
