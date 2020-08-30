import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

//TODO:
export const TodoList = () => {
  const { state } = useContext(TodoContext);
  console.log(state);
  return state.todos.join();
};
