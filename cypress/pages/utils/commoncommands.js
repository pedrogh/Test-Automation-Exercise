export function delay(seconds) {
  cy.wait(seconds * 1000);
}

export function visitPage(url) {
  cy.visit(url);
}

export function getElement(elementName) {
  return cy.get(elementName);
}

export function clickOnElement(elementName) {
  cy.click(elementName);
}

export function getElementWithText(element, text) {
  return cy.get(element)
    .contains(text)
}

export function getElementWithContainsText(element, text) {
  return cy.contains(element, text)
}

export function clickOnElementWithText(element, text) {
  getElementWithText(element, text)
    .click();
}