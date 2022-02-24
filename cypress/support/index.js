import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message && err.message.includes("setting 'status'")) {
    return false;
  }
  return true;
});
