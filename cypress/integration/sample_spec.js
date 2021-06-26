describe('My first test', () => {
    it('Does not do to much', () => {
        expect(true).to.equal(true)
    })
    it('Visit lsf admin', () => {
        cy.visit('https://sharepoint-lsf.web.app/')
        // cy.debug()
        cy.url().should('include', '/account/login') // https://sharepoint-lsf.web.app/login
    })
    it('It will fails if user enter incorrect credential', () => {
        cy.get('#email').type('brkjohn.2@gmail.com')
        cy.get('#password').type('brkjohn.123')
        cy.contains('LOGIN').click()
        cy.contains('Invalid credentials')
    })
    it('Enter email and password login page', () => {
        cy.visit('https://sharepoint-lsf.web.app/')
        cy.url().should('include', '/account/login') // https://sharepoint-lsf.web.app/login
        cy.get('form');
        cy.get('#email').type('brkjohn.3@gmail.com').should('have.value', 'brkjohn.3@gmail.com')
        cy.get('#password').type('brkjohn.3').should('have.value','brkjohn.3')
        cy.contains('LOGIN').click()
    })
    it('Redirect to home page after login success', () => {
        cy.url().should('include','/')
        cy.getCookies()
    })
    it('Visit paralegal files page', () => {
        cy.contains('Files').click()
        cy.debug()
        cy.url('https://sharepoint-lsf.web.app/shared/files') /// try access url full login
    })

    it('Visit login page', () => {
        cy.visit('https://sharepoint-lsf.web.app/account/login')
        .findByPlaceholder(/email/)
        .type('brkjohn.3@gmail.com')
        .findByPlaceholder(/password/)
        .type('brkjohn.3')
        .findByText('LOG IN')
        .click()
        .url()
        .should('eq', '/')
    })
})