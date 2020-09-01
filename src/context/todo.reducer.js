import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, data] };
    case UPDATE_TODO:
      const updatedTodos = [...state.todos];
      updatedTodos[data.index] = data.todo;
      return { ...state, todos: updatedTodos };
    case DELETE_TODO:
      const arr = [...state.todos];
      arr.splice(data, 1);
      return { ...state, todos: arr };
    default:
      return state;
  }
};
