import { Given, Then, When, But } from "cypress-cucumber-preprocessor/steps";

const loginUrl = 'https://sharepoint-lsf.web.app'

Given('User visit login page', () => {
    cy.visit(loginUrl)
    cy.url().should('include', '/login')
})
When('User validation input from users', () => {
    cy.contains('Email')
    cy.contains('Password')
})
Then('Check validity email as {string} and password as {string}', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
})
// Email address is invalid
Then('Check errors occurance if email is not valid', () => {
    cy.contains('Email address is invalid')
})


