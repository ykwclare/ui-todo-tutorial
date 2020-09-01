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
      expect(addTodo(0, "new todo!")).toEqual({
        type: ADD_TODO,
        data: {
          id: 0,
          description: "new todo!"
        },
      });
    });
  });

  describe("updateTodo", () => {
    it("should dispatch action with type UPDATE_TODO", () => {
      expect(updateTodo(0, "new todo!")).toEqual({
        type: UPDATE_TODO,
        data: {
          id: 0,
          description: "new todo!",
        },
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
