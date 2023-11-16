describe("edit todo", () => {
  it("passes", () => {
    cy.get("[data-testid=new-todo-edit-button]").click({ force: true });
    cy.get("[data-testid=new-todo-edit-text]").type("edit the new test todo");
    cy.get("[data-testid=new-todo-edit-button-save]").click({ force: true });
  });
});
