import React, { useState } from "react";
import { Input, Button } from "antd";
import { addTodo } from "../context/todo.actions";
import { TodoContext } from "../context/TodoContextProvider";
import { useContext } from "react";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(TodoContext);
  const dispatchAddTodo = (todo) => dispatch(addTodo(todo));

  return (
    <div className="todo-input">
      <Input
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        placeholder="Add a TODO"
        size="large"
        className="todo-input__input"
        data-cy="todo-input__input"
      />
      <Button
        type="primary"
        shape="round"
        onClick={() => {
          dispatchAddTodo(inputValue);
          setInputValue("");
        }}
        className="todo-input__button"
        data-cy="todo-input__button"
      >
        Add
      </Button>
    </div>
  );
};
