import React, { useState } from "react";
import { Input, Button } from "antd";
import { addTodo } from "../context/todo.actions";
import { TodoContext } from "../context/TodoContextProvider";
import { useContext } from "react";
const { TextArea } = Input;

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(TodoContext);
  const dispatchAddTodo = (todo) => dispatch(addTodo(todo));

  return (
    <>
      <TextArea
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        placeholder="Add a TODO"
        autoSize={{ minRows: 1, maxRows: 3 }}
      />
      <Button
        type="primary"
        shape="round"
        size={2}
        onClick={() => dispatchAddTodo(inputValue)}
      >
        Add
      </Button>
    </>
  );
};
