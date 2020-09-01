import React, { useContext } from "react";
import { Button } from "antd";
import { TodoContext } from "../context/TodoContextProvider";

const TodoTask = (props) => (
  <div className="todo-task">
    <div className="todo-task__name">{props.todo}</div>
    <Button
      type="primary"
      shape="round"
      className="todo-task__button"
      data-cy="todo-task__button-update"
    >
      Update
    </Button>
    <Button
      type="primary"
      shape="round"
      className="todo-task__button"
      data-cy="todo-task__button-delete"
    >
      Delete
    </Button>
  </div>
);

export const TodoList = () => {
  const { state } = useContext(TodoContext);
  return (
    <div className="todo-list" data-cy="todo-list">
      {state.todos.map((todo, index) => (
        <TodoTask todo={todo} key={index} />
      ))}
    </div>
  );
};
