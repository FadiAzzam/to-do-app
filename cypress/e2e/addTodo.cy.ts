describe("add todo", () => {
  it("can add todo", () => {
    cy.visit("http://localhost:3000/");

    // Add first todo
    cy.get("[data-testid=new-todo-add-button]").click({ force: true });
    cy.get("[data-testid=new-todo-add-text]")
      .type("new test todo")
      .should("have.value", "new test todo");
    cy.get("[data-testid=new-todo-add-button-save]").click({ force: true });

    // Add second todo
    cy.get("[data-testid=new-todo-add-button]").click({ force: true });
    cy.get("[data-testid=new-todo-add-text]")
      .type("new second todo")
      .should("have.value", "new second todo");
    cy.get("[data-testid=new-todo-add-button-save]").click({ force: true });

    // Add third todo
    cy.get("[data-testid=new-todo-add-button]").click({ force: true });
    cy.get("[data-testid=new-todo-add-text]")
      .type("new third todo")
      .should("have.value", "new third todo");
    cy.get("[data-testid=new-todo-add-button-save]").click({ force: true });
  });
});
