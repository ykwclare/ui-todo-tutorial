import React, { useContext, useState } from "react";
import { Input, Button } from "antd";
import { TodoContext } from "../context/TodoContextProvider";
import { updateTodo, deleteTodo } from "../context/todo.actions";

const TodoTask = (props) => {
  const [updatedValue, setUpdatedValue] = useState(props.description);
  const [isUpdating, setUpdating] = useState(false);

  const onUpdate = () => {
    if (isUpdating) {
      props.update(updatedValue, props.id);
    }

    setUpdating(!isUpdating);
  };

  return (
    <div className="todo-task">
      {!isUpdating && (
        <div className="todo-task__name" data-cy="todo-task__name">
          {props.description}
        </div>
      )}
      {isUpdating && (
        <Input
          value={updatedValue}
          onChange={({ target: { value } }) => setUpdatedValue(value)}
          placeholder="Update a TODO"
          size="large"
          className="todo-task__input"
          data-cy="todo-task__input"
        />
      )}
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-update"
        onClick={() => onUpdate()}
      >
        Update
      </Button>
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-delete"
        disabled={isUpdating}
        onClick={() => props.delete(props.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const dispatchUpdateTodo = (description, id) => dispatch(updateTodo(id, description));
  const dispatchDeleteTodo = (id) => dispatch(deleteTodo(id));

  return (
    <div className="todo-list" data-cy="todo-list">
      {Object.entries(state.todos).map(([id, todo]) => (
        <TodoTask
          key={id}
          description={todo.description}
          update={dispatchUpdateTodo}
          delete={dispatchDeleteTodo}
          id={id}
        />
      ))}
    </div>
  );
};
