// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

// Don't fail the test in case of uncaught exception
import "./commands";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// Don't log all POST and GET XHR to cy log.
// BE MORE SPECIFIC IN WHITELISTING IN CASE YOU WILL NEED TO STUB ANY OF XHR
Cypress.Server.defaults({
  whitelist: xhr => {
    return xhr.method === "POST" || "GET";
  }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
