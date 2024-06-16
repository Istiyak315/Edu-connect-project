describe('Login Page Tests', () => {
    beforeEach(() => {
        // Visit the login page before each test
        cy.visit('https://edu-connect-kappa.vercel.app/#')
    });

    it('Displays login page correctly', () => {
        // Check if the login page loads correctly by verifying the presence of the login form
        
        cy.contains("India's trusted education platform").should('be.visible')
        cy.contains('Login').should('be.visible')
        
    });

    it('Logs in successfully with valid credentials', () => {

        //click on login button
        cy.contains('Login').click()
        // Enter valid email and password
        cy.xpath('//input[@name="email"]').type('sistiyak315@gmail.com')
        cy.xpath('//input[@name="password"]').type('774583')
        // Submit the login form
        cy.xpath('//button[@type="submit"]').click()
        cy.wait(4000)

        // Verify that the login was successful by checking for an element visible only after login
        cy.contains('Home').should('be.visible')
    });

    it.only('Shows error message with invalid credentials', () => {
        // Enter invalid email and password
        cy.xpath('//input[@name="email"]').type('sistiyak@315gmail.com')
        cy.xpath('//input[@name="password"]').type('77x583')

        // Submit the login form
        cy.xpath('//button[@type="submit"]').click()
        cy.wait(4000)

        // Verify that an error message is displayed
        cy.contains('Invalid email or password').should('be.visible')
    });

    it.only('Requires email and password fields', () => {
        // Attempt to submit the form without entering email and password
        cy.xpath('//button[@type="submit"]').click()

        // Verify that validation messages are displayed
        cy.contains('Email is required').should('be.visible')
        cy.contains('Password is required').should('be.visible')
    });
});
