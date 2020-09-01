const { ADD_TODO, UPDATE_TODO, DELETE_TODO } = require("./todo.actions");
const { todoReducer } = require("./todo.reducer");

describe("todo.reducer", () => {
  it("should add data to state.todos for type ADD_TODO", () => {
    const mockState = { todos: [] };
    const mockAction = { type: ADD_TODO, data: "new todo!" };
    expect(todoReducer(mockState, mockAction)).toEqual({
      todos: ["new todo!"],
    });
  });

  it("should do nothing for unrecognised type", () => {
    const mockState = { todos: [] };
    const mockAction = { type: "WRONG_TYPE", data: "new todo!" };
    expect(todoReducer(mockState, mockAction)).toEqual(mockState);
  });

  describe("UPDATE_TODO", () => {
    it("should update data of specific index in state.todos", () => {
      const mockState = { todos: ["a", "b"] };
      const mockAction = { type: UPDATE_TODO, data: { todo: "c", index: 0 } };
      expect(todoReducer(mockState, mockAction)).toEqual({
        todos: ["c", "b"],
      });
    });

    it("should not update any todo if wrong index is given", () => {
      const mockState = { todos: ["a", "b"] };
      const mockAction = { type: UPDATE_TODO, data: { todo: "c", index: 2 } };
      expect(todoReducer(mockState, mockAction)).toEqual({
        todos: ["a", "b"],
      });
    });
  });

  describe("DELETE_TODO", () => {
    it("should delete data from state.todos", () => {
      const mockState = { todos: ["a", "b"] };
      const mockAction = { type: DELETE_TODO, data: 0 };
      expect(todoReducer(mockState, mockAction)).toEqual({
        todos: ["b"],
      });
    });

    it("should not delete any todo if wrong index is given", () => {
      const mockState = { todos: ["a", "b"] };
      const mockAction = { type: DELETE_TODO, data: 2 };
      expect(todoReducer(mockState, mockAction)).toEqual({
        todos: ["a", "b"],
      });
    });
  });
});
