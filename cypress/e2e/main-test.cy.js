describe("Main Test", () => {
  it("should test the auth flow", () => {
    cy.visit("/");

    cy.url().should("include", "app.pulsarml.com");

    cy.get("body").should("be.visible");

    // implement login flow here
    // (ask for the email and password if not provided)
    // you should get here after login
    // cy.url().should("include", "/realtime");
  });

  it("should make sure the machine list loads", () => {});
});
