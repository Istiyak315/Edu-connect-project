describe('Edu Connect HomePage Tests', () => {

    // Function to log in
    function login() {
        cy.visit('https://edu-connect-kappa.vercel.app/')
        cy.contains('Login').click()
        cy.get('input[name="email"]').type('sistiyak315@gmail.com')
        cy.get('input[name="password"]').type('774583')
        cy.get('button[type="submit"]').click()
    }

    beforeEach(() => {
        // Visit the main page before each test
        cy.visit('https://edu-connect-kappa.vercel.app/')
    });

    it('Displays Homepage correctly', () => {
        // Check if the main page loads correctly by verifying the presence of key elements
        cy.contains("India's trusted education platform").should('be.visible')
        cy.contains('Login').should('be.visible')
    });

    it('Logs in successfully and navigates to the home page', () => {
        // Perform login
        login();

        // Verify that the login was successful by checking for an element visible only after login
        cy.contains('Home').should('be.visible')
    });

    it('Interacts with elements on the home page after login', () => {
        // Perform login
        login();

        // Verify that the login was successful
        cy.contains('Home').should('be.visible')

        // Interact with elements on the home page
        cy.get('button[type="button"]').eq(2).should('be.visible').click() 
        // Adjust the selector based on the actual button you want to click
        cy.scrollTo(0, 500)
        cy.contains('Follow Us').should('be.visible')
         // Adjust based on the actual section

        // Scroll back up
        cy.scrollTo(0, -500)
    });

});
