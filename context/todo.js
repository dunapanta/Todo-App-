import { createContext, useReducer } from "react";

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_ALL = "TOGGLE_ALL";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const CHANGE_TODO = "CHANGE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

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
    case TOGGLE_ALL: {
      const updatedTodos = state.todos.map((todo) => ({
        ...todo,
        isCompleted: action.payload,
      }));
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case CHANGE_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case CHANGE_TODO: {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case TOGGLE_TODO: {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case REMOVE_TODO: {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: updatedTodos,
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
