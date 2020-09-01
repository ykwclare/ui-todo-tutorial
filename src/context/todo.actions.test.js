const {
  addTodo,
  updateTodo,
  deleteTodo,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} = require("./todo.actions");

describe("todo.actions", () => {
  describe("addTodo", () => {
    it("should dispatch action with type ADD_TODO", () => {
      expect(addTodo("new todo!")).toEqual({
        type: ADD_TODO,
        data: "new todo!",
      });
    });
  });

  describe("updateTodo", () => {
    it("should dispatch action with type UPDATE_TODO", () => {
      expect(updateTodo("new todo!", 0)).toEqual({
        type: UPDATE_TODO,
        data: { todo: "new todo!", index: 0 },
      });
    });
  });

  describe("deleteTodo", () => {
    it("should dispatch action with type DELETE_TODO", () => {
      expect(deleteTodo(0)).toEqual({
        type: DELETE_TODO,
        data: 0,
      });
    });
  });
});
