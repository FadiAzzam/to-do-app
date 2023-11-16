describe("add todo", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=new-todo-add-button]").click({ force: true });
    cy.get("[data-testid=new-todo-add-text]").type("new test todo");
    cy.get("[data-testid=new-todo-add-button-save]").click({ force: true });
  });
});
