import React, { useState } from "react";
import { editTaskProps, data } from "../lib/definitions";

const EditTask: React.FC<editTaskProps> = ({ editTask, todo }) => {
  const [isEditing, setEditing] = useState(false);
  const [data, setData] = useState<data>({
    text: todo.todo,
    completed: todo.completed,
  });

  const onSaveNewToDo = (e: any) => {
    e.preventDefault();

    setData({
      text: e.target.text.value,
      completed: e.target.completed.checked,
    });

    editTask(todo.id, e.target.text.value, e.target.completed.checked);
    setEditing(false);
  };

  return (
    <div className="w-full flex gap-3 flex-col">
      {!isEditing ? (
        <button
          className=" rounded border bg-gray-100 py-1 px-3 hover:bg-gray-200 cursor-pointer"
          onClick={() => setEditing(true)}
          data-testid="new-todo-edit-button"
        >
          Edit
        </button>
      ) : (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-6 bg-gray-900/95">
          <form
            onSubmit={onSaveNewToDo}
            className="flex gap-3 flex-col flex-auto rounded bg-gray-100 p-6 w-full md:max-w-md"
          >
            <h1 className="text-2xl font-semibold">Edit selected Task</h1>
            <textarea
              id="text"
              name="text"
              cols={3}
              rows={5}
              className="p-3 resize-none overflow-auto"
              placeholder="Edit selected Task"
              value={data?.text}
              onChange={(e) =>
                setData((prevData) => ({ ...prevData, text: e.target.value }))
              }
              data-testid="new-todo-edit-text"
            ></textarea>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="completed"
                name="completed"
                checked={data?.completed}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    completed: e.target.checked,
                  }))
                }
              />
              <label htmlFor="completed">completed</label>
            </div>
            <div className="flex justify-end items-center">
              <div className="gap-2 flex">
                <input
                  type="submit"
                  value="Save"
                  className="border rounded py-2 px-4 bg-gray-900 hover:bg-green-800 text-gray-50 cursor-pointer"
                  data-testid="new-todo-edit-button-save"
                />

                <button
                  onClick={() => setEditing(false)}
                  className="border rounded py-2 px-4 bg-gray-300 hover:bg-gray-300/90 text-gray-900 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditTask;
