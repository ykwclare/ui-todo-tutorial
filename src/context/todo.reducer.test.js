const { ADD_TODO } = require("./todo.actions");
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
});
