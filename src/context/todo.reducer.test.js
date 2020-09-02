const { ADD_TODO, UPDATE_TODO, DELETE_TODO } = require("./todo.actions");
const { todoReducer } = require("./todo.reducer");

describe("todo.reducer", () => {
  it("should add data to state.todos for type ADD_TODO", () => {
    const mockState = { todos: {} };
    const mockAction = { type: ADD_TODO, data: { id: 0, description: "new todo!" } };
    expect(todoReducer(mockState, mockAction)).toEqual({
      todos: {
        "0": {
          description: "new todo!",
        },
      },
    });
  });

  it("should do nothing for unrecognised type", () => {
    const mockState = { todos: {} };
    const mockAction = { type: "WRONG_TYPE", data: { id: 0, description: "new todo!" } };
    expect(todoReducer(mockState, mockAction)).toEqual(mockState);
  });

  fdescribe("UPDATE_TODO", () => {
    it("should update data of specific id in state.todos", () => {
      const mockState = {
        todos: {
          "0": { description: "a" },
          "1": { description: "b" },
        },
      };
      const mockAction = { type: UPDATE_TODO, data: { id: 0, description: "c" } };
      expect(todoReducer(mockState, mockAction)).toEqual({
        todos: {
          "0": { description: "c" },
          "1": { description: "b" },
        },
      });
    });

    it("should not update any todo if wrong id is given", () => {
      const mockState = {
        todos: {
          "0": { description: "a" },
          "1": { description: "b" },
        },
      };
      const mockAction = { type: UPDATE_TODO, data: { id: 2, description: "c" } };
      expect(todoReducer(mockState, mockAction)).toEqual({
        todos: {
          "0": { description: "a" },
          "1": { description: "b" },
        },
      });
    });
  });

  describe("DELETE_TODO", () => {
    it("should delete data from state.todos", () => {
      const mockState = {
        todos: {
          "0": { description: "a" },
          "1": { description: "b" },
        },
      };
      const mockAction = { type: DELETE_TODO, data: 0 };
      expect(todoReducer(mockState, mockAction)).toEqual({
        todos: {
          "1": { description: "b" },
        },
      });
    });

    it("should not delete any todo if wrong index is given", () => {
      const mockState = {
        todos: {
          "0": { description: "a" },
          "1": { description: "b" },
        },
      };
      const mockAction = { type: DELETE_TODO, data: 2 };
      expect(todoReducer(mockState, mockAction)).toEqual({
        todos: {
          "0": { description: "a" },
          "1": { description: "b" },
        },
      });
    });
  });
});
