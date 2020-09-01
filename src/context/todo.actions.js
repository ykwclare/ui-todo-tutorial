export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (todo) => ({ type: ADD_TODO, data: todo });
export const updateTodo = (todo, index) => ({
  type: UPDATE_TODO,
  data: { todo, index },
});
export const deleteTodo = (index) => ({ type: DELETE_TODO, data: index });
