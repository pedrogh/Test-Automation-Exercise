import * as cc from './utils/commoncommands';
import * as projectsData from '../data/projects_data';

export function projectWithNameExists(projectName) {
    cc
      .getElementWithText(projectsData.projects.project_entry, projectName)
      .should('be.visible');
}

export function clickOnProjectWithName(projectName) {
  cc
    .getElementWithText(projectsData.projects.project_entry, projectName)
    .click()
  cc.delay(3);
  // For some reason calling the code above 
  // directly into cy... worked.  Using the function
  // did not work until this delay was added.
}

export function clickOnTeamTab() {
  cc
    .getElement(projectsData.projects.team_tab)
    .click();
}

export function clickOnAddTeamMember() {
  cc.getElementWithText('button', '+ Add Team Member')
    .click()
}

export function clickOnAddAnotherTeamMember() {
  cc.getElementWithText('#addCustomerUsersForm button', 'Add another')
    .click()
}

export function addTeamMember(user) {
  cc
  .getElementWithContainsText(
    projectsData.projects.add_team_member_button, 
    projectsData.projects.add_team_member_text)
  .click();

  // The first name field
  cc
    .getElement(projectsData.team_member.first_name_field)
    .type(user.fName)

  // The last name field
  cc
    .getElement(projectsData.team_member.last_name_field)
    .type(user.lName)

  // The email field
  cc
    .getElement(projectsData.team_member.email_field)
    .type(user.email)

  // Click on the "Add Team Member" button
  cc
    .getElementWithContainsText(
      projectsData.team_member.add_team_members_button, 
      projectsData.team_member.add_team_members_text)
    .click();

  cc.delay(30);
}