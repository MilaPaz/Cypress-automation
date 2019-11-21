/// <reference types="Cypress"/>

describe("Elements Tests", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  it("Should clear input field after input", () => {
    cy.get(".form-group")
      .find("input[type=email]")
      .type("email@email.com");

    cy.get(".form-group")
      .find("input[type=email]")
      .should("have.value", "email@email.com");
    cy.get(".form-group")
      .find("input[type=email]")
      .clear();
    cy.get(".form-group")
      .find("input[type=email]")
      .should("not.have.value", "email@email.com");
  });

  it("Should double-click an element to receive input", () => {
    cy.get(".action-div")
      .dblclick()
      .should("not.be.visible");
    cy.get(".action-input-hidden").type("some text");
  });

  it("Should check box1 from list", () => {
    cy.get('.action-checkboxes [type="checkbox"]')
      .check(["checkbox1"])
      .should("be.checked");
  });
});
