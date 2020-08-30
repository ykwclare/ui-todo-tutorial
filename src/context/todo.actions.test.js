const { addTodo, ADD_TODO } = require("./todo.actions");

describe("todo.actions", () => {
  describe("addTodo", () => {
    it("should dispatch action with type ADD_TODO", () => {
      expect(addTodo("new todo!")).toEqual({
        type: ADD_TODO,
        data: "new todo!",
      });
    });
  });
});
