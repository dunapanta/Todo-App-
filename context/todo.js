import { createContext, useReducer } from "react";

export const ADD_TASK = "ADD_TASK";

const initialState = {
  todos: [],
  filter: "all",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = {
        id: Math.random().toString(16),
        text: action.payload,
        isCompleted: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTask],
      };
    }
    default:
      return state;
  }
};

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};