describe("Login Test", () => {
    it("Should load the login page", () => {
        cy.visit("http://localhost:3000")
        cy.get("[data-cy=login-text]").should("have.length", 1)
        cy.get("[data-cy=login-text").should("be.visible")
    })
    it("Should not allow user login when username is not provided", () => {
        cy.visit("http://localhost:3000")
        cy.get("[data-cy=password]").type("123456")
        cy.get("[data-cy=submit-button]").click()

        // verify user remains on login page (has not been logged in)
        cy.get("[data-cy=login-text]").should("have.length", 1)
        cy.get("[data-cy=homepage]").should("have.length", 0)

    })
})