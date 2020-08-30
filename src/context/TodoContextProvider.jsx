import React, { createContext, useReducer } from "react";
import { todoReducer } from "./todo.reducer";

// Here we initialise our Context
const initialState = { todos: [] };
export const TodoContext = createContext(initialState);

// We use the useReducer hook to expose the state and a dispatch function
// These will provide access to the Context later on
export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
