const DEV_URL = "http://localhost:3000";

describe("C(RUD pending) flow - ui-todo", () => {
  before(() => {
    cy.visit(DEV_URL);
  });

  it("should display header", () => {
    cy.get("[data-cy=header]").should("have.text", "TODO");
  });

  it("should be able to add todo", () => {
    cy.get("[data-cy=todo-input__input]").type("Buy Groceries");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Write TODO app");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Send masks to grandma");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-list]").should(
      "have.text",
      "Buy Groceries,Write TODO app,Send masks to grandma"
    );
  });
});
