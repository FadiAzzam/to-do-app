import { useReducer } from "react";
import uuid from "react-uuid";

import { actionType, returnType, toDo } from "../lib/definitions";

export function useTodo(): returnType {
  const [todos, dispatch] = useReducer((state: toDo[], action: actionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            completed: false,
            id: uuid(),
            todo: action.text,
            userId: 22,
          },
        ];
      case "DEL":
        return state.filter((st) => st.id !== action.id);
      case "DUP":
        const duplicatedTodo = state.find((todo) => todo.id === action.id);
        if (duplicatedTodo) {
          return [...state, { ...duplicatedTodo, id: uuid() }];
        }
        return state.filter((st) => st.id !== action.id);
      case "EDIT":
        return state.map((st) =>
          st.id === action.id
            ? {
                completed: action.completed,
                id: uuid(),
                todo: action.text,
                userId: 22,
              }
            : st
        );
      default:
        throw new Error();
    }
  }, []);

  const addTask = (text: string) => {
    dispatch({ type: "ADD", text });
  };

  const editTask = (id: string, text: string, completed: boolean): void => {
    dispatch({ type: "EDIT", id, text, completed });
  };

  const deleteTask = (id: string): void => {
    dispatch({ type: "DEL", id });
  };

  const duplicateTask = (id: string): void => {
    dispatch({ type: "DUP", id });
  };
  return { todos, addTask, editTask, deleteTask, duplicateTask };
}
