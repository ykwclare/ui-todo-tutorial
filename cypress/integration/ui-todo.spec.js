const DEV_URL = "http://localhost:3000";

describe("CRUD flow - ui-todo", () => {
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
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Buy GroceriesWrite TODO appSend masks to grandma"
    );
  });

  it("should be able to update todo", () => {
    cy.get("[data-cy=todo-task__button-update").first().click();
    cy.get("[data-cy=todo-task__input]").clear();
    cy.get("[data-cy=todo-task__input]").type("Sell Groceries");
    cy.get("[data-cy=todo-task__button-update").first().click();
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Sell GroceriesWrite TODO appSend masks to grandma"
    );
  });

  it("should be able to delete todo", () => {
    cy.get("[data-cy=todo-task__button-delete").eq(1).click();
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Sell GroceriesSend masks to grandma"
    );
  });

  it("should not be able to delete todo while it is updating", () => {
    cy.get("[data-cy=todo-task__button-update").first().click();
    cy.get("[data-cy=todo-task__button-delete").first().should("be.disabled");
  });
});
