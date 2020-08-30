import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

//TODO:
export const TodoList = () => {
  const { state } = useContext(TodoContext);
  console.log(state);
  return <div data-cy="todo-list">{state.todos.join()}</div>;
};
