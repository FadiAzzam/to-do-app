export type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; error: Error };

export interface toDo {
  completed: boolean;
  id: string;
  todo: string;
  userId: number;
}

export interface TaskProps {
  todo: toDo;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string, completed: boolean) => void;
  duplicateTask: (id: string) => void;
}

export interface AddTaskProps {
  addTask: (e: string) => void;
}

export interface editTaskProps {
  editTask: (e: string, text: string, completed: boolean) => void;
  todo: toDo;
}

export interface data {
  text: string;
  completed: boolean;
}

export interface DuplicateTaskInterface {
  duplicateTask: (id: string) => void;
  taskId: string;
}

export type actionType =
  | { type: "ADD"; text: string }
  | { type: "DEL"; id: string }
  | { type: "EDIT"; id: string; text: string; completed: boolean }
  | { type: "DUP"; id: string };

export type returnType = {
  todos: toDo[];
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string, completed: boolean) => void;
  duplicateTask: (id: string) => void;
};
