describe("Main Test", () => {
  it("should test the auth flow", () => {
    cy.visit("/");

    cy.url().should("include", "app.pulsarml.com");

    cy.get("body").should("be.visible");

    // implement login flow here
    // (ask for the email and password if not provided)

    // you should get here after login
    // cy.url().should("include", "/dashboard");
    // cy.get('[data-testid="main-dashboard-page"]').should("exist");
  });

  it("should test the 3 cards in the dashboard", () => {
    // implement the test for the 3 cards
    // use the login flow command to login
  });
});
