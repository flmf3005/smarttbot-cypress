import './commands';

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message && err.message.includes("setting 'status'")) {
    return false;
  }
  return true;
});
