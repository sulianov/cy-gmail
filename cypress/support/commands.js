Cypress.Commands.add("login", () => {
  cy.visit("https://www.upwork.com/ab/account-security/login");
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
});

// Changing display: attribute
Cypress.Commands.add("changeDisplay", (element, state) => {
  cy.get(element).invoke("attr", "style", "display: " + state);
});

/*Cypress.Commands.add("logoutServices", () => {
  cy.server();
  cy.request({
    method: "POST",
    url: "https://www.upwork.com/api/o2/v1/logging/slavaulyanov.json",
    body:
      '{"id":"slavaulyanov","data":"{"data":[{"event_label":"log_out","recognized":"slavaulyanov","touch_screen":false,"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36","language":"uk-UA","platform":"Win32","user_uid":"617674178091950080","organization_uid":"617674178096144385","visitor_id":"188.163.41.60.1584884831294557","topnavbar_version":"1.3.3","screensize":"xl","referrer":"desktop"}],"timestamp":1584885735048,"event":"click","location":"find_work_home","referrer":"desktop","sublocation":"topnavbar","screensize":"xl"}"}'
  });
  cy.request({
    method: "POST",
    url: "https://www.upwork.com/ab/account-security/logout"
  });
});
*/
Cypress.Commands.add("setCookiesForLogin", () => {
  cy.setCookie("XSRF-TOKEN", "683b864e46e11cfb9b56d79240a0c598");

  cy.setCookie("APISID", "SeNS8FWn-XDSqszC/AMENxmjpSsqVOc3eN");
  cy.setCookie("CONSENT", "YES+UA.en+20171217-09-0");
  cy.setCookie("DV", "g5ZuS2pOeRgqQIaWaSHSPtBTD4mIDpfug7JWUYEb9wIAAAA");
  cy.setCookie(
    "GOOGLE_ABUSE_EXEMPTION",
    "ID=909e79688634fb23:TM=1584449224:C=r:IP=188.163.41.60-:S=APGng0tkS36gD_aihVcTPzOOQlu_WbmMwQ"
  );
  cy.setCookie("SSID", "AMqOrpUvThSPeizsX");
  cy.setCookie(
    "SID",
    "uwckgZ_YU549aR5UjAPkmaFuL-EaqZqPBeQyV5dj1cAvkVjfbnGV6yT7d3Em4KGcA5703A."
  );
  cy.setCookie("SAPISID", "uGuzftPFwW_iuo8I/Abr-lgU3jveKrnI-H");
  cy.setCookie("OGPC", "19016257-1:");
  cy.setCookie(
    "NID",
    "200=iy0HvANmFfqFat0-2wqOibiCLfMWcDUxrgzR-D7nc6jjeNc7WTUw3oPzItOfAVPPwxQMNkd-mT2jh5R7t4Or5juW8J20Tkwz4bciZgAFDnM7iSjNYXgIWCcXrTfutXJSZKRbkSAhJoCuinHoan07cHksejdZFmMqvApH-DvoBPQ"
  );
  cy.setCookie(
    "NID",
    "200=SmJ-p6xd7XhBRzwhBb4WQk6LsQfFDybAM2hV-Pl7_774-N-hslSqcSVMig39kpg5kSGB0rN8rwaiFd_INVyS_B7xhaXZeERRp4HmFPClGS3ZDGknURFQVT3AA2Qva3euLRJEMT_VY0yqh3K_WmVgjZIga594F6CX1buiLGjIlmU"
  );
  cy.setCookie(
    "IDE",
    "AHWqTUn8OTsVuFxz-7xnKOXjzMS3GgT18_I83ePVrtwhBfKlF00Q8seAFCchcJLN"
  );
  cy.setCookie("HSID", "AnC_HhJ7WB6egYaBA");
  cy.setCookie("_gat_UA-62227314-1", "1");
  cy.setCookie(
    "_px3",
    "5b7c0ebd70ae60acad63845e170a06a70b78ccde943245b64bfdd4204eed1740:h4SeDFHjExeSG1sn1B6ziep9JgAsg36QbgxAIz3SibgE+daluuC9t+6qbJOuSzpv+yjSqJe+ujWAWWFSY8gTgQ==:1000:22bVHgH2QRf0TAhRPbwRMV2/dZLUI69E0u/8nbDpsihuRsHOPGj599Qm/nIpoSz6VhI4ridYQ4vNN7y6iOgmF5Lcyae+MFRX/rfnJ917J8ySfzUy4Ha8vd2EO52Ibv+jOAmcdtdmLNZCmEcYVBJx2Pv6etlepgGPUYDP9o9C8Jg="
  );
  cy.setCookie("_pxff_tm", "1");
  cy.setCookie("_pxff_wa", "1");
  cy.setCookie("_pxvid", "ab34d131-684c-11ea-a944-4b303af4d14e");
  cy.setCookie(
    "io_token_7c6a6574-f011-4c9a-abdd-9894a102ccef",
    "rV9o4XoEguSUzFZfHUGOWvs0xQBZ9McNf+YxaxKQLFo="
  );
  cy.setCookie("spt", "c58948ec-bbe4-4b5c-bd2b-0674b3581bc0");
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//seperate headers propertie into stad-alone tests
