describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should load the login page", () => {
    cy.get("[data-cy=login-text]").should("exist");
    cy.get("[data-cy=login-text").should("be.visible");
    cy.get("[data-cy=login-text]").should("have.length", 1);
  });

  it("Should not allow user login when username is not provided", () => {
    cy.get("[data-cy=password]").type("123456");
    cy.get("[data-cy=submit-button]").click();

    // verify user remains on login page (has not been logged in)
    cy.get("[data-cy=login-text]").should("have.length", 1);
    cy.get("[data-cy=homepage]").should("have.length", 0);
  });

  it("Should not allow user login when password is not provided", () => {
    cy.get("[data-cy=email]").type("email@email.com");
    cy.get("[data-cy=submit-button]").click();

    // verify user remains on login page (has not been logged in)
    cy.get("[data-cy=login-text]").should("have.length", 1);
    cy.get("[data-cy=homepage]").should("have.length", 0);
  });

  it("Should login user to the home page with valid credentials", () => {
    cy.get("[data-cy=email]").type("email@email.com");
    cy.get("[data-cy=password]").type("123456");
    cy.get("[data-cy=submit-button]").click();

    // verify user has navigated to home page (logged in)
    cy.get("[data-cy=logoutBtn]").should("be.visible");
    cy.get("[data-cy=logoutBtn]").should("have.class", "btn-sm");
    cy.get("[data-cy=login-text]").should("not.exist");
  });

  it("Should contain valid input field values", () => {
    cy.get("[data-cy=email]").type("email2@email.com");
    cy.get("[data-cy=email]").should("have.value", "email2@email.com");

    cy.get("[data-cy=password]").type("123456");
    cy.get("[data-cy=password]").should("have.value", "123456");
  });

  it("Should logout user successfully", () => {
    cy.get("[data-cy=email]").type("email@email.com");
    cy.get("[data-cy=password]").type("123456");
    cy.get("[data-cy=submit-button]").click();

    cy.get("[data-cy=logoutBtn]").should("be.visible");
    cy.get("[data-cy=logoutBtn]")
      .should("contain", "Sign Out")
      .click();

    // verify user is logged out
    cy.get("[data-cy=logoutText]").should(
      "contain",
      "Thank you. You are now logged out."
    );
  });
});
