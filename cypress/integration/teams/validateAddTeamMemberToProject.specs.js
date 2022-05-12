import * as cc from '../../pages/utils/commoncommands';
import * as userGenerator from '../../pages/utils/usergenerator';
import * as projectsData from '../../data/projects_data';
import * as loginPage from '../../pages/login';
import * as projectsPage from '../../pages/projects';

Cypress.on('fail', (error, runnable) => {
  console.log(`Test failed: ${error}`);
})

describe('Add Team Members', () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
    loginPage.login();
  })

  it('Add team member', () => {
    // Click on the project.
    projectsPage
      .clickOnProjectWithName(projectsData.projects.project_name)

    // Click on the team tab.
    projectsPage.clickOnTeamTab();

    // Click on 'Add Team Member'
    const user = userGenerator.generateUser();
    cy.log(`fName: ${user.fName}`);
    cy.log(`fName: ${user.lName}`);
    cy.log(`email: ${user.email}`);

    // Add a new team member
    projectsPage.addTeamMember(user);

    // Verify the new team member shows up.
    const dataTest = `[data-test="options-${user.email.toLowerCase()}"]`;
    cy.log(dataTest)
    cc
      .getElement(dataTest)
      .should('be.visible');
  })

  it('Add user with fields empty should not close the drawer', () => {
    // Click on the project.
    projectsPage
      .clickOnProjectWithName(projectsData.projects.project_name)

    // Click on the team tab.
    projectsPage.clickOnTeamTab();

    cc
    .getElementWithContainsText(
      projectsData.projects.add_team_member_button, 
      projectsData.projects.add_team_member_text)
    .click();

    // Click on the "Add Team Members" button
    projectsPage.clickOnAddTeamMember();

    cc
    .getElementWithContainsText(
      projectsData.team_member.add_team_members_button, 
      projectsData.team_member.add_team_members_text)
    .click();

    // Verify the add team member drawer is still there.
    cc.getElement('#addCustomerUsersForm')
      .should('be.visible')
  })

  it('Add team member with incorrect email address', () => {
    // Click on the project.
    projectsPage
      .clickOnProjectWithName(projectsData.projects.project_name)

    // Click on the team tab.
    projectsPage.clickOnTeamTab();

    // Click on 'Add Team Member'
    const validEmail = false;
    const user = userGenerator.generateUser(validEmail);
    cy.log(`fName: ${user.fName}`);
    cy.log(`fName: ${user.lName}`);
    cy.log(`email: ${user.email}`);

    // Add a new team member
    projectsPage.addTeamMember(user);

    // Verify the new team member does not show up
    // because of the invalid email.
    // Notice there is no ".com" at the end of the email.
    const dataTest = `[data-test="options-${user.email.toLowerCase()}"]`;
    cy.log(dataTest)
    cc
      .getElement(dataTest)
      .should('not.exist');
  })

})
