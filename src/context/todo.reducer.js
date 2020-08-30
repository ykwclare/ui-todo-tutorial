import { ADD_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, data] };
    default:
      return state;
  }
};
