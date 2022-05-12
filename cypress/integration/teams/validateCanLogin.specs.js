import * as cc from '../../pages/utils/commoncommands';
import * as loginData from '../../data/login_data'
import * as projectsData from '../../data/projects_data'

describe('Login', () => {
  beforeEach(() => {
    cc.visitPage(Cypress.config('baseUrl')+'/auth/login');
  })

  it('Login', () => {
    cy.get(loginData.login.email)
      .type(Cypress.env('GCX_EMAIL'));
    cy.get(loginData.login.password)
      .type(Cypress.env('GCX_PASSWORD'));
    cy.get(loginData.login.login_button)
      .contains(loginData.login.login_button_text)
      .click();

     // We use the project's page in the other test.
    cy.get(projectsData.projects.project_entry)
      .contains(projectsData.projects.project_name)
  })
})
