import React, { useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import { useTodo } from "../hooks/useTodo";

// Types
import { RequestState } from "../lib/definitions";

const TaskList: React.FC = () => {
  const [status, setStatus] = useState<RequestState>({ status: "idle" });

  const [loading, setLoading] = useState(true);

  const { todos, addTask, deleteTask, duplicateTask, editTask } = useTodo();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setStatus({ status: "loading" });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return (
      <div>
        <h3 className="animate-pulse">Loading...</h3>
      </div>
    );
  }
  return (
    <div className="flex gap-3 flex-col">
      <p>{todos.length} ToDo's</p>
      <div className="flex items-center justify-between flex-auto">
        <AddTask addTask={addTask} />
      </div>

      <div className="flex flex-wrap gap-3">
        {todos.length ? (
          todos.map((todo) => (
            <Task
              key={todo.id}
              todo={todo}
              deleteTask={deleteTask}
              editTask={editTask}
              duplicateTask={duplicateTask}
            />
          ))
        ) : (
          <div className="p-6 border rounded flex-auto">
            <h3 className="text-xl font-bold">No ToDo'S to show</h3>
            <h3>Add new ToDo</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
