import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
const pactum = require('pactum');

const loginUrl = 'https://sharepoint-lsf.web.app'

Given('User visit login page', () => {
    let spec = pactum.spec();
    cy.visit(loginUrl)
    spec.get('http://httpbin.org/status/418');
    cy.url().should('include', '/login')
})
When('User enter email {string} in email field', (email) => {
    cy.get('#email').type(email)
})
When('User enter password {string} in password field', (password) => {
    cy.get('#password').type(password)
})
Then('Check email address is present in email field', () => {
    cy.get('#email').should('have.value', 'brkjohn.3@gmail.com')
})
Then('Check password is present in password field', () => {
    cy.get('#password').should('have.value', 'brkjohn.123')
})


