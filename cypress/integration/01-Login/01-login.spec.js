describe("Login cases", () => {
  beforeEach(() => {
    cy.visit("https://www.upwork.com/ab/account-security/login");
  });

  it("Verify happy login", () => {
    cy.fixture("testData").then(td => {
      cy.get("#login_username")
        .type(td.email)
        .type("{enter}");
      cy.get("#login_password").type(td.password);
      cy.get("[data-ng-click='submit($event)']").click();
      /*cy.get("[data-auth-model='securityAnswer']")
        .type(td.secAnswer)
        .type("{enter}");*/
    });
    cy.get("[data-cy='nav-left']").should("be.visible");
    cy.get("[data-cy='nav-right']").should("be.visible");
    cy.get("#my-job-feed-topic-link").should("be.visible");

    cy.get("[data-cy='user-menu']").click();
    cy.get("[data-cy='logout-trigger']").click();
  });

  it("Verify incorrect username/email validate", () => {
    const errValid = [
      "test",
      "123",
      "!@#",
      "test@",
      "test.com",
      " ",
      "test ",
      "@mail.com"
    ];

    errValid.forEach(item => {
      cy.get("#login_username")
        .type(item)
        .type("{enter}")
        .clear();
      cy.contains("Oops! Username is incorrect.").should("be.visible");
    });
  });

  it("Verify not existing account", () => {
    cy.get("#login_username")
      .type("test1@email.com")
      .type("{enter}");
    cy.get("#login_password")
      .type("password")
      .type("{enter}");
    cy.contains("Oops! Password is incorrect.").should("be.visible");
  });

  it("Verify incorrect password", () => {
    cy.fixture("testData").then(td => {
      cy.get("#login_username")
        .type(td.email)
        .type("{enter}");
      cy.get("#login_password").type("{enter}");
      cy.contains("This field is required").should("be.visible");

      cy.get("#login_password")
        .type("password")
        .type("{enter}");
      cy.contains("Oops! Password is incorrect.").should("be.visible");
    });
  });

  it("Verify 'Not you' button", () => {
    cy.get("#login_username")
      .type("test1@email.com")
      .type("{enter}");
    cy.changeDisplay(
      ".clearfix.d-block.d-md-none.m-md-top",
      "block !important"
    );

    cy.contains("Not you?")
      .should("be.visible")
      .click({ multiple: true });
    cy.contains("Log in and get to work").should("be.visible");
  });

  it("Verify 'Forgot Password' button", () => {
    cy.fixture("testData").then(td => {
      cy.get("#login_username")
        .type("test1@email.com")
        .type("{enter}");
      cy.contains("Forgot password?").click();
      cy.contains("Reset your password").should("be.visible");
      cy.get("#forgotPassword_username").type(td.email);
      //cy.get(".recaptcha-checkbox-border").click();
      cy.contains("Send Reset Email").click();
      cy.contains("This field is required").should("be.visible");
    });
  });
});
