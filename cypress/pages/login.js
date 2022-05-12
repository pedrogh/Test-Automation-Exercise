import * as cc from './utils/commoncommands';
import * as loginData from '../data/login_data'
import * as projectsData from '../data/projects_data';
import * as projectsPage from './projects';

export function visitLoginPage() {
  cc.visitPage('/auth/login');
}

export function login() {
  cy.get(loginData.login.email)
    .type(Cypress.env('GCX_EMAIL'));
  cy.get(loginData.login.password)
    .type(Cypress.env('CYPRESS_GCX_PASSWORD'));
  cy.get(loginData.login.login_button)
  .contains(loginData.login.login_button_text)
    .click();

  projectsPage.projectWithNameExists(projectsData.projects.project_name);
}
