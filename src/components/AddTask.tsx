import React, { useState } from "react";
import { AddTaskProps } from "../lib/definitions";

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [isAdding, setIsAdding] = useState(false);

  const onSaveNewToDo = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newValue = e.target.text.value;
    setIsAdding(false);
    addTask(newValue);
  };
  return (
    <div className="w-full flex gap-3 flex-col">
      {!isAdding ? (
        <button
          className=" border rounded py-2 px-4 bg-gray-900 hover:bg-gray-900/95 text-gray-50 cursor-pointer"
          onClick={() => setIsAdding(true)}
          data-testid="new-todo-add-button"
        >
          Add new Task
        </button>
      ) : (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-6 bg-gray-900/95">
          <form
            onSubmit={onSaveNewToDo}
            className="flex gap-3 flex-col flex-auto rounded bg-gray-100 p-6 w-full md:max-w-md"
          >
            <h1 className="text-2xl font-semibold">Add new ToDo</h1>
            <textarea
              required
              minLength={3}
              id="text"
              name="text"
              cols={3}
              rows={5}
              className="p-3 resize-none overflow-auto"
              placeholder="Add new ToDo"
              data-testid="new-todo-add-text"
            ></textarea>
            <div className="flex justify-end items-center">
              <div className="gap-2 flex">
                <input
                  type="submit"
                  value="Save"
                  className="border rounded py-2 px-4 bg-gray-900 hover:bg-green-800 text-gray-50 cursor-pointer"
                  data-testid="new-todo-add-button-save"
                />

                <button
                  onClick={() => setIsAdding(false)}
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

export default AddTask;
